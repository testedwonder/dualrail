from __future__ import annotations

import argparse
import html
import os
import re
from dataclasses import dataclass
from pathlib import Path


CONTENT_KINDS = {"concept", "definition", "algorithm", "example"}
DERIVED_FIELDS = (
    "complexity_depth",
    "complexity_prerequisite_count",
    "complexity_score",
    "complexity_wavelength_nm",
    "complexity_frequency_thz",
    "complexity_color",
    "understanding",
)
STUDY_STATUS_START = "<!-- study-status:start -->"
STUDY_STATUS_END = "<!-- study-status:end -->"
LEARNING_NAV_START = "<!-- learning-navigation:start -->"
LEARNING_NAV_END = "<!-- learning-navigation:end -->"
SPECTRAL_ANCHORS = (
    (380, (143, 0, 255)),
    (450, (0, 0, 255)),
    (490, (0, 255, 255)),
    (530, (0, 255, 0)),
    (580, (255, 255, 0)),
    (700, (255, 0, 0)),
)


@dataclass
class Page:
    path: Path
    relative_path: str
    lines: list[str]
    closing_index: int
    metadata: dict[str, str]


@dataclass(frozen=True)
class Complexity:
    depth: int
    prerequisite_count: int
    score: float
    wavelength_nm: int
    frequency_thz: float
    color: str


def _parse_inline_list(value: str) -> list[str]:
    if not value.startswith("[") or not value.endswith("]"):
        raise ValueError(f"expected an inline list, got: {value}")
    contents = value[1:-1].strip()
    if not contents:
        return []
    return [item.strip().strip("'\"") for item in contents.split(",")]


def _read_pages(knowledge_root: Path) -> dict[Path, Page]:
    pages: dict[Path, Page] = {}
    for path in sorted(knowledge_root.rglob("*.md")):
        resolved_path = path.resolve()
        lines = path.read_text(encoding="utf-8").splitlines()
        relative_path = path.relative_to(knowledge_root).as_posix()
        if not lines or lines[0].strip() != "---":
            raise ValueError(f"{relative_path}: missing opening metadata delimiter")
        try:
            closing_index = next(
                index
                for index, line in enumerate(lines[1:], start=1)
                if line.strip() == "---"
            )
        except StopIteration as error:
            raise ValueError(
                f"{relative_path}: missing closing metadata delimiter"
            ) from error

        metadata: dict[str, str] = {}
        for line in lines[1:closing_index]:
            match = re.match(r"^([A-Za-z_][\w-]*):\s*(.*)$", line)
            if match:
                metadata[match.group(1)] = match.group(2).strip()
        pages[resolved_path] = Page(
            resolved_path,
            relative_path,
            lines,
            closing_index,
            metadata,
        )
    return pages


def _content_pages(pages: dict[Path, Page]) -> dict[Path, Page]:
    return {
        path: page
        for path, page in pages.items()
        if page.metadata.get("kind") in CONTENT_KINDS
    }


def _prerequisites(page: Page, knowledge_root: Path) -> list[Path]:
    raw_value = page.metadata.get("prerequisites")
    if raw_value is None:
        raise ValueError(f"{page.relative_path}: missing prerequisites metadata")
    return [
        (knowledge_root / Path(reference)).resolve()
        for reference in _parse_inline_list(raw_value)
    ]


def calculate_complexities(repository_root: Path) -> dict[Path, Complexity]:
    knowledge_root = (repository_root / "knowledge").resolve()
    pages = _read_pages(knowledge_root)
    content_pages = _content_pages(pages)
    prerequisite_graph: dict[Path, list[Path]] = {}
    for path, page in content_pages.items():
        prerequisites = _prerequisites(page, knowledge_root)
        for prerequisite in prerequisites:
            if prerequisite not in content_pages:
                raise ValueError(
                    f"{page.relative_path}: prerequisite is not a content page: "
                    f"{prerequisite}"
                )
        prerequisite_graph[path] = prerequisites

    depths: dict[Path, int] = {}
    visiting: list[Path] = []

    def depth(path: Path) -> int:
        if path in depths:
            return depths[path]
        if path in visiting:
            cycle_start = visiting.index(path)
            cycle = visiting[cycle_start:] + [path]
            raise ValueError(
                "complexity graph cycle: "
                + " -> ".join(content_pages[item].relative_path for item in cycle)
            )
        visiting.append(path)
        prerequisites = prerequisite_graph[path]
        value = 0 if not prerequisites else 1 + max(depth(item) for item in prerequisites)
        visiting.pop()
        depths[path] = value
        return value

    for path in content_pages:
        depth(path)

    maximum_depth = max(depths.values(), default=0)
    maximum_prerequisites = max(
        (len(items) for items in prerequisite_graph.values()), default=0
    )
    complexities: dict[Path, Complexity] = {}
    for path in content_pages:
        page_depth = depths[path]
        prerequisite_count = len(prerequisite_graph[path])
        depth_ratio = page_depth / maximum_depth if maximum_depth else 0.0
        prerequisite_ratio = (
            prerequisite_count / maximum_prerequisites
            if maximum_prerequisites
            else 0.0
        )
        score = round(10 * (0.8 * depth_ratio + 0.2 * prerequisite_ratio), 2)
        wavelength_nm = round(700 - 320 * score / 10)
        frequency_thz = round(299_792.458 / wavelength_nm, 1)
        complexities[path] = Complexity(
            page_depth,
            prerequisite_count,
            score,
            wavelength_nm,
            frequency_thz,
            wavelength_to_hex(wavelength_nm),
        )
    return complexities


def wavelength_to_hex(wavelength_nm: int) -> str:
    wavelength_nm = min(max(wavelength_nm, 380), 700)
    for index in range(len(SPECTRAL_ANCHORS) - 1):
        lower_nm, lower_rgb = SPECTRAL_ANCHORS[index]
        upper_nm, upper_rgb = SPECTRAL_ANCHORS[index + 1]
        if lower_nm <= wavelength_nm <= upper_nm:
            ratio = (wavelength_nm - lower_nm) / (upper_nm - lower_nm)
            channels = tuple(
                round(lower + ratio * (upper - lower))
                for lower, upper in zip(lower_rgb, upper_rgb)
            )
            return "#" + "".join(f"{channel:02x}" for channel in channels)
    raise AssertionError("spectral anchors do not cover the visible range")


def _text_color(background: str) -> str:
    red, green, blue = (
        int(background[index : index + 2], 16) for index in (1, 3, 5)
    )
    luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue
    return "#111111" if luminance >= 150 else "#ffffff"


def _understanding(page: Page) -> int:
    raw_value = page.metadata.get("understanding", "0")
    try:
        value = int(raw_value)
    except ValueError as error:
        raise ValueError(
            f"{page.relative_path}: understanding must be an integer from 0 to 10"
        ) from error
    if not 0 <= value <= 10:
        raise ValueError(
            f"{page.relative_path}: understanding must be an integer from 0 to 10"
        )
    return value


def _study_status_block(
    title: str, complexity: Complexity, understanding: int
) -> list[str]:
    text_color = _text_color(complexity.color)
    safe_title = html.escape(title or "topic", quote=True)
    return [
        STUDY_STATUS_START,
        (
            f'<div class="study-status" data-complexity="{complexity.score}" '
            f'data-wavelength-nm="{complexity.wavelength_nm}">'
        ),
        (
            f'  <span style="display:inline-block;padding:0.2rem 0.45rem;'
            f'border:1px solid #333;background:{complexity.color};color:{text_color};">'
            f"Complexity {complexity.score}/10 | {complexity.wavelength_nm} nm | "
            f"{complexity.frequency_thz} THz</span>"
        ),
        (
            f'  <label>Understanding <input type="number" min="0" max="10" '
            f'value="{understanding}" aria-label="Understanding rating for '
            f'{safe_title}"> / 10</label>'
        ),
        "</div>",
        STUDY_STATUS_END,
    ]


def _navigation_block(
    page: Page, pages: dict[Path, Page], knowledge_root: Path
) -> list[str]:
    lines = [LEARNING_NAV_START, "## Learning navigation", ""]
    labels = (
        ("prerequisites", "Prerequisites"),
        ("next_steps", "Next steps"),
        ("related", "Related"),
    )
    for field, label in labels:
        raw_value = page.metadata.get(field)
        if raw_value is None:
            raise ValueError(f"{page.relative_path}: missing {field} metadata")
        references = _parse_inline_list(raw_value)
        links: list[str] = []
        for reference in references:
            target = (knowledge_root / Path(reference)).resolve()
            target_page = pages.get(target)
            if target_page is None:
                raise ValueError(
                    f"{page.relative_path}: unresolved {field} page: {reference}"
                )
            relative_target = os.path.relpath(target, page.path.parent).replace("\\", "/")
            title = target_page.metadata.get("title", target.stem)
            links.append(f"[{title}]({relative_target})")
        value = ", ".join(links) if links else "None"
        lines.append(f"- **{label}:** {value}")
    lines.extend(["", LEARNING_NAV_END])
    return lines


def _remove_generated_block(
    body_lines: list[str], start_marker: str, end_marker: str, relative_path: str
) -> None:
    if start_marker not in body_lines:
        return
    start_index = body_lines.index(start_marker)
    try:
        end_index = body_lines.index(end_marker, start_index)
    except ValueError as error:
        raise ValueError(
            f"{relative_path}: incomplete generated block '{start_marker}'"
        ) from error
    remove_start = start_index
    while remove_start > 0 and not body_lines[remove_start - 1].strip():
        remove_start -= 1
    remove_end = end_index + 1
    while remove_end < len(body_lines) and not body_lines[remove_end].strip():
        remove_end += 1
    del body_lines[remove_start:remove_end]


def _render_page(
    page: Page,
    complexity: Complexity,
    pages: dict[Path, Page],
    knowledge_root: Path,
) -> str:
    understanding = _understanding(page)
    metadata_lines = [
        line
        for line in page.lines[1 : page.closing_index]
        if not any(line.startswith(f"{field}:") for field in DERIVED_FIELDS)
    ]
    metadata_lines.extend(
        [
            f"complexity_depth: {complexity.depth}",
            f"complexity_prerequisite_count: {complexity.prerequisite_count}",
            f"complexity_score: {complexity.score}",
            f"complexity_wavelength_nm: {complexity.wavelength_nm}",
            f"complexity_frequency_thz: {complexity.frequency_thz}",
            f'complexity_color: "{complexity.color}"',
            f"understanding: {understanding}",
        ]
    )

    body_lines = page.lines[page.closing_index + 1 :]
    _remove_generated_block(
        body_lines, STUDY_STATUS_START, STUDY_STATUS_END, page.relative_path
    )
    _remove_generated_block(
        body_lines, LEARNING_NAV_START, LEARNING_NAV_END, page.relative_path
    )

    heading_index = next(
        (
            index
            for index, line in enumerate(body_lines)
            if re.match(r"^#\s+", line)
        ),
        None,
    )
    if heading_index is None:
        raise ValueError(f"{page.relative_path}: content page has no H1 heading")
    insert_index = heading_index + 1
    while insert_index < len(body_lines) and not body_lines[insert_index].strip():
        del body_lines[insert_index]
    block = [
        "",
        *_study_status_block(
            page.metadata.get("title", ""), complexity, understanding
        ),
        "",
        *_navigation_block(page, pages, knowledge_root),
        "",
    ]
    body_lines[insert_index:insert_index] = block

    return "\n".join(["---", *metadata_lines, "---", *body_lines]).rstrip() + "\n"


def planned_updates(repository_root: Path) -> list[tuple[Path, str]]:
    repository_root = repository_root.resolve()
    knowledge_root = repository_root / "knowledge"
    pages = _read_pages(knowledge_root)
    complexities = calculate_complexities(repository_root)
    updates: list[tuple[Path, str]] = []
    for path, complexity in sorted(
        complexities.items(), key=lambda item: item[0].as_posix()
    ):
        rendered = _render_page(
            pages[path], complexity, pages, knowledge_root
        )
        if rendered != path.read_text(encoding="utf-8"):
            updates.append((path, rendered))
    return updates


def update_complexity(repository_root: Path, *, write: bool = True) -> list[Path]:
    updates = planned_updates(repository_root)
    if write:
        for path, rendered in updates:
            path.write_text(rendered, encoding="utf-8")
    return [path for path, _ in updates]


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Calculate and render knowledge-topic complexity metadata."
    )
    parser.add_argument(
        "--root",
        type=Path,
        default=Path(__file__).resolve().parents[1],
        help="Repository root containing knowledge/.",
    )
    parser.add_argument(
        "--check",
        action="store_true",
        help="Report stale generated complexity data without editing files.",
    )
    arguments = parser.parse_args()
    try:
        updates = update_complexity(arguments.root, write=not arguments.check)
    except (OSError, UnicodeError, ValueError) as error:
        print(f"ERROR: {error}")
        return 1

    if arguments.check and updates:
        for path in updates:
            print(f"STALE: {path.relative_to(arguments.root).as_posix()}")
        return 1
    action = "checked" if arguments.check else "updated"
    print(f"PASS: {action} complexity metadata for {len(updates)} changed page(s).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

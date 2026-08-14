from __future__ import annotations

import argparse
import re
import subprocess
import sys
from collections import defaultdict, deque
from dataclasses import dataclass
from pathlib import Path
from urllib.parse import unquote, urlsplit


REQUIRED_FIELDS = ("title", "kind", "status", "prerequisites", "source_files")
LIST_FIELDS = ("prerequisites", "source_files", "learning_path", "executable_examples")
ALLOWED_KINDS = {"concept", "definition", "algorithm", "example", "index"}
ALLOWED_STATUSES = {"draft", "verified", "blocked"}
CONTENT_KINDS = {"concept", "definition", "algorithm", "example"}
LINK_PATTERN = re.compile(r"!?\[[^\]]*\]\(([^)]+)\)")
EXPLICIT_ANCHOR_PATTERN = re.compile(
    r"<a\s+[^>]*\bid=[\"']([^\"']+)[\"'][^>]*>", re.IGNORECASE
)
HEADING_PATTERN = re.compile(r"^#{1,6}\s+(.+?)\s*#*\s*$", re.MULTILINE)


@dataclass
class Document:
    path: Path
    relative_path: str
    metadata: dict[str, str | list[str]]
    body: str


@dataclass
class ValidationResult:
    errors: list[str]
    checked_markdown_files: int
    executed_examples: int


def _display_path(path: Path, repository_root: Path) -> str:
    try:
        return path.relative_to(repository_root).as_posix()
    except ValueError:
        return path.as_posix()


def _parse_inline_list(value: str) -> list[str] | None:
    if not value.startswith("[") or not value.endswith("]"):
        return None

    contents = value[1:-1].strip()
    if not contents:
        return []

    items: list[str] = []
    for raw_item in contents.split(","):
        item = raw_item.strip()
        if not item:
            return None
        if len(item) >= 2 and item[0] == item[-1] and item[0] in {"'", '"'}:
            item = item[1:-1]
        items.append(item)
    return items


def _parse_document(path: Path, knowledge_root: Path) -> tuple[Document, list[str]]:
    relative_path = path.relative_to(knowledge_root).as_posix()
    errors: list[str] = []
    try:
        text = path.read_text(encoding="utf-8")
    except (OSError, UnicodeError) as error:
        return Document(path, relative_path, {}, ""), [
            f"{relative_path}: cannot read UTF-8 Markdown: {error}"
        ]

    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        return Document(path, relative_path, {}, text), [
            f"{relative_path}: missing opening metadata delimiter"
        ]

    try:
        closing_index = next(
            index for index, line in enumerate(lines[1:], start=1) if line.strip() == "---"
        )
    except StopIteration:
        return Document(path, relative_path, {}, ""), [
            f"{relative_path}: missing closing metadata delimiter"
        ]

    metadata: dict[str, str | list[str]] = {}
    for line_number, line in enumerate(lines[1:closing_index], start=2):
        if not line.strip():
            continue
        if ":" not in line:
            errors.append(
                f"{relative_path}:{line_number}: metadata must use 'key: value'"
            )
            continue
        key, raw_value = line.split(":", maxsplit=1)
        key = key.strip()
        value = raw_value.strip()
        if not key or not value:
            errors.append(f"{relative_path}:{line_number}: empty metadata key or value")
            continue
        if key in metadata:
            errors.append(f"{relative_path}:{line_number}: duplicate metadata key '{key}'")
            continue
        if key in LIST_FIELDS:
            parsed_list = _parse_inline_list(value)
            if parsed_list is None:
                errors.append(
                    f"{relative_path}:{line_number}: '{key}' must be an inline list"
                )
                continue
            metadata[key] = parsed_list
        else:
            if len(value) >= 2 and value[0] == value[-1] and value[0] in {"'", '"'}:
                value = value[1:-1]
            metadata[key] = value

    for field in REQUIRED_FIELDS:
        if field not in metadata:
            errors.append(f"{relative_path}: missing required metadata field '{field}'")

    kind = metadata.get("kind")
    if isinstance(kind, str) and kind not in ALLOWED_KINDS:
        errors.append(f"{relative_path}: unsupported kind '{kind}'")

    status = metadata.get("status")
    if isinstance(status, str) and status not in ALLOWED_STATUSES:
        errors.append(f"{relative_path}: unsupported status '{status}'")

    body = "\n".join(lines[closing_index + 1 :]).strip()
    if not body:
        errors.append(f"{relative_path}: generated page is empty")
    elif not HEADING_PATTERN.search(body):
        errors.append(f"{relative_path}: generated page has no Markdown heading")

    if kind in CONTENT_KINDS and metadata.get("source_files") == []:
        errors.append(f"{relative_path}: content page has no source provenance")

    return Document(path, relative_path, metadata, body), errors


def _heading_slug(heading: str) -> str:
    heading = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", heading)
    heading = re.sub(r"<[^>]+>", "", heading)
    heading = re.sub(r"[`*_~]", "", heading).strip().casefold()
    heading = re.sub(r"[^\w\- ]", "", heading)
    return re.sub(r"\s+", "-", heading)


def _anchors_for(document: Document) -> set[str]:
    anchors = set(EXPLICIT_ANCHOR_PATTERN.findall(document.body))
    occurrences: defaultdict[str, int] = defaultdict(int)
    for heading in HEADING_PATTERN.findall(document.body):
        base_slug = _heading_slug(heading)
        if not base_slug:
            continue
        occurrence = occurrences[base_slug]
        occurrences[base_slug] += 1
        anchors.add(base_slug if occurrence == 0 else f"{base_slug}-{occurrence}")
    return anchors


def _within(path: Path, parent: Path) -> bool:
    try:
        path.relative_to(parent)
        return True
    except ValueError:
        return False


def _resolve_knowledge_reference(
    reference: str,
    knowledge_root: Path,
    relative_path: str,
    field: str,
    errors: list[str],
) -> Path | None:
    if "#" in reference or "?" in reference:
        errors.append(
            f"{relative_path}: '{field}' reference must be a plain knowledge-root-relative path: {reference}"
        )
        return None
    if Path(reference).is_absolute() or re.match(r"^[A-Za-z]:", reference):
        errors.append(f"{relative_path}: '{field}' reference is not relative: {reference}")
        return None

    resolved = (knowledge_root / Path(reference)).resolve()
    if not _within(resolved, knowledge_root):
        errors.append(f"{relative_path}: '{field}' escapes knowledge/: {reference}")
        return None
    return resolved


def _validate_links(
    documents: dict[Path, Document],
    repository_root: Path,
    knowledge_root: Path,
    errors: list[str],
) -> dict[Path, set[Path]]:
    edges = {path: set() for path in documents}
    anchor_cache: dict[Path, set[str]] = {}

    for document in documents.values():
        for raw_destination in LINK_PATTERN.findall(document.body):
            destination = raw_destination.strip()
            if destination.startswith("<") and destination.endswith(">"):
                destination = destination[1:-1]
            split = urlsplit(destination)
            if split.scheme or destination.startswith("//"):
                continue

            path_text = unquote(split.path)
            if path_text and (
                Path(path_text).is_absolute() or re.match(r"^[A-Za-z]:", path_text)
            ):
                errors.append(
                    f"{document.relative_path}: local link is not relative: {destination}"
                )
                continue

            target = (
                document.path
                if not path_text
                else (document.path.parent / Path(path_text)).resolve()
            )
            if not target.exists():
                errors.append(
                    f"{document.relative_path}: broken local link '{destination}'"
                )
                continue

            if target in documents:
                edges[document.path].add(target)

            if split.fragment and target.suffix.casefold() == ".md":
                if target in documents:
                    target_document = documents[target]
                else:
                    target_document, parse_errors = _parse_document(target, target.parent)
                    if parse_errors and not target_document.body:
                        errors.append(
                            f"{document.relative_path}: cannot inspect anchor in {_display_path(target, repository_root)}"
                        )
                        continue
                anchors = anchor_cache.setdefault(target, _anchors_for(target_document))
                fragment = unquote(split.fragment)
                if fragment not in anchors:
                    errors.append(
                        f"{document.relative_path}: missing anchor '#{fragment}' in {_display_path(target, repository_root)}"
                    )

    return edges


def _validate_sources(
    documents: dict[Path, Document],
    repository_root: Path,
    base_root: Path,
    errors: list[str],
) -> None:
    for document in documents.values():
        source_files = document.metadata.get("source_files")
        if not isinstance(source_files, list):
            continue
        for reference in source_files:
            if Path(reference).is_absolute() or re.match(r"^[A-Za-z]:", reference):
                errors.append(
                    f"{document.relative_path}: source file is not repository-relative: {reference}"
                )
                continue
            source_path = (repository_root / Path(reference)).resolve()
            if not _within(source_path, base_root):
                errors.append(
                    f"{document.relative_path}: source file is outside base/: {reference}"
                )
            elif not source_path.is_file():
                errors.append(
                    f"{document.relative_path}: unresolved source file: {reference}"
                )


def _validate_text_quality(repository_root: Path, errors: list[str]) -> None:
    for directory_name in ("knowledge", "tools", "tests"):
        directory = repository_root / directory_name
        if not directory.is_dir():
            continue
        paths = sorted((*directory.rglob("*.md"), *directory.rglob("*.py")))
        for path in paths:
            try:
                lines = path.read_text(encoding="utf-8").splitlines()
            except (OSError, UnicodeError) as error:
                errors.append(
                    f"{_display_path(path, repository_root)}: cannot read text file: {error}"
                )
                continue
            for line_number, line in enumerate(lines, start=1):
                if line.endswith((" ", "\t")):
                    errors.append(
                        f"{_display_path(path, repository_root)}:{line_number}: trailing whitespace"
                    )
                if re.match(r"^(<<<<<<<|=======|>>>>>>>)", line):
                    errors.append(
                        f"{_display_path(path, repository_root)}:{line_number}: conflict marker"
                    )


def _validate_canonical_slugs(
    documents: dict[Path, Document], errors: list[str]
) -> None:
    paths_by_slug: defaultdict[str, list[str]] = defaultdict(list)
    for document in documents.values():
        if document.metadata.get("kind") in CONTENT_KINDS:
            paths_by_slug[document.path.stem].append(document.relative_path)

    for slug, paths in sorted(paths_by_slug.items()):
        if len(paths) > 1:
            errors.append(
                f"duplicate canonical slug '{slug}': {', '.join(sorted(paths))}"
            )


def _validate_prerequisites(
    documents: dict[Path, Document],
    knowledge_root: Path,
    errors: list[str],
) -> dict[Path, set[Path]]:
    graph = {path: set() for path in documents}
    for document in documents.values():
        prerequisites = document.metadata.get("prerequisites")
        if not isinstance(prerequisites, list):
            continue
        for reference in prerequisites:
            prerequisite = _resolve_knowledge_reference(
                reference,
                knowledge_root,
                document.relative_path,
                "prerequisites",
                errors,
            )
            if prerequisite is None:
                continue
            if prerequisite not in documents:
                errors.append(
                    f"{document.relative_path}: unresolved prerequisite: {reference}"
                )
            elif prerequisite == document.path:
                errors.append(f"{document.relative_path}: page cannot require itself")
            else:
                graph[document.path].add(prerequisite)

    state: dict[Path, int] = {}
    stack: list[Path] = []

    def visit(path: Path) -> bool:
        state[path] = 1
        stack.append(path)
        for prerequisite in sorted(graph[path], key=lambda item: item.as_posix()):
            if state.get(prerequisite) == 1:
                cycle_start = stack.index(prerequisite)
                cycle = stack[cycle_start:] + [prerequisite]
                errors.append(
                    "prerequisite cycle: "
                    + " -> ".join(documents[item].relative_path for item in cycle)
                )
                stack.pop()
                state[path] = 2
                return True
            if state.get(prerequisite, 0) == 0 and visit(prerequisite):
                stack.pop()
                state[path] = 2
                return True
        stack.pop()
        state[path] = 2
        return False

    for path in sorted(documents, key=lambda item: item.as_posix()):
        if state.get(path, 0) == 0 and visit(path):
            break

    return graph


def _validate_learning_paths(
    documents: dict[Path, Document],
    prerequisite_graph: dict[Path, set[Path]],
    knowledge_root: Path,
    errors: list[str],
) -> None:
    for document in documents.values():
        declared_path = document.metadata.get("learning_path")
        if declared_path is None:
            continue
        if not isinstance(declared_path, list):
            continue

        resolved_path: list[Path] = []
        for reference in declared_path:
            target = _resolve_knowledge_reference(
                reference,
                knowledge_root,
                document.relative_path,
                "learning_path",
                errors,
            )
            if target is None:
                continue
            if target not in documents:
                errors.append(
                    f"{document.relative_path}: unresolved learning-path page: {reference}"
                )
            else:
                resolved_path.append(target)

        if len(set(resolved_path)) != len(resolved_path):
            errors.append(f"{document.relative_path}: learning path contains a duplicate page")

        position = {path: index for index, path in enumerate(resolved_path)}
        for page in resolved_path:
            for prerequisite in prerequisite_graph.get(page, set()):
                if prerequisite not in position:
                    errors.append(
                        f"{document.relative_path}: learning path omits prerequisite "
                        f"{documents[prerequisite].relative_path} for {documents[page].relative_path}"
                    )
                elif position[prerequisite] >= position[page]:
                    errors.append(
                        f"{document.relative_path}: prerequisite appears after dependent page: "
                        f"{documents[prerequisite].relative_path} -> {documents[page].relative_path}"
                    )


def _validate_reachability(
    documents: dict[Path, Document],
    link_graph: dict[Path, set[Path]],
    knowledge_root: Path,
    errors: list[str],
) -> None:
    root_index = (knowledge_root / "README.md").resolve()
    if root_index not in documents:
        errors.append("knowledge/README.md: root index is missing")
        return

    reached = {root_index}
    queue = deque([root_index])
    while queue:
        current = queue.popleft()
        for target in link_graph[current]:
            if target not in reached:
                reached.add(target)
                queue.append(target)

    for orphan in sorted(set(documents) - reached, key=lambda item: item.as_posix()):
        errors.append(f"{documents[orphan].relative_path}: orphan page is not reachable from README.md")


def _validate_executable_examples(
    documents: dict[Path, Document],
    repository_root: Path,
    knowledge_root: Path,
    run_examples: bool,
    errors: list[str],
) -> int:
    examples: set[Path] = set()
    for document in documents.values():
        references = document.metadata.get("executable_examples")
        declared_examples: set[Path] = set()
        if isinstance(references, list):
            for reference in references:
                example = _resolve_knowledge_reference(
                    reference,
                    knowledge_root,
                    document.relative_path,
                    "executable_examples",
                    errors,
                )
                if example is None:
                    continue
                if example.suffix.casefold() != ".py":
                    errors.append(
                        f"{document.relative_path}: executable example is not a Python file: {reference}"
                    )
                elif not example.is_file():
                    errors.append(
                        f"{document.relative_path}: executable example does not exist: {reference}"
                    )
                else:
                    declared_examples.add(example)
                    examples.add(example)

        for raw_destination in LINK_PATTERN.findall(document.body):
            split = urlsplit(raw_destination.strip())
            if split.scheme or not split.path.casefold().endswith(".py"):
                continue
            linked_example = (document.path.parent / Path(unquote(split.path))).resolve()
            if linked_example not in declared_examples:
                errors.append(
                    f"{document.relative_path}: linked Python example is not declared for execution: "
                    f"{raw_destination.strip()}"
                )

    if not run_examples:
        return 0

    executed = 0
    for example in sorted(examples, key=lambda item: item.as_posix()):
        completed = subprocess.run(
            [sys.executable, str(example)],
            cwd=repository_root,
            capture_output=True,
            text=True,
            timeout=10,
            check=False,
        )
        executed += 1
        if completed.returncode != 0:
            detail = (completed.stderr or completed.stdout).strip()
            errors.append(
                f"{_display_path(example, repository_root)}: executable example failed"
                + (f": {detail}" if detail else "")
            )
    return executed


def validate_repository(
    repository_root: Path, *, run_examples: bool = True
) -> ValidationResult:
    repository_root = repository_root.resolve()
    knowledge_root = (repository_root / "knowledge").resolve()
    base_root = (repository_root / "base").resolve()
    errors: list[str] = []

    if not knowledge_root.is_dir():
        return ValidationResult(["knowledge/: directory is missing"], 0, 0)
    if not base_root.is_dir():
        return ValidationResult(["base/: source directory is missing"], 0, 0)

    _validate_text_quality(repository_root, errors)

    documents: dict[Path, Document] = {}
    for path in sorted(knowledge_root.rglob("*.md")):
        resolved_path = path.resolve()
        document, parse_errors = _parse_document(resolved_path, knowledge_root)
        documents[resolved_path] = document
        errors.extend(parse_errors)

    _validate_sources(documents, repository_root, base_root, errors)
    _validate_canonical_slugs(documents, errors)
    prerequisite_graph = _validate_prerequisites(documents, knowledge_root, errors)
    _validate_learning_paths(documents, prerequisite_graph, knowledge_root, errors)
    link_graph = _validate_links(
        documents, repository_root, knowledge_root, errors
    )
    _validate_reachability(documents, link_graph, knowledge_root, errors)
    executed_examples = _validate_executable_examples(
        documents,
        repository_root,
        knowledge_root,
        run_examples,
        errors,
    )

    return ValidationResult(errors, len(documents), executed_examples)


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate the generated knowledge tree.")
    parser.add_argument(
        "--root",
        type=Path,
        default=Path(__file__).resolve().parents[1],
        help="Repository root containing knowledge/ and base/.",
    )
    parser.add_argument(
        "--skip-examples",
        action="store_true",
        help="Check example declarations without executing them.",
    )
    arguments = parser.parse_args()

    result = validate_repository(
        arguments.root, run_examples=not arguments.skip_examples
    )
    if result.errors:
        for error in result.errors:
            print(f"ERROR: {error}")
        print(
            f"FAIL: {len(result.errors)} error(s) across "
            f"{result.checked_markdown_files} Markdown file(s)."
        )
        return 1

    print(
        f"PASS: {result.checked_markdown_files} Markdown file(s); "
        f"{result.executed_examples} executable example(s)."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

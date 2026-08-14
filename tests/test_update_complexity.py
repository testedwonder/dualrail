from __future__ import annotations

import tempfile
import textwrap
import unittest
from pathlib import Path

from tools.update_complexity import planned_updates, update_complexity


def topic(
    title: str,
    *,
    prerequisites: str,
    next_steps: str,
    related: str,
    understanding: int | None = None,
) -> str:
    understanding_line = (
        "" if understanding is None else f"understanding: {understanding}\n"
    )
    return (
        "---\n"
        f"title: {title}\n"
        "kind: concept\n"
        "status: draft\n"
        f"prerequisites: {prerequisites}\n"
        f"next_steps: {next_steps}\n"
        f"related: {related}\n"
        "source_files: [knowledge/topics/test/references.md]\n"
        f"{understanding_line}"
        "---\n\n"
        f"# {title}\n\n"
        "Body.\n"
    )


class ComplexityUpdaterTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temporary_directory = tempfile.TemporaryDirectory()
        self.root = Path(self.temporary_directory.name)
        (self.root / "knowledge").mkdir()
        self.write(
            "knowledge/a.md",
            topic(
                "A",
                prerequisites="[]",
                next_steps="[b.md]",
                related="[b.md]",
            ),
        )
        self.write(
            "knowledge/b.md",
            topic(
                "B",
                prerequisites="[a.md]",
                next_steps="[c.md]",
                related="[a.md, c.md]",
            ),
        )
        self.write(
            "knowledge/c.md",
            topic(
                "C",
                prerequisites="[a.md, b.md]",
                next_steps="[a.md]",
                related="[a.md, b.md]",
                understanding=7,
            ),
        )

    def tearDown(self) -> None:
        self.temporary_directory.cleanup()

    def write(self, relative_path: str, contents: str) -> None:
        path = self.root / relative_path
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(contents, encoding="utf-8")

    def test_depth_and_prerequisites_determine_spectral_metadata(self) -> None:
        changed = update_complexity(self.root)

        self.assertEqual(3, len(changed))
        first = (self.root / "knowledge/a.md").read_text(encoding="utf-8")
        middle = (self.root / "knowledge/b.md").read_text(encoding="utf-8")
        deepest = (self.root / "knowledge/c.md").read_text(encoding="utf-8")
        self.assertIn("complexity_depth: 0", first)
        self.assertIn("complexity_score: 0.0", first)
        self.assertIn("complexity_wavelength_nm: 700", first)
        self.assertIn('complexity_color: "#ff0000"', first)
        self.assertIn("complexity_depth: 1", middle)
        self.assertIn("complexity_score: 5.0", middle)
        self.assertIn("complexity_wavelength_nm: 540", middle)
        self.assertIn("complexity_depth: 2", deepest)
        self.assertIn("complexity_score: 10.0", deepest)
        self.assertIn("complexity_wavelength_nm: 380", deepest)
        self.assertIn('complexity_color: "#8f00ff"', deepest)

    def test_generated_block_contains_color_and_rating_input(self) -> None:
        update_complexity(self.root)

        text = (self.root / "knowledge/c.md").read_text(encoding="utf-8")
        self.assertIn('style="display:inline-block;', text)
        self.assertIn('background:#8f00ff', text)
        self.assertIn('type="number" min="0" max="10" value="7"', text)
        self.assertIn("## Learning navigation", text)
        self.assertIn("[A](a.md)", text)
        self.assertIn("[B](b.md)", text)

    def test_manual_understanding_is_preserved_and_updates_rendering(self) -> None:
        update_complexity(self.root)
        path = self.root / "knowledge/a.md"
        text = path.read_text(encoding="utf-8").replace(
            "understanding: 0", "understanding: 6"
        )
        path.write_text(text, encoding="utf-8")

        update_complexity(self.root)

        updated = path.read_text(encoding="utf-8")
        self.assertIn("understanding: 6", updated)
        self.assertIn('type="number" min="0" max="10" value="6"', updated)

    def test_second_update_is_idempotent(self) -> None:
        update_complexity(self.root)

        self.assertEqual([], planned_updates(self.root))


if __name__ == "__main__":
    unittest.main()
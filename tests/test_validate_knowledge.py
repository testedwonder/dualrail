from __future__ import annotations

import tempfile
import textwrap
import unittest
from pathlib import Path

from tools.validate_knowledge import validate_repository


def page(
    title: str,
    *,
    kind: str = "concept",
    status: str = "draft",
    prerequisites: str = "[]",
    source_files: str = "[base/source.md]",
    extra_metadata: str = "",
    body: str = "# Page\n",
) -> str:
    return textwrap.dedent(
        f"""\
        ---
        title: {title}
        kind: {kind}
        status: {status}
        prerequisites: {prerequisites}
        source_files: {source_files}
        {extra_metadata}---

        {body}
        """
    )


class KnowledgeValidatorTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temporary_directory = tempfile.TemporaryDirectory()
        self.root = Path(self.temporary_directory.name)
        self.write("base/source.md", "# Source\n\n<a id=\"evidence\"></a>\n")

    def tearDown(self) -> None:
        self.temporary_directory.cleanup()

    def write(self, relative_path: str, contents: str) -> None:
        path = self.root / relative_path
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(contents, encoding="utf-8")

    def make_valid_tree(self) -> None:
        self.write(
            "knowledge/README.md",
            page(
                "Root",
                kind="index",
                source_files="[]",
                body="# Root\n\n[Concept](concept.md)\n",
            ),
        )
        self.write(
            "knowledge/concept.md",
            page(
                "Concept",
                body="# Concept\n\n[Evidence](../base/source.md#evidence)\n",
            ),
        )

    def errors(self, *, run_examples: bool = False) -> list[str]:
        return validate_repository(
            self.root, run_examples=run_examples
        ).errors

    def test_valid_tree_passes(self) -> None:
        self.make_valid_tree()

        self.assertEqual([], self.errors())

    def test_missing_metadata_and_empty_page_fail(self) -> None:
        self.write("knowledge/README.md", "---\ntitle: Root\n---\n")

        errors = self.errors()

        self.assertTrue(any("missing required metadata" in error for error in errors))
        self.assertTrue(any("generated page is empty" in error for error in errors))

    def test_broken_link_and_missing_anchor_fail(self) -> None:
        self.make_valid_tree()
        self.write(
            "knowledge/concept.md",
            page(
                "Concept",
                body=(
                    "# Concept\n\n"
                    "[Missing](missing.md)\n\n"
                    "[Bad anchor](../base/source.md#not-there)\n"
                ),
            ),
        )

        errors = self.errors()

        self.assertTrue(any("broken local link" in error for error in errors))
        self.assertTrue(any("missing anchor" in error for error in errors))

    def test_orphan_page_fails(self) -> None:
        self.make_valid_tree()
        self.write("knowledge/orphan.md", page("Orphan", body="# Orphan\n"))

        self.assertTrue(any("orphan page" in error for error in self.errors()))

    def test_duplicate_canonical_slug_fails(self) -> None:
        self.write(
            "knowledge/README.md",
            page(
                "Root",
                kind="index",
                source_files="[]",
                body="# Root\n\n[A](a/shared.md)\n\n[B](b/shared.md)\n",
            ),
        )
        self.write("knowledge/a/shared.md", page("A", body="# A\n"))
        self.write("knowledge/b/shared.md", page("B", body="# B\n"))

        self.assertTrue(
            any("duplicate canonical slug 'shared'" in error for error in self.errors())
        )

    def test_unresolved_source_and_prerequisite_fail(self) -> None:
        self.write(
            "knowledge/README.md",
            page(
                "Root",
                kind="index",
                source_files="[]",
                body="# Root\n\n[Concept](concept.md)\n",
            ),
        )
        self.write(
            "knowledge/concept.md",
            page(
                "Concept",
                prerequisites="[missing.md]",
                source_files="[base/missing.md]",
                body="# Concept\n",
            ),
        )

        errors = self.errors()

        self.assertTrue(any("unresolved source file" in error for error in errors))
        self.assertTrue(any("unresolved prerequisite" in error for error in errors))

    def test_prerequisite_cycle_fails(self) -> None:
        self.write(
            "knowledge/README.md",
            page(
                "Root",
                kind="index",
                source_files="[]",
                body="# Root\n\n[A](a.md)\n\n[B](b.md)\n",
            ),
        )
        self.write(
            "knowledge/a.md",
            page("A", prerequisites="[b.md]", body="# A\n"),
        )
        self.write(
            "knowledge/b.md",
            page("B", prerequisites="[a.md]", body="# B\n"),
        )

        self.assertTrue(any("prerequisite cycle" in error for error in self.errors()))

    def test_learning_path_must_follow_prerequisite_order(self) -> None:
        self.write(
            "knowledge/README.md",
            page(
                "Root",
                kind="index",
                source_files="[]",
                body="# Root\n\n[Path](path.md)\n\n[A](a.md)\n\n[B](b.md)\n",
            ),
        )
        self.write("knowledge/a.md", page("A", body="# A\n"))
        self.write(
            "knowledge/b.md",
            page("B", prerequisites="[a.md]", body="# B\n"),
        )
        self.write(
            "knowledge/path.md",
            page(
                "Path",
                kind="index",
                source_files="[]",
                extra_metadata="learning_path: [b.md, a.md]\n",
                body="# Path\n",
            ),
        )

        self.assertTrue(
            any("prerequisite appears after" in error for error in self.errors())
        )

    def test_declared_executable_example_is_run(self) -> None:
        self.write(
            "knowledge/README.md",
            page(
                "Root",
                kind="index",
                source_files="[]",
                extra_metadata="executable_examples: [example.py]\n",
                body="# Root\n\n[Example](example.py)\n",
            ),
        )
        self.write("knowledge/example.py", "raise SystemExit(7)\n")

        result = validate_repository(self.root, run_examples=True)

        self.assertEqual(1, result.executed_examples)
        self.assertTrue(any("executable example failed" in error for error in result.errors))

    def test_python_example_link_must_be_declared(self) -> None:
        self.write(
            "knowledge/README.md",
            page(
                "Root",
                kind="index",
                source_files="[]",
                body="# Root\n\n[Example](example.py)\n",
            ),
        )
        self.write("knowledge/example.py", "print('ok')\n")

        self.assertTrue(
            any("not declared for execution" in error for error in self.errors())
        )

    def test_trailing_whitespace_fails(self) -> None:
        self.make_valid_tree()
        concept = self.root / "knowledge/concept.md"
        concept.write_text(concept.read_text(encoding="utf-8") + "bad  \n", encoding="utf-8")

        self.assertTrue(any("trailing whitespace" in error for error in self.errors()))

    def supplemental_conversation(self, luke_label: str = "Luke (simulated)") -> str:
        return textwrap.dedent(
            f"""\
            ---
            title: Conversation
            kind: simulated-conversation-set
            status: draft
            research_date: 2026-08-14
            privacy: private interview preparation
            simulation_notice: all Luke dialogue is invented
            source_files:
              - source.md
            ---

            # Conversation

            Simulation notice

            Personal evidence needed

            What remains unknown

            Private boundary

            Claims to avoid

            Sources and status

            **{luke_label}:** Question?
            """
        )

    def test_valid_supplemental_conversation_is_counted(self) -> None:
        self.make_valid_tree()
        self.write(
            "base/Luke_Mastalli_Kelly_Realistic_Conversation_Portfolio.md",
            self.supplemental_conversation(),
        )

        result = validate_repository(self.root, run_examples=False)

        self.assertEqual([], result.errors)
        self.assertEqual(1, result.checked_supplemental_files)

    def test_luke_dialogue_must_be_marked_simulated(self) -> None:
        self.make_valid_tree()
        self.write(
            "base/Luke_Mastalli_Kelly_Realistic_Conversation_Portfolio.md",
            self.supplemental_conversation(luke_label="Luke"),
        )

        self.assertTrue(
            any("Luke dialogue is not marked simulated" in error for error in self.errors())
        )

    def test_supplemental_local_link_must_resolve(self) -> None:
        self.make_valid_tree()
        conversation = self.supplemental_conversation() + "\n[Missing](missing.md)\n"
        self.write(
            "base/Luke_Mastalli_Kelly_Realistic_Conversation_Portfolio.md",
            conversation,
        )

        self.assertTrue(
            any("broken supplemental local link" in error for error in self.errors())
        )

    def test_public_portfolio_requires_evidence_markers(self) -> None:
        self.make_valid_tree()
        self.write(
            "base/Luke_Mastalli_Kelly_Public_Evidence_Portfolio.md",
            textwrap.dedent(
                """\
                ---
                title: Portfolio
                kind: research-portfolio
                status: draft
                research_date: 2026-08-14
                privacy: public professional information only
                subject: Luke Mastalli-Kelly
                source_files:
                  - source.md
                external_research: public sources
                ---

                # Portfolio
                """
            ),
        )

        self.assertTrue(
            any("missing supplemental evidence marker" in error for error in self.errors())
        )


if __name__ == "__main__":
    unittest.main()
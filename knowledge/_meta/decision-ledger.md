---
title: Decision Ledger
kind: index
status: draft
prerequisites: []
source_files: [base/DWave_Application_and_Study_Materials.md]
---

# Decision ledger

## D-001: Generate under `knowledge/`

- **Decision:** Use `knowledge/` as the output root.
- **Reason:** The workspace contains no established documentation tree, index, validator, or naming convention. `base/` is explicitly source-only.
- **Consequence:** All generated learning material stays under `knowledge/`; validation code and its tests live outside `base/`.

## D-002: Treat the compendium as one source with six embedded units

- **Decision:** Inventory the physical Markdown file and separately map each named PDF section.
- **Reason:** File-level inventory alone would hide privacy boundaries and the different authority levels inside the compendium.
- **Consequence:** Provenance names both the compendium and the source PDF/page represented by a section.

## D-003: Pilot calibration validity and drift

- **Decision:** Use calibration systems as the representative first topic.
- **Reason:** Section 4 begins with gates and physical control, defines calibration records, validity, and dependencies, then gives a numbered diagnosis procedure and counterexamples. It therefore exercises the requested architecture without outside research.
- **Rejected alternative:** Dual-rail encoding is central, but a trustworthy end-to-end treatment would benefit from checking the cited primary papers. That is a better next batch than a rushed first pilot.

## D-004: Keep evidence categories visible in prose

- **Decision:** Label source-backed facts, explanations, analogies, provisional inferences, and unresolved questions where confusion is plausible.
- **Reason:** The source itself distinguishes observations from proposed causes and public descriptions from private architecture.
- **Consequence:** Pages will not silently promote study-guide interpretation into a primary-source fact.

## D-005: Use a standalone deterministic example

- **Decision:** Demonstrate dependency invalidation with Python’s standard library rather than an Ariadion API.
- **Reason:** No Ariadion source or installed interface is available in this workspace, and inventing an API is prohibited. The example teaches a generic graph operation, not quantum simulation.
- **Consequence:** The example is explicitly synthetic and hardware-agnostic. A validator-run assertion supplies executable evidence.

## D-006: Add a dependency-free validator

- **Decision:** Implement the smallest validator with the Python standard library and focused `unittest` coverage.
- **Reason:** The repository has no dependency manifest or existing test framework, and new dependencies require approval.
- **Consequence:** Metadata is intentionally restricted to the documented inline-list subset needed by this tree.

## D-007: Reserve `verified` for checked artifacts

- **Decision:** Keep explanatory pages `draft` during the pilot unless their local links, provenance, prerequisites, and executable claims pass deterministic checks.
- **Reason:** The corpus links to external primary sources that have not been independently checked in this run.
- **Consequence:** The worked example may become `verified` after execution, while broader technical pages remain honest drafts.

## D-008: Replace unavailable Git gates with explicit limitations

- **Decision:** Record Git checks as unavailable rather than simulating a repository state.
- **Reason:** `git status` reports that the workspace is not a Git repository.
- **Consequence:** A before/after SHA-256 comparison protects the source file; `git diff --check` and unrelated-worktree checks remain blocked.

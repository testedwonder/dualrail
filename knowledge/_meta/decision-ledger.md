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

## D-009: Permit two explicit supplemental artifacts in `base/`

- **Decision:** Add a public evidence portfolio and a simulated conversation portfolio to `base/` without modifying the preserved compendium.
- **Reason:** The user explicitly requested both outputs in `base/`, overriding the normal generated-output location for this bounded task.
- **Consequence:** These files join the source inventory but remain person-specific interview material, not canonical pages in the reusable knowledge tree.

## D-010: Never present simulated Luke dialogue as quotation

- **Decision:** Mark every invented Luke turn as `Luke (simulated)` and place a simulation notice in metadata and at the top of the conversation file.
- **Reason:** Realistic rehearsal requires a second voice, but public research does not reveal Luke's exact words, preferences, private architecture, or interview plan.
- **Consequence:** The conversation artifact can model technical pressure and plausible branches without becoming false biographical evidence.

## D-011: Attribute team work at individual resolution

- **Decision:** Credit Luke only with contributions explicitly assigned to him or his named group.
- **Reason:** The open 2026 preprint credits Luke and three colleagues with software used for the project while assigning gate calibration, hardware, data acquisition, analysis, simulation, and supervision to other named groups.
- **Consequence:** The portfolio supports direct dual-rail experiment-software familiarity but does not claim that Luke invented or calibrated the SWS gate or owns D-Wave's private stack.

## D-012: Keep biography evidence below paper and role evidence

- **Decision:** Treat official papers, open preprints, the live job posting, and first-party company pages as stronger than profile aggregators and search snippets.
- **Reason:** LinkedIn was login-gated, and secondary aggregators can copy stale or generated information.
- **Consequence:** Education and pre-quantum software details are labeled corroborated public background or provisional when an institutional record was unavailable.

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

## D-013: Expand all substantively explained technical concepts

- **Decision:** Treat `NEXT.md` roadmap item 1 as authorization for bulk technical expansion beyond the original pilot.
- **Reason:** The user explicitly requested recursive definition coverage and iteration to completion.
- **Consequence:** The tree now contains 56 canonical content pages across six topics; the original first-run stop no longer applies to this authorized batch.

## D-014: Combine tightly coupled terms

- **Decision:** Keep closely dependent terms on one canonical page when separating them would produce thin or circular explanations.
- **Reason:** The source explains several pairs and contrasts as one usable unit: leakage/erasure, transmon/anharmonicity, circuit-QED/dispersive interaction, beamsplitter/parametric drive, detection/correction/postselection, QUBO/BQM, and quantum-processing-time/time-to-solution.
- **Consequence:** The tree remains navigable and source-grounded rather than creating one file for every noun.

## D-015: Weight depth above direct prerequisite count

- **Decision:** Calculate complexity as 80% normalized longest prerequisite depth and 20% normalized direct prerequisite count.
- **Reason:** The roadmap explicitly makes tree depth the determining factor while requiring prerequisite count to contribute.
- **Consequence:** Deeper pages always receive the dominant complexity contribution; pages at similar depth can differ by direct dependency load.

## D-016: Map complexity into visible-spectrum metadata

- **Decision:** Map score `0` to 700 nm red and score `10` to 380 nm violet, derive frequency in THz, and interpolate a visible hex color through spectral anchors.
- **Reason:** The roadmap requests a red-to-violet heatmap and frequency values.
- **Consequence:** Every content page records depth, count, score, wavelength, frequency, and color and displays a generated badge.

## D-017: Separate derived complexity from manual understanding

- **Decision:** `tools/update_complexity.py` owns all complexity fields and rendered study-status blocks, while the learner owns `understanding` as an integer from `0` to `10`.
- **Reason:** Graph-derived values must remain deterministic, but self-assessment must survive regeneration.
- **Consequence:** Missing understanding defaults to `0`; a valid manual value is preserved and mirrored into the visible input.

## D-018: Treat the Markdown input as a display control

- **Decision:** Render a numeric HTML input next to the heatmap but keep metadata as the durable value for roadmap item 1.
- **Reason:** A static Markdown preview cannot reliably write an edited form value back to a file.
- **Consequence:** Durable in-interface rating and notes remain part of roadmap item 2; the root and complexity model state this boundary visibly.

## D-019: Stop at the explanatory source boundary

- **Decision:** Do not generate pages for terms that only appear in resume or training lists.
- **Reason:** The corpus names QFT, Grover, VQE, QAOA, BB84, quantum kernels, partial trace, and project internals without enough material for accurate recursive teaching pages.
- **Consequence:** These terms are listed as evidence-blocked exclusions until authoritative sources or project repositories enter the corpus.

## D-020: Keep canonical knowledge read-only in the visual application

- **Decision:** Generate a deterministic application index from `knowledge/` and `base/`, but store ratings and notes only in versioned browser local storage and user-exported JSON.
- **Reason:** Personal study state must persist without silently changing source-backed claims, provenance, derived complexity, or user-owned source material.
- **Consequence:** The interface can search, render, connect, rate, annotate, import, and export the corpus, but canonical content remains an explicit repository editing workflow.

## D-021: Scope the relationship map for readable navigation

- **Decision:** Open the graph on the selected document's topic and retain an `All topics` overview plus independently toggleable prerequisite, next-step, related, and source edges.
- **Reason:** Fitting all 56 study nodes into one viewport preserves topology but makes labels too small for practical navigation.
- **Consequence:** A normal map view contains readable nodes for one topic; the complete cross-topic graph remains available on demand.

## D-022: Treat feedback 1 as a missing-foundations defect

- **Decision:** Accept the low-score complaint without manually overriding generated complexity. Add a bounded mathematics and quantum-foundations branch in roadmap item 4, then let real prerequisite depth recalculate the two target scores.
- **Reason:** Both disputed values are fresh and formula-correct, but both pages are advanced roots only because the tree omits concepts they assume. A score override would hide the pedagogical gap and break deterministic ownership.
- **Consequence:** Item 3 records the architecture and evidence requirements only. Item 4 must acquire authoritative sources, implement the new route and immediate-feedback exercises, rewire prerequisites, and prove that Quantum States and Fock Notation reaches at least `3.0` naturally.

## D-023: Keep exercises deterministic and source-adjacent

- **Decision:** Render five exercise types from an optional `exercise_id` in canonical page metadata, with pure deterministic math and sampling logic in the application.
- **Reason:** Exercises need immediate feedback and accessibility without embedding writable scripts in Markdown or pretending that browser samples are hardware results.
- **Consequence:** Canonical pages remain read-only; the generated index requires the exact five known exercise IDs; seeded sampling is reproducible; native controls support keyboard operation; and every exercise links back to its canonical explanation.

## D-024: Add a public-source portfolio under `base/`

- **Decision:** Store the dated OpenStax, MIT OpenCourseWare, and IBM Quantum Learning acquisition record as one source artifact under `base/`.
- **Reason:** Content pages require repository-local source provenance, while exact public URLs, access dates, authority, coverage, and limitations need one auditable record distinct from generated teaching prose.
- **Consequence:** The original compendium remains unchanged, foundation pages cite the new portfolio, and future link replacement must update the source record before dependent pages.

## D-025: Make the repository README an exhaustive navigation contract

- **Decision:** Use root `README.md` as the human entry point and require it to link every canonical content page directly, while leaving detailed explanations in topic indexes and canonical pages.
- **Reason:** Roadmap item 5 requires a complete table of contents, but duplicating explanations would create competing sources of truth. Direct links provide complete discovery without duplicating content ownership.
- **Consequence:** The validator fails when `README.md` is missing, a local README link breaks or escapes the repository, or any canonical concept, definition, algorithm, or example is absent from its table of contents.

## D-026: Keep roadmap item 5 free and local-first

- **Decision:** Document only the existing offline application and source-backed tree. Do not add Ariadion, paid APIs, monetization, licensing, or Feedback 2/3 features in this batch.
- **Reason:** The user explicitly asked that Feedback 2 and 3 provide context but not be implemented yet, and the core must remain usable without subscriptions or credentials.
- **Consequence:** The README states current boundaries honestly. Optional integrations and commercial licensing remain deliberate future decisions rather than hidden dependencies.

## D-027: Exclude private source archives from the application boundary

- **Decision:** Build the application only from learner-facing `knowledge/` documents and a neutral public technical source registry. Do not read or bundle `base/` documents, source paths, personal profiles, positions, application material, or interview preparation.
- **Reason:** Feedback 4 makes the application the public focus and requests removal of person- and position-related source material from the user-facing repository experience.
- **Consequence:** Index generation fails if forbidden text, blocked profile or hiring domains, unlinked research sources, or a `base/` path enters the app payload. Historical source archives remain outside app navigation and search.

## D-028: Keep research proposals local until explicit review

- **Decision:** Store proposed public sources and corrections in a separate versioned browser-local queue with JSON export.
- **Reason:** The research interface needs a contribution mechanism without requiring a server, account, paid API, or automatic mutation of canonical evidence.
- **Consequence:** Proposals cannot silently change knowledge pages. A human or later repository workflow must review exported proposals before incorporation.

## D-029: Visualize dual-rail state space, not hardware geometry

- **Decision:** Use one full-bleed Three.js scene to represent the normalized state $\cos(\theta/2)|1,0\rangle+e^{i\phi}\sin(\theta/2)|0,1\rangle$ through two mode rings, amplitude fields, relative phase, and coherence.
- **Reason:** The roadmap requests immersive 3D learning, while unsupported cavity geometry or physical dynamics would turn an educational control into a false hardware claim.
- **Consequence:** The scene displays exact state-vector probabilities and phase controls, carries a visible state-space boundary, and links back to canonical state-notation and Born-rule pages.

## D-030: Load the 3D engine only on demand

- **Decision:** Lazy-load Three.js and the Lab view as a separate production chunk.
- **Reason:** The reader, map, progress, and research workflows should not pay the initial parse and transfer cost for an optional 3D experience.
- **Consequence:** The production build emits a separate Lab chunk; WebGL cleanup disposes geometry, materials, controls, observers, animation frames, and renderer resources when the view unmounts.

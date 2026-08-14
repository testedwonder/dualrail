---
title: Validation Report
kind: index
status: verified
prerequisites: []
source_files: []
---

# Validation report

Date: 2026-08-14

Scope: `NEXT.md` roadmap items 1-7: recursive source-backed definitions, semantic navigation, complexity heatmaps, manual understanding metadata, the Dualrail Atlas application, feedback assessment, sourced mathematics and quantum foundations, repository guide, public technical research, and immersive visual learning.

## Result

The seven-topic technical tree contains 66 content pages. Dualrail Atlas indexes 94 knowledge files into 78 learner-facing documents, a 24-source public technical registry, a read-only reader, graph, progress system, five foundation exercises, local proposal queue, and full-bleed Three.js dual-rail Lab. The application bundle reads no private source archives and exposes no source-archive path, personal profile, position, application, or interview content. The architecture, derived metadata, personal-data boundary, exercises, guide, research workflow, 3D lab, and executable checks pass.

### Three-dimensional Lab checks

Result: **PASS** - the dual-rail state-space scene is nonblank, responsive, interactive, and mathematically bounded.

- 5 pure state-math tests cover basis endpoints, balanced states, phase-only changes, normalization, clamping, wrapping, and formatting.
- 3 Lab component tests cover default state, sliders, presets, reset, and canonical navigation.
- Cold-load desktop WebGL canvas: `1440 x 836`, luminance range `38–240`, and 26 sampled luminance buckets.
- Cold-load mobile WebGL canvas: `390 x 338`, luminance range `26–240`, and 27 sampled luminance buckets, with both mode rings above the control band and no horizontal document overflow.
- Desktop and mobile screenshots confirm text fit, stable controls, visible state probabilities, and no incoherent overlap.
- Orbit interaction, balanced-positive and balanced-negative presets, phase marker, and state updates were exercised in Chromium.
- Three.js is emitted as a separate lazy-loaded Lab chunk. Browser resource timing confirmed the Lab module was absent before opening the tab and present afterward.
- The scene is visibly labeled as state-space visualization rather than hardware geometry.

### Research and app privacy checks

Result: **PASS** - the research workflow is public-source-only and the private-source boundary is enforced during indexing.

- 24 public technical sources are normalized and classified by authority.
- Every source links to at least one learner-facing study page; 26 source-to-page links are present.
- Search, authority filtering, topic filtering, supporting-page navigation, proposal validation, persistence after reload, deletion, and export affordance are covered by tests or browser checks.
- A saved correction proposal survived reload in version-1 local storage and the temporary browser validation entry was removed.
- The generated payload contains zero `base/` strings and zero matches for blocked person, position, application, resume, or interview terms.
- Profile, hiring, and biography domains are blocked from the registry.
- Desktop and `390 x 844` mobile views have no document-level horizontal overflow; research controls remain visible.
- No API key, server, subscription, or paid service is needed. External network access occurs only when the learner chooses to open a public URL.

### Repository README checks

Result: **PASS** - the repository entry point links every canonical content page directly.

- 113 repository-relative README links resolve to existing files.
- All 66 concepts, definitions, algorithms, and examples appear in the organized table of contents.
- Seven topic sections state their important prerequisite and next-step boundaries.
- All four learning paths, five interactive exercises, four source records, and architecture records are reachable.
- The guide documents local startup, notes, understanding ratings, progress, JSON backup and restore, source evaluation, and current limitations.
- Three focused validator regressions cover a missing README, a broken README link, and a canonical page omitted from the table of contents.
- Feedback 2 and 3 influenced concise, low-friction guidance and the free-core boundary but were not implemented.

### Feedback implementation checks

Input: [`FEEDBACK.md`, feedback 1](../../FEEDBACK.md)

Result: **PASS** - the accepted missing-foundations defect is implemented without a manual complexity override.

- Added 10 canonical foundation pages and one ordered learning path.
- Recorded exact OpenStax, MIT OpenCourseWare, and IBM Quantum Learning links with an access date and evidence boundaries.
- Quantum States and Fock Notation: depth `6`, prerequisite count `2`, complexity `4.69`.
- From Gates to Calibration: depth `6`, prerequisite count `2`, complexity `4.69`.
- Added five exercise surfaces and an index completeness guard requiring every known `exercise_id`.
- Browser checks exercised incorrect, correct, reset, deterministic rerun, and ordering-repair paths.
- The [verified assessment](feedback-assessment.md) records all eight acceptance gates as satisfied.

### Visual application checks

```powershell
cd app
npm test
npm run build
```

Result: **PASS** - 34 Vitest checks across 8 files, followed by a successful TypeScript and Vite production build.

The tests cover rating bounds, malformed-entry sanitation, JSON import/export round trips, filters, progress summaries, Markdown-link resolution, rendering, persistence, search, progress navigation, complex-plane math, eigenvector classification, seeded sampling, calibration ordering, immediate feedback, reset, keyboard activation, research filtering, proposals, and payload privacy. The pretest and prebuild hooks regenerate 94 knowledge files, 66 rateable topic items, 24 public sources, and 5 exercise IDs.

Browser validation at desktop and emulated `390 x 844` mobile geometry also passed:

- the library rendered with no console errors or document-level horizontal overflow;
- each reader has one canonical H1, with MathJax SVG equations and highlighted code blocks with copy controls;
- topic-scoped maps remain readable, while all-topic mode renders all 66 content nodes and 111 prerequisite edges;
- graph-node selection opened the correct addressable `?doc=` URL;
- understanding and notes survived a browser reload;
- progress renders 7 topic rows, 4 source rows, and a 6-item study queue;
- the mobile library and study drawers remained inside the fixed viewport with their close and editing controls visible;
- export produced a connected blob target with a dated JSON filename;
- import restored a version-1 JSON rating and note, and the temporary validation state was cleared afterward.
- the diagnostic produced miss and correction feedback and cleared all feedback on reset;
- the complex explorer accepted the `3+4i` magnitude `5`, the eigenvector lab returned `Av=2v`, seeded sampling reproduced `74/26` against a `75/25` theory, and the repaired calibration order passed;
- at `390 x 844`, the measurement lab occupied a 341-pixel reader, every editing control remained visible, and document width stayed 390 pixels.

The production build reports a chunk-size warning because the local corpus, MathJax SVG renderer, and graph engine are bundled together. This is a performance advisory, not a failed gate; the application is local-first and the rendered workflow passed.

## Exact checks

### Validator regression tests

```powershell
& "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe" -B -m unittest discover -s tests -v
```

Result: **PASS** - 26 tests. The tests cover valid trees, repository README completeness, missing metadata, empty pages, broken links and anchors, orphans, duplicate canonical slugs, unresolved sources, prerequisites and next steps, prerequisite cycles, learning-path order, executable claims, trailing whitespace, supplemental source links, required evidence labels, explicit simulation labels, exact complexity endpoints, generated controls, manual-rating preservation, stale complexity, rating bounds, content sections, and idempotence.

### Complexity calculation

```powershell
& "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe" -B tools/update_complexity.py
& "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe" -B tools/update_complexity.py --check
```

Result: **PASS** - 66 content pages calculated; the no-write check reports 0 stale pages.

Measured graph:

- maximum prerequisite depth: 13;
- maximum direct prerequisite count: 4;
- complexity range: 0.0 to 9.5;
- spectral range used by current pages: 700 nm red to 396 nm near violet.

### Repository knowledge-tree validation

```powershell
& "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe" -B tools/validate_knowledge.py
```

Result: **PASS** - 93 knowledge Markdown files, 2 supplemental source files, and 1 executable example.

The command validates:

- repository README presence, local links, and complete canonical-page coverage;
- UTF-8 readable, non-empty Markdown with required metadata;
- allowed page kinds and statuses;
- relative local links and target anchors;
- root-index reachability for every Markdown page;
- unique canonical slugs for content pages;
- source references constrained to existing files under `base/`;
- valid prerequisite references and an acyclic graph;
- non-empty, resolving next-step and related-page references on content pages;
- declared learning-path order and prerequisite coverage;
- required depth, count, score, wavelength, frequency, color, and understanding metadata;
- exact prerequisite counts and `0`-`10` understanding bounds;
- one generated heatmap/rating block per content page;
- one generated clickable learning-navigation block per content page;
- generated-complexity freshness against the current graph;
- plain-language openings for concepts and definitions;
- problem or purpose sections for algorithms and examples;
- self-check, source/status, and linked-parent sections on every content page;
- local Python example links declared for execution;
- successful execution of each declared example;
- trailing whitespace and conflict markers in generated Markdown and Python.
- tailored metadata and evidence markers in the two named supplemental source files;
- relative links and declared source files in the supplemental artifacts;
- privacy and credential-like patterns in the supplemental artifacts;
- `Luke (simulated)` attribution on every invented Luke dialogue turn.

### Source preservation

```powershell
Get-FileHash "base\DWave_Application_and_Study_Materials.md" -Algorithm SHA256
```

Result: **PASS** - before and after SHA-256 values match:

```text
AEA8E3200A8AA5C0BB9C963B223E6627AA60A4B8F038B951F28546C67EAD9BBA
```

The preserved compendium was not edited. Two user-authorized files were added under `base/`:

- `Luke_Mastalli_Kelly_Public_Evidence_Portfolio.md`, SHA-256 `6D18C7D2C59D6C30E1DF02D046779C1B163F1D368AA1D92D67CC6583BE59455D`;
- `Luke_Mastalli_Kelly_Realistic_Conversation_Portfolio.md`, SHA-256 `065D0D040FAE330CB4D9A4DFD468DC34F3F271A549ED1F0B3563BD200ABE4FE7`.

Roadmap item 4 added one public-source provenance record:

- `Mathematics_and_Quantum_Foundations_Authoritative_Sources.md`, SHA-256 `B7D8998D2F1ADCE9525495F0D7E93F6631ACF3A21B2A1C54C807A0117B2D649C`.

`GOAL.md`, `NEXT.md`, and all files under `base/` were intentionally untouched during roadmap item 1.

### Editor diagnostics

VS Code diagnostics were requested for:

- `tools/validate_knowledge.py`;
- `tools/update_complexity.py`;
- `tests/test_validate_knowledge.py`;
- `tests/test_update_complexity.py`;
- `knowledge/topics/calibration-systems/examples/calibration_graph.py`.

Result: **PASS** - no diagnostics reported.

### Privacy and credential scan

The generated `knowledge/` tree was searched for the source email and phone fragments, Windows user-profile paths, API-key/password/secret assignments, and bearer-token patterns.

Result: **PASS** - no matches. The reusable tree and supplemental Luke artifacts do not repeat the candidate's contact details. The supplemental validator also checks Windows user-profile paths and common credential patterns.

### Git state and whitespace gate

```powershell
git status --short --branch
git diff --check
```

Initial result: **BLOCKED** - both commands reported that the path was not a Git repository.

Current repository result:

- `git diff --check`: **PASS** - no output.
- Roadmap item 1 began on clean `master` after the user committed `NEXT.md`.
- During execution, concurrent user work switched the checkout to `main`, modified `NEXT.md`, and added empty `FEEDBACK.md` plus `assets/icon.png`.
- The current item 1 wording is unchanged. Those user-owned paths were read only as needed to verify scope and were not edited by this task.

Roadmap item 4 result: repository-wide `git diff --check` reports no whitespace errors.

## Example evidence

The [dependency-invalidation example](../topics/calibration-systems/examples/dependency-invalidation.md) remains the only source-domain page marked `verified` for executable technical behavior. Its script asserts the full descendant order and two edge cases, then emits:

```text
changed: coupler-frequency
stale: swap-pulse, wait-time, cz-calibration, gate-benchmark
```

This verifies the synthetic graph traversal only. It does not validate hardware behavior or a private calibration architecture.

The [complexity model](complexity-model.md) is also marked `verified`, but that status covers only deterministic graph calculation and rendering behavior.

## Remaining uncertainty

- The original six PDFs are absent, so visual conversion fidelity cannot be checked.
- Core public sources used by the Luke supplement were fetched on 2026-08-14: paper metadata, open preprints, the live role, product pages, the acquisition announcement, and public biography records.
- The exact published 2024 author-contribution sentence could not be recovered independently; the portfolio marks it `TODO: verify` rather than repeating it as independently checked.
- No stable institutional dissertation record was found for Luke; education details remain labeled corroborated public background.
- LinkedIn was login-gated, and secondary profile aggregators may be stale or copy one another.
- The physical cause of the reported long repeated-CZ degradation remains unresolved.
- Time-sensitive company and hardware claims remain attributed and `draft`.
- Public papers establish team outputs and named contribution groups; they do not prove that every author owns every skill represented in a paper.
- Resume-only technical terms remain blocked until authoritative explanatory sources or project repositories enter the corpus.
- The new foundation pages deliberately stop before infinite-dimensional rigor, density matrices, generalized measurements, open systems, and device-specific pulse physics.
- The Markdown rating input remains a static metadata mirror. Dualrail Atlas now supplies durable personal ratings and notes without changing canonical Markdown.

## Stop point

Roadmap items 1-7 are complete. The next bounded action is roadmap item 8: final bug, performance, accessibility, and consistency work after separately assessing Feedback 2–4. Current reported Copilot spend is `$129.92 / $200`, leaving `$70.08` before this item-7 pass is added.
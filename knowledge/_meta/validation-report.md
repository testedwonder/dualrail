---
title: Validation Report
kind: index
status: verified
prerequisites: []
source_files: []
---

# Validation report

Date: 2026-08-14

Scope: Phase 1 architecture, the Luke Mastalli-Kelly research supplement, and `NEXT.md` roadmap items 1-3: recursive source-backed definitions, semantic navigation, complexity heatmaps, manual understanding metadata, the Dualrail Atlas visual study application, and feedback-driven structural assessment.

## Result

The six-topic technical tree contains 56 content pages and reaches every substantively explained reusable concept in the source corpus. Dualrail Atlas indexes the knowledge tree and all 3 base documents into a read-only visual reader, graph, and progress system. Feedback 1 has been assessed against the live graph and converted into a bounded, source-gated item-4 contract. The expanded architecture, two supplemental source artifacts, derived study metadata, local personal-data workflow, and all scoped executable checks pass. The repository-wide whitespace gate reports one preserved issue in the incoming feedback, recorded below.

### Feedback assessment checks

Input: [`FEEDBACK.md`, feedback 1](../../FEEDBACK.md)

Result: **PASS WITH ACCEPTED GAPS** - the existing structure is internally valid, and the feedback identifies missing prerequisite coverage rather than stale complexity data.

- `tools/validate_knowledge.py` passed before assessment edits with 79 knowledge files.
- `tools/update_complexity.py --check` passed with 0 stale pages.
- Five content pages currently score `0.0`; both disputed pages are among them and declare no prerequisites.
- No canonical pages currently teach basic linear algebra, complex numbers, general quantum operators, observables, or the Born rule.
- Existing self-checks are static; the app has no immediate-feedback prerequisite exercise surface.
- The [verified assessment](feedback-assessment.md) accepts a bounded ten-page foundation topic, one ordered learning path, prerequisite rewiring, five exercise surfaces, and a requirement for authoritative external sources.
- No content or generated complexity value was changed during item 3; that implementation belongs to roadmap item 4.
- `npm run check` regenerated an 80-file app index, passed all 8 Vitest checks, and completed the production build.
- A browser search returned exactly one Feedback Assessment 1 result and opened its addressable document with no Vite error overlay.

### Visual application checks

```powershell
cd app
npm test
npm run build
```

Result: **PASS** - 8 Vitest checks across 2 files, followed by a successful TypeScript and Vite production build.

The tests cover rating bounds, malformed-entry sanitation, JSON import/export round trips, combined library filters, progress summaries, internal Markdown-link resolution, real-corpus rendering, local persistence, search, and progress navigation. The pretest and prebuild hooks both regenerated the full index: 79 knowledge files, 56 rateable topic items, and 3 base documents.

Browser validation at desktop and emulated `390 x 844` mobile geometry also passed:

- the library rendered with no console errors or document-level horizontal overflow;
- each reader has one canonical H1, with MathJax SVG equations and highlighted code blocks with copy controls;
- the default map showed 11 readable topic-scoped nodes, while the all-topic mode retained all 56 nodes and 96 prerequisite edges;
- graph-node selection opened the correct addressable `?doc=` URL;
- understanding and notes survived a browser reload;
- progress rendered 6 topic rows, 3 source rows, and a 6-item study queue;
- the mobile library and study drawers remained inside the fixed viewport with their close and editing controls visible;
- export produced a connected blob target with a dated JSON filename;
- import restored a version-1 JSON rating and note, and the temporary validation state was cleared afterward.

The production build reports a chunk-size warning because the local corpus, MathJax SVG renderer, and graph engine are bundled together. This is a performance advisory, not a failed gate; the application is local-first and the rendered workflow passed.

## Exact checks

### Validator regression tests

```powershell
& "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe" -B -m unittest discover -s tests -v
```

Result: **PASS** - 23 tests. The tests cover valid trees, missing metadata, empty pages, broken links and anchors, orphans, duplicate canonical slugs, unresolved sources, prerequisites and next steps, prerequisite cycles, learning-path order, executable claims, trailing whitespace, supplemental source links, required evidence labels, explicit simulation labels, exact complexity endpoints, generated controls, manual-rating preservation, stale complexity, rating bounds, content sections, and idempotence.

### Complexity calculation

```powershell
& "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe" -B tools/update_complexity.py
& "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe" -B tools/update_complexity.py --check
```

Result: **PASS** - 56 content pages calculated; the no-write check reports 0 stale pages.

Measured graph:

- maximum prerequisite depth: 7;
- maximum direct prerequisite count: 4;
- complexity range: 0.0 to 9.5;
- spectral range used by current pages: 700 nm red to 396 nm near violet.

### Repository knowledge-tree validation

```powershell
& "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe" -B tools/validate_knowledge.py
```

Result: **PASS** - 80 knowledge Markdown files, 2 supplemental source files, and 1 executable example after adding the item-3 assessment.

The command validates:

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

Roadmap item 3 result:

- Repository-wide `git diff --check`: **BLOCKED** - the incoming `FEEDBACK.md` has trailing whitespace on line 10.
- Item-3 tracked output paths: **PASS** - targeted `git diff --check` produced no output.
- The knowledge validator also checks trailing whitespace in all 80 knowledge files, including the new assessment, and passed.
- The feedback text was preserved verbatim rather than silently normalizing a user-owned input file.

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
- The Markdown rating input remains a static metadata mirror. Dualrail Atlas now supplies durable personal ratings and notes without changing canonical Markdown.

## Stop point

Roadmap items 1-3 are complete. The next bounded action is roadmap item 4: implement the sourced mathematics and quantum-foundations batch, prerequisite exercises, target-page rewiring, and natural complexity recalculation defined in [Feedback assessment 1](feedback-assessment.md).
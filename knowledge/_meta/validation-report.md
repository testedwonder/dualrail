---
title: Validation Report
kind: index
status: verified
prerequisites: []
source_files: []
---

# Validation report

Date: 2026-08-14

Scope: Phase 1 architecture, the Luke Mastalli-Kelly research supplement, and `NEXT.md` roadmap item 1: recursive source-backed definitions, semantic navigation, complexity heatmaps, and manual understanding metadata.

## Result

The six-topic technical tree contains 56 content pages and reaches every substantively explained reusable concept in the source corpus. The expanded architecture, two supplemental source artifacts, derived study metadata, and all executable checks pass.

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

Result: **PASS** - 79 knowledge Markdown files, 2 supplemental source files, and 1 executable example.

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
- The Markdown rating input mirrors metadata but cannot persist edits by itself; durable interface storage belongs to roadmap item 2.

## Stop point

Roadmap item 1 is complete. Roadmap items 2-5 have not begun. `FEEDBACK.md` is currently empty.
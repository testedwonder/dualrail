---
title: Validation Report
kind: index
status: verified
prerequisites: []
source_files: []
---

# Validation report

Date: 2026-08-14

Scope: Phase 1 architecture, one calibration-systems pilot, one deterministic example, the knowledge-tree validator, and the bounded Luke Mastalli-Kelly research and simulated-conversation supplement. This report does not certify the unexpanded corpus.

## Result

The local architecture, pilot, two supplemental source artifacts, and all executable checks pass. Git was unavailable during the initial run, but a repository was initialized before the supplemental task. Current Git checks are recorded below.

## Exact checks

### Validator regression tests

```powershell
& "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe" -B -m unittest discover -s tests -v
```

Result: **PASS** - 15 tests. The tests cover valid trees, missing metadata, empty pages, broken links and anchors, orphans, duplicate canonical slugs, unresolved sources and prerequisites, prerequisite cycles, learning-path order, executable claims, trailing whitespace, supplemental source links, required evidence labels, and explicit simulation labels on invented Luke dialogue.

### Repository knowledge-tree validation

```powershell
& "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe" -B tools/validate_knowledge.py
```

Result: **PASS** - 17 knowledge Markdown files, 2 supplemental source files, and 1 executable example.

The command validates:

- UTF-8 readable, non-empty Markdown with required metadata;
- allowed page kinds and statuses;
- relative local links and target anchors;
- root-index reachability for every Markdown page;
- unique canonical slugs for content pages;
- source references constrained to existing files under `base/`;
- valid prerequisite references and an acyclic graph;
- declared learning-path order and prerequisite coverage;
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

`GOAL.md` was intentionally untouched.

### Editor diagnostics

VS Code diagnostics were requested for:

- `tools/validate_knowledge.py`;
- `tests/test_validate_knowledge.py`;
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

Current result after repository initialization:

- `git diff --check`: **PASS** - no output.
- `git status --short`: only the four intended tracked edits, the two intended supplemental files, and unrelated untracked `NEXT.md` are present.
- `NEXT.md` was not read, edited, staged, or included in this task.

## Example evidence

The [dependency-invalidation example](../topics/calibration-systems/examples/dependency-invalidation.md) is the only page marked `verified` for technical behavior. Its script asserts the full descendant order and two edge cases, then emits:

```text
changed: coupler-frequency
stale: swap-pulse, wait-time, cz-calibration, gate-benchmark
```

This verifies the synthetic graph traversal only. It does not validate hardware behavior or a private calibration architecture.

## Remaining uncertainty

- The original six PDFs are absent, so visual conversion fidelity cannot be checked.
- Core public sources used by the Luke supplement were fetched on 2026-08-14: paper metadata, open preprints, the live role, product pages, the acquisition announcement, and public biography records.
- The exact published 2024 author-contribution sentence could not be recovered independently; the portfolio marks it `TODO: verify` rather than repeating it as independently checked.
- No stable institutional dissertation record was found for Luke; education details remain labeled corroborated public background.
- LinkedIn was login-gated, and secondary profile aggregators may be stale or copy one another.
- The physical cause of the reported long repeated-CZ degradation remains unresolved.
- Time-sensitive company and hardware claims remain outside the pilot.
- Public papers establish team outputs and named contribution groups; they do not prove that every author owns every skill represented in a paper.

## Stop point

Bulk technical expansion has not begun. The person-specific research and conversation supplement does not authorize the dual-rail knowledge-tree batch. The exact proposed next technical batch remains documented in the [bounded expansion plan](expansion-plan.md) and requires review.
---
title: First-Run Validation Report
kind: index
status: verified
prerequisites: []
source_files: []
---

# First-run validation report

Date: 2026-08-14

Scope: Phase 1 architecture, one calibration-systems pilot, one deterministic example, and the knowledge-tree validator. This report does not certify the unexpanded corpus or independently verify external papers linked by the source compendium.

## Result

The local architecture and pilot checks pass. One required repository gate is **blocked**: Git checks cannot operate because the workspace is not a Git repository. That limitation is not reclassified as a pass.

## Exact checks

### Validator regression tests

```powershell
& "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe" -B -m unittest discover -s tests -v
```

Result: **PASS** — 11 tests. The tests cover valid trees, missing metadata, empty pages, broken links and anchors, orphans, duplicate canonical slugs, unresolved sources and prerequisites, prerequisite cycles, learning-path order, executable claims, and trailing whitespace.

### Repository knowledge-tree validation

```powershell
& "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe" -B tools/validate_knowledge.py
```

Result: **PASS** — 17 Markdown files and 1 executable example.

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

### Source preservation

```powershell
Get-FileHash "base\DWave_Application_and_Study_Materials.md" -Algorithm SHA256
```

Result: **PASS** — before and after SHA-256 values match:

```text
AEA8E3200A8AA5C0BB9C963B223E6627AA60A4B8F038B951F28546C67EAD9BBA
```

No file under `base/` was edited. `GOAL.md` was also intentionally untouched.

### Editor diagnostics

VS Code diagnostics were requested for:

- `tools/validate_knowledge.py`;
- `tests/test_validate_knowledge.py`;
- `knowledge/topics/calibration-systems/examples/calibration_graph.py`.

Result: **PASS** — no diagnostics reported.

### Privacy and credential scan

The generated `knowledge/` tree was searched for the source email and phone fragments, Windows user-profile paths, API-key/password/secret assignments, and bearer-token patterns.

Result: **PASS** — no matches. The tree names the existence of private source material but does not repeat its contact details or interview logistics.

### Git state and whitespace gate

```powershell
git status --short --branch
git diff --check
```

Result: **BLOCKED** — both commands report that this path is not a Git repository. The validator’s text-quality checks pass, but they are recorded as a fallback and not as a Git result.

## Example evidence

The [dependency-invalidation example](../topics/calibration-systems/examples/dependency-invalidation.md) is the only page marked `verified` for technical behavior. Its script asserts the full descendant order and two edge cases, then emits:

```text
changed: coupler-frequency
stale: swap-pulse, wait-time, cz-calibration, gate-benchmark
```

This verifies the synthetic graph traversal only. It does not validate hardware behavior or a private calibration architecture.

## Remaining uncertainty

- The original six PDFs are absent, so visual conversion fidelity cannot be checked.
- External primary sources cited inside the compendium were not fetched in this run.
- The physical cause of the reported long repeated-CZ degradation remains unresolved.
- Time-sensitive company and hardware claims remain outside the pilot.
- Unrelated-worktree isolation cannot be proven without Git metadata; the final file inventory contains only the two preserved inputs plus the intentional `knowledge/`, `tools/`, and `tests/` outputs.

## Stop point

Bulk expansion has not begun. The exact proposed next batch is documented in the [bounded expansion plan](expansion-plan.md) and requires review.
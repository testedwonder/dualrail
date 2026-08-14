---
title: Bounded Expansion Plan
kind: index
status: draft
prerequisites: []
source_files: [base/DWave_Application_and_Study_Materials.md]
---

# Bounded expansion plan

## Completed: architecture and calibration pilot

The first run established the root, glossary, metadata records, calibration pilot, deterministic validator, focused tests, and one executable dependency-invalidation example.

## Completed: roadmap item 1 definition tree

Authorized by `NEXT.md` roadmap item 1 and completed on 2026-08-14.

Delivered:

- 56 canonical concepts, definitions, algorithms, and examples;
- six implemented technical topics;
- source-backed prerequisite, next-step, related, and provenance metadata on every content page;
- two cross-topic learning paths plus the calibration path;
- complete canonical glossary;
- deterministic longest-path depth and direct-prerequisite analysis;
- 80/20 depth/prerequisite complexity score;
- red-to-violet wavelength, frequency, and hex-color metadata;
- visible complexity badge and `0`-`10` understanding input;
- manual understanding metadata preserved by regeneration;
- stale-complexity, broken-navigation, cycle, orphan, source, and link validation;
- focused tests for formula endpoints, manual ratings, idempotence, and failure cases.

## Source-completeness boundary

The following areas are mapped because the corpus explains them substantively:

- dual-rail encoding, loss, erasure, and error hierarchy;
- superconducting circuit-QED components and interactions;
- single- and two-qubit control, measurement, benchmarking, and structured errors;
- calibration records, validity, dependencies, drift diagnosis, and invalidation;
- production quantum-control semantics, orchestration, provenance, observability, and testing;
- annealing models, embedding, sampling, hybrid workflows, timing, evidence, and benchmarking.

The following remain intentionally unexpanded because they are only named in resume or training lists:

- QFT and inverse QFT;
- Grover search;
- VQE and QAOA;
- BB84;
- quantum kernels and classification;
- density-matrix mechanics, partial trace, fidelity, and trace distance beyond the narrow uses already explained;
- Mastermind, CHUBE, Ariadion internals, and the qubit-reuse study beyond first-party project claims.

Adding those pages requires the relevant project repositories or authoritative primary sources. Model memory is not an acceptable substitute.

## Remaining roadmap items, not authorized here

`NEXT.md` item 2 requests a simplified Obsidian-like visual application for navigation, graph visualization, search, filters, personal notes, durable understanding ratings, and export.

Items 3-5 request feedback-driven refinement, a broader repository `README.md`, and a public-source research interface. `FEEDBACK.md` was empty when item 1 finished, so it introduced no additional item-1 requirement.

Roadmap item 1 prepares the data contract for later work but does not implement items 2-5. The current HTML input in Markdown mirrors metadata; it is not durable note storage.

## Future maintenance rule

A later source batch is complete only when:

1. every new content page has one canonical slug;
2. prerequisite references are acyclic;
3. next-step and related references resolve;
4. source provenance is local and explicit;
5. `tools/update_complexity.py` has regenerated derived fields;
6. `tools/update_complexity.py --check` reports no stale pages;
7. `tools/validate_knowledge.py` passes;
8. focused tests and `git diff --check` pass.
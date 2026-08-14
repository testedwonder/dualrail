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

## Completed: roadmap item 2 visual application

Completed on 2026-08-14 under `app/`. Dualrail Atlas provides read-only corpus indexing, searchable and filterable navigation, rendered Markdown and MathJax, source and relationship navigation, a topic-scoped graph, local ratings and notes, JSON backup and restore, progress summaries, and responsive desktop and mobile layouts.

## Completed: roadmap item 3 feedback assessment

Completed on 2026-08-14 in [Feedback assessment 1](feedback-assessment.md).

The existing tree and generated complexity metadata pass all deterministic checks. Feedback 1 is accepted: Quantum States and Fock Notation and From Gates to Calibration are structurally valid but pedagogically premature roots. The assessment defines a bounded mathematics and quantum-foundations topic, prerequisite rewiring, five immediate-feedback exercise surfaces, external-source requirements, and acceptance gates for roadmap item 4.

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

## Next bounded batch: roadmap item 4

Implement only the accepted scope in [Feedback assessment 1](feedback-assessment.md): acquire authoritative sources, add the mathematics and quantum-foundations topic and learning path, rewire the two named target pages, build the prerequisite exercises, regenerate complexity, and publish a feedback completion summary.

Do not manually edit generated complexity values to satisfy the requested threshold. The new prerequisite graph must produce the increase, and the validator must remain authoritative.

## Later roadmap items

Items 5-8 remain outside this batch: the expanded repository README and complete table of contents, public-source research interface, immersive visual polish and simulations, and final bug and optimization work.

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
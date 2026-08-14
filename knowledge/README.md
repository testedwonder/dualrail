---
title: Fundamentals-First Knowledge Tree
kind: index
status: draft
prerequisites: []
source_files: []
---

# Fundamentals-first knowledge tree

This is the content index behind the [Dualrail Atlas application](../app/README.md). The implemented tree covers reusable technical concepts with explicit prerequisites, evidence boundaries, examples, and self-checks. Terms without adequate authoritative support remain excluded.

## Start here

Need the mathematics and quantum prerequisites: follow [Foundations for quantum states and calibration](learning-paths/foundations-to-quantum-systems.md).

New to gate-model hardware: follow [Dual rail from notation to gates](learning-paths/dual-rail-to-gates.md).

New to annealing: follow [Annealing from model to evidence](learning-paths/annealing-first.md).

Studying calibration software: follow [Calibration from first principles](learning-paths/calibration-first.md).

Looking up a term: use the [glossary](glossary.md).

## Topics

| Topic | What it answers | State |
| --- | --- | --- |
| [Mathematics and quantum foundations](topics/mathematics-and-quantum-foundations/README.md) | Which mathematical and physical ideas make state notation, measurement, gates, and calibration meaningful | Implemented |
| [Dual-rail qubits and erasures](topics/dual-rail-qubits/README.md) | How one excitation across two modes can expose photon loss | Implemented |
| [Superconducting circuit QED and control](topics/circuit-qed/README.md) | How cavities, transmons, couplers, interactions, coherence, and readout relate | Implemented |
| [Error-aware gates and measurement](topics/error-aware-gates/README.md) | Why erasure, leakage, Pauli errors, SPAM, gate orientation, and postselection stay distinct | Implemented |
| [Calibration systems](topics/calibration-systems/README.md) | How measured behavior becomes a versioned, conditional, and revocable control setting | Implemented |
| [Quantum-control software](topics/quantum-control-software/README.md) | How experiment intent reaches control hardware and returns as traceable evidence | Implemented |
| [Annealing and evidence](topics/annealing-and-evidence/README.md) | What the annealing workflow does and how to evaluate bounded advantage claims | Implemented |

## Study status

Every content page has a generated spectral complexity badge and an understanding input.

- Red is the shallowest end of the current tree; violet is the deepest.
- Tree depth contributes 80% of complexity and direct prerequisite count contributes 20%.
- `understanding` is a manual integer from `0` to `10` in page metadata. The visible HTML input mirrors the default value.
- [Dualrail Atlas](../app/README.md) stores durable personal ratings and notes separately in browser local storage; it never rewrites this source-backed tree.
- Run `python tools/update_complexity.py` after changing prerequisites and `python tools/update_complexity.py --check` to detect stale values.

The complete formula and spectral mapping are in the [complexity model](_meta/complexity-model.md).

## How to read evidence labels

- **Source-backed fact:** supported by a public source in the topic claim map.
- **Explanation:** a simpler restatement or consequence of source-backed material.
- **Analogy:** a teaching aid. It is not evidence that the compared systems are identical.
- **Provisional inference:** a plausible model that still needs direct evidence.
- **Unresolved question:** the available source does not settle it.

Most technical pages remain `draft` because repository checks validate public provenance and structure but do not independently reproduce external results.

## Architecture and maintenance

- [Concept and prerequisite map](_meta/concept-map.md)
- [Complexity model](_meta/complexity-model.md)
- [Validation report](_meta/validation-report.md)
- [Public technical source registry](research/public-technical-sources.md)
- [Release-candidate review](../REVIEW.md)

The application index contains learner-facing knowledge and public technical references only.

## Visual application

Run the local interface from `app/`:

```powershell
npm install
npm run dev
```

The interface provides a searchable and filterable library, rendered Markdown and MathJax, code-copy controls, prerequisite and related-page navigation, a topic-scoped relationship map, public technical research, local source and correction proposals, notes and ratings, JSON backup and restore, progress views, five immediate-feedback foundation exercises, a full-bleed Three.js dual-rail state lab, and an installable offline website/mobile release.

The application regenerates its read-only corpus index before development, tests, and production builds. See the [application guide](../app/README.md) for the data boundary and validation commands.

## Current boundary

The current release covers the linked definition tree, derived study metadata, visual study application, sourced foundation expansion, interactive exercises, exhaustive [repository guide](../README.md), public technical research, immersive 3D state lab, GitHub feedback intake, and installable PWA delivery.

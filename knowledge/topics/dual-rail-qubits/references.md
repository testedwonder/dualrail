---
title: Dual-Rail Qubit References
kind: index
status: draft
prerequisites: []
source_files: [base/DWave_Application_and_Study_Materials.md]
---

# Dual-rail qubit references

## Local source map

| Source unit | Pages | Supports |
| --- | ---: | --- |
| Luke Mastalli-Kelly dual-rail study guide | 2, 5, 7, 9-10, 20-21 | Encoding, loss-to-vacuum behavior, erasure distinctions, error hierarchy, and source ladder |
| Repeated-CZ fundamentals | 4-6, 12, 22 | Qubit and gate language, cavity encoding, loss and frequency context, concise definitions |
| D-Wave company study | 10, 12 | Bounded gate-model and dual-rail context |

Local corpus: [D-Wave Application and Study Materials](../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide).

## Primary sources named by the corpus

- Teoh et al., *Dual-rail encoding with superconducting cavities*. <https://arxiv.org/abs/2212.12077>
- Chou et al., *Demonstrating a superconducting dual-rail cavity qubit with erasure-detected logical measurements*. <https://arxiv.org/abs/2307.03169>
- Mehta et al., *Bias-preserving and error-detectable entangling operations in a superconducting dual-rail system*. <https://arxiv.org/abs/2503.10935>

The last two open preprints were checked during the 2026-08-14 Luke research task. Pages remain `draft` because this batch does not independently reproduce their experiments.

## Open questions

- Which erasure-check cadence best balances information and disturbance in a larger code?
- How should a decoder consume delayed erasure information from a gate sequence?
- Which non-vacuum leakage states matter at scale?

Parent: [Dual-rail qubits and erasures](README.md)

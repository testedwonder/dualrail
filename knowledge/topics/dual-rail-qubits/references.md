---
title: Dual-Rail Qubit References
kind: index
status: draft
prerequisites: []
source_files: [knowledge/research/public-technical-sources.md]
---

# Dual-rail qubit references

## Claim map

- Teoh et al., *Dual-rail encoding with superconducting cavities*. <https://arxiv.org/abs/2212.12077>
- Chou et al., *Demonstrating a superconducting dual-rail cavity qubit with erasure-detected logical measurements*. <https://arxiv.org/abs/2307.03169>
- Mehta et al., *Bias-preserving and error-detectable entangling operations in a superconducting dual-rail system*. <https://arxiv.org/abs/2503.10935>
- IBM Quantum Learning, finite state vectors, measurement, and unitary operations. <https://quantum.cloud.ibm.com/learning/courses/basics-of-quantum-information/single-systems/quantum-information>

The public papers support encoding, erasure-detected measurement, and system-specific entangling operations. IBM supports the finite-dimensional state prerequisites. Pages remain `draft` because repository checks do not independently reproduce the experiments or establish that every device shares the same error hierarchy.

## Open questions

- Which erasure-check cadence best balances information and disturbance in a larger code?
- How should a decoder consume delayed erasure information from a gate sequence?
- Which non-vacuum leakage states matter at scale?

Parent: [Dual-rail qubits and erasures](README.md)

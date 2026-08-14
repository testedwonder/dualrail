---
title: Randomized Benchmarking
kind: concept
status: draft
prerequisites: [topics/error-aware-gates/concepts/single-qubit-dual-rail-control.md, topics/error-aware-gates/concepts/controlled-z-gate.md]
next_steps: [topics/error-aware-gates/examples/repeated-cz-experiment.md]
related: [topics/error-aware-gates/concepts/quantum-state-tomography.md, topics/dual-rail-qubits/concepts/pauli-errors-and-error-hierarchy.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 10
complexity_prerequisite_count: 2
complexity_score: 7.15
complexity_wavelength_nm: 471
complexity_frequency_thz: 636.5
complexity_color: "#0086ff"
understanding: 0
---

# Randomized benchmarking

<!-- study-status:start -->
<div class="study-status" data-complexity="7.15" data-wavelength-nm="471">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#0086ff;color:#ffffff;">Complexity 7.15/10 | 471 nm | 636.5 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Randomized Benchmarking"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Single-Qubit Dual-Rail Control](single-qubit-dual-rail-control.md), [Controlled-Z Gate](controlled-z-gate.md)
- **Next steps:** [Repeated-CZ Experiment](../examples/repeated-cz-experiment.md)
- **Related:** [Quantum State Tomography](quantum-state-tomography.md), [Pauli Errors and Error Hierarchy](../../dual-rail-qubits/concepts/pauli-errors-and-error-hierarchy.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Randomized benchmarking, or RB, applies randomized gate sequences whose ideal combined result is known, then measures how survival changes with sequence length. Interleaved RB inserts a target gate to estimate its added error relative to a reference.

## Why it matters

RB provides an average gate-performance estimate that can be less sensitive to some SPAM effects than direct process reconstruction.

## Error-aware nuance

For an erasure qubit, the analysis must report both:

- the fraction of shots remaining in the code space;
- the residual error among the retained shots.

Leakage and seepage can complicate standard exponential assumptions. The source notes that usable depth can also be limited by accumulating erasure.

## Non-example

Reporting one RB error number while discarding detected erasures without stating the surviving fraction.

## Self-check

1. What does interleaving change?
2. Why are erasure and residual error separate outputs?
3. What can limit usable sequence depth?

## Sources and status

Source-backed by the [gate glossary, source page 7](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide) and checked SWS preprint. Status: `draft`.

Parent: [Error-aware gates](../README.md)

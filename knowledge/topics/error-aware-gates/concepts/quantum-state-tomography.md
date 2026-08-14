---
title: Quantum State Tomography
kind: concept
status: draft
prerequisites: [topics/dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md, topics/circuit-qed/concepts/readout-chain-and-iq-data.md]
next_steps: [topics/error-aware-gates/examples/repeated-cz-experiment.md]
related: [topics/error-aware-gates/concepts/spam.md, topics/error-aware-gates/concepts/randomized-benchmarking.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 7
complexity_prerequisite_count: 2
complexity_score: 5.31
complexity_wavelength_nm: 530
complexity_frequency_thz: 565.6
complexity_color: "#00ff00"
understanding: 0
---

# Quantum state tomography

<!-- study-status:start -->
<div class="study-status" data-complexity="5.31" data-wavelength-nm="530">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#00ff00;color:#111111;">Complexity 5.31/10 | 530 nm | 565.6 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Quantum State Tomography"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Quantum States and Fock Notation](../../dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md), [Readout Chain and IQ Data](../../circuit-qed/concepts/readout-chain-and-iq-data.md)
- **Next steps:** [Repeated-CZ Experiment](../examples/repeated-cz-experiment.md)
- **Related:** [State-Preparation-and-Measurement Error](spam.md), [Randomized Benchmarking](randomized-benchmarking.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Quantum state tomography, or QST, reconstructs a state estimate from measurements in multiple bases over many repeated preparations.

## Why it matters

One measurement basis cannot reveal every component of a state. The repeated-CZ experiment uses many measurement settings to estimate the final two-qubit state, then derives fidelity, purity, and error structure.

## Procedure shape

1. Prepare the same target state many times.
2. Apply different analysis rotations before measurement.
3. Collect outcome statistics for each setting.
4. Reconstruct a state representation under a declared method.
5. Calculate metrics and uncertainty.

## Limits

- Tomography estimates a state from repeated shots; it does not inspect one unknown copy completely.
- Reconstruction can be affected by SPAM, classifier rules, finite samples, and model choices.
- A high reconstructed fidelity does not alone identify the physical cause of error.

## Self-check

1. Why are multiple measurement bases needed?
2. Which upstream errors can bias a reconstruction?
3. Why does tomography require many preparations?

## Sources and status

Source-backed by the [gate glossary and paper briefs, source pages 7 and 10](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide). Status: `draft`.

Parent: [Error-aware gates](../README.md)

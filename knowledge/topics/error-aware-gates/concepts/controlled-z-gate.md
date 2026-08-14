---
title: Controlled-Z Gate
kind: definition
status: draft
prerequisites: [topics/dual-rail-qubits/concepts/dual-rail-encoding.md, topics/circuit-qed/concepts/circuit-qed-and-dispersive-interaction.md]
next_steps: [topics/error-aware-gates/algorithms/swap-wait-swap-cz.md]
related: [topics/error-aware-gates/concepts/control-target-asymmetry.md, topics/calibration-systems/fundamentals/from-gates-to-calibration.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 9
complexity_prerequisite_count: 2
complexity_score: 6.54
complexity_wavelength_nm: 491
complexity_frequency_thz: 610.6
complexity_color: "#00fff9"
understanding: 0
---

# Controlled-Z gate

<!-- study-status:start -->
<div class="study-status" data-complexity="6.54" data-wavelength-nm="491">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#00fff9;color:#111111;">Complexity 6.54/10 | 491 nm | 610.6 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Controlled-Z Gate"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Dual-Rail Encoding](../../dual-rail-qubits/concepts/dual-rail-encoding.md), [Circuit QED and Dispersive Interaction](../../circuit-qed/concepts/circuit-qed-and-dispersive-interaction.md)
- **Next steps:** [Swap-Wait-Swap Controlled-Z](../algorithms/swap-wait-swap-cz.md)
- **Related:** [Control-Target Error Asymmetry](control-target-asymmetry.md), [From Gates to Calibration](../../calibration-systems/fundamentals/from-gates-to-calibration.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A controlled-Z, or CZ, is a two-qubit entangling gate that adds a phase to one joint logical basis condition while leaving the others unchanged up to allowed local phases.

## Why it matters

Independent single-qubit operations cannot create general entanglement. A useful gate-model processor needs a high-quality entangling operation.

## Physical questions hidden by `CZ`

- Which physical modes interact?
- Which coupler mediates the interaction?
- What pulse and wait times produce the phase?
- Which local phases must be tracked or corrected?
- How much erasure, dephasing, leakage, and crosstalk occur?

## Error-aware requirement

For a dual-rail architecture, low average error is insufficient. The gate should preserve detectable erasures as the dominant category and avoid creating residual bit flips or uncontrolled leakage propagation.

## Non-example

Calling any operation with roughly the right average fidelity a suitable CZ without checking its conditional phase or structured errors.

## Self-check

1. What makes CZ an entangling gate?
2. Why can local phases still require calibration?
3. Which error property matters beyond average fidelity?

## Sources and status

Source-backed by repeated-CZ source page 4 and the [gate summary, source page 7](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide). Status: `draft`.

Parent: [Error-aware gates](../README.md)

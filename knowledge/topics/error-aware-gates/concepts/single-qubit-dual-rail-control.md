---
title: Single-Qubit Dual-Rail Control
kind: concept
status: draft
prerequisites: [topics/dual-rail-qubits/concepts/dual-rail-encoding.md, topics/circuit-qed/concepts/beamsplitter-and-parametric-drive.md]
next_steps: [topics/error-aware-gates/concepts/randomized-benchmarking.md, topics/error-aware-gates/algorithms/swap-wait-swap-cz.md]
related: [topics/circuit-qed/concepts/coherence-times.md, topics/calibration-systems/fundamentals/from-gates-to-calibration.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 4
complexity_prerequisite_count: 2
complexity_score: 5.57
complexity_wavelength_nm: 522
complexity_frequency_thz: 574.3
complexity_color: "#00ff33"
understanding: 0
---

# Single-qubit dual-rail control

<!-- study-status:start -->
<div class="study-status" data-complexity="5.57" data-wavelength-nm="522">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#00ff33;color:#111111;">Complexity 5.57/10 | 522 nm | 574.3 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Single-Qubit Dual-Rail Control"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Dual-Rail Encoding](../../dual-rail-qubits/concepts/dual-rail-encoding.md), [Beamsplitter Interaction and Parametric Drive](../../circuit-qed/concepts/beamsplitter-and-parametric-drive.md)
- **Next steps:** [Randomized Benchmarking](randomized-benchmarking.md), [Swap-Wait-Swap Controlled-Z](../algorithms/swap-wait-swap-cz.md)
- **Related:** [Coherence Times](../../circuit-qed/concepts/coherence-times.md), [From Gates to Calibration](../../calibration-systems/fundamentals/from-gates-to-calibration.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A single-qubit dual-rail gate coherently moves amplitude between the two one-excitation rails while preserving the encoded qubit.

## Control model

A parametrically driven beamsplitter interaction exchanges the excitation between cavity modes. Pulse area sets the rotation angle, while drive phase sets the logical rotation axis.

## Why it matters

The physical pulse must enact the intended encoded rotation without leaving population outside the code space, adding excessive phase error, or coupling to another mode.

## Inputs software must identify

- Rail and coupler identities
- Pump frequency, amplitude, phase, and duration
- Required calibration versions
- Scheduling and crosstalk constraints
- Expected erasure and residual-error categories

## Example and non-example

**Example:** A calibrated half-rotation creates a coherent superposition across the two rails.

**Non-example:** A classical swap that destroys relative phase.

## Self-check

1. Which pulse property sets rotation angle?
2. Which property sets axis?
3. Why must the operation preserve one total excitation?

## Sources and status

Source-backed by the [single-qubit control summary, source page 7](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide). Status: `draft`.

Parent: [Error-aware gates](../README.md)

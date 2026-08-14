---
title: Leakage and Erasure
kind: concept
status: draft
prerequisites: [topics/dual-rail-qubits/concepts/code-space.md, topics/dual-rail-qubits/concepts/photon-loss-and-vacuum.md]
next_steps: [topics/dual-rail-qubits/concepts/detection-correction-and-postselection.md, topics/dual-rail-qubits/concepts/pauli-errors-and-error-hierarchy.md]
related: [topics/quantum-control-software/concepts/outcome-semantics.md, topics/error-aware-gates/concepts/leakage-propagation.md]
source_files: [knowledge/topics/dual-rail-qubits/references.md]
complexity_depth: 10
complexity_prerequisite_count: 2
complexity_score: 7.15
complexity_wavelength_nm: 471
complexity_frequency_thz: 636.5
complexity_color: "#0086ff"
understanding: 0
---

# Leakage and erasure

<!-- study-status:start -->
<div class="study-status" data-complexity="7.15" data-wavelength-nm="471">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#0086ff;color:#ffffff;">Complexity 7.15/10 | 471 nm | 636.5 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Leakage and Erasure"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Code Space](code-space.md), [Photon Loss and Vacuum](photon-loss-and-vacuum.md)
- **Next steps:** [Detection, Correction, and Postselection](detection-correction-and-postselection.md), [Pauli Errors and Error Hierarchy](pauli-errors-and-error-hierarchy.md)
- **Related:** [Outcome Semantics](../../quantum-control-software/concepts/outcome-semantics.md), [Leakage Propagation](../../error-aware-gates/concepts/leakage-propagation.md)

<!-- learning-navigation:end -->

## Plain-language meaning

**Leakage** means the physical state has left the chosen code space. An **erasure** is an error whose location, and often time, is known to the error-correction layer.

## Relationship

Leakage can be represented as an erasure only when a check detects and localizes it reliably. Undetected leakage is not an erasure merely because it occurred outside the code space.

## Why known location helps

A decoder that knows where a fault occurred has less uncertainty than one facing an unknown logical `X`, `Y`, or `Z` error. The source describes this information advantage as the origin of reduced correction overhead, not as an absence of errors.

## Examples and non-examples

**Example:** Photon loss produces `|0,0>`; a check reports the affected qubit and time. The decoder receives an erasure.

**Non-example:** The state leaves the code space but the check misses it. That remains hidden leakage.

**Non-example:** A readout classifier fails to assign a state. Assignment failure is an evidence problem, not automatically a physical erasure.

## Misconceptions

- Erasure does not mean the state survived.
- Detection does not imply correction.
- A high erasure-detection rate does not eliminate residual Pauli errors.

## Self-check

1. What extra evidence converts leakage into an erasure?
2. Why is an assignment failure a different category?
3. What still has to happen after an erasure is reported?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map). Status: `draft`.

Parent: [Dual-rail qubits](../README.md)

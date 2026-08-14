---
title: Detection, Correction, and Postselection
kind: concept
status: draft
prerequisites: [topics/dual-rail-qubits/concepts/leakage-and-erasure.md]
next_steps: [topics/error-aware-gates/algorithms/logical-measurement-with-erasure-detection.md, topics/quantum-control-software/concepts/realtime-control-and-error-handling.md]
related: [topics/quantum-control-software/concepts/outcome-semantics.md, topics/dual-rail-qubits/concepts/pauli-errors-and-error-hierarchy.md]
source_files: [knowledge/topics/dual-rail-qubits/references.md]
complexity_depth: 11
complexity_prerequisite_count: 1
complexity_score: 7.27
complexity_wavelength_nm: 467
complexity_frequency_thz: 642.0
complexity_color: "#006cff"
understanding: 0
---

# Detection, correction, and postselection

<!-- study-status:start -->
<div class="study-status" data-complexity="7.27" data-wavelength-nm="467">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#006cff;color:#ffffff;">Complexity 7.27/10 | 467 nm | 642.0 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Detection, Correction, and Postselection"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Leakage and Erasure](leakage-and-erasure.md)
- **Next steps:** [Logical Measurement with Erasure Detection](../../error-aware-gates/algorithms/logical-measurement-with-erasure-detection.md), [Real-Time Control and Error Handling](../../quantum-control-software/concepts/realtime-control-and-error-handling.md)
- **Related:** [Outcome Semantics](../../quantum-control-software/concepts/outcome-semantics.md), [Pauli Errors and Error Hierarchy](pauli-errors-and-error-hierarchy.md)

<!-- learning-navigation:end -->

## Plain-language distinction

- **Detection** flags that an error occurred and may identify its location or time.
- **Correction** uses redundancy, a decoder, and an operational response to recover protected information.
- **Postselection** discards runs that meet a failure condition.

## Why it matters

These actions can use the same erasure signal but solve different problems. A laboratory benchmark may postselect detected losses. A fault-tolerant computation cannot discard every failed run indefinitely; it needs real-time handling and decoding.

## Worked contrast

| Observation | Detection response | Postselection response | Correction response |
| --- | --- | --- | --- |
| Vacuum found on rail pair | Record location/time | Remove the shot from an aggregate | Feed the erasure into a code and recovery procedure |

## Failure modes

- Claiming an erasure check has corrected the state.
- Comparing postselected fidelity without reporting the discarded fraction.
- Treating postselection rules as harmless analysis details when they change reported metrics.

## Self-check

1. Which action preserves no failed shot at all?
2. Which action needs a higher-level code?
3. Why must a result report both postselected quality and surviving fraction?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map). Status: `draft`.

Parent: [Dual-rail qubits](../README.md)

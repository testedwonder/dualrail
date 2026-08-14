---
title: Loss to Vacuum Worked Example
kind: example
status: draft
prerequisites: [topics/dual-rail-qubits/concepts/dual-rail-encoding.md, topics/dual-rail-qubits/concepts/photon-loss-and-vacuum.md, topics/dual-rail-qubits/concepts/leakage-and-erasure.md]
next_steps: [topics/dual-rail-qubits/concepts/detection-correction-and-postselection.md, topics/error-aware-gates/algorithms/logical-measurement-with-erasure-detection.md]
related: [topics/quantum-control-software/concepts/outcome-semantics.md, topics/error-aware-gates/concepts/leakage-propagation.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 11
complexity_prerequisite_count: 3
complexity_score: 8.27
complexity_wavelength_nm: 435
complexity_frequency_thz: 689.2
complexity_color: "#1f00ff"
understanding: 0
---

# Loss to vacuum worked example

<!-- study-status:start -->
<div class="study-status" data-complexity="8.27" data-wavelength-nm="435">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#1f00ff;color:#ffffff;">Complexity 8.27/10 | 435 nm | 689.2 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Loss to Vacuum Worked Example"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Dual-Rail Encoding](../concepts/dual-rail-encoding.md), [Photon Loss and Vacuum](../concepts/photon-loss-and-vacuum.md), [Leakage and Erasure](../concepts/leakage-and-erasure.md)
- **Next steps:** [Detection, Correction, and Postselection](../concepts/detection-correction-and-postselection.md), [Logical Measurement with Erasure Detection](../../error-aware-gates/algorithms/logical-measurement-with-erasure-detection.md)
- **Related:** [Outcome Semantics](../../quantum-control-software/concepts/outcome-semantics.md), [Leakage Propagation](../../error-aware-gates/concepts/leakage-propagation.md)

<!-- learning-navigation:end -->

## Problem

Show why one-photon loss has the same detectable destination for both logical basis states without pretending the state was corrected.

## Starting states

```text
|0L> = |1,0>
|1L> = |0,1>
```

Each state contains one total excitation.

## Apply the loss model

If the excitation in the occupied rail decays:

```text
|1,0> -> |0,0>
|0,1> -> |0,0>
```

For `alpha|1,0> + beta|0,1>`, the same one-photon-loss event removes the excitation and leaves vacuum. The amplitudes cannot be reconstructed from vacuum alone.

## Interpret the check

1. Measure whether total occupation is one or zero using an erasure-aware check.
2. If occupation is one, keep the logical outcome path without learning the encoded value from that check alone.
3. If occupation is zero, report leakage at this qubit and check time.
4. A higher-level decoder may use that report as an erasure.

## Counterexample

If the check reports only “measurement failed” with no reliable physical category or location, it has not supplied the same erasure information.

## Self-check

1. Why do both logical basis states produce the same loss flag?
2. Which part of the logical information is gone?
3. What extra system is required for recovery?

## Sources and status

Worked directly from the [dual-rail guide, source page 5](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide). Status: `draft`; no executable simulator is claimed.

Parent: [Dual-rail qubits](../README.md)

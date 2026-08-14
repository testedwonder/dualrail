---
title: Photon Loss and Vacuum
kind: concept
status: draft
prerequisites: [topics/dual-rail-qubits/concepts/dual-rail-encoding.md]
next_steps: [topics/dual-rail-qubits/concepts/leakage-and-erasure.md, topics/dual-rail-qubits/examples/loss-to-vacuum.md]
related: [topics/circuit-qed/concepts/coherence-times.md, topics/error-aware-gates/concepts/leakage-propagation.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 3
complexity_prerequisite_count: 1
complexity_score: 3.93
complexity_wavelength_nm: 574
complexity_frequency_thz: 522.3
complexity_color: "#e0ff00"
understanding: 0
---

# Photon loss and vacuum

<!-- study-status:start -->
<div class="study-status" data-complexity="3.93" data-wavelength-nm="574">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#e0ff00;color:#111111;">Complexity 3.93/10 | 574 nm | 522.3 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Photon Loss and Vacuum"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Dual-Rail Encoding](dual-rail-encoding.md)
- **Next steps:** [Leakage and Erasure](leakage-and-erasure.md), [Loss to Vacuum Worked Example](../examples/loss-to-vacuum.md)
- **Related:** [Coherence Times](../../circuit-qed/concepts/coherence-times.md), [Leakage Propagation](../../error-aware-gates/concepts/leakage-propagation.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Photon loss removes the single excitation carrying the dual-rail state. Either logical basis state then becomes `|0,0>`, the vacuum state with no excitation in either rail.

## State transitions

```text
|1,0> -> |0,0>
|0,1> -> |0,0>
```

By linearity, loss also removes the excitation from a coherent superposition. The logical information is not preserved in vacuum.

## Why it matters

Both logical basis states land in the same state outside the code space. A check of total occupation can therefore detect loss without needing to identify whether the pre-loss logical value was zero or one.

## Important limit

Detecting vacuum does not reconstruct the lost amplitudes. It provides a known fault location for a larger code or operational response.

## Example and non-example

**Example:** A valid one-excitation state is measured as vacuum after decay; the event is a candidate detected leakage.

**Non-example:** Calling `|0,0>` logical `|0L>`. Logical zero is `|1,0>` under the convention used here.

## Self-check

1. Where do both logical basis states go after one photon is lost?
2. What information does vacuum reveal, and what information is gone?
3. Why does the logical-state convention matter?

## Sources and status

Source-backed by the [dual-rail guide, source page 5](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide). Status: `draft`.

Parent: [Dual-rail qubits](../README.md)

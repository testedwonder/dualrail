---
title: Code Space
kind: definition
status: draft
prerequisites: [topics/dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md]
next_steps: [topics/dual-rail-qubits/concepts/dual-rail-encoding.md]
related: [topics/dual-rail-qubits/concepts/leakage-and-erasure.md, topics/quantum-control-software/concepts/outcome-semantics.md]
source_files: [knowledge/topics/dual-rail-qubits/references.md]
complexity_depth: 7
complexity_prerequisite_count: 1
complexity_score: 4.81
complexity_wavelength_nm: 546
complexity_frequency_thz: 549.1
complexity_color: "#52ff00"
understanding: 0
---

# Code space

<!-- study-status:start -->
<div class="study-status" data-complexity="4.81" data-wavelength-nm="546">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#52ff00;color:#111111;">Complexity 4.81/10 | 546 nm | 549.1 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Code Space"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Quantum States and Fock Notation](../fundamentals/quantum-state-and-fock-notation.md)
- **Next steps:** [Dual-Rail Encoding](dual-rail-encoding.md)
- **Related:** [Leakage and Erasure](leakage-and-erasure.md), [Outcome Semantics](../../quantum-control-software/concepts/outcome-semantics.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A code space is the chosen set of physical states that count as valid encoded information. States outside it may represent leakage, loss, or another condition rather than a valid logical value.

## Why it matters

The dual-rail code space contains the one-excitation states used to represent a qubit. Photon loss is detectable because it moves either logical basis state to vacuum, outside that set.

## Dual-rail code space

The basis states are:

```text
|0L> = |1,0>
|1L> = |0,1>
```

Their coherent superpositions remain in the code space. `|0,0>` is outside it.

## Example and non-example

**Example:** `alpha|1,0> + beta|0,1>` belongs to the one-excitation code space.

**Non-example:** `|0,0>` is not a third logical value. In the loss model discussed here, it is vacuum outside the code space.

## Misconception

Calling a dual-rail qubit a “physical qubit” does not mean it is one elementary two-level component. The source notes that the two-mode encoding can act as a physical constituent of a higher-level error-correcting code.

## Self-check

1. What property do both logical basis states share?
2. Why is vacuum not logical zero?
3. How can an encoded object still be called a physical qubit in a larger code?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map). Status: `draft`.

Parent: [Dual-rail qubits](../README.md)

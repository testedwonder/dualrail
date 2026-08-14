---
title: Pauli Errors and Error Hierarchy
kind: concept
status: draft
prerequisites: [topics/dual-rail-qubits/concepts/dual-rail-encoding.md, topics/dual-rail-qubits/concepts/leakage-and-erasure.md]
next_steps: [topics/error-aware-gates/algorithms/swap-wait-swap-cz.md, topics/quantum-control-software/concepts/outcome-semantics.md]
related: [topics/error-aware-gates/concepts/control-target-asymmetry.md, topics/error-aware-gates/concepts/no-jump-backaction.md]
source_files: [knowledge/topics/dual-rail-qubits/references.md]
complexity_depth: 11
complexity_prerequisite_count: 2
complexity_score: 7.77
complexity_wavelength_nm: 451
complexity_frequency_thz: 664.7
complexity_color: "#0006ff"
understanding: 0
---

# Pauli errors and error hierarchy

<!-- study-status:start -->
<div class="study-status" data-complexity="7.77" data-wavelength-nm="451">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#0006ff;color:#ffffff;">Complexity 7.77/10 | 451 nm | 664.7 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Pauli Errors and Error Hierarchy"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Dual-Rail Encoding](dual-rail-encoding.md), [Leakage and Erasure](leakage-and-erasure.md)
- **Next steps:** [Swap-Wait-Swap Controlled-Z](../../error-aware-gates/algorithms/swap-wait-swap-cz.md), [Outcome Semantics](../../quantum-control-software/concepts/outcome-semantics.md)
- **Related:** [Control-Target Error Asymmetry](../../error-aware-gates/concepts/control-target-asymmetry.md), [No-Jump Backaction](../../error-aware-gates/concepts/no-jump-backaction.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A logical Pauli error acts like an encoded `X`, `Y`, or `Z` fault whose location is not normally supplied directly. An **error hierarchy** records that different error categories occur at very different rates.

## Why it matters

The dual-rail architecture is useful only if detected erasures remain dominant over residual phase and bit-flip errors. A gate with a low average error can still damage the architecture if it converts easy-to-locate loss into harder unknown errors.

## Categories in the source

- Erasure or detected leakage
- Dephasing or logical `Z` error
- Bit flip or logical `X`-like error
- Correlated or propagated error during a two-qubit gate

The 2024 measurement result reported decay as dominant, phase errors several times less frequent, and bit flips at least about two orders of magnitude less frequent. Exact values belong to the cited experiment, not every future device.

## Example and non-example

**Example:** Report erasure and residual Pauli rates separately for a gate.

**Non-example:** Replace all categories with one “fidelity” field and assume a decoder can recover the missing structure.

## Self-check

1. Why can average fidelity hide a harmful change in error structure?
2. Which category carries known-location information?
3. Why must simulator and decoder agree on categories?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map). Status: `draft`.

Parent: [Dual-rail qubits](../README.md)

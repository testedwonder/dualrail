---
title: Circuit QED and Dispersive Interaction
kind: concept
status: draft
prerequisites: [topics/circuit-qed/concepts/transmons-and-anharmonicity.md, topics/circuit-qed/concepts/microwave-cavity.md]
next_steps: [topics/circuit-qed/concepts/beamsplitter-and-parametric-drive.md, topics/error-aware-gates/concepts/controlled-z-gate.md]
related: [topics/error-aware-gates/algorithms/swap-wait-swap-cz.md, topics/circuit-qed/concepts/readout-chain-and-iq-data.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 2
complexity_prerequisite_count: 2
complexity_score: 2.23
complexity_wavelength_nm: 629
complexity_frequency_thz: 476.6
complexity_color: "#ff9700"
understanding: 0
---

# Circuit QED and dispersive interaction

<!-- study-status:start -->
<div class="study-status" data-complexity="2.23" data-wavelength-nm="629">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ff9700;color:#111111;">Complexity 2.23/10 | 629 nm | 476.6 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Circuit QED and Dispersive Interaction"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Transmons and Anharmonicity](transmons-and-anharmonicity.md), [Microwave Cavity](microwave-cavity.md)
- **Next steps:** [Beamsplitter Interaction and Parametric Drive](beamsplitter-and-parametric-drive.md), [Controlled-Z Gate](../../error-aware-gates/concepts/controlled-z-gate.md)
- **Related:** [Swap-Wait-Swap Controlled-Z](../../error-aware-gates/algorithms/swap-wait-swap-cz.md), [Readout Chain and IQ Data](readout-chain-and-iq-data.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Circuit quantum electrodynamics, or circuit QED, studies superconducting artificial atoms coupled to microwave resonators. In a **dispersive interaction**, modes do not simply exchange an excitation; instead, one mode's frequency or phase depends on another mode's occupation.

## Effective model

The source gives a cross-Kerr pattern:

```text
H / hbar proportional to chi n1 n2
```

Here `n1` and `n2` are occupation-number operators and `chi` sets the occupation-dependent phase rate.

## Why it matters

Dispersive shifts enable conditional phase and readout. In the SWS gate, temporarily occupying the coupler activates a strong conditional phase relationship with the target cavity.

## Limits

- This effective Hamiltonian is a model under stated operating conditions, not a complete device derivation.
- “No excitation exchange” does not mean “no interaction.”
- Unwanted residual cross-Kerr can create idle phase accumulation or crosstalk.

## Self-check

1. What changes under a dispersive interaction?
2. What does `chi` control in the simple model?
3. Why can residual cross-Kerr matter when a gate is nominally off?

## Sources and status

Source-backed by the [device-physics stack, source page 6](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide) and the checked SWS preprint. Status: `draft`.

Parent: [Circuit QED and control](../README.md)

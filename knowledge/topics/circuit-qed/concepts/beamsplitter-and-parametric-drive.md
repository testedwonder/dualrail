---
title: Beamsplitter Interaction and Parametric Drive
kind: concept
status: draft
prerequisites: [topics/circuit-qed/concepts/circuit-qed-and-dispersive-interaction.md]
next_steps: [topics/error-aware-gates/concepts/single-qubit-dual-rail-control.md, topics/error-aware-gates/algorithms/swap-wait-swap-cz.md]
related: [topics/dual-rail-qubits/concepts/dual-rail-encoding.md, topics/calibration-systems/fundamentals/from-gates-to-calibration.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 3
complexity_prerequisite_count: 1
complexity_score: 2.35
complexity_wavelength_nm: 625
complexity_frequency_thz: 479.7
complexity_color: "#ff9f00"
understanding: 0
---

# Beamsplitter interaction and parametric drive

<!-- study-status:start -->
<div class="study-status" data-complexity="2.35" data-wavelength-nm="625">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ff9f00;color:#111111;">Complexity 2.35/10 | 625 nm | 479.7 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Beamsplitter Interaction and Parametric Drive"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Circuit QED and Dispersive Interaction](circuit-qed-and-dispersive-interaction.md)
- **Next steps:** [Single-Qubit Dual-Rail Control](../../error-aware-gates/concepts/single-qubit-dual-rail-control.md), [Swap-Wait-Swap Controlled-Z](../../error-aware-gates/algorithms/swap-wait-swap-cz.md)
- **Related:** [Dual-Rail Encoding](../../dual-rail-qubits/concepts/dual-rail-encoding.md), [From Gates to Calibration](../../calibration-systems/fundamentals/from-gates-to-calibration.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A beamsplitter interaction coherently exchanges an excitation between two modes. A parametric drive is a time-varying pump used to activate and select that effective interaction.

## Effective model

The source gives the pattern:

```text
H / hbar proportional to g(a-dagger b + a b-dagger)
```

`g` sets the exchange rate. Pulse duration sets how far the excitation rotates between modes; drive phase helps set the logical rotation axis.

## Software-visible parameters

- Pump frequency
- Amplitude
- Phase
- Duration
- Mixer and waveform corrections
- Target mode identities and resource conflicts

## Examples

- Rotate an excitation between the two rails of one logical qubit.
- Swap the control excitation from a cavity into the SWS coupler and back.

## Failure modes

- Mistuned pump leaves population in the wrong mode.
- Wrong phase fails to close the return trajectory.
- Crosstalk activates an unintended interaction.

## Self-check

1. What quantity does pulse duration control in the simple exchange model?
2. Why is pump phase not decorative?
3. Where does the SWS gate use a beamsplitter-like swap?

## Sources and status

Source-backed by the [device-physics and gate summaries, source pages 6-7](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide). Status: `draft`.

Parent: [Circuit QED and control](../README.md)

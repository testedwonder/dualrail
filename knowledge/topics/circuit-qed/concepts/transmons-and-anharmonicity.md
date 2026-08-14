---
title: Transmons and Anharmonicity
kind: concept
status: draft
prerequisites: [topics/circuit-qed/concepts/superconducting-circuit-stack.md]
next_steps: [topics/circuit-qed/concepts/circuit-qed-and-dispersive-interaction.md, topics/circuit-qed/concepts/coherence-times.md]
related: [topics/error-aware-gates/algorithms/swap-wait-swap-cz.md, topics/calibration-systems/concepts/stale-parameter-vs-changing-device.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 1
complexity_prerequisite_count: 1
complexity_score: 1.12
complexity_wavelength_nm: 664
complexity_frequency_thz: 451.5
complexity_color: "#ff4c00"
understanding: 0
---

# Transmons and anharmonicity

<!-- study-status:start -->
<div class="study-status" data-complexity="1.12" data-wavelength-nm="664">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ff4c00;color:#ffffff;">Complexity 1.12/10 | 664 nm | 451.5 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Transmons and Anharmonicity"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Superconducting Circuit Stack](superconducting-circuit-stack.md)
- **Next steps:** [Circuit QED and Dispersive Interaction](circuit-qed-and-dispersive-interaction.md), [Coherence Times](coherence-times.md)
- **Related:** [Swap-Wait-Swap Controlled-Z](../../error-aware-gates/algorithms/swap-wait-swap-cz.md), [Stale Parameter Versus Changing Device](../../calibration-systems/concepts/stale-parameter-vs-changing-device.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A transmon is a superconducting artificial atom built around Josephson-junction nonlinearity. **Anharmonicity** means adjacent energy-level spacings are unequal, allowing control to target one transition more selectively than in a perfectly harmonic oscillator.

## Roles in the source architecture

- Control or measurement ancilla
- Tunable or SQUID-based coupler between modes
- Temporary storage of the control excitation during the SWS gate
- Nonlinear element enabling conditional interactions

## Why software cares

Frequency, flux response, pulse amplitude, leakage, and coherence are device-specific. During the SWS gate, the control excitation temporarily occupies a coupler, so the coupler's shorter coherence contributes to directional error.

## Example and non-example

**Example:** A calibrated parametric sideband swaps one cavity excitation into a transmon coupler.

**Non-example:** Treating a transmon as a perfectly isolated mathematical qubit with no higher levels, drift, or flux dependence.

## Failure modes

- Driving unwanted levels because selectivity is insufficient.
- Assuming a coupler frequency is fixed forever.
- Flattening coupler and cavity lifetimes into one coherence number.

## Self-check

1. What does anharmonicity make possible?
2. Why can temporary coupler occupation make gate errors asymmetric?
3. Which transmon properties become calibration parameters?

## Sources and status

Source-backed by the [device-physics stack, source page 6](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide) and repeated-CZ source pages 5 and 12. Status: `draft`.

Parent: [Circuit QED and control](../README.md)

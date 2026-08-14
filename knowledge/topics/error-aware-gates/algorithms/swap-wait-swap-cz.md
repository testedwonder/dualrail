---
title: Swap-Wait-Swap Controlled-Z
kind: algorithm
status: draft
prerequisites: [topics/error-aware-gates/concepts/controlled-z-gate.md, topics/circuit-qed/concepts/beamsplitter-and-parametric-drive.md, topics/circuit-qed/concepts/transmons-and-anharmonicity.md]
next_steps: [topics/error-aware-gates/concepts/control-target-asymmetry.md, topics/error-aware-gates/concepts/leakage-propagation.md, topics/error-aware-gates/examples/repeated-cz-experiment.md]
related: [topics/circuit-qed/concepts/circuit-qed-and-dispersive-interaction.md, topics/calibration-systems/concepts/calibration-dependencies.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 10
complexity_prerequisite_count: 3
complexity_score: 7.65
complexity_wavelength_nm: 455
complexity_frequency_thz: 658.9
complexity_color: "#0020ff"
understanding: 0
---

# Swap-wait-swap controlled-Z

<!-- study-status:start -->
<div class="study-status" data-complexity="7.65" data-wavelength-nm="455">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#0020ff;color:#ffffff;">Complexity 7.65/10 | 455 nm | 658.9 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Swap-Wait-Swap Controlled-Z"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Controlled-Z Gate](../concepts/controlled-z-gate.md), [Beamsplitter Interaction and Parametric Drive](../../circuit-qed/concepts/beamsplitter-and-parametric-drive.md), [Transmons and Anharmonicity](../../circuit-qed/concepts/transmons-and-anharmonicity.md)
- **Next steps:** [Control-Target Error Asymmetry](../concepts/control-target-asymmetry.md), [Leakage Propagation](../concepts/leakage-propagation.md), [Repeated-CZ Experiment](../examples/repeated-cz-experiment.md)
- **Related:** [Circuit QED and Dispersive Interaction](../../circuit-qed/concepts/circuit-qed-and-dispersive-interaction.md), [Calibration Dependencies](../../calibration-systems/concepts/calibration-dependencies.md)

<!-- learning-navigation:end -->

## Problem

Implement an entangling conditional phase between two dual-rail cavity qubits while keeping detectable erasure dominant over residual Pauli errors.

## Inputs and outputs

**Inputs:** identified control and target rails, a transmon coupler, swap-pump settings, wait time, swap-back phase, local `Z` phases, and compatible calibration versions.

**Output:** a logical CZ up to calibrated local phases, plus structured erasure and residual-error outcomes.

## Preconditions

- The cavity-coupler swaps are calibrated.
- The dispersive interaction strength and sign are characterized.
- The second swap phase returns population to the control cavity.
- Local phase shifts are known.
- Device state remains inside the calibration's validity conditions.

## Procedure

1. **Swap:** Parametrically move the relevant control-rail excitation into the transmon coupler.
2. **Wait:** Let the occupied coupler interact dispersively with the target cavity until the intended conditional phase accumulates.
3. **Swap back:** Return the excitation to the control cavity with the calibrated relative phase.
4. **Apply or track local phases:** Correct deterministic single-qubit `Z` phases in the control representation.
5. **Classify outcomes:** Preserve erasure, dephasing, bit-flip, and assignment categories separately.

## Invariants

- The intended operation preserves total excitation unless loss occurs.
- Residual coupler population is a detectable failure, not a valid gate result.
- Control and target error rates remain distinct.
- Changing wait time can invalidate the required swap-back phase.

## Minimal pseudocode

```text
assert calibrations_are_valid(device_snapshot)
swap(control_cavity, coupler, swap_parameters)
wait(entangling_delay)
swap(coupler, control_cavity, swap_back_parameters)
track_local_z_phases()
return classify_structured_outcomes()
```

## Failure modes

- Incomplete swap leaves population in the coupler.
- Wrong delay gives the wrong entangling phase.
- Coupler loss produces an erasure and can conditionally dephase the other qubit.
- Long sequences expose drift not visible in short qualification.

## Cost and scale

The demonstrated gate is sub-microsecond, but the relevant operational cost also includes calibration, checks, repeated shots, and validation. Hardware timing values are device-specific.

## Self-check

1. Why is the coupler populated only temporarily?
2. Which parameter accumulates the conditional phase?
3. Why does wait time depend on a previously calibrated swap-back phase?
4. Which invariant makes residual coupler population detectable?

## Sources and status

Source-backed by the [gate summary, source page 7](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide) and checked SWS preprint Appendix A. Status: `draft`; this page is not executable hardware code.

Parent: [Error-aware gates](../README.md)

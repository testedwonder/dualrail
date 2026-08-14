---
title: Repeated-CZ Experiment
kind: example
status: draft
prerequisites: [topics/error-aware-gates/algorithms/swap-wait-swap-cz.md, topics/error-aware-gates/concepts/quantum-state-tomography.md, topics/error-aware-gates/concepts/randomized-benchmarking.md, topics/error-aware-gates/concepts/spam.md]
next_steps: [topics/calibration-systems/concepts/stale-parameter-vs-changing-device.md, topics/calibration-systems/algorithms/diagnose-calibration-drift.md]
related: [topics/error-aware-gates/concepts/no-jump-backaction.md, topics/error-aware-gates/concepts/control-target-asymmetry.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 6
complexity_prerequisite_count: 4
complexity_score: 8.86
complexity_wavelength_nm: 416
complexity_frequency_thz: 720.7
complexity_color: "#4500ff"
understanding: 0
---

# Repeated-CZ experiment

<!-- study-status:start -->
<div class="study-status" data-complexity="8.86" data-wavelength-nm="416">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#4500ff;color:#ffffff;">Complexity 8.86/10 | 416 nm | 720.7 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Repeated-CZ Experiment"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Swap-Wait-Swap Controlled-Z](../algorithms/swap-wait-swap-cz.md), [Quantum State Tomography](../concepts/quantum-state-tomography.md), [Randomized Benchmarking](../concepts/randomized-benchmarking.md), [State-Preparation-and-Measurement Error](../concepts/spam.md)
- **Next steps:** [Stale Parameter Versus Changing Device](../../calibration-systems/concepts/stale-parameter-vs-changing-device.md), [Diagnose Calibration Drift](../../calibration-systems/algorithms/diagnose-calibration-drift.md)
- **Related:** [No-Jump Backaction](../concepts/no-jump-backaction.md), [Control-Target Error Asymmetry](../concepts/control-target-asymmetry.md)

<!-- learning-navigation:end -->

## Problem

Amplify small gate errors by repeating an entangling operation and compare short-depth behavior with long-depth behavior.

## Procedure reported by the source

1. Prepare two dual-rail qubits in a known state.
2. Apply an odd number of CZ gates so the ideal final state is known.
3. Repeat for several gate counts, up to 103 in the reported experiment.
4. Use tomography to estimate state fidelity and purity.
5. Track the postselected fraction after detected erasures.
6. Compare the trend with a stable error-per-gate model.

## Observation

At shorter depths, fidelity and purity decreased approximately linearly. At larger depth, both displayed an approximately quadratic decrease. The paper proposed calibration drift or coupling-transmon frequency fluctuation as possible causes and said further investigation was required.

## What the observation does not prove

- It does not prove calibration drift.
- It does not prove one coupler-frequency mechanism.
- It does not rule out coherent accumulation, waveform effects, heating, or analysis issues without additional tests.

## Why the example matters

A short qualification can pass while a long sequence exposes nonstationary or coherent behavior. Validation scope must therefore name sequence depth and timescale.

## Counterexample test

Vary depth independently from elapsed time. If the effect tracks depth but not time, coherent accumulation or model mismatch becomes more plausible than temporal drift.

## Self-check

1. Why use many repeated gates?
2. Which three metrics were tracked?
3. What language preserves the uncertainty correctly?
4. How would you separate depth from elapsed time?

## Sources and status

Source-backed by repeated-CZ source pages 6-9 and the [2026 paper brief, source page 10](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide). Status: `draft`; reported values were not independently reproduced.

Parent: [Error-aware gates](../README.md)

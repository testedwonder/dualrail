---
title: From Gates to Calibration
kind: definition
status: draft
prerequisites: []
next_steps: [topics/calibration-systems/concepts/calibration-record.md, topics/error-aware-gates/concepts/controlled-z-gate.md]
related: [topics/quantum-control-software/concepts/production-stack.md, topics/error-aware-gates/examples/repeated-cz-experiment.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 0
complexity_prerequisite_count: 0
complexity_score: 0.0
complexity_wavelength_nm: 700
complexity_frequency_thz: 428.3
complexity_color: "#ff0000"
understanding: 0
---

# From gates to calibration

<!-- study-status:start -->
<div class="study-status" data-complexity="0.0" data-wavelength-nm="700">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ff0000;color:#ffffff;">Complexity 0.0/10 | 700 nm | 428.3 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for From Gates to Calibration"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** None
- **Next steps:** [Calibration Record](../concepts/calibration-record.md), [Controlled-Z Gate](../../error-aware-gates/concepts/controlled-z-gate.md)
- **Related:** [Production Quantum-Control Stack](../../quantum-control-software/concepts/production-stack.md), [Repeated-CZ Experiment](../../error-aware-gates/examples/repeated-cz-experiment.md)

<!-- learning-navigation:end -->

Parent: [Calibration systems](../README.md)

Prerequisites: None

Next: [Calibration record](../concepts/calibration-record.md)

## Plain-language meaning

A software command such as “apply this quantum gate” is an intention. Hardware needs concrete signals: frequencies, amplitudes, phases, and durations. Calibration is how a team measures the current device and chooses settings that make the physical action match the intention closely enough for a stated use.

## Why it matters

The device is not an abstract circuit diagram. Its resonances, couplings, electronics, and readout can vary. A setting that worked before may no longer produce the same action. Software therefore needs a [calibration record](../concepts/calibration-record.md), not a timeless constant.

## Step by step

1. **Name the intended operation.** A gate describes a controlled change to one or more qubits.
2. **Identify the physical controls.** In the source’s superconducting-hardware example, shaped microwave or flux signals have chosen frequencies, amplitudes, phases, and durations.
3. **Measure a response.** Run an experiment over candidate settings and collect many observations.
4. **Fit a model.** Estimate the setting that best produces the intended response, together with uncertainty and residual error.
5. **Validate outside the fitting step.** Check bounds, repeatability, and held-out behavior before treating the result as usable.
6. **Preserve the evidence.** Store the value with its device identity, units, source run, time, software, assumptions, and status.

**Source-backed fact:** The repeated-CZ guide describes this six-part shape: choose a quantity, sweep controls, acquire measurements, fit, validate, then store or promote. It also lists frequency, amplitude, duration, phase or wait time, and readout threshold as example parameters. [C1, source page 10](../references.md#local-source)

**Explanation:** “Calibration” names the whole evidence-producing process. The fitted number is only one output of that process.

## What the CZ example contributes

CZ, short for controlled-Z, is a two-qubit gate that applies a conditional phase. The source’s repeated-CZ discussion uses it as a stress test: a small systematic mismatch may be hard to see after one gate but easier to see after many repetitions.

**Source-backed fact:** In the reported experiment summarized by the corpus, sequences reached 103 CZ gates. Short-depth behavior looked roughly linear, while fidelity and purity at larger depths showed an unexpected approximately quadratic decrease. The cited authors proposed calibration-parameter drift or coupler-frequency fluctuation as possible causes and left the root cause open. [C1, source pages 6–9](../references.md#local-source)

This pilot uses that observation to motivate software requirements. It does not establish the physical cause.

## Precise definition

Within this topic, **calibration** means a measurement-based procedure that maps an intended operation or measurement to device-specific control settings under named conditions, with validation evidence and uncertainty.

The definition has four limits:

- It is tied to a device or channel, not “the hardware” in general.
- It is scoped to an operation and operating condition.
- It is uncertain because it comes from finite measurements and a model.
- It can expire or be invalidated.

## Analogy: tuning an automatic piano

**Analogy:** A technician measures a piano’s pitch and an automatic player stores instructions based on that pitch. If the pitch changes, the old instruction may fail.

**Where the analogy stops:** A quantum-control stack may coordinate many coupled parameters, stochastic measurements, classifiers, and low-latency hardware. A piano does not capture those dependencies or the quantum state being protected. The analogy explains why measured settings can age; it does not model the device.

## Examples and non-examples

**Example:** Sweep a control frequency, fit the response, record uncertainty, validate a candidate on a separate check, and promote it only if the check passes.

**Non-example:** Copy `4.23` into a configuration file with no unit, device identity, timestamp, source data, or validation result. That is a number, not a reproducible calibration.

**Non-example:** Observe worse performance after a long gate sequence and call the cause “drift.” Degradation is an observation; drift is one possible explanation.

## Common misconceptions

- **“A successful fit proves the setting is safe.”** A fit can converge at a boundary, use the wrong model, or fail on held-out behavior.
- **“Latest means valid.”** A newer value can belong to a different device state, software version, or operating point.
- **“Recalibration fixes all change.”** One refresh helps only if the target remains stable long enough to use the result.
- **“One gate metric contains the whole error.”** Loss, phase error, leakage, classification error, and time variation can require different responses.

## Self-check

1. What information must exist between the command “apply CZ” and a physical control signal?
2. Why can repetition reveal an error that a one-gate check misses?
3. Which step separates “a fitted number exists” from “the number is suitable to use”?
4. Why is worse long-depth performance not proof of drift?

## Sources and status

- Main evidence: [Repeated-CZ fundamentals, source pages 4–10](../../../../base/DWave_Application_and_Study_Materials.md#4-repeated-cz-calibration-question-fundamentals).
- Claim map: [Calibration references](../references.md).
- Status: `draft`. Local evidence and links are explicit; the external paper cited by the compendium was not independently checked in this run.

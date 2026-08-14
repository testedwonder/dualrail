---
title: Two-Plane Observability
kind: concept
status: draft
prerequisites: [topics/quantum-control-software/concepts/acquisition-and-provenance.md, topics/calibration-systems/concepts/stale-parameter-vs-changing-device.md]
next_steps: [topics/calibration-systems/algorithms/diagnose-calibration-drift.md, topics/quantum-control-software/concepts/test-portfolio.md]
related: [topics/quantum-control-software/concepts/reliable-orchestration.md, topics/error-aware-gates/examples/repeated-cz-experiment.md]
source_files: [knowledge/topics/quantum-control-software/references.md]
complexity_depth: 10
complexity_prerequisite_count: 2
complexity_score: 7.15
complexity_wavelength_nm: 471
complexity_frequency_thz: 636.5
complexity_color: "#0086ff"
understanding: 0
---

# Two-plane observability

<!-- study-status:start -->
<div class="study-status" data-complexity="7.15" data-wavelength-nm="471">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#0086ff;color:#ffffff;">Complexity 7.15/10 | 471 nm | 636.5 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Two-Plane Observability"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Acquisition and Provenance](acquisition-and-provenance.md), [Stale Parameter Versus Changing Device](../../calibration-systems/concepts/stale-parameter-vs-changing-device.md)
- **Next steps:** [Diagnose Calibration Drift](../../calibration-systems/algorithms/diagnose-calibration-drift.md), [Quantum-Control Test Portfolio](test-portfolio.md)
- **Related:** [Reliable Orchestration](reliable-orchestration.md), [Repeated-CZ Experiment](../../error-aware-gates/examples/repeated-cz-experiment.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Observability makes internal system state inferable from recorded evidence. Around a QPU, the source separates a service plane from a scientific plane.

## Service plane

- Latency and queue depth
- Retries and errors
- Saturation and resource ownership
- Job state and controller health

## Scientific plane

- Fit residuals and uncertainty
- Frequencies and coherence times
- Readout separation
- Erasure and residual-error rates
- Sequence-depth behavior
- Calibration age and validity

## Why correlation matters

A degraded experiment with normal service metrics points differently from one that follows queue saturation or controller errors. Conversely, a healthy service dashboard does not prove the device or calibration is stable.

## Failure modes

- Aggregate metrics omit device and calibration identity.
- Scientific alerts have unsynchronized clocks.
- Service success is mistaken for scientific correctness.

## Self-check

1. Which plane contains queue latency?
2. Which plane contains coupler-frequency drift?
3. Why must the two planes share run identity and time?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map). Status: `draft`.

Parent: [Quantum-control software](../README.md)

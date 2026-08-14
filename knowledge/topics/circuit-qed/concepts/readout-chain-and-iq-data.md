---
title: Readout Chain and IQ Data
kind: concept
status: draft
prerequisites: [topics/circuit-qed/concepts/circuit-qed-and-dispersive-interaction.md, topics/circuit-qed/concepts/coherence-times.md]
next_steps: [topics/error-aware-gates/algorithms/logical-measurement-with-erasure-detection.md, topics/quantum-control-software/concepts/acquisition-and-provenance.md]
related: [topics/error-aware-gates/concepts/spam.md, topics/quantum-control-software/concepts/outcome-semantics.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 3
complexity_prerequisite_count: 2
complexity_score: 4.43
complexity_wavelength_nm: 558
complexity_frequency_thz: 537.3
complexity_color: "#8fff00"
understanding: 0
---

# Readout chain and IQ data

<!-- study-status:start -->
<div class="study-status" data-complexity="4.43" data-wavelength-nm="558">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#8fff00;color:#111111;">Complexity 4.43/10 | 558 nm | 537.3 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Readout Chain and IQ Data"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Circuit QED and Dispersive Interaction](circuit-qed-and-dispersive-interaction.md), [Coherence Times](coherence-times.md)
- **Next steps:** [Logical Measurement with Erasure Detection](../../error-aware-gates/algorithms/logical-measurement-with-erasure-detection.md), [Acquisition and Provenance](../../quantum-control-software/concepts/acquisition-and-provenance.md)
- **Related:** [State-Preparation-and-Measurement Error](../../error-aware-gates/concepts/spam.md), [Outcome Semantics](../../quantum-control-software/concepts/outcome-semantics.md)

<!-- learning-navigation:end -->

## Plain-language meaning

The readout chain carries a microwave response from the cryogenic device through amplifiers, mixers, and digitizers. The digitized signal is often represented by in-phase and quadrature components called IQ data.

## From signal to outcome

1. A readout interaction makes the microwave response depend on device state.
2. Cryogenic and room-temperature electronics amplify and mix the response.
3. A digitizer records IQ samples.
4. Software extracts features and assigns logical, leakage, erasure, or failure categories.

## Why software cares

Thresholds, classifiers, gain, phase, timing, and schema versions can change assignment. Outcome classification is therefore part of the measurement model, not cosmetic post-processing.

## Failure modes

- Gain or phase drift moves distributions across a fixed threshold.
- Acquisition timing selects the wrong response window.
- A schema change silently defaults a missing classifier field.
- Raw IQ data are discarded, preventing replay after analysis changes.

## Self-check

1. What do `I` and `Q` represent?
2. Why can a stable qubit still produce changing assignments?
3. Which artifacts must be retained to replay classification?

## Sources and status

Source-backed by the [device-physics stack, source page 6](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide) and repeated-CZ source pages 6 and 13. Status: `draft`.

Parent: [Circuit QED and control](../README.md)

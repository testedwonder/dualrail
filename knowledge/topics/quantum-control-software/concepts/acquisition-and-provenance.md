---
title: Acquisition and Provenance
kind: concept
status: draft
prerequisites: [topics/quantum-control-software/concepts/production-stack.md, topics/calibration-systems/concepts/calibration-record.md, topics/circuit-qed/concepts/readout-chain-and-iq-data.md]
next_steps: [topics/quantum-control-software/concepts/observability.md, topics/quantum-control-software/concepts/promotion-and-rollback.md]
related: [topics/quantum-control-software/concepts/outcome-semantics.md, topics/calibration-systems/algorithms/diagnose-calibration-drift.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 4
complexity_prerequisite_count: 3
complexity_score: 6.07
complexity_wavelength_nm: 506
complexity_frequency_thz: 592.5
complexity_color: "#00ff99"
understanding: 0
---

# Acquisition and provenance

<!-- study-status:start -->
<div class="study-status" data-complexity="6.07" data-wavelength-nm="506">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#00ff99;color:#111111;">Complexity 6.07/10 | 506 nm | 592.5 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Acquisition and Provenance"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Production Quantum-Control Stack](production-stack.md), [Calibration Record](../../calibration-systems/concepts/calibration-record.md), [Readout Chain and IQ Data](../../circuit-qed/concepts/readout-chain-and-iq-data.md)
- **Next steps:** [Two-Plane Observability](observability.md), [Promotion and Rollback](promotion-and-rollback.md)
- **Related:** [Outcome Semantics](outcome-semantics.md), [Diagnose Calibration Drift](../../calibration-systems/algorithms/diagnose-calibration-drift.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Acquisition captures raw observations. Provenance records the identities and transformations needed to explain how those observations became a result.

## Evidence to preserve

- Shot order and synchronized timestamps
- Raw IQ or measurement records
- Device, channel, and run identity
- Compiled artifact and controller version
- Calibration graph snapshot
- Classifier, fit, and analysis versions
- Environment and relevant service state
- Derived artifacts and their input hashes

## Why it matters

Without time order, drift can be averaged away. Without calibration and analysis versions, a result cannot distinguish device change from software change. Raw observations should remain immutable while derived results can be regenerated.

## Non-example

A CSV containing only final probabilities with no shot order, raw-data reference, device snapshot, or analysis version.

## Self-check

1. Which data make temporal diagnosis possible?
2. Why may derived artifacts change while raw data remain immutable?
3. Which snapshot connects an experiment to calibration state?

## Sources and status

Source-backed by repeated-CZ source pages 6, 13-14, and 18 and the [calibration invariants, source page 8](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide). Status: `draft`.

Parent: [Quantum-control software](../README.md)

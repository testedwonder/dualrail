---
title: Quantum-Control Test Portfolio
kind: concept
status: draft
prerequisites: [topics/quantum-control-software/concepts/production-stack.md, topics/quantum-control-software/concepts/outcome-semantics.md, topics/quantum-control-software/concepts/compiler-and-scheduler.md]
next_steps: [topics/calibration-systems/algorithms/diagnose-calibration-drift.md, topics/quantum-control-software/concepts/promotion-and-rollback.md]
related: [topics/quantum-control-software/concepts/reliable-orchestration.md, topics/quantum-control-software/concepts/observability.md]
source_files: [knowledge/topics/quantum-control-software/references.md]
complexity_depth: 13
complexity_prerequisite_count: 3
complexity_score: 9.5
complexity_wavelength_nm: 396
complexity_frequency_thz: 757.1
complexity_color: "#6e00ff"
understanding: 0
---

# Quantum-control test portfolio

<!-- study-status:start -->
<div class="study-status" data-complexity="9.5" data-wavelength-nm="396">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#6e00ff;color:#ffffff;">Complexity 9.5/10 | 396 nm | 757.1 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Quantum-Control Test Portfolio"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Production Quantum-Control Stack](production-stack.md), [Outcome Semantics](outcome-semantics.md), [Compiler and Scheduler](compiler-and-scheduler.md)
- **Next steps:** [Diagnose Calibration Drift](../../calibration-systems/algorithms/diagnose-calibration-drift.md), [Promotion and Rollback](promotion-and-rollback.md)
- **Related:** [Reliable Orchestration](reliable-orchestration.md), [Two-Plane Observability](observability.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A test portfolio maps each physical or operational invariant to the cheapest environment that can falsify it, while retaining bounded hardware checks for claims that depend on the real device.

## Layers

- Unit tests for units, waveform construction, fits, classifiers, graph invalidation, and serialization
- Property tests for periodicity, scaling, reversibility, and equivalent programs
- Golden replay tests for raw traces and expected fits or classifications
- Simulator integration for compilation, timing, branches, and injected errors
- Fault injection for retries, schema mismatch, drift, and partial failure
- Hardware-in-the-loop checks for real control and device assumptions
- Canary and promotion gates against last-known-good state

## Evidence principle

Agreement between compiler and simulator is weaker when both share one mistaken assumption. High-risk semantics benefit from independently constructed fixtures, analytical small cases, or a separate reference path.

## Limit

A simulator can test a validity policy but cannot authorize that a calibration is valid on the current physical device.

## Self-check

1. Which test is cheapest for a unit conversion?
2. Which claim still needs hardware?
3. Why can shared implementation reduce independence?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map). Status: `draft`.

Parent: [Quantum-control software](../README.md)

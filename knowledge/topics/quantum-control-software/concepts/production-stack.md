---
title: Production Quantum-Control Stack
kind: concept
status: draft
prerequisites: [topics/calibration-systems/fundamentals/from-gates-to-calibration.md]
next_steps: [topics/quantum-control-software/concepts/public-and-internal-interfaces.md, topics/quantum-control-software/concepts/experiment-description-and-semantic-layer.md]
related: [topics/calibration-systems/concepts/calibration-record.md, topics/quantum-control-software/concepts/acquisition-and-provenance.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 1
complexity_prerequisite_count: 1
complexity_score: 1.64
complexity_wavelength_nm: 648
complexity_frequency_thz: 462.6
complexity_color: "#ff6e00"
understanding: 0
---

# Production quantum-control stack

<!-- study-status:start -->
<div class="study-status" data-complexity="1.64" data-wavelength-nm="648">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ff6e00;color:#ffffff;">Complexity 1.64/10 | 648 nm | 462.6 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Production Quantum-Control Stack"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [From Gates to Calibration](../../calibration-systems/fundamentals/from-gates-to-calibration.md)
- **Next steps:** [Public and Internal Interfaces](public-and-internal-interfaces.md), [Experiment Description and Semantic Layer](experiment-description-and-semantic-layer.md)
- **Related:** [Calibration Record](../../calibration-systems/concepts/calibration-record.md), [Acquisition and Provenance](acquisition-and-provenance.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A production quantum-control stack is the connected software and control system that turns a scientific experiment description into timed hardware actions and traceable results for repeated use by more than one person.

## Layers in the reference model

- Experiment description
- Semantic operations, parameters, units, and constraints
- Compiler and scheduler
- Real-time controller
- RF and cryogenic chain
- QPU and acquisition
- Analysis and calibration registry
- Orchestration, observability, promotion, and rollback

## What “production” adds

- Stable interfaces for multiple users and hardware revisions
- Explicit identity and provenance
- Safe retries, locks, and partial-failure handling
- Versioned contracts and compatibility
- Testable failure behavior
- Last-known-good state and rollback

## Non-example

A notebook that works once for its author but cannot reconstruct which device state, pulse versions, or classifier produced the result.

## Self-check

1. Which layer turns intent into timed instructions?
2. Which layer preserves calibration lineage?
3. What distinguishes production from a successful one-off run?

## Sources and status

Source-backed by repeated-CZ source page 13 and the [public stack model, source page 11](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide). Status: `draft`; the architecture is a reference model.

Parent: [Quantum-control software](../README.md)

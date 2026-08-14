---
title: Production Quantum-Control Stack
kind: concept
status: draft
prerequisites: [topics/calibration-systems/fundamentals/from-gates-to-calibration.md]
next_steps: [topics/quantum-control-software/concepts/public-and-internal-interfaces.md, topics/quantum-control-software/concepts/experiment-description-and-semantic-layer.md]
related: [topics/calibration-systems/concepts/calibration-record.md, topics/quantum-control-software/concepts/acquisition-and-provenance.md]
source_files: [knowledge/topics/quantum-control-software/references.md]
complexity_depth: 7
complexity_prerequisite_count: 1
complexity_score: 4.81
complexity_wavelength_nm: 546
complexity_frequency_thz: 549.1
complexity_color: "#52ff00"
understanding: 0
---

# Production quantum-control stack

<!-- study-status:start -->
<div class="study-status" data-complexity="4.81" data-wavelength-nm="546">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#52ff00;color:#111111;">Complexity 4.81/10 | 546 nm | 549.1 THz</span>
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

Public context and model boundaries are recorded in the [claim map](../references.md#claim-map). Status: `draft`; the architecture is a reference model.

Parent: [Quantum-control software](../README.md)

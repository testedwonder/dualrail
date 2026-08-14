---
title: Experiment Description and Semantic Layer
kind: concept
status: draft
prerequisites: [topics/quantum-control-software/concepts/production-stack.md, topics/quantum-control-software/concepts/public-and-internal-interfaces.md]
next_steps: [topics/quantum-control-software/concepts/compiler-and-scheduler.md, topics/quantum-control-software/concepts/outcome-semantics.md]
related: [topics/calibration-systems/concepts/calibration-record.md, topics/error-aware-gates/algorithms/swap-wait-swap-cz.md]
source_files: [knowledge/topics/quantum-control-software/references.md]
complexity_depth: 9
complexity_prerequisite_count: 2
complexity_score: 6.54
complexity_wavelength_nm: 491
complexity_frequency_thz: 610.6
complexity_color: "#00fff9"
understanding: 0
---

# Experiment description and semantic layer

<!-- study-status:start -->
<div class="study-status" data-complexity="6.54" data-wavelength-nm="491">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#00fff9;color:#111111;">Complexity 6.54/10 | 491 nm | 610.6 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Experiment Description and Semantic Layer"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Production Quantum-Control Stack](production-stack.md), [Public and Internal Interfaces](public-and-internal-interfaces.md)
- **Next steps:** [Compiler and Scheduler](compiler-and-scheduler.md), [Outcome Semantics](outcome-semantics.md)
- **Related:** [Calibration Record](../../calibration-systems/concepts/calibration-record.md), [Swap-Wait-Swap Controlled-Z](../../error-aware-gates/algorithms/swap-wait-swap-cz.md)

<!-- learning-navigation:end -->

## Plain-language meaning

An experiment description states what should be run: operations, sweeps, shots, targets, checks, and expected outputs. A semantic layer gives those statements precise typed meaning before they are lowered to device instructions.

## Information to preserve

- Operation and device identities
- Parameters with units and bounds
- Timing and ordering constraints
- Required capabilities
- Calibration dependencies
- Error and measurement semantics
- Expected result shapes

## Why it matters

If “erasure,” “check,” or “CZ” means something different in the compiler, controller, simulator, and analysis, each layer can be locally plausible while the experiment is globally wrong.

## Example

A `CZ` operation identifies control and target orientation, required calibration family, error categories, and target capability. It is not only a gate name.

## Failure modes

- Unitless parameters
- Mutable `latest` calibration lookup
- Silent capability fallback
- An operation whose output category is undocumented

## Self-check

1. What belongs in semantic meaning but not pulse code?
2. Why must units survive compilation?
3. Which error concept cannot be relegated to logging?

## Sources and status

Public context and model boundaries are recorded in the [claim map](../references.md#claim-map). Status: `draft`.

Parent: [Quantum-control software](../README.md)

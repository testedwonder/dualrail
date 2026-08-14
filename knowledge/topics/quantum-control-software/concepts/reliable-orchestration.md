---
title: Reliable Orchestration
kind: concept
status: draft
prerequisites: [topics/quantum-control-software/concepts/production-stack.md, topics/calibration-systems/concepts/calibration-dependencies.md]
next_steps: [topics/quantum-control-software/concepts/promotion-and-rollback.md, topics/quantum-control-software/concepts/observability.md]
related: [topics/quantum-control-software/concepts/compiler-and-scheduler.md, topics/quantum-control-software/concepts/test-portfolio.md]
source_files: [knowledge/topics/quantum-control-software/references.md]
complexity_depth: 9
complexity_prerequisite_count: 2
complexity_score: 6.54
complexity_wavelength_nm: 491
complexity_frequency_thz: 610.6
complexity_color: "#00fff9"
understanding: 0
---

# Reliable orchestration

<!-- study-status:start -->
<div class="study-status" data-complexity="6.54" data-wavelength-nm="491">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#00fff9;color:#111111;">Complexity 6.54/10 | 491 nm | 610.6 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Reliable Orchestration"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Production Quantum-Control Stack](production-stack.md), [Calibration Dependencies](../../calibration-systems/concepts/calibration-dependencies.md)
- **Next steps:** [Promotion and Rollback](promotion-and-rollback.md), [Two-Plane Observability](observability.md)
- **Related:** [Compiler and Scheduler](compiler-and-scheduler.md), [Quantum-Control Test Portfolio](test-portfolio.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Orchestration coordinates experiments, calibrations, resources, retries, and state transitions across services and hardware.

## Core invariants

- A retry cannot apply a non-idempotent update twice.
- Two workers cannot silently tune or promote the same resource concurrently.
- A partial failure has a resumable or safely abortable state.
- A hardware-state change prevents incompatible data from entering one fit.
- Schema and capability versions are negotiated explicitly.

## Mechanisms in the source reference model

- Idempotency keys
- Resource locks
- Resumable state machines
- Compare-and-swap promotion
- Explicit capability negotiation
- Immutable lineage and audit log

## Example

A network timeout occurs after a calibration request. The worker uses the same idempotency key to discover whether the experiment already ran instead of submitting a duplicate blindly.

## Failure modes

- Last writer wins on a coupler parameter.
- Retry duplicates a job or applies a setting twice.
- A run mixes pre-change and post-change device states.

## Self-check

1. Why does timeout not prove an operation failed?
2. What prevents concurrent promotion races?
3. When should a long run segment or stop?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map). Status: `draft`.

Parent: [Quantum-control software](../README.md)

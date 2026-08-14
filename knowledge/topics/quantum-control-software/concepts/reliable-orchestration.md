---
title: Reliable Orchestration
kind: concept
status: draft
prerequisites: [topics/quantum-control-software/concepts/production-stack.md, topics/calibration-systems/concepts/calibration-dependencies.md]
next_steps: [topics/quantum-control-software/concepts/promotion-and-rollback.md, topics/quantum-control-software/concepts/observability.md]
related: [topics/quantum-control-software/concepts/compiler-and-scheduler.md, topics/quantum-control-software/concepts/test-portfolio.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 3
complexity_prerequisite_count: 2
complexity_score: 4.43
complexity_wavelength_nm: 558
complexity_frequency_thz: 537.3
complexity_color: "#8fff00"
understanding: 0
---

# Reliable orchestration

<!-- study-status:start -->
<div class="study-status" data-complexity="4.43" data-wavelength-nm="558">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#8fff00;color:#111111;">Complexity 4.43/10 | 558 nm | 537.3 THz</span>
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

Source-backed by the [reliability table, source page 12](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide). Status: `draft`.

Parent: [Quantum-control software](../README.md)

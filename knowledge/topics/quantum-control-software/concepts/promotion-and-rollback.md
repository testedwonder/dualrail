---
title: Promotion and Rollback
kind: concept
status: draft
prerequisites: [topics/calibration-systems/concepts/calibration-validity.md, topics/calibration-systems/concepts/calibration-dependencies.md, topics/quantum-control-software/concepts/reliable-orchestration.md]
next_steps: [topics/quantum-control-software/concepts/observability.md, topics/quantum-control-software/concepts/test-portfolio.md]
related: [topics/calibration-systems/concepts/calibration-record.md, topics/calibration-systems/examples/dependency-invalidation.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 4
complexity_prerequisite_count: 3
complexity_score: 6.07
complexity_wavelength_nm: 506
complexity_frequency_thz: 592.5
complexity_color: "#00ff99"
understanding: 0
---

# Promotion and rollback

<!-- study-status:start -->
<div class="study-status" data-complexity="6.07" data-wavelength-nm="506">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#00ff99;color:#111111;">Complexity 6.07/10 | 506 nm | 592.5 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Promotion and Rollback"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Calibration Validity](../../calibration-systems/concepts/calibration-validity.md), [Calibration Dependencies](../../calibration-systems/concepts/calibration-dependencies.md), [Reliable Orchestration](reliable-orchestration.md)
- **Next steps:** [Two-Plane Observability](observability.md), [Quantum-Control Test Portfolio](test-portfolio.md)
- **Related:** [Calibration Record](../../calibration-systems/concepts/calibration-record.md), [Dependency Invalidation Example](../../calibration-systems/examples/dependency-invalidation.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Promotion makes a candidate calibration authoritative for a defined use. Rollback restores a known coherent prior state when a candidate or deployment fails.

## Promotion evidence

- Candidate record with units, uncertainty, and provenance
- Bounds and fit diagnostics
- Dependency compatibility
- Held-out or canary behavior
- Review or policy authorization
- Atomic graph update

## Invariants

- Failed validation leaves last-known-good intact.
- Readers observe the old coherent graph or the new coherent graph, never half an update.
- Descendants are invalidated before use when a parent changes.
- Rollback restores exact versions, not remembered numbers.

## Non-example

Overwrite the current parameter after a fit improves one objective, then try to reconstruct the old state from logs if the gate fails.

## Self-check

1. What is the difference between a candidate and an authoritative value?
2. Why must promotion be atomic?
3. What makes rollback reproducible?

## Sources and status

Source-backed by the [calibration-loop invariants, source page 8](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide) and repeated-CZ source pages 13-19. Status: `draft`.

Parent: [Quantum-control software](../README.md)

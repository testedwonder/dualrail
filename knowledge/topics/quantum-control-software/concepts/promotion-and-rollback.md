---
title: Promotion and Rollback
kind: concept
status: draft
prerequisites: [topics/calibration-systems/concepts/calibration-validity.md, topics/calibration-systems/concepts/calibration-dependencies.md, topics/quantum-control-software/concepts/reliable-orchestration.md]
next_steps: [topics/quantum-control-software/concepts/observability.md, topics/quantum-control-software/concepts/test-portfolio.md]
related: [topics/calibration-systems/concepts/calibration-record.md, topics/calibration-systems/examples/dependency-invalidation.md]
source_files: [knowledge/topics/quantum-control-software/references.md]
complexity_depth: 10
complexity_prerequisite_count: 3
complexity_score: 7.65
complexity_wavelength_nm: 455
complexity_frequency_thz: 658.9
complexity_color: "#0020ff"
understanding: 0
---

# Promotion and rollback

<!-- study-status:start -->
<div class="study-status" data-complexity="7.65" data-wavelength-nm="455">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#0020ff;color:#ffffff;">Complexity 7.65/10 | 455 nm | 658.9 THz</span>
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

Public context and model boundaries are recorded in the [claim map](../references.md#claim-map). Status: `draft`.

Parent: [Quantum-control software](../README.md)

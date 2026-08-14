---
title: Public and Internal Interfaces
kind: concept
status: draft
prerequisites: [topics/quantum-control-software/concepts/production-stack.md]
next_steps: [topics/quantum-control-software/concepts/experiment-description-and-semantic-layer.md]
related: [topics/quantum-control-software/concepts/realtime-control-and-error-handling.md, topics/quantum-control-software/concepts/compiler-and-scheduler.md]
source_files: [knowledge/topics/quantum-control-software/references.md]
complexity_depth: 8
complexity_prerequisite_count: 1
complexity_score: 5.42
complexity_wavelength_nm: 527
complexity_frequency_thz: 568.9
complexity_color: "#00ff13"
understanding: 0
---

# Public and internal interfaces

<!-- study-status:start -->
<div class="study-status" data-complexity="5.42" data-wavelength-nm="527">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#00ff13;color:#111111;">Complexity 5.42/10 | 527 nm | 568.9 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Public and Internal Interfaces"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Production Quantum-Control Stack](production-stack.md)
- **Next steps:** [Experiment Description and Semantic Layer](experiment-description-and-semantic-layer.md)
- **Related:** [Real-Time Control and Error Handling](realtime-control-and-error-handling.md), [Compiler and Scheduler](compiler-and-scheduler.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A public programming interface exposes supported user behavior. Internal experiment and calibration interfaces coordinate device-specific operations. They may share concepts without sharing one architecture or capability set.

## Public distinctions in the source

- QCDL is described as exposing real-time control and error-detection handling.
- The public Qiskit path is described as a familiar subset without those features.
- AquSim is described as modeling ideal and dual-rail/error-aware behavior.

## Why it matters

A generic circuit interface can hide timing, erasure checks, or branching that create the architecture's advantage. Capability loss should be explicit rather than silently emulated with different semantics.

## Boundary

Public product pages do not reveal private experiment services, calibration registries, controller protocols, or any individual contributor's ownership of an API.

## Example and non-example

**Example:** Reject a program that requires mid-circuit erasure branching when the selected target exposes no such capability.

**Non-example:** Accept the program, drop the branch, and return a plausible but semantically different result.

## Self-check

1. Why can a familiar API expose only a subset?
2. Which missing capability changes timing semantics?
3. What may be inferred from a public product page?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map) and public product pages. Status: `draft`.

Parent: [Quantum-control software](../README.md)

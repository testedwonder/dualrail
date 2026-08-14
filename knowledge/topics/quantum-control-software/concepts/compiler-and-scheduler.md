---
title: Compiler and Scheduler
kind: concept
status: draft
prerequisites: [topics/quantum-control-software/concepts/experiment-description-and-semantic-layer.md]
next_steps: [topics/quantum-control-software/concepts/realtime-control-and-error-handling.md, topics/quantum-control-software/concepts/test-portfolio.md]
related: [topics/circuit-qed/concepts/beamsplitter-and-parametric-drive.md, topics/quantum-control-software/concepts/reliable-orchestration.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 10
complexity_prerequisite_count: 1
complexity_score: 6.65
complexity_wavelength_nm: 487
complexity_frequency_thz: 615.6
complexity_color: "#00ecff"
understanding: 0
---

# Compiler and scheduler

<!-- study-status:start -->
<div class="study-status" data-complexity="6.65" data-wavelength-nm="487">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#00ecff;color:#111111;">Complexity 6.65/10 | 487 nm | 615.6 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Compiler and Scheduler"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Experiment Description and Semantic Layer](experiment-description-and-semantic-layer.md)
- **Next steps:** [Real-Time Control and Error Handling](realtime-control-and-error-handling.md), [Quantum-Control Test Portfolio](test-portfolio.md)
- **Related:** [Beamsplitter Interaction and Parametric Drive](../../circuit-qed/concepts/beamsplitter-and-parametric-drive.md), [Reliable Orchestration](reliable-orchestration.md)

<!-- learning-navigation:end -->

## Plain-language meaning

The compiler translates semantic operations into device-supported instructions. The scheduler assigns timing and resources while preventing incompatible operations from overlapping.

## Responsibilities

- Select implementations compatible with device capabilities
- Resolve calibrated parameters and exact versions
- Order pulses, checks, acquisition, and branches
- Enforce resource conflicts among modes, couplers, and control channels
- Produce a versioned executable artifact or trace

## Why it matters

Timing is part of physical correctness. A compiler-controller disagreement can run a plausible but wrong experiment, especially when phase accumulation, idle time, or mid-circuit feedback matters.

## Failure modes

- Two operations use the same coupler simultaneously.
- A schema migration defaults an unknown timing field.
- The simulator and controller interpret branch timing differently.
- A calibration changes after compilation but before execution without invalidation.

## Self-check

1. What is the scheduler protecting besides CPU time?
2. Why should executable traces be versioned?
3. Which change can invalidate a compiled artifact?

## Sources and status

Source-backed by the [reference stack and reliability table, source pages 11-12](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide). Status: `draft`.

Parent: [Quantum-control software](../README.md)

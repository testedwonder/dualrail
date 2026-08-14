---
title: Real-Time Control and Error Handling
kind: concept
status: draft
prerequisites: [topics/quantum-control-software/concepts/compiler-and-scheduler.md, topics/quantum-control-software/concepts/outcome-semantics.md]
next_steps: [topics/quantum-control-software/concepts/acquisition-and-provenance.md, topics/quantum-control-software/concepts/test-portfolio.md]
related: [topics/dual-rail-qubits/concepts/detection-correction-and-postselection.md, topics/quantum-control-software/concepts/public-and-internal-interfaces.md]
source_files: [knowledge/topics/quantum-control-software/references.md]
complexity_depth: 13
complexity_prerequisite_count: 2
complexity_score: 9.0
complexity_wavelength_nm: 412
complexity_frequency_thz: 727.7
complexity_color: "#4e00ff"
understanding: 0
---

# Real-time control and error handling

<!-- study-status:start -->
<div class="study-status" data-complexity="9.0" data-wavelength-nm="412">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#4e00ff;color:#ffffff;">Complexity 9.0/10 | 412 nm | 727.7 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Real-Time Control and Error Handling"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Compiler and Scheduler](compiler-and-scheduler.md), [Outcome Semantics](outcome-semantics.md)
- **Next steps:** [Acquisition and Provenance](acquisition-and-provenance.md), [Quantum-Control Test Portfolio](test-portfolio.md)
- **Related:** [Detection, Correction, and Postselection](../../dual-rail-qubits/concepts/detection-correction-and-postselection.md), [Public and Internal Interfaces](public-and-internal-interfaces.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Real-time control executes bounded classical decisions close enough to the QPU to affect an ongoing quantum program. Error-detection handling uses detected error information in those decisions or in custom analysis.

## Publicly described behaviors

- Branch on measurement or erasure results
- Perform arithmetic and loops near execution
- Select dynamic gates
- Place error-detection checks deliberately
- Customize postselection or error-aware analysis

## Why location matters

Ordinary host or cloud round trips are too slow for coherence-sensitive mid-circuit decisions. Python may describe the program, while deterministic timing executes in a controller near the hardware.

## Failure modes

- Host code is mistaken for deterministic real-time execution.
- A simulator branch has different timing from the controller.
- Error metadata is logged but unavailable to the branch.
- Unbounded user logic is allowed inside a fixed real-time budget.

## Self-check

1. Why can the host not execute every branch?
2. Which information must be first-class program state?
3. What must simulator and controller agree on?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map) and Quantum Circuits public technology page. Status: `draft`.

Parent: [Quantum-control software](../README.md)

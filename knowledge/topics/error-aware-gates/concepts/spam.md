---
title: State-Preparation-and-Measurement Error
kind: concept
status: draft
prerequisites: [topics/dual-rail-qubits/concepts/code-space.md, topics/circuit-qed/concepts/readout-chain-and-iq-data.md]
next_steps: [topics/error-aware-gates/algorithms/logical-measurement-with-erasure-detection.md, topics/error-aware-gates/examples/repeated-cz-experiment.md]
related: [topics/error-aware-gates/concepts/quantum-state-tomography.md, topics/quantum-control-software/concepts/outcome-semantics.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 4
complexity_prerequisite_count: 2
complexity_score: 5.57
complexity_wavelength_nm: 522
complexity_frequency_thz: 574.3
complexity_color: "#00ff33"
understanding: 0
---

# State-preparation-and-measurement error

<!-- study-status:start -->
<div class="study-status" data-complexity="5.57" data-wavelength-nm="522">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#00ff33;color:#111111;">Complexity 5.57/10 | 522 nm | 574.3 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for State-Preparation-and-Measurement Error"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Code Space](../../dual-rail-qubits/concepts/code-space.md), [Readout Chain and IQ Data](../../circuit-qed/concepts/readout-chain-and-iq-data.md)
- **Next steps:** [Logical Measurement with Erasure Detection](../algorithms/logical-measurement-with-erasure-detection.md), [Repeated-CZ Experiment](../examples/repeated-cz-experiment.md)
- **Related:** [Quantum State Tomography](quantum-state-tomography.md), [Outcome Semantics](../../quantum-control-software/concepts/outcome-semantics.md)

<!-- learning-navigation:end -->

## Plain-language meaning

SPAM is shorthand for state-preparation-and-measurement error: mistakes introduced while creating the starting state or assigning the final measurement outcome.

## Why it matters

A gate experiment measures an end-to-end circuit. Without separating SPAM from gate behavior, a poor preparation or classifier can be misreported as a gate error, or a postselection rule can make a result look cleaner by discarding more shots.

## Categories in the dual-rail measurement source

- Failed preparation checks
- Failed measurement checks
- Logical misassignment
- Erroneous code-space assignment for a leakage state
- Detected erasure

## Example and non-example

**Example:** Report logical misassignment and erasure assignment as separate metrics.

**Non-example:** Subtract a remembered SPAM constant from every future gate result without matching device state and protocol.

## Self-check

1. Which two stages does SPAM combine?
2. Why can postselection hide a preparation problem?
3. Which metadata lets an old result reconstruct its classifier?

## Sources and status

Source-backed by the [2024 paper brief, source page 9](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide). Status: `draft`.

Parent: [Error-aware gates](../README.md)

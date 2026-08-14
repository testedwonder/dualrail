---
title: Minor Embedding
kind: concept
status: draft
prerequisites: [topics/annealing-and-evidence/concepts/qubo-and-bqm.md, topics/annealing-and-evidence/concepts/hardware-connectivity.md]
next_steps: [topics/annealing-and-evidence/algorithms/annealing-sampling-workflow.md]
related: [topics/annealing-and-evidence/concepts/hybrid-solver.md, topics/annealing-and-evidence/concepts/end-to-end-benchmarking.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 3
complexity_prerequisite_count: 2
complexity_score: 4.43
complexity_wavelength_nm: 558
complexity_frequency_thz: 537.3
complexity_color: "#8fff00"
understanding: 0
---

# Minor embedding

<!-- study-status:start -->
<div class="study-status" data-complexity="4.43" data-wavelength-nm="558">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#8fff00;color:#111111;">Complexity 4.43/10 | 558 nm | 537.3 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Minor Embedding"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [QUBO and Binary Quadratic Models](qubo-and-bqm.md), [Annealer Hardware Connectivity](hardware-connectivity.md)
- **Next steps:** [Annealing Sampling Workflow](../algorithms/annealing-sampling-workflow.md)
- **Related:** [Hybrid Solver](hybrid-solver.md), [End-to-End Benchmarking](end-to-end-benchmarking.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Minor embedding maps a logical problem graph onto limited hardware connectivity. One logical variable may be represented by a connected chain of physical qubits.

## Why chains exist

If two logical variables need an interaction that no single pair of chosen hardware qubits provides, chains can route the logical structure through available couplers.

## Chain requirements

- Physical qubits in a chain should behave as one logical variable.
- Chain strength must balance keeping the chain aligned against preserving the problem's useful energy scale.
- Broken chains need explicit unembedding or repair rules.

## Costs

- More physical qubits per logical variable
- Additional parameter tuning
- Potential chain breaks
- Formulation and preprocessing time

## Non-example

Report only anneal time while ignoring embedding search and chain tuning in an end-to-end comparison.

## Self-check

1. Why can one logical variable require many physical qubits?
2. What does chain strength trade off?
3. Which benchmark cost is often omitted?

## Sources and status

Source-backed by the [annealing workflow and topology discussion, source page 4](../../../../base/DWave_Application_and_Study_Materials.md#6-d-wave-company-history-research-and-industry-study). Status: `draft`.

Parent: [Annealing and evidence](../README.md)

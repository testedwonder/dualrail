---
title: Annealer Hardware Connectivity
kind: concept
status: draft
prerequisites: [topics/annealing-and-evidence/concepts/quantum-annealing.md]
next_steps: [topics/annealing-and-evidence/concepts/minor-embedding.md]
related: [topics/annealing-and-evidence/concepts/ising-model.md, topics/annealing-and-evidence/algorithms/annealing-sampling-workflow.md]
source_files: [knowledge/topics/annealing-and-evidence/references.md]
complexity_depth: 1
complexity_prerequisite_count: 1
complexity_score: 1.12
complexity_wavelength_nm: 664
complexity_frequency_thz: 451.5
complexity_color: "#ff4c00"
understanding: 0
---

# Annealer hardware connectivity

<!-- study-status:start -->
<div class="study-status" data-complexity="1.12" data-wavelength-nm="664">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ff4c00;color:#ffffff;">Complexity 1.12/10 | 664 nm | 451.5 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Annealer Hardware Connectivity"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Quantum Annealing](quantum-annealing.md)
- **Next steps:** [Minor Embedding](minor-embedding.md)
- **Related:** [Ising Model](ising-model.md), [Annealing Sampling Workflow](../algorithms/annealing-sampling-workflow.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Hardware connectivity is the graph of which physical qubits have programmable pairwise couplers. A logical problem edge can be represented directly only when the selected physical qubits are connected appropriately.

## Topologies named by the source

- Chimera: sparse unit-cell graph used by older generations
- Pegasus: denser graph with more couplers per qubit
- Zephyr: later graph with still higher connectivity

## Why it matters

Greater connectivity can shorten or avoid chains used in minor embedding. That can reduce overhead for some problem graphs, but it does not eliminate formulation, calibration, or validation cost.

## Non-example

Comparing qubit counts without considering whether the problem's logical graph fits the hardware graph.

## Self-check

1. What does a hardware edge represent?
2. Why can denser connectivity reduce embedding overhead?
3. Why is qubit count alone insufficient?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map). Time-sensitive generation values remain attributed. Status: `draft`.

Parent: [Annealing and evidence](../README.md)

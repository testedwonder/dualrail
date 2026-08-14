---
title: Quantum Processing Time and Time to Solution
kind: concept
status: draft
prerequisites: [topics/annealing-and-evidence/algorithms/annealing-sampling-workflow.md]
next_steps: [topics/annealing-and-evidence/concepts/quantum-advantage.md, topics/annealing-and-evidence/concepts/end-to-end-benchmarking.md]
related: [topics/annealing-and-evidence/concepts/evidence-levels.md, topics/annealing-and-evidence/concepts/hybrid-solver.md]
source_files: [knowledge/topics/annealing-and-evidence/references.md]
complexity_depth: 5
complexity_prerequisite_count: 1
complexity_score: 3.58
complexity_wavelength_nm: 585
complexity_frequency_thz: 512.5
complexity_color: "#fff400"
understanding: 0
---

# Quantum processing time and time to solution

<!-- study-status:start -->
<div class="study-status" data-complexity="3.58" data-wavelength-nm="585">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#fff400;color:#111111;">Complexity 3.58/10 | 585 nm | 512.5 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Quantum Processing Time and Time to Solution"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Annealing Sampling Workflow](../algorithms/annealing-sampling-workflow.md)
- **Next steps:** [Quantum Advantage](quantum-advantage.md), [End-to-End Benchmarking](end-to-end-benchmarking.md)
- **Related:** [Evidence Levels](evidence-levels.md), [Hybrid Solver](hybrid-solver.md)

<!-- learning-navigation:end -->

## Plain-language distinction

**Quantum processing time** is time attributed to programming, annealing, and readout on the QPU. **Time to solution** estimates how long repeated probabilistic attempts need to reach a target success probability.

## Why it matters

A stochastic sampler may need many calls. One fast anneal is not the same as a high probability of finding a target-quality answer.

## End-to-end boundary

Neither metric automatically includes all formulation, embedding, queue, network, tuning, unembedding, repair, validation, or human-review time. A practical benchmark should state exactly what is counted.

## Non-example

Compare QPU anneal time against a classical solver's full wall-clock workflow and call the ratio an application speedup.

## Self-check

1. Why does success probability affect time to solution?
2. Which costs can sit outside quantum processing time?
3. What timing boundary must a comparison declare?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map). Status: `draft`.

Parent: [Annealing and evidence](../README.md)

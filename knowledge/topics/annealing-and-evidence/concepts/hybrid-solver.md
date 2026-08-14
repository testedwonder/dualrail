---
title: Hybrid Solver
kind: concept
status: draft
prerequisites: [topics/annealing-and-evidence/algorithms/annealing-sampling-workflow.md]
next_steps: [topics/annealing-and-evidence/concepts/end-to-end-benchmarking.md]
related: [topics/annealing-and-evidence/concepts/minor-embedding.md, topics/annealing-and-evidence/concepts/quantum-advantage.md]
source_files: [knowledge/topics/annealing-and-evidence/references.md]
complexity_depth: 5
complexity_prerequisite_count: 1
complexity_score: 3.58
complexity_wavelength_nm: 585
complexity_frequency_thz: 512.5
complexity_color: "#fff400"
understanding: 0
---

# Hybrid solver

<!-- study-status:start -->
<div class="study-status" data-complexity="3.58" data-wavelength-nm="585">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#fff400;color:#111111;">Complexity 3.58/10 | 585 nm | 512.5 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Hybrid Solver"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Annealing Sampling Workflow](../algorithms/annealing-sampling-workflow.md)
- **Next steps:** [End-to-End Benchmarking](end-to-end-benchmarking.md)
- **Related:** [Minor Embedding](minor-embedding.md), [Quantum Advantage](quantum-advantage.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A hybrid solver combines classical search, decomposition, or coordination with calls to a quantum sampler.

## Why it matters

Problems larger than a direct hardware embedding can be decomposed or iteratively improved. The complete algorithm, not the QPU call alone, produces the result.

## Evaluation questions

- Which work is done classically?
- Which subproblems reach the QPU?
- How much improvement comes from the quantum component?
- What tuning and decomposition budget is included?
- Does an ablation without QPU calls perform similarly?

## Non-example

Call a large problem “solved by the quantum computer” when most search and constraint handling occur classically and the quantum contribution is not isolated.

## Self-check

1. Why can hybrid methods exceed direct embedding size?
2. What does an ablation test reveal?
3. Which component owns the final workflow claim?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map). Status: `draft`.

Parent: [Annealing and evidence](../README.md)

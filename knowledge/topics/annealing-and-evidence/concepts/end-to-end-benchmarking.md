---
title: End-to-End Benchmarking
kind: concept
status: draft
prerequisites: [topics/annealing-and-evidence/concepts/quantum-advantage.md, topics/annealing-and-evidence/concepts/evidence-levels.md, topics/annealing-and-evidence/algorithms/annealing-sampling-workflow.md]
next_steps: [topics/annealing-and-evidence/README.md]
related: [topics/annealing-and-evidence/concepts/hybrid-solver.md, topics/annealing-and-evidence/concepts/minor-embedding.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 7
complexity_prerequisite_count: 3
complexity_score: 5.81
complexity_wavelength_nm: 514
complexity_frequency_thz: 583.3
complexity_color: "#00ff66"
understanding: 0
---

# End-to-end benchmarking

<!-- study-status:start -->
<div class="study-status" data-complexity="5.81" data-wavelength-nm="514">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#00ff66;color:#111111;">Complexity 5.81/10 | 514 nm | 583.3 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for End-to-End Benchmarking"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Quantum Advantage](quantum-advantage.md), [Evidence Levels](evidence-levels.md), [Annealing Sampling Workflow](../algorithms/annealing-sampling-workflow.md)
- **Next steps:** [Annealing and Evidence](../README.md)
- **Related:** [Hybrid Solver](hybrid-solver.md), [Minor Embedding](minor-embedding.md)

<!-- learning-navigation:end -->

## Plain-language meaning

End-to-end benchmarking compares complete methods from original problem input to validated output rather than isolating only a favorable kernel.

## Costs to account for

- Problem formulation and constraint encoding
- Embedding or decomposition
- Parameter and baseline tuning
- Queue, programming, anneal, and readout time
- Network and data movement
- Unembedding, repair, and validation
- Repeated calls needed for target success probability
- Human or operational review when part of the workflow

## Fairness requirements

- Compare equivalent outputs at the same accuracy or quality target.
- Give classical baselines competent implementation and tuning.
- Disclose preprocessing and parallelism.
- Use enough instance sizes to support a scaling claim.
- Preserve negative and inconclusive results.

## Counterexample

Compare a 20-microsecond anneal with an untuned classical program's total wall time while excluding model construction and embedding from the quantum side.

## Self-check

1. What output equivalence must be established first?
2. Why include unsuccessful quantum samples?
3. Which costs can dominate a short QPU call?

## Sources and status

Source-backed by the [research and industry assessment, source pages 2, 6-8, and 13](../../../../base/DWave_Application_and_Study_Materials.md#6-d-wave-company-history-research-and-industry-study). Status: `draft`.

Parent: [Annealing and evidence](../README.md)

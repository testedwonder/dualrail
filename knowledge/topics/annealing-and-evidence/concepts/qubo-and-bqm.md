---
title: QUBO and Binary Quadratic Models
kind: concept
status: draft
prerequisites: [topics/annealing-and-evidence/concepts/ising-model.md]
next_steps: [topics/annealing-and-evidence/concepts/minor-embedding.md, topics/annealing-and-evidence/examples/binary-quadratic-objective.md]
related: [topics/annealing-and-evidence/algorithms/annealing-sampling-workflow.md, topics/annealing-and-evidence/concepts/hybrid-solver.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 2
complexity_prerequisite_count: 1
complexity_score: 2.79
complexity_wavelength_nm: 611
complexity_frequency_thz: 490.7
complexity_color: "#ffbd00"
understanding: 0
---

# QUBO and binary quadratic models

<!-- study-status:start -->
<div class="study-status" data-complexity="2.79" data-wavelength-nm="611">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ffbd00;color:#111111;">Complexity 2.79/10 | 611 nm | 490.7 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for QUBO and Binary Quadratic Models"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Ising Model](ising-model.md)
- **Next steps:** [Minor Embedding](minor-embedding.md), [Binary Quadratic Objective Example](../examples/binary-quadratic-objective.md)
- **Related:** [Annealing Sampling Workflow](../algorithms/annealing-sampling-workflow.md), [Hybrid Solver](hybrid-solver.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A quadratic unconstrained binary optimization model assigns an energy to binary variables using linear and pairwise coefficients. BQM is the broader software abstraction commonly used for binary quadratic models in either binary or spin form.

## Objective

The source gives the binary form:

$$
E(x)=\sum_i a_i x_i + \sum_{i<j} b_{ij}x_i x_j,\qquad x_i\in\{0,1\}.
$$

`a_i` scores individual choices. `b_ij` scores relationships between pairs.

## Constraints

QUBO is “unconstrained” in form. Real constraints are commonly encoded as penalty terms or handled through hybrid and classical logic. Penalties must be strong enough to reject invalid solutions without destroying useful energy resolution.

## Failure modes

- Simplify away a business constraint.
- Choose penalties that dominate or fail to enforce feasibility.
- Compare methods on different effective objectives.

## Self-check

1. What does a linear coefficient affect?
2. What does a quadratic coefficient affect?
3. Where can constraints enter an unconstrained model?

## Sources and status

Source-backed by the [D-Wave technology study, source page 4](../../../../base/DWave_Application_and_Study_Materials.md#6-d-wave-company-history-research-and-industry-study). Status: `draft`.

Parent: [Annealing and evidence](../README.md)

---
title: Binary Quadratic Objective Example
kind: example
status: draft
prerequisites: [topics/annealing-and-evidence/concepts/qubo-and-bqm.md]
next_steps: [topics/annealing-and-evidence/concepts/minor-embedding.md, topics/annealing-and-evidence/algorithms/annealing-sampling-workflow.md]
related: [topics/annealing-and-evidence/concepts/ising-model.md, topics/annealing-and-evidence/concepts/end-to-end-benchmarking.md]
source_files: [knowledge/topics/annealing-and-evidence/references.md]
complexity_depth: 3
complexity_prerequisite_count: 1
complexity_score: 2.35
complexity_wavelength_nm: 625
complexity_frequency_thz: 479.7
complexity_color: "#ff9f00"
understanding: 0
---

# Binary quadratic objective example

<!-- study-status:start -->
<div class="study-status" data-complexity="2.35" data-wavelength-nm="625">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ff9f00;color:#111111;">Complexity 2.35/10 | 625 nm | 479.7 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Binary Quadratic Objective Example"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [QUBO and Binary Quadratic Models](../concepts/qubo-and-bqm.md)
- **Next steps:** [Minor Embedding](../concepts/minor-embedding.md), [Annealing Sampling Workflow](../algorithms/annealing-sampling-workflow.md)
- **Related:** [Ising Model](../concepts/ising-model.md), [End-to-End Benchmarking](../concepts/end-to-end-benchmarking.md)

<!-- learning-navigation:end -->

## Problem

Use two binary variables to show how linear and pairwise coefficients shape a QUBO energy. This is a mathematical worked example, not a D-Wave API call.

## Objective

$$
E(x_1,x_2)=-x_1-x_2+2x_1x_2,
\qquad x_1,x_2\in\{0,1\}.
$$

The negative linear terms reward selecting either variable. The positive pairwise term penalizes selecting both together.

## Enumerate all assignments

| $x_1$ | $x_2$ | Energy | Interpretation |
| ---: | ---: | ---: | --- |
| 0 | 0 | 0 | Select neither |
| 1 | 0 | -1 | Select only item 1 |
| 0 | 1 | -1 | Select only item 2 |
| 1 | 1 | 0 | Pair penalty cancels both rewards |

The two lowest-energy assignments select exactly one item.

## What this demonstrates

- Linear coefficients affect individual choices.
- Quadratic coefficients affect combinations.
- The energy model can have multiple equally good answers.
- Enumerating a tiny case provides an independent correctness check.

## Limit

Real constraint encoding and penalty selection can be much harder. This example does not establish that an annealer is needed or faster than enumeration.

## Self-check

1. What happens if the pair coefficient changes from `+2` to `0`?
2. Which assignments minimize this objective?
3. Why is this not evidence of quantum advantage?

## Sources and status

Worked from the QUBO form in the [public claim map](../references.md#claim-map). Status: `draft`; arithmetic is inspectable but no executable claim is made.

Parent: [Annealing and evidence](../README.md)

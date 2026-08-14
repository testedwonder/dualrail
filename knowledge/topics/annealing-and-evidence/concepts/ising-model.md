---
title: Ising Model
kind: definition
status: draft
prerequisites: [topics/annealing-and-evidence/concepts/quantum-annealing.md]
next_steps: [topics/annealing-and-evidence/concepts/qubo-and-bqm.md]
related: [topics/annealing-and-evidence/algorithms/annealing-sampling-workflow.md, topics/annealing-and-evidence/concepts/hardware-connectivity.md]
source_files: [knowledge/topics/annealing-and-evidence/references.md]
complexity_depth: 1
complexity_prerequisite_count: 1
complexity_score: 1.12
complexity_wavelength_nm: 664
complexity_frequency_thz: 451.5
complexity_color: "#ff4c00"
understanding: 0
---

# Ising model

<!-- study-status:start -->
<div class="study-status" data-complexity="1.12" data-wavelength-nm="664">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ff4c00;color:#ffffff;">Complexity 1.12/10 | 664 nm | 451.5 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Ising Model"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Quantum Annealing](quantum-annealing.md)
- **Next steps:** [QUBO and Binary Quadratic Models](qubo-and-bqm.md)
- **Related:** [Annealing Sampling Workflow](../algorithms/annealing-sampling-workflow.md), [Annealer Hardware Connectivity](hardware-connectivity.md)

<!-- learning-navigation:end -->

## Plain-language meaning

An Ising model assigns an energy to spin variables with values in `{-1,+1}` using individual biases and pairwise interactions. Lower-energy assignments are preferred by the encoded objective.

## Why it matters

The Ising representation is a native language for magnetic models and many annealing formulations. A binary quadratic model can be converted between binary variables and Ising spins.

## Structure

```text
energy = local spin terms + pairwise spin terms
```

The coefficient signs and magnitudes determine which individual values and relationships lower energy.

## Non-example

Assuming every real constraint is automatically present because an objective was mapped to spins. Constraints must be encoded or enforced elsewhere.

## Self-check

1. Which values can an Ising spin take?
2. What do pairwise coefficients represent?
3. Why is low energy not automatically operational validity?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map). Status: `draft`.

Parent: [Annealing and evidence](../README.md)

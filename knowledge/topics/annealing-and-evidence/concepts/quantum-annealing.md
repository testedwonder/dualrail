---
title: Quantum Annealing
kind: concept
status: draft
prerequisites: []
next_steps: [topics/annealing-and-evidence/concepts/ising-model.md, topics/annealing-and-evidence/concepts/hardware-connectivity.md]
related: [topics/annealing-and-evidence/algorithms/annealing-sampling-workflow.md, topics/annealing-and-evidence/concepts/quantum-advantage.md]
source_files: [knowledge/topics/annealing-and-evidence/references.md]
complexity_depth: 0
complexity_prerequisite_count: 0
complexity_score: 0.0
complexity_wavelength_nm: 700
complexity_frequency_thz: 428.3
complexity_color: "#ff0000"
understanding: 0
---

# Quantum annealing

<!-- study-status:start -->
<div class="study-status" data-complexity="0.0" data-wavelength-nm="700">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ff0000;color:#ffffff;">Complexity 0.0/10 | 700 nm | 428.3 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Quantum Annealing"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** None
- **Next steps:** [Ising Model](ising-model.md), [Annealer Hardware Connectivity](hardware-connectivity.md)
- **Related:** [Annealing Sampling Workflow](../algorithms/annealing-sampling-workflow.md), [Quantum Advantage](quantum-advantage.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Quantum annealing is analog evolution intended to produce low-energy states of an encoded optimization or spin-model Hamiltonian.

## Useful mental model

The annealer is a programmable physical sampler for low-energy states. It is not a faster general CPU and it does not execute a conventional gate circuit.

## Workflow context

A user formulates an objective, maps it to hardware connectivity, runs many stochastic samples, and validates the returned candidates with classical computation.

## What it does not guarantee

- One read does not guarantee the optimum.
- A low-energy sample is not automatically a valid business solution.
- Quantum behavior does not by itself prove speedup.
- A hardware-time result does not capture full application cost.

## Self-check

1. What kind of states does an annealer tend to sample?
2. Why are repeated samples needed?
3. Which classical steps remain essential?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map). Status: `draft`.

Parent: [Annealing and evidence](../README.md)

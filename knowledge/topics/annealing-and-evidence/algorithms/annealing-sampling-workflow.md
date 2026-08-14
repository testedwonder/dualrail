---
title: Annealing Sampling Workflow
kind: algorithm
status: draft
prerequisites: [topics/annealing-and-evidence/concepts/qubo-and-bqm.md, topics/annealing-and-evidence/concepts/minor-embedding.md]
next_steps: [topics/annealing-and-evidence/concepts/hybrid-solver.md, topics/annealing-and-evidence/concepts/quantum-processing-time-and-time-to-solution.md, topics/annealing-and-evidence/concepts/end-to-end-benchmarking.md]
related: [topics/annealing-and-evidence/concepts/quantum-annealing.md, topics/annealing-and-evidence/examples/binary-quadratic-objective.md]
source_files: [knowledge/topics/annealing-and-evidence/references.md]
complexity_depth: 4
complexity_prerequisite_count: 2
complexity_score: 3.46
complexity_wavelength_nm: 589
complexity_frequency_thz: 509.0
complexity_color: "#ffec00"
understanding: 0
---

# Annealing sampling workflow

<!-- study-status:start -->
<div class="study-status" data-complexity="3.46" data-wavelength-nm="589">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ffec00;color:#111111;">Complexity 3.46/10 | 589 nm | 509.0 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Annealing Sampling Workflow"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [QUBO and Binary Quadratic Models](../concepts/qubo-and-bqm.md), [Minor Embedding](../concepts/minor-embedding.md)
- **Next steps:** [Hybrid Solver](../concepts/hybrid-solver.md), [Quantum Processing Time and Time to Solution](../concepts/quantum-processing-time-and-time-to-solution.md), [End-to-End Benchmarking](../concepts/end-to-end-benchmarking.md)
- **Related:** [Quantum Annealing](../concepts/quantum-annealing.md), [Binary Quadratic Objective Example](../examples/binary-quadratic-objective.md)

<!-- learning-navigation:end -->

## Problem

Transform a real objective into a hardware-compatible energy model, collect stochastic low-energy candidates, and validate them against the original problem.

## Inputs and outputs

**Inputs:** objective, constraints, binary variables, coefficients, target hardware or sampler, embedding policy, chain settings, sample count, and validation rules.

**Outputs:** candidate assignments, energies, feasibility and business-rule results, timing breakdown, and comparison evidence.

## Procedure

1. **Formulate:** Express objective and constraints as a BQM, QUBO, or Ising model.
2. **Scale:** Choose coefficient and penalty ranges compatible with the target.
3. **Map:** Find a direct mapping or minor embedding onto hardware connectivity.
4. **Configure:** Select chain strength, anneal parameters, gauges, sample count, and seeds where applicable.
5. **Anneal and sample:** Program the device and read many stochastic outcomes.
6. **Unembed:** Convert chains back to logical variables and handle breaks under a declared rule.
7. **Validate:** Recompute the original objective and constraints classically.
8. **Compare:** Include formulation, embedding, tuning, sampling, and validation in the benchmark.

## Invariants

- Every returned candidate is checked against the original problem.
- The comparator receives a fair tuning and preprocessing budget.
- Timing categories are named rather than collapsed selectively.
- Constraint violations are not hidden by low encoded energy.

## Minimal pseudocode

```text
model = formulate(problem)
embedding = map_to_hardware(model.graph, hardware.graph)
samples = sampler.run(model, embedding, declared_parameters)
candidates = unembed(samples, declared_chain_rule)
return validate_against_original_problem(candidates)
```

## Failure modes

- Impressive energy on a model that omitted a real constraint
- Weak classical baseline
- Hidden tuning budget
- One successful sample presented without success probability
- Quantum processing time reported as total workflow time

## Self-check

1. Why validate against the original problem?
2. Which steps occur before QPU execution?
3. What must a fair comparator include?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map). Status: `draft`; no D-Wave API is invented.

Parent: [Annealing and evidence](../README.md)

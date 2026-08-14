---
title: Quantum Advantage
kind: concept
status: draft
prerequisites: [topics/annealing-and-evidence/concepts/quantum-processing-time-and-time-to-solution.md, topics/annealing-and-evidence/concepts/evidence-levels.md]
next_steps: [topics/annealing-and-evidence/concepts/end-to-end-benchmarking.md]
related: [topics/annealing-and-evidence/concepts/hybrid-solver.md, topics/annealing-and-evidence/concepts/quantum-annealing.md]
source_files: [knowledge/topics/annealing-and-evidence/references.md]
complexity_depth: 6
complexity_prerequisite_count: 2
complexity_score: 4.69
complexity_wavelength_nm: 550
complexity_frequency_thz: 545.1
complexity_color: "#66ff00"
understanding: 0
---

# Quantum advantage

<!-- study-status:start -->
<div class="study-status" data-complexity="4.69" data-wavelength-nm="550">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#66ff00;color:#111111;">Complexity 4.69/10 | 550 nm | 545.1 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Quantum Advantage"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Quantum Processing Time and Time to Solution](quantum-processing-time-and-time-to-solution.md), [Evidence Levels](evidence-levels.md)
- **Next steps:** [End-to-End Benchmarking](end-to-end-benchmarking.md)
- **Related:** [Hybrid Solver](hybrid-solver.md), [Quantum Annealing](quantum-annealing.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Quantum advantage is a demonstrated benefit over a specified classical method for a specified task, accuracy target, and metric. It is not automatically broad or permanent.

## Required scope

- Exact task and instance family
- Output or accuracy being compared
- Quantum and classical algorithms
- Hardware and software versions
- Tuning, preprocessing, and parallelism budgets
- Timing and cost boundaries
- Reproducible code, data, or artifacts where possible

## Distinctions

- Quantum behavior does not prove computational advantage.
- Quantum simulation advantage does not imply general optimization advantage.
- Hardware speed does not imply end-to-end business value.
- A result can be strong and peer reviewed while its classical frontier remains contested.

## Non-example

“D-Wave proved quantum computers are faster” omits the method, task, comparator, accuracy, and boundary.

## Self-check

1. What must every advantage claim name?
2. Why can the best classical baseline change later?
3. What does a simulation result not establish about scheduling?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map). Status: `draft`.

Parent: [Annealing and evidence](../README.md)

---
title: Quantum Measurement and the Born Rule
kind: concept
status: draft
prerequisites: [topics/mathematics-and-quantum-foundations/fundamentals/probability-and-measurement-statistics.md, topics/mathematics-and-quantum-foundations/concepts/quantum-operators-observables-and-expectation-values.md]
next_steps: [topics/dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md, topics/calibration-systems/fundamentals/from-gates-to-calibration.md]
related: [topics/mathematics-and-quantum-foundations/concepts/quantum-states-and-bra-ket-notation.md]
source_files: [base/Mathematics_and_Quantum_Foundations_Authoritative_Sources.md]
exercise_id: measurement-lab
complexity_depth: 5
complexity_prerequisite_count: 2
complexity_score: 4.08
complexity_wavelength_nm: 569
complexity_frequency_thz: 526.9
complexity_color: "#c7ff00"
understanding: 0
---

# Quantum measurement and the Born rule

<!-- study-status:start -->
<div class="study-status" data-complexity="4.08" data-wavelength-nm="569">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#c7ff00;color:#111111;">Complexity 4.08/10 | 569 nm | 526.9 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Quantum Measurement and the Born Rule"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Probability and Measurement Statistics](../fundamentals/probability-and-measurement-statistics.md), [Quantum Operators, Observables, and Expectation Values](quantum-operators-observables-and-expectation-values.md)
- **Next steps:** [Quantum States and Fock Notation](../../dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md), [From Gates to Calibration](../../calibration-systems/fundamentals/from-gates-to-calibration.md)
- **Related:** [Quantum States and Bra-Ket Notation](quantum-states-and-bra-ket-notation.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A measurement turns a quantum-state description into a classical outcome according to a probability rule. In a standard-basis measurement, square the magnitude of each basis amplitude to obtain that outcome's probability.

## Born rule

For

$$|\psi\rangle=\sum_k\alpha_k|k\rangle,$$

standard-basis measurement returns $k$ with probability

$$P(k)=|\alpha_k|^2.$$

The probabilities sum to one because the state is normalized. IBM's course states this rule directly and identifies it as the Born rule. [Source record](../../../../base/Mathematics_and_Quantum_Foundations_Authoritative_Sources.md#ibm-quantum-learning-state-vectors-measurement-and-gates).

## Worked example

For

$$|\psi\rangle=\frac{\sqrt3}{2}|0\rangle+\frac{i}{2}|1\rangle,$$

the probabilities are $P(0)=3/4$ and $P(1)=1/4$. The factor $i$ changes phase but not its component's magnitude.

## Basis matters

The Born rule is not limited to the standard basis. For an orthonormal measurement basis $\{|b_j\rangle\}$,

$$P(j)=|\langle b_j|\psi\rangle|^2.$$

Changing basis changes which alternatives are distinguished. This is why $|+\rangle$ and $|-\rangle$ look identical in a standard-basis measurement but can be separated after a Hadamard rotation.

## Prediction versus sample

The state predicts probabilities. A finite run produces counts. The embedded lab uses a visible deterministic seed so the same settings reproduce the same counts; changing the seed demonstrates ordinary sampling variation without pretending to simulate device noise.

## Common misconceptions

- Measurement does not reveal all complex amplitudes in one shot.
- A finite frequency is an estimate, not the Born probability itself.
- Identical probabilities in one basis do not make two states identical.

## Self-check

1. What probability follows from amplitude $(1+i)/2$?
2. Why must the probabilities sum to one?
3. What can a basis change reveal about relative phase?

## Sources and status

Source-backed by [IBM Quantum Learning and OpenStax probability through the dated source portfolio](../../../../base/Mathematics_and_Quantum_Foundations_Authoritative_Sources.md). Status: `draft`; the interactive counts are deterministic educational samples, not hardware data.

Parent: [Mathematics and quantum foundations](../README.md)

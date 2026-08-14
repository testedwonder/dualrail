---
title: Unitary Evolution and Quantum Gates
kind: concept
status: draft
prerequisites: [topics/mathematics-and-quantum-foundations/concepts/quantum-states-and-bra-ket-notation.md, topics/mathematics-and-quantum-foundations/concepts/quantum-operators-observables-and-expectation-values.md]
next_steps: [topics/calibration-systems/fundamentals/from-gates-to-calibration.md]
related: [topics/error-aware-gates/concepts/single-qubit-dual-rail-control.md]
source_files: [base/Mathematics_and_Quantum_Foundations_Authoritative_Sources.md]
complexity_depth: 5
complexity_prerequisite_count: 2
complexity_score: 4.08
complexity_wavelength_nm: 569
complexity_frequency_thz: 526.9
complexity_color: "#c7ff00"
understanding: 0
---

# Unitary evolution and quantum gates

<!-- study-status:start -->
<div class="study-status" data-complexity="4.08" data-wavelength-nm="569">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#c7ff00;color:#111111;">Complexity 4.08/10 | 569 nm | 526.9 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Unitary Evolution and Quantum Gates"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Quantum States and Bra-Ket Notation](quantum-states-and-bra-ket-notation.md), [Quantum Operators, Observables, and Expectation Values](quantum-operators-observables-and-expectation-values.md)
- **Next steps:** [From Gates to Calibration](../../calibration-systems/fundamentals/from-gates-to-calibration.md)
- **Related:** [Single-Qubit Dual-Rail Control](../../error-aware-gates/concepts/single-qubit-dual-rail-control.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A closed-system quantum gate is represented by a unitary operator. It changes a state reversibly while preserving inner products and normalization.

## Unitary condition

A square matrix $U$ is unitary when

$$U^\dagger U=UU^\dagger=I.$$

Therefore $U^{-1}=U^\dagger$, and

$$\|U|\psi\rangle\|=\||\psi\rangle\|.$$

IBM Quantum Learning identifies unitary matrices as the linear maps that take valid finite state vectors to valid state vectors. [Source record](../../../../base/Mathematics_and_Quantum_Foundations_Authoritative_Sources.md#ibm-quantum-learning-state-vectors-measurement-and-gates).

## Worked examples

The bit-flip gate

$$X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$$

swaps $|0\rangle$ and $|1\rangle$. The phase-flip gate

$$Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$$

leaves $|0\rangle$ unchanged and reverses the sign of the $|1\rangle$ component.

The Hadamard gate maps basis states to phase-sensitive superpositions:

$$H|0\rangle=|+\rangle,\qquad H|1\rangle=|-\rangle.$$

## Abstract gate versus physical action

The unitary is the intended logical transformation. Real hardware approximates that transformation through finite-duration controls, coupling, measurement, and calibration. A gate symbol alone does not specify microwave frequency, pulse shape, channel, uncertainty, or current device condition.

## Common misconceptions

- Unitary does not mean every real implementation is error-free.
- A gate matrix describes intent in a chosen basis, not a complete control waveform.
- Measurement is not generally a unitary gate on the measured system alone.

## Self-check

1. Why does a unitary preserve normalization?
2. What does $Z$ do to relative phase?
3. Which information is missing from an abstract gate matrix before hardware can execute it?

## Sources and status

Source-backed by [IBM Quantum Learning through the dated source portfolio](../../../../base/Mathematics_and_Quantum_Foundations_Authoritative_Sources.md#ibm-quantum-learning-state-vectors-measurement-and-gates). Status: `draft`.

Parent: [Mathematics and quantum foundations](../README.md)

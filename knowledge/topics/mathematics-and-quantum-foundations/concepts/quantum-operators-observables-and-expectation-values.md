---
title: Quantum Operators, Observables, and Expectation Values
kind: concept
status: draft
prerequisites: [topics/mathematics-and-quantum-foundations/fundamentals/eigenvalues-and-eigenvectors.md, topics/mathematics-and-quantum-foundations/concepts/quantum-states-and-bra-ket-notation.md]
next_steps: [topics/mathematics-and-quantum-foundations/concepts/quantum-measurement-and-born-rule.md, topics/mathematics-and-quantum-foundations/concepts/unitary-evolution-and-quantum-gates.md, topics/mathematics-and-quantum-foundations/concepts/oscillators-quantization-and-number-states.md]
related: [topics/mathematics-and-quantum-foundations/fundamentals/matrices-and-linear-operators.md]
source_files: [knowledge/topics/mathematics-and-quantum-foundations/references.md]
complexity_depth: 4
complexity_prerequisite_count: 2
complexity_score: 3.46
complexity_wavelength_nm: 589
complexity_frequency_thz: 509.0
complexity_color: "#ffec00"
understanding: 0
---

# Quantum operators, observables, and expectation values

<!-- study-status:start -->
<div class="study-status" data-complexity="3.46" data-wavelength-nm="589">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ffec00;color:#111111;">Complexity 3.46/10 | 589 nm | 509.0 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Quantum Operators, Observables, and Expectation Values"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Eigenvalues and Eigenvectors](../fundamentals/eigenvalues-and-eigenvectors.md), [Quantum States and Bra-Ket Notation](quantum-states-and-bra-ket-notation.md)
- **Next steps:** [Quantum Measurement and the Born Rule](quantum-measurement-and-born-rule.md), [Unitary Evolution and Quantum Gates](unitary-evolution-and-quantum-gates.md), [Oscillators, Quantization, and Number States](oscillators-quantization-and-number-states.md)
- **Related:** [Matrices and Linear Operators](../fundamentals/matrices-and-linear-operators.md)

<!-- learning-navigation:end -->

## Plain-language meaning

An operator acts on state vectors. An observable is represented, in this finite introductory setting, by a Hermitian operator: a matrix equal to its conjugate transpose. Its eigenvalues are possible measurement values, and its eigenvectors define states with definite values.

## Why it matters

The distinction between an operation and an observable prevents a common category error. A gate changes a state; an observable organizes possible measurement values. Some matrices can play related mathematical roles, but the experimental questions differ.

## Hermitian structure

For an observable $A$,

$$A=A^\dagger.$$

Hermitian matrices have real eigenvalues and can be described using orthonormal eigenvectors in this finite-dimensional scope.

## Expectation value

For normalized $|\psi\rangle$, the expectation of $A$ is

$$\langle A\rangle_\psi=\langle\psi|A|\psi\rangle.$$

It is the probability-weighted mean over many identically prepared measurements, not generally the outcome of one trial.

## Worked example

Let

$$Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad |\psi\rangle=\sqrt{0.75}|0\rangle+\sqrt{0.25}|1\rangle.$$

Then

$$\langle Z\rangle=0.75(1)+0.25(-1)=0.5.$$

One measurement returns $+1$ or $-1$, never $0.5$. The value $0.5$ summarizes the distribution.

## Source boundary

MIT's 8.04 and 8.05 course collections explicitly cover expectation values, operators, eigenstates, bras, kets, and observables. [public claim map](../references.md#claim-map).

This page stays finite-dimensional and does not claim that every physically relevant operator is a small bounded matrix.

## Self-check

1. What does Hermitian mean?
2. How do observable eigenvalues relate to outcomes?
3. Why can an expectation value differ from every single-shot outcome?

## Sources and status

Source-backed by [public claim map](../references.md#claim-map). Status: `draft`.

Parent: [Mathematics and quantum foundations](../README.md)

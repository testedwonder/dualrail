---
title: Quantum States and Bra-Ket Notation
kind: concept
status: draft
prerequisites: [topics/mathematics-and-quantum-foundations/fundamentals/vectors-bases-and-inner-products.md]
next_steps: [topics/mathematics-and-quantum-foundations/concepts/quantum-operators-observables-and-expectation-values.md, topics/mathematics-and-quantum-foundations/concepts/unitary-evolution-and-quantum-gates.md]
related: [topics/dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md]
source_files: [base/Mathematics_and_Quantum_Foundations_Authoritative_Sources.md]
complexity_depth: 2
complexity_prerequisite_count: 1
complexity_score: 1.73
complexity_wavelength_nm: 645
complexity_frequency_thz: 464.8
complexity_color: "#ff7500"
understanding: 0
---

# Quantum states and bra-ket notation

<!-- study-status:start -->
<div class="study-status" data-complexity="1.73" data-wavelength-nm="645">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ff7500;color:#ffffff;">Complexity 1.73/10 | 645 nm | 464.8 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Quantum States and Bra-Ket Notation"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Vectors, Bases, and Inner Products](../fundamentals/vectors-bases-and-inner-products.md)
- **Next steps:** [Quantum Operators, Observables, and Expectation Values](quantum-operators-observables-and-expectation-values.md), [Unitary Evolution and Quantum Gates](unitary-evolution-and-quantum-gates.md)
- **Related:** [Quantum States and Fock Notation](../../dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md)

<!-- learning-navigation:end -->

## Plain-language meaning

For a finite system, a pure quantum state is represented by a unit vector with complex coordinates. A ket $|\psi\rangle$ denotes the column vector; its bra $\langle\psi|$ is the conjugate-transposed row vector.

## Why it matters

This notation separates the state from whichever basis is used to write its coordinates. It also makes amplitudes, inner products, gates, and measurements compact enough to follow through the rest of the tree.

## State-vector conditions

In a basis $\{|k\rangle\}$,

$$|\psi\rangle=\sum_k \alpha_k|k\rangle,$$

where the amplitudes $\alpha_k$ are complex and

$$\langle\psi|\psi\rangle=\sum_k|\alpha_k|^2=1.$$

IBM Quantum Learning states these two conditions directly for finite state vectors. [Source record](../../../../base/Mathematics_and_Quantum_Foundations_Authoritative_Sources.md#ibm-quantum-learning-state-vectors-measurement-and-gates).

## Worked example

The vector

$$|\psi\rangle=\frac{1}{\sqrt5}|0\rangle+\frac{2i}{\sqrt5}|1\rangle$$

is normalized because $1/5+4/5=1$. Its bra is

$$\langle\psi|=\frac{1}{\sqrt5}\langle0|-\frac{2i}{\sqrt5}\langle1|.$$

## Global and relative phase

Multiplying the entire state by $e^{i\phi}$ leaves all inner-product magnitudes unchanged. A phase difference between components is relative and can affect later interference. The states $|+\rangle$ and $|-\rangle$ have the same standard-basis probabilities but respond differently to a Hadamard gate.

## Common misconceptions

- A superposition is one state vector, not a claim that a hidden classical value was already selected.
- Amplitudes are not probabilities; their absolute squares produce probabilities in a chosen measurement.
- A basis label inside a ket is not an ordinary numeric value.

## Self-check

1. Is $(1,1)^T$ normalized as written?
2. How is $\langle\psi|$ obtained from $|\psi\rangle$?
3. Why can relative phase matter when one basis measurement cannot see it?

## Sources and status

Source-backed by [IBM Quantum Learning through the dated source portfolio](../../../../base/Mathematics_and_Quantum_Foundations_Authoritative_Sources.md#ibm-quantum-learning-state-vectors-measurement-and-gates). Status: `draft`.

Parent: [Mathematics and quantum foundations](../README.md)

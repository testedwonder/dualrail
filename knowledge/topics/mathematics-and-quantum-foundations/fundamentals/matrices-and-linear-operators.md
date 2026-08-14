---
title: Matrices and Linear Operators
kind: definition
status: draft
prerequisites: [topics/mathematics-and-quantum-foundations/fundamentals/vectors-bases-and-inner-products.md]
next_steps: [topics/mathematics-and-quantum-foundations/fundamentals/eigenvalues-and-eigenvectors.md]
related: [topics/mathematics-and-quantum-foundations/concepts/unitary-evolution-and-quantum-gates.md]
source_files: [base/Mathematics_and_Quantum_Foundations_Authoritative_Sources.md]
complexity_depth: 2
complexity_prerequisite_count: 1
complexity_score: 1.73
complexity_wavelength_nm: 645
complexity_frequency_thz: 464.8
complexity_color: "#ff7500"
understanding: 0
---

# Matrices and linear operators

<!-- study-status:start -->
<div class="study-status" data-complexity="1.73" data-wavelength-nm="645">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ff7500;color:#ffffff;">Complexity 1.73/10 | 645 nm | 464.8 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Matrices and Linear Operators"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Vectors, Bases, and Inner Products](vectors-bases-and-inner-products.md)
- **Next steps:** [Eigenvalues and Eigenvectors](eigenvalues-and-eigenvectors.md)
- **Related:** [Unitary Evolution and Quantum Gates](../concepts/unitary-evolution-and-quantum-gates.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A linear operator maps vectors to vectors while respecting addition and scaling. Once input and output bases are chosen, a matrix is the table of numbers that performs that map.

## Why it matters

Quantum gates and observables are operators. Matrix multiplication lets us predict how a gate changes amplitudes and how several operations compose.

## Linearity

An operator $A$ is linear when

$$A(\alpha u+\beta v)=\alpha Au+\beta Av.$$

MIT's linear-transformation session describes matrix-vector multiplication as turning an input vector into an output vector and matrices as representations of linear transformations. [Source record](../../../../base/Mathematics_and_Quantum_Foundations_Authoritative_Sources.md#mit-opencourseware-matrices-and-linear-transformations).

## Read a matrix by columns

The $j$th column of a matrix is the output produced by the $j$th basis vector. For

$$X=\begin{pmatrix}0&1\\1&0\end{pmatrix},$$

the first column says $Xe_1=e_2$, and the second says $Xe_2=e_1$. For a general vector $(a,b)^T$,

$$X\begin{pmatrix}a\\b\end{pmatrix}=\begin{pmatrix}b\\a\end{pmatrix}.$$

## Composition and order

If $A$ acts first and $B$ acts second, the combined matrix is $BA$. Matrix order matters: in general, $AB\ne BA$.

## Common misconceptions

- A matrix is basis-dependent; the underlying operator is the map.
- Multiplication order follows action from right to left.
- Not every matrix preserves length. Quantum state evolution requires the stronger unitary condition.

## Self-check

1. What does each matrix column tell you?
2. If $A$ acts before $B$, which product represents the composition?
3. Which property makes a map linear?

## Sources and status

Source-backed by [MIT OpenCourseWare through the dated source portfolio](../../../../base/Mathematics_and_Quantum_Foundations_Authoritative_Sources.md#mit-opencourseware-matrices-and-linear-transformations). Status: `draft`.

Parent: [Mathematics and quantum foundations](../README.md)

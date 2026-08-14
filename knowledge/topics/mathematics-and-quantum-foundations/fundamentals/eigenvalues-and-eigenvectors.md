---
title: Eigenvalues and Eigenvectors
kind: definition
status: draft
prerequisites: [topics/mathematics-and-quantum-foundations/fundamentals/matrices-and-linear-operators.md]
next_steps: [topics/mathematics-and-quantum-foundations/concepts/quantum-operators-observables-and-expectation-values.md]
related: [topics/mathematics-and-quantum-foundations/fundamentals/vectors-bases-and-inner-products.md]
source_files: [knowledge/topics/mathematics-and-quantum-foundations/references.md]
exercise_id: matrix-eigenvector
complexity_depth: 3
complexity_prerequisite_count: 1
complexity_score: 2.35
complexity_wavelength_nm: 625
complexity_frequency_thz: 479.7
complexity_color: "#ff9f00"
understanding: 0
---

# Eigenvalues and eigenvectors

<!-- study-status:start -->
<div class="study-status" data-complexity="2.35" data-wavelength-nm="625">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ff9f00;color:#111111;">Complexity 2.35/10 | 625 nm | 479.7 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Eigenvalues and Eigenvectors"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Matrices and Linear Operators](matrices-and-linear-operators.md)
- **Next steps:** [Quantum Operators, Observables, and Expectation Values](../concepts/quantum-operators-observables-and-expectation-values.md)
- **Related:** [Vectors, Bases, and Inner Products](vectors-bases-and-inner-products.md)

<!-- learning-navigation:end -->

## Plain-language meaning

An eigenvector is a nonzero direction that an operator does not turn into a different direction. The operator may stretch, shrink, or reverse it. The associated eigenvalue records that scale factor.

## Precise definition

For a matrix $A$, a nonzero vector $v$ is an eigenvector with eigenvalue $\lambda$ when

$$Av=\lambda v.$$

The zero vector is excluded because it would satisfy the equation for every $\lambda$ without identifying a direction.

## Why it matters

For a quantum observable, eigenvectors identify states with definite outcomes and eigenvalues identify the possible reported values. For dynamics, energy eigenstates acquire controlled phase evolution.

## Worked examples

For

$$A=\begin{pmatrix}2&0\\0&-1\end{pmatrix},$$

$e_1=(1,0)^T$ has eigenvalue $2$, and $e_2=(0,1)^T$ has eigenvalue $-1$.

The vector $(1,1)^T$ is not an eigenvector because $A(1,1)^T=(2,-1)^T$, which is not one scalar multiple of $(1,1)^T$.

## How to check a candidate

1. Compute $Av$.
2. Ask whether one scalar multiplies every component of $v$ to produce $Av$.
3. If yes, that scalar is $\lambda$; if no, the candidate is not an eigenvector.

## Common misconceptions

- Eigenvectors need not be coordinate-axis vectors.
- An eigenvalue is a number, not a vector.
- A repeated eigenvalue can correspond to more than one independent eigenvector.

## Self-check

1. Why is the zero vector excluded?
2. Is $(1,1)^T$ an eigenvector of the identity matrix?
3. What physical role will observable eigenvalues play?

## Sources and status

Source-backed by [public claim map](../references.md#claim-map). Status: `draft`; the embedded explorer uses deterministic two-dimensional examples.

Parent: [Mathematics and quantum foundations](../README.md)

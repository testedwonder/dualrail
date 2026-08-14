---
title: Vectors, Bases, and Inner Products
kind: definition
status: draft
prerequisites: [topics/mathematics-and-quantum-foundations/fundamentals/complex-numbers-and-phase.md]
next_steps: [topics/mathematics-and-quantum-foundations/fundamentals/matrices-and-linear-operators.md, topics/mathematics-and-quantum-foundations/concepts/quantum-states-and-bra-ket-notation.md]
related: [topics/mathematics-and-quantum-foundations/fundamentals/eigenvalues-and-eigenvectors.md]
source_files: [knowledge/topics/mathematics-and-quantum-foundations/references.md]
complexity_depth: 1
complexity_prerequisite_count: 1
complexity_score: 1.12
complexity_wavelength_nm: 664
complexity_frequency_thz: 451.5
complexity_color: "#ff4c00"
understanding: 0
---

# Vectors, bases, and inner products

<!-- study-status:start -->
<div class="study-status" data-complexity="1.12" data-wavelength-nm="664">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ff4c00;color:#ffffff;">Complexity 1.12/10 | 664 nm | 451.5 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Vectors, Bases, and Inner Products"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Complex Numbers, Magnitude, and Phase](complex-numbers-and-phase.md)
- **Next steps:** [Matrices and Linear Operators](matrices-and-linear-operators.md), [Quantum States and Bra-Ket Notation](../concepts/quantum-states-and-bra-ket-notation.md)
- **Related:** [Eigenvalues and Eigenvectors](eigenvalues-and-eigenvectors.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A vector is an object that can be added to another vector and scaled by a number. A basis is a minimal coordinate frame: every vector in the space can be written as one combination of the basis vectors. An inner product compares two vectors and supplies length and orthogonality.

## Why it matters

A quantum state is represented by a unit vector. Ket labels such as $|0\rangle$ and $|1\rangle$ name basis vectors, while amplitudes are coordinates in that chosen basis.

## Coordinates are not the vector itself

In the standard two-dimensional basis,

$$v=3e_1+4e_2=\begin{pmatrix}3\\4\end{pmatrix}.$$

Changing basis changes the coordinate column but not the abstract vector. MIT describes a basis as a minimal set whose combinations produce every vector in the space. [public claim map](../references.md#claim-map).

## Inner product and norm

For complex vectors, conjugate the first vector:

$$\langle u,v\rangle=u^\dagger v=\sum_k u_k^*v_k.$$

The norm is

$$\|v\|=\sqrt{\langle v,v\rangle}.$$

Two nonzero vectors are orthogonal when their inner product is zero. They are orthonormal when they are orthogonal and each has norm one.

## Worked example

Let $u=(1,i)^T$ and $v=(i,1)^T$. Then $u^\dagger=(1,-i)$ and

$$\langle u,v\rangle=1(i)+(-i)(1)=0.$$

The vectors are orthogonal. Their norms are both $\sqrt{2}$, so dividing each by $\sqrt{2}$ makes an orthonormal pair.

## Common misconceptions

- A coordinate list is meaningful only after choosing a basis.
- For complex vectors, transpose alone is not enough; the bra uses conjugate transpose.
- Orthogonal does not automatically mean normalized.

## Self-check

1. What does a basis let you do?
2. Why does a complex inner product use conjugation?
3. How do you turn a nonzero vector into a unit vector?

## Sources and status

Source-backed by [public claim map](../references.md#claim-map) and IBM's inner-product course introduction. Status: `draft`.

Parent: [Mathematics and quantum foundations](../README.md)

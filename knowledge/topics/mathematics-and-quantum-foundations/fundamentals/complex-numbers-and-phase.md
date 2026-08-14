---
title: Complex Numbers, Magnitude, and Phase
kind: definition
status: draft
prerequisites: []
next_steps: [topics/mathematics-and-quantum-foundations/fundamentals/vectors-bases-and-inner-products.md]
related: [topics/mathematics-and-quantum-foundations/concepts/quantum-states-and-bra-ket-notation.md]
source_files: [base/Mathematics_and_Quantum_Foundations_Authoritative_Sources.md]
exercise_id: complex-phase
complexity_depth: 0
complexity_prerequisite_count: 0
complexity_score: 0.0
complexity_wavelength_nm: 700
complexity_frequency_thz: 428.3
complexity_color: "#ff0000"
understanding: 0
---

# Complex numbers, magnitude, and phase

<!-- study-status:start -->
<div class="study-status" data-complexity="0.0" data-wavelength-nm="700">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ff0000;color:#ffffff;">Complexity 0.0/10 | 700 nm | 428.3 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Complex Numbers, Magnitude, and Phase"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** None
- **Next steps:** [Vectors, Bases, and Inner Products](vectors-bases-and-inner-products.md)
- **Related:** [Quantum States and Bra-Ket Notation](../concepts/quantum-states-and-bra-ket-notation.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A complex number combines two real components. Written $z=a+bi$, the number $a$ is the real component, $b$ is the imaginary component, and $i^2=-1$. The same number can be pictured as the point $(a,b)$ or as an arrow from the origin.

## Why it matters

Quantum amplitudes are complex numbers. Their magnitudes determine probabilities, while relative phases can change what later gates and measurements do. Treating an amplitude as only a probability discards information.

## Step by step

1. Plot $a+bi$ at $(a,b)$ on the complex plane.
2. Its magnitude is the arrow length:

   $$|z|=\sqrt{a^2+b^2}.$$

3. Its phase is the direction angle $\theta=\operatorname{atan2}(b,a)$.
4. Rectangular and polar forms describe the same point:

   $$a+bi=r(\cos\theta+i\sin\theta)=re^{i\theta}.$$

5. The conjugate $z^*=a-bi$ reflects the point across the real axis, and $zz^*=|z|^2$.

**Source-backed fact:** OpenStax defines standard form, the complex plane, arithmetic, and conjugation. [Source record](../../../../base/Mathematics_and_Quantum_Foundations_Authoritative_Sources.md#openstax-complex-numbers).

**Explanation:** Magnitude and phase follow from ordinary plane geometry. The interactive explorer displays both descriptions together.

## Worked example

For $z=3+4i$:

$$|z|=\sqrt{3^2+4^2}=5,$$

and $\theta\approx53.1^\circ$. Its conjugate is $3-4i$, and $(3+4i)(3-4i)=25$.

## Common misconception

Multiplying every amplitude in a quantum state by the same phase does not change standard measurement probabilities. Changing one component's phase relative to another can change later interference.

## Self-check

1. What point represents $-2+3i$?
2. Why is $|1+i|^2=2$ rather than $1$?
3. Which operation changes $a+bi$ into $a-bi$?

## Sources and status

Source-backed by [OpenStax through the dated source portfolio](../../../../base/Mathematics_and_Quantum_Foundations_Authoritative_Sources.md#openstax-complex-numbers). Status: `draft`; the formulas and interaction are locally checked, while the page remains a focused synthesis.

Parent: [Mathematics and quantum foundations](../README.md)

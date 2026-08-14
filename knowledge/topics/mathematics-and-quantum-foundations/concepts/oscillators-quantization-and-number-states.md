---
title: Oscillators, Quantization, and Number States
kind: concept
status: draft
prerequisites: [topics/mathematics-and-quantum-foundations/concepts/quantum-operators-observables-and-expectation-values.md]
next_steps: [topics/dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md]
related: [topics/circuit-qed/concepts/microwave-cavity.md]
source_files: [knowledge/topics/mathematics-and-quantum-foundations/references.md]
complexity_depth: 5
complexity_prerequisite_count: 1
complexity_score: 3.58
complexity_wavelength_nm: 585
complexity_frequency_thz: 512.5
complexity_color: "#fff400"
understanding: 0
---

# Oscillators, quantization, and number states

<!-- study-status:start -->
<div class="study-status" data-complexity="3.58" data-wavelength-nm="585">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#fff400;color:#111111;">Complexity 3.58/10 | 585 nm | 512.5 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Oscillators, Quantization, and Number States"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Quantum Operators, Observables, and Expectation Values](quantum-operators-observables-and-expectation-values.md)
- **Next steps:** [Quantum States and Fock Notation](../../dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md)
- **Related:** [Microwave Cavity](../../circuit-qed/concepts/microwave-cavity.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A harmonic oscillator is a system pulled back toward equilibrium. In quantum mechanics its energy is not arbitrary: ideal oscillator energy eigenstates come in discrete levels labeled by a nonnegative integer $n$.

## Why it matters

A microwave cavity mode is modeled as an oscillator. Fock notation such as $|0\rangle$, $|1\rangle$, and $|2\rangle$ labels number states with zero, one, or two excitations in that mode.

## Energy and number

For an ideal oscillator of angular frequency $\omega$,

$$E_n=\hbar\omega\left(n+\frac12\right),\qquad n=0,1,2,\ldots$$

The number operator $N$ has

$$N|n\rangle=n|n\rangle.$$

Thus $|n\rangle$ is an eigenstate and $n$ is its excitation count. The nonzero ground energy does not mean the ground state contains one excitation; the labels and energy offset answer different questions.

## Ladder operators

Creation and annihilation operators move between adjacent number states, up to normalization factors:

$$a^\dagger|n\rangle=\sqrt{n+1}|n+1\rangle,$$

$$a|n\rangle=\sqrt n|n-1\rangle.$$

For $n=0$, annihilation gives zero rather than a state with negative occupation.

## Source boundary

MIT 8.04 provides dedicated undergraduate notes on energy eigenstates and the quantum harmonic oscillator. [public claim map](../references.md#claim-map).

This page uses the ideal oscillator to establish number-state notation. Real cavities have loss, coupling, drive, and imperfections covered elsewhere.

## Common misconceptions

- $|0\rangle$ is the vacuum number state, not automatically a logical qubit zero.
- Number states are energy eigenstates of the ideal oscillator, not classical waves with a known phase.
- Two modes require two occupation labels, which leads to $|n_A,n_B\rangle$.

## Self-check

1. What does the integer in $|n\rangle$ count?
2. Why is there no $|-1\rangle$ number state?
3. How will two oscillator modes change the notation?

## Sources and status

Source-backed by [public claim map](../references.md#claim-map). Status: `draft`.

Parent: [Mathematics and quantum foundations](../README.md)

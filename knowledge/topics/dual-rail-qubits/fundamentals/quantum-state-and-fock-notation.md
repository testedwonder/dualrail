---
title: Quantum States and Fock Notation
kind: definition
status: draft
prerequisites: [topics/mathematics-and-quantum-foundations/concepts/oscillators-quantization-and-number-states.md, topics/mathematics-and-quantum-foundations/concepts/quantum-measurement-and-born-rule.md]
next_steps: [topics/dual-rail-qubits/concepts/code-space.md, topics/circuit-qed/concepts/microwave-cavity.md]
related: [topics/dual-rail-qubits/concepts/dual-rail-encoding.md, topics/error-aware-gates/concepts/quantum-state-tomography.md]
source_files: [base/DWave_Application_and_Study_Materials.md, base/Mathematics_and_Quantum_Foundations_Authoritative_Sources.md]
complexity_depth: 6
complexity_prerequisite_count: 2
complexity_score: 4.69
complexity_wavelength_nm: 550
complexity_frequency_thz: 545.1
complexity_color: "#66ff00"
understanding: 0
---

# Quantum states and Fock notation

<!-- study-status:start -->
<div class="study-status" data-complexity="4.69" data-wavelength-nm="550">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#66ff00;color:#111111;">Complexity 4.69/10 | 550 nm | 545.1 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Quantum States and Fock Notation"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Oscillators, Quantization, and Number States](../../mathematics-and-quantum-foundations/concepts/oscillators-quantization-and-number-states.md), [Quantum Measurement and the Born Rule](../../mathematics-and-quantum-foundations/concepts/quantum-measurement-and-born-rule.md)
- **Next steps:** [Code Space](../concepts/code-space.md), [Microwave Cavity](../../circuit-qed/concepts/microwave-cavity.md)
- **Related:** [Dual-Rail Encoding](../concepts/dual-rail-encoding.md), [Quantum State Tomography](../../error-aware-gates/concepts/quantum-state-tomography.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A quantum state records the alternatives a quantum system can occupy and their relative amplitudes and phases. A **Fock state** records a definite excitation count. For two modes, `|nA,nB>` says how many excitations occupy mode A and mode B.

## Why it matters

Dual rail uses the two one-excitation states `|1,0>` and `|0,1>`. Reading the notation correctly is the first prerequisite for seeing why `|0,0>` signals photon loss.

## Prerequisites now made explicit

Before this page, understand [oscillator number states](../../mathematics-and-quantum-foundations/concepts/oscillators-quantization-and-number-states.md) and the [Born rule](../../mathematics-and-quantum-foundations/concepts/quantum-measurement-and-born-rule.md). Those pages explain what an excitation count means, why amplitudes are complex, and how a chosen measurement turns amplitudes into outcome probabilities.

## Step by step

1. `|1,0>` means one excitation in A and none in B.
2. `|0,1>` means none in A and one in B.
3. A coherent state in the dual-rail code space is written `alpha|1,0> + beta|0,1>`.
4. `alpha` and `beta` carry amplitude and relative-phase information; this is more than a classical choice between two locations.

## Precise boundary

The local dual-rail source supports the two-mode encoding and loss interpretation. The separate [authoritative foundations portfolio](../../../../base/Mathematics_and_Quantum_Foundations_Authoritative_Sources.md) supports the prerequisite treatment of states, measurement, and number states. This page applies those foundations; it does not attempt infinite-dimensional Hilbert-space rigor.

## Example and non-example

**Example:** `|1,0>` is a two-mode Fock state with one total excitation.

**Non-example:** Treating `alpha|1,0> + beta|0,1>` as an ordinary unknown bit. The relative phase can affect later interference and control.

## Self-check

1. What does each number in `|0,1>` count?
2. How many total excitations are in either logical basis state?
3. Why is a coherent superposition not merely a hidden classical choice?

## Sources and status

Source-backed by the [dual-rail guide, source pages 5 and 20](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide), with prerequisites supported by the [dated foundations portfolio](../../../../base/Mathematics_and_Quantum_Foundations_Authoritative_Sources.md). Status: `draft`.

Parent: [Dual-rail qubits](../README.md)

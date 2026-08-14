---
title: Quantum States and Fock Notation
kind: definition
status: draft
prerequisites: []
next_steps: [topics/dual-rail-qubits/concepts/code-space.md, topics/circuit-qed/concepts/microwave-cavity.md]
related: [topics/dual-rail-qubits/concepts/dual-rail-encoding.md, topics/error-aware-gates/concepts/quantum-state-tomography.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 0
complexity_prerequisite_count: 0
complexity_score: 0.0
complexity_wavelength_nm: 700
complexity_frequency_thz: 428.3
complexity_color: "#ff0000"
understanding: 0
---

# Quantum states and Fock notation

<!-- study-status:start -->
<div class="study-status" data-complexity="0.0" data-wavelength-nm="700">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ff0000;color:#ffffff;">Complexity 0.0/10 | 700 nm | 428.3 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Quantum States and Fock Notation"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** None
- **Next steps:** [Code Space](../concepts/code-space.md), [Microwave Cavity](../../circuit-qed/concepts/microwave-cavity.md)
- **Related:** [Dual-Rail Encoding](../concepts/dual-rail-encoding.md), [Quantum State Tomography](../../error-aware-gates/concepts/quantum-state-tomography.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A quantum state records the alternatives a quantum system can occupy and their relative amplitudes and phases. A **Fock state** records a definite excitation count. For two modes, `|nA,nB>` says how many excitations occupy mode A and mode B.

## Why it matters

Dual rail uses the two one-excitation states `|1,0>` and `|0,1>`. Reading the notation correctly is the first prerequisite for seeing why `|0,0>` signals photon loss.

## Step by step

1. `|1,0>` means one excitation in A and none in B.
2. `|0,1>` means none in A and one in B.
3. A coherent state in the dual-rail code space is written `alpha|1,0> + beta|0,1>`.
4. `alpha` and `beta` carry amplitude and relative-phase information; this is more than a classical choice between two locations.

## Precise boundary

The local source introduces this notation for the dual-rail encoding. It does not provide a complete course on Hilbert spaces, normalization, or measurement theory. Those deeper foundations require an additional authoritative source before expansion.

## Example and non-example

**Example:** `|1,0>` is a two-mode Fock state with one total excitation.

**Non-example:** Treating `alpha|1,0> + beta|0,1>` as an ordinary unknown bit. The relative phase can affect later interference and control.

## Self-check

1. What does each number in `|0,1>` count?
2. How many total excitations are in either logical basis state?
3. Why is a coherent superposition not merely a hidden classical choice?

## Sources and status

Source-backed by the [dual-rail guide, source pages 5 and 20](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide). Status: `draft`.

Parent: [Dual-rail qubits](../README.md)

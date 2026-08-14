---
title: Microwave Cavity
kind: definition
status: draft
prerequisites: [topics/circuit-qed/concepts/superconducting-circuit-stack.md]
next_steps: [topics/dual-rail-qubits/concepts/dual-rail-encoding.md, topics/circuit-qed/concepts/circuit-qed-and-dispersive-interaction.md]
related: [topics/dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md, topics/circuit-qed/concepts/coherence-times.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 1
complexity_prerequisite_count: 1
complexity_score: 1.64
complexity_wavelength_nm: 648
complexity_frequency_thz: 462.6
complexity_color: "#ff6e00"
understanding: 0
---

# Microwave cavity

<!-- study-status:start -->
<div class="study-status" data-complexity="1.64" data-wavelength-nm="648">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ff6e00;color:#ffffff;">Complexity 1.64/10 | 648 nm | 462.6 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Microwave Cavity"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Superconducting Circuit Stack](superconducting-circuit-stack.md)
- **Next steps:** [Dual-Rail Encoding](../../dual-rail-qubits/concepts/dual-rail-encoding.md), [Circuit QED and Dispersive Interaction](circuit-qed-and-dispersive-interaction.md)
- **Related:** [Quantum States and Fock Notation](../../dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md), [Coherence Times](coherence-times.md)

<!-- learning-navigation:end -->

## Plain-language meaning

A microwave cavity is a resonant structure that stores quantized microwave excitations. In the source architecture, pairs of long-lived cavity modes store the two rails of one logical qubit.

## Properties software and experiments track

- Resonance frequency
- Photon lifetime
- Phase coherence
- Coupling to transmons, other cavities, and readout elements
- Dispersive and cross-Kerr shifts

## Why it matters

The cavity's relatively long lifetime makes it useful for storage, while its known dominant photon-loss channel makes vacuum detection informative. Those benefits depend on characterization and do not make the cavity noiseless.

## Example and non-example

**Example:** A cavity mode in Fock state `|1>` contains one microwave photon excitation.

**Non-example:** A physical box that deterministically stores a classical bit. The logical information may be a coherent superposition across two cavity modes.

## Self-check

1. Which property identifies a cavity's preferred microwave frequency?
2. Why use two cavities for one dual-rail qubit?
3. Which cavity failure becomes a detectable vacuum event?

## Sources and status

Source-backed by the [device-physics stack, source page 6](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide) and repeated-CZ source page 5. Status: `draft`.

Parent: [Circuit QED and control](../README.md)

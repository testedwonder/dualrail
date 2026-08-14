---
title: Dual-Rail Encoding
kind: concept
status: draft
prerequisites: [topics/dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md, topics/dual-rail-qubits/concepts/code-space.md, topics/circuit-qed/concepts/microwave-cavity.md]
next_steps: [topics/dual-rail-qubits/concepts/photon-loss-and-vacuum.md, topics/error-aware-gates/concepts/single-qubit-dual-rail-control.md]
related: [topics/dual-rail-qubits/concepts/leakage-and-erasure.md, topics/circuit-qed/concepts/beamsplitter-and-parametric-drive.md]
source_files: [knowledge/topics/dual-rail-qubits/references.md]
complexity_depth: 8
complexity_prerequisite_count: 3
complexity_score: 6.42
complexity_wavelength_nm: 495
complexity_frequency_thz: 605.6
complexity_color: "#00ffdf"
understanding: 0
---

# Dual-rail encoding

<!-- study-status:start -->
<div class="study-status" data-complexity="6.42" data-wavelength-nm="495">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#00ffdf;color:#111111;">Complexity 6.42/10 | 495 nm | 605.6 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Dual-Rail Encoding"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Quantum States and Fock Notation](../fundamentals/quantum-state-and-fock-notation.md), [Code Space](code-space.md), [Microwave Cavity](../../circuit-qed/concepts/microwave-cavity.md)
- **Next steps:** [Photon Loss and Vacuum](photon-loss-and-vacuum.md), [Single-Qubit Dual-Rail Control](../../error-aware-gates/concepts/single-qubit-dual-rail-control.md)
- **Related:** [Leakage and Erasure](leakage-and-erasure.md), [Beamsplitter Interaction and Parametric Drive](../../circuit-qed/concepts/beamsplitter-and-parametric-drive.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Dual-rail encoding stores one logical qubit in which of two modes holds one excitation, together with the coherent phase relationship between those possibilities.

## Why it matters

The encoding turns the dominant cavity-loss event into a move from the one-excitation code space to vacuum. When that move is detected and localized, the higher-level system receives an erasure instead of an unknown logical Pauli error.

## Encoding

```text
|0L> = |1,0>
|1L> = |0,1>
|psiL> = alpha|1,0> + beta|0,1>
```

The information is not simply “which cavity.” It also includes the relative phase and amplitudes of the coherent superposition.

## Relationships

- [Beamsplitter and parametric drive](../../circuit-qed/concepts/beamsplitter-and-parametric-drive.md) explain how an excitation can rotate between rails.
- [Photon loss and vacuum](photon-loss-and-vacuum.md) explain the dominant detectable transition.
- [Error hierarchy](pauli-errors-and-error-hierarchy.md) explains the residual errors that remain.

## Failure modes

- Treating the two cavities as two independent logical qubits.
- Treating vacuum as a valid logical state.
- Claiming the architecture removes errors rather than changing their structure.

## Self-check

1. How many logical qubits do two rails encode here?
2. Where is phase information stored?
3. What architectural property makes single-photon loss visible?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map) and its cited Teoh et al. foundation. Status: `draft`.

Parent: [Dual-rail qubits](../README.md)

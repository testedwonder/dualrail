---
title: Leakage Propagation
kind: concept
status: draft
prerequisites: [topics/error-aware-gates/algorithms/swap-wait-swap-cz.md, topics/dual-rail-qubits/concepts/leakage-and-erasure.md, topics/error-aware-gates/concepts/control-target-asymmetry.md]
next_steps: [topics/quantum-control-software/concepts/outcome-semantics.md, topics/quantum-control-software/concepts/test-portfolio.md]
related: [topics/dual-rail-qubits/examples/loss-to-vacuum.md, topics/error-aware-gates/concepts/no-jump-backaction.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 13
complexity_prerequisite_count: 3
complexity_score: 9.5
complexity_wavelength_nm: 396
complexity_frequency_thz: 757.1
complexity_color: "#6e00ff"
understanding: 0
---

# Leakage propagation

<!-- study-status:start -->
<div class="study-status" data-complexity="9.5" data-wavelength-nm="396">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#6e00ff;color:#ffffff;">Complexity 9.5/10 | 396 nm | 757.1 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Leakage Propagation"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Swap-Wait-Swap Controlled-Z](../algorithms/swap-wait-swap-cz.md), [Leakage and Erasure](../../dual-rail-qubits/concepts/leakage-and-erasure.md), [Control-Target Error Asymmetry](control-target-asymmetry.md)
- **Next steps:** [Outcome Semantics](../../quantum-control-software/concepts/outcome-semantics.md), [Quantum-Control Test Portfolio](../../quantum-control-software/concepts/test-portfolio.md)
- **Related:** [Loss to Vacuum Worked Example](../../dual-rail-qubits/examples/loss-to-vacuum.md), [No-Jump Backaction](no-jump-backaction.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Leakage propagation describes how a state outside the code space changes later operations and whether it spreads additional errors to other qubits.

## SWS behavior in the source

- If vacuum exists before the CZ, the excitation-dependent interaction may remain off, producing an identity-like action on the other qubit.
- If loss occurs during the active conditional phase, the other qubit can receive conditional dephasing.
- Delayed erasure checks therefore require a model of what happened between loss and detection.

## Why it matters

Treating leakage as a local flag only is unsafe if it changes neighboring states before detection. Compiler, simulator, scheduler, and decoder need compatible propagation semantics.

## Failure modes

- Assume every leaked control simply disables the gate with no residual channel.
- Ignore the time of loss within the gate.
- Pauli-twirl away correlations that a decoder needs.
- Detect leakage later but discard the affected gate history.

## Self-check

1. Why does loss time within SWS matter?
2. What can happen to the unleaked qubit?
3. Why must delayed checks preserve intervening gate history?

## Sources and status

Source-backed by the [gate summary, source page 7](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide) and checked SWS preprint Appendix E. Status: `draft`.

Parent: [Error-aware gates](../README.md)

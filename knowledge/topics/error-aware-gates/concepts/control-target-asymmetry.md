---
title: Control-Target Error Asymmetry
kind: concept
status: draft
prerequisites: [topics/error-aware-gates/algorithms/swap-wait-swap-cz.md, topics/circuit-qed/concepts/coherence-times.md, topics/dual-rail-qubits/concepts/pauli-errors-and-error-hierarchy.md]
next_steps: [topics/error-aware-gates/concepts/leakage-propagation.md, topics/quantum-control-software/concepts/outcome-semantics.md]
related: [topics/error-aware-gates/examples/repeated-cz-experiment.md, topics/error-aware-gates/concepts/no-jump-backaction.md]
source_files: [knowledge/topics/error-aware-gates/references.md]
complexity_depth: 12
complexity_prerequisite_count: 3
complexity_score: 8.88
complexity_wavelength_nm: 416
complexity_frequency_thz: 720.7
complexity_color: "#4500ff"
understanding: 0
---

# Control-target error asymmetry

<!-- study-status:start -->
<div class="study-status" data-complexity="8.88" data-wavelength-nm="416">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#4500ff;color:#ffffff;">Complexity 8.88/10 | 416 nm | 720.7 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Control-Target Error Asymmetry"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Swap-Wait-Swap Controlled-Z](../algorithms/swap-wait-swap-cz.md), [Coherence Times](../../circuit-qed/concepts/coherence-times.md), [Pauli Errors and Error Hierarchy](../../dual-rail-qubits/concepts/pauli-errors-and-error-hierarchy.md)
- **Next steps:** [Leakage Propagation](leakage-propagation.md), [Outcome Semantics](../../quantum-control-software/concepts/outcome-semantics.md)
- **Related:** [Repeated-CZ Experiment](../examples/repeated-cz-experiment.md), [No-Jump Backaction](no-jump-backaction.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Control-target asymmetry means a two-qubit gate produces different error rates or channels depending on which qubit takes the control role and which takes the target role.

## Physical cause in the SWS model

The control excitation temporarily occupies the transmon coupler. The target cavities mostly idle. Because the coupler has different coherence from the cavities, the control side experiences more loss and dephasing in the reported device.

## Why software cares

- Scheduling may choose orientation deliberately.
- A noise model must preserve directional categories.
- A decoder or stabilizer circuit may exploit which role carries more error.
- Tests must not average control and target into a symmetric channel by default.

## Non-example

Representing every CZ as one orientation-free depolarizing probability when the measured error channels are directional.

## Self-check

1. Which qubit enters the coupler during SWS?
2. Why can orientation affect scheduling?
3. What information is lost by symmetrizing the model?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map) and checked SWS preprint. Status: `draft`.

Parent: [Error-aware gates](../README.md)

---
title: No-Jump Backaction
kind: concept
status: draft
prerequisites: [topics/error-aware-gates/algorithms/swap-wait-swap-cz.md, topics/circuit-qed/concepts/coherence-times.md, topics/dual-rail-qubits/concepts/detection-correction-and-postselection.md]
next_steps: [topics/error-aware-gates/examples/repeated-cz-experiment.md]
related: [topics/error-aware-gates/concepts/control-target-asymmetry.md, topics/dual-rail-qubits/concepts/photon-loss-and-vacuum.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 12
complexity_prerequisite_count: 3
complexity_score: 8.88
complexity_wavelength_nm: 416
complexity_frequency_thz: 720.7
complexity_color: "#4500ff"
understanding: 0
---

# No-jump backaction

<!-- study-status:start -->
<div class="study-status" data-complexity="8.88" data-wavelength-nm="416">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#4500ff;color:#ffffff;">Complexity 8.88/10 | 416 nm | 720.7 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for No-Jump Backaction"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Swap-Wait-Swap Controlled-Z](../algorithms/swap-wait-swap-cz.md), [Coherence Times](../../circuit-qed/concepts/coherence-times.md), [Detection, Correction, and Postselection](../../dual-rail-qubits/concepts/detection-correction-and-postselection.md)
- **Next steps:** [Repeated-CZ Experiment](../examples/repeated-cz-experiment.md)
- **Related:** [Control-Target Error Asymmetry](control-target-asymmetry.md), [Photon Loss and Vacuum](../../dual-rail-qubits/concepts/photon-loss-and-vacuum.md)

<!-- learning-navigation:end -->

## Plain-language meaning

No-jump backaction is conditional evolution caused by learning that a decay did **not** occur. When different logical components have different loss rates, survival itself carries partial information and can bias the retained state.

## SWS intuition

One control basis component occupies the lossier coupler while another does not. Conditioning on no detected loss makes the less-lossy component relatively more likely, which acts like a weak `Z`-basis measurement and can dephase a superposition.

## Why an echo helps

The checked preprint explains that a midpoint `X` pulse makes each logical component spend equal time in the lossier role. That can cancel this particular survival bias in the repeated-CZ sequence.

## Important conclusion

The long-depth nonlinearity persisted despite the echo used in the experiment. The paper therefore says no-jump backaction does not explain that observed effect.

## Non-example

Assuming “nothing happened” means the state evolved exactly as if loss were impossible.

## Self-check

1. How can absence of a jump carry information?
2. Why does unequal loss create dephasing after postselection?
3. What evidence argues against this mechanism as the long-depth root cause?

## Sources and status

Source-backed by the [dual-rail glossary, source page 20](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide) and checked SWS preprint Appendix F. Status: `draft`.

Parent: [Error-aware gates](../README.md)

---
title: Coherence Times
kind: concept
status: draft
prerequisites: [topics/circuit-qed/concepts/transmons-and-anharmonicity.md, topics/circuit-qed/concepts/microwave-cavity.md]
next_steps: [topics/error-aware-gates/concepts/no-jump-backaction.md, topics/calibration-systems/concepts/stale-parameter-vs-changing-device.md]
related: [topics/dual-rail-qubits/concepts/photon-loss-and-vacuum.md, topics/error-aware-gates/concepts/control-target-asymmetry.md]
source_files: [knowledge/topics/circuit-qed/references.md]
complexity_depth: 2
complexity_prerequisite_count: 2
complexity_score: 2.23
complexity_wavelength_nm: 629
complexity_frequency_thz: 476.6
complexity_color: "#ff9700"
understanding: 0
---

# Coherence times

<!-- study-status:start -->
<div class="study-status" data-complexity="2.23" data-wavelength-nm="629">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ff9700;color:#111111;">Complexity 2.23/10 | 629 nm | 476.6 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Coherence Times"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Transmons and Anharmonicity](transmons-and-anharmonicity.md), [Microwave Cavity](microwave-cavity.md)
- **Next steps:** [No-Jump Backaction](../../error-aware-gates/concepts/no-jump-backaction.md), [Stale Parameter Versus Changing Device](../../calibration-systems/concepts/stale-parameter-vs-changing-device.md)
- **Related:** [Photon Loss and Vacuum](../../dual-rail-qubits/concepts/photon-loss-and-vacuum.md), [Control-Target Error Asymmetry](../../error-aware-gates/concepts/control-target-asymmetry.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Coherence describes how long a quantum system retains the amplitude and phase information needed for controlled evolution.

## Common times in the source

- `T1`: energy-relaxation time; an excitation decays.
- `T2`: total coherence time; phase information is lost through relaxation and dephasing.
- `Tphi`: pure-dephasing time; phase is randomized without energy exchange.

## Why it matters

Gate duration relative to these times helps set loss and phase-error risk. In the reported SWS design, the control excitation temporarily occupies a coupler with shorter coherence than the storage cavities, explaining part of the control-target asymmetry.

## Important limit

`T1` and `T2` are summaries under a measurement protocol and device state. They do not fully specify nonstationary drift, crosstalk, leakage, or every noise spectrum.

## Example and non-example

**Example:** Shorter coupler `T1` raises relaxation risk while the control excitation resides there.

**Non-example:** Treating one `T2` value as a permanent guarantee for all pulses and timescales.

## Self-check

1. Which time describes energy relaxation?
2. Which failure can occur without energy loss?
3. Why must coherence measurements carry timestamps and device state?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map). Status: `draft`.

Parent: [Circuit QED and control](../README.md)

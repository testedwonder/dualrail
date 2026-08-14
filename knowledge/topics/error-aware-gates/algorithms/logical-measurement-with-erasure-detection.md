---
title: Logical Measurement with Erasure Detection
kind: algorithm
status: draft
prerequisites: [topics/dual-rail-qubits/concepts/code-space.md, topics/dual-rail-qubits/concepts/leakage-and-erasure.md, topics/circuit-qed/concepts/readout-chain-and-iq-data.md, topics/error-aware-gates/concepts/spam.md]
next_steps: [topics/quantum-control-software/concepts/outcome-semantics.md, topics/quantum-control-software/concepts/realtime-control-and-error-handling.md]
related: [topics/dual-rail-qubits/concepts/detection-correction-and-postselection.md, topics/error-aware-gates/concepts/quantum-state-tomography.md]
source_files: [knowledge/topics/error-aware-gates/references.md]
complexity_depth: 11
complexity_prerequisite_count: 4
complexity_score: 8.77
complexity_wavelength_nm: 419
complexity_frequency_thz: 715.5
complexity_color: "#3f00ff"
understanding: 0
---

# Logical measurement with erasure detection

<!-- study-status:start -->
<div class="study-status" data-complexity="8.77" data-wavelength-nm="419">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#3f00ff;color:#ffffff;">Complexity 8.77/10 | 419 nm | 715.5 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Logical Measurement with Erasure Detection"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Code Space](../../dual-rail-qubits/concepts/code-space.md), [Leakage and Erasure](../../dual-rail-qubits/concepts/leakage-and-erasure.md), [Readout Chain and IQ Data](../../circuit-qed/concepts/readout-chain-and-iq-data.md), [State-Preparation-and-Measurement Error](../concepts/spam.md)
- **Next steps:** [Outcome Semantics](../../quantum-control-software/concepts/outcome-semantics.md), [Real-Time Control and Error Handling](../../quantum-control-software/concepts/realtime-control-and-error-handling.md)
- **Related:** [Detection, Correction, and Postselection](../../dual-rail-qubits/concepts/detection-correction-and-postselection.md), [Quantum State Tomography](../concepts/quantum-state-tomography.md)

<!-- learning-navigation:end -->

## Problem

Measure a dual-rail logical state while identifying dominant photon-loss events and keeping assignment categories explicit.

## Inputs and outputs

**Inputs:** a prepared rail pair, calibrated readout pulses and timing, a versioned classifier, check protocol, and shot count.

**Outputs:** logical assignment, detected erasure, failed check, or failed assignment, each linked to raw evidence and protocol version.

## Preconditions

- The logical code space and leakage categories are defined.
- Readout and check calibrations are valid.
- Repeated checks have declared consistency rules.
- Raw IQ records and shot order are retained.

## Procedure

1. Run any declared preparation check.
2. Acquire rail-sensitive readout data.
3. Apply the versioned assignment model.
4. Run or interpret integrated erasure checks.
5. Place each shot into one explicit outcome bucket.
6. Report logical errors, detected erasures, assignment failures, and discarded fraction separately.

## Invariants

- A failed assignment is not silently reclassified as physical erasure.
- A valid logical result must remain in the declared code space.
- Changing an outcome rule creates a new analysis version.
- Aggregates remain reproducible from immutable shot records.

## Pseudocode

```text
raw = acquire_readout(shot, calibration_snapshot)
check = evaluate_erasure_check(raw, check_version)
assignment = classify(raw, classifier_version)
return combine_without_collapsing_categories(check, assignment)
```

## Failure modes

- Classifier drift moves shots between buckets.
- Postselection rules change without versioning.
- Repeated checks disagree and software chooses one silently.
- Raw evidence is discarded after aggregation.

## Self-check

1. Which output categories must not be merged?
2. What makes a later reanalysis reproducible?
3. Why is the software part of the measurement model?

## Sources and status

Source-backed by the [public claim map](../references.md#claim-map) and checked arXiv abstract. Status: `draft`; implementation details are intentionally generic.

Parent: [Error-aware gates](../README.md)

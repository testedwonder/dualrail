---
title: Outcome Semantics
kind: concept
status: draft
prerequisites: [topics/error-aware-gates/algorithms/logical-measurement-with-erasure-detection.md, topics/dual-rail-qubits/concepts/pauli-errors-and-error-hierarchy.md]
next_steps: [topics/quantum-control-software/concepts/realtime-control-and-error-handling.md, topics/quantum-control-software/concepts/acquisition-and-provenance.md]
related: [topics/error-aware-gates/concepts/spam.md, topics/dual-rail-qubits/concepts/detection-correction-and-postselection.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
complexity_depth: 12
complexity_prerequisite_count: 2
complexity_score: 8.38
complexity_wavelength_nm: 432
complexity_frequency_thz: 694.0
complexity_color: "#2500ff"
understanding: 0
---

# Outcome semantics

<!-- study-status:start -->
<div class="study-status" data-complexity="8.38" data-wavelength-nm="432">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#2500ff;color:#ffffff;">Complexity 8.38/10 | 432 nm | 694.0 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Outcome Semantics"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Logical Measurement with Erasure Detection](../../error-aware-gates/algorithms/logical-measurement-with-erasure-detection.md), [Pauli Errors and Error Hierarchy](../../dual-rail-qubits/concepts/pauli-errors-and-error-hierarchy.md)
- **Next steps:** [Real-Time Control and Error Handling](realtime-control-and-error-handling.md), [Acquisition and Provenance](acquisition-and-provenance.md)
- **Related:** [State-Preparation-and-Measurement Error](../../error-aware-gates/concepts/spam.md), [Detection, Correction, and Postselection](../../dual-rail-qubits/concepts/detection-correction-and-postselection.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Outcome semantics define what each result category claims about the physical experiment and how that category may be used.

## Required distinctions

- Valid logical result
- Detected erasure
- Preparation-check failure
- Measurement-check failure
- Assignment failure
- Execution or service failure
- Residual Pauli or structured error estimate

## Why it matters

Moving shots between categories changes erasure rates, postselected fractions, and scientific conclusions. The schema and classification rules are therefore part of the measurement model.

## Typed reference model

```text
valid(logical_value, measurement_id)
erasure(location, check_time, check_id)
assignment_failure(reason, raw_record_id)
execution_failure(stage, trace_id)
```

This is an explanatory model, not a D-Wave API.

## Failure modes

- Represent erasure as `null` logical value.
- Merge assignment failure with physical erasure.
- Drop control-target orientation from a gate error.
- Change aggregation rules without an analysis version.

## Self-check

1. Why is assignment failure not automatically erasure?
2. Which category can drive a decoder?
3. How can a schema change alter a paper result?

## Sources and status

Source-backed by the [measurement brief and public EDH description, source pages 9 and 11](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide). Status: `draft`; the type model is explanatory.

Parent: [Quantum-control software](../README.md)

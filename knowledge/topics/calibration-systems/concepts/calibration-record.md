---
title: Calibration Record
kind: concept
status: draft
prerequisites: [topics/calibration-systems/fundamentals/from-gates-to-calibration.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
---

# Calibration record

Parent: [Calibration systems](../README.md)

Prerequisite: [From gates to calibration](../fundamentals/from-gates-to-calibration.md)

Next: [Calibration validity](calibration-validity.md)

## Plain-language meaning

A calibration record is a measured setting plus the context needed to decide what it means, where it came from, and whether it is still safe to use.

The bare value answers “what number did the fit return?” The record must also answer “for which device, under which assumptions, based on what evidence, and with what confidence?”

## Why it matters

Without context, two values can look interchangeable even when they came from different devices, software versions, time periods, or parent calibrations. A complete record lets an older experiment reconstruct its state and lets new work reject a value whose assumptions no longer hold.

## Required information

**Source-backed fact:** The corpus proposes the following fields for a useful calibration record. [C3, source page 14](../references.md#local-source)

| Field | Question answered |
| --- | --- |
| Parameter name and units | What physical quantity is represented? |
| Value and uncertainty | What was estimated, and how precise is the estimate? |
| Device or channel identity | Which physical target does it describe? |
| Source experiment and raw-data ID | Which observations produced it? |
| Fit, model, and software version | How were observations converted to the value? |
| Timestamp and device snapshot | Under what system state was it measured? |
| Parent dependencies | Which earlier calibrations did it assume? |
| Validation metrics and thresholds | Why was it accepted or rejected? |
| Status | Is it a candidate, valid, stale, failed, superseded, or rolled back? |

**Explanation:** These fields make a calibration an evidence-bearing artifact. A team may use a database row, immutable run document, typed object, or another representation; the storage technology is not the concept.

## Precise definition

A calibration record is an immutable or historically reconstructable association among:

1. a named parameter estimate and unit;
2. a physical and software identity;
3. the evidence and method that produced the estimate;
4. uncertainty and validation results;
5. parent assumptions;
6. a lifecycle status.

“Historically reconstructable” matters. Updating the current value must not erase which value an older run used.

## Synthetic illustration

This record is explanatory. It is not a D-Wave schema and contains no real device data.

```yaml
parameter: coupler-frequency
unit: hertz
value: 5.012e9
uncertainty: 2.0e4
device: synthetic-coupler-07
source_run: spectroscopy-run-0042
model_version: lorentzian-fit-v1
measured_at: 2026-08-14T12:00:00Z
parents: [flux-bias-0011, frequency-reference-0003]
validation: held-out-residual-pass
status: candidate
```

The number `5.012e9` gains meaning from the unit, target, source, uncertainty, assumptions, and status. `candidate` also prevents the illustration from implying automatic promotion.

## Examples and non-examples

**Example:** An experiment snapshot points to exact versioned records for the coupler frequency, swap pulse, wait time, and readout classifier it used.

**Non-example:** A mutable `latest.json` is overwritten after each fit, and completed experiments retain no identifier for the prior contents.

**Non-example:** A record stores “valid” but contains no use scope, validation threshold, or parent state. The status cannot be audited.

## Relationships

- [Calibration validity](calibration-validity.md) defines the conditions under which the record may be used.
- [Calibration dependencies](calibration-dependencies.md) connect this record to assumptions that can make it stale.
- [Stale parameter versus changing device](stale-parameter-vs-changing-device.md) uses lineage and time information to separate two failure patterns.

## Failure modes

- Units are omitted or converted silently.
- A physical target is identified by a reusable nickname rather than a stable identity.
- Raw data or fit code cannot be recovered.
- Parent versions are implied by “current” instead of captured.
- Candidate and production-authorized states share one ambiguous flag.
- A failed update overwrites the last-known-good record.

## Self-check

1. Why is a timestamp insufficient provenance by itself?
2. Which fields would help reproduce an old experiment after software changed?
3. Why should a candidate record differ from a valid production default?
4. What information in the synthetic record is interpretation rather than measured value?

## Sources and status

- Main evidence: [Repeated-CZ fundamentals, source pages 13–14](../../../../base/DWave_Application_and_Study_Materials.md#4-repeated-cz-calibration-question-fundamentals).
- Supporting model: [Dual-rail conversation guide, source page 8](../../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide).
- Status: `draft`. The field set is source-backed as a reference model, not verified as any private production schema.

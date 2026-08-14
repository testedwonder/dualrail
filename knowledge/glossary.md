---
title: Glossary
kind: index
status: draft
prerequisites: []
source_files: [base/DWave_Application_and_Study_Materials.md]
---

# Glossary

These are short lookup definitions. Follow each link for prerequisites, limits, examples, and sources.

| Term | Concise meaning |
| --- | --- |
| Calibration | A measurement-based process that chooses physical control settings so an intended operation behaves as required. Start with [From gates to calibration](topics/calibration-systems/fundamentals/from-gates-to-calibration.md). |
| Calibration dependency | A relationship in which one calibration assumes another result or system state. See [Calibration dependencies](topics/calibration-systems/concepts/calibration-dependencies.md). |
| Calibration drift | A once-valid relationship no longer matches the system after change over time. See [Stale parameter versus changing device](topics/calibration-systems/concepts/stale-parameter-vs-changing-device.md). |
| Calibration record | A value together with identity, units, evidence, uncertainty, dependencies, validation, and status. See [Calibration record](topics/calibration-systems/concepts/calibration-record.md). |
| Calibration validity | A conditional claim that a calibration remains suitable for a named use. See [Calibration validity](topics/calibration-systems/concepts/calibration-validity.md). |
| Coupler-frequency fluctuation | Variation over time in a coupler’s resonant frequency; one possible reason a fixed control setting stops matching the device. See [Stale parameter versus changing device](topics/calibration-systems/concepts/stale-parameter-vs-changing-device.md). |
| CZ gate | A two-qubit operation that adds a conditional phase. The pilot introduces its physical-control role in [From gates to calibration](topics/calibration-systems/fundamentals/from-gates-to-calibration.md). |
| Dependency invalidation | Marking downstream results stale when a parent assumption changes. See the [verified dependency-invalidation example](topics/calibration-systems/examples/dependency-invalidation.md). |
| Parameter | A named value used to configure or describe a device or experiment. A bare number is not a complete calibration record. |
| Stale parameter | A stored value that was once suitable but is no longer safe for the current system state. See [Stale parameter versus changing device](topics/calibration-systems/concepts/stale-parameter-vs-changing-device.md). |

## Scope

The glossary covers only the implemented pilot. Terms from the rest of the corpus will be added when their canonical pages exist, not before.

**Source status:** Definitions are adapted from the repeated-CZ fundamentals section of the [local compendium](../base/DWave_Application_and_Study_Materials.md#4-repeated-cz-calibration-question-fundamentals), especially source pages 10–17 and 22. External primary sources were not rechecked in this run.

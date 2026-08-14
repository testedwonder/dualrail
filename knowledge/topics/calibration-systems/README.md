---
title: Calibration Systems
kind: index
status: draft
prerequisites: []
source_files: [base/DWave_Application_and_Study_Materials.md]
---

# Calibration systems

A calibration system connects intended operations to a changing physical device. It must preserve not only a fitted value, but also the evidence and conditions that make the value usable.

**Source-backed fact:** The corpus defines calibration as a loop that measures a device response, fits a parameter, checks uncertainty and validation evidence, and stores or promotes the result. It also treats the root cause of the reported long repeated-CZ degradation as unresolved. [Repeated-CZ fundamentals, source pages 9–10](../../../base/DWave_Application_and_Study_Materials.md#4-repeated-cz-calibration-question-fundamentals)

**Explanation:** This topic therefore treats calibration as revocable knowledge, not a lookup table of permanent constants.

## Local map

### Foundation

- [From gates to calibration](fundamentals/from-gates-to-calibration.md)

### Canonical concepts

- [Calibration record](concepts/calibration-record.md)
- [Calibration validity](concepts/calibration-validity.md)
- [Calibration dependencies](concepts/calibration-dependencies.md)
- [Stale parameter versus changing device](concepts/stale-parameter-vs-changing-device.md)

### Procedure and example

- [Diagnose calibration drift](algorithms/diagnose-calibration-drift.md)
- [Verified dependency-invalidation example](examples/dependency-invalidation.md)

### Evidence

- [References, claim boundaries, and open questions](references.md)

## Suggested route

Use the ordered [Calibration from first principles](../../learning-paths/calibration-first.md) path. The local links above are a reference map, not permission to skip prerequisites.

## Topic boundary

This pilot explains the software and evidence model around calibration. It introduces a CZ gate only far enough to explain why device-specific settings exist. It does not teach pulse physics, reproduce D-Wave’s private stack, or establish the cause of the long-depth degradation.

Parent: [Knowledge-tree root](../../README.md)

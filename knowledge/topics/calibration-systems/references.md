---
title: Calibration Systems References
kind: index
status: draft
prerequisites: []
source_files: [base/DWave_Application_and_Study_Materials.md]
---

# Calibration systems references

## Local source

All pilot claims trace to [D-Wave Application and Study Materials](../../../base/DWave_Application_and_Study_Materials.md), a Markdown conversion of six PDFs.

| Key | Embedded source and pages | Supports |
| --- | --- | --- |
| C1 | `Repeated_CZ_Calibration_Question_Fundamentals(1).pdf`, pages 4–10 | Qubits, gates, CZ, repetition, degradation, nonlinearity, uncertainty, and calibration basics |
| C2 | Same source, pages 11–12 | Calibration drift, timescales, and coupler-frequency fluctuation |
| C3 | Same source, pages 13–16 | Production-stack responsibilities, calibration records, validity models, and dependency graphs |
| C4 | Same source, pages 17–18 | Stale-parameter/changing-device distinction and diagnostic sequence |
| C5 | Same source, pages 19–22 | Evaluation signals, question wording, teach-back checks, glossary, and source discipline |
| D1 | `Luke_Mastalli_Kelly_Dual_Rail_Conversation_Study_Guide(1).pdf`, page 8 | Calibration as a governed feedback system and production invariants |
| D2 | Same source, page 10 | Reported repeated-CZ observation and explicitly unresolved candidate causes |

Use the [section 4 anchor](../../../base/DWave_Application_and_Study_Materials.md#4-repeated-cz-calibration-question-fundamentals) for C1–C5 and the [section 3 anchor](../../../base/DWave_Application_and_Study_Materials.md#3-luke-mastalli-kelly-d-wave-and-the-dual-rail-stack-conversation-study-guide) for D1–D2. Page numbers refer to the embedded source-page markers in the compendium.

## Authority boundary

- The compendium is the authorized local corpus for this run.
- Its repeated-CZ guide cites the 2026 Nature paper for the observation and proposed causes, but that external paper was not fetched independently here.
- Its Qibocal and QCoDeS references are public analogues. They do not describe D-Wave’s private production architecture.
- The synthetic graph example in this topic is an explanatory implementation derived from C3. It is not hardware data or a representation of D-Wave internals.

## Unresolved questions

- What caused the reported nonlinear long-depth degradation?
- Which validity, dependency, monitoring, and promotion mechanisms exist in D-Wave’s private stack?
- Which calibration fields are universal enough for a shared schema, and which are device-specific?
- Which timescales and direct monitors best separate coupler motion from control-electronics or analysis effects?

These remain questions. The pilot does not fill them from model memory.

Parent: [Calibration systems](README.md)
---
title: Fundamentals-First Knowledge Tree
kind: index
status: draft
prerequisites: []
source_files: []
---

# Fundamentals-first knowledge tree

This is the entry point for a source-traceable learning system built from the preserved material in [`base/`](../base/DWave_Application_and_Study_Materials.md). The first run establishes the architecture with one pilot. It does **not** claim to cover the full corpus.

## Start here

New to the subject: follow [Calibration from first principles](learning-paths/calibration-first.md). It begins with what a gate asks hardware to do and ends with a procedure for separating stale software state from a changing device.

Looking up a term: use the [glossary](glossary.md).

## Topics

| Topic | What it answers | State |
| --- | --- | --- |
| [Calibration systems](topics/calibration-systems/README.md) | How measured device behavior becomes a versioned, conditional, and revocable control setting | Pilot implemented |
| Dual-rail encoding and erasures | How one excitation across two modes can expose photon loss | Planned; not yet written |
| Superconducting circuit QED and control | How cavities, transmons, couplers, and microwave controls relate | Planned; not yet written |
| Error-aware measurement and gates | Why erasure, leakage, Pauli errors, SPAM, and postselection must stay distinct | Planned; not yet written |
| Quantum-control software | How experiment intent reaches control hardware and returns as traceable evidence | Planned; not yet written |
| D-Wave annealing and evidence | What the annealing stack does and how to read bounded advantage claims | Planned; not yet written |

## How to read evidence labels

- **Source-backed fact:** stated in the local source corpus. The page names the source document and source page.
- **Explanation:** a simpler restatement or consequence of source-backed material.
- **Analogy:** a teaching aid. It is not evidence that the compared systems are identical.
- **Provisional inference:** a plausible model that still needs direct evidence.
- **Unresolved question:** the available source does not settle it.

Most technical pages remain `draft` because this run validates local provenance and structure but does not independently fetch the external papers cited by the compendium.

## Architecture and maintenance

- [Source inventory](_meta/source-inventory.md)
- [Concept and prerequisite map](_meta/concept-map.md)
- [Decision ledger](_meta/decision-ledger.md)
- [Bounded expansion plan](_meta/expansion-plan.md)
- [Validation report](_meta/validation-report.md)

The source compendium contains private application and interview material. Generated pages deliberately omit personal contact details, salary notes, and interview logistics.

## Current boundary

The exact next proposed batch is dual-rail encoding and erasure fundamentals. It is specified in the [expansion plan](_meta/expansion-plan.md) and requires review before implementation.

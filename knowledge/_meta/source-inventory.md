---
title: Source Inventory
kind: index
status: draft
prerequisites: []
source_files: [base/DWave_Application_and_Study_Materials.md, base/Luke_Mastalli_Kelly_Public_Evidence_Portfolio.md, base/Luke_Mastalli_Kelly_Realistic_Conversation_Portfolio.md]
---

# Source inventory

## Scope

The repository contains one preserved source compendium and two user-authorized supplemental source artifacts. [D-Wave Application and Study Materials](../../base/DWave_Application_and_Study_Materials.md) is a converted compendium of six PDFs and includes private application and interview-preparation material. It remains read-only. The two Luke Mastalli-Kelly files were generated in `base/` only because the user explicitly requested that location.

Roadmap item 1 maps every substantively explained reusable technical concept in the 66-page compendium. Personal application content and technical terms that appear only in lists remain intentionally out of scope.

## Physical source files

| Source file | Corpus role | State | Current coverage |
| --- | --- | --- | --- |
| `base/DWave_Application_and_Study_Materials.md` | Compendium containing six converted source documents | mapped | Sections 3-4 and 6 support 56 canonical technical pages; sections 1-2 and 5 remain intentionally out of scope as personal application or interview material. |
| `base/Luke_Mastalli_Kelly_Public_Evidence_Portfolio.md` | Dated research portfolio separating public evidence, secondary biography, inference, and unknowns | intentionally out of scope | Supports interview preparation and the simulated conversations; person-specific content is not a canonical technical topic. |
| `base/Luke_Mastalli_Kelly_Realistic_Conversation_Portfolio.md` | Ten explicitly simulated interview branches grounded in the public evidence portfolio and candidate source material | intentionally out of scope | Rehearsal artifact only; simulated speech is not factual source material about Luke or D-Wave. |

## Embedded source units

| Embedded source | Source pages | Authority and sensitivity | State | Planned topic coverage |
| --- | ---: | --- | --- | --- |
| `Vi_Connelly_Quantum_Computing_Cover_Letter_Branded_Final.pdf` | 1 | Personal application material with contact details; first-party account of experience | intentionally out of scope | No technical extraction planned. |
| `Vi_Connelly_Quantum_Computing_Resume_Branded_Final.pdf` | 2 | Personal application material with contact details; first-party account of experience | intentionally out of scope | Project claims may be mapped only after separate evidence review. |
| `Luke_Mastalli_Kelly_Dual_Rail_Conversation_Study_Guide(1).pdf` | 22 | Secondary study guide with links to primary papers and product sources; contains cautious inferences | mapped | Dual rail, circuit QED, gates, measurement, calibration, and production control software. Person-specific conversation guidance stays in `base/`. |
| `Repeated_CZ_Calibration_Question_Fundamentals(1).pdf` | 22 | Explanatory study guide grounded in a cited 2026 paper and public calibration analogues | mapped | Calibration records, validity, dependencies, drift diagnosis, gate stress testing, and production-stack concepts. |
| `Vi_Connelly_DWave_Screening_Interview_Study_Guide(1).pdf` | 6 | Private interview preparation, logistics, and personal positioning | intentionally out of scope | No technical extraction planned unless a later review finds unique reusable material. |
| `DWave_Company_History_Research_and_Industry_Study(1).pdf` | 13 | Company and industry synthesis mixing regulatory, peer-reviewed, partner, and company-reported evidence | mapped | Annealing, Ising/QUBO, connectivity, embedding, hybrid workflow, timing, evidence levels, advantage, and end-to-end benchmarking. Time-sensitive values stay attributed and draft. |

## Coverage boundaries

- **Mapped:** the source unit has a destination in the current taxonomy and its pilot-relevant ideas have canonical pages.
- **Partially mapped:** some ideas have destinations, but the unit is not fully represented in the knowledge tree.
- **Intentionally out of scope:** private or task-specific material is preserved in `base/` but is not repeated in the reusable technical tree.
- No source is marked `duplicate candidate` or `conflicting` in this pass.
- Resume-only technical keywords are blocked by missing explanatory evidence, not silently expanded.

## Overlap noted

The conversation study guide, source pages 8 and 10, summarizes calibration governance and the repeated-CZ question. The repeated-CZ fundamentals guide expands the same material across source pages 10–18. The expanded guide is canonical for the pilot; the conversation guide is supporting evidence rather than a second definition.

## Preservation record

- Initial SHA-256 for `base/DWave_Application_and_Study_Materials.md`: `AEA8E3200A8AA5C0BB9C963B223E6627AA60A4B8F038B951F28546C67EAD9BBA`.
- SHA-256 for `base/Luke_Mastalli_Kelly_Public_Evidence_Portfolio.md`: `6D18C7D2C59D6C30E1DF02D046779C1B163F1D368AA1D92D67CC6583BE59455D`.
- SHA-256 for `base/Luke_Mastalli_Kelly_Realistic_Conversation_Portfolio.md`: `065D0D040FAE330CB4D9A4DFD468DC34F3F271A549ED1F0B3563BD200ABE4FE7`.
- Git was unavailable during the first run and initialized before the supplemental Luke research task. Roadmap item 1 began on clean `master` after the user committed `NEXT.md`; its content was read as authorization and not edited.
- The generated tree must not repeat personal contact details or private interview logistics from the source.

## Open inventory questions

- The six original PDFs named in the compendium metadata are not present in this workspace, so page-level visual fidelity cannot be checked here.
- Core paper, role, product, acquisition, scholarly-metadata, and public-biography links used by the supplemental Luke artifacts were fetched on 2026-08-14. The full set of links embedded in the original compendium has not been independently checked.
- Time-sensitive 2025–2026 company and hardware claims remain unsuitable for `verified` pages until their primary sources are checked.
- The exact 2024 author-contribution sentence and an institutional dissertation record remain unresolved in the supplemental portfolio and are marked `TODO: verify`.
- QFT, Grover search, VQE, QAOA, BB84, quantum kernels, partial trace, and project-specific internals need authoritative sources or their project repositories before canonical expansion.

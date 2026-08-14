---
title: Source Inventory
kind: index
status: draft
prerequisites: []
source_files: [base/DWave_Application_and_Study_Materials.md]
---

# Source inventory

## Scope

The repository contains one physical source file: [D-Wave Application and Study Materials](../../base/DWave_Application_and_Study_Materials.md). It is a converted compendium of six PDFs and includes private application and interview-preparation material. The source is read-only for this project.

The current knowledge-tree run maps one technical pilot. It does not imply that the full 66-page corpus has been converted.

## Physical source files

| Source file | Corpus role | State | Current coverage |
| --- | --- | --- | --- |
| `base/DWave_Application_and_Study_Materials.md` | Compendium containing six converted source documents | partially mapped | Sections 3 and 4 support the calibration-systems pilot; the other sections remain inventoried for later review. |

## Embedded source units

| Embedded source | Source pages | Authority and sensitivity | State | Planned topic coverage |
| --- | ---: | --- | --- | --- |
| `Vi_Connelly_Quantum_Computing_Cover_Letter_Branded_Final.pdf` | 1 | Personal application material with contact details; first-party account of experience | intentionally out of scope | No technical extraction planned. |
| `Vi_Connelly_Quantum_Computing_Resume_Branded_Final.pdf` | 2 | Personal application material with contact details; first-party account of experience | intentionally out of scope | Project claims may be mapped only after separate evidence review. |
| `Luke_Mastalli_Kelly_Dual_Rail_Conversation_Study_Guide(1).pdf` | 22 | Secondary study guide with links to primary papers and product sources; contains cautious inferences | partially mapped | Calibration systems pilot now; dual-rail encoding, circuit QED, erasure semantics, and control software later. |
| `Repeated_CZ_Calibration_Question_Fundamentals(1).pdf` | 22 | Explanatory study guide grounded in a cited 2026 paper and public calibration analogues | mapped | Primary source unit for the calibration-systems pilot. “Mapped” means assigned to canonical pages, not independently verified against every cited external source. |
| `Vi_Connelly_DWave_Screening_Interview_Study_Guide(1).pdf` | 6 | Private interview preparation, logistics, and personal positioning | intentionally out of scope | No technical extraction planned unless a later review finds unique reusable material. |
| `DWave_Company_History_Research_and_Industry_Study(1).pdf` | 13 | Company and industry synthesis mixing regulatory, peer-reviewed, partner, and company-reported evidence | partially mapped | Future D-Wave platform and evidence-literacy topics; time-sensitive claims require rechecking. |

## Coverage boundaries

- **Mapped:** the source unit has a destination in the current taxonomy and its pilot-relevant ideas have canonical pages.
- **Partially mapped:** some ideas have destinations, but the unit is not fully represented in the knowledge tree.
- **Intentionally out of scope:** private or task-specific material is preserved in `base/` but is not repeated in the reusable technical tree.
- No source is marked `duplicate candidate`, `conflicting`, or `blocked by missing evidence` in this first pass.

## Overlap noted

The conversation study guide, source pages 8 and 10, summarizes calibration governance and the repeated-CZ question. The repeated-CZ fundamentals guide expands the same material across source pages 10–18. The expanded guide is canonical for the pilot; the conversation guide is supporting evidence rather than a second definition.

## Preservation record

- Initial SHA-256 for `base/DWave_Application_and_Study_Materials.md`: `AEA8E3200A8AA5C0BB9C963B223E6627AA60A4B8F038B951F28546C67EAD9BBA`.
- Git state could not be recorded because the workspace is not inside a Git repository.
- The generated tree must not repeat personal contact details or private interview logistics from the source.

## Open inventory questions

- The six original PDFs named in the compendium metadata are not present in this workspace, so page-level visual fidelity cannot be checked here.
- External links embedded in the compendium have not been independently fetched in this run.
- Time-sensitive 2025–2026 company and hardware claims remain unsuitable for `verified` pages until their primary sources are checked.

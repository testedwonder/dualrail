---
title: Initial Concept Map
kind: index
status: draft
prerequisites: []
source_files: [knowledge/research/public-technical-sources.md]
---

# Concept and prerequisite map

## Implemented taxonomy

| Topic | Content pages | Central question | Source coverage |
| --- | ---: | --- | --- |
| [Mathematics and quantum foundations](../topics/mathematics-and-quantum-foundations/README.md) | 10 | Which mathematical and physical ideas make states, measurement, gates, and calibration meaningful? | OpenStax, MIT OpenCourseWare, and IBM Quantum Learning, accessed 2026-08-14 |
| [Dual-rail qubits and erasures](../topics/dual-rail-qubits/README.md) | 8 | How can one excitation across two modes expose photon loss? | Teoh, Chou, and Mehta open papers |
| [Superconducting circuit QED and control](../topics/circuit-qed/README.md) | 7 | Which components and interactions realize the encoded operations? | Blais and Krantz reviews; Mehta system paper |
| [Error-aware gates and measurement](../topics/error-aware-gates/README.md) | 11 | How are gates and measurements qualified without flattening structured errors? | Chou and Mehta open papers |
| [Calibration systems](../topics/calibration-systems/README.md) | 7 | How does measured behavior become conditional, revocable control state? | Public gate appendices, quantum prerequisites, and bounded explanatory models |
| [Quantum-control software](../topics/quantum-control-software/README.md) | 11 | How does experiment intent reach hardware and return as traceable evidence? | Public product and technology interfaces plus explicit reference architectures |
| [Annealing and evidence](../topics/annealing-and-evidence/README.md) | 12 | What does the annealing workflow do, and what supports a comparative claim? | Developer documentation, open methodology, and peer-reviewed system papers |

Total: **66 canonical content pages** plus topic indexes, references, learning paths, glossary, and metadata records.

The public tree includes technical learning material only.

## Cross-topic graph

```mermaid
flowchart TD
    CN[Complex numbers and phase] --> VB[Vectors, bases, and inner products]
    VB --> ML[Matrices and linear operators]
    ML --> EE[Eigenvalues and eigenvectors]
    VB --> QSV[Quantum states and bra-ket notation]
    EE --> QO[Quantum operators and observables]
    QSV --> QO
    PROB[Probability and measurement statistics] --> QM[Quantum measurement and Born rule]
    QO --> QM
    QO --> UG[Unitary evolution and gates]
    QO --> NS[Oscillator number states]
    NS --> QS
    QM --> QS
    QM --> GTC[From gates to calibration]
    UG --> GTC
    QS[Quantum state and Fock notation] --> CS[Code space]
    SC[Superconducting circuit stack] --> T[Transmon]
    SC --> MC[Microwave cavity]
    T --> CQED[Circuit QED and dispersive interaction]
    MC --> CQED
    QS --> DR[Dual-rail encoding]
    CS --> DR
    MC --> DR
    CQED --> BP[Beamsplitter and parametric drive]
    DR --> PL[Photon loss and vacuum]
    PL --> LE[Leakage and erasure]
    DR --> CZ[Controlled-Z]
    BP --> SWS[Swap-wait-swap CZ]
    CZ --> SWS
    SWS --> LP[Leakage propagation]
    LE --> LP
    LM[Logical erasure-aware measurement] --> OS[Outcome semantics]
    OS --> RTC[Real-time control and error handling]
    CAL[Calibration record] --> CV[Calibration validity]
    CAL --> CD[Calibration dependencies]
    CV --> STALE[Stale parameter vs changing device]
    CD --> STALE
    STALE --> OBS[Two-plane observability]
    OS --> TEST[Quantum-control test portfolio]
    QUBO[QUBO and BQM] --> EMB[Minor embedding]
    CONN[Hardware connectivity] --> EMB
    EMB --> WF[Annealing sampling workflow]
    WF --> TTS[Time to solution]
    EV[Evidence levels] --> QA[Quantum advantage]
    TTS --> QA
    QA --> E2E[End-to-end benchmarking]
```

This Mermaid view is deliberately compressed. Page front matter is the canonical machine-readable graph.

## Graph measurements

- Longest prerequisite-path depth: **13**.
- Largest direct prerequisite set: **4**.
- Lowest complexity score: **0.0** at 700 nm red.
- Highest current complexity score: **9.5** at 396 nm near violet.
- Deepest current pages: leakage propagation, real-time control and error handling, and the quantum-control test portfolio.

See the [complexity model](complexity-model.md) for the exact formula. Derived values are recalculated by `tools/update_complexity.py` and checked by the main validator.

Five current content pages are roots and therefore score `0.0`. The true entry points include complex numbers and classical probability. Quantum States and Fock Notation and From Gates to Calibration sit at depth `6` and complexity `4.69` after their prerequisites are represented.

## Navigation contract

Every content page declares:

- `prerequisites`: content that must be understood first;
- `next_steps`: sensible forward movement, including an index for terminal pages;
- `related`: non-prerequisite neighbors and alternatives;
- `source_files`: local provenance;
- derived complexity fields;
- manual `understanding` from `0` to `10`.

Required learning paths are acyclic and contain prerequisites before dependents. Related links may form cycles because they are navigation, not learning order.

## Decomposition and stop rule

A concept receives its own page when it has an independent definition, reuse, prerequisites, algorithm, examples, or meaningful failure modes. Closely coupled terms stay together when splitting them would create thin pages, such as:

- leakage and erasure;
- transmons and anharmonicity;
- circuit QED and dispersive interaction;
- beamsplitter interaction and parametric drive;
- detection, correction, and postselection;
- QUBO and BQM;
- quantum processing time and time to solution.

The recursion stops where the public registry does not yet support a dedicated learning path. QFT, Grover search, VQE, QAOA, BB84, quantum kernels, and partial trace remain future sourced topics.

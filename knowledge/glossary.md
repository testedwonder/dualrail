---
title: Glossary
kind: index
status: draft
prerequisites: []
source_files: [knowledge/research/public-technical-sources.md]
---

# Glossary

These are short lookup definitions. Follow each link for prerequisites, examples, failure modes, self-checks, and sources.

## Mathematics and quantum foundations

| Term | Concise meaning |
| --- | --- |
| Complex number | A number $a+bi$ represented by real and imaginary components, or equivalently magnitude and phase. [Full page](topics/mathematics-and-quantum-foundations/fundamentals/complex-numbers-and-phase.md) |
| Basis | A minimal set of vectors whose linear combinations produce every vector in a space. [Full page](topics/mathematics-and-quantum-foundations/fundamentals/vectors-bases-and-inner-products.md) |
| Inner product | A conjugate-linear comparison that defines vector length and orthogonality. [Full page](topics/mathematics-and-quantum-foundations/fundamentals/vectors-bases-and-inner-products.md) |
| Linear operator | A map that respects vector addition and scalar multiplication; a matrix represents it in chosen bases. [Full page](topics/mathematics-and-quantum-foundations/fundamentals/matrices-and-linear-operators.md) |
| Eigenvector and eigenvalue | A nonzero direction preserved by an operator and the scale factor applied along it. [Full page](topics/mathematics-and-quantum-foundations/fundamentals/eigenvalues-and-eigenvectors.md) |
| Probability and frequency | A predicted outcome weight versus the observed fraction in a finite sample. [Full page](topics/mathematics-and-quantum-foundations/fundamentals/probability-and-measurement-statistics.md) |
| Bra and ket | A ket is a state-vector column; its bra is the conjugate-transposed row. [Full page](topics/mathematics-and-quantum-foundations/concepts/quantum-states-and-bra-ket-notation.md) |
| Observable | A Hermitian operator whose eigenvalues represent possible measurement values in this finite-dimensional treatment. [Full page](topics/mathematics-and-quantum-foundations/concepts/quantum-operators-observables-and-expectation-values.md) |
| Born rule | Outcome probability equals the squared magnitude of the state's amplitude in the measurement basis. [Full page](topics/mathematics-and-quantum-foundations/concepts/quantum-measurement-and-born-rule.md) |
| Unitary gate | A reversible linear operation that preserves inner products and state normalization. [Full page](topics/mathematics-and-quantum-foundations/concepts/unitary-evolution-and-quantum-gates.md) |
| Number state | An oscillator eigenstate $|n\rangle$ with a definite nonnegative excitation count. [Full page](topics/mathematics-and-quantum-foundations/concepts/oscillators-quantization-and-number-states.md) |

## Dual rail and quantum states

| Term | Concise meaning |
| --- | --- |
| Quantum state and Fock notation | A state records coherent alternatives; `|nA,nB>` records definite excitation counts in two modes. [Full page](topics/dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md) |
| Code space | The selected physical-state subspace used to represent valid logical information. [Full page](topics/dual-rail-qubits/concepts/code-space.md) |
| Dual-rail encoding | One logical qubit encoded in one excitation coherently shared across two modes. [Full page](topics/dual-rail-qubits/concepts/dual-rail-encoding.md) |
| Photon loss and vacuum | Loss removes the one excitation and sends either logical basis state to `|0,0>`. [Full page](topics/dual-rail-qubits/concepts/photon-loss-and-vacuum.md) |
| Leakage | Departure from the selected code space. [Leakage and erasure](topics/dual-rail-qubits/concepts/leakage-and-erasure.md) |
| Erasure | An error reported with known location, and often known time. [Leakage and erasure](topics/dual-rail-qubits/concepts/leakage-and-erasure.md) |
| Pauli error | A logical `X`, `Y`, or `Z` error whose location is not normally supplied directly. [Pauli errors and hierarchy](topics/dual-rail-qubits/concepts/pauli-errors-and-error-hierarchy.md) |
| Error hierarchy | The relative rates and structure of erasure, dephasing, bit-flip, and correlated errors. [Full page](topics/dual-rail-qubits/concepts/pauli-errors-and-error-hierarchy.md) |
| Detection, correction, postselection | Flag an event, recover protected information, or discard a run; three distinct responses. [Full page](topics/dual-rail-qubits/concepts/detection-correction-and-postselection.md) |
| Loss-to-vacuum transition | Worked transition from either dual-rail basis state to vacuum after photon loss. [Worked example](topics/dual-rail-qubits/examples/loss-to-vacuum.md) |

## Circuit QED and control

| Term | Concise meaning |
| --- | --- |
| Superconducting circuit stack | Materials, nonlinear elements, resonant modes, RF controls, cryogenics, readout, and software acting as one instrument. [Full page](topics/circuit-qed/concepts/superconducting-circuit-stack.md) |
| Transmon | A Josephson-junction-based superconducting artificial atom used as a qubit, ancilla, or coupler. [Transmons and anharmonicity](topics/circuit-qed/concepts/transmons-and-anharmonicity.md) |
| Anharmonicity | Unequal adjacent energy-level spacing that supports transition selectivity. [Transmons and anharmonicity](topics/circuit-qed/concepts/transmons-and-anharmonicity.md) |
| Microwave cavity | A resonant structure that stores quantized microwave excitations. [Full page](topics/circuit-qed/concepts/microwave-cavity.md) |
| Circuit QED | Superconducting artificial atoms coupled to microwave resonators. [Circuit QED and dispersive interaction](topics/circuit-qed/concepts/circuit-qed-and-dispersive-interaction.md) |
| Dispersive interaction | An interaction in which frequency or phase depends on another mode's occupation. [Full page](topics/circuit-qed/concepts/circuit-qed-and-dispersive-interaction.md) |
| Beamsplitter interaction | Coherent excitation exchange between two modes. [Beamsplitter and parametric drive](topics/circuit-qed/concepts/beamsplitter-and-parametric-drive.md) |
| Parametric drive | A time-varying pump used to select and activate an effective interaction. [Beamsplitter and parametric drive](topics/circuit-qed/concepts/beamsplitter-and-parametric-drive.md) |
| `T1`, `T2`, `Tphi` | Energy-relaxation, total-coherence, and pure-dephasing times. [Coherence times](topics/circuit-qed/concepts/coherence-times.md) |
| IQ data | In-phase and quadrature components of a digitized microwave readout. [Readout chain and IQ data](topics/circuit-qed/concepts/readout-chain-and-iq-data.md) |

## Gates and measurement

| Term | Concise meaning |
| --- | --- |
| Single-qubit dual-rail control | Coherent rail rotation driven by a calibrated beamsplitter interaction. [Full page](topics/error-aware-gates/concepts/single-qubit-dual-rail-control.md) |
| Controlled-Z | A two-qubit entangling operation that applies a conditional phase. [Full page](topics/error-aware-gates/concepts/controlled-z-gate.md) |
| Swap-wait-swap CZ | Swap the control excitation into a coupler, accumulate conditional phase, then swap it back. [Algorithm](topics/error-aware-gates/algorithms/swap-wait-swap-cz.md) |
| Quantum state tomography | State reconstruction from statistics measured in multiple bases. [Full page](topics/error-aware-gates/concepts/quantum-state-tomography.md) |
| Randomized benchmarking | Estimate average gate performance from randomized sequences; interleaving isolates a target gate. [Full page](topics/error-aware-gates/concepts/randomized-benchmarking.md) |
| SPAM | State-preparation-and-measurement error. [Full page](topics/error-aware-gates/concepts/spam.md) |
| Logical measurement with erasure detection | Classify logical outcomes and dominant loss without collapsing all failures into one bucket. [Algorithm](topics/error-aware-gates/algorithms/logical-measurement-with-erasure-detection.md) |
| Control-target asymmetry | Directional gate errors caused by physically different control and target roles. [Full page](topics/error-aware-gates/concepts/control-target-asymmetry.md) |
| Leakage propagation | How an out-of-code-space state changes later gates and neighboring qubits. [Full page](topics/error-aware-gates/concepts/leakage-propagation.md) |
| No-jump backaction | Conditional evolution caused by learning that a decay did not occur. [Full page](topics/error-aware-gates/concepts/no-jump-backaction.md) |
| Repeated-CZ experiment | A long-depth stress test that exposed behavior missed by short gate sequences. [Worked example](topics/error-aware-gates/examples/repeated-cz-experiment.md) |

## Calibration systems

| Term | Concise meaning |
| --- | --- |
| Calibration | Measurement-based tuning that maps intended operations to physical settings. [From gates to calibration](topics/calibration-systems/fundamentals/from-gates-to-calibration.md) |
| Calibration record | A value plus units, identity, evidence, uncertainty, dependencies, validation, and lifecycle state. [Full page](topics/calibration-systems/concepts/calibration-record.md) |
| Calibration validity | A conditional claim that a calibration remains suitable for a named use. [Full page](topics/calibration-systems/concepts/calibration-validity.md) |
| Calibration dependency | A directed relation saying one result assumes another versioned result or state. [Full page](topics/calibration-systems/concepts/calibration-dependencies.md) |
| Dependency invalidation | Mark all reachable descendants stale after a parent assumption changes. [Executable example](topics/calibration-systems/examples/dependency-invalidation.md) |
| Stale parameter | A stored value that no longer matches a device that may now be stable elsewhere. [Stale parameter versus changing device](topics/calibration-systems/concepts/stale-parameter-vs-changing-device.md) |
| Changing device | A physical target that does not remain fixed on the relevant timescale. [Stale parameter versus changing device](topics/calibration-systems/concepts/stale-parameter-vs-changing-device.md) |
| Drift diagnosis | Time-aligned lineage, monitors, and interventions used to separate stale state from physical motion. [Algorithm](topics/calibration-systems/algorithms/diagnose-calibration-drift.md) |

## Quantum-control software

| Term | Concise meaning |
| --- | --- |
| Production quantum-control stack | Shared, versioned software and control infrastructure that turns experiments into traceable hardware execution. [Full page](topics/quantum-control-software/concepts/production-stack.md) |
| Public and internal interfaces | Related but distinct user-facing and device-facing contracts. [Full page](topics/quantum-control-software/concepts/public-and-internal-interfaces.md) |
| Experiment semantic layer | Typed meaning for operations, units, targets, constraints, capabilities, and result shapes. [Full page](topics/quantum-control-software/concepts/experiment-description-and-semantic-layer.md) |
| Compiler and scheduler | Lower semantic operations and assign timed physical resources. [Full page](topics/quantum-control-software/concepts/compiler-and-scheduler.md) |
| Outcome semantics | Explicit claims carried by valid, erasure, assignment-failure, and execution-failure categories. [Full page](topics/quantum-control-software/concepts/outcome-semantics.md) |
| Real-time control | Bounded classical decisions executed close enough to affect an ongoing quantum program. [Full page](topics/quantum-control-software/concepts/realtime-control-and-error-handling.md) |
| Error-detection handling | Branching or analysis that treats detected error information as program state. [Full page](topics/quantum-control-software/concepts/realtime-control-and-error-handling.md) |
| Acquisition and provenance | Preserve raw observations and the identities needed to reconstruct a result. [Full page](topics/quantum-control-software/concepts/acquisition-and-provenance.md) |
| Reliable orchestration | Coordinate jobs, retries, locks, resources, and state transitions without silent duplication. [Full page](topics/quantum-control-software/concepts/reliable-orchestration.md) |
| Promotion and rollback | Authorize a candidate atomically or restore exact last-known-good state. [Full page](topics/quantum-control-software/concepts/promotion-and-rollback.md) |
| Two-plane observability | Correlate service health with scientific behavior. [Full page](topics/quantum-control-software/concepts/observability.md) |
| Quantum-control test portfolio | Match each invariant to unit, property, replay, simulator, fault-injection, or bounded hardware evidence. [Full page](topics/quantum-control-software/concepts/test-portfolio.md) |

## Annealing and evidence

| Term | Concise meaning |
| --- | --- |
| Quantum annealing | Analog evolution used to sample low-energy states of an encoded model. [Full page](topics/annealing-and-evidence/concepts/quantum-annealing.md) |
| Ising model | Energy model over spin variables in `{-1,+1}` with local and pairwise terms. [Full page](topics/annealing-and-evidence/concepts/ising-model.md) |
| QUBO and BQM | Linear and quadratic coefficients over binary variables; BQM covers binary or spin forms. [Full page](topics/annealing-and-evidence/concepts/qubo-and-bqm.md) |
| Hardware connectivity | Graph of programmable physical couplers among annealer qubits. [Full page](topics/annealing-and-evidence/concepts/hardware-connectivity.md) |
| Minor embedding | Map a logical graph onto hardware, sometimes using chains for one logical variable. [Full page](topics/annealing-and-evidence/concepts/minor-embedding.md) |
| Annealing sampling workflow | Formulate, map, configure, sample, unembed, validate, and compare. [Algorithm](topics/annealing-and-evidence/algorithms/annealing-sampling-workflow.md) |
| Hybrid solver | Classical search or decomposition combined with quantum-sampler calls. [Full page](topics/annealing-and-evidence/concepts/hybrid-solver.md) |
| Quantum processing time | Time attributed to QPU programming, annealing, and readout. [Timing distinction](topics/annealing-and-evidence/concepts/quantum-processing-time-and-time-to-solution.md) |
| Time to solution | Expected repeated-sampling time to achieve a target success probability. [Timing distinction](topics/annealing-and-evidence/concepts/quantum-processing-time-and-time-to-solution.md) |
| Evidence levels | Peer-reviewed, regulatory, partner-reported, company-reported, and forward-looking support. [Full page](topics/annealing-and-evidence/concepts/evidence-levels.md) |
| Quantum advantage | A demonstrated benefit over a specified classical method for a specified task and metric. [Full page](topics/annealing-and-evidence/concepts/quantum-advantage.md) |
| End-to-end benchmarking | Compare complete workflows at equivalent output quality and declared cost boundaries. [Full page](topics/annealing-and-evidence/concepts/end-to-end-benchmarking.md) |
| Binary quadratic objective | Two-variable worked example showing linear rewards and a pair penalty. [Worked example](topics/annealing-and-evidence/examples/binary-quadratic-objective.md) |

## Scope exclusions

QFT, Grover search, VQE, QAOA, BB84, quantum kernels, density matrices, and partial trace remain excluded until a dedicated sourced learning path is accepted.

**Source status:** Definitions trace to the [public technical registry](research/public-technical-sources.md) through each topic's claim map. Every full page states its evidence and limits.

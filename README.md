# Dualrail Atlas

[![CI](https://github.com/testedwonder/dualrail/actions/workflows/ci.yml/badge.svg)](https://github.com/testedwonder/dualrail/actions/workflows/ci.yml)

Dualrail Atlas is a local-first study application for quantum foundations, dual-rail qubits, superconducting control, calibration, quantum-control software, and annealing evidence. The application is the focus of this repository: it combines reading, search, graph navigation, exercises, public technical research, corrections, personal notes, and understanding ratings.

The core application is free to run, works without API keys or paid services, and does not rewrite canonical source material.

## Start Here

Use one route at a time. Each route puts prerequisites before dependent pages.

| Goal | Begin with | Continue to |
| --- | --- | --- |
| Build the required mathematics and quantum background | [Foundations for Quantum States and Calibration](knowledge/learning-paths/foundations-to-quantum-systems.md) | [Quantum States and Fock Notation](knowledge/topics/dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md) or [From Gates to Calibration](knowledge/topics/calibration-systems/fundamentals/from-gates-to-calibration.md) |
| Understand dual-rail hardware and gates | [Dual Rail from Notation to Gates](knowledge/learning-paths/dual-rail-to-gates.md) | [Repeated-CZ Experiment](knowledge/topics/error-aware-gates/examples/repeated-cz-experiment.md) |
| Study calibration and drift | [Calibration from First Principles](knowledge/learning-paths/calibration-first.md) | [Diagnose Calibration Drift](knowledge/topics/calibration-systems/algorithms/diagnose-calibration-drift.md) |
| Understand annealing and advantage claims | [Annealing from Model to Evidence](knowledge/learning-paths/annealing-first.md) | [End-to-End Benchmarking](knowledge/topics/annealing-and-evidence/concepts/end-to-end-benchmarking.md) |
| Look up one term | [Glossary](knowledge/glossary.md) | Follow the linked canonical page's **Next** controls |

For a short study session, open one page, complete its self-check or interactive exercise, record one unresolved question in personal notes, and follow only one next-step link.

## Run The Application

Requirements: Node.js 18 and npm 9 or newer.

From PowerShell at the repository root:

```powershell
.\run.ps1
```

Or run the application directly:

```powershell
cd app
npm install
npm run dev
```

Open the Vite URL, normally <http://127.0.0.1:5173/>. See the [application guide](app/README.md) for detailed controls and validation commands.

### Website And Mobile Release

Version `0.1.0` builds as an installable offline-first web app. GitHub Pages deployment, Android/iOS installation, and the remaining post-publication settings are documented in [INSTRUCTIONS.md](INSTRUCTIONS.md).

The static release needs no database, API key, subscription, or app-store account. Personal data remains local and moves between devices through Settings export/import. See [PRIVACY.md](PRIVACY.md), [SECURITY.md](SECURITY.md), and [CONTRIBUTING.md](CONTRIBUTING.md).

### Study Workflow

1. Use **Library** to search or filter topics and learning paths.
2. Read the page's prerequisites before its body; use **Next** for forward movement and **Related** for optional context.
3. Use **Map** to inspect prerequisite, next-step, and related relationships. The visible spectrum explains complexity color.
4. Set **Understanding** from `0` to `10`. This is your self-assessment, not the page's complexity.
5. Add **Personal notes** for questions, explanations in your own words, or recall prompts.
6. Use **Progress** to review topic averages, notes, and the study queue.
7. Use **Settings** to export or import notes, ratings, and the current progress snapshot.
8. Use **Research** to evaluate public technical sources and keep a local queue of proposed sources or corrections.
9. Open green verification marks to inspect test counts, checked behavior, and claim boundaries.

Green verification marks open scoped test digests. They report what was checked and the boundary of the claim; they do not replace scientific peer review.

Ratings and notes live in browser local storage. They never modify canonical knowledge or public research records. Complexity is generated from prerequisite depth and direct prerequisite count; see the [complexity model](knowledge/_meta/complexity-model.md).

## Interactive Exercises

Five local exercises provide immediate, specific feedback without external services:

- [Foundation diagnostic](knowledge/topics/mathematics-and-quantum-foundations/README.md)
- [Complex-phase explorer](knowledge/topics/mathematics-and-quantum-foundations/fundamentals/complex-numbers-and-phase.md)
- [Matrix and eigenvector explorer](knowledge/topics/mathematics-and-quantum-foundations/fundamentals/eigenvalues-and-eigenvectors.md)
- [Born-rule measurement lab](knowledge/topics/mathematics-and-quantum-foundations/concepts/quantum-measurement-and-born-rule.md)
- [Gate-to-calibration ordering](knowledge/topics/calibration-systems/fundamentals/from-gates-to-calibration.md)

The application also includes a full-bleed **Dual-rail state space** Lab. It uses Three.js to visualize population and relative phase across two logical modes while keeping the mathematical state and probabilities visible in stable controls. The visualization is explicitly not a literal hardware model.

The measurement lab uses a visible deterministic seed. Its counts illustrate finite sampling; they are not hardware data or a device-noise simulation.

## Knowledge Contents

The canonical tree currently contains 66 content pages across seven topics. Topic indexes provide the preferred local order; the lists below are a complete lookup table.

### Mathematics And Quantum Foundations

**Prerequisite:** basic arithmetic. **Next:** dual-rail state notation or gate-to-calibration reasoning.

- [Topic index](knowledge/topics/mathematics-and-quantum-foundations/README.md)
- [Complex Numbers, Magnitude, and Phase](knowledge/topics/mathematics-and-quantum-foundations/fundamentals/complex-numbers-and-phase.md)
- [Vectors, Bases, and Inner Products](knowledge/topics/mathematics-and-quantum-foundations/fundamentals/vectors-bases-and-inner-products.md)
- [Matrices and Linear Operators](knowledge/topics/mathematics-and-quantum-foundations/fundamentals/matrices-and-linear-operators.md)
- [Eigenvalues and Eigenvectors](knowledge/topics/mathematics-and-quantum-foundations/fundamentals/eigenvalues-and-eigenvectors.md)
- [Probability and Measurement Statistics](knowledge/topics/mathematics-and-quantum-foundations/fundamentals/probability-and-measurement-statistics.md)
- [Quantum States and Bra-Ket Notation](knowledge/topics/mathematics-and-quantum-foundations/concepts/quantum-states-and-bra-ket-notation.md)
- [Quantum Operators, Observables, and Expectation Values](knowledge/topics/mathematics-and-quantum-foundations/concepts/quantum-operators-observables-and-expectation-values.md)
- [Quantum Measurement and the Born Rule](knowledge/topics/mathematics-and-quantum-foundations/concepts/quantum-measurement-and-born-rule.md)
- [Unitary Evolution and Quantum Gates](knowledge/topics/mathematics-and-quantum-foundations/concepts/unitary-evolution-and-quantum-gates.md)
- [Oscillators, Quantization, and Number States](knowledge/topics/mathematics-and-quantum-foundations/concepts/oscillators-quantization-and-number-states.md)
- [References and boundaries](knowledge/topics/mathematics-and-quantum-foundations/references.md)

### Dual-Rail Qubits And Erasures

**Prerequisite:** number states and the Born rule. **Next:** error-aware gates and measurement.

- [Topic index](knowledge/topics/dual-rail-qubits/README.md)
- [Quantum States and Fock Notation](knowledge/topics/dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md)
- [Code Space](knowledge/topics/dual-rail-qubits/concepts/code-space.md)
- [Dual-Rail Encoding](knowledge/topics/dual-rail-qubits/concepts/dual-rail-encoding.md)
- [Photon Loss and Vacuum](knowledge/topics/dual-rail-qubits/concepts/photon-loss-and-vacuum.md)
- [Leakage and Erasure](knowledge/topics/dual-rail-qubits/concepts/leakage-and-erasure.md)
- [Pauli Errors and Error Hierarchy](knowledge/topics/dual-rail-qubits/concepts/pauli-errors-and-error-hierarchy.md)
- [Detection, Correction, and Postselection](knowledge/topics/dual-rail-qubits/concepts/detection-correction-and-postselection.md)
- [Loss to Vacuum Worked Example](knowledge/topics/dual-rail-qubits/examples/loss-to-vacuum.md)
- [References and open questions](knowledge/topics/dual-rail-qubits/references.md)

### Superconducting Circuit QED And Control

**Prerequisite:** none for the physical overview; state-vector foundations help with later interactions. **Next:** dual-rail controls and gates.

- [Topic index](knowledge/topics/circuit-qed/README.md)
- [Superconducting Circuit Stack](knowledge/topics/circuit-qed/concepts/superconducting-circuit-stack.md)
- [Transmons and Anharmonicity](knowledge/topics/circuit-qed/concepts/transmons-and-anharmonicity.md)
- [Microwave Cavity](knowledge/topics/circuit-qed/concepts/microwave-cavity.md)
- [Circuit QED and Dispersive Interaction](knowledge/topics/circuit-qed/concepts/circuit-qed-and-dispersive-interaction.md)
- [Beamsplitter Interaction and Parametric Drive](knowledge/topics/circuit-qed/concepts/beamsplitter-and-parametric-drive.md)
- [Coherence Times](knowledge/topics/circuit-qed/concepts/coherence-times.md)
- [Readout Chain and IQ Data](knowledge/topics/circuit-qed/concepts/readout-chain-and-iq-data.md)
- [References and boundaries](knowledge/topics/circuit-qed/references.md)

### Error-Aware Gates And Measurement

**Prerequisite:** dual-rail encoding and relevant circuit-QED interactions. **Next:** repeated-gate evidence, calibration, and control software.

- [Topic index](knowledge/topics/error-aware-gates/README.md)
- [Single-Qubit Dual-Rail Control](knowledge/topics/error-aware-gates/concepts/single-qubit-dual-rail-control.md)
- [Controlled-Z Gate](knowledge/topics/error-aware-gates/concepts/controlled-z-gate.md)
- [Swap-Wait-Swap Controlled-Z](knowledge/topics/error-aware-gates/algorithms/swap-wait-swap-cz.md)
- [Quantum State Tomography](knowledge/topics/error-aware-gates/concepts/quantum-state-tomography.md)
- [Randomized Benchmarking](knowledge/topics/error-aware-gates/concepts/randomized-benchmarking.md)
- [State-Preparation-and-Measurement Error](knowledge/topics/error-aware-gates/concepts/spam.md)
- [Logical Measurement with Erasure Detection](knowledge/topics/error-aware-gates/algorithms/logical-measurement-with-erasure-detection.md)
- [Control-Target Error Asymmetry](knowledge/topics/error-aware-gates/concepts/control-target-asymmetry.md)
- [Leakage Propagation](knowledge/topics/error-aware-gates/concepts/leakage-propagation.md)
- [No-Jump Backaction](knowledge/topics/error-aware-gates/concepts/no-jump-backaction.md)
- [Repeated-CZ Experiment](knowledge/topics/error-aware-gates/examples/repeated-cz-experiment.md)
- [References and boundaries](knowledge/topics/error-aware-gates/references.md)

### Calibration Systems

**Prerequisite:** unitary gates, quantum measurement, and finite-sample reasoning. **Next:** production control, observability, and tests.

- [Topic index](knowledge/topics/calibration-systems/README.md)
- [From Gates to Calibration](knowledge/topics/calibration-systems/fundamentals/from-gates-to-calibration.md)
- [Calibration Record](knowledge/topics/calibration-systems/concepts/calibration-record.md)
- [Calibration Validity](knowledge/topics/calibration-systems/concepts/calibration-validity.md)
- [Calibration Dependencies](knowledge/topics/calibration-systems/concepts/calibration-dependencies.md)
- [Dependency Invalidation Example](knowledge/topics/calibration-systems/examples/dependency-invalidation.md)
- [Stale Parameter Versus Changing Device](knowledge/topics/calibration-systems/concepts/stale-parameter-vs-changing-device.md)
- [Diagnose Calibration Drift](knowledge/topics/calibration-systems/algorithms/diagnose-calibration-drift.md)
- [References, claim boundaries, and open questions](knowledge/topics/calibration-systems/references.md)

### Quantum-Control Software

**Prerequisite:** calibration records and explicit outcome semantics. **Next:** use the test portfolio to evaluate an implementation.

- [Topic index](knowledge/topics/quantum-control-software/README.md)
- [Production Quantum-Control Stack](knowledge/topics/quantum-control-software/concepts/production-stack.md)
- [Public and Internal Interfaces](knowledge/topics/quantum-control-software/concepts/public-and-internal-interfaces.md)
- [Experiment Description and Semantic Layer](knowledge/topics/quantum-control-software/concepts/experiment-description-and-semantic-layer.md)
- [Compiler and Scheduler](knowledge/topics/quantum-control-software/concepts/compiler-and-scheduler.md)
- [Outcome Semantics](knowledge/topics/quantum-control-software/concepts/outcome-semantics.md)
- [Real-Time Control and Error Handling](knowledge/topics/quantum-control-software/concepts/realtime-control-and-error-handling.md)
- [Acquisition and Provenance](knowledge/topics/quantum-control-software/concepts/acquisition-and-provenance.md)
- [Reliable Orchestration](knowledge/topics/quantum-control-software/concepts/reliable-orchestration.md)
- [Promotion and Rollback](knowledge/topics/quantum-control-software/concepts/promotion-and-rollback.md)
- [Two-Plane Observability](knowledge/topics/quantum-control-software/concepts/observability.md)
- [Quantum-Control Test Portfolio](knowledge/topics/quantum-control-software/concepts/test-portfolio.md)
- [References and private-architecture boundary](knowledge/topics/quantum-control-software/references.md)

### Annealing And Evidence

**Prerequisite:** basic binary variables and probability. **Next:** compare full workflows at declared quality and cost boundaries.

- [Topic index](knowledge/topics/annealing-and-evidence/README.md)
- [Quantum Annealing](knowledge/topics/annealing-and-evidence/concepts/quantum-annealing.md)
- [Ising Model](knowledge/topics/annealing-and-evidence/concepts/ising-model.md)
- [QUBO and Binary Quadratic Models](knowledge/topics/annealing-and-evidence/concepts/qubo-and-bqm.md)
- [Annealer Hardware Connectivity](knowledge/topics/annealing-and-evidence/concepts/hardware-connectivity.md)
- [Minor Embedding](knowledge/topics/annealing-and-evidence/concepts/minor-embedding.md)
- [Binary Quadratic Objective Example](knowledge/topics/annealing-and-evidence/examples/binary-quadratic-objective.md)
- [Annealing Sampling Workflow](knowledge/topics/annealing-and-evidence/algorithms/annealing-sampling-workflow.md)
- [Hybrid Solver](knowledge/topics/annealing-and-evidence/concepts/hybrid-solver.md)
- [Quantum Processing Time and Time to Solution](knowledge/topics/annealing-and-evidence/concepts/quantum-processing-time-and-time-to-solution.md)
- [Evidence Levels](knowledge/topics/annealing-and-evidence/concepts/evidence-levels.md)
- [Quantum Advantage](knowledge/topics/annealing-and-evidence/concepts/quantum-advantage.md)
- [End-to-End Benchmarking](knowledge/topics/annealing-and-evidence/concepts/end-to-end-benchmarking.md)
- [References and time-sensitive boundaries](knowledge/topics/annealing-and-evidence/references.md)

## Public Technical Research

### Research Registry

- [Public technical source registry](knowledge/research/public-technical-sources.md): dated OpenStax, MIT OpenCourseWare, and IBM Quantum Learning starting points.
- The in-app **Research** view also gathers public papers, preprints, official records, first-party technical sources, and documentation already cited by the knowledge tree.
- Source and correction proposals remain local until exported as JSON for repository review.

### Authoritative Starting Points

- [IBM Quantum Learning: Basics of Quantum Information](https://quantum.cloud.ibm.com/learning/courses/basics-of-quantum-information/single-systems/introduction)
- [MIT OpenCourseWare 18.06SC: Linear Algebra](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/)
- [MIT OpenCourseWare 8.04: Quantum Physics I](https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/)
- [MIT OpenCourseWare 8.05: Quantum Physics II](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/)
- [OpenStax Precalculus 2e: Complex Numbers](https://openstax.org/books/precalculus-2e/pages/3-1-complex-numbers)
- [OpenStax Introductory Statistics 2e: Probability Terminology](https://openstax.org/books/introductory-statistics-2e/pages/3-1-terminology)

### Evaluate A Source Before Relying On It

1. **Authority:** Prefer primary papers, official technical documentation, university courses, or first-party product material over summaries.
2. **Claim match:** Check that the source supports the exact claim, system, metric, and time period being discussed.
3. **Evidence level:** Separate peer-reviewed results, regulatory records, partner reports, company reports, and forward-looking statements.
4. **Comparator:** For performance claims, identify the baseline, implementation quality, output accuracy, hardware, and included costs.
5. **Reproducibility:** Look for methods, data, code, uncertainty, and enough detail to repeat or challenge the result.
6. **Currency:** Record access and publication dates for product capabilities or other changing facts.
7. **Boundary:** Preserve unresolved questions. Do not convert a plausible explanation into an established cause.

See [Evidence Levels](knowledge/topics/annealing-and-evidence/concepts/evidence-levels.md), [Quantum Advantage](knowledge/topics/annealing-and-evidence/concepts/quantum-advantage.md), and the [public technical registry](knowledge/research/public-technical-sources.md) for the repository's applied standard.

## Maintenance And Validation

After editing prerequisites or adding a canonical page:

```powershell
& "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe" -B tools\update_complexity.py
& "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe" -B tools\update_complexity.py --check
& "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe" -B tools\validate_knowledge.py
& "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe" -B -m unittest discover -s tests -v
cd app
npm run release:check
```

The validator checks metadata, links and anchors, source references, reachability, prerequisite cycles, learning-path order, generated complexity, executable examples, privacy patterns, and content structure. Application tests cover the reader, Settings data portability, filters, progress, map legend, verification digests, research proposals, deterministic exercises, 3D state math, reset, and keyboard interaction.

Repository architecture and decisions:

- [Knowledge-tree root](knowledge/README.md)
- [Concept and prerequisite map](knowledge/_meta/concept-map.md)
- [Complexity model](knowledge/_meta/complexity-model.md)
- [Validation report](knowledge/_meta/validation-report.md)
- [Release-candidate review](REVIEW.md)
- [Release instructions](INSTRUCTIONS.md)
- [Privacy](PRIVACY.md), [security](SECURITY.md), and [contributing](CONTRIBUTING.md)
- [License](LICENSE) and [dependency licensing](LICENSING.md)
- [Funding plan](FUNDING.md)
- [Future roadmap suggestions](ROADMAP_SUGGESTIONS.md)

Report product bugs through Settings in the application or the structured [GitHub issue form](https://github.com/testedwonder/dualrail/issues/new?template=bug-report.yml). Submit source and content corrections through the Research proposal queue or a focused GitHub issue.

## Current Boundaries

- The application is local-first and requires no paid API or subscription.
- Personal notes and ratings stay in browser storage unless explicitly exported.
- Technical pages remain `draft` unless their declared evidence and checks justify `verified`.
- Unsupported algorithms and project internals remain excluded until authoritative sources or repositories are available.
- Density matrices, generalized measurements, open-system dynamics, and device-specific pulse physics remain outside the current foundation scope.
- Circuit-composer, Ariadion, accessibility-mode, native app-store packaging, naming, marketing, and database accounts remain separate future batches.

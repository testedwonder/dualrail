---
title: Dual Rail from Notation to Gates
kind: index
status: draft
prerequisites: []
source_files: []
learning_path: [topics/circuit-qed/concepts/superconducting-circuit-stack.md, topics/mathematics-and-quantum-foundations/fundamentals/complex-numbers-and-phase.md, topics/mathematics-and-quantum-foundations/fundamentals/vectors-bases-and-inner-products.md, topics/mathematics-and-quantum-foundations/fundamentals/matrices-and-linear-operators.md, topics/mathematics-and-quantum-foundations/fundamentals/eigenvalues-and-eigenvectors.md, topics/mathematics-and-quantum-foundations/fundamentals/probability-and-measurement-statistics.md, topics/mathematics-and-quantum-foundations/concepts/quantum-states-and-bra-ket-notation.md, topics/mathematics-and-quantum-foundations/concepts/quantum-operators-observables-and-expectation-values.md, topics/mathematics-and-quantum-foundations/concepts/quantum-measurement-and-born-rule.md, topics/mathematics-and-quantum-foundations/concepts/unitary-evolution-and-quantum-gates.md, topics/mathematics-and-quantum-foundations/concepts/oscillators-quantization-and-number-states.md, topics/dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md, topics/circuit-qed/concepts/transmons-and-anharmonicity.md, topics/circuit-qed/concepts/microwave-cavity.md, topics/dual-rail-qubits/concepts/code-space.md, topics/circuit-qed/concepts/circuit-qed-and-dispersive-interaction.md, topics/dual-rail-qubits/concepts/dual-rail-encoding.md, topics/circuit-qed/concepts/beamsplitter-and-parametric-drive.md, topics/circuit-qed/concepts/coherence-times.md, topics/circuit-qed/concepts/readout-chain-and-iq-data.md, topics/dual-rail-qubits/concepts/photon-loss-and-vacuum.md, topics/dual-rail-qubits/concepts/leakage-and-erasure.md, topics/dual-rail-qubits/concepts/pauli-errors-and-error-hierarchy.md, topics/dual-rail-qubits/concepts/detection-correction-and-postselection.md, topics/error-aware-gates/concepts/single-qubit-dual-rail-control.md, topics/error-aware-gates/concepts/controlled-z-gate.md, topics/error-aware-gates/algorithms/swap-wait-swap-cz.md, topics/error-aware-gates/concepts/spam.md, topics/error-aware-gates/concepts/quantum-state-tomography.md, topics/error-aware-gates/concepts/randomized-benchmarking.md, topics/error-aware-gates/algorithms/logical-measurement-with-erasure-detection.md, topics/error-aware-gates/concepts/control-target-asymmetry.md, topics/error-aware-gates/concepts/no-jump-backaction.md, topics/error-aware-gates/concepts/leakage-propagation.md, topics/dual-rail-qubits/examples/loss-to-vacuum.md, topics/error-aware-gates/examples/repeated-cz-experiment.md]
---

# Dual rail from notation to gates

This path starts with the required mathematics, state, measurement, and oscillator foundations alongside physical components, then builds the encoding, loss semantics, control interactions, measurement, and two-qubit gate behavior in prerequisite order.

Use the `learning_path` metadata as the machine-readable order. The human checkpoints are:

1. Explain `|1,0>`, `|0,1>`, and `|0,0>` without calling vacuum logical zero.
2. Distinguish leakage, erasure, detection, correction, and postselection.
3. Explain beamsplitter exchange and dispersive phase in plain language.
4. Describe SWS as swap, conditional phase, and swap back.
5. Explain why control-target asymmetry and leakage propagation must survive software abstraction.
6. Interpret the repeated-CZ result as an observation with unresolved causes.

Return to the [root map](../README.md).

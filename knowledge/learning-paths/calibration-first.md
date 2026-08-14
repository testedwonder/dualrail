---
title: Calibration from First Principles
kind: index
status: draft
prerequisites: []
source_files: []
learning_path: [topics/mathematics-and-quantum-foundations/fundamentals/complex-numbers-and-phase.md, topics/mathematics-and-quantum-foundations/fundamentals/vectors-bases-and-inner-products.md, topics/mathematics-and-quantum-foundations/fundamentals/matrices-and-linear-operators.md, topics/mathematics-and-quantum-foundations/fundamentals/eigenvalues-and-eigenvectors.md, topics/mathematics-and-quantum-foundations/fundamentals/probability-and-measurement-statistics.md, topics/mathematics-and-quantum-foundations/concepts/quantum-states-and-bra-ket-notation.md, topics/mathematics-and-quantum-foundations/concepts/quantum-operators-observables-and-expectation-values.md, topics/mathematics-and-quantum-foundations/concepts/quantum-measurement-and-born-rule.md, topics/mathematics-and-quantum-foundations/concepts/unitary-evolution-and-quantum-gates.md, topics/calibration-systems/fundamentals/from-gates-to-calibration.md, topics/calibration-systems/concepts/calibration-record.md, topics/calibration-systems/concepts/calibration-validity.md, topics/calibration-systems/concepts/calibration-dependencies.md, topics/calibration-systems/examples/dependency-invalidation.md, topics/calibration-systems/concepts/stale-parameter-vs-changing-device.md, topics/calibration-systems/algorithms/diagnose-calibration-drift.md]
---

# Calibration from first principles

This route assumes software literacy and basic arithmetic but no quantum-computing or hardware-calibration background. Its machine-readable order now includes the mathematics, state, measurement, and gate prerequisites before calibration.

1. Follow [Foundations for quantum states and calibration](foundations-to-quantum-systems.md) through unitary gates and quantum measurement.
2. [From gates to calibration](../topics/calibration-systems/fundamentals/from-gates-to-calibration.md) — connect an abstract operation to physical control settings.
3. [Calibration record](../topics/calibration-systems/concepts/calibration-record.md) — learn why a number alone cannot carry scientific trust.
4. [Calibration validity](../topics/calibration-systems/concepts/calibration-validity.md) — make “safe to use” conditional and scoped.
5. [Calibration dependencies](../topics/calibration-systems/concepts/calibration-dependencies.md) — represent which results assume which parents.
6. [Dependency invalidation example](../topics/calibration-systems/examples/dependency-invalidation.md) — run a small graph example and inspect the stale descendants.
7. [Stale parameter versus changing device](../topics/calibration-systems/concepts/stale-parameter-vs-changing-device.md) — separate old information from a target that keeps moving.
8. [Diagnose calibration drift](../topics/calibration-systems/algorithms/diagnose-calibration-drift.md) — combine lineage, time-resolved monitors, and controlled intervention.

## Completion check

You are ready to leave the pilot when you can answer these without using “the number is old” as the whole explanation:

1. Why can the same failed gate behavior come from stale state or changing hardware?
2. Which fields let an older experiment reconstruct the calibration state it used?
3. Why does a dependency graph catch known invalidation but not unknown drift?
4. What observation would make one fresh recalibration an inadequate fix?

Return to the [root map](../README.md) or inspect the [topic references](../topics/calibration-systems/references.md).

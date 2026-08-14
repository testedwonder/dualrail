---
title: Calibration from First Principles
kind: index
status: draft
prerequisites: []
source_files: []
learning_path: [topics/calibration-systems/fundamentals/from-gates-to-calibration.md, topics/calibration-systems/concepts/calibration-record.md, topics/calibration-systems/concepts/calibration-validity.md, topics/calibration-systems/concepts/calibration-dependencies.md, topics/calibration-systems/examples/dependency-invalidation.md, topics/calibration-systems/concepts/stale-parameter-vs-changing-device.md, topics/calibration-systems/algorithms/diagnose-calibration-drift.md]
---

# Calibration from first principles

This route assumes software literacy but no quantum-computing or hardware-calibration background. Follow it in order; each page names what it assumes.

1. [From gates to calibration](../topics/calibration-systems/fundamentals/from-gates-to-calibration.md) — connect an abstract operation to physical control settings.
2. [Calibration record](../topics/calibration-systems/concepts/calibration-record.md) — learn why a number alone cannot carry scientific trust.
3. [Calibration validity](../topics/calibration-systems/concepts/calibration-validity.md) — make “safe to use” conditional and scoped.
4. [Calibration dependencies](../topics/calibration-systems/concepts/calibration-dependencies.md) — represent which results assume which parents.
5. [Dependency invalidation example](../topics/calibration-systems/examples/dependency-invalidation.md) — run a small graph example and inspect the stale descendants.
6. [Stale parameter versus changing device](../topics/calibration-systems/concepts/stale-parameter-vs-changing-device.md) — separate old information from a target that keeps moving.
7. [Diagnose calibration drift](../topics/calibration-systems/algorithms/diagnose-calibration-drift.md) — combine lineage, time-resolved monitors, and controlled intervention.

## Completion check

You are ready to leave the pilot when you can answer these without using “the number is old” as the whole explanation:

1. Why can the same failed gate behavior come from stale state or changing hardware?
2. Which fields let an older experiment reconstruct the calibration state it used?
3. Why does a dependency graph catch known invalidation but not unknown drift?
4. What observation would make one fresh recalibration an inadequate fix?

Return to the [root map](../README.md) or inspect the [topic references](../topics/calibration-systems/references.md).

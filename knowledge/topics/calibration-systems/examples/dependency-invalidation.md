---
title: Dependency Invalidation Example
kind: example
status: verified
prerequisites: [topics/calibration-systems/concepts/calibration-dependencies.md]
source_files: [base/DWave_Application_and_Study_Materials.md]
executable_examples: [topics/calibration-systems/examples/calibration_graph.py]
---

# Dependency invalidation example

Parent: [Calibration systems](../README.md)

Prerequisite: [Calibration dependencies](../concepts/calibration-dependencies.md)

Next: [Stale parameter versus changing device](../concepts/stale-parameter-vs-changing-device.md)

## Purpose

Show, with a small deterministic program, why changing one parent must invalidate indirect descendants as well as direct children.

**Source-backed rule:** The corpus says that a coupler-frequency change can invalidate swap-pulse and wait-time settings, then the CZ calibration, then its benchmark. [C3, source page 16](../references.md#local-source)

**Implementation status:** The graph and traversal are a synthetic engineering interpretation. They do not represent D-Wave’s private schema or hardware.

## Inputs and output

Input:

- one changed node, `coupler-frequency`;
- a directed parent-to-child graph with fixed string identifiers.

Output:

- each reachable descendant exactly once;
- parents before their descendants;
- no unrelated node.

The example uses no random values, network access, dependencies, or device data.

## Starting graph

```text
coupler-frequency
  +-- swap-pulse ----+
  +-- wait-time -----+--> cz-calibration --> gate-benchmark
```

## Run it

The executable source is [calibration_graph.py](calibration_graph.py). The repository validator runs this file with the selected Python interpreter and fails if an assertion or process fails.

```powershell
python knowledge/topics/calibration-systems/examples/calibration_graph.py
```

Expected output:

```text
changed: coupler-frequency
stale: swap-pulse, wait-time, cz-calibration, gate-benchmark
```

## Walk through the result

1. `coupler-frequency` directly reaches `swap-pulse` and `wait-time`.
2. Each of those reaches `cz-calibration`; the visited set emits it only once.
3. `cz-calibration` reaches `gate-benchmark`.
4. The changed parent itself is not listed as a descendant.

The script also asserts two edge cases:

- changing `cz-calibration` invalidates only `gate-benchmark`;
- changing the leaf `gate-benchmark` invalidates nothing else.

## Non-example

An implementation that returns only `swap-pulse` and `wait-time` misses transitive descendants. It could leave `cz-calibration` and `gate-benchmark` marked valid even though their supporting assumptions changed.

## Limits

- The traversal marks evidence stale; it does not predict how much a physical value moved.
- The graph is assumed acyclic. Joint or cyclic calibration procedures need a different representation.
- A known dependency graph cannot detect an unmodeled physical change.
- Real promotion also needs version identity, concurrency control, atomic state changes, and rollback.

## Self-check

1. Why does the traversal need a visited set when two parents share a child?
2. What should happen if only `wait-time` changes?
3. Why is invalidation not the same as proving that every descendant’s numeric value changed?
4. Which physical failures remain invisible to this graph?

## Sources and status

- Concept source: [Repeated-CZ fundamentals, source page 16](../../../../base/DWave_Application_and_Study_Materials.md#4-repeated-cz-calibration-question-fundamentals).
- Code: [calibration_graph.py](calibration_graph.py).
- Status: `verified`. The validator checks metadata, links, source provenance, prerequisite order, and successful execution of the deterministic assertions. This status applies to the example behavior, not to a real hardware implementation.

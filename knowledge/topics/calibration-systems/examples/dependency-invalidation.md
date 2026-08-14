---
title: Dependency Invalidation Example
kind: example
status: verified
prerequisites: [topics/calibration-systems/concepts/calibration-dependencies.md]
next_steps: [topics/calibration-systems/concepts/stale-parameter-vs-changing-device.md, topics/quantum-control-software/concepts/promotion-and-rollback.md]
related: [topics/quantum-control-software/concepts/reliable-orchestration.md, topics/calibration-systems/concepts/calibration-validity.md]
source_files: [knowledge/topics/calibration-systems/references.md]
executable_examples: [topics/calibration-systems/examples/calibration_graph.py]
complexity_depth: 9
complexity_prerequisite_count: 1
complexity_score: 6.04
complexity_wavelength_nm: 507
complexity_frequency_thz: 591.3
complexity_color: "#00ff93"
understanding: 0
---

# Dependency invalidation example

<!-- study-status:start -->
<div class="study-status" data-complexity="6.04" data-wavelength-nm="507">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#00ff93;color:#111111;">Complexity 6.04/10 | 507 nm | 591.3 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Dependency Invalidation Example"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Calibration Dependencies](../concepts/calibration-dependencies.md)
- **Next steps:** [Stale Parameter Versus Changing Device](../concepts/stale-parameter-vs-changing-device.md), [Promotion and Rollback](../../quantum-control-software/concepts/promotion-and-rollback.md)
- **Related:** [Reliable Orchestration](../../quantum-control-software/concepts/reliable-orchestration.md), [Calibration Validity](../concepts/calibration-validity.md)

<!-- learning-navigation:end -->

Parent: [Calibration systems](../README.md)

Prerequisite: [Calibration dependencies](../concepts/calibration-dependencies.md)

Next: [Stale parameter versus changing device](../concepts/stale-parameter-vs-changing-device.md)

## Purpose

Show, with a small deterministic program, why changing one parent must invalidate indirect descendants as well as direct children.

**Synthetic rule:** this educational graph models a coupler-frequency change invalidating swap-pulse and wait-time settings, then the CZ calibration and benchmark. [Claim map](../references.md#claim-map)

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

- Concept source: [public claim map](../references.md#claim-map).
- Code: [calibration_graph.py](calibration_graph.py).
- Status: `verified`. The validator checks metadata, links, source provenance, prerequisite order, and successful execution of the deterministic assertions. This status applies to the example behavior, not to a real hardware implementation.

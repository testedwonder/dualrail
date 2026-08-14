---
title: Diagnose Calibration Drift
kind: algorithm
status: draft
prerequisites: [topics/calibration-systems/concepts/stale-parameter-vs-changing-device.md]
next_steps: [topics/quantum-control-software/concepts/observability.md, topics/calibration-systems/references.md]
related: [topics/error-aware-gates/examples/repeated-cz-experiment.md, topics/quantum-control-software/concepts/acquisition-and-provenance.md]
source_files: [knowledge/topics/calibration-systems/references.md]
complexity_depth: 10
complexity_prerequisite_count: 1
complexity_score: 6.65
complexity_wavelength_nm: 487
complexity_frequency_thz: 615.6
complexity_color: "#00ecff"
understanding: 0
---

# Diagnose calibration drift

<!-- study-status:start -->
<div class="study-status" data-complexity="6.65" data-wavelength-nm="487">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#00ecff;color:#111111;">Complexity 6.65/10 | 487 nm | 615.6 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Diagnose Calibration Drift"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Stale Parameter Versus Changing Device](../concepts/stale-parameter-vs-changing-device.md)
- **Next steps:** [Two-Plane Observability](../../quantum-control-software/concepts/observability.md), [Calibration Systems References](../references.md)
- **Related:** [Repeated-CZ Experiment](../../error-aware-gates/examples/repeated-cz-experiment.md), [Acquisition and Provenance](../../quantum-control-software/concepts/acquisition-and-provenance.md)

<!-- learning-navigation:end -->

Parent: [Calibration systems](../README.md)

Prerequisite: [Stale parameter versus changing device](../concepts/stale-parameter-vs-changing-device.md)

Related: [Calibration dependencies](../concepts/calibration-dependencies.md)

Next: [Review evidence boundaries and open questions](../references.md)

## Problem

A calibrated operation performs worse, possibly after a long sequence. Determine which observations are more consistent with:

1. a stale selected parameter;
2. a device or control reference changing during the run;
3. both in sequence; or
4. an alternative explanation that current evidence does not eliminate.

The procedure produces a bounded diagnosis and next test. It does not turn correlation into proof.

## Inputs

| Input | Shape and units | Purpose |
| --- | --- | --- |
| Experiment identity | Immutable IDs and version strings | Fix device, software, waveform, analysis, and calibration graph. |
| Shot records | Time-ordered rows; timestamps plus raw and classified outcomes | Preserve variation that an aggregate would erase. |
| Direct or proxy monitor | Time series in its physical unit, such as hertz for frequency | Test whether the target moved during the interval. |
| Before/after checks | Comparable measurements with uncertainty | Detect change around the stressed run. |
| Calibration records | Versioned nodes with parents, timestamps, units, and status | Test whether software selected old or incompatible state. |
| Gate or operation metric | Value, uncertainty, sequence depth, and evaluation method | Quantify the observed degradation. |
| Environmental and service telemetry | Time-aligned series in their native units | Check shared references, temperature, load, errors, and other confounders. |

## Outputs

- an evidence bundle containing the exact inputs and transformations;
- a classification of `stale-supported`, `changing-supported`, `both-supported`, `alternative-supported`, or `inconclusive`;
- the timescale on which any detected variation occurs;
- affected run and calibration IDs;
- the smallest next intervention that can separate remaining hypotheses.

These labels report support, not certainty.

## Assumptions and preconditions

- Clocks are synchronized closely enough for the timescale being tested.
- Raw or minimally processed observations retain order and timestamps.
- The selected [calibration graph](../concepts/calibration-dependencies.md) can be reconstructed.
- Before, interleaved, and after monitors are sensitive to the suspected change.
- The stress sequence and monitor do not silently alter one another beyond declared effects.
- Analysis versions and classification thresholds are fixed or compared explicitly.

If one of these is false, report the gap instead of forcing a classification.

## Invariants

1. Do not overwrite raw observations.
2. Do not average across a detected state boundary without labeling the segments.
3. Change one diagnostic factor at a time where possible.
4. Preserve the last-known-good calibration while testing a candidate.
5. Keep observation, hypothesis, intervention, and conclusion as separate fields.
6. A failed monitor or missing lineage cannot count as evidence that the device was stable.

## Procedure

This procedure is an explanatory eight-step diagnostic assembled from the topic's public system evidence and software boundaries. [Claim map](../references.md#claim-map)

1. **Freeze identity.** Capture device, software, waveform, analysis, calibration graph, clocks, and relevant environment.
2. **Measure before.** Run a direct check, such as spectroscopy, or the closest validated proxy; run a gate canary under the same captured state.
3. **Run the stressed experiment.** Preserve shot order, timestamps, depth, and all assignment categories.
4. **Interleave monitors.** Re-estimate the suspected physical quantity or proxy during the run often enough to resolve the hypothesized timescale.
5. **Measure after.** Repeat the initial checks without an undeclared software or control change.
6. **Compare time series and lineage.** Ask whether the selected record was old, whether the monitored target moved, and whether graph invalidation worked.
7. **Change one factor.** Load a fresh candidate while holding other conditions fixed where possible, then repeat the same checks without destroying the prior default.
8. **Test alternatives.** Vary elapsed time, sequence depth, shot order, idle time, pulse power, or analysis version one at a time to expose confounding explanations.

## Minimal pseudocode

This is pseudocode, not a hardware API.

```text
snapshot = capture_identity_and_calibration_graph()
before = measure_monitor_and_canary(snapshot)

stressed = run_with_timestamps(snapshot, interleave_monitor=true)
after = measure_monitor_and_canary(snapshot)

lineage_mismatch = selected_record_does_not_match_current_graph(snapshot)
temporal_motion = monitor_changes_beyond_declared_uncertainty(
    before, stressed.monitors, after
)

fresh = create_candidate_calibration_without_overwriting_default()
repeat = rerun_same_protocol(fresh)

if lineage_mismatch and temporal_motion:
    result = both_supported
else if lineage_mismatch and repeat.stays_within_limits:
    result = stale_supported
else if temporal_motion and repeat.fails_on_same_timescale:
    result = changing_supported
else:
    result = inconclusive

return evidence_bundle(result, snapshot, before, stressed, after, repeat)
```

Thresholds such as “beyond declared uncertainty” must be specified before inspecting the result or clearly labeled exploratory.

## Small worked example

**Synthetic evidence:**

- The run selected coupler-frequency record `v17`.
- The graph’s promoted parent before the run was `v18`.
- A direct frequency monitor remains stable around the `v18` estimate before, during, and after the run.
- Rebuilding descendants from `v18` restores gate-canary behavior, which remains stable across the same elapsed time and sequence depths.

**Interpretation:** This pattern supports stale selection: lineage proves an incompatible record was used, direct evidence does not show ongoing motion, and one coherent refresh remains good.

**Counterexample:** If the monitor wanders during the rerun and the fresh candidate fails again on the same timescale, stale selection alone is inadequate. Ongoing device, reference, or environmental change becomes better supported.

Neither case identifies the microscopic cause without additional measurements.

## Cost

**Engineering interpretation:** For `N` shot records and `M` monitor samples, preserving and scanning the time series takes `O(N + M)` storage and analysis work. Hardware time can dominate because before/after checks, interleaved monitors, and controlled reruns consume device access. Increasing monitor frequency improves time resolution but can perturb or slow the experiment.

## Failure modes and counterexamples

- **Unsynchronized clocks:** Apparent lag or lead can reverse causal order.
- **Destructive aggregation:** Only averages remain, so temporal motion cannot be recovered.
- **Insensitive proxy:** A stable monitor is taken as proof even though it does not track the suspected degree of freedom.
- **Several changes at once:** Fresh calibration also changes code or analysis, so improvement has no isolated cause.
- **Depth/time confounding:** Longer sequences also take longer, making coherent depth effects look temporal.
- **Shared motion:** Many components move together because a reference or environment changed; blaming one coupler is premature.
- **Selection bias:** Failed shots are removed differently across software versions.
- **Intervention effect:** Monitoring or recalibration itself changes temperature or state.

## Tests and edge cases

1. Replay a known stale graph against stable synthetic monitor data; expect `stale-supported`.
2. Replay a fresh graph with a drifting monitor; expect `changing-supported`.
3. Combine stale selection and ongoing motion; expect `both-supported` rather than an arbitrary winner.
4. Remove timestamps or monitor sensitivity evidence; expect `inconclusive`.
5. Hold elapsed time fixed while varying depth, then hold depth fixed while varying idle time.
6. Change only the analysis version to detect classifier or schema effects.
7. Shuffle shot order as a negative control; a true temporal pattern should be weakened or destroyed.

## Self-check

1. Why must shot order survive the acquisition pipeline?
2. What does a fresh calibration that fails again on the same timescale suggest?
3. How would you separate sequence depth from elapsed time?
4. Why is a stable proxy not automatically proof of a stable device?
5. Which output should be used when lineage or monitor evidence is missing?

## Sources and status

- Main procedure: [public claim map](../references.md#claim-map).
- Inputs and failure patterns: same embedded source, pages 6, 11–19.
- Status: `draft`. The procedure is source-backed and operationally elaborated; it has not been run on real hardware data in this repository.

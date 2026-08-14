---
title: Stale Parameter Versus Changing Device
kind: concept
status: draft
prerequisites: [topics/calibration-systems/concepts/calibration-validity.md, topics/calibration-systems/concepts/calibration-dependencies.md]
next_steps: [topics/calibration-systems/algorithms/diagnose-calibration-drift.md, topics/quantum-control-software/concepts/observability.md]
related: [topics/error-aware-gates/examples/repeated-cz-experiment.md, topics/quantum-control-software/concepts/acquisition-and-provenance.md]
source_files: [knowledge/topics/calibration-systems/references.md]
complexity_depth: 9
complexity_prerequisite_count: 2
complexity_score: 6.54
complexity_wavelength_nm: 491
complexity_frequency_thz: 610.6
complexity_color: "#00fff9"
understanding: 0
---

# Stale parameter versus changing device

<!-- study-status:start -->
<div class="study-status" data-complexity="6.54" data-wavelength-nm="491">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#00fff9;color:#111111;">Complexity 6.54/10 | 491 nm | 610.6 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Stale Parameter Versus Changing Device"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Calibration Validity](calibration-validity.md), [Calibration Dependencies](calibration-dependencies.md)
- **Next steps:** [Diagnose Calibration Drift](../algorithms/diagnose-calibration-drift.md), [Two-Plane Observability](../../quantum-control-software/concepts/observability.md)
- **Related:** [Repeated-CZ Experiment](../../error-aware-gates/examples/repeated-cz-experiment.md), [Acquisition and Provenance](../../quantum-control-software/concepts/acquisition-and-provenance.md)

<!-- learning-navigation:end -->

Parent: [Calibration systems](../README.md)

Prerequisites: [Calibration validity](calibration-validity.md) and [Calibration dependencies](calibration-dependencies.md)

Next: [Diagnose calibration drift](../algorithms/diagnose-calibration-drift.md)

## Plain-language meaning

Two different failures can make a calibrated operation look mistuned:

- **Stale parameter:** Software is using information that no longer matches a device which may now be stable at a different value.
- **Changing device:** The physical target moves on the timescale of the experiment, so one fixed value does not remain correct.

The visible symptom can be the same. The evidence and remedy are not.

## Why it matters

Refreshing an old record can fix stale selection. It cannot stabilize a target that keeps moving. Conversely, a hardware investigation is wasted if the device is stable and software simply loaded an obsolete graph version.

## Compare the two hypotheses

**Diagnostic distinction:** [Claim map](../references.md#claim-map)

| Question | Stale parameter | Changing device |
| --- | --- | --- |
| What is wrong? | The selected record describes an earlier state. | The target varies during or between measurements. |
| Can a direct monitor be stable now? | Yes, at a new value. | Not on the relevant timescale. |
| What does one fresh calibration do? | It may restore performance and remain good. | It may help briefly, then become wrong again. |
| What evidence is central? | Record age, graph version, deployment, and selection lineage | Time-ordered device or proxy measurements |
| Likely response | Refresh, invalidate descendants, revalidate, audit affected runs | Characterize timescale, segment or stop runs, adapt controls, inspect environment or hardware |

## How one can lead to the other

A physical change can make a once-correct record stale. Weak invalidation can then allow that record to remain active. “Stale” describes the relationship between stored information and present state; it does not name the physical cause of the mismatch.

**Explanation:** The useful diagnostic question is not “software or physics?” as if only one can be involved. Ask for the sequence of events:

1. Did the physical target change?
2. Was that change observed?
3. Did the system revoke affected records?
4. Did a run still select an incompatible graph?
5. Does the target now remain stable after refresh?

## Timescale is part of the definition

**Explanatory model:** drift across weeks, hours, minutes, and shots can require different responses. [Claim map](../references.md#claim-map)

- Across weeks, scheduled qualification and trend monitoring may be enough.
- Across hours, validity windows and canaries may catch aging records.
- Across minutes, a long experiment can mix distinct device states.
- Across shots, an average can hide broad or multi-modal behavior.

“Stable” therefore always means stable relative to a named observation and use interval.

## Analogy: piano and automatic player

**Analogy from the source:** If a piano was retuned but the automatic player still uses yesterday’s instruction, the instruction is stale. If the pitch wanders as temperature changes, the instrument itself is moving.

**Where it stops:** A real control system can have coupled parameters, shared references, classifiers, stochastic observations, and software-version effects. The analogy separates hypotheses; it does not diagnose the machine.

## Examples and non-examples

**Stale example:** The selected record points to yesterday’s frequency. A direct monitor is stable at a new frequency; loading a fresh graph restores performance and it stays restored.

**Changing-device example:** A fresh calibration initially passes, but interleaved frequency estimates wander and gate behavior fails again on the same timescale.

**Alternative explanation:** Performance depends on gate depth but not elapsed time. Coherent accumulation or a model mismatch may fit better than temporal drift.

**Non-example:** “The fit changed, therefore the device drifted.” Fit movement can come from noise, model choice, software, analysis, or changed inputs.

## Failure modes and misconceptions

- Averaging destroys shot order before drift analysis.
- Timestamps use unsynchronized clocks.
- A proxy monitor is treated as direct measurement without checking sensitivity.
- Recalibration changes several controls at once, so the intervention cannot isolate a cause.
- A stable average hides switching between two states.
- The diagnosis forces a choice between stale and changing even when both occurred.

## Self-check

1. What observation would support stale selection over ongoing motion?
2. Why can a physical change and a software invalidation failure coexist?
3. How can averaging erase the evidence needed for diagnosis?
4. Which pattern suggests coherent accumulation rather than elapsed-time drift?

## Sources and status

- Main evidence: [public claim map](../references.md#claim-map).
- Unresolved public claim: calibration drift and coupler-frequency fluctuation remain proposed causes of long repeated-CZ degradation, not established causes.
- Status: `draft`. The distinction is source-backed; no diagnosis of the reported device is claimed.

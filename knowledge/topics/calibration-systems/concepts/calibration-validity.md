---
title: Calibration Validity
kind: concept
status: draft
prerequisites: [topics/calibration-systems/concepts/calibration-record.md]
next_steps: [topics/calibration-systems/concepts/calibration-dependencies.md, topics/calibration-systems/concepts/stale-parameter-vs-changing-device.md]
related: [topics/quantum-control-software/concepts/promotion-and-rollback.md, topics/quantum-control-software/concepts/observability.md]
source_files: [knowledge/topics/calibration-systems/references.md]
complexity_depth: 8
complexity_prerequisite_count: 1
complexity_score: 5.42
complexity_wavelength_nm: 527
complexity_frequency_thz: 568.9
complexity_color: "#00ff13"
understanding: 0
---

# Calibration validity

<!-- study-status:start -->
<div class="study-status" data-complexity="5.42" data-wavelength-nm="527">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#00ff13;color:#111111;">Complexity 5.42/10 | 527 nm | 568.9 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Calibration Validity"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** [Calibration Record](calibration-record.md)
- **Next steps:** [Calibration Dependencies](calibration-dependencies.md), [Stale Parameter Versus Changing Device](stale-parameter-vs-changing-device.md)
- **Related:** [Promotion and Rollback](../../quantum-control-software/concepts/promotion-and-rollback.md), [Two-Plane Observability](../../quantum-control-software/concepts/observability.md)

<!-- learning-navigation:end -->

Parent: [Calibration systems](../README.md)

Prerequisite: [Calibration record](calibration-record.md)

Next: [Calibration dependencies](calibration-dependencies.md)

## Plain-language meaning

Calibration validity is a conditional claim: available evidence says this calibration record remains suitable for a named use under stated conditions.

Validity is not the same as existence, recency, or numerical precision. A precise value can be invalid for the current device, and the newest record can be invalid for a long-depth experiment.

## Why it matters

A physical system and its control chain can change. Software must know when to trust a record and when to withdraw that trust before an incompatible experiment uses it.

## Conditions of validity

**Reference model:** five useful validity mechanisms and a hybrid are described below. They are design options, not a claim about one deployed system. [Claim map](../references.md#claim-map)

| Mechanism | Rule | Limit |
| --- | --- | --- |
| Time-to-live | Reject the record after a fixed age. | Age may expire too early or too late. |
| Dependency-based | Reject it when a parent changes. | Unknown physical change may have no modeled parent. |
| Condition-based | Use it only within measured environmental or system ranges. | Requires reliable condition monitors. |
| Measurement-based | Keep it while a canary or health metric passes. | Monitoring consumes time and may miss unmeasured behavior. |
| Confidence-based | Keep it while estimated uncertainty or risk stays within budget. | Depends on model quality. |
| Hybrid | Combine age, dependencies, conditions, and checks. | Stronger coverage adds operational complexity. |

**Explanation:** None of these mechanisms is a universal clock that knows when physics changed. They encode different evidence. A robust policy states which evidence can grant, retain, or revoke validity.

## Precise definition

For this topic, validity is a predicate over a calibration record, an intended use, and current observed state:

```text
valid(record, use, current_state) -> true | false | unknown
```

Returning `unknown` is important when required evidence is missing. Treating missing telemetry as “still valid” would turn absence of evidence into permission.

## Scope questions

Before calling a record valid, name:

- the device, channel, and gate orientation;
- the pulse or operation family;
- the operating point and relevant monitored conditions;
- the allowed age and parent versions;
- the validation metric and threshold;
- whether the use is exploratory, short-depth qualification, or a production default.

**Evaluation question:** does validity demonstrated by short benchmark sequences extend to long-depth sequences? [Claim map](../references.md#claim-map)

## Examples and non-examples

**Example:** A CZ calibration remains usable only while all parent records match, a direct canary remains inside its threshold, and the experiment’s sequence-depth scope is covered.

**Non-example:** “Use whichever record has the newest timestamp.” Recency does not prove compatible parents, device state, or use scope.

**Non-example:** A record passes a short sequence once, so the system silently treats it as valid for any repetition depth.

## Relationships

- [Calibration dependencies](calibration-dependencies.md) provide one reason validity can be revoked.
- [Stale parameter versus changing device](stale-parameter-vs-changing-device.md) distinguishes a record that needs refresh from a target that will not remain valid.
- [Diagnose calibration drift](../algorithms/diagnose-calibration-drift.md) gathers evidence for that distinction.

## Failure modes

- Validity has no named use or physical scope.
- Missing monitors default to pass.
- A parent update does not revoke descendants.
- Thresholds are changed without versioning.
- Validation data are taken from the same fit used to choose the parameter.
- A long-running job never checks whether its captured device state changed.

## Self-check

1. Why can a newer calibration be less suitable than an older one?
2. Which validity mechanism responds to an unmodeled physical change?
3. Why should missing evidence sometimes produce `unknown` rather than `true`?
4. What extra claim is made when short-depth validity is extended to long sequences?

## Sources and status

- Main evidence: [public claim map](../references.md#claim-map).
- Status: `draft`. The validity models are source-backed; no private implementation or live policy is claimed.

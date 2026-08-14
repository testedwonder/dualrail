---
title: Probability and Measurement Statistics
kind: definition
status: draft
prerequisites: []
next_steps: [topics/mathematics-and-quantum-foundations/concepts/quantum-measurement-and-born-rule.md]
related: [topics/mathematics-and-quantum-foundations/concepts/quantum-states-and-bra-ket-notation.md]
source_files: [knowledge/topics/mathematics-and-quantum-foundations/references.md]
complexity_depth: 0
complexity_prerequisite_count: 0
complexity_score: 0.0
complexity_wavelength_nm: 700
complexity_frequency_thz: 428.3
complexity_color: "#ff0000"
understanding: 0
---

# Probability and measurement statistics

<!-- study-status:start -->
<div class="study-status" data-complexity="0.0" data-wavelength-nm="700">
  <span style="display:inline-block;padding:0.2rem 0.45rem;border:1px solid #333;background:#ff0000;color:#ffffff;">Complexity 0.0/10 | 700 nm | 428.3 THz</span>
  <label>Understanding <input type="number" min="0" max="10" value="0" aria-label="Understanding rating for Probability and Measurement Statistics"> / 10</label>
</div>
<!-- study-status:end -->

<!-- learning-navigation:start -->
## Learning navigation

- **Prerequisites:** None
- **Next steps:** [Quantum Measurement and the Born Rule](../concepts/quantum-measurement-and-born-rule.md)
- **Related:** [Quantum States and Bra-Ket Notation](../concepts/quantum-states-and-bra-ket-notation.md)

<!-- learning-navigation:end -->

## Plain-language meaning

Probability describes a distribution over possible outcomes before a trial. An observed frequency describes what happened in a finite batch of trials. The two are related but not identical.

## Why it matters

A quantum state predicts outcome probabilities. Experiments estimate those probabilities from repeated preparations and measurements, so finite-sample fluctuation must not be mistaken for a changed state or failed device.

## Outcomes, events, and distributions

An outcome is one result. A sample space lists all possible outcomes. An event is a set of outcomes. A probability distribution assigns nonnegative values whose total is one.

For a binary outcome,

$$P(0)=p,\qquad P(1)=1-p.$$

After $N$ repetitions, if outcome $0$ occurs $n_0$ times, its observed frequency is $f_0=n_0/N$.

**Source-backed fact:** OpenStax distinguishes outcomes, sample spaces, events, probabilities, and long-run relative frequencies. It explicitly notes that a small number of trials need not match the theoretical probability. [public claim map](../references.md#claim-map).

## Worked example

If $p=0.75$ and a deterministic demonstration produces 14 zeros in 20 trials, the observed frequency is $0.70$. That difference alone does not prove the probability changed. More trials usually reduce typical relative fluctuation, though no finite batch is guaranteed to match exactly.

## Expectation as a weighted average

If outcome values are $x_k$ with probabilities $p_k$, the expectation is

$$E[X]=\sum_k p_kx_k.$$

It predicts the long-run average, not necessarily an outcome that one trial can return.

## Common misconceptions

- Probability $0.5$ does not require every pair of trials to split evenly.
- An expectation value need not be one of the possible single-trial values.
- More samples reduce uncertainty; they do not remove model bias or measurement error.

## Self-check

1. How does a probability differ from an observed frequency?
2. Why can 20 trials disagree noticeably with a theoretical distribution?
3. What does an expectation value summarize?

## Sources and status

Source-backed by [public claim map](../references.md#claim-map). Status: `draft`.

Parent: [Mathematics and quantum foundations](../README.md)

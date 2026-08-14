---
title: Complexity and Understanding Model
kind: index
status: verified
prerequisites: []
source_files: []
---

# Complexity and understanding model

## Purpose

Each concept, definition, algorithm, and example carries a derived complexity value and a manual understanding rating. Complexity comes from graph structure; understanding belongs to the learner.

## Inputs

For page $i$:

- $d_i$: longest prerequisite-path depth, with root content pages at depth $0$;
- $p_i$: number of direct prerequisites;
- $D$: maximum content-page depth in the current tree;
- $P$: maximum direct prerequisite count in the current tree.

## Complexity score

$$
C_i=10\left(0.8\frac{d_i}{D}+0.2\frac{p_i}{P}\right).
$$

When a denominator is zero, that component contributes zero. Tree depth is the determining factor because it carries 80% of the score. Direct prerequisite count adjusts complexity within similar depths.

## Visible-spectrum mapping

The score maps linearly from red at 700 nm to violet at 380 nm:

$$
\lambda_i = 700 - 320\frac{C_i}{10}\ \text{nm}.
$$

Frequency is recorded in terahertz:

$$
f_i=\frac{299{,}792.458}{\lambda_i}\ \text{THz}.
$$

The displayed hex color is interpolated through spectral anchors for red, yellow, green, cyan, blue, and violet. The exact metadata fields are:

```yaml
complexity_depth: 4
complexity_prerequisite_count: 2
complexity_score: 6.13
complexity_wavelength_nm: 504
complexity_frequency_thz: 594.8
complexity_color: "#00b2ff"
understanding: 0
```

Values above are illustrative; page values are generated from the current graph.

## Manual understanding

`understanding` is an integer from `0` to `10` edited by the learner. The generator defaults missing values to `0` and preserves valid existing values. It also mirrors the value into a visible HTML number input.

The input in a Markdown preview is not durable storage. Edit the front matter for persistence until the roadmap item 2 application provides note and rating storage.

## Commands

```powershell
python tools/update_complexity.py
python tools/update_complexity.py --check
```

The main validator fails if metadata, spectral display, prerequisite counts, or understanding controls are missing or stale.

## Status

`verified`: focused tests cover exact depth weighting, red/midpoint/violet mapping, manual-rating preservation, generated controls, and idempotence.

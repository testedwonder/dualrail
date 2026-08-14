---
title: Public Release Validation
kind: index
status: verified
prerequisites: []
source_files: []
---

# Public release validation

Date: 2026-08-14

## Release surface

Dualrail Atlas version `0.1.0` provides:

- 66 canonical study pages across seven topics;
- seven navigable topic claim maps and one central 24-source public registry;
- Library, Map, Progress, Research, and Three.js Lab views;
- five deterministic interactive foundation exercises;
- local notes, ratings, proposals, and versioned JSON portability;
- an installable offline-first PWA for desktop, Android, iOS, and iPadOS;
- structured public bug reporting and a private security-reporting policy;
- author credit and voluntary support links that never change access or issue priority.

## Enforced boundaries

- Every canonical page declares a non-empty public topic claim map in `source_files`.
- Source targets are restricted to topic `references.md` files or the central public registry.
- The application index contains exactly 66 rateable pages, seven topics, five exercises, and 24 linked public sources.
- Personal notes and ratings stay in browser storage unless the user exports them.
- No account, database, API key, paid service, analytics script, or payment script is required.
- Verification marks describe tested repository behavior and do not claim independent scientific reproduction.

## Automated gates

The release gate runs:

```powershell
python -B -m unittest discover -s tests -v
python -B tools/update_complexity.py --check
python -B tools/validate_knowledge.py
npm --prefix app run release:check
git diff --check
```

The production build also verifies launcher icons, standalone manifest metadata, deployment-relative paths, service-worker scope, and the content-hashed offline precache for both `/` and `/dualrail/`.

## Browser gates

The release candidate is exercised at desktop and `390 x 844` mobile geometry. Checks cover accessible navigation, Settings data transfer, the report dialog, public source navigation, horizontal overflow, lazy chunks, nonblank WebGL rendering, mode-label projection during orbit, and offline reload with the origin server stopped.

## Remaining limits

- The embedded corpus and MathJax keep the initial JavaScript chunk large; optional views are already split.
- Public source links and repository structure are checked, but external experiments are not independently reproduced.
- Native app-store wrappers and account synchronization are outside version `0.1.0`.
- GitHub Pages and private vulnerability reporting must be enabled after the repository becomes public.

Return to the [knowledge-tree root](../README.md).
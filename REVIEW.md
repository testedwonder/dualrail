# Release-Candidate Review

Date: 2026-08-14

## Summary

Roadmap items 1–9, 12, and 13 are implemented. Dualrail Atlas version 0.1.0 now provides:

- 66 canonical learning pages across seven topics;
- prerequisite-aware complexity and manual understanding ratings;
- library, map, progress, research, and 3D Lab views;
- local notes, settings-based import/export, and research proposals;
- five foundation exercises and one full-bleed dual-rail state lab;
- 24 public technical sources with credibility guidance;
- a public-provenance application index with inspectable topic claim maps;
- GitHub Actions CI, dependency licensing, funding, and history-scrub planning.
- an installable offline-first website/mobile PWA with path-safe GitHub Pages output;
- a guided public bug-report flow, private security boundary, and optional configured support links.

## Stabilization changes

- Added stable accessible names and `aria-current` to mobile navigation tabs.
- Added a visible red-to-violet complexity legend to the knowledge map.
- Removed the impossible map **Sources** toggle after private source documents left the app index.
- Centralized study-data import, export, progress snapshot, research export, and reset controls in Settings.
- Added clickable verification digests for the application, Research registry, and 3D Lab.
- Lazy-loaded Map, Progress, Research, and Lab views.
- Upgraded Vite from 5.4.21 to 6.4.3 and Vitest from 2.1.8 to 3.2.6.
- Reduced the initial JavaScript chunk from about 3.16 MB to about 2.97 MB while isolating Map (217 kB) and Lab (514 kB).
- Added deployment-relative mobile metadata, four launcher icons, deterministic service-worker generation, 63-URL offline precaching, and root/subpath release verification.
- Added dynamic viewport and safe-area handling for installed mobile layouts.
- Anchored Lab mode labels to world-space positions and centered orbit controls between the rails.
- Added structured GitHub bug reports, one-primary-maintainer disclosure, privacy/security/contribution policies, and owner release inputs.

## Verification results

| Check | Result |
| --- | --- |
| Application tests | 43 passed across 10 files |
| Python tests | 27 passed |
| Knowledge validator | 90 public Markdown files and 1 executable example passed |
| Complexity freshness | 0 stale pages |
| Public research registry | 24 sources; 0 blocked profiles; 0 unlinked sources |
| Public app payload | 86 navigable documents; 66 study pages; 0 forbidden matches |
| npm audit | 0 vulnerabilities |
| Production build | Passed with Vite 6.4.3 |
| PWA release output | Root and `/dualrail/` manifests, icons, base paths, and 63-URL precaches passed |
| Offline behavior | Reload and lazy Lab passed with the origin server stopped |
| Desktop/mobile browser | Passed with no page overflow or console errors |
| 3D canvas | Nonblank at 1440×836 and 390×338 |
| Diff hygiene | `git diff --check` passed |

Commands:

```powershell
python -B -m unittest discover -s tests -v
python -B tools/update_complexity.py --check
python -B tools/validate_knowledge.py
cd app
npm run check
npm audit
```

## Issues encountered

- Mobile tab labels were visually hidden without stable accessible names.
- The map retained a source-edge control after source nodes were removed.
- Data-transfer controls were split across header buttons and Progress.
- Vite/Vitest advisories included one high and one critical development-server finding.
- The initial bundle eagerly included graph and research modules.
- A search subagent could not run because the external Copilot quota was exhausted; local inspection continued instead.
- A PWA plugin path was rejected because patched Workbox required Node 20 while the Node-18 pin carried a high-severity advisory; deterministic local generation retained Node 18 and zero audit findings.
- The first Pages browser pass found a root-absolute brand icon; it now resolves through Vite's base path.
- The first offline pass found parser assets missing cache because preview responses vary by Origin; immutable precache lookup now matches by URL with `ignoreVary`.
- A concurrent local `npm ci` and build attempt locked esbuild on Windows. Four stale app dev servers were stopped and all final gates were rerun sequentially from a clean lockfile install.

All except the explicitly deferred items below were corrected.

## Remaining risks and recommendations

1. **Repository visibility:** private vulnerability reporting and Pages controls must be enabled after the repository becomes public.
2. **Remote CI/deployment:** workflows have no public result or URL until the sanitized branch is pushed and the deployment is manually dispatched.
3. **Bundle size:** the initial 2.98 MB chunk still contains the embedded corpus, Markdown renderer, and MathJax. A later optimization can partition the generated corpus or defer MathJax by document.
4. **Scientific scope:** repository validation checks provenance and structure; it does not independently reproduce every external experiment.
5. **Native/accounts:** the PWA is installable, but app-store wrappers and database-backed cross-device accounts remain separate privacy and operations decisions.
6. **Circuit composer:** the composer requires a separate vertical slice and simulator contract; do not fold it into release maintenance without an accepted architecture.

## Recommendation

Push the sanitized public root, change repository visibility to public, enable private vulnerability reporting and Pages, let CI pass, run the manual deployment, smoke-test the public URL, and only then tag `v0.1.0`.

# Licensing

This document records the project's intended licensing boundary and direct software dependencies. It is not legal advice.

## Project license

The original Dualrail Atlas software and first-party documentation are released under the [MIT License](LICENSE). MIT permits private use, modification, distribution, sublicensing, and commercial use while preserving the copyright and permission notice.

The project license does not relicense:

- third-party packages, fonts, or artwork;
- externally linked papers, courses, documentation, or websites;
- archived source material whose rights belong to its original authors or publishers;
- trademarks, service marks, or product names.

The application icon was supplied by the project owner, who confirmed permission to redistribute it and its resized launcher variants for this release.

## Direct JavaScript dependencies

Versions below reflect the lockfile installed on 2026-08-14.

| Package | Version | License |
| --- | ---: | --- |
| `@dagrejs/dagre` | 1.1.4 | MIT |
| `@fontsource/ibm-plex-sans` | 5.1.1 | OFL-1.1 |
| `@fontsource/newsreader` | 5.1.1 | OFL-1.1 |
| `@xyflow/react` | 12.3.6 | MIT |
| `gray-matter` | 4.0.3 | MIT |
| `lucide-react` | 0.468.0 | ISC |
| `react` | 18.3.1 | MIT |
| `react-dom` | 18.3.1 | MIT |
| `react-markdown` | 9.0.1 | MIT |
| `rehype-highlight` | 7.0.2 | MIT |
| `rehype-mathjax` | 7.1.0 | MIT |
| `rehype-raw` | 7.0.0 | MIT |
| `rehype-slug` | 6.0.0 | MIT |
| `remark-gfm` | 4.0.0 | MIT |
| `remark-math` | 6.0.0 | MIT |
| `three` | 0.170.0 | MIT |

## Direct development dependencies

| Package | Version | License |
| --- | ---: | --- |
| `@testing-library/jest-dom` | 6.6.3 | MIT |
| `@testing-library/react` | 16.1.0 | MIT |
| `@testing-library/user-event` | 14.5.2 | MIT |
| `@types/react` | 18.3.31 | MIT |
| `@types/react-dom` | 18.3.7 | MIT |
| `@types/three` | 0.170.0 | MIT |
| `@vitejs/plugin-react` | 4.7.0 | MIT |
| `jsdom` | 25.0.1 | MIT |
| `typescript` | 5.6.3 | Apache-2.0 |
| `vite` | 6.4.3 | MIT |
| `vitest` | 3.2.6 | MIT |

GitHub Actions uses `actions/checkout`, `actions/setup-python`, and `actions/setup-node`; each action remains under its own upstream license and terms.

## Future simulator integrations

Ariadion, Qiskit, Cirq, or another simulator must be reviewed before integration. Record:

1. exact package and version;
2. license and notice requirements;
3. whether it is required or optional;
4. browser, server, or Python runtime implications;
5. data sent to external services, if any;
6. a tested fallback preserving the free offline core.

No paid service or API is currently required.

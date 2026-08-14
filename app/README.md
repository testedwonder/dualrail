# Dualrail Atlas

Dualrail Atlas is the primary experience in this repository. It indexes learner-facing documents and public technical sources from `../knowledge/`, then presents them as a searchable reader, relationship map, progress dashboard, research registry, and local proposal queue.

The source corpus is read-only in the application. Understanding ratings and personal notes are stored separately in browser local storage, so studying cannot rewrite or contaminate source-backed Markdown.

## Run locally

Requirements: Node.js 18 and npm 9 or newer.

```powershell
cd app
npm install
npm run dev
```

Open the URL printed by Vite, normally `http://127.0.0.1:5173/`.

The `predev`, `pretest`, and `prebuild` hooks regenerate `src/generated/knowledge.json` before each workflow. The generated file is intentionally ignored by Git.

## Release build

```powershell
npm run release:check
$env:VITE_BASE_PATH = '/dualrail/'
npm run build
Remove-Item Env:VITE_BASE_PATH
```

Every production build generates a content-hashed service worker from the final `dist/` files and verifies the manifest, launcher icons, base paths, offline asset list, and standalone display metadata. The manual GitHub Pages workflow builds at `/dualrail/`; local and custom-domain builds default to `/`.

The release is installable from Android/Chrome and iOS/Safari without a native wrapper. See [release instructions](../INSTRUCTIONS.md), [privacy](../PRIVACY.md), and [security](../SECURITY.md).

## Study workflow

- **Library:** Search and filter topics and learning paths. Open prerequisite, next-step, and related links from the reader.
- **Map:** Explore prerequisite, next-step, and related edges with a visible complexity legend. Select a node to open its document.
- **Progress:** Review topic averages, notes, confident topics, and the recommended study queue.
- **Understanding:** Assign an integer from `0` to `10`. Complexity remains deterministic metadata calculated from the knowledge graph.
- **Personal notes:** Add private observations without changing the canonical page.
- **Import and export:** Use Settings to back up or restore personal study data and export research proposals as versioned JSON.
- **Interactive foundations:** Use the diagnostic, complex-plane explorer, eigenvector check, seeded Born-rule lab, and calibration-order exercise for immediate feedback.
- **Research:** Filter public technical evidence by topic and authority, open supporting study pages, and save source or correction proposals locally for later export.
- **Lab:** Explore a full-bleed Three.js dual-rail state model with population, relative-phase, and basis-state controls. The scene is a state-space visualization, not hardware geometry.
- **Settings:** Import or export notes, ratings, a derived progress snapshot, and research proposals from one local-profile panel.
- **Help and feedback:** Open the guided public GitHub report flow from Settings. Security disclosures remain private and support links appear only when configured.
- **Verification marks:** Open scoped test digests for the application, source registry, and 3D Lab.

The selected document is encoded in the `?doc=` URL parameter. Heading links retain their anchor, so a specific reading position can be revisited or shared within the local application.

## Validation

```powershell
npm test
npm run build
```

`npm test` covers local-data sanitation, Settings import/export, filters, progress calculation, Markdown link resolution, rendering, persistence, search, view navigation, complexity legend, verification digests, deterministic math and sampling, exercise feedback, the research registry, proposal validation, the public-provenance boundary, and dual-rail state parameterization. `npm run build` performs the TypeScript check and production bundle.

## Three-dimensional lab

The **Lab** view parameterizes

$$
|\psi\rangle=\cos(\theta/2)|1,0\rangle+e^{i\phi}\sin(\theta/2)|0,1\rangle.
$$

The two rings show the logical modes, excitation-field size and opacity show basis probabilities, the gold marker shows relative phase, and the center link indicates coherence. Presets cover both basis states and balanced relative phases. Three.js is lazy-loaded only when the Lab tab opens.

## Research workflow

The **Research** view indexes public technical URLs already cited by the knowledge tree and the neutral [public technical source registry](../knowledge/research/public-technical-sources.md).

- Filter sources by text, authority type, or topic.
- Open a public source in a new browser tab.
- Open the supporting learner page to inspect the exact claim and context.
- Save an additional-source or correction proposal locally.
- Export the proposal queue as JSON when it is ready for repository review.

No network request is required to browse the registry. Network access occurs only when you intentionally open an external source. The application bundle contains learner-facing knowledge and public technical references only.

## Data boundary

| Data | Location | Writable from the app |
| --- | --- | --- |
| Canonical knowledge | `../knowledge/**/*.md` | No |
| Generated search index | `src/generated/knowledge.json` | Regenerated only |
| Ratings and notes | Browser local storage | Yes |
| Personal backup | User-exported JSON | Yes |
| Source and correction proposals | Browser local storage | Yes |

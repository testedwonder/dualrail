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

## Study workflow

- **Library:** Search and filter topics, source files, and learning paths. Open prerequisite, next-step, related, and source links from the reader.
- **Map:** Explore prerequisite, next-step, related, and source edges. Select a node to open its document.
- **Progress:** Review topic and source averages, notes, confident topics, and the recommended study queue.
- **Understanding:** Assign an integer from `0` to `10`. Complexity remains deterministic metadata calculated from the knowledge graph.
- **Personal notes:** Add private observations without changing the canonical page.
- **Import and export:** Use the header controls to back up or restore all personal data as versioned JSON.
- **Interactive foundations:** Use the diagnostic, complex-plane explorer, eigenvector check, seeded Born-rule lab, and calibration-order exercise for immediate feedback.
- **Research:** Filter public technical evidence by topic and authority, open supporting study pages, and save source or correction proposals locally for later export.
- **Lab:** Explore a full-bleed Three.js dual-rail state model with population, relative-phase, and basis-state controls. The scene is a state-space visualization, not hardware geometry.

The selected document is encoded in the `?doc=` URL parameter. Heading links retain their anchor, so a specific reading position can be revisited or shared within the local application.

## Validation

```powershell
npm test
npm run build
```

`npm test` covers local-data sanitation, import/export, filters, progress calculation, Markdown link resolution, rendering, persistence, search, view navigation, deterministic math and sampling, exercise feedback, the research registry, proposal validation, the private-source boundary, and dual-rail state parameterization. `npm run build` performs the TypeScript check and production bundle.

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

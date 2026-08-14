# Dualrail Atlas

Dualrail Atlas is the local study interface for the repository's Markdown knowledge tree. It indexes every file under `../knowledge/` and `../base/`, then presents the corpus as a searchable reader, relationship map, and progress dashboard.

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

The selected document is encoded in the `?doc=` URL parameter. Heading links retain their anchor, so a specific reading position can be revisited or shared within the local application.

## Validation

```powershell
npm test
npm run build
```

`npm test` covers local-data sanitation, import/export, filters, progress calculation, Markdown link resolution, real-corpus rendering, persistence, search, view navigation, deterministic math and sampling, and correct/incorrect/reset/keyboard exercise paths. `npm run build` performs the TypeScript check and production bundle.

## Data boundary

| Data | Location | Writable from the app |
| --- | --- | --- |
| Canonical knowledge | `../knowledge/**/*.md` | No |
| Preserved source material | `../base/**/*.md` | No |
| Generated search index | `src/generated/knowledge.json` | Regenerated only |
| Ratings and notes | Browser local storage | Yes |
| Personal backup | User-exported JSON | Yes |

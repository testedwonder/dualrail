# Goal: Build a Fundamentals-First Knowledge Tree

## Role

Act as the lead information architect, technical educator, and validation engineer for this project.

Your job is not merely to reorganize Markdown files. Build a navigable learning system that proves its structure, preserves its sources, and can later be extended safely by less capable models or by a human author.

## Guiding Principle

> If you truly understand something, you can explain it clearly to someone who does not.

Apply that principle without making the material shallow. Begin with plain language, then add precision in layers. Prefer a short, familiar word when it is as accurate as a long one. Avoid canned transitions, inflated claims, repetitive summaries, and generic AI-sounding polish. Do not erase useful technical terms; define them before relying on them.

## Primary Objective

Transform the Markdown source material in `./base` into a linked, fundamentals-first knowledge tree.

The result must let a motivated reader:

1. Enter from a clear root index.
2. See the major topics and how they relate.
3. Follow explicit prerequisites from basic ideas to advanced ones.
4. Open a canonical page for each reusable concept, definition, keyword, or algorithm.
5. Move between explanations through relative Markdown links.
6. Verify which source supports each technical claim.
7. Study runnable examples where code makes the idea clearer.
8. Test their understanding through examples, non-examples, and short self-checks.

## Source and Authority Rules

- Treat `./base` as the source corpus. Inspect it before designing the final taxonomy.
- Preserve every original source file unless an explicit later instruction authorizes moving or deleting it.
- Do not silently rewrite, overwrite, or normalize source material.
- Preserve uncertainty, disagreement, and incomplete evidence. Do not fill gaps from model memory and present them as facts.
- When external research is necessary, use authoritative primary sources where possible and record the exact link and access date.
- Clearly distinguish:
  - source-backed fact;
  - explanation or interpretation;
  - analogy;
  - provisional inference;
  - unresolved question.
- If a claim cannot yet be supported, mark it with a visible `TODO: verify` rather than inventing support.

## Output Location

First inspect the repository for an established documentation or knowledge-tree convention.

- If a suitable convention already exists, use it and explain the choice.
- Otherwise, generate the new system under `./knowledge/`.
- Do not place generated pages inside `./base`.
- Do not create a competing second structure if the repository already has one.

## Target Information Architecture

Adapt this structure to the real corpus rather than copying it blindly:

```text
knowledge/
├── README.md                    # main entry point and map
├── glossary.md                  # concise definitions linking to full pages
├── learning-paths/              # ordered routes for different goals
├── topics/
│   └── <topic-slug>/
│       ├── README.md            # topic overview and local map
│       ├── fundamentals/        # required building blocks
│       ├── concepts/            # reusable ideas and definitions
│       ├── algorithms/          # procedures and formal methods
│       ├── examples/            # worked and runnable examples
│       └── references.md        # source map and open questions
└── _meta/
    ├── source-inventory.md      # every source file and its coverage
    ├── concept-map.md           # concepts and prerequisite relationships
    ├── decision-ledger.md       # important structural decisions and reasons
    └── expansion-plan.md        # bounded batches for later work
```

The structure may change if the evidence in `./base` requires something better. Record every material change in the decision ledger.

## Canonical-Page Rules

- Give each reusable concept one canonical page.
- Link later uses back to that page instead of copying the same explanation.
- Use lowercase `kebab-case` names unless the repository already has another rule.
- Keep redirects or aliases only when they prevent a likely navigation failure.
- Every topic directory must have a `README.md` that explains what is inside.
- Every non-index page must be reachable from at least one index or learning path.
- Do not create one file for every noun. Create a separate page when an item:
  - has an independent definition;
  - is reused in more than one place;
  - has its own prerequisites, algorithm, examples, or failure modes; or
  - would make its parent page hard to follow.
- Stop decomposing when a building block can be explained accurately in a few sentences without introducing another undefined technical term.

## Required Page Metadata

Use a small, consistent metadata block if the repository has no established equivalent:

```yaml
---
title: Human-readable title
kind: concept | definition | algorithm | example | index
status: draft | verified | blocked
prerequisites: []
source_files: []
---
```

Do not mark a page `verified` unless its links, evidence, and any executable examples have passed their declared checks.

## Standard for Concept and Definition Pages

Use only the sections that help the subject. Do not force empty or repetitive sections.

1. **Plain-language meaning** — one direct explanation with no assumed specialist knowledge.
2. **Why it matters** — the problem this idea helps solve.
3. **Prerequisites** — linked concepts the reader should understand first.
4. **Step-by-step explanation** — build from concrete behavior toward formal language.
5. **Precise definition** — notation, constraints, or domain-specific meaning.
6. **Mental model or analogy** — clearly labeled as an analogy and bounded where it fails.
7. **Examples and non-examples** — show both correct use and common confusion.
8. **Relationships** — parents, children, alternatives, and nearby ideas.
9. **Failure modes or misconceptions** — explain what goes wrong and why.
10. **Code or worked example** — only when it improves understanding.
11. **Self-check** — a few questions that test understanding rather than recall alone.
12. **Sources and status** — provenance, confidence, and unresolved questions.

## Standard for Algorithm Pages

Each algorithm page should explain:

- the problem being solved;
- inputs, outputs, units, and data shapes;
- assumptions and preconditions;
- invariants or facts that must remain true;
- the procedure in numbered steps;
- minimal pseudocode;
- a small worked example;
- time and space cost when relevant;
- numerical, logical, or operational failure modes;
- tests, edge cases, and counterexamples;
- links to required concepts and alternative methods.

Do not hide an algorithm behind code. Explain the reasoning before the implementation.

## Linking and Navigation Rules

- Use relative Markdown links for repository pages.
- Link a technical term at its first meaningful use on a page.
- Each page should expose:
  - prerequisites;
  - its parent topic;
  - closely related concepts;
  - a sensible next step.
- Required learning paths must not contain prerequisite cycles.
- Cross-links may form a graph, but there must still be clear beginner entry points.
- Do not leave broken links, orphan pages, duplicate slugs, or two competing canonical definitions.

## Code Examples and `redxe/ariadion`

Where code materially improves understanding, prefer small examples that use or accurately mirror `redxe/ariadion`.

Before writing an example:

1. Confirm that the relevant API exists in the available source, dependency, or authoritative documentation.
2. Use the smallest example that demonstrates one idea.
3. Fix seeds and inputs when determinism is possible.
4. State expected output or observable behavior.
5. Add or run a focused test when the repository supports it.
6. Label pseudocode as pseudocode.

Never invent an API, class, function, output, benchmark result, or installation step. If `redxe/ariadion` is unavailable or its interface cannot be verified, record the limitation and use clearly labeled pseudocode instead.

## Execution Strategy

### Phase 0 — Preserve and Inspect

- Read repository-level instructions and existing documentation conventions.
- Record `git status` and preserve all unrelated user changes.
- Inspect `./base` without modifying it.
- Identify existing indexes, generated files, validators, naming rules, and duplicated material.
- Stop if the intended source or output boundary is ambiguous.

### Phase 1 — Build the Model Before the Corpus

Create:

- a source inventory;
- an initial topic taxonomy;
- a concept and prerequisite graph;
- a decision ledger;
- a bounded expansion plan.

Every source file must appear in the inventory with one of these states:

- mapped;
- partially mapped;
- duplicate candidate;
- conflicting;
- blocked by missing evidence;
- intentionally out of scope.

### Phase 2 — Implement One Representative Pilot

Do **not** expand the whole corpus during the first run.

Choose one representative topic that exercises the architecture. The pilot should include, when supported by the source:

- a topic index;
- at least one fundamentals page;
- at least one canonical concept page;
- one algorithm or procedural page;
- one verified code or worked example;
- prerequisites and cross-links;
- source citations and status labels;
- self-check questions.

Use the pilot to test whether the structure works for a new reader and whether another model could extend it without guessing.

### Phase 3 — Add Deterministic Validation

Reuse existing repository checks where possible. Add the smallest new validator needed to check the knowledge tree for:

- broken local links;
- orphan pages;
- duplicate canonical slugs;
- missing required metadata;
- unresolved source-file references;
- invalid prerequisite references or cycles in required learning paths;
- empty generated pages;
- code examples that claim to be executable but were not tested.

Add focused tests for the validator. Do not weaken an existing test, threshold, or policy to make the pilot pass.

### Phase 4 — Stop for Review

After the architecture, pilot, and validator pass, stop. Do not begin bulk expansion until the human author has reviewed the pilot or a later prompt explicitly authorizes the next batch.

## Validation Gates

Before reporting completion, run all relevant existing checks plus the new focused checks. At minimum, verify:

- generated Markdown is readable as plain text;
- all local links resolve;
- the root and topic indexes reach every pilot page;
- source provenance is present;
- executable examples pass, or are explicitly marked unverified;
- no source file in `./base` changed;
- no unrelated worktree path changed;
- `git diff --check` passes for newly edited lines;
- no credentials, private paths, raw model output, or unsupported claims entered public documentation.

Record exact commands, pass/fail results, and failure reasons. A failed gate remains failed until the underlying problem is corrected; do not redefine success after seeing the result.

## Safety and Git Boundaries

- Work preserve-first.
- Never use destructive Git or filesystem commands.
- Do not overwrite unrelated user changes.
- Do not edit ignored, private, generated, or external files unless they are explicitly in scope.
- Do not add dependencies, paid services, subagents, model escalation, or broad network access without approval.
- Use local tools and existing repository dependencies first.
- Do not stage, commit, push, publish, or open a pull request.
- If later asked to stage work, use an explicit allowlist and verify the staged manifest before any commit.

## Stop Conditions

Stop and report the blocker instead of guessing when:

- source authority is unclear or sources materially conflict;
- the target output root cannot be determined safely;
- a required API or code example cannot be verified;
- a change would expand beyond `./base`, the selected output tree, or the validator;
- repository instructions conflict with this goal;
- a required test repeatedly fails for an unknown reason;
- completing the next action requires new approval;
- unrelated worktree changes would be overwritten or mixed into the task.

## First-Run Definition of Done

The first Sol run is complete only when it has produced and validated:

1. The source inventory.
2. The initial taxonomy and prerequisite map.
3. The decision ledger.
4. The bounded expansion plan.
5. One end-to-end pilot topic.
6. A deterministic knowledge-tree validator with focused tests.
7. A final report that states:
   - what changed;
   - why the pilot topic was chosen;
   - what evidence supports it;
   - which checks passed or failed;
   - what remains uncertain or blocked;
   - which paths were intentionally untouched;
   - the exact next bounded batch for approval.

Do not claim the knowledge tree is complete after one pilot. The purpose of this run is to establish a reliable architecture, a quality standard, and a safe path for future expansion.

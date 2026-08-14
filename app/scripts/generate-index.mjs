import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const appRoot = path.resolve(scriptDirectory, '..')
const repositoryRoot = path.resolve(appRoot, '..')
const outputPath = path.join(appRoot, 'src', 'generated', 'knowledge.json')
const contentKinds = new Set(['concept', 'definition', 'algorithm', 'example'])
const expectedExerciseIds = new Set([
  'foundations-diagnostic',
  'complex-phase',
  'matrix-eigenvector',
  'measurement-lab',
  'gate-calibration-order',
])
const blockedResearchHosts = new Set([
  'linkedin.com',
  'www.linkedin.com',
  'theorg.com',
  'www.theorg.com',
  'people.equilar.com',
  'ats.rippling.com',
  'me.sh',
  'api.openalex.org',
])
const publicSourcePattern = /^knowledge\/(?:research\/public-technical-sources\.md|topics\/[a-z0-9-]+\/references\.md)$/

function toPosix(value) {
  return value.split(path.sep).join('/')
}

async function walkMarkdown(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const files = []
  for (const entry of entries.sort((left, right) => left.name.localeCompare(right.name))) {
    const absolutePath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      files.push(...await walkMarkdown(absolutePath))
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(absolutePath)
    }
  }
  return files
}

function asArray(value) {
  if (Array.isArray(value)) return value.map(String)
  if (value === undefined || value === null || value === '') return []
  return [String(value)]
}

function stripGeneratedBlocks(body) {
  return body
    .replace(/<!-- study-status:start -->[\s\S]*?<!-- study-status:end -->/g, '')
    .replace(/<!-- learning-navigation:start -->[\s\S]*?<!-- learning-navigation:end -->/g, '')
    .replace(/^#\s+.+?\r?\n+/, '')
    .trim()
}

function appVisiblePath(relativePath) {
  if (relativePath.startsWith('knowledge/_meta/')) return false
  if (relativePath.startsWith('knowledge/research/') && relativePath !== 'knowledge/research/public-technical-sources.md') return false
  if (relativePath === 'knowledge/README.md') return false
  return relativePath.startsWith('knowledge/')
}

function plainText(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!?(?:\[([^\]]*)\])\([^)]+\)/g, '$1')
    .replace(/[`*_>#|$\\]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function externalLinks(markdown) {
  return [...new Set(
    [...markdown.matchAll(/https?:\/\/[^\s)>]+/g)]
      .map((match) => match[0].replace(/[.,;:]$/, '')),
  )]
}

function externalReferences(markdown) {
  const references = new Map()
  for (const match of markdown.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g)) {
    const url = match[2].replace(/[.,;:]$/, '')
    references.set(url, { url, label: plainText(match[1]) || new URL(url).hostname })
  }
  for (const url of externalLinks(markdown)) {
    if (!references.has(url)) references.set(url, { url, label: new URL(url).hostname })
  }
  return [...references.values()]
}

function sourceAuthority(hostname) {
  if (hostname === 'arxiv.org') return { authority: 'preprint', rank: 4, authorityLabel: 'Open preprint' }
  if (/^(?:www\.)?(?:nature\.com|science\.org|journals\.aps\.org|link\.aps\.org)$/.test(hostname) || hostname === 'doi.org') {
    return { authority: 'peer-reviewed', rank: 5, authorityLabel: 'Peer-reviewed publication' }
  }
  if (hostname === 'www.sec.gov' || hostname === 'www.nas.nasa.gov') {
    return { authority: 'government', rank: 5, authorityLabel: 'Government or regulatory source' }
  }
  if (/^(?:ocw\.mit\.edu|openstax\.org|quantum\.cloud\.ibm\.com)$/.test(hostname)) {
    return { authority: 'educational', rank: 4, authorityLabel: 'Authoritative educational source' }
  }
  if (/^(?:docs\.|github\.com|www\.github\.com|qibo\.science|microsoft\.github\.io)/.test(hostname)) {
    return { authority: 'documentation', rank: 3, authorityLabel: 'Technical documentation' }
  }
  if (/^(?:www\.)?(?:dwavequantum\.com|quantumcircuits\.com)$/.test(hostname)) {
    return { authority: 'first-party', rank: 3, authorityLabel: 'First-party technical source' }
  }
  return { authority: 'secondary', rank: 2, authorityLabel: 'Secondary or unclassified source' }
}

function collectionFor(relativePath) {
  if (relativePath.startsWith('knowledge/topics/')) return 'topic'
  if (relativePath.startsWith('knowledge/learning-paths/')) return 'learning-path'
  if (relativePath.startsWith('knowledge/_meta/')) return 'meta'
  return 'root'
}

function topicFor(relativePath) {
  const match = relativePath.match(/^knowledge\/topics\/([^/]+)\//)
  return match?.[1] ?? null
}

async function parseDocument(absolutePath) {
  const raw = await fs.readFile(absolutePath, 'utf8')
  const parsed = matter(raw)
  const relativePath = toPosix(path.relative(repositoryRoot, absolutePath))
  const body = stripGeneratedBlocks(parsed.content)
  const title = String(parsed.data.title ?? relativePath.split('/').at(-1)?.replace(/\.md$/, '') ?? relativePath)
  const kind = String(parsed.data.kind ?? 'document')
  const topic = topicFor(relativePath)
  const complexityScore = Number(parsed.data.complexity_score)
  const understanding = Number(parsed.data.understanding)
  const privacy = String(parsed.data.privacy ?? '')
  const searchableText = plainText(`${title}\n${body}`)
  const references = externalReferences(body)

  return {
    id: relativePath,
    path: relativePath,
    title,
    kind,
    status: String(parsed.data.status ?? 'unclassified'),
    collection: collectionFor(relativePath),
    topic,
    topicTitle: null,
    body,
    excerpt: plainText(body).slice(0, 220),
    searchableText: searchableText.toLocaleLowerCase(),
    prerequisites: asArray(parsed.data.prerequisites),
    nextSteps: asArray(parsed.data.next_steps),
    related: asArray(parsed.data.related),
    sourceFiles: asArray(parsed.data.source_files),
    externalLinks: references.map((reference) => reference.url),
    externalReferences: references,
    complexity: Number.isFinite(complexityScore)
      ? {
          score: complexityScore,
          depth: Number(parsed.data.complexity_depth ?? 0),
          prerequisiteCount: Number(parsed.data.complexity_prerequisite_count ?? 0),
          wavelengthNm: Number(parsed.data.complexity_wavelength_nm ?? 0),
          frequencyThz: Number(parsed.data.complexity_frequency_thz ?? 0),
          color: String(parsed.data.complexity_color ?? '#65706b'),
        }
      : null,
    defaultUnderstanding: Number.isInteger(understanding) && understanding >= 0 && understanding <= 10
      ? understanding
      : 0,
    exerciseId: parsed.data.exercise_id ? String(parsed.data.exercise_id) : null,
    isRateable: contentKinds.has(kind),
    isPrivate: /private|personal|contact/i.test(privacy),
    wordCount: plainText(body).split(/\s+/).filter(Boolean).length,
  }
}

const knowledgeFiles = await walkMarkdown(path.join(repositoryRoot, 'knowledge'))
const allKnowledgeDocuments = await Promise.all(knowledgeFiles.map(parseDocument))
const documents = allKnowledgeDocuments.filter((document) => appVisiblePath(document.path))
const researchDocuments = allKnowledgeDocuments.filter((document) => document.path.startsWith('knowledge/research/'))
const topicTitles = new Map(
  documents
    .filter((document) => /^knowledge\/topics\/[^/]+\/README\.md$/.test(document.path))
    .map((document) => [document.topic, document.title]),
)

for (const document of documents) {
  document.topicTitle = document.topic ? topicTitles.get(document.topic) ?? document.topic : null
}

const researchSourceMap = new Map()
const appDocumentIds = new Set(documents.map((document) => document.id))
const topicIndexBySlug = new Map(
  documents
    .filter((document) => /^knowledge\/topics\/[^/]+\/README\.md$/.test(document.path))
    .map((document) => [document.topic, document]),
)
for (const document of [...allKnowledgeDocuments, ...researchDocuments]) {
  for (const reference of document.externalReferences) {
    const parsedUrl = new URL(reference.url)
    const hostname = parsedUrl.hostname.toLocaleLowerCase()
    if (blockedResearchHosts.has(hostname)) continue
    const existing = researchSourceMap.get(reference.url) ?? {
      id: reference.url,
      url: reference.url,
      label: reference.label,
      hostname,
      ...sourceAuthority(hostname),
      documents: [],
      topics: [],
    }
    if (reference.label.length > existing.label.length) existing.label = reference.label
    const portfolioTopic = document.path === 'knowledge/research/public-technical-sources.md'
      ? topicIndexBySlug.get('mathematics-and-quantum-foundations')
      : null
    const supportingDocument = document.path === 'knowledge/research/public-technical-sources.md'
      ? portfolioTopic
      : appDocumentIds.has(document.id)
        ? document
        : document.topic
        ? topicIndexBySlug.get(document.topic)
        : portfolioTopic
    if (supportingDocument) {
      existing.documents.push({
        id: supportingDocument.id,
        title: supportingDocument.title,
        topic: supportingDocument.topic,
        topicTitle: supportingDocument.topicTitle,
      })
      if (supportingDocument.topicTitle && !existing.topics.includes(supportingDocument.topicTitle)) {
        existing.topics.push(supportingDocument.topicTitle)
      }
    }
    researchSourceMap.set(reference.url, existing)
  }
}
const researchSources = [...researchSourceMap.values()]
  .map((source) => ({
    ...source,
    documents: [...new Map(source.documents.map((document) => [document.id, document])).values()],
    topics: source.topics.sort(),
  }))
  .sort((left, right) => right.rank - left.rank || left.label.localeCompare(right.label))

documents.sort((left, right) => {
  const collectionOrder = ['topic', 'learning-path', 'root', 'meta']
  const collectionDifference = collectionOrder.indexOf(left.collection) - collectionOrder.indexOf(right.collection)
  if (collectionDifference !== 0) return collectionDifference
  return left.title.localeCompare(right.title)
})

const topics = [...topicTitles.entries()]
  .map(([slug, title]) => {
    const members = documents.filter((document) => document.topic === slug && document.isRateable)
    return {
      slug,
      title,
      count: members.length,
      averageComplexity: members.length
        ? Number((members.reduce((sum, document) => sum + (document.complexity?.score ?? 0), 0) / members.length).toFixed(1))
        : 0,
    }
  })
  .sort((left, right) => left.title.localeCompare(right.title))

const contentCount = documents.filter((document) => document.collection === 'topic' && document.isRateable).length
const indexedExerciseIds = new Set(documents.map((document) => document.exerciseId).filter(Boolean))
const missingExerciseIds = [...expectedExerciseIds].filter((exerciseId) => !indexedExerciseIds.has(exerciseId))
const unknownExerciseIds = [...indexedExerciseIds].filter((exerciseId) => !expectedExerciseIds.has(exerciseId))
const blockedSources = researchSources.filter((source) => blockedResearchHosts.has(source.hostname))
const unlinkedSources = researchSources.filter((source) => source.documents.length === 0)
const invalidProvenance = documents.filter((document) => (
  document.isRateable && (
    document.sourceFiles.length === 0
    || document.sourceFiles.some((reference) => !publicSourcePattern.test(reference))
  )
))
if (documents.length !== 86 || contentCount !== 66 || researchSources.length !== 24 || topics.length !== 7) {
  throw new Error(
    `Knowledge index is incomplete: ${documents.length} learner documents, ${contentCount} topic items, ${topics.length} topics, and ${researchSources.length} public sources.`,
  )
}
if (missingExerciseIds.length || unknownExerciseIds.length) {
  throw new Error(
    `Exercise index mismatch. Missing: ${missingExerciseIds.join(', ') || 'none'}. Unknown: ${unknownExerciseIds.join(', ') || 'none'}.`,
  )
}
if (blockedSources.length || unlinkedSources.length || invalidProvenance.length) {
  throw new Error(
    `App public boundary failed. Blocked sources: ${blockedSources.map((source) => source.hostname).join(', ') || 'none'}. Sources without study pages: ${unlinkedSources.map((source) => source.url).join(', ') || 'none'}. Invalid provenance: ${invalidProvenance.map((document) => document.path).join(', ') || 'none'}.`,
  )
}

const output = {
  generatedAt: new Date().toISOString(),
  documents,
  researchSources,
  topics,
  stats: {
    documents: documents.length,
    knowledgeDocuments: knowledgeFiles.length,
    topicItems: contentCount,
    sourceFiles: researchDocuments.length,
    researchSources: researchSources.length,
    topics: topics.length,
    exercises: indexedExerciseIds.size,
  },
}

await fs.mkdir(path.dirname(outputPath), { recursive: true })
await fs.writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8')
console.log(
  `Indexed ${output.stats.knowledgeDocuments} knowledge files, ${output.stats.topicItems} topic items, and ${output.stats.researchSources} public research sources.`,
)
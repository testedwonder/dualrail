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

function collectionFor(relativePath) {
  if (relativePath.startsWith('base/')) return 'base'
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
  const kind = String(parsed.data.kind ?? (relativePath.startsWith('base/') ? 'source' : 'document'))
  const topic = topicFor(relativePath)
  const complexityScore = Number(parsed.data.complexity_score)
  const understanding = Number(parsed.data.understanding)
  const privacy = String(parsed.data.privacy ?? '')
  const searchableText = plainText(`${title}\n${body}\n${asArray(parsed.data.source_files).join(' ')}`)

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
    externalLinks: externalLinks(body),
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
    isRateable: relativePath.startsWith('base/') || contentKinds.has(kind),
    isPrivate: /private|personal|contact/i.test(privacy),
    wordCount: plainText(body).split(/\s+/).filter(Boolean).length,
  }
}

const knowledgeFiles = await walkMarkdown(path.join(repositoryRoot, 'knowledge'))
const baseFiles = await walkMarkdown(path.join(repositoryRoot, 'base'))
const documents = await Promise.all([...knowledgeFiles, ...baseFiles].map(parseDocument))
const topicTitles = new Map(
  documents
    .filter((document) => /^knowledge\/topics\/[^/]+\/README\.md$/.test(document.path))
    .map((document) => [document.topic, document.title]),
)

for (const document of documents) {
  document.topicTitle = document.topic ? topicTitles.get(document.topic) ?? document.topic : null
}

documents.sort((left, right) => {
  const collectionOrder = ['topic', 'learning-path', 'base', 'root', 'meta']
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
const baseCount = documents.filter((document) => document.collection === 'base').length
const indexedExerciseIds = new Set(documents.map((document) => document.exerciseId).filter(Boolean))
const missingExerciseIds = [...expectedExerciseIds].filter((exerciseId) => !indexedExerciseIds.has(exerciseId))
const unknownExerciseIds = [...indexedExerciseIds].filter((exerciseId) => !expectedExerciseIds.has(exerciseId))
if (knowledgeFiles.length < 93 || contentCount < 66 || baseCount < 4) {
  throw new Error(
    `Knowledge index is incomplete: ${knowledgeFiles.length} knowledge files, ${contentCount} topic items, ${baseCount} base files.`,
  )
}
if (missingExerciseIds.length || unknownExerciseIds.length) {
  throw new Error(
    `Exercise index mismatch. Missing: ${missingExerciseIds.join(', ') || 'none'}. Unknown: ${unknownExerciseIds.join(', ') || 'none'}.`,
  )
}

const output = {
  generatedAt: new Date().toISOString(),
  documents,
  topics,
  stats: {
    documents: documents.length,
    knowledgeDocuments: knowledgeFiles.length,
    topicItems: contentCount,
    baseDocuments: baseCount,
    topics: topics.length,
    exercises: indexedExerciseIds.size,
  },
}

await fs.mkdir(path.dirname(outputPath), { recursive: true })
await fs.writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8')
console.log(
  `Indexed ${output.stats.knowledgeDocuments} knowledge files, ${output.stats.topicItems} topic items, and ${output.stats.baseDocuments} base documents.`,
)
export type Collection = 'topic' | 'learning-path' | 'meta' | 'root'

export interface Complexity {
  score: number
  depth: number
  prerequisiteCount: number
  wavelengthNm: number
  frequencyThz: number
  color: string
}

export interface KnowledgeDocument {
  id: string
  path: string
  title: string
  kind: string
  status: string
  collection: Collection
  topic: string | null
  topicTitle: string | null
  body: string
  excerpt: string
  searchableText: string
  prerequisites: string[]
  nextSteps: string[]
  related: string[]
  sourceFiles: string[]
  externalLinks: string[]
  complexity: Complexity | null
  defaultUnderstanding: number
  exerciseId: string | null
  isRateable: boolean
  isPrivate: boolean
  wordCount: number
}

export interface TopicSummary {
  slug: string
  title: string
  count: number
  averageComplexity: number
}

export interface KnowledgeIndex {
  generatedAt: string
  documents: KnowledgeDocument[]
  researchSources: ResearchSource[]
  topics: TopicSummary[]
  stats: {
    documents: number
    knowledgeDocuments: number
    topicItems: number
    sourceFiles: number
    researchSources: number
    topics: number
    exercises: number
  }
}

export type ResearchAuthority = 'peer-reviewed' | 'preprint' | 'government' | 'educational' | 'documentation' | 'first-party' | 'secondary'

export interface ResearchSourceDocument {
  id: string
  title: string
  topic: string | null
  topicTitle: string | null
}

export interface ResearchSource {
  id: string
  url: string
  label: string
  hostname: string
  authority: ResearchAuthority
  rank: number
  authorityLabel: string
  documents: ResearchSourceDocument[]
  topics: string[]
}

export interface ResearchProposal {
  id: string
  kind: 'source' | 'correction'
  title: string
  url: string
  documentId: string
  details: string
  createdAt: string
}

export interface PersonalEntry {
  understanding: number
  notes: string
  updatedAt: string
}

export type PersonalState = Record<string, PersonalEntry>

export interface PersonalExport {
  version: 1
  exportedAt: string
  entries: PersonalState
  progress?: ProgressSummary
}

export type MainView = 'library' | 'map' | 'progress' | 'research' | 'lab'

export interface LibraryFilters {
  query: string
  collection: 'all' | 'topic' | 'path'
  topic: string
  kind: string
  relationship: 'all' | 'prerequisites' | 'next-steps' | 'terminal'
  maximumComplexity: number
  understanding: 'all' | 'unrated' | 'learning' | 'confident'
}

export interface ProgressSummary {
  average: number
  ratedCount: number
  total: number
  notesCount: number
  masteredCount: number
}
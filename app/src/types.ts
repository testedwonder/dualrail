export type Collection = 'topic' | 'base' | 'learning-path' | 'meta' | 'root'

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
  topics: TopicSummary[]
  stats: {
    documents: number
    knowledgeDocuments: number
    topicItems: number
    baseDocuments: number
    topics: number
  }
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
}

export type MainView = 'library' | 'map' | 'progress'

export interface LibraryFilters {
  query: string
  collection: 'all' | 'topic' | 'base' | 'path'
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
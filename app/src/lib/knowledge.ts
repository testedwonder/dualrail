import type {
  KnowledgeDocument,
  LibraryFilters,
  PersonalEntry,
  PersonalExport,
  PersonalState,
  ProgressSummary,
} from '../types'

export const PERSONAL_STORAGE_KEY = 'dualrail-atlas:personal-state:v1'

export const defaultFilters: LibraryFilters = {
  query: '',
  collection: 'topic',
  topic: 'all',
  kind: 'all',
  relationship: 'all',
  maximumComplexity: 10,
  understanding: 'all',
}

export function getPersonalEntry(
  document: KnowledgeDocument,
  state: PersonalState,
): PersonalEntry {
  return state[document.id] ?? {
    understanding: document.defaultUnderstanding,
    notes: '',
    updatedAt: '',
  }
}

export function updatePersonalEntry(
  state: PersonalState,
  document: KnowledgeDocument,
  patch: Partial<Pick<PersonalEntry, 'understanding' | 'notes'>>,
): PersonalState {
  const current = getPersonalEntry(document, state)
  const understanding = patch.understanding ?? current.understanding
  if (!Number.isInteger(understanding) || understanding < 0 || understanding > 10) {
    throw new Error('Understanding must be an integer from 0 to 10.')
  }
  return {
    ...state,
    [document.id]: {
      ...current,
      ...patch,
      understanding,
      updatedAt: new Date().toISOString(),
    },
  }
}

export function loadPersonalState(storage: Pick<Storage, 'getItem'> = localStorage): PersonalState {
  try {
    const raw = storage.getItem(PERSONAL_STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as PersonalExport
    return parsed.version === 1 && parsed.entries ? sanitizeEntries(parsed.entries) : {}
  } catch {
    return {}
  }
}

export function savePersonalState(
  state: PersonalState,
  storage: Pick<Storage, 'setItem'> = localStorage,
) {
  const payload: PersonalExport = {
    version: 1,
    exportedAt: new Date().toISOString(),
    entries: sanitizeEntries(state),
  }
  storage.setItem(PERSONAL_STORAGE_KEY, JSON.stringify(payload))
}

export function exportPersonalState(state: PersonalState): PersonalExport {
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    entries: sanitizeEntries(state),
  }
}

export function importPersonalState(raw: string): PersonalState {
  const parsed = JSON.parse(raw) as Partial<PersonalExport>
  if (parsed.version !== 1 || !parsed.entries || typeof parsed.entries !== 'object') {
    throw new Error('This file is not a Dualrail Atlas version 1 export.')
  }
  return sanitizeEntries(parsed.entries)
}

function sanitizeEntries(entries: PersonalState): PersonalState {
  const sanitized: PersonalState = {}
  for (const [id, value] of Object.entries(entries)) {
    if (!value || typeof value !== 'object') continue
    const understanding = Number(value.understanding)
    if (!Number.isInteger(understanding) || understanding < 0 || understanding > 10) continue
    sanitized[id] = {
      understanding,
      notes: typeof value.notes === 'string' ? value.notes : '',
      updatedAt: typeof value.updatedAt === 'string' ? value.updatedAt : '',
    }
  }
  return sanitized
}

export function filterDocuments(
  documents: KnowledgeDocument[],
  state: PersonalState,
  filters: LibraryFilters,
) {
  const query = filters.query.trim().toLocaleLowerCase()
  return documents.filter((document) => {
    if (filters.collection === 'topic' && !(document.collection === 'topic' && document.isRateable)) return false
    if (filters.collection === 'path' && document.collection !== 'learning-path') return false
    if (filters.topic !== 'all' && document.topic !== filters.topic) return false
    if (filters.kind !== 'all' && document.kind !== filters.kind) return false
    if ((document.complexity?.score ?? 0) > filters.maximumComplexity) return false
    if (filters.relationship === 'prerequisites' && document.prerequisites.length === 0) return false
    if (filters.relationship === 'next-steps' && document.nextSteps.length === 0) return false
    if (filters.relationship === 'terminal' && document.nextSteps.length > 0) return false
    const understanding = getPersonalEntry(document, state).understanding
    if (filters.understanding === 'unrated' && understanding !== 0) return false
    if (filters.understanding === 'learning' && (understanding < 1 || understanding > 7)) return false
    if (filters.understanding === 'confident' && understanding < 8) return false
    if (query && !document.searchableText.includes(query)) return false
    return true
  })
}

export function summarizeProgress(
  documents: KnowledgeDocument[],
  state: PersonalState,
): ProgressSummary {
  const rateable = documents.filter((document) => document.isRateable)
  if (rateable.length === 0) {
    return { average: 0, ratedCount: 0, total: 0, notesCount: 0, masteredCount: 0 }
  }
  const entries = rateable.map((document) => getPersonalEntry(document, state))
  return {
    average: Number((entries.reduce((sum, entry) => sum + entry.understanding, 0) / entries.length).toFixed(1)),
    ratedCount: entries.filter((entry) => entry.understanding > 0).length,
    total: entries.length,
    notesCount: entries.filter((entry) => entry.notes.trim()).length,
    masteredCount: entries.filter((entry) => entry.understanding >= 8).length,
  }
}

export function understandingLabel(value: number) {
  if (value === 0) return 'Not rated'
  if (value <= 3) return 'Starting'
  if (value <= 5) return 'Developing'
  if (value <= 7) return 'Working knowledge'
  if (value <= 9) return 'Confident'
  return 'Mastered'
}

export function resolveInternalLink(
  currentPath: string,
  href: string,
  documentIds: Set<string>,
) {
  if (/^(?:https?:|mailto:|#)/i.test(href)) return null
  const [pathPart, anchor] = href.split('#', 2)
  if (!pathPart) return null
  const currentDirectory = currentPath.split('/').slice(0, -1)
  const segments = [...currentDirectory, ...pathPart.split('/')]
  const normalized: string[] = []
  for (const segment of segments) {
    if (!segment || segment === '.') continue
    if (segment === '..') normalized.pop()
    else normalized.push(segment)
  }
  const id = normalized.join('/')
  return documentIds.has(id) ? { id, anchor: anchor ?? '' } : null
}

export function recommendedDocuments(
  documents: KnowledgeDocument[],
  state: PersonalState,
  limit = 6,
) {
  const byId = new Map(documents.map((document) => [document.id, document]))
  return documents
    .filter((document) => document.collection === 'topic' && document.isRateable)
    .filter((document) => getPersonalEntry(document, state).understanding < 8)
    .map((document) => {
      const prerequisiteRatings = document.prerequisites
        .map((id) => byId.get(`knowledge/${id}`) ?? byId.get(id))
        .filter((value): value is KnowledgeDocument => Boolean(value))
        .map((value) => getPersonalEntry(value, state).understanding)
      const ready = prerequisiteRatings.every((rating) => rating >= 4)
      return { document, ready, rating: getPersonalEntry(document, state).understanding }
    })
    .sort((left, right) => {
      if (left.ready !== right.ready) return left.ready ? -1 : 1
      if (left.rating !== right.rating) return left.rating - right.rating
      return (left.document.complexity?.score ?? 0) - (right.document.complexity?.score ?? 0)
    })
    .slice(0, limit)
    .map((item) => item.document)
}
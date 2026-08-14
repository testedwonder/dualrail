import { describe, expect, it } from 'vitest'
import type { KnowledgeDocument, PersonalState } from '../types'
import {
  defaultFilters,
  exportPersonalState,
  filterDocuments,
  importPersonalState,
  resolveInternalLink,
  summarizeProgress,
  updatePersonalEntry,
} from './knowledge'

function makeDocument(overrides: Partial<KnowledgeDocument> = {}): KnowledgeDocument {
  return {
    id: 'knowledge/topics/test/alpha.md',
    path: 'knowledge/topics/test/alpha.md',
    title: 'Alpha state',
    kind: 'concept',
    status: 'draft',
    collection: 'topic',
    topic: 'test',
    topicTitle: 'Test topic',
    body: '# Alpha state',
    excerpt: 'Alpha state',
    searchableText: 'alpha photon state',
    prerequisites: [],
    nextSteps: [],
    related: [],
    sourceFiles: [],
    externalLinks: [],
    complexity: {
      score: 4,
      depth: 2,
      prerequisiteCount: 1,
      wavelengthNm: 572,
      frequencyThz: 524.1,
      color: '#9acd00',
    },
    defaultUnderstanding: 0,
    exerciseId: null,
    isRateable: true,
    isPrivate: false,
    wordCount: 20,
    ...overrides,
  }
}

describe('personal study data', () => {
  it('updates ratings only within the integer 0-10 range', () => {
    const document = makeDocument()
    expect(updatePersonalEntry({}, document, { understanding: 10 })[document.id].understanding).toBe(10)
    expect(() => updatePersonalEntry({}, document, { understanding: -1 })).toThrow(/0 to 10/)
    expect(() => updatePersonalEntry({}, document, { understanding: 11 })).toThrow(/0 to 10/)
    expect(() => updatePersonalEntry({}, document, { understanding: 4.5 })).toThrow(/integer/)
  })

  it('round-trips a versioned export and drops malformed entries', () => {
    const state: PersonalState = {
      'knowledge/topics/test/alpha.md': {
        understanding: 7,
        notes: 'Revisit the phase convention.',
        updatedAt: '2025-01-02T03:04:05.000Z',
      },
    }
    expect(importPersonalState(JSON.stringify(exportPersonalState(state)))).toEqual(state)

    const malformed = JSON.stringify({
      version: 1,
      entries: {
        valid: { understanding: 3, notes: 42, updatedAt: null },
        invalid: { understanding: 14, notes: 'discard me' },
      },
    })
    expect(importPersonalState(malformed)).toEqual({
      valid: { understanding: 3, notes: '', updatedAt: '' },
    })
  })
})

describe('knowledge navigation', () => {
  const alpha = makeDocument()
  const beta = makeDocument({
    id: 'knowledge/topics/test/beta.md',
    path: 'knowledge/topics/test/beta.md',
    title: 'Beta calibration',
    searchableText: 'beta calibration pulse',
    complexity: { ...makeDocument().complexity!, score: 8 },
    prerequisites: ['topics/test/alpha.md'],
    defaultUnderstanding: 3,
  })
  const source = makeDocument({
    id: 'base/source.md',
    path: 'base/source.md',
    title: 'Source corpus',
    searchableText: 'source corpus',
    collection: 'base',
    topic: null,
    topicTitle: null,
    complexity: null,
    defaultUnderstanding: 5,
  })
  const documents = [alpha, beta, source]

  it('combines collection, text, complexity, and understanding filters', () => {
    const state: PersonalState = {
      [alpha.id]: { understanding: 8, notes: '', updatedAt: '' },
    }
    expect(filterDocuments(documents, state, { ...defaultFilters, query: 'photon' })).toEqual([alpha])
    expect(filterDocuments(documents, state, { ...defaultFilters, maximumComplexity: 5 })).toEqual([alpha])
    expect(filterDocuments(documents, state, { ...defaultFilters, understanding: 'confident' })).toEqual([alpha])
    expect(filterDocuments(documents, state, { ...defaultFilters, collection: 'base' })).toEqual([source])
  })

  it('summarizes only rateable documents with stable progress counts', () => {
    const state: PersonalState = {
      [alpha.id]: { understanding: 8, notes: 'A note', updatedAt: '' },
      [beta.id]: { understanding: 2, notes: ' ', updatedAt: '' },
    }
    expect(summarizeProgress([alpha, beta], state)).toEqual({
      average: 5,
      ratedCount: 2,
      total: 2,
      notesCount: 1,
      masteredCount: 1,
    })
  })

  it('resolves relative Markdown links only when the target is indexed', () => {
    const ids = new Set(documents.map((document) => document.id))
    expect(resolveInternalLink(alpha.path, 'beta.md#pulse', ids)).toEqual({
      id: beta.id,
      anchor: 'pulse',
    })
    expect(resolveInternalLink(alpha.path, 'missing.md', ids)).toBeNull()
    expect(resolveInternalLink(alpha.path, 'https://example.com', ids)).toBeNull()
  })
})
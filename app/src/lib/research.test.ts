import { describe, expect, it } from 'vitest'
import {
  createResearchProposal,
  exportResearchProposals,
  loadResearchProposals,
  saveResearchProposals,
} from './research'

describe('research proposals', () => {
  it('requires useful details and a public URL for source proposals', () => {
    expect(() => createResearchProposal({ kind: 'source', title: 'Paper', url: '', documentId: '', details: 'Relevant result.' })).toThrow(/public HTTP/)
    expect(() => createResearchProposal({ kind: 'correction', title: '', url: '', documentId: '', details: 'Fix.' })).toThrow(/title/)
    expect(() => createResearchProposal({ kind: 'correction', title: 'Correction', url: '', documentId: '', details: '' })).toThrow(/Describe/)
  })

  it('creates, saves, loads, and exports a sanitized proposal', () => {
    const proposal = createResearchProposal({
      kind: 'source',
      title: '  Primary paper  ',
      url: 'https://example.org/paper',
      documentId: 'knowledge/topic.md',
      details: '  Supports the stated boundary.  ',
    }, { id: 'proposal-1', now: '2026-08-14T00:00:00.000Z' })
    const values = new Map<string, string>()
    const storage = {
      getItem: (key: string) => values.get(key) ?? null,
      setItem: (key: string, value: string) => values.set(key, value),
    }

    saveResearchProposals([proposal], storage)
    expect(loadResearchProposals(storage)).toEqual([proposal])
    expect(exportResearchProposals([proposal]).proposals).toEqual([proposal])
  })

  it('drops malformed stored proposals', () => {
    const storage = {
      getItem: () => JSON.stringify({
        version: 1,
        proposals: [
          { id: 'bad', kind: 'source', title: 'Missing URL', url: '', details: 'No URL', documentId: '', createdAt: 'now' },
          { id: 'wrong-kind', kind: 'note', title: 'No', url: '', details: 'No', documentId: '', createdAt: 'now' },
        ],
      }),
    }
    expect(loadResearchProposals(storage)).toEqual([])
  })
})
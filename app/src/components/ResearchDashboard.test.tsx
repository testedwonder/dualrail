import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import type { KnowledgeDocument, ResearchSource } from '../types'
import { ResearchDashboard } from './ResearchDashboard'

const document = {
  id: 'knowledge/topics/test/concept.md', path: 'knowledge/topics/test/concept.md', title: 'Test Concept', kind: 'concept', status: 'draft', collection: 'topic', topic: 'test', topicTitle: 'Test Topic', body: '', excerpt: '', searchableText: '', prerequisites: [], nextSteps: [], related: [], sourceFiles: [], externalLinks: [], complexity: null, defaultUnderstanding: 0, exerciseId: null, isRateable: true, isPrivate: false, wordCount: 10,
} satisfies KnowledgeDocument

const sources: ResearchSource[] = [
  { id: 'paper', url: 'https://example.org/paper', label: 'Primary paper', hostname: 'example.org', authority: 'peer-reviewed', rank: 5, authorityLabel: 'Peer-reviewed publication', documents: [{ id: document.id, title: document.title, topic: 'test', topicTitle: 'Test Topic' }], topics: ['Test Topic'] },
  { id: 'docs', url: 'https://docs.example.org', label: 'Technical docs', hostname: 'docs.example.org', authority: 'documentation', rank: 3, authorityLabel: 'Technical documentation', documents: [], topics: [] },
]

function setup(proposals: Parameters<typeof ResearchDashboard>[0]['proposals'] = []) {
  const onProposalsChange = vi.fn()
  const onSelect = vi.fn()
  render(<ResearchDashboard sources={sources} documents={[document]} topics={[{ slug: 'test', title: 'Test Topic', count: 1, averageComplexity: 1 }]} proposals={proposals} onProposalsChange={onProposalsChange} onSelect={onSelect} />)
  return { user: userEvent.setup(), onProposalsChange, onSelect }
}

describe('ResearchDashboard', () => {
  it('filters sources and navigates to supporting pages', async () => {
    const { user, onSelect } = setup()
    await user.type(screen.getByRole('searchbox', { name: 'Search public sources' }), 'primary')
    expect(screen.getByText('Primary paper')).toBeInTheDocument()
    expect(screen.queryByText('Technical docs')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Test Concept/ }))
    expect(onSelect).toHaveBeenCalledWith(document.id)
  })

  it('validates and saves a local source proposal', async () => {
    const { user, onProposalsChange } = setup()
    await user.type(screen.getByRole('textbox', { name: 'Proposal title' }), 'Useful paper')
    await user.type(screen.getByRole('textbox', { name: 'Proposal details' }), 'Supports this exact claim.')
    await user.click(screen.getByRole('button', { name: 'Save locally' }))
    expect(screen.getByRole('status')).toHaveTextContent(/public HTTP/)
    await user.type(screen.getByRole('textbox', { name: 'Proposal URL' }), 'https://example.org/new')
    await user.click(screen.getByRole('button', { name: 'Save locally' }))
    expect(onProposalsChange).toHaveBeenCalledWith([expect.objectContaining({ title: 'Useful paper', url: 'https://example.org/new' })])
  })

  it('deletes a queued proposal without changing canonical content', async () => {
    const proposal = { id: 'proposal-1', kind: 'correction' as const, title: 'Clarify claim', url: '', documentId: document.id, details: 'Narrow the boundary.', createdAt: '2026-08-14T00:00:00.000Z' }
    const { user, onProposalsChange } = setup([proposal])
    await user.click(screen.getByRole('button', { name: 'Delete Clarify claim' }))
    expect(onProposalsChange).toHaveBeenCalledWith([])
  })
})
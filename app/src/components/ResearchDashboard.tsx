import { useState, type FormEvent } from 'react'
import {
  BookOpen,
  Download,
  ExternalLink,
  FilePenLine,
  Microscope,
  Search,
  ShieldCheck,
  Trash2,
} from 'lucide-react'
import { createResearchProposal, exportResearchProposals, type ResearchProposalInput } from '../lib/research'
import type {
  KnowledgeDocument,
  ResearchAuthority,
  ResearchProposal,
  ResearchSource,
  TopicSummary,
} from '../types'
import { VerificationBadge } from './VerificationBadge'

interface ResearchDashboardProps {
  sources: ResearchSource[]
  documents: KnowledgeDocument[]
  topics: TopicSummary[]
  proposals: ResearchProposal[]
  onProposalsChange: (proposals: ResearchProposal[]) => void
  onSelect: (id: string) => void
}

const authorityOrder: ResearchAuthority[] = [
  'peer-reviewed', 'government', 'preprint', 'educational', 'documentation', 'first-party', 'secondary',
]

function downloadProposals(proposals: ResearchProposal[]) {
  const payload = exportResearchProposals(proposals)
  const blob = new Blob([`${JSON.stringify(payload, null, 2)}\n`], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `dualrail-research-proposals-${new Date().toISOString().slice(0, 10)}.json`
  document.body.append(anchor)
  anchor.click()
  anchor.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 0)
}

export function ResearchDashboard({
  sources,
  documents,
  topics,
  proposals,
  onProposalsChange,
  onSelect,
}: ResearchDashboardProps) {
  const [query, setQuery] = useState('')
  const [authority, setAuthority] = useState<'all' | ResearchAuthority>('all')
  const [topic, setTopic] = useState('all')
  const [form, setForm] = useState<ResearchProposalInput>({ kind: 'source', title: '', url: '', documentId: '', details: '' })
  const [formStatus, setFormStatus] = useState('')

  const filteredSources = sources.filter((source) => {
    if (authority !== 'all' && source.authority !== authority) return false
    if (topic !== 'all' && !source.documents.some((document) => document.topic === topic)) return false
    const normalizedQuery = query.trim().toLocaleLowerCase()
    if (!normalizedQuery) return true
    return [source.label, source.hostname, source.authorityLabel, ...source.topics, ...source.documents.map((document) => document.title)]
      .join(' ')
      .toLocaleLowerCase()
      .includes(normalizedQuery)
  })

  function submitProposal(event: FormEvent) {
    event.preventDefault()
    try {
      const proposal = createResearchProposal(form)
      onProposalsChange([proposal, ...proposals])
      setForm({ kind: 'source', title: '', url: '', documentId: '', details: '' })
      setFormStatus('Saved locally. Export the queue when it is ready for repository review.')
    } catch (error) {
      setFormStatus(error instanceof Error ? error.message : 'Could not save this proposal.')
    }
  }

  return (
    <main className="research-view">
      <header className="research-header">
        <div>
          <span className="eyebrow">Public technical evidence</span>
          <h1>Research</h1>
        </div>
        <dl className="research-summary">
          <div><dt>Sources</dt><dd>{sources.length}</dd></div>
          <div><dt>Topics</dt><dd>{new Set(sources.flatMap((source) => source.topics)).size}</dd></div>
          <div><dt>Proposals</dt><dd>{proposals.length}</dd></div>
        </dl>
        <VerificationBadge scope="research" />
      </header>

      <section className="credibility-guide" aria-labelledby="credibility-title">
        <div className="progress-section-heading"><ShieldCheck size={19} /><h2 id="credibility-title">Evaluate before relying</h2></div>
        <div className="credibility-steps">
          <div><strong>1 · Match</strong><span>Does the source support this exact system, claim, metric, and time period?</span></div>
          <div><strong>2 · Authority</strong><span>Prefer primary publications, official records, and technical documentation.</span></div>
          <div><strong>3 · Reproduce</strong><span>Look for methods, uncertainty, data, code, and a fair comparator.</span></div>
          <div><strong>4 · Bound</strong><span>Keep unresolved causes and time-sensitive claims visibly conditional.</span></div>
        </div>
      </section>

      <section className="research-section" aria-labelledby="source-registry-title">
        <div className="research-section-heading">
          <div className="progress-section-heading"><Microscope size={19} /><h2 id="source-registry-title">Source registry</h2></div>
          <span>{filteredSources.length} of {sources.length}</span>
        </div>
        <div className="research-filters">
          <label className="search-box">
            <Search size={17} />
            <input aria-label="Search public sources" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search source, topic, or document" />
          </label>
          <label>Authority<select aria-label="Filter source authority" value={authority} onChange={(event) => setAuthority(event.target.value as 'all' | ResearchAuthority)}><option value="all">All authority levels</option>{authorityOrder.map((value) => <option key={value} value={value}>{value}</option>)}</select></label>
          <label>Topic<select aria-label="Filter source topic" value={topic} onChange={(event) => setTopic(event.target.value)}><option value="all">All topics</option>{topics.map((item) => <option key={item.slug} value={item.slug}>{item.title}</option>)}</select></label>
        </div>
        <div className="research-source-list">
          {filteredSources.map((source) => (
            <article className="research-source" key={source.id}>
              <div className="research-source-main">
                <span className={`authority-badge authority-${source.authority}`}>{source.authorityLabel}</span>
                <h3>{source.label}</h3>
                <a href={source.url} target="_blank" rel="noreferrer">{source.hostname}<ExternalLink size={13} /></a>
              </div>
              <div className="research-source-links">
                {source.documents.slice(0, 4).map((document) => (
                  <button type="button" key={document.id} onClick={() => onSelect(document.id)}><BookOpen size={13} />{document.title}</button>
                ))}
                {source.documents.length > 4 && <span>+{source.documents.length - 4} more references</span>}
                {source.documents.length === 0 && <span>Source portfolio reference</span>}
              </div>
            </article>
          ))}
          {filteredSources.length === 0 && <div className="empty-state"><Search size={24} /><strong>No matching public sources</strong></div>}
        </div>
      </section>

      <section className="research-section proposal-section" aria-labelledby="proposal-title">
        <div className="research-section-heading">
          <div className="progress-section-heading"><FilePenLine size={19} /><h2 id="proposal-title">Source and correction queue</h2></div>
          <button type="button" className="secondary-button" disabled={proposals.length === 0} onClick={() => downloadProposals(proposals)}><Download size={15} />Export queue</button>
        </div>
        <form className="proposal-form" onSubmit={submitProposal}>
          <label>Proposal type<select aria-label="Proposal type" value={form.kind} onChange={(event) => setForm((current) => ({ ...current, kind: event.target.value as 'source' | 'correction' }))}><option value="source">Additional source</option><option value="correction">Correction</option></select></label>
          <label>Short title<input aria-label="Proposal title" value={form.title} onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))} /></label>
          <label>Public URL<input aria-label="Proposal URL" type="url" placeholder={form.kind === 'source' ? 'https://…' : 'Optional'} value={form.url} onChange={(event) => setForm((current) => ({ ...current, url: event.target.value }))} /></label>
          <label>Related page<select aria-label="Related knowledge page" value={form.documentId} onChange={(event) => setForm((current) => ({ ...current, documentId: event.target.value }))}><option value="">General research</option>{documents.filter((document) => document.collection === 'topic' && document.isRateable).map((document) => <option key={document.id} value={document.id}>{document.title}</option>)}</select></label>
          <label className="proposal-details">Evidence or correction<textarea aria-label="Proposal details" value={form.details} onChange={(event) => setForm((current) => ({ ...current, details: event.target.value }))} placeholder="State the exact claim, evidence, uncertainty, or correction." /></label>
          <button type="submit" className="primary-exercise-button">Save locally</button>
          {formStatus && <p className="proposal-status" role="status">{formStatus}</p>}
        </form>

        {proposals.length > 0 && (
          <div className="proposal-list">
            {proposals.map((proposal) => (
              <article key={proposal.id}>
                <span>{proposal.kind}</span><h3>{proposal.title}</h3><p>{proposal.details}</p>
                <button type="button" aria-label={`Delete ${proposal.title}`} onClick={() => onProposalsChange(proposals.filter((item) => item.id !== proposal.id))}><Trash2 size={15} /></button>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
import { BookOpenCheck, ExternalLink, FileText, NotebookPen } from 'lucide-react'
import { documentsById } from '../data'
import { understandingLabel } from '../lib/knowledge'
import type { KnowledgeDocument, PersonalEntry } from '../types'

interface StudyPanelProps {
  document: KnowledgeDocument
  entry: PersonalEntry
  onUpdate: (patch: Partial<Pick<PersonalEntry, 'understanding' | 'notes'>>) => void
  onNavigate: (id: string) => void
}

function formatSaved(value: string) {
  if (!value) return 'No personal changes yet'
  return `Saved ${new Intl.DateTimeFormat(undefined, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(value))}`
}

export function StudyPanel({ document, entry, onUpdate, onNavigate }: StudyPanelProps) {
  return (
    <aside className="study-panel" aria-label="Personal study panel">
      <section className="study-section">
        <div className="section-heading">
          <BookOpenCheck size={18} />
          <h2>Understanding</h2>
        </div>
        {document.isRateable ? (
          <>
            <div className="rating-line">
              <input
                aria-label="Understanding rating"
                type="number"
                min="0"
                max="10"
                value={entry.understanding}
                onChange={(event) => onUpdate({ understanding: Number(event.target.value) || 0 })}
              />
              <span>/ 10</span>
              <strong>{understandingLabel(entry.understanding)}</strong>
            </div>
            <input
              className="rating-range"
              aria-label="Understanding rating slider"
              type="range"
              min="0"
              max="10"
              step="1"
              value={entry.understanding}
              onChange={(event) => onUpdate({ understanding: Number(event.target.value) })}
              style={{ '--rating': `${entry.understanding * 10}%` } as React.CSSProperties}
            />
          </>
        ) : (
          <p className="muted">Reference pages do not contribute to progress scoring.</p>
        )}
      </section>

      <section className="study-section notes-section">
        <div className="section-heading">
          <NotebookPen size={18} />
          <h2>Personal notes</h2>
        </div>
        <textarea
          value={entry.notes}
          onChange={(event) => onUpdate({ notes: event.target.value })}
          placeholder="Write observations, questions, or recall prompts..."
          aria-label={`Personal notes for ${document.title}`}
        />
        <span className="save-state">{formatSaved(entry.updatedAt)}</span>
      </section>

      <section className="study-section">
        <div className="section-heading">
          <FileText size={18} />
          <h2>Verification</h2>
        </div>
        <dl className="verification-list">
          <div><dt>Status</dt><dd>{document.status}</dd></div>
          <div><dt>Kind</dt><dd>{document.kind}</dd></div>
          {document.complexity && (
            <>
              <div><dt>Depth</dt><dd>{document.complexity.depth}</dd></div>
              <div><dt>Frequency</dt><dd>{document.complexity.frequencyThz} THz</dd></div>
            </>
          )}
        </dl>
        {document.sourceFiles.length > 0 && (
          <div className="source-list">
            <span className="source-list-label">Source files</span>
            {document.sourceFiles.map((source) => {
              const target = documentsById.get(source)
              return target ? (
                <button type="button" key={source} onClick={() => onNavigate(target.id)}>
                  <FileText size={14} /> {target.title}
                </button>
              ) : (
                <span key={source}><FileText size={14} /> {source}</span>
              )
            })}
          </div>
        )}
        {document.externalLinks.length > 0 && (
          <div className="source-list">
            <span className="source-list-label">Public references</span>
            {document.externalLinks.slice(0, 6).map((link) => (
              <a key={link} href={link} target="_blank" rel="noreferrer">
                <ExternalLink size={14} /> {new URL(link).hostname}
              </a>
            ))}
          </div>
        )}
      </section>
    </aside>
  )
}
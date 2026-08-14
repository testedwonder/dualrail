import { ArrowRight, FileText, LockKeyhole } from 'lucide-react'
import { documentIds, documentsById, knowledgeReferenceToId } from '../data'
import type { KnowledgeDocument, PersonalEntry } from '../types'
import { ExerciseLab } from './ExerciseLab'
import { MarkdownView } from './MarkdownView'

interface DocumentReaderProps {
  document: KnowledgeDocument
  personalEntry: PersonalEntry
  onNavigate: (id: string, anchor?: string) => void
}

function textColor(background: string) {
  const red = Number.parseInt(background.slice(1, 3), 16)
  const green = Number.parseInt(background.slice(3, 5), 16)
  const blue = Number.parseInt(background.slice(5, 7), 16)
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue > 150 ? '#111' : '#fff'
}

function relationDocument(reference: string) {
  return documentsById.get(knowledgeReferenceToId(reference))
}

function RelationRow({
  label,
  references,
  onNavigate,
}: {
  label: string
  references: string[]
  onNavigate: (id: string) => void
}) {
  if (references.length === 0) return null
  return (
    <div className="relation-row">
      <span className="relation-label">{label}</span>
      <div className="relation-links">
        {references.map((reference) => {
          const target = relationDocument(reference)
          if (!target) return <span key={reference}>{reference}</span>
          return (
            <button type="button" key={reference} onClick={() => onNavigate(target.id)}>
              {target.title}
              <ArrowRight size={13} />
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function DocumentReader({ document, personalEntry, onNavigate }: DocumentReaderProps) {
  return (
    <article className="reader" aria-labelledby="document-title">
      <header className="reader-header">
        <div className="reader-breadcrumb">
          <span>{document.topicTitle ?? 'Knowledge base'}</span>
          <span>/</span>
          <span>{document.kind}</span>
        </div>
        <div className="reader-title-row">
          <div>
            <div className="reader-kicker">
              <span className={`status-dot status-${document.status}`} />
              {document.status}
              {document.isPrivate && (
                <span className="private-label"><LockKeyhole size={13} /> Private source</span>
              )}
            </div>
            <h1 id="document-title">{document.title}</h1>
          </div>
          <div className="reader-metrics">
            {document.complexity && (
              <span
                className="complexity-badge"
                style={{
                  backgroundColor: document.complexity.color,
                  color: textColor(document.complexity.color),
                }}
                title={`${document.complexity.wavelengthNm} nm · ${document.complexity.frequencyThz} THz`}
              >
                {document.complexity.score.toFixed(1)}
                <small>complexity</small>
              </span>
            )}
            {document.isRateable && (
              <span className="understanding-badge">
                {personalEntry.understanding}
                <small>understanding</small>
              </span>
            )}
          </div>
        </div>
        <div className="reader-meta-line">
          <span><FileText size={14} /> {document.wordCount.toLocaleString()} words</span>
          <span>{document.path}</span>
        </div>
        <div className="relations-band">
          <RelationRow label="Prerequisites" references={document.prerequisites} onNavigate={onNavigate} />
          <RelationRow label="Next" references={document.nextSteps} onNavigate={onNavigate} />
          <RelationRow label="Related" references={document.related} onNavigate={onNavigate} />
        </div>
      </header>

      <MarkdownView
        body={document.body}
        currentPath={document.path}
        documentIds={documentIds}
        onNavigate={onNavigate}
      />
      {document.exerciseId && (
        <ExerciseLab
          exerciseId={document.exerciseId}
          documentId={document.id}
          onNavigate={onNavigate}
        />
      )}
    </article>
  )
}
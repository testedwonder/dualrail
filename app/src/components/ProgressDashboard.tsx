import { ArrowRight, BookCheck, RotateCcw, Sparkles } from 'lucide-react'
import { getPersonalEntry, recommendedDocuments, summarizeProgress } from '../lib/knowledge'
import type { KnowledgeDocument, PersonalState, TopicSummary } from '../types'

interface ProgressDashboardProps {
  documents: KnowledgeDocument[]
  topics: TopicSummary[]
  personalState: PersonalState
  onSelect: (id: string) => void
  onOpenTopic: (slug: string) => void
  onReset: () => void
}

export function ProgressDashboard({
  documents,
  topics,
  personalState,
  onSelect,
  onOpenTopic,
  onReset,
}: ProgressDashboardProps) {
  const topicDocuments = documents.filter((document) => document.collection === 'topic' && document.isRateable)
  const topicProgress = summarizeProgress(topicDocuments, personalState)
  const recommendations = recommendedDocuments(documents, personalState)

  return (
    <main className="progress-view">
      <header className="progress-header">
        <div>
          <span className="eyebrow">Personal study record</span>
          <h1>Understanding</h1>
        </div>
        <button type="button" className="secondary-button" onClick={onReset}>
          <RotateCcw size={16} /> Reset personal data
        </button>
      </header>

      <section className="progress-stats" aria-label="Progress summary">
        <div><strong>{topicProgress.average}</strong><span>topic average</span></div>
        <div><strong>{topicProgress.ratedCount}/{topicProgress.total}</strong><span>topics rated</span></div>
        <div><strong>{topicProgress.masteredCount}</strong><span>confident topics</span></div>
        <div><strong>{topicProgress.notesCount}</strong><span>topic notes</span></div>
        <div><strong>{topics.length}</strong><span>topic families</span></div>
      </section>

      <section className="progress-section">
        <div className="progress-section-heading">
          <BookCheck size={19} />
          <h2>Topic understanding</h2>
        </div>
        <div className="topic-progress-list">
          {topics.map((topic) => {
            const members = topicDocuments.filter((document) => document.topic === topic.slug)
            const summary = summarizeProgress(members, personalState)
            return (
              <button type="button" className="topic-progress-row" key={topic.slug} onClick={() => onOpenTopic(topic.slug)}>
                <div className="topic-progress-title">
                  <strong>{topic.title}</strong>
                  <span>{summary.ratedCount}/{summary.total} rated · complexity {topic.averageComplexity}</span>
                </div>
                <div className="progress-track" aria-label={`${topic.title} average ${summary.average} out of 10`}>
                  <span style={{ width: `${summary.average * 10}%` }} />
                </div>
                <b>{summary.average}</b>
                <ArrowRight size={16} />
              </button>
            )
          })}
        </div>
      </section>

      <div className="progress-columns progress-columns-single">
        <section className="progress-section">
          <div className="progress-section-heading">
            <Sparkles size={19} />
            <h2>Study queue</h2>
          </div>
          <div className="study-queue">
            {recommendations.map((document, index) => {
              const entry = getPersonalEntry(document, personalState)
              return (
                <button type="button" key={document.id} onClick={() => onSelect(document.id)}>
                  <span className="queue-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="queue-color" style={{ backgroundColor: document.complexity?.color }} />
                  <span><strong>{document.title}</strong><small>{document.topicTitle} · rated {entry.understanding}</small></span>
                  <ArrowRight size={15} />
                </button>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
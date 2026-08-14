import { BookOpen, Filter, RotateCcw, Route, Search } from 'lucide-react'
import { filterDocuments, getPersonalEntry } from '../lib/knowledge'
import type {
  KnowledgeDocument,
  LibraryFilters,
  PersonalState,
  TopicSummary,
} from '../types'

interface LibrarySidebarProps {
  documents: KnowledgeDocument[]
  topics: TopicSummary[]
  personalState: PersonalState
  filters: LibraryFilters
  selectedId: string
  onFiltersChange: (filters: LibraryFilters) => void
  onSelect: (id: string) => void
}

function groupLabel(document: KnowledgeDocument) {
  if (document.collection === 'base') return 'Source material'
  if (document.collection === 'learning-path') return 'Learning paths'
  return document.topicTitle ?? 'Reference'
}

function collectionIcon(collection: LibraryFilters['collection']) {
  if (collection === 'path') return <Route size={15} />
  return <BookOpen size={15} />
}

export function LibrarySidebar({
  documents,
  topics,
  personalState,
  filters,
  selectedId,
  onFiltersChange,
  onSelect,
}: LibrarySidebarProps) {
  const filtered = filterDocuments(documents, personalState, filters)
  const groups = new Map<string, KnowledgeDocument[]>()
  for (const document of filtered) {
    const label = groupLabel(document)
    groups.set(label, [...(groups.get(label) ?? []), document])
  }
  const kinds = [...new Set(
    documents
      .filter((document) => document.collection === 'topic' && document.isRateable)
      .map((document) => document.kind),
  )].sort()

  function patch(patchValue: Partial<LibraryFilters>) {
    onFiltersChange({ ...filters, ...patchValue })
  }

  return (
    <aside className="library-sidebar" aria-label="Knowledge library">
      <div className="library-controls">
        <label className="search-box">
          <Search size={17} />
          <input
            type="search"
            value={filters.query}
            onChange={(event) => patch({ query: event.target.value })}
            placeholder="Search concepts and sources"
            aria-label="Search knowledge"
          />
        </label>

        <div className="segmented-control" aria-label="Document collection">
          {(['topic', 'path', 'all'] as const).map((collection) => (
            <button
              type="button"
              key={collection}
              className={filters.collection === collection ? 'active' : ''}
              onClick={() => patch({ collection, topic: 'all' })}
            >
              {collectionIcon(collection)}
              <span>{collection === 'topic' ? 'Topics' : collection === 'path' ? 'Paths' : 'All'}</span>
            </button>
          ))}
        </div>

        <details className="filter-disclosure">
          <summary><Filter size={15} /> Filters</summary>
          <div className="filter-grid">
            <label>
              Topic
              <select value={filters.topic} onChange={(event) => patch({ topic: event.target.value })}>
                <option value="all">All topics</option>
                {topics.map((topic) => <option key={topic.slug} value={topic.slug}>{topic.title}</option>)}
              </select>
            </label>
            <label>
              Kind
              <select value={filters.kind} onChange={(event) => patch({ kind: event.target.value })}>
                <option value="all">All kinds</option>
                {kinds.map((kind) => <option key={kind} value={kind}>{kind}</option>)}
              </select>
            </label>
            <label>
              Relationships
              <select
                value={filters.relationship}
                onChange={(event) => patch({ relationship: event.target.value as LibraryFilters['relationship'] })}
              >
                <option value="all">Any</option>
                <option value="prerequisites">Has prerequisites</option>
                <option value="next-steps">Has next steps</option>
                <option value="terminal">Terminal page</option>
              </select>
            </label>
            <label>
              Understanding
              <select
                value={filters.understanding}
                onChange={(event) => patch({ understanding: event.target.value as LibraryFilters['understanding'] })}
              >
                <option value="all">Any rating</option>
                <option value="unrated">Not rated</option>
                <option value="learning">Learning · 1-7</option>
                <option value="confident">Confident · 8-10</option>
              </select>
            </label>
          </div>
          <label className="complexity-filter">
            <span>Maximum complexity <strong>{filters.maximumComplexity.toFixed(0)}</strong></span>
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={filters.maximumComplexity}
              onChange={(event) => patch({ maximumComplexity: Number(event.target.value) })}
            />
          </label>
          <button type="button" className="text-button" onClick={() => onFiltersChange({
            query: '',
            collection: 'topic',
            topic: 'all',
            kind: 'all',
            relationship: 'all',
            maximumComplexity: 10,
            understanding: 'all',
          })}>
            <RotateCcw size={14} /> Reset filters
          </button>
        </details>
      </div>

      <div className="result-count"><strong>{filtered.length}</strong> results</div>
      <div className="library-results">
        {[...groups.entries()].map(([label, group]) => (
          <section className="library-group" key={label}>
            <h2>{label}<span>{group.length}</span></h2>
            <div className="library-items">
              {group.map((document) => {
                const entry = getPersonalEntry(document, personalState)
                return (
                  <button
                    type="button"
                    key={document.id}
                    className={`library-item ${selectedId === document.id ? 'selected' : ''}`}
                    onClick={() => onSelect(document.id)}
                  >
                    <span
                      className="complexity-stripe"
                      style={{ backgroundColor: document.complexity?.color ?? '#8a9590' }}
                    />
                    <span className="library-item-copy">
                      <strong>{document.title}</strong>
                      <span>{document.kind}</span>
                    </span>
                    {document.isRateable && <span className="item-rating">{entry.understanding}</span>}
                  </button>
                )
              })}
            </div>
          </section>
        ))}
        {filtered.length === 0 && (
          <div className="empty-state">
            <Search size={24} />
            <strong>No matching documents</strong>
          </div>
        )}
      </div>
    </aside>
  )
}
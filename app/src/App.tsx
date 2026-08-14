import { lazy, startTransition, Suspense, useEffect, useRef, useState, type ChangeEvent } from 'react'
import {
  Atom,
  BarChart3,
  BookOpen,
  Menu,
  Microscope,
  Network,
  PanelRightOpen,
  Settings,
  SlidersHorizontal,
  X,
} from 'lucide-react'
import './App.css'
import { DocumentReader } from './components/DocumentReader'
import { LibrarySidebar } from './components/LibrarySidebar'
import { ReportIssueDialog } from './components/ReportIssueDialog'
import { SettingsPanel } from './components/SettingsPanel'
import { StudyPanel } from './components/StudyPanel'
import { VerificationBadge } from './components/VerificationBadge'
import { knowledgeIndex } from './data'
import {
  defaultFilters,
  exportPersonalState,
  getPersonalEntry,
  importPersonalState,
  loadPersonalState,
  PERSONAL_STORAGE_KEY,
  savePersonalState,
  summarizeProgress,
  updatePersonalEntry,
} from './lib/knowledge'
import { exportResearchProposals, loadResearchProposals, saveResearchProposals } from './lib/research'
import type { LibraryFilters, MainView, PersonalEntry, PersonalState, ResearchProposal } from './types'

const DualRailLab = lazy(() => import('./components/DualRailLab').then((module) => ({ default: module.DualRailLab })))
const KnowledgeMap = lazy(() => import('./components/KnowledgeMap').then((module) => ({ default: module.KnowledgeMap })))
const ProgressDashboard = lazy(() => import('./components/ProgressDashboard').then((module) => ({ default: module.ProgressDashboard })))
const ResearchDashboard = lazy(() => import('./components/ResearchDashboard').then((module) => ({ default: module.ResearchDashboard })))

function ViewLoading({ label }: { label: string }) {
  return <main className="view-loading" role="status"><span>Preparing {label}…</span></main>
}

const defaultDocumentId = 'knowledge/topics/dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md'
const validDocumentIds = new Set(knowledgeIndex.documents.map((document) => document.id))

function downloadJson(payload: unknown, filename: string) {
  const blob = new Blob([`${JSON.stringify(payload, null, 2)}\n`], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  document.body.append(anchor)
  anchor.click()
  anchor.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 0)
}

function initialDocumentId() {
  const requested = new URLSearchParams(window.location.search).get('doc')
  if (requested && validDocumentIds.has(requested)) return requested
  return validDocumentIds.has(defaultDocumentId)
    ? defaultDocumentId
    : knowledgeIndex.documents.find((document) => document.isRateable)?.id ?? knowledgeIndex.documents[0].id
}

function App() {
  const [view, setView] = useState<MainView>('library')
  const [selectedId, setSelectedId] = useState(initialDocumentId)
  const [personalState, setPersonalState] = useState<PersonalState>(() => loadPersonalState())
  const [researchProposals, setResearchProposals] = useState<ResearchProposal[]>(() => loadResearchProposals())
  const [filters, setFilters] = useState<LibraryFilters>(defaultFilters)
  const [libraryOpen, setLibraryOpen] = useState(false)
  const [studyOpen, setStudyOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [reportIssueOpen, setReportIssueOpen] = useState(false)
  const [pendingAnchor, setPendingAnchor] = useState('')
  const [notice, setNotice] = useState('')
  const importInput = useRef<HTMLInputElement>(null)

  const selectedDocument = knowledgeIndex.documents.find((document) => document.id === selectedId)
    ?? knowledgeIndex.documents[0]
  const selectedEntry = getPersonalEntry(selectedDocument, personalState)
  const progressSummary = summarizeProgress(
    knowledgeIndex.documents.filter((document) => document.collection === 'topic' && document.isRateable),
    personalState,
  )

  useEffect(() => {
    function handlePopState() {
      const requested = new URLSearchParams(window.location.search).get('doc')
      if (requested && validDocumentIds.has(requested)) {
        setSelectedId(requested)
        setPendingAnchor(window.location.hash.slice(1))
        setView('library')
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (!pendingAnchor) return
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(pendingAnchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setPendingAnchor('')
    })
    return () => window.cancelAnimationFrame(frame)
  }, [pendingAnchor, selectedId])

  useEffect(() => {
    if (!notice) return
    const timeout = window.setTimeout(() => setNotice(''), 2800)
    return () => window.clearTimeout(timeout)
  }, [notice])

  function navigateDocument(id: string, anchor = '') {
    if (!validDocumentIds.has(id)) return
    startTransition(() => {
      setSelectedId(id)
      setView('library')
      setLibraryOpen(false)
      setPendingAnchor(anchor)
    })
    const url = new URL(window.location.href)
    url.searchParams.set('doc', id)
    url.hash = anchor
    window.history.pushState({}, '', url)
  }

  function chooseView(nextView: MainView) {
    startTransition(() => setView(nextView))
    setLibraryOpen(false)
    setStudyOpen(false)
    setSettingsOpen(false)
    setReportIssueOpen(false)
  }

  function updateSelected(patch: Partial<Pick<PersonalEntry, 'understanding' | 'notes'>>) {
    setPersonalState((current) => {
      const next = updatePersonalEntry(current, selectedDocument, patch)
      savePersonalState(next)
      return next
    })
  }

  function updateResearchProposals(proposals: ResearchProposal[]) {
    setResearchProposals(proposals)
    saveResearchProposals(proposals)
  }

  function downloadPersonalData() {
    const payload = exportPersonalState(personalState, progressSummary)
    downloadJson(payload, `dualrail-atlas-${new Date().toISOString().slice(0, 10)}.json`)
    setNotice('Personal study data exported')
  }

  function downloadResearchData() {
    downloadJson(
      exportResearchProposals(researchProposals),
      `dualrail-research-proposals-${new Date().toISOString().slice(0, 10)}.json`,
    )
    setNotice('Research proposal queue exported')
  }

  async function importPersonalData(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    try {
      const imported = importPersonalState(await file.text())
      setPersonalState(imported)
      savePersonalState(imported)
      setNotice(`Imported ${Object.keys(imported).length} personal entries`)
    } catch (error) {
      setNotice(error instanceof Error ? error.message : 'Import failed')
    }
  }

  function resetPersonalData() {
    if (!window.confirm('Remove every local note and understanding rating?')) return
    localStorage.removeItem(PERSONAL_STORAGE_KEY)
    setPersonalState({})
    setNotice('Personal study data reset')
  }

  function openTopic(slug: string) {
    const first = knowledgeIndex.documents.find(
      (document) => document.topic === slug && document.isRateable,
    )
    setFilters({ ...defaultFilters, topic: slug })
    if (first) navigateDocument(first.id)
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <img src={`${import.meta.env.BASE_URL}icon.png`} alt="" />
          <div><strong>Dualrail Atlas</strong><span>Knowledge study system</span></div>
        </div>

        <nav className="main-tabs" aria-label="Main views">
          <button type="button" aria-label="Library" aria-current={view === 'library' ? 'page' : undefined} className={view === 'library' ? 'active' : ''} onClick={() => chooseView('library')}>
            <BookOpen size={18} /><span>Library</span>
          </button>
          <button type="button" aria-label="Map" aria-current={view === 'map' ? 'page' : undefined} className={view === 'map' ? 'active' : ''} onClick={() => chooseView('map')}>
            <Network size={18} /><span>Map</span>
          </button>
          <button type="button" aria-label="Progress" aria-current={view === 'progress' ? 'page' : undefined} className={view === 'progress' ? 'active' : ''} onClick={() => chooseView('progress')}>
            <BarChart3 size={18} /><span>Progress</span>
          </button>
          <button type="button" aria-label="Research" aria-current={view === 'research' ? 'page' : undefined} className={view === 'research' ? 'active' : ''} onClick={() => chooseView('research')}>
            <Microscope size={18} /><span>Research</span>
          </button>
          <button type="button" aria-label="Lab" aria-current={view === 'lab' ? 'page' : undefined} className={view === 'lab' ? 'active' : ''} onClick={() => chooseView('lab')}>
            <Atom size={18} /><span>Lab</span>
          </button>
        </nav>

        <div className="app-actions">
          <VerificationBadge scope="application" compact />
          <button type="button" className="icon-button settings-button" onClick={() => setSettingsOpen(true)} aria-label="Open settings" title="Settings">
            <Settings size={18} />
          </button>
          {view === 'library' && (
            <button type="button" className="icon-button mobile-button" onClick={() => setLibraryOpen(true)} aria-label="Open library" title="Open library">
              <Menu size={19} />
            </button>
          )}
        </div>
      </header>

      {view === 'library' && (
        <div className="library-layout">
          <div className={`library-drawer ${libraryOpen ? 'open' : ''}`}>
            <button type="button" className="drawer-close" onClick={() => setLibraryOpen(false)} aria-label="Close library"><X size={18} /></button>
            <LibrarySidebar
              documents={knowledgeIndex.documents}
              topics={knowledgeIndex.topics}
              personalState={personalState}
              filters={filters}
              selectedId={selectedDocument.id}
              onFiltersChange={setFilters}
              onSelect={navigateDocument}
            />
          </div>

          <main className="reader-pane">
            <div className="reader-mobile-toolbar">
              <button type="button" onClick={() => setLibraryOpen(true)}><SlidersHorizontal size={16} /> Browse</button>
              <button type="button" onClick={() => setStudyOpen(true)}><PanelRightOpen size={16} /> Study</button>
            </div>
            <DocumentReader
              document={selectedDocument}
              personalEntry={selectedEntry}
              onNavigate={navigateDocument}
            />
          </main>

          <div className={`study-drawer ${studyOpen ? 'open' : ''}`}>
            <button type="button" className="drawer-close" onClick={() => setStudyOpen(false)} aria-label="Close study panel"><X size={18} /></button>
            <StudyPanel
              document={selectedDocument}
              entry={selectedEntry}
              onUpdate={updateSelected}
              onNavigate={navigateDocument}
            />
          </div>
        </div>
      )}

      {view === 'map' && (
        <Suspense fallback={<ViewLoading label="map" />}>
          <KnowledgeMap
            documents={knowledgeIndex.documents}
            personalState={personalState}
            selectedId={selectedDocument.id}
            onSelect={navigateDocument}
          />
        </Suspense>
      )}

      {view === 'progress' && (
        <Suspense fallback={<ViewLoading label="progress" />}>
          <ProgressDashboard
            documents={knowledgeIndex.documents}
            topics={knowledgeIndex.topics}
            personalState={personalState}
            onSelect={navigateDocument}
            onOpenTopic={openTopic}
            onReset={resetPersonalData}
          />
        </Suspense>
      )}

      {view === 'research' && (
        <Suspense fallback={<ViewLoading label="research" />}>
          <ResearchDashboard
            sources={knowledgeIndex.researchSources}
            documents={knowledgeIndex.documents}
            topics={knowledgeIndex.topics}
            proposals={researchProposals}
            onProposalsChange={updateResearchProposals}
            onSelect={navigateDocument}
          />
        </Suspense>
      )}

      {view === 'lab' && (
        <Suspense fallback={<main className="view-loading"><Atom size={24} /><span>Preparing state space…</span></main>}>
          <DualRailLab onNavigate={navigateDocument} />
        </Suspense>
      )}

      {(libraryOpen || studyOpen) && <button type="button" className="drawer-backdrop" onClick={() => { setLibraryOpen(false); setStudyOpen(false) }} aria-label="Close drawer" />}
      <SettingsPanel
        open={settingsOpen}
        progress={progressSummary}
        proposalCount={researchProposals.length}
        onClose={() => setSettingsOpen(false)}
        onImportStudy={() => importInput.current?.click()}
        onExportStudy={downloadPersonalData}
        onExportResearch={downloadResearchData}
        onReportIssue={() => { setSettingsOpen(false); setReportIssueOpen(true) }}
        onResetStudy={resetPersonalData}
      />
      <ReportIssueDialog open={reportIssueOpen} onClose={() => setReportIssueOpen(false)} />
      <input ref={importInput} type="file" accept="application/json,.json" hidden onChange={importPersonalData} />
      {notice && <div className="toast" role="status">{notice}</div>}
    </div>
  )
}

export default App

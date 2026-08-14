import { useEffect, useRef } from 'react'
import { Bug, Download, ExternalLink, FileJson, HeartHandshake, RotateCcw, Settings, Upload, X } from 'lucide-react'
import { authorName, portfolioUrl, supportLinks } from '../lib/release'
import type { ProgressSummary } from '../types'

interface SettingsPanelProps {
  open: boolean
  progress: ProgressSummary
  proposalCount: number
  onClose: () => void
  onImportStudy: () => void
  onExportStudy: () => void
  onExportResearch: () => void
  onReportIssue: () => void
  onResetStudy: () => void
}

export function SettingsPanel({
  open,
  progress,
  proposalCount,
  onClose,
  onImportStudy,
  onExportStudy,
  onExportResearch,
  onReportIssue,
  onResetStudy,
}: SettingsPanelProps) {
  const closeButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    closeButton.current?.focus()
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, open])

  if (!open) return null

  return (
    <div className="settings-layer">
      <button type="button" className="settings-backdrop" aria-label="Dismiss settings" onClick={onClose} />
      <section className="settings-panel" role="dialog" aria-modal="true" aria-labelledby="settings-title">
        <header>
          <div><span className="eyebrow"><Settings size={14} /> Local profile</span><h1 id="settings-title">Settings</h1></div>
          <button ref={closeButton} type="button" className="icon-button" aria-label="Close settings" onClick={onClose}><X size={18} /></button>
        </header>

        <p className="settings-intro">Your study profile stays in this browser unless you export it. No account or database is required.</p>

        <section className="settings-section" aria-labelledby="profile-summary-title">
          <h2 id="profile-summary-title">Study profile</h2>
          <dl className="settings-stats">
            <div><dt>Average</dt><dd>{progress.average}</dd></div>
            <div><dt>Rated</dt><dd>{progress.ratedCount}/{progress.total}</dd></div>
            <div><dt>Notes</dt><dd>{progress.notesCount}</dd></div>
            <div><dt>Confident</dt><dd>{progress.masteredCount}</dd></div>
          </dl>
        </section>

        <section className="settings-section" aria-labelledby="study-data-title">
          <h2 id="study-data-title">Study data</h2>
          <p>Export includes personal notes, understanding ratings, timestamps, and a current progress snapshot.</p>
          <div className="settings-actions">
            <button type="button" onClick={onExportStudy}><Download size={16} /><span><strong>Export study data</strong><small>Portable version-1 JSON</small></span></button>
            <button type="button" onClick={onImportStudy}><Upload size={16} /><span><strong>Import study data</strong><small>Restore a Dualrail Atlas JSON file</small></span></button>
          </div>
        </section>

        <section className="settings-section" aria-labelledby="research-data-title">
          <h2 id="research-data-title">Research queue</h2>
          <p>{proposalCount} local source or correction proposal{proposalCount === 1 ? '' : 's'}.</p>
          <div className="settings-actions">
            <button type="button" disabled={proposalCount === 0} onClick={onExportResearch}><FileJson size={16} /><span><strong>Export proposal queue</strong><small>Review before changing canonical content</small></span></button>
          </div>
        </section>

        <section className="settings-section" aria-labelledby="help-title">
          <h2 id="help-title">Help and feedback</h2>
          <p>Open the guided public-report flow, review maintainer capacity, and keep sensitive security details private.</p>
          <div className="settings-actions">
            <button type="button" onClick={onReportIssue}><Bug size={16} /><span><strong>Report a bug</strong><small>Continue to the GitHub issue form</small></span></button>
          </div>
        </section>

        <section className="settings-section" aria-labelledby="author-title">
          <h2 id="author-title">About and support</h2>
          <p>Created and maintained by <strong>{authorName}</strong>. The study app remains free; support is voluntary and never changes access, source ranking, or issue priority.</p>
          <div className="settings-public-links">
            {portfolioUrl && <a href={portfolioUrl} target="_blank" rel="noreferrer">Author profile <ExternalLink size={13} /></a>}
            {supportLinks.map((link) => <a key={link.label} href={link.url} target="_blank" rel="noreferrer"><HeartHandshake size={13} />{link.label} <ExternalLink size={12} /></a>)}
          </div>
        </section>

        <section className="settings-section settings-danger" aria-labelledby="reset-title">
          <h2 id="reset-title">Reset</h2>
          <p>Remove personal notes and understanding ratings from this browser. Export first if you need a backup.</p>
          <button type="button" onClick={onResetStudy}><RotateCcw size={15} />Reset study data</button>
        </section>
      </section>
    </div>
  )
}

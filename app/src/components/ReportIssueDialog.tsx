import { useEffect, useRef, useState } from 'react'
import { Bug, ExternalLink, HeartHandshake, ShieldAlert, X } from 'lucide-react'
import {
  authorName as configuredAuthorName,
  bugReportUrl as configuredBugReportUrl,
  portfolioUrl as configuredPortfolioUrl,
  securityPolicyUrl as configuredSecurityPolicyUrl,
  supportLinks as configuredSupportLinks,
  type SupportLink,
} from '../lib/release'

interface ReportIssueDialogProps {
  open: boolean
  onClose: () => void
  bugReportUrl?: string
  securityPolicyUrl?: string
  authorName?: string
  portfolioUrl?: string | null
  supportLinks?: readonly SupportLink[]
}

export function ReportIssueDialog({
  open,
  onClose,
  bugReportUrl = configuredBugReportUrl,
  securityPolicyUrl = configuredSecurityPolicyUrl,
  authorName = configuredAuthorName,
  portfolioUrl = configuredPortfolioUrl,
  supportLinks = configuredSupportLinks,
}: ReportIssueDialogProps) {
  const [reportStarted, setReportStarted] = useState(false)
  const closeButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    setReportStarted(false)
    closeButton.current?.focus()
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, open])

  if (!open) return null

  return (
    <div className="report-layer">
      <button type="button" className="report-backdrop" aria-label="Dismiss bug report" onClick={onClose} />
      <section className="report-dialog" role="dialog" aria-modal="true" aria-labelledby="report-title">
        <header>
          <div><span className="eyebrow"><Bug size={14} /> Project feedback</span><h2 id="report-title">Report a bug</h2></div>
          <button ref={closeButton} type="button" className="icon-button" aria-label="Close bug report" onClick={onClose}><X size={18} /></button>
        </header>

        <p>Reports are public GitHub issues. Include reproducible behavior, but never include keys, private notes, contact details, or other sensitive data.</p>

        <div className="report-notice">
          <ShieldAlert size={18} />
          <div><strong>Security problems need a private path</strong><span>Do not file an undisclosed vulnerability as a public bug.</span></div>
          <a href={securityPolicyUrl} target="_blank" rel="noreferrer">Security policy <ExternalLink size={13} /></a>
        </div>

        <div className="report-capacity">
          <strong>Current maintenance capacity</strong>
          <p>One primary maintainer currently reviews this project. Reports are triaged, but response times are not guaranteed. Confirmed fixes may become reviewed pull requests; submitting a report does not create one automatically.</p>
        </div>

        <a className="report-primary-action" href={bugReportUrl} target="_blank" rel="noreferrer" onClick={() => setReportStarted(true)}>
          <Bug size={16} /> Open GitHub bug report <ExternalLink size={14} />
        </a>

        {reportStarted && (
          <section className="report-support" aria-live="polite">
            <div><HeartHandshake size={18} /><h3>After reporting</h3></div>
            <p>Thank you for improving the free project. Voluntary support helps {authorName || 'the maintainer'} investigate reports and continue development; it never unlocks content or changes issue priority.</p>
            {(portfolioUrl || supportLinks.length > 0) ? (
              <div className="report-support-links">
                {portfolioUrl && <a href={portfolioUrl} target="_blank" rel="noreferrer">Portfolio <ExternalLink size={13} /></a>}
                {supportLinks.map((link) => <a key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label} <ExternalLink size={13} /></a>)}
              </div>
            ) : <span>Support destinations are not configured yet.</span>}
          </section>
        )}
      </section>
    </div>
  )
}
import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, ShieldCheck, X } from 'lucide-react'

export type VerificationScope = 'application' | 'research' | 'lab'

interface VerificationBadgeProps {
  scope: VerificationScope
  compact?: boolean
}

const digests = {
  application: {
    title: 'Application verification',
    badge: 'Checks passed',
    metrics: [
      ['App tests', '43'],
      ['Python tests', '27'],
      ['Study pages', '66'],
      ['Public sources', '24'],
    ],
    checks: [
      'Root and repository-path PWA builds, install metadata, and offline precache completed.',
      'Desktop and mobile workflows were exercised in Chromium.',
      'Generated app payload passed the public-provenance boundary.',
      'Knowledge links, prerequisites, complexity, and examples passed validation.',
    ],
    boundary: 'This digest verifies repository behavior and declared structure. It does not independently reproduce every external scientific result.',
  },
  research: {
    title: 'Research registry verification',
    badge: 'Registry checked',
    metrics: [
      ['Focused checks', '9'],
      ['Public sources', '24'],
      ['Blocked profiles', '0'],
      ['Unlinked sources', '0'],
    ],
    checks: [
      'Search, authority filters, topic filters, and study-page navigation passed.',
      'Proposal validation, persistence, deletion, and JSON export passed.',
      'Every public source maps to at least one learner-facing page.',
      'Profile, hiring, biography, application, and private-source terms are rejected during indexing.',
    ],
    boundary: 'A registry check confirms classification and traceability. It is not a peer-review substitute and does not make every linked claim verified.',
  },
  lab: {
    title: 'Dual-rail Lab verification',
    badge: 'Lab tested',
    metrics: [
      ['Focused tests', '9'],
      ['Desktop canvas', '1440×836'],
      ['Mobile canvas', '390×338'],
      ['Normalization', '1.000'],
    ],
    checks: [
      'Basis endpoints, balanced states, phase changes, and normalization passed.',
      'Presets, sliders, reset, anchored mode labels, and midpoint orbit behavior passed.',
      'Cold-load desktop and mobile WebGL canvases were nonblank.',
      'Three.js loads only after the Lab view is opened.',
    ],
    boundary: 'The scene verifies state-vector math and UI behavior. It is a state-space visualization, not a physical cavity simulation or hardware benchmark.',
  },
} as const

export function VerificationBadge({ scope, compact = false }: VerificationBadgeProps) {
  const [open, setOpen] = useState(false)
  const closeButton = useRef<HTMLButtonElement>(null)
  const digest = digests[scope]

  useEffect(() => {
    if (!open) return
    closeButton.current?.focus()
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <>
      <button
        type="button"
        className={`verification-badge ${compact ? 'compact' : ''}`}
        aria-label={`View ${digest.title.toLocaleLowerCase()}`}
        title={digest.title}
        onClick={() => setOpen(true)}
      >
        <CheckCircle2 size={compact ? 18 : 14} />
        {!compact && <span>{digest.badge}</span>}
      </button>
      {open && (
        <div className="verification-layer">
          <button type="button" className="verification-backdrop" aria-label="Dismiss verification digest" onClick={() => setOpen(false)} />
          <section className="verification-dialog" role="dialog" aria-modal="true" aria-labelledby={`verification-${scope}-title`}>
            <header>
              <div><span className="eyebrow"><ShieldCheck size={14} /> Verification digest</span><h2 id={`verification-${scope}-title`}>{digest.title}</h2></div>
              <button ref={closeButton} type="button" className="icon-button" aria-label="Close verification digest" onClick={() => setOpen(false)}><X size={18} /></button>
            </header>
            <dl>
              {digest.metrics.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl>
            <ul>{digest.checks.map((check) => <li key={check}><CheckCircle2 size={15} />{check}</li>)}</ul>
            <p><strong>Boundary:</strong> {digest.boundary}</p>
          </section>
        </div>
      )}
    </>
  )
}

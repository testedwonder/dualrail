import type { ResearchProposal } from '../types'

export const RESEARCH_STORAGE_KEY = 'dualrail-atlas:research-proposals:v1'

export interface ResearchProposalExport {
  version: 1
  exportedAt: string
  proposals: ResearchProposal[]
}

export type ResearchProposalInput = Pick<ResearchProposal, 'kind' | 'title' | 'url' | 'documentId' | 'details'>

function validPublicUrl(value: string) {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}

export function createResearchProposal(
  input: ResearchProposalInput,
  options: { id?: string; now?: string } = {},
): ResearchProposal {
  const title = input.title.trim()
  const url = input.url.trim()
  const details = input.details.trim()
  if (!title) throw new Error('Add a short proposal title.')
  if (!details) throw new Error('Describe the evidence, correction, or open question.')
  if (input.kind === 'source' && !validPublicUrl(url)) {
    throw new Error('A source proposal needs a public HTTP or HTTPS URL.')
  }
  if (url && !validPublicUrl(url)) throw new Error('The optional URL must use HTTP or HTTPS.')

  const createdAt = options.now ?? new Date().toISOString()
  return {
    id: options.id ?? `${createdAt}-${Math.random().toString(36).slice(2, 9)}`,
    kind: input.kind,
    title,
    url,
    documentId: input.documentId,
    details,
    createdAt,
  }
}

function sanitizeProposals(value: unknown): ResearchProposal[] {
  if (!Array.isArray(value)) return []
  const proposals: ResearchProposal[] = []
  for (const item of value) {
    if (!item || typeof item !== 'object') continue
    const candidate = item as Partial<ResearchProposal>
    if (candidate.kind !== 'source' && candidate.kind !== 'correction') continue
    if (typeof candidate.id !== 'string' || typeof candidate.createdAt !== 'string') continue
    try {
      proposals.push(createResearchProposal({
        kind: candidate.kind,
        title: typeof candidate.title === 'string' ? candidate.title : '',
        url: typeof candidate.url === 'string' ? candidate.url : '',
        documentId: typeof candidate.documentId === 'string' ? candidate.documentId : '',
        details: typeof candidate.details === 'string' ? candidate.details : '',
      }, { id: candidate.id, now: candidate.createdAt }))
    } catch {
      continue
    }
  }
  return proposals
}

export function loadResearchProposals(storage: Pick<Storage, 'getItem'> = localStorage) {
  try {
    const raw = storage.getItem(RESEARCH_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as Partial<ResearchProposalExport>
    return parsed.version === 1 ? sanitizeProposals(parsed.proposals) : []
  } catch {
    return []
  }
}

export function saveResearchProposals(
  proposals: ResearchProposal[],
  storage: Pick<Storage, 'setItem'> = localStorage,
) {
  storage.setItem(RESEARCH_STORAGE_KEY, JSON.stringify(exportResearchProposals(proposals)))
}

export function exportResearchProposals(proposals: ResearchProposal[]): ResearchProposalExport {
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    proposals: sanitizeProposals(proposals),
  }
}
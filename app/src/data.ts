import rawKnowledge from './generated/knowledge.json'
import type { KnowledgeIndex } from './types'

export const knowledgeIndex = rawKnowledge as KnowledgeIndex
export const documentsById = new Map(
  knowledgeIndex.documents.map((document) => [document.id, document]),
)
export const documentIds = new Set(documentsById.keys())

export function knowledgeReferenceToId(reference: string) {
  return reference.startsWith('knowledge/') ? reference : `knowledge/${reference}`
}
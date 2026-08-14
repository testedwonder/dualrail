import { useState } from 'react'
import dagre from '@dagrejs/dagre'
import {
  Background,
  Controls,
  MarkerType,
  MiniMap,
  Position,
  ReactFlow,
  type Edge,
  type Node,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { GitBranch, Route, Share2 } from 'lucide-react'
import { getPersonalEntry } from '../lib/knowledge'
import type { KnowledgeDocument, PersonalState } from '../types'

interface KnowledgeMapProps {
  documents: KnowledgeDocument[]
  personalState: PersonalState
  selectedId: string
  onSelect: (id: string) => void
}

const nodeWidth = 196
const nodeHeight = 72

function referencedId(reference: string) {
  return reference.startsWith('knowledge/') ? reference : `knowledge/${reference}`
}

function layout(nodes: Node[], edges: Edge[]) {
  const graph = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}))
  graph.setGraph({ rankdir: 'LR', nodesep: 24, ranksep: 84, marginx: 36, marginy: 36 })
  for (const node of nodes) graph.setNode(node.id, { width: nodeWidth, height: nodeHeight })
  for (const edge of edges) graph.setEdge(edge.source, edge.target)
  dagre.layout(graph)
  return nodes.map((node) => {
    const point = graph.node(node.id)
    return {
      ...node,
      position: { x: point.x - nodeWidth / 2, y: point.y - nodeHeight / 2 },
    }
  })
}

export function KnowledgeMap({ documents, personalState, selectedId, onSelect }: KnowledgeMapProps) {
  const selectedDocument = documents.find((document) => document.id === selectedId)
  const topics = [...new Map(
    documents
      .filter((document) => document.collection === 'topic' && document.topic && document.topicTitle)
      .map((document) => [document.topic!, document.topicTitle!]),
  ).entries()]
  const [topicScope, setTopicScope] = useState(selectedDocument?.topic ?? topics[0]?.[0] ?? 'all')
  const [showPrerequisites, setShowPrerequisites] = useState(true)
  const [showNextSteps, setShowNextSteps] = useState(false)
  const [showRelated, setShowRelated] = useState(false)

  const allContent = documents.filter((document) => document.collection === 'topic' && document.isRateable)
  const content = topicScope === 'all'
    ? allContent
    : allContent.filter((document) => document.topic === topicScope)
  const graphDocuments = content
  const graphIds = new Set(graphDocuments.map((document) => document.id))
  const rawNodes: Node[] = graphDocuments.map((document) => {
    const entry = getPersonalEntry(document, personalState)
    const color = document.complexity?.color ?? '#77837d'
    return {
      id: document.id,
      position: { x: 0, y: 0 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      className: selectedId === document.id ? 'map-node selected' : 'map-node',
      style: {
        width: nodeWidth,
        height: nodeHeight,
        borderColor: selectedId === document.id ? '#17201d' : '#bdc7c1',
        boxShadow: `inset 5px 0 0 ${color}`,
      },
      data: {
        label: (
          <div className="map-node-label">
            <strong>{document.title}</strong>
            <span>{document.kind}</span>
            {document.isRateable && <b>{entry.understanding}/10</b>}
          </div>
        ),
      },
    }
  })

  const edges: Edge[] = []
  const edgeKeys = new Set<string>()
  function addEdge(source: string, target: string, type: string, color: string) {
    if (!graphIds.has(source) || !graphIds.has(target)) return
    const key = `${type}:${source}:${target}`
    if (edgeKeys.has(key)) return
    edgeKeys.add(key)
    edges.push({
      id: key,
      source,
      target,
      type: 'smoothstep',
      style: { stroke: color, strokeWidth: 1.6 },
      markerEnd: { type: MarkerType.ArrowClosed, color, width: 15, height: 15 },
      data: { relationship: type },
    })
  }

  for (const document of content) {
    if (showPrerequisites) {
      for (const reference of document.prerequisites) addEdge(referencedId(reference), document.id, 'prerequisite', '#1b7367')
    }
    if (showNextSteps) {
      for (const reference of document.nextSteps) addEdge(document.id, referencedId(reference), 'next', '#d15d42')
    }
    if (showRelated) {
      for (const reference of document.related) addEdge(document.id, referencedId(reference), 'related', '#6b69a6')
    }
  }

  const nodes = layout(rawNodes, edges)

  return (
    <section className="map-view" aria-label="Knowledge relationship map">
      <header className="map-toolbar">
        <div>
          <h1>Knowledge map</h1>
          <span>{content.length} of {allContent.length} study nodes</span>
        </div>
        <div className="map-controls">
          <label className="map-scope">
            <span>Scope</span>
            <select value={topicScope} onChange={(event) => setTopicScope(event.target.value)}>
              <option value="all">All topics</option>
              {topics.map(([slug, title]) => <option key={slug} value={slug}>{title}</option>)}
            </select>
          </label>
          <div
            className="complexity-legend"
            role="group"
            aria-label="Complexity heatmap legend"
            title="Graph-relative complexity: 80% longest prerequisite depth and 20% direct prerequisite count"
          >
            <span>Complexity</span>
            <i aria-hidden="true" />
            <small>Red · lower</small>
            <small>Violet · higher</small>
          </div>
          <div className="edge-toggles">
            <label><input type="checkbox" checked={showPrerequisites} onChange={(event) => setShowPrerequisites(event.target.checked)} /><GitBranch size={15} /> Prerequisites</label>
            <label><input type="checkbox" checked={showNextSteps} onChange={(event) => setShowNextSteps(event.target.checked)} /><Route size={15} /> Next</label>
            <label><input type="checkbox" checked={showRelated} onChange={(event) => setShowRelated(event.target.checked)} /><Share2 size={15} /> Related</label>
          </div>
        </div>
      </header>
      <div className="map-canvas">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          fitViewOptions={{ padding: 0.16 }}
          minZoom={0.12}
          maxZoom={1.7}
          nodesConnectable={false}
          onNodeClick={(_, node) => onSelect(node.id)}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#c9d1cc" gap={24} size={1} />
          <MiniMap
            pannable
            zoomable
            nodeColor={(node) => {
              const document = documents.find((item) => item.id === node.id)
              return document?.complexity?.color ?? '#77837d'
            }}
          />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
    </section>
  )
}
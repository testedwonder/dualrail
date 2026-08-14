import {
  isValidElement,
  type ComponentPropsWithoutRef,
  type MouseEvent,
  type ReactNode,
  useState,
} from 'react'
import { Check, Copy } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeMathjax from 'rehype-mathjax/svg'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { resolveInternalLink } from '../lib/knowledge'

interface MarkdownViewProps {
  body: string
  currentPath: string
  documentIds: Set<string>
  onNavigate: (id: string, anchor?: string) => void
}

function textFromNode(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(textFromNode).join('')
  if (isValidElement<{ children?: ReactNode }>(node)) return textFromNode(node.props.children)
  return ''
}

function CodeBlock({ children, ...props }: ComponentPropsWithoutRef<'pre'>) {
  const [copied, setCopied] = useState(false)
  const code = textFromNode(children).replace(/\n$/, '')

  async function copyCode() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1400)
  }

  return (
    <div className="code-block">
      <button
        type="button"
        className="code-copy"
        onClick={copyCode}
        aria-label="Copy code"
        title="Copy code"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <pre {...props}>{children}</pre>
    </div>
  )
}

export function MarkdownView({
  body,
  currentPath,
  documentIds,
  onNavigate,
}: MarkdownViewProps) {
  function linkClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const target = resolveInternalLink(currentPath, href, documentIds)
    if (!target) return
    event.preventDefault()
    onNavigate(target.id, target.anchor)
  }

  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeSlug, rehypeHighlight, rehypeMathjax]}
        components={{
          h1: () => null,
          a: ({ href = '', children, ...props }) => {
            const external = /^(?:https?:|mailto:)/i.test(href)
            return (
              <a
                {...props}
                href={href}
                onClick={(event) => linkClick(event, href)}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
              >
                {children}
              </a>
            )
          },
          pre: CodeBlock,
          table: ({ children }) => (
            <div className="table-scroll">
              <table>{children}</table>
            </div>
          ),
          img: ({ alt = '', ...props }) => <img {...props} alt={alt} loading="lazy" />,
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  )
}
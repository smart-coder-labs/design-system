'use client'

import React from 'react'
import { cn } from '../../../lib/utils'
import type { HeadingNode, TableOfContentsProps } from './TableOfContents.types'

const TOCNode: React.FC<{
  node: HeadingNode
  activeId: string | null
  onNavigate?: (id: string) => void
  depth: number
}> = ({ node, activeId, onNavigate, depth }) => {
  const isActive = node.id === activeId

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById(node.id)
    if (!element) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    element.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })

    onNavigate?.(node.id)
  }

  return (
    <li>
      <a
        href={`#${node.id}`}
        onClick={handleNavigate}
        className={cn(
          'block text-sm py-1.5 px-2.5 rounded-md transition-colors no-underline',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-accent-blue',
          isActive
            ? 'font-bold text-accent-blue border-l-2 border-accent-blue pl-2'
            : 'text-text-tertiary hover:text-text-secondary hover:bg-surface-secondary'
        )}
        aria-current={isActive ? 'page' : undefined}
        style={{ paddingLeft: `${depth * 12 + 10}px` }}
      >
        {node.text}
      </a>
      {node.children.length > 0 && (
        <ul className="list-none">
          {node.children.map(child => (
            <TOCNode
              key={child.id}
              node={child}
              activeId={activeId}
              onNavigate={onNavigate}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

export const TableOfContents = React.memo<TableOfContentsProps>(
  ({ headings, activeId, onNavigate }) => {
    if (!headings?.length) {
      return null
    }

    return (
      <nav
        aria-label="On this page"
        className="hidden lg:block sticky top-11 h-[calc(100vh-44px)] overflow-y-auto pr-4 border-l border-border-primary"
      >
        <div className="py-6 pr-4 pl-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-4">
            On this page
          </p>
          <ul className="list-none space-y-1">
            {headings.map(heading => (
              <TOCNode
                key={heading.id}
                node={heading}
                activeId={activeId}
                onNavigate={onNavigate}
                depth={0}
              />
            ))}
          </ul>
        </div>
      </nav>
    )
  }
)

TableOfContents.displayName = 'TableOfContents'

export interface HeadingNode {
  id: string
  level: 2 | 3 | 4
  text: string
  children: HeadingNode[]
}

export interface TableOfContentsProps {
  headings: HeadingNode[]
  activeId: string | null
  onNavigate?: (id: string) => void
}

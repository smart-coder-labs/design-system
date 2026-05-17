# TreeView

> **v1.0.29** · stable

A hierarchical tree component for displaying nested file/folder structures. Supports expandable/collapsible nodes, selection, and custom icons.

## Installation

```bash
import { TreeView, TreeNode } from '@/components/ui/TreeView';
```

## Basic Usage

```tsx
const data: TreeNode[] = [
  {
    id: '1',
    name: 'src',
    type: 'folder',
    children: [
      { id: '2', name: 'index.ts', type: 'file' },
      { id: '3', name: 'App.tsx', type: 'file' },
    ],
  },
  {
    id: '4',
    name: 'package.json',
    type: 'file',
  },
];

<TreeView data={data} />
```

## With Selection

```tsx
const [selectedId, setSelectedId] = useState<string>();

<TreeView
  data={data}
  selectedId={selectedId}
  onSelect={(node) => setSelectedId(node.id)}
/>
```

## With Default Expanded Nodes

```tsx
<TreeView
  data={data}
  defaultExpandedIds={['1', 'src']} // IDs to expand by default
/>
```

## With Callbacks

```tsx
<TreeView
  data={data}
  onSelect={(node) => console.log('Selected:', node.name)}
  onToggle={(node, isExpanded) => console.log(`${node.name} is now ${isExpanded ? 'expanded' : 'collapsed'}`)}
/>
```

## With Custom Icons

```tsx
const data: TreeNode[] = [
  {
    id: '1',
    name: 'Documents',
    type: 'folder',
    icon: <FolderOpen className="w-4 h-4 text-yellow-500" />,
    children: [
      { id: '2', name: 'Resume.pdf', type: 'file', icon: <PdfIcon /> },
    ],
  },
];

<TreeView data={data} />
```

## With Meta Information

```tsx
const data: TreeNode[] = [
  {
    id: '1',
    name: 'bundle.js',
    type: 'file',
    meta: '2.4 MB',
  },
  {
    id: '2',
    name: 'config.json',
    type: 'file',
    meta: 'Modified 2 days ago',
  },
];

<TreeView data={data} />
```

## Disabled Nodes

```tsx
const data: TreeNode[] = [
  {
    id: '1',
    name: 'Archived',
    type: 'folder',
    disabled: true,
    children: [...],
  },
];

<TreeView data={data} />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | `TreeNode[]` | - | Hierarchical tree data |
| selectedId | `string` | - | Currently selected node ID |
| onSelect | `(node: TreeNode) => void` | - | Callback when node is selected |
| onToggle | `(node: TreeNode, isExpanded: boolean) => void` | - | Callback when folder is toggled |
| defaultExpandedIds | `string[]` | `[]` | IDs of nodes to expand by default |
| className | `string` | - | Additional CSS classes |

### TreeNode

```typescript
interface TreeNode {
  id: string;
  name: string;
  type: 'folder' | 'file';
  children?: TreeNode[];
  icon?: React.ReactNode;
  meta?: string;
  disabled?: boolean;
}
```

## File Type Icons

The TreeView automatically assigns icons based on file extension:

| Extension | Icon Type |
|-----------|-----------|
| `.ts`, `.tsx`, `.js`, `.jsx` | Code file (blue) |
| `.css`, `.scss`, `.less` | Style file (sky) |
| `.json`, `.yml`, `.yaml` | Config file (yellow) |
| `.png`, `.jpg`, `.svg`, `.gif` | Image file (purple) |
| `.md`, `.txt` | Text file (gray) |
| Other | Generic file (gray) |

Folders show an open/closed folder icon based on expansion state.

## Features

- **Expand/Collapse**: Click folder icons or names to toggle
- **Selection**: Click to select nodes
- **Keyboard Support**: Enter to select, arrow keys to navigate
- **Auto Icons**: Automatic file type detection
- **Custom Icons**: Override with custom React nodes
- **Meta Display**: Show secondary info on hover
- **Disabled State**: Prevent interaction with specific nodes
- **Nested Depth**: Unlimited nesting levels

## Notes

- Uses Lucide React icons by default
- Supports dark mode with appropriate color tokens
- Indentation is 16px per level
- Meta info only shows on hover
- Folders must have children to be expandable
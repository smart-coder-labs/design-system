# KanbanBoard

> **v1.0.29** · stable

A drag-and-drop Kanban board component for task management. Supports multiple columns, card details, priority indicators, assignees, and inline card creation.

## Installation

```bash
import { KanbanBoard } from '@/components/ui/KanbanBoard';
```

## Basic Usage

```tsx
import { KanbanBoard } from '@/components/ui/KanbanBoard';

function Example() {
  const columns = [
    {
      id: 'todo',
      title: 'To Do',
      cards: [
        { id: '1', title: 'Implement payment flow', priority: 'high' },
        { id: '2', title: 'API integration', priority: 'medium' },
      ],
    },
    {
      id: 'in_progress',
      title: 'In Progress',
      cards: [
        { id: '3', title: 'Build dashboard', priority: 'high' },
      ],
    },
    {
      id: 'done',
      title: 'Done',
      cards: [
        { id: '4', title: 'Design review', priority: 'low' },
      ],
    },
  ];

  return <KanbanBoard columns={columns} />;
}
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `KanbanColumn[]` | - | Array of column objects |
| `variant` | `'default' \| 'compact' \| 'detailed'` | `'default'` | Card display style |
| `showCardCount` | `boolean` | `true` | Show card count in column header |
| `showColumnLimit` | `boolean` | `false` | Show column limit (e.g., "5/10") |
| `onCardMove` | `(cardId, fromColumnId, toColumnId, newIndex) => void` | - | Called when card is moved |
| `onCardClick` | `(card) => void` | - | Called when card is clicked |
| `onAddCard` | `(columnId, card) => void` | - | Called when new card is added |
| `className` | `string` | - | Additional CSS classes |

### Types

```typescript
interface KanbanCard {
  id: string;
  title: string;
  description?: string;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  assignee?: { name: string; avatar?: string };
  tags?: string[];
  dueDate?: string;
  attachments?: number;
  comments?: number;
}

interface KanbanColumn {
  id: string;
  title: string;
  cards: KanbanCard[];
  color?: string;
  limit?: number;
}
```

## Examples

### With Assignees and Tags

```tsx
<KanbanBoard
  columns={[
    {
      id: 'dev',
      title: 'Development',
      cards: [
        { 
          id: '1', 
          title: 'Implement SWIFT payments', 
          priority: 'high', 
          assignee: { name: 'Backend Team' },
          tags: ['payments', 'swift']
        },
      ],
    },
  ]}
  variant="detailed"
/>
```

### With Column Limits

```tsx
<KanbanBoard
  columns={[
    {
      id: 'sprint',
      title: 'Sprint #12',
      cards: [...],
      limit: 6,
    },
  ]}
  showColumnLimit
/>
```

### Compact Variant

```tsx
<KanbanBoard
  columns={[...]}
  variant="compact"
/>
```

### With Add Card Handler

```tsx
const handleAddCard = (columnId, card) => {
  console.log('Add card to', columnId, card);
};

<KanbanBoard
  columns={columns}
  onAddCard={handleAddCard}
/>
```

### With Card Click Handler

```tsx
const handleCardClick = (card) => {
  console.log('Clicked card:', card.id);
};

<KanbanBoard
  columns={columns}
  onCardClick={handleCardClick}
/>
```

### Colored Columns

```tsx
<KanbanBoard
  columns={[
    { id: 'urgent', title: 'Urgent', color: '#FF3B30', cards: [...] },
    { id: 'high', title: 'High Priority', color: '#FF9500', cards: [...] },
    { id: 'medium', title: 'Medium', color: '#007AFF', cards: [...] },
    { id: 'low', title: 'Backlog', color: '#34C759', cards: [...] },
  ]}
/>
```

## Notes

- Drag-and-drop cards between columns
- Click card to view details in modal
- Click "+ Add Card" to create new cards (requires `onAddCard`)
- Priority indicator bar with color coding (red=urgent, orange=high, blue=medium, green=low)
- Card hover animation with subtle lift
- Automatic card count display
- Dark mode support
- Responsive horizontal scrolling
- Framer Motion animations for smooth interactions
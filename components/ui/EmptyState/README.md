# EmptyState

> **v1.0.35** · stable

A centered content component for displaying empty states, placeholders, or fallback content when no data is available.

## Installation

```bash
# The component is copied to your project with the add cli command
import { EmptyState } from '@/components/ui/EmptyState';
```

## Basic Usage

```tsx
import { EmptyState } from '@/components/ui/EmptyState';
import { Inbox } from 'lucide-react';

<EmptyState
  title="No items found"
  description="There are no items to display yet. Try adding something new."
  icon={<Inbox />}
/>
```

## With Action

```tsx
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';

<EmptyState
  title="No results"
  description="We couldn't find what you're looking for."
  action={<Button variant="primary">Try Again</Button>}
/>
```

## Custom Icon

```tsx
import { EmptyState } from '@/components/ui/EmptyState';
import { FolderOpen } from 'lucide-react';

<EmptyState
  title="No files"
  description="Upload your first file to get started."
  icon={<FolderOpen className="w-12 h-12" />}
/>
```

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Required title text |
| `description` | `string` | - | Optional description text |
| `icon` | `ReactNode` | - | Optional icon element |
| `action` | `ReactNode` | - | Optional action element (e.g., Button) |
| `className` | `string` | - | Additional CSS classes |

## Notes

- Uses Framer Motion for entrance animation
- Icon automatically receives size and strokeWidth props
- Centered layout with max-width for description text
- Use for: empty lists, no results, no data states
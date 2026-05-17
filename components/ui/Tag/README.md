# Tag

> **v1.0.3** · stable

A label/tag component for displaying categories, status, or metadata. Supports multiple variants, sizes, icons, and interactive states.

## Installation

```bash
import { Tag } from '@/components/ui/Tag';
```

## Basic Usage

```tsx
<Tag label="Status" />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | required | Tag text content |
| variant | TagVariant | 'default' | Visual style |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Component size |
| icon | ElementType | undefined | Optional icon |
| onRemove | () => void | undefined | Remove callback |
| onClick | () => void | undefined | Click handler |
| disabled | boolean | false | Disabled state |

### TagVariant Options

`'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'outline'`

## Examples

### Status Tags

```tsx
<div className="flex gap-2">
  <Tag label="New" variant="primary" />
  <Tag label="Active" variant="success" />
  <Tag label="Pending" variant="warning" />
  <Tag label="Error" variant="error" />
</div>
```

### With Icon

```tsx
import { Star } from 'lucide-react';

<Tag label="Favorite" icon={Star} variant="warning" />
```

### Removable Tag

```tsx
<Tag label="Filter" onRemove={() => removeFilter(id)} />
```

### Clickable Tag

```tsx
<Tag label="Category" onClick={() => selectCategory(id)} />
```

### Sizes

```tsx
<>
  <Tag label="Small" size="sm" />
  <Tag label="Medium" size="md" />
  <Tag label="Large" size="lg" />
</>
```

## Notes

- Uses React.forwardRef for ref forwarding
- Includes Framer Motion for hover/tap animations
- Supports disabled state with reduced opacity
- Icons must be Lucide React or compatible
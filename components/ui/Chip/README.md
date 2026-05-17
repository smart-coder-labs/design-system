# Chip

> **v1.0.18** · stable

A compact, interactive component for displaying labels, tags, or selections with optional delete and click handlers.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Chip } from '@/components/ui/Chip';
```

## Basic Usage

```tsx
import { Chip } from '@/components/ui/Chip';

<Chip label="Default Chip" />
```

## Variants

```tsx
// Default (gray)
<Chip label="Default" variant="default" />

// Primary (blue)
<Chip label="Primary" variant="primary" />

// Success (green)
<Chip label="Approved" variant="success" />

// Warning (yellow)
<Chip label="Pending" variant="warning" />

// Error (red)
<Chip label="Rejected" variant="error" />

// Info (cyan)
<Chip label="New" variant="info" />
```

## Sizes

```tsx
// Small
<Chip label="Small" size="sm" />

// Medium (default)
<Chip label="Medium" size="md" />

// Large
<Chip label="Large" size="lg" />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Chip text content (required) |
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Chip size |
| `icon` | `React.ElementType` | - | Icon component to display |
| `onDelete` | `() => void` | - | Delete button callback |
| `onClick` | `() => void` | - | Click handler (makes chip interactive) |
| `disabled` | `boolean` | `false` | Disables the chip |
| `className` | `string` | - | Additional CSS classes |

## Examples

### With Icon

```tsx
import { Chip } from '@/components/ui/Chip';
import { Star } from 'lucide-react';

<Chip label="Premium" variant="primary" icon={Star} />
```

### Deletable Chip

```tsx
import { Chip } from '@/components/ui/Chip';

<Chip 
    label="Filter: Finance" 
    variant="primary" 
    onDelete={() => console.log('deleted')}
/>
```

### Clickable Chip

```tsx
import { Chip } from '@/components/ui/Chip';

<Chip 
    label="Click me" 
    variant="primary" 
    onClick={() => console.log('clicked')}
/>
```

### Disabled Chip

```tsx
import { Chip } from '@/components/ui/Chip';

<Chip label="Disabled" disabled />
<Chip label="Locked" variant="info" disabled onDelete={() => {}} />
```

### Interactive Chip List

```tsx
import { Chip } from '@/components/ui/Chip';

<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    <Chip 
        label="React" 
        variant="primary" 
        onDelete={() => {}} 
    />
    <Chip 
        label="TypeScript" 
        variant="success" 
        onDelete={() => {}} 
    />
    <Chip 
        label="Tailwind" 
        variant="info" 
        onDelete={() => {}} 
    />
    <Chip 
        label="Storybook" 
        variant="warning" 
        onDelete={() => {}} 
    />
</div>
```

## Notes

- Uses React.forwardRef for the root element
- Uses Framer Motion for hover (scale 1.02) and tap (scale 0.98) animations when clickable
- Delete button uses stopPropagation to prevent click event propagation
- Fully accessible with proper button interactions
- Supports dark mode via design tokens
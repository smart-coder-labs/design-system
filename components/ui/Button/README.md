# Button

> **v1.0.23** · stable

An interactive button component with multiple variants, sizes, and states. Supports icons, loading state, and full-width mode.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Button } from '@/components/ui/Button';
```

## Basic Usage

```tsx
import { Button } from '@/components/ui/Button';

<Button>Click me</Button>
```

## Variants

```tsx
// Primary (default) - blue filled
<Button variant="primary">Primary</Button>

// Secondary - outlined with background
<Button variant="secondary">Secondary</Button>

// Ghost - transparent with blue text
<Button variant="ghost">Ghost</Button>

// Subtle - light gray background
<Button variant="subtle">Subtle</Button>

// Outline - transparent with border
<Button variant="outline">Outline</Button>

// Destructive - red for dangerous actions
<Button variant="destructive">Delete</Button>
```

## Sizes

```tsx
// Small
<Button size="sm">Small</Button>

// Medium (default)
<Button size="md">Medium</Button>

// Large
<Button size="lg">Large</Button>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'subtle' \| 'outline' \| 'destructive'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `loading` | `boolean` | `false` | Shows loading spinner, disables button |
| `leftIcon` | `ReactNode` | - | Icon on the left side |
| `rightIcon` | `ReactNode` | - | Icon on the right side |
| `fullWidth` | `boolean` | `false` | Makes button full width |
| `disabled` | `boolean` | `false` | Disables the button |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Button content |
| `aria-label` | `string` | - | Accessibility label (required for icon-only) |

## Examples

### With Icons

```tsx
import { Button } from '@/components/ui/Button';
import { Plus, Download } from 'lucide-react';

<Button leftIcon={<Plus />}>Add Item</Button>
<Button rightIcon={<Download />}>Download</Button>
```

### Loading State

```tsx
<Button loading>
    Processing...
</Button>
```

### Full Width

```tsx
<Button variant="primary" fullWidth>
    Sign In
</Button>
```

### Icon Only Button

```tsx
import { Button } from '@/components/ui/Button';
import { Settings } from 'lucide-react';

<Button 
    variant="ghost" 
    aria-label="Settings"
>
    <Settings />
</Button>
```

### With Different Variants

```tsx
<div className="flex gap-2">
    <Button variant="primary">Save</Button>
    <Button variant="secondary">Cancel</Button>
    <Button variant="ghost">Skip</Button>
    <Button variant="destructive">Delete</Button>
</div>
```

## Notes

- Uses React.forwardRef for the root element
- Uses Framer Motion for hover (scale 1.02) and tap (scale 0.98) animations
- Icon-only buttons require aria-label for accessibility
- Shows console warning in development if icon-only button lacks aria-label
- Fully accessible with proper disabled state and aria-busy for loading
- Uses spring animation physics (stiffness: 400, damping: 25)
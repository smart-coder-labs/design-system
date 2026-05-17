# FAB (Floating Action Button)

> **v1.0.28** · stable

A floating action button component with support for extended labels, multiple variants, sizes, and positioning. Uses portal rendering for fixed positioning.

## Installation

```bash
# The component is copied to your project with the add cli command
import { FAB } from '@/components/ui/FAB';
```

## Basic Usage

```tsx
import { FAB } from '@/components/ui/FAB';
import { Plus } from 'lucide-react';

<FAB icon={Plus} />
```

## Extended FAB with Label

```tsx
<FAB icon={Plus} label="New Transaction" />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ElementType` | `Plus` | Icon component to display |
| `label` | `string` | - | Optional label for extended FAB |
| `variant` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `position` | `'bottom-right' \| 'bottom-left' \| 'top-right' \| 'top-left' \| 'none'` | `'bottom-right'` | Screen position (uses portal) |
| `show` | `boolean` | `true` | Controls visibility with animation |
| `disabled` | `boolean` | `false` | Disables the button |
| `className` | `string` | - | Additional CSS classes |
| `...buttonProps` | `HTMLMotionProps<"button">` | - | Standard button props |

## Variants

### Primary (Default)

```tsx
<FAB icon={Plus} variant="primary" />
```

### Secondary

```tsx
<FAB icon={Pen} variant="secondary" />
```

### Tertiary

```tsx
<FAB icon={Camera} variant="tertiary" />
```

## Sizes

```tsx
// Small
<FAB icon={Plus} size="sm" />

// Medium (default)
<FAB icon={Plus} size="md" />

// Large
<FAB icon={Plus} size="lg" />
```

## Positioning

```tsx
// Fixed bottom-right (default, uses portal)
<FAB icon={Plus} position="bottom-right" />

// Fixed bottom-left
<FAB icon={Plus} position="bottom-left" />

// Fixed top-right
<FAB icon={Plus} position="top-right" />

// Fixed top-left
<FAB icon={Plus} position="top-left" />

// Inline (no fixed positioning)
<FAB icon={Plus} position="none" />
```

## Examples

### Floating Action Button with Portal

```tsx
<FAB 
  icon={Plus} 
  label="Create New" 
  position="bottom-right"
  onClick={() => console.log('Create new item')}
/>
```

### Controlled Visibility

```tsx
const [showFab, setShowFab] = useState(false);

<FAB 
  icon={Plus} 
  show={showFab}
/>
```

### Disabled State

```tsx
<FAB icon={Plus} disabled />
```

## Notes

- Uses React Portal (`createPortal`) for fixed positioning to escape DOM nesting
- Animated entrance/exit using Framer Motion (scale, opacity, rotation)
- Spring physics for hover/tap animations
- Accessible with proper focus states and ARIA attributes
- Supports dark mode via CSS tokens
- Icon size scales with the `size` prop
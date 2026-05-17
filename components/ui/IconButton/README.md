# IconButton

A compact circular button component for icon-only actions, with support for variants, sizes, loading states, and tooltips.

## Installation

```bash
# The component is copied to your project with the add cli command
import { IconButton } from '@/components/ui/IconButton';
```

## Basic Usage

```tsx
import { IconButton } from '@/components/ui/IconButton';
import { Bell } from 'lucide-react';

<IconButton 
  icon={<Bell className="w-4 h-4" />} 
  onClick={() => console.log('clicked')} 
  aria-label="Notifications"
/>
```

## With Tooltip

```tsx
<IconButton 
  icon={<Settings className="w-4 h-4" />}
  tooltip="Settings"
  onClick={() => {}}
/>
```

## Loading State

```tsx
<IconButton 
  icon={<Upload className="w-4 h-4" />}
  isLoading={true}
  onClick={() => {}}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ElementType` | - | Icon component (Lucide or similar) |
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'ghost' \| 'danger'` | `'secondary'` | Visual style |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Button size |
| `isLoading` | `boolean` | `false` | Shows spinner and disables button |
| `tooltip` | `string` | - | Tooltip text (wraps in Tooltip component) |
| `disabled` | `boolean` | `false` | Disables the button |
| `className` | `string` | - | Additional CSS classes |
| `aria-label` | `string` | **required** | Accessibility label |

## Examples

### Variants

```tsx
// Primary - filled blue
<IconButton icon={<Plus />} variant="primary" onClick={fn} />

// Secondary - outlined
<IconButton icon={<Search />} variant="secondary" onClick={fn} />

// Ghost - transparent
<IconButton icon={<X />} variant="ghost" onClick={fn} />

// Danger - red tint
<IconButton icon={<Trash2 />} variant="danger" onClick={fn} />
```

### Sizes

```tsx
// Extra small (24px)
<IconButton icon={<Plus className="w-3 h-3" />} size="xs" onClick={fn} />

// Small (32px)
<IconButton icon={<Plus className="w-3 h-3" />} size="sm" onClick={fn} />

// Medium (40px) - default
<IconButton icon={<Plus className="w-4 h-4" />} size="md" onClick={fn} />

// Large (48px)
<IconButton icon={<Plus className="w-5 h-5" />} size="lg" onClick={fn} />
```

### With Notification Badge

```tsx
<div className="relative">
  <IconButton icon={<Bell className="w-4 h-4" />} variant="ghost" onClick={fn} />
  <span className="absolute -top-1 -right-1 w-4 h-4 bg-status-error text-white text-xs font-bold rounded-full flex items-center justify-center">
    3
  </span>
</div>
```

## Notes

- Uses React.forwardRef for the root element
- Animated tap effect using Framer Motion (scale 0.92 on press)
- Automatically wraps in Tooltip when `tooltip` prop is provided
- Icon size scales automatically based on button size
- Fully accessible with proper ARIA attributes
- Supports dark mode via design tokens
- Disabled state shows reduced opacity and prevents interaction
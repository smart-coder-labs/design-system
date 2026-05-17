# FloatingToolbar

> **v1.0.20** · stable

A floating action toolbar that can be positioned anywhere on the screen with smooth animations. Supports multiple positions, visual variants, and action types.

## Installation

```bash
# The component is copied to your project with the add cli command
import { FloatingToolbar, FloatingToolbarAction } from '@/components/ui/FloatingToolbar';
```

## Basic Usage

```tsx
import { FloatingToolbar, FloatingToolbarAction } from '@/components/ui/FloatingToolbar';
import { Bold, Italic, Underline } from 'lucide-react';

const actions: FloatingToolbarAction[] = [
  { id: 'bold', icon: <Bold className="w-4 h-4" />, onClick: () => {} },
  { id: 'italic', icon: <Italic className="w-4 h-4" />, onClick: () => {} },
  { id: 'underline', icon: <Underline className="w-4 h-4" />, onClick: () => {} },
];

<FloatingToolbar actions={actions} />
```

## Positions

```tsx
// Bottom center (default)
<FloatingToolbar actions={actions} position="bottom" />

// Top center
<FloatingToolbar actions={actions} position="top" />

// Corners
<FloatingToolbar actions={actions} position="top-left" />
<FloatingToolbar actions={actions} position="top-right" />
<FloatingToolbar actions={actions} position="bottom-left" />
<FloatingToolbar actions={actions} position="bottom-right" />
```

## API

### FloatingToolbarProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `actions` | `FloatingToolbarAction[]` | - | Array of action buttons |
| `position` | `'top' \| 'bottom' \| 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'bottom'` | Toolbar position |
| `variant` | `'default' \| 'compact' \| 'glass'` | `'default'` | Visual style |
| `showLabels` | `boolean` | `false` | Show labels next to icons |
| `dismissible` | `boolean` | `false` | Allow toolbar to be collapsed |
| `onDismiss` | `() => void` | - | Callback when toolbar is dismissed |
| `className` | `string` | - | Additional classes |
| `offset` | `number` | `24` | Distance from edge (px) |
| `defaultActiveId` | `string` | - | Initially active action |

### FloatingToolbarAction

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `icon` | `ReactNode` | Icon element |
| `onClick` | `() => void` | Click handler |
| `label` | `string` | Label text (optional) |
| `tooltip` | `string` | Tooltip text (shown on hover) |
| `disabled` | `boolean` | Disable the action |
| `variant` | `'default' \| 'primary' \| 'danger'` | Action variant |

## Examples

### Glass Variant with Labels

```tsx
<FloatingToolbar
  actions={[
    { id: 'send', icon: <Send />, label: 'Send', onClick: handleSend },
    { id: 'request', icon: <ArrowUpDown />, label: 'Request', onClick: handleRequest },
    { id: 'scan', icon: <ScanQrCode />, label: 'Scan', onClick: handleScan },
  ]}
  variant="glass"
  showLabels
  position="top"
/>
```

### Dismissible Toolbar

```tsx
<FloatingToolbar
  actions={actions}
  dismissible
  onDismiss={() => console.log('Toolbar dismissed')}
/>
```

### Action Variants

```tsx
const actions: FloatingToolbarAction[] = [
  { id: 'save', icon: <Save />, onClick: handleSave, variant: 'primary' },
  { id: 'delete', icon: <Trash2 />, onClick: handleDelete, variant: 'danger' },
  { id: 'share', icon: <Share2 />, onClick: handleShare },
];
```

### Compact Variant

```tsx
<FloatingToolbar
  actions={actions}
  variant="compact"
  showLabels
/>
```

## Notes

- Fully accessible with ARIA labels and keyboard support
- Smooth entry animations (300ms cubic-bezier)
- Supports dark mode via CSS variables
- Uses Framer Motion for animations where applicable
- Tooltips appear on hover with delay
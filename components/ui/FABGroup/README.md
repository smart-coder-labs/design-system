# FABGroup

> **v1.0.5** · stable

A floating action button group with expandable actions. Opens a radial menu when clicked, with each action appearing with staggered animations.

## Installation

```bash
# The component is copied to your project with the add cli command
import { FABGroup, FABGroupAction } from '@/components/ui/FABGroup';
```

## Basic Usage

```tsx
import { FABGroup, FABGroupAction } from '@/components/ui/FABGroup';
import { Pen, Camera, FileText, Image } from 'lucide-react';

const actions: FABGroupAction[] = [
  { icon: Pen, label: 'Write Note', onClick: () => console.log('Write note') },
  { icon: Camera, label: 'Take Photo', onClick: () => console.log('Take photo') },
  { icon: FileText, label: 'Upload Document', onClick: () => console.log('Upload doc') },
  { icon: Image, label: 'Gallery', onClick: () => console.log('Open gallery') },
];

<FABGroup actions={actions} />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `actions` | `FABGroupAction[]` | - | Array of action items |
| `position` | `'bottom-right' \| 'bottom-left' \| 'top-right' \| 'top-left' \| 'none'` | `'bottom-right'` | Screen position (uses portal) |
| `className` | `string` | - | Additional CSS classes |

### FABGroupAction

| Prop | Type | Description |
|------|------|-------------|
| `icon` | `React.ElementType` | Icon component |
| `label` | `string` | Label displayed next to button |
| `onClick` | `() => void` | Click handler |
| `variant` | `'primary' \| 'secondary' \| 'tertiary'` | Visual style for the action button |

## Examples

### Bottom-Right Position (Default)

```tsx
<FABGroup 
  actions={[
    { icon: Send, label: 'Send Money', onClick: handleSend, variant: 'primary' },
    { icon: CreditCard, label: 'Pay Card', onClick: handlePay },
    { icon: PiggyBank, label: 'New Savings', onClick: handleSavings },
  ]}
  position="bottom-right"
/>
```

### Two Actions

```tsx
<FABGroup 
  actions={[
    { icon: Pen, label: 'Edit', onClick: () => {} },
    { icon: Camera, label: 'Capture', onClick: () => {} },
  ]}
/>
```

### Different Positions

```tsx
// Bottom-left
<FABGroup actions={actions} position="bottom-left" />

// Top-right
<FABGroup actions={actions} position="top-right" />

// Top-left
<FABGroup actions={actions} position="top-left" />

// Inline (no portal)
<FABGroup actions={actions} position="none" />
```

### Single Action

```tsx
<FABGroup 
  actions={[
    { icon: Plus, label: 'Quick Add', onClick: handleAdd, variant: 'primary' },
  ]}
/>
```

### Many Actions

```tsx
<FABGroup 
  actions={[
    { icon: Send, label: 'Wire Transfer', onClick: () => {}, variant: 'primary' },
    { icon: CreditCard, label: 'Freeze Card', onClick: () => {} },
    { icon: Wallet, label: 'View Balance', onClick: () => {} },
    { icon: PiggyBank, label: 'Set Goal', onClick: () => {} },
    { icon: Shield, label: 'Security Check', onClick: () => {} },
    { icon: Camera, label: 'Deposit Check', onClick: () => {} },
    { icon: FileText, label: 'Statements', onClick: () => {} },
  ]}
  position="bottom-right"
/>
```

## Notes

- Uses React Portal (`createPortal`) for fixed positioning when position is not 'none'
- Main button rotates 45 degrees to X when menu is open
- Actions appear with staggered spring animations
- Labels slide in with slight delay after action buttons
- Clicking an action automatically closes the menu
- Clicking the main button toggles the menu open/closed
- Supports dark mode via CSS tokens
- All sub-buttons have hover/tap animations
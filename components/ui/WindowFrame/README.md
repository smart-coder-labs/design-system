# WindowFrame

> **v1.0.22** · stable

A window container component with a macOS-style title bar, traffic light controls, and custom content area. Creates a native-looking window frame for desktop-style UI.

## Installation

```bash
# The component is copied to your project with the add cli command
import { WindowFrame } from '@/components/ui/WindowFrame';
```

## Basic Usage

```tsx
import { WindowFrame } from '@/components/ui/WindowFrame';

<WindowFrame
  title="Transaction Details"
  onClose={() => console.log('close')}
  onMinimize={() => console.log('minimize')}
  onMaximize={() => console.log('maximize')}
>
  <div className="p-4">
    <p>Window content goes here</p>
  </div>
</WindowFrame>
```

## Dark Variant

```tsx
<WindowFrame
  title="Portfolio Manager"
  variant="dark"
>
  <div className="p-4">
    <p>Dark themed content</p>
  </div>
</WindowFrame>
```

## Without Controls

```tsx
<WindowFrame title="Read-only View" showControls={false}>
  <div className="p-4">
    <p>No window controls visible</p>
  </div>
</WindowFrame>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Window title displayed in title bar |
| `onClose` | `() => void` | - | Close button callback |
| `onMinimize` | `() => void` | - | Minimize button callback |
| `onMaximize` | `() => void` | - | Maximize button callback |
| `showControls` | `boolean` | `true` | Show window control buttons |
| `variant` | `'default' \| 'dark'` | `'default'` | Color theme |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Window content |

## Examples

### With Transaction Details

```tsx
<WindowFrame title="Transaction Details">
  <div className="p-4 space-y-3">
    <div className="flex justify-between">
      <span className="text-sm text-text-secondary">Amount</span>
      <span className="text-sm font-bold">$5,000.00</span>
    </div>
    <div className="flex justify-between">
      <span className="text-sm text-text-secondary">Recipient</span>
      <span className="text-sm font-medium">Alice Johnson</span>
    </div>
    <div className="flex justify-between">
      <span className="text-sm text-text-secondary">Status</span>
      <span className="text-sm text-green-600 font-medium">Completed</span>
    </div>
  </div>
</WindowFrame>
```

### With Investment Dashboard

```tsx
<WindowFrame title="Portfolio Overview">
  <div className="p-4 space-y-4">
    <div className="grid grid-cols-2 gap-3">
      <div className="p-3 bg-surface-secondary rounded-lg text-center">
        <p className="text-xs text-text-secondary">Total Value</p>
        <p className="text-lg font-bold">$124,532</p>
      </div>
      <div className="p-3 bg-surface-secondary rounded-lg text-center">
        <p className="text-xs text-text-secondary">Total Return</p>
        <p className="text-lg font-bold text-green-600">+12.4%</p>
      </div>
    </div>
  </div>
</WindowFrame>
```

## Notes

- Uses macOS-style traffic light buttons (red/yellow/green)
- Icons appear on hover (close shows X, minimize shows dash, maximize shows square)
- Title is centered in the title bar
- Supports dark mode via the variant prop
- Accessible with ARIA labels on buttons
- Uses Framer Motion for button hover animations
# InteractiveCursor

> **v1.0.0** · stable

A custom cursor component that follows mouse movement with smooth spring animations. The cursor expands when hovering over interactive elements.

## Installation

```bash
import { InteractiveCursor } from '@/components/ui/InteractiveCursor';
```

## Basic Usage

```tsx
import { InteractiveCursor } from '@/components/ui/InteractiveCursor';

function Example() {
  return (
    <div className="interactive">
      <InteractiveCursor />
      <p>Hover over this area to see the cursor</p>
    </div>
  );
}
```

## With Custom Styling

```tsx
<InteractiveCursor className="bg-purple-500 mix-screen" />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Content to display as background |

### HTML Attributes

Supports all standard `HTMLDivElement` attributes (style, id, etc.)

## Examples

### Dashboard Hover Effect

```tsx
<div className="relative">
  <InteractiveCursor />
  <div className="h-64 w-96 bg-gradient-to-br from-accent-blue/10 to-purple-500/10 rounded-2xl">
    Move cursor here
  </div>
</div>
```

### Dark Mode

```tsx
<div className="dark bg-gray-900 p-8">
  <InteractiveCursor />
  <div className="h-48 w-80 bg-surface-primary rounded-2xl">
    Dark themed area
  </div>
</div>
```

## Notes

- Uses Framer Motion's `useSpring` for smooth cursor movement
- Cursor detects `.interactive` class to expand on hover
- Fixed position overlay with `z-index: 9999`
- Uses `mix-blend-normal` for cursor blending
- Keyboard accessible (does not interfere with tab navigation)
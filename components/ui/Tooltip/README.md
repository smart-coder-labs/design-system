# Tooltip

> **v1.0.18** · stable

A floating tooltip that displays content when users hover or focus on an element. Supports multiple positioning directions and custom delay durations.

## Installation

```bash
import { TooltipProvider, Tooltip } from '@/components/ui/Tooltip';
```

## Basic Usage

```tsx
<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>
```

## API

### Tooltip

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Trigger element |
| content | ReactNode | - | Tooltip content to display |
| side | 'top' \| 'right' \| 'bottom' \| 'left' | 'top' | Tooltip position |
| align | 'start' \| 'center' \| 'end' | 'center' | Alignment relative to trigger |
| delayDuration | number | 200 | Delay before showing (ms) |
| sideOffset | number | 8 | Distance from trigger |

### TooltipProvider

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | App content (for future compatibility) |

## Examples

### Basic Tooltip

```tsx
<Tooltip content="Save changes">
  <Button>Save</Button>
</Tooltip>
```

### Tooltip with Custom Side

```tsx
<Tooltip content="Tooltip below" side="bottom">
  <IconButton icon={<Info />} />
</Tooltip>
```

### Tooltip with Delay

```tsx
<Tooltip content="Delayed tooltip" delayDuration={500}>
  <Button>Hover (500ms delay)</Button>
</Tooltip>
```

### Rich Content Tooltip

```tsx
<Tooltip
  content={
    <div className="space-y-1">
      <p className="font-semibold">Multiline Tooltip</p>
      <p className="text-sm opacity-80">Second line of content</p>
    </div>
  }
>
  <Button>Hover for rich content</Button>
</Tooltip>
```

## Notes

- Uses React.useId for unique IDs
- Supports keyboard focus interaction
- Animated opacity transitions
- aria-describedby automatically added to trigger
- Pointer events disabled on tooltip to prevent flickering
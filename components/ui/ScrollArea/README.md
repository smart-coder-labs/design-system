# ScrollArea

> **v1.0.31** · stable

A scrollable container with custom styled scrollbars that match the Apple Minimal design system. Automatically hides scrollbars when content fits, and provides drag-to-scroll functionality.

## Installation

```bash
import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea';
```

## Basic Usage

```tsx
import { ScrollArea } from '@/components/ui/ScrollArea';

<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
    <div>Long content here...</div>
</ScrollArea>
```

## With Custom Scrollbars

```tsx
import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea';

<ScrollArea className="h-[300px]">
    <div>Content that scrolls</div>
    {/* ScrollBars are automatically rendered */}
</ScrollArea>
```

## API

### ScrollArea Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Scrollable content |

### ScrollBar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Scrollbar orientation |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Chat Messages

```tsx
<ScrollArea className="h-[400px] w-full rounded-lg border">
    <div className="p-4 space-y-4">
        {messages.map(msg => (
            <div key={msg.id} className="message">{msg.content}</div>
        ))}
    </div>
</ScrollArea>
```

### Code Editor

```tsx
<ScrollArea className="h-[500px]">
    <pre className="p-4 text-sm font-mono">
        {codeContent}
    </pre>
</ScrollArea>
```

### Horizontal Scroll

```tsx
<ScrollArea className="w-full">
    <div className="flex gap-4 p-4">
        {items.map(item => (
            <Card key={item.id}>{item.content}</Card>
        ))}
    </div>
</ScrollArea>
```

## Notes

- Scrollbars automatically appear only when content overflows
- Supports drag-to-scroll on the scrollbar track
- Uses native scroll events for performance
- Fully accessible with proper ARIA attributes
- Dark mode compatible via design tokens
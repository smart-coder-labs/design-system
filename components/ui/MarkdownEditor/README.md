# MarkdownEditor

> **v1.0.16** · stable

A rich markdown editor with toolbar, write/preview tabs, and live preview. Supports common formatting options including bold, italic, links, lists, code, and images.

## Installation

```bash
# The component is copied to your project with the add cli command
import { MarkdownEditor } from '@/components/ui/MarkdownEditor';
```

## Basic Usage

```tsx
import { useState } from 'react';
import { MarkdownEditor } from '@/components/ui/MarkdownEditor';

function Example() {
  const [value, setValue] = useState('');

  return (
    <MarkdownEditor
      value={value}
      onChange={setValue}
      placeholder="Type markdown here..."
    />
  );
}
```

## With Label

```tsx
<MarkdownEditor
  value={value}
  onChange={setValue}
  label="Description"
  placeholder="Enter a detailed description..."
/>
```

## With Helper Text

```tsx
<MarkdownEditor
  value={value}
  onChange={setValue}
  label="Notes"
  helperText="Supports markdown formatting"
/>
```

## With Error State

```tsx
<MarkdownEditor
  value={value}
  onChange={setValue}
  label="Content"
  error="Content is required"
/>
```

## Custom Min Height

```tsx
<MarkdownEditor
  value={value}
  onChange={setValue}
  minHeight="300px"
/>
```

## API

### Props

| Prop           | Type         | Default         | Description                                      |
|----------------|--------------|-----------------|--------------------------------------------------|
| `value`        | `string`     | `''`            | Current markdown value (controlled)             |
| `onChange`     | `(value: string) => void` | -       | Called when content changes                     |
| `placeholder`  | `string`     | `'Type markdown here...'` | Placeholder text                    |
| `label`        | `string`     | -               | Label text displayed above editor               |
| `error`        | `string`     | -               | Error message to display                        |
| `helperText`   | `string`     | -               | Helper text to display below editor             |
| `disabled`     | `boolean`    | `false`         | Disables the editor                             |
| `minHeight`    | `string`     | `'200px'`       | Minimum height of the editor                    |
| `className`    | `string`     | -               | Additional CSS classes                          |

## Toolbar

The toolbar provides quick access to markdown formatting:

| Button   | Action                | Syntax                    |
|----------|----------------------|---------------------------|
| Bold     | Bold text             | `**text**`                |
| Italic   | Italic text           | `*text*`                  |
| Link     | Insert link          | `[text](url)`             |
| List     | Bullet list          | `- item`                  |
| Ordered  | Numbered list        | `1. item`                 |
| Code     | Inline code          | `` `code` ``              |
| Image    | Insert image         | `![alt](url)`             |

## Examples

### Transaction Note

```tsx
<MarkdownEditor
  value={`## Transaction Note
**Amount:** $250.00
**Recipient:** Alice Johnson
**Reference:** INV-2025-4421

> Payment for freelance design services - Q1 2025
`}
  onChange={setValue}
  label="Transaction Note"
/>
```

### Meeting Notes

```tsx
<MarkdownEditor
  value={value}
  onChange={setValue}
  label="Sprint Notes"
  placeholder="# Sprint Planning — Apr 15

## Attendees
- Cesar (PM)
- Alice (Dev)

## Tasks
- [ ] Implement payment flow
- [ ] Design new dashboard
"
/>
```

### Disabled Editor

```tsx
<MarkdownEditor
  value="This content is read-only"
  onChange={() => {}}
  disabled={true}
/>
```

### Dark Mode

```tsx
<div className="dark">
  <MarkdownEditor
    value={value}
    onChange={setValue}
    label="Content"
  />
</div>
```

## Notes

- Uses `markdown-it` for parsing and rendering
- Tab-based interface: Write (edit) and Preview modes
- Toolbar buttons insert syntax at cursor position
- Preview mode renders actual markdown output
- Supports dark mode via design tokens
- Fully accessible with proper labels
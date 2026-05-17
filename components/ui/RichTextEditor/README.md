# RichTextEditor

> **v1.0.23** · stable

A WYSIWYG text editor with basic formatting toolbar supporting bold, italic, underline, and text alignment.

## Installation

```bash
# The component is copied to your project with the add cli command
import { RichTextEditor } from '@/components/ui/RichTextEditor';
```

## Basic Usage

```tsx
import { RichTextEditor } from '@/components/ui/RichTextEditor';

<RichTextEditor
    placeholder="Start typing..."
    onChange={(html) => console.log('Content:', html)}
/>
```

## With Label

```tsx
<RichTextEditor
    label="Transaction Note"
    placeholder="Add a note to this transaction..."
    onChange={handleChange}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | HTML content (controlled) |
| `onChange` | `(html: string) => void` | - | Called when content changes |
| `placeholder` | `string` | `'Start typing...'` | Placeholder text |
| `label` | `string` | - | Label text displayed above |
| `error` | `string` | - | Error message |
| `helperText` | `string` | - | Helper text displayed below |
| `disabled` | `boolean` | `false` | Disable editing |
| `className` | `string` | - | Additional classes |
| `minHeight` | `string` | `'150px'` | Minimum height of editor |

## Examples

### With Content

```tsx
<RichTextEditor
    label="Investment Notes"
    value="<p>This is my <strong>retirement portfolio</strong> for long-term growth.</p>"
    onChange={handleChange}
/>
```

### With Error

```tsx
<RichTextEditor
    label="Support Message"
    value="<p>My transaction was not processed...</p>"
    error="Message exceeds 500 characters"
    onChange={handleChange}
/>
```

### Disabled (Read-Only)

```tsx
<RichTextEditor
    label="Read-Only Notes"
    value="<p>This is a <strong>signed</strong> agreement that cannot be modified.</p>"
    disabled
    onChange={handleChange}
/>
```

### With Helper Text

```tsx
<RichTextEditor
    label="Transfer Description"
    placeholder="Describe the purpose of this transfer..."
    helperText="This note will be visible to the recipient."
    onChange={handleChange}
/>
```

## Notes

- Uses contentEditable for rich text editing
- Toolbar supports: Bold, Italic, Underline, Align Left, Center, Right
- Outputs HTML string on content change
- Supports both controlled (value) and uncontrolled modes
- Fully accessible with focus states
- Supports dark mode via CSS tokens
- Error and helper text with Framer Motion animations
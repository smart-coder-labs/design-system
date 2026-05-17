# Textarea

> **v1.0.33** · stable

Form input component for multi-line text entry.

## Installation

```bash
import { Textarea } from '@/components/ui/Textarea';
```

## Basic Usage

```tsx
<Textarea 
  value={value}
  onChange={setValue}
  placeholder="Enter your message..."
/>
```

## API

### Props

Extends React.TextareaHTMLAttributes<HTMLTextAreaElement>

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Controlled value |
| onChange | React.ChangeEventHandler | - | Change handler |
| placeholder | string | - | Placeholder text |
| disabled | boolean | false | Disabled state |
| rows | number | - | Number of rows |
| cols | number | - | Number of columns |
| className | string | - | Additional classes |
| ... | TextareaHTMLAttributes | - | Other native attributes |

## Examples

### Basic Usage

```tsx
<Textarea 
  value={message}
  onChange={setMessage}
  placeholder="Type your message..."
/>
```

### With Label

```tsx
<div className="space-y-2">
  <label className="text-sm font-medium">Message</label>
  <Textarea 
    value={message}
    onChange={setMessage}
    placeholder="Enter your message"
  />
</div>
```

### With Error

```tsx
<Textarea 
  value={bio}
  onChange={setBio}
  aria-invalid={true}
  className="border-status-error focus:ring-status-error"
/>
```

### Fixed Rows

```tsx
<Textarea 
  value={description}
  onChange={setDescription}
  rows={4}
/>
```

### Disabled State

```tsx
<Textarea 
  value={value}
  onChange={setValue}
  disabled
  placeholder="This field is disabled"
/>
```

### With Custom Styling

```tsx
<Textarea 
  value={content}
  onChange={setContent}
  className="min-h-[120px] resize-none"
/>
```

## Notes

- Uses React.forwardRef
- Supports all native textarea attributes
- Keyboard accessible
- Supports dark mode via design tokens
- Resizable vertically by default
- Hover and focus states included
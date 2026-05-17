# TagsInput

> **v1.0.3** · stable

A tag input component for adding and managing multiple tags with keyboard support (Enter, comma, Backspace).

## Installation

```bash
import { TagsInput } from '@/components/ui/TagsInput';
```

## Basic Usage

```tsx
import { useState } from 'react';
import { TagsInput } from '@/components/ui/TagsInput';

function Example() {
  const [tags, setTags] = useState<string[]>([]);
  
  return (
    <TagsInput
      value={tags}
      onChange={setTags}
      placeholder="Add a tag..."
    />
  );
}
```

## With Label

```tsx
<TagsInput
  value={tags}
  onChange={setTags}
  label="Investment Categories"
  placeholder="Add category..."
/>
```

## API

### Props

| Prop           | Type                      | Default       | Description                         |
| -------------- | ------------------------- | ------------- | ----------------------------------- |
| `value`        | `string[]`                | `[]`          | Array of tags (controlled)          |
| `onChange`     | `(tags: string[]) => void` | -             | Called when tags change             |
| `placeholder`  | `string`                  | `'Add tags...'` | Placeholder text                   |
| `label`        | `string`                  | -             | Label text displayed above input   |
| `error`        | `string`                  | -             | Error message                      |
| `helperText`   | `string`                  | -             | Helper text below input             |
| `disabled`    | `boolean`                 | `false`       | Disables the input                 |
| `maxTags`      | `number`                  | -             | Maximum number of tags allowed      |
| `onBlur`       | `() => void`              | -             | Called when input loses focus       |
| `className`    | `string`                  | -             | Additional classes                 |

## Examples

### With Initial Tags

```tsx
<TagsInput
  value={['investment', 'savings', 'budget']}
  onChange={setTags}
  placeholder="Add more..."
/>
```

### With Helper Text

```tsx
<TagsInput
  value={tags}
  onChange={setTags}
  label="Portfolio Tags"
  placeholder="Add tag..."
  helperText="Press Enter or comma to add a tag. Max 10 tags."
/>
```

### Limited Tags

```tsx
<TagsInput
  value={tags}
  onChange={setTags}
  label="Limited Tags (Max 5)"
  maxTags={5}
  placeholder="Max tags reached"
/>
```

### Disabled State

```tsx
<TagsInput
  value={['stocks', 'etf', 'crypto']}
  disabled
/>
```

## Notes

- Tags are added by pressing Enter or comma
- Remove tags by clicking the X button or pressing Backspace when input is empty
- Duplicate tags are not allowed
- Uses Framer Motion for tag add/remove animations (150ms)
- Fully accessible with keyboard navigation
- Supports dark mode via design tokens
- Uses React.forwardRef for the root element
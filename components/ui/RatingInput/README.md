# RatingInput

A star-based rating input component for collecting user ratings. Supports interactive and read-only modes, multiple sizes, custom max ratings, and displays helper text or error messages.

## Installation

```bash
# The component is copied to your project with the add cli command
import { RatingInput } from '@/components/ui/RatingInput';
```

## Basic Usage

```tsx
import { RatingInput } from '@/components/ui/RatingInput';
import { useState } from 'react';

function Example() {
  const [rating, setRating] = useState(0);

  return (
    <RatingInput
      value={rating}
      onChange={setRating}
    />
  );
}
```

## API

### Props

| Prop         | Type                       | Default   | Description                          |
|--------------|----------------------------|-----------|--------------------------------------|
| `value`      | `number`                   | `0`       | Current rating value                 |
| `onChange`   | `(value: number) => void`  | -         | Callback when rating changes         |
| `max`        | `number`                   | `5`       | Maximum number of stars              |
| `label`      | `string`                   | -         | Optional label text displayed above  |
| `error`      | `string`                   | -         | Error message to display              |
| `helperText` | `string`                   | -         | Helper text to display                |
| `disabled`   | `boolean`                  | `false`   | Disables interaction                 |
| `readOnly`   | `boolean`                  | `false`   | Read-only mode (no interaction)      |
| `size`       | `'sm' \| 'md' \| 'lg'`     | `'md'`    | Star size                            |
| `className`  | `string`                   | -         | Additional CSS classes               |

## Examples

### Default (5 stars)

```tsx
<RatingInput
  value={0}
  onChange={(value) => console.log(value)}
/>
```

### Pre-selected Rating

```tsx
<RatingInput
  value={3}
  onChange={(value) => console.log(value)}
/>
```

### With Label

```tsx
<RatingInput
  label="How would you rate this?"
  value={4}
  onChange={(value) => console.log(value)}
/>
```

### All Stars Selected

```tsx
<RatingInput
  value={5}
  onChange={(value) => console.log(value)}
/>
```

### Three Different Sizes

```tsx
// Small
<RatingInput size="sm" value={4} onChange={(v) => console.log(v)} />

// Medium (default)
<RatingInput size="md" value={3} onChange={(v) => console.log(v)} />

// Large
<RatingInput size="lg" value={5} onChange={(v) => console.log(v)} />
```

### Custom Max Rating

```tsx
<RatingInput
  max={10}
  value={7}
  onChange={(value) => console.log(value)}
/>
```

### Disabled State

```tsx
<RatingInput
  value={3}
  disabled={true}
  onChange={(value) => console.log(value)}
/>
```

### Read-Only Mode

```tsx
<RatingInput
  value={4}
  readOnly={true}
/>
```

### With Helper Text

```tsx
<RatingInput
  label="Your rating"
  value={0}
  onChange={(value) => console.log(value)}
  helperText="Click to select a rating"
/>
```

### With Error Message

```tsx
<RatingInput
  label="Rating"
  value={0}
  onChange={(value) => console.log(value)}
  error="Please select a rating"
/>
```

## Accessibility

- Full keyboard navigation (Tab to focus, arrow keys to change)
- Button semantics for each star
- Proper disabled and read-only states
- Labels properly associated with the input

## Notes

- Stars use Lucide Star icon from lucide-react
- Hover preview: stars fill up to the hovered position before clicking
- Selected and hovered stars display yellow fill (`fill-yellow-400`)
- Unfilled stars show transparent fill with gray stroke
- Framer Motion animations on hover (scale effect)
- Click on a star to select that rating value
- Supports dark mode via CSS classes
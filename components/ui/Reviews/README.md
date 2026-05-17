# Reviews

> **v1.0.13** · stable

A review list component with star ratings display. Supports both compact and full modes with customizable review items.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Reviews, RatingStars } from '@/components/ui/Reviews';
```

## Basic Usage

```tsx
import { Reviews } from '@/components/ui/Reviews';

const reviews = [
    { id: '1', author: 'Alice Johnson', rating: 5, date: 'May 10, 2025', text: 'Excellent app!' },
    { id: '2', author: 'Bob Smith', rating: 4, date: 'May 8, 2025', text: 'Great platform.' },
];

<Reviews reviews={reviews} />
```

## Compact Mode

```tsx
<Reviews reviews={reviews} compact />
```

## With RatingStars

```tsx
import { RatingStars } from '@/components/ui/Reviews';

<RatingStars value={4} max={5} readOnly size="md" />
```

## API

### Reviews Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `reviews` | `Review[]` | - | Array of review objects |
| `className` | `string` | - | Additional classes |
| `compact` | `boolean` | `false` | Use smaller star size |

### RatingStars Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | - | Current rating (controlled) |
| `defaultValue` | `number` | `0` | Initial rating (uncontrolled) |
| `max` | `number` | `5` | Maximum number of stars |
| `readOnly` | `boolean` | `false` | Disable user interaction |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Star size |
| `onChange` | `(v: number) => void` | - | Called when rating changes |

### Review

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string \| number` | Unique identifier |
| `author` | `string` | Reviewer name |
| `avatar` | `ReactNode` | Custom avatar element |
| `rating` | `number` | Star rating (1-max) |
| `date` | `string` | Review date |
| `text` | `string` | Review content |

## Examples

### Many Reviews

```tsx
const reviews = [
    { id: '1', author: 'David Brown', rating: 5, date: 'May 11, 2025', text: 'Best fintech app!' },
    { id: '2', author: 'Eve Davis', rating: 4, date: 'May 10, 2025', text: 'Highly recommend.' },
    { id: '3', author: 'Frank Green', rating: 5, date: 'May 9, 2025', text: 'Amazing support!' },
    // ... more reviews
];

<Reviews reviews={reviews} />
```

### Interactive Rating

```tsx
const [rating, setRating] = useState(0);

<RatingStars value={rating} onChange={setRating} size="lg" />
```

## Notes

- Uses `React.forwardRef` for the root element
- Fully accessible with ARIA attributes (radiogroup, radio roles)
- Supports dark mode via CSS tokens
- Compact mode uses smaller star size (sm vs md)
- Default avatar placeholder when none provided
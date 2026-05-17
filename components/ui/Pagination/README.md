# Pagination

> **v1.0.11** · stable

A page navigation component with first/last, previous/next buttons, and intelligent page number display with ellipsis. Uses a smart algorithm to show relevant pages around the current page.

## Installation

```bash
import { Pagination } from '@/components/ui/Pagination';
```

## Basic Usage

```tsx
const [page, setPage] = useState(1);

<Pagination
  currentPage={page}
  totalPages={10}
  onPageChange={setPage}
/>
```

## Large Page Count

```tsx
<Pagination
  currentPage={15}
  totalPages={50}
  onPageChange={setPage}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentPage` | `number` | Required | Current active page (1-indexed) |
| `totalPages` | `number` | Required | Total number of pages |
| `onPageChange` | `(page: number) => void` | Required | Callback when page changes |
| `siblingCount` | `number` | `1` | Number of page buttons around current page |
| `showFirstLast` | `boolean` | `true` | Show first/last page buttons |
| `showPrevNext` | `boolean` | `true` | Show previous/next buttons |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Small Size

```tsx
<Pagination
  currentPage={page}
  totalPages={50}
  onPageChange={setPage}
  size="sm"
/>
```

### Large Size

```tsx
<Pagination
  currentPage={page}
  totalPages={10}
  onPageChange={setPage}
  size="lg"
/>
```

### Without First/Last Buttons

```tsx
<Pagination
  currentPage={page}
  totalPages={20}
  onPageChange={setPage}
  showFirstLast={false}
/>
```

### Without Previous/Next

```tsx
<Pagination
  currentPage={page}
  totalPages={20}
  onPageChange={setPage}
  showPrevNext={false}
/>
```

### With More Siblings

```tsx
<Pagination
  currentPage={page}
  totalPages={100}
  onPageChange={setPage}
  siblingCount={2}
/>
```

## Page Display Logic

The component intelligently shows pages based on current position:

- **Near start**: `1 2 3 4 ... 50`
- **Near middle**: `1 ... 4 5 6 ... 50`
- **Near end**: `1 ... 47 48 49 50`
- **Many pages**: Shows ellipsis (...) to indicate hidden pages

## Notes

- Uses Framer Motion for hover animations on buttons
- Intelligent ellipsis display for large page counts
- Returns null (renders nothing) when `totalPages <= 1`
- Disabled state for first/last and prev/next at boundaries
- Active page has `aria-current="page"` for accessibility
- Proper ARIA labels on all navigation buttons
- Keyboard accessible with tab navigation
- Dark mode support via design tokens
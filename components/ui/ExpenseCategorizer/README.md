# ExpenseCategorizer

> **v1.0.2** · experimental

An interactive drag-and-drop component for categorizing uncategorized expenses into predefined categories. Built with Framer Motion for smooth drag interactions.

## Installation

```bash
# The component is copied to your project with the add cli command
import { ExpenseCategorizer } from '@/components/ui/ExpenseCategorizer';
```

## Basic Usage

```tsx
import { ExpenseCategorizer } from '@/components/ui/ExpenseCategorizer';

<ExpenseCategorizer />
```

## API

### Props

| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |

### Internal Types

The component manages these internal types:

```typescript
interface Transaction {
  id: string;
  name: string;
  amount: number;
  category: string | null;
}
```

## Examples

### Default

```tsx
<ExpenseCategorizer />
```

### In Dashboard Container

```tsx
<div className="max-w-2xl mx-auto">
  <ExpenseCategorizer />
</div>
```

### Mobile View

```tsx
<div className="max-w-sm mx-auto">
  <ExpenseCategorizer />
</div>
```

## Notes

- Self-contained component with internal state management
- Drag detection threshold: 50px horizontal or vertical
- Uses Framer Motion for spring physics animations
- Supports dark mode via CSS tokens
- Shows "Todo ordenado" (All sorted) when inbox is empty
- Animated category totals update when items are dropped
- Border changes to dashed when dragging to indicate drop zones
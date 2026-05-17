# SlideToDelete

> **v1.0.32** · stable

A swipeable card component for delete actions with gesture support and optional confirmation dialog.

## Installation

```bash
# The component is copied to your project with the add cli command
import { SlideToDelete, SlideToDeleteItem } from '@/components/ui/SlideToDelete';
```

## Basic Usage

```tsx
import { SlideToDelete } from '@/components/ui/SlideToDelete';

function Example() {
  const handleDelete = async () => {
    await deleteItem(id);
  };

  return (
    <SlideToDelete onDelete={handleDelete}>
      <div className="p-4 bg-surface-primary rounded-lg border border-border-primary">
        <p className="text-text-primary font-medium">Transaction #12345</p>
        <p className="text-text-tertiary text-sm mt-1">$250.00 • May 10, 2026</p>
      </div>
    </SlideToDelete>
  );
}
```

## With Bi-Directional Swipe

```tsx
<SlideToDelete
  onDelete={handleDelete}
  onCancel={handleCancel}
  cancelLabel="Cancel"
>
  <CardContent />
</SlideToDelete>
```

## With Confirmation Dialog

```tsx
<SlideToDelete
  onDelete={handleDelete}
  confirmDelete={true}
  confirmMessage="Delete this transaction permanently?"
>
  <CardContent />
</SlideToDelete>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Content to display |
| `onDelete` | `() => void \| Promise<void>` | - | Called when swipe threshold is reached |
| `onCancel` | `() => void` | - | Called when swiped left (optional) |
| `deleteLabel` | `string` | `'Delete'` | Label shown on right swipe |
| `cancelLabel` | `string` | `'Cancel'` | Label shown on left swipe |
| `deleteIcon` | `LucideIcon` | `Trash2` | Icon for delete action |
| `cancelIcon` | `LucideIcon` | `X` | Icon for cancel action |
| `threshold` | `number` | `80` | Pixels to swipe before action triggers |
| `disabled` | `boolean` | `false` | Disables swipe interaction |
| `confirmDelete` | `boolean` | `false` | Shows confirmation dialog before delete |
| `confirmMessage` | `string` | `'Are you sure?'` | Message in confirmation dialog |
| `variant` | `'default' \| 'danger' \| 'warning'` | `'danger'` | Visual style for delete action |
| `className` | `string` | - | Additional classes |

### SlideToDeleteItem Props

Extends `SlideToDeleteProps` with:

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Main text (optional) |
| `subtitle` | `string` | Secondary text (optional) |
| `avatar` | `ReactNode` | Avatar element (optional) |
| `actions` | `ReactNode` | Action buttons (optional) |

## Examples

### Transaction Row

```tsx
<SlideToDelete onDelete={handleDelete}>
  <div className="p-4 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
        <span>💳</span>
      </div>
      <div>
        <p className="text-text-primary font-medium">Uber Ride</p>
        <p className="text-text-tertiary text-xs">May 10, 2026</p>
      </div>
    </div>
    <p className="text-text-primary font-semibold">-$24.50</p>
  </div>
</SlideToDelete>
```

### Warning Variant (Archive)

```tsx
<SlideToDelete
  onDelete={handleArchive}
  variant="warning"
  deleteLabel="Archive"
>
  <CardContent />
</SlideToDelete>
```

### Disabled State

```tsx
<SlideToDelete onDelete={handleDelete} disabled>
  <CardContent />
</SlideToDelete>
```

## Notes

- Swipe right to delete, swipe left to cancel (if `onCancel` provided)
- Uses Framer Motion for smooth gesture animations
- Supports keyboard accessibility
- Automatically animates out after successful deletion
- Integrates with ConfirmDialog for destructive action confirmation
- Supports dark mode via design tokens
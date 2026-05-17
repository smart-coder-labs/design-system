# SplitButton

> **v1.0.12** · stable

A dual-action button component with a primary action and a dropdown menu for additional options.

## Installation

```bash
# The component is copied to your project with the add cli command
import { SplitButton } from '@/components/ui/SplitButton';
```

## Basic Usage

```tsx
import { SplitButton } from '@/components/ui/SplitButton';
import { Download, Share2 } from 'lucide-react';

function Example() {
  return (
    <SplitButton
      label="Export"
      onClick={() => console.log('Export clicked')}
      actions={[
        { label: 'Export as PDF', icon: Download, onClick: () => console.log('PDF') },
        { label: 'Export as CSV', icon: Download, onClick: () => console.log('CSV') },
      ]}
    />
  );
}
```

## With Primary Variant

```tsx
<SplitButton
  label="Share Report"
  onClick={handleShare}
  actions={[
    { label: 'Share via Email', icon: Share2, onClick: handleEmail },
    { label: 'Share via Link', icon: Share2, onClick: handleLink },
  ]}
  variant="primary"
/>
```

## Disabled State

```tsx
<SplitButton
  label="Export"
  onClick={handleExport}
  actions={[
    { label: 'PDF', icon: Download, onClick: handlePdf },
  ]}
  disabled
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Text for the primary button |
| `onClick` | `() => void` | - | Primary button click handler |
| `actions` | `SplitButtonAction[]` | - | Dropdown menu items |
| `variant` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Disables entire component |
| `className` | `string` | - | Additional classes |

### SplitButtonAction

```typescript
interface SplitButtonAction {
  label: string;
  onClick: () => void;
  icon?: React.ElementType;
  disabled?: boolean;
}
```

## Examples

### Secondary Variant

```tsx
<SplitButton
  label="More Options"
  onClick={handleDefault}
  actions={[
    { label: 'View Details', icon: Eye, onClick: handleView },
    { label: 'Duplicate', onClick: handleDuplicate },
  ]}
  variant="secondary"
/>
```

### Tertiary Variant

```tsx
<SplitButton
  label="Actions"
  onClick={handleAction}
  actions={[
    { label: 'Option 1', onClick: handle1 },
    { label: 'Option 2', onClick: handle2 },
  ]}
  variant="tertiary"
/>
```

### Sizes

```tsx
// Small
<SplitButton label="Export" onClick={handle} actions={[]} size="sm" />

// Medium (default)
<SplitButton label="Export" onClick={handle} actions={[]} size="md" />

// Large
<SplitButton label="Export" onClick={handle} actions={[]} size="lg" />
```

### With Disabled Actions

```tsx
<SplitButton
  label="Manage"
  onClick={handleOpen}
  actions={[
    { label: 'Edit', icon: Edit3, onClick: handleEdit },
    { label: 'Archive', icon: Archive, onClick: handleArchive, disabled: true },
    { label: 'Delete', icon: Trash2, onClick: handleDelete, disabled: true },
  ]}
/>
```

### Dark Mode

```tsx
<div className="dark bg-gray-950 p-8">
  <SplitButton
    label="Export"
    onClick={handleExport}
    actions={[
      { label: 'PDF', icon: Download, onClick: handlePdf },
      { label: 'CSV', icon: Download, onClick: handleCsv },
    ]}
  />
</div>
```

## Notes

- Click left side for primary action, right side to open dropdown
- Uses Framer Motion for dropdown animation
- Click outside to close dropdown
- Keyboard accessible (Enter to trigger primary, Arrow keys for menu)
- Supports dark mode via design tokens
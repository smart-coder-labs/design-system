# DefinitionList

> **v1.0.25** · stable

A component for displaying term/description pairs in a structured list format, commonly used for displaying metadata, specifications, or key-value data.

## Installation

```bash
# The component is copied to your project with the add cli command
import { DefinitionList, CompactDefinitionList } from '@/components/ui/DefinitionList';
```

## Basic Usage

```tsx
import { DefinitionList, DefinitionItem } from '@/components/ui/DefinitionList';

const items: DefinitionItem[] = [
  { term: 'Account Holder', description: 'Cesar Ruiz' },
  { term: 'Account Type', description: 'Premium Checking' },
  { term: 'Account Number', description: '•••• 4832' },
];

<DefinitionList items={items} />
```

## Variants

### Default

```tsx
<DefinitionList items={items} variant="default" />
```

### Bordered

```tsx
<DefinitionList items={items} variant="bordered" />
```

### Striped

```tsx
<DefinitionList items={items} variant="striped" />
```

### Compact

```tsx
<DefinitionList items={items} density="compact" />
```

## API

### Props

| Prop           | Type                            | Default        | Description                         |
| -------------- | ------------------------------- | -------------- | ----------------------------------- |
| `items`        | `DefinitionItem[]`              | -              | Array of term/description pairs    |
| `variant`      | `'default' \| 'bordered' \| 'striped' \| 'compact'` | `'default'` | Visual styling variant |
| `orientation`  | `'horizontal' \| 'vertical'`   | `'horizontal'` | Layout direction                   |
| `divider`      | `boolean`                       | `false`        | Show dividers between items        |
| `hoverable`    | `boolean`                       | `false`        | Enable hover state on items         |
| `density`      | `'comfortable' \| 'compact'`   | `'comfortable'` | Spacing density                    |
| `className`    | `string`                        | -              | Additional CSS classes             |

### DefinitionItem

| Prop          | Type           | Description          |
| ------------- | -------------- | -------------------- |
| `term`        | `ReactNode`    | The term/label       |
| `description` | `ReactNode`    | The description value |

### CompactDefinitionList

A convenience component that uses `density="compact"` by default.

| Prop          | Type            | Description          |
| ------------- | --------------- | -------------------- |
| `...DefinitionListProps` | - | All DefinitionList props except `density` |

## Examples

### Horizontal Layout with Dividers

```tsx
<DefinitionList
  items={[
    { term: 'Email', description: 'cesar@example.com' },
    { term: 'Phone', description: '+1 (555) 123-4567' },
    { term: 'Address', description: '123 Main St' },
  ]}
  orientation="horizontal"
  divider
/>
```

### Vertical Layout with Hover State

```tsx
<DefinitionList
  items={[
    { term: 'Status', description: 'Active' },
    { term: 'Last Login', description: '2 hours ago' },
  ]}
  orientation="vertical"
  hoverable
/>
```

### With Badges

```tsx
import { Badge } from '@/components/ui/Badge';

<DefinitionList
  items={[
    { term: 'Account', description: 'Checking' },
    { term: 'Verification', description: <Badge variant="success" size="sm">Verified</Badge> },
    { term: 'Risk Level', description: <Badge variant="warning" size="sm">Low</Badge> },
  ]}
/>
```

### Compact Version

```tsx
<CompactDefinitionList
  items={[
    { term: 'ID', description: '#12345' },
    { term: 'Status', description: 'Active' },
  ]}
/>
```

## Notes

- Uses `forwardRef` for the root element
- Supports dark mode via design tokens
- Animations use Framer Motion (150ms transitions)
- Horizontal layout collapses to vertical on mobile
- All props extend HTML dl element attributes

---

## Architecture Decisions

### Why single file?

This component is ~120 lines and self-contained. The subcomponent `CompactDefinitionList` is a thin wrapper that just changes density. Splitting would add unnecessary complexity.

### File Structure

```
DefinitionList/
├── DefinitionList.tsx       # Main component + CompactDefinitionList
├── DefinitionList.types.ts  # Types + DefinitionItem
└── index.ts                # Barrel exports
```
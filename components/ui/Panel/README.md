# Panel

> **v1.0.28** · stable

A versatile panel component with support for multiple variants, collapsible content, and optional header/footer sections.

## Basic Usage

```tsx
import { Panel } from '@/components/ui/Panel';

<Panel title="Account Overview">
  <p className="text-text-secondary">Your account details and recent activity.</p>
</Panel>
```

## With Subtitle

```tsx
<Panel
  title="Portfolio Performance"
  subtitle="Last 30 days"
>
  <p>+12.4% this quarter across all assets.</p>
</Panel>
```

## Elevated Variant

```tsx
<Panel variant="elevated" title="Security Settings">
  <p>Manage your password, 2FA, and session settings.</p>
</Panel>
```

## Collapsible

```tsx
<Panel
  title="Advanced Options"
  collapsible
  defaultCollapsed
>
  <p>These options are for advanced users.</p>
</Panel>
```

## With Header Actions

```tsx
import { Button } from '@/components/ui/Button';

<Panel
  title="Recent Transactions"
  headerActions={<Button variant="ghost" size="sm">View All</Button>}
>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'elevated' \| 'outlined' \| 'glass'` | `'default'` | Visual style variant |
| `title` | `string` | - | Panel title |
| `subtitle` | `string` | - | Subtitle text below title |
| `headerActions` | `ReactNode` | - | Actions to display in header |
| `footer` | `ReactNode` | - | Footer content |
| `collapsible` | `boolean` | `false` | Enable collapse/expand |
| `defaultCollapsed` | `boolean` | `false` | Start collapsed |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Content padding |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Outlined Variant

```tsx
<Panel variant="outlined" title="Security Settings">
  <p className="text-text-secondary">Manage your password and 2FA settings.</p>
</Panel>
```

### Glass Variant

```tsx
<Panel variant="glass" title="Quick Stats">
  <div className="grid grid-cols-2 gap-4">
    <div>Total: $12,430</div>
    <div>Items: 24</div>
  </div>
</Panel>
```

### No Padding

```tsx
<Panel padding="none">
  <div className="bg-blue-500 p-4">Custom padding</div>
</Panel>
```

### With Footer

```tsx
<Panel
  title="Confirm Action"
  footer={
    <div className="flex justify-end gap-2">
      <Button variant="ghost">Cancel</Button>
      <Button variant="primary">Confirm</Button>
    </div>
  }
>
```

### No Title

```tsx
<Panel>
  <div className="p-4">
    <p>Content panel without a title header.</p>
  </div>
</Panel>
```

## Notes

- Uses Framer Motion for collapse/expand animations
- Collapsible toggle rotates chevron icon
- Elevated variant has shadow, no border
- Outlined variant has thick border, no background
- Glass variant has backdrop blur effect
- Header shows border below when present
- Footer shows border above when present
- Dark mode support via design tokens
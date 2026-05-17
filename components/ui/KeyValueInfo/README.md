# KeyValueInfo

> **v1.0.29** · stable

A key-value information display component with multiple layout variants. Supports labels, values, icons, badges, and click-to-copy functionality.

## Installation

```bash
import { KeyValueInfo, CompactKeyValueInfo, InlineKeyValueInfo } from '@/components/ui/KeyValueInfo';
```

## Basic Usage

```tsx
import { KeyValueInfo } from '@/components/ui/KeyValueInfo';

<KeyValueInfo
  items={[
    { key: 'Account', value: 'Checking •••• 4821' },
    { key: 'Balance', value: '$12,430.50' },
    { key: 'Status', value: 'Active' },
  ]}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `KeyValueItem[]` | - | Array of key-value pairs |
| `variant` | `'default' \| 'card' \| 'inline' \| 'grid'` | `'default'` | Layout variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Text size |
| `columns` | `1 \| 2 \| 3 \| 4` | `1` | Grid columns (for 'grid' variant) |
| `hoverable` | `boolean` | `false` | Enable hover effect |
| `divider` | `boolean` | `false` | Show dividers between items |
| `className` | `string` | - | Additional CSS classes |

### KeyValueItem

```typescript
interface KeyValueItem {
  key: ReactNode;
  value: ReactNode;
  icon?: ReactNode;
  badge?: ReactNode;
  copyable?: boolean;
}
```

## Examples

### Card Variant

```tsx
<KeyValueInfo
  variant="card"
  items={[
    { key: 'Reference', value: 'INV-2025-4421' },
    { key: 'Amount', value: '$1,200.00' },
    { key: 'Status', value: 'Completed' },
  ]}
/>
```

### Grid Layout

```tsx
<KeyValueInfo
  variant="grid"
  columns={3}
  items={[
    { key: 'Revenue', value: '$124,500' },
    { key: 'Orders', value: '1,249' },
    { key: 'Users', value: '2,543' },
    { key: 'Views', value: '15,234' },
    { key: 'Conversion', value: '3.8%' },
    { key: 'Growth', value: '+12.5%' },
  ]}
/>
```

### Inline Layout

```tsx
<InlineKeyValueInfo
  items={[
    { key: 'Transaction ID', value: 'TRX-2025-04-8912' },
    { key: 'Date', value: 'Apr 15, 2025' },
  ]}
/>
```

### With Icons

```tsx
<KeyValueInfo
  items={[
    { key: 'Email', value: 'cesar@example.com', icon: <MailIcon /> },
    { key: 'Phone', value: '+1 555-0123', icon: <PhoneIcon /> },
    { key: 'Location', value: 'San Francisco, CA', icon: <MapPinIcon /> },
  ]}
/>
```

### With Badges

```tsx
<KeyValueInfo
  items={[
    { key: 'Status', value: 'Active', badge: <Badge>Verified</Badge> },
    { key: '2FA', value: 'Enabled', badge: <Badge variant="success">Active</Badge> },
  ]}
/>
```

### Copyable Values

```tsx
<KeyValueInfo
  items={[
    { key: 'API Key', value: 'sk_live_xxxxx', copyable: true },
    { key: 'Account ID', value: 'acc_4821', copyable: true },
  ]}
/>
```

### Compact Version

```tsx
<CompactKeyValueInfo
  variant="card"
  items={[
    { key: 'Account', value: 'Checking •••• 4821' },
    { key: 'Balance', value: '$12,430.50' },
  ]}
/>
```

### Small Size

```tsx
<KeyValueInfo
  size="sm"
  items={[
    { key: 'ID', value: '#4821' },
    { key: 'Type', value: 'Checking' },
  ]}
/>
```

### Large Size

```tsx
<KeyValueInfo
  size="lg"
  items={[
    { key: 'Full Name', value: 'Cesar Ruiz' },
    { key: 'Email', value: 'cesar@example.com' },
  ]}
/>
```

### Hoverable with Divider

```tsx
<KeyValueInfo
  variant="card"
  hoverable
  divider
  items={[
    { key: 'Account', value: 'Checking' },
    { key: 'Balance', value: '$12,430.50' },
    { key: 'Status', value: 'Active' },
  ]}
/>
```

## Notes

- Uses Framer Motion for entrance animations
- Copy to clipboard with visual "Copiado!" feedback
- Responsive grid breakpoints (md: 2 columns, xl: 3-4 columns)
- Dark mode support
- Exported variants: `CompactKeyValueInfo`, `InlineKeyValueInfo`
- Exported types: `KeyValueItem`, `KeyValueInfoVariant`, `KeyValueInfoSize`, `KeyValueInfoProps`
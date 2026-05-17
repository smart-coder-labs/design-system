# JsonViewer

A syntax-highlighted JSON viewer with collapsible nodes, copy functionality, and VS Code-inspired dark theme. Ideal for displaying API responses, transaction data, and debugging information.

## Installation

```bash
import { JsonViewer } from '@/components/ui/JsonViewer';
```

## Basic Usage

```tsx
import { JsonViewer } from '@/components/ui/JsonViewer';

const data = {
  transaction: {
    id: 'trx_7a3b9f2e',
    amount: 250.00,
    currency: 'USD',
    status: 'completed',
  }
};

<JsonViewer data={data} />
```

## Collapsed by Default

```tsx
<JsonViewer data={data} initiallyExpanded={false} />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `any` | - | JSON object or array to display |
| `initiallyExpanded` | `boolean` | `false` | Whether nested objects are expanded by default |
| `indentSize` | `number` | `20` | Number of pixels to indent per level |
| `showCopyButton` | `boolean` | `true` | Whether to show the copy button |
| `maxHeight` | `string \| number` | - | Maximum height before scrolling |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Transaction Data

```tsx
<JsonViewer
  data={{
    transaction: {
      id: 'trx_7a3b9f2e',
      amount: 250.00,
      currency: 'USD',
      status: 'completed',
      timestamp: '2025-04-15T14:32:21Z',
      sender: { id: 'usr_4821', name: 'Cesar Ruiz' },
      recipient: { id: 'usr_7734', name: 'Alice Johnson' },
    }
  }}
/>
```

### API Response with Pagination

```tsx
<JsonViewer
  data={{
    status: 200,
    data: {
      accounts: [
        { id: 'acc_1', type: 'checking', balance: 12430.50 },
        { id: 'acc_2', type: 'savings', balance: 33461.68 },
      ],
      total: 45892.18,
    },
    meta: { page: 1, total_pages: 5, count: 42 },
  }}
/>
```

### Crypto Transaction

```tsx
<JsonViewer
  data={{
    tx_hash: '0x7a3b9f2e8c4d1e5f6a7b8c9d0e1f2a3b4c5d6e7f',
    from: '0x1234567890abcdef1234567890abcdef12345678',
    to: '0x87654321fedcba0987654321fedcba0987654321',
    value: '0.025 BTC',
    confirmations: 12,
    status: 'confirmed',
  }}
  maxHeight={400}
/>
```

### Deeply Nested Data

```tsx
<JsonViewer
  data={{
    user: {
      profile: {
        name: 'Cesar Ruiz',
        email: 'cesar@example.com',
        settings: {
          theme: 'dark',
          notifications: { email: true, push: true, sms: false }
        }
      }
    }
  }}
  initiallyExpanded={true}
/>
```

## Color Scheme

The viewer uses VS Code-inspired syntax highlighting:

- **Strings**: `#ce9178` (orange)
- **Numbers**: `#b5cea8` (light green)
- **Booleans/Null**: `#569cd6` (blue)
- **Brackets**: `#da70d6` (purple)
- **Keys**: `#9cdcfe` (light blue)
- **Commas**: `#808080` (gray)

## Notes

- Supports any JSON-parseable data (objects, arrays, primitives)
- Expandable/collapsible nodes for large JSON
- One-click copy to clipboard with visual feedback
- Dark themed container with rounded corners
- Scrollable with custom thin scrollbar
- Framer Motion animations for smooth interactions
- Fully keyboard accessible
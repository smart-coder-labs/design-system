# InvoicePreview

> **v1.0.18** · stable

A comprehensive invoice preview component with built-in PDF generation, print, and share functionality. Displays full invoice details including parties, line items, totals, and status.

## Installation

```bash
import { InvoicePreview } from '@/components/ui/InvoicePreview';
```

## Basic Usage

```tsx
import { InvoicePreview } from '@/components/ui/InvoicePreview';

function Example() {
  return (
    <InvoicePreview
      invoiceNumber="INV-2025-4421"
      dateIssued="2025-04-15"
      dueDate="2025-05-15"
      status="pending"
      from={{ name: 'Acme Corp', address: '123 Main St', city: 'San Francisco', state: 'CA', zip: '94105', country: 'USA' }}
      to={{ name: 'Client Inc', address: '456 Market St', city: 'San Francisco', state: 'CA', zip: '94105', country: 'USA' }}
      items={[
        { id: '1', description: 'Web Development', quantity: 40, price: 150, total: 6000 },
        { id: '2', description: 'UI Design', quantity: 20, price: 125, total: 2500 },
      ]}
      subtotal={8500}
      tax={722.50}
      total={9222.50}
    />
  );
}
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `invoiceNumber` | `string` | - | Unique invoice identifier |
| `dateIssued` | `string` | - | Invoice creation date |
| `dueDate` | `string` | - | Payment due date |
| `status` | `'paid' \| 'pending' \| 'overdue'` | - | Invoice payment status |
| `from` | `InvoiceParty` | - | Sender details (name, address, city, state, zip, country, email, phone) |
| `to` | `InvoiceParty` | - | Receiver details |
| `items` | `InvoiceItem[]` | - | Line items (id, description, quantity, price, total) |
| `subtotal` | `number` | - | Subtotal amount |
| `tax` | `number` | - | Tax amount |
| `taxRate` | `number` | - | Tax percentage |
| `discount` | `number` | `0` | Discount amount |
| `total` | `number` | - | Final total amount |
| `currency` | `string` | `'$'` | Currency symbol |
| `logo` | `string` | - | Company logo URL |
| `notes` | `string` | - | Additional notes |
| `onDownload` | `() => void` | - | Custom download handler |
| `onPrint` | `() => void` | - | Custom print handler |
| `onShare` | `() => void` | - | Custom share handler |
| `className` | `string` | - | Additional CSS classes |

### Types

```typescript
interface InvoiceParty {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  email?: string;
  phone?: string;
}

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
  total: number;
}
```

## Examples

### With Discount

```tsx
<InvoicePreview
  invoiceNumber="INV-2025-4440"
  dateIssued="2025-04-01"
  dueDate="2025-05-01"
  status="pending"
  from={{ name: 'Design Studio', address: '100 Main St', city: 'NYC', state: 'NY', zip: '10001', country: 'USA' }}
  to={{ name: 'Startup Co', address: '200 Broadway', city: 'NYC', state: 'NY', zip: '10002', country: 'USA' }}
  items={[
    { id: '1', description: 'Product Design Sprint', quantity: 1, price: 15000, total: 15000 },
  ]}
  subtotal={15000}
  tax={1275}
  discount={500}
  total={14775}
/>
```

### Euro Currency

```tsx
<InvoicePreview
  // ...other props
  currency="EUR"
  taxRate={19}
  items={[
    { id: '1', description: 'UX Consulting', quantity: 20, price: 200, total: 4000 },
    { id: '2', description: 'UI Design System', quantity: 1, price: 8000, total: 8000 },
  ]}
/>
```

### International Invoice

```tsx
<InvoicePreview
  from={{
    name: 'FinFlow Ltd',
    address: '1 Fintech Square',
    city: 'London',
    state: '',
    zip: 'EC2N 1HQ',
    country: 'UK',
  }}
  to={{
    name: 'Tokyo Financial Inc',
    address: '1-2-3 Marunouchi',
    city: 'Tokyo',
    state: '',
    zip: '100-0005',
    country: 'Japan',
  }}
  notes="VAT reverse charge applies. Payment via SWIFT transfer."
/>
```

## Notes

- Built-in PDF generation using `html2canvas` and `jsspdf`
- Supports native share API with clipboard fallback
- Status badges with color coding (green=paid, amber=pending, red=overdue)
- Fully responsive layout
- Print-friendly styling
- Dark mode support
- Animations via Framer Motion (150ms transitions)
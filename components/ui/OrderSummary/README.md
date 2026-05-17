# OrderSummary

> **v1.0.0** · stable

A comprehensive order summary component displaying items, pricing breakdown, discounts, shipping, taxes, and total calculation.

## Basic Usage

```tsx
import { OrderSummary } from '@/components/ui/OrderSummary';

const items = [
  { id: '1', name: 'Wireless Mouse', price: 79.99, quantity: 2, image: '/mouse.jpg' },
  { id: '2', name: 'Mechanical Keyboard', price: 199.99, quantity: 1, image: '/keyboard.jpg' },
];

<OrderSummary items={items} currency="$" />
```

## With Discount and Shipping

```tsx
<OrderSummary
  items={items}
  currency="$"
  discountAmount={50.00}
  shippingCost={12.99}
  taxAmount={38.40}
/>
```

## Single Item

```tsx
<OrderSummary
  items={[
    { id: '1', name: 'Premium Subscription', price: 299.99, quantity: 1, image: '' }
  ]}
  currency="$"
  taxAmount={30.00}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `OrderItem[]` | Required | Array of order items |
| `currency` | `string` | `'$'` | Currency symbol |
| `discountAmount` | `number` | `0` | Discount to subtract |
| `shippingCost` | `number` | `0` | Shipping cost |
| `taxAmount` | `number` | `0` | Tax amount |
| `className` | `string` | - | Additional CSS classes |

### OrderItem

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `name` | `string` | Product name |
| `price` | `number` | Unit price |
| `quantity` | `number` | Quantity |
| `image` | `string` | Product image URL |
| `variant` | `string` | Variant info (optional) |

## Examples

### E-commerce Cart

```tsx
<OrderSummary
  items={[
    { id: '1', name: 'Apple MacBook Pro 16"', price: 2499.00, quantity: 1, image: '', variant: 'Space Black' },
    { id: '2', name: 'USB-C Hub', price: 49.99, quantity: 1, image: '', variant: '7-in-1' },
  ]}
  currency="$"
  discountAmount={150.00}
  shippingCost={0}
  taxAmount={254.89}
/>
```

### Free Shipping

```tsx
<OrderSummary
  items={items}
  currency="$"
  shippingCost={0}
/>
```

### Multiple Items

```tsx
<OrderSummary
  items={[
    { id: '1', name: 'Wireless Mouse', price: 79.99, quantity: 2, image: '' },
    { id: '2', name: 'Mechanical Keyboard', price: 199.99, quantity: 1, image: '', variant: 'Blue Switch' },
    { id: '3', name: 'Monitor Stand', price: 49.99, quantity: 1, image: '' },
    { id: '4', name: 'Webcam 4K', price: 129.99, quantity: 1, image: '' },
  ]}
  currency="$"
  shippingCost={12.99}
  taxAmount={38.40}
/>
```

## Notes

- Automatically calculates subtotal from items (price × quantity)
- Displays "Free" for zero shipping cost
- Discount shown in green when present
- Dashed border separates items from totals section
- Hover effect on item images (scale transform)
- Shows quantity badge on item thumbnail
- Displays unit price when quantity > 1
- Dark mode support via design tokens
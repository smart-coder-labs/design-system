# CartPreview

> **v1.0.2** · stable

A comprehensive shopping cart component with quantity controls, discount support, free shipping progress, and multiple display variants. Perfect for e-commerce applications requiring a full-featured cart experience.

## Installation

```bash
# The component is copied to your project with the add cli command
import { CartPreview } from '@/components/ui/CartPreview';
```

## Basic Usage

```tsx
import { CartPreview } from '@/components/ui/CartPreview';

const items = [
  { id: '1', name: 'Wireless Headphones', price: 299.99, quantity: 1, image: '/headphones.jpg' },
  { id: '2', name: 'USB-C Hub', price: 79.99, quantity: 2, image: '/hub.jpg' },
];

<CartPreview
  items={items}
  currency="$"
  onCheckout={() => console.log('Proceed to checkout')}
/>
```

## Variants

```tsx
// Sidebar - slides in from right (default)
<CartPreview variant="sidebar" isOpen={true} onClose={handleClose} />

// Dropdown - appears below a trigger element
<CartPreview variant="dropdown" isOpen={isOpen} />

// Modal - centered overlay
<CartPreview variant="modal" isOpen={isOpen} onClose={handleClose} />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `CartItem[]` | Required | Array of cart items |
| `currency` | `string` | `'$'` | Currency symbol |
| `onUpdateQuantity` | `(itemId, quantity) => void` | - | Called when quantity changes |
| `onRemoveItem` | `(itemId) => void` | - | Called when item is removed |
| `onCheckout` | `() => void` | - | Called when checkout button is clicked |
| `onClose` | `() => void` | - | Called when close button is clicked |
| `discountCode` | `string` | - | Pre-applied discount code |
| `discountAmount` | `number` | `0` | Discount value to display |
| `shippingCost` | `number` | `0` | Shipping cost |
| `freeShippingThreshold` | `number` | - | Minimum for free shipping |
| `isOpen` | `boolean` | `true` | Controls visibility |
| `variant` | `'sidebar' \| 'dropdown' \| 'modal'` | `'sidebar'` | Display variant |
| `className` | `string` | - | Additional CSS classes |

### CartItem

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `name` | `string` | Product name |
| `price` | `number` | Unit price |
| `quantity` | `number` | Item quantity |
| `image` | `string` | Product image URL |
| `variant` | `string` | Optional variant (e.g., color, size) |
| `maxQuantity` | `number` | Maximum allowed quantity |

## Examples

### With Free Shipping Progress

```tsx
<CartPreview
  items={items}
  shippingCost={9.99}
  freeShippingThreshold={100}
  onCheckout={handleCheckout}
/>
```

### With Discount Applied

```tsx
<CartPreview
  items={items}
  discountCode="SAVE20"
  discountAmount={75.99}
  onCheckout={handleCheckout}
/>
```

### Empty Cart

```tsx
<CartPreview
  items={[]}
  isOpen={true}
  variant="dropdown"
/>
```

### Dropdown Variant for Cart Icon

```tsx
<Button onClick={() => setIsOpen(!isOpen)}>
  <ShoppingBag /> Cart ({itemCount})
</Button>
<CartPreview
  items={items}
  variant="dropdown"
  isOpen={isOpen}
/>
```

## Notes

- Uses React.forwardRef for the root element
- Supports promo code input with apply button
- Displays subtotal, discount, shipping, and total breakdown
- Animated slide-in for sidebar variant
- Full dark mode support via CSS tokens
- Keyboard accessible (Escape closes sidebar/modal)
- ARIA labels for all interactive elements
- Built-in empty state when no items
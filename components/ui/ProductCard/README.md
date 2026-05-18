# ProductCard

> **v1.0.2** · stable

A comprehensive e-commerce product card component with image gallery, pricing, ratings, badges, favorite button, and quick actions. Supports multiple variants and fully interactive states.

## Installation

```bash
import { ProductCard } from '@/components/ui/ProductCard';
```

## Basic Usage

```tsx
import { ProductCard } from '@/components/ui/ProductCard';

<ProductCard
  id="1"
  name="Crypto Hardware Wallet"
  description="Secure your digital assets with this cold storage device."
  price={79.99}
  image="https://example.com/wallet.jpg"
  onAddToCart={() => console.log('Added to cart')}
/>
```

## With Rating

```tsx
<ProductCard
  id="2"
  name="Premium Ledger Nano X"
  description="Bluetooth-enabled hardware wallet with advanced security."
  price={149.00}
  originalPrice={179.00}
  image="https://example.com/ledger.jpg"
  rating={4.8}
  reviewCount={234}
  onAddToCart={handleAddToCart}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | required | Product unique identifier |
| `name` | `string` | required | Product title |
| `description?` | `string` | - | Product description |
| `price` | `number` | required | Current price |
| `originalPrice?` | `number` | - | Original price (for discount display) |
| `currency` | `string` | `'$'` | Currency symbol |
| `image` | `string` | required | Primary product image URL |
| `images?` | `string[]` | - | Additional images for gallery |
| `rating?` | `number` | - | Star rating (0-5) |
| `reviewCount?` | `number` | - | Number of reviews |
| `badge?` | `{ text: string; variant?: 'new' \| 'sale' \| 'trending' \| 'limited' }` | - | Badge to display |
| `inStock` | `boolean` | `true` | Stock availability |
| `stockCount?` | `number` | - | Items remaining (shows warning if < 10) |
| `category?` | `string` | - | Product category |
| `onAddToCart?` | `() => void` | - | Add to cart callback |
| `onQuickView?` | `() => void` | - | Quick view callback |
| `onFavorite?` | `() => void` | - | Favorite toggle callback |
| `isFavorite` | `boolean` | `false` | Initial favorite state |
| `variant` | `'default' \| 'compact' \| 'featured'` | `'default'` | Size variant |
| `showQuickActions` | `boolean` | `true` | Show hover quick actions |
| `className` | `string` | - | Additional classes |

## Examples

### Sale Badge

```tsx
<ProductCard
  id="3"
  name="Trezor Model T"
  description="Touchscreen hardware wallet."
  price={129.00}
  originalPrice={199.00}
  image="https://example.com/trezor.jpg"
  badge={{ text: 'Sale', variant: 'sale' }}
  onAddToCart={handleAddToCart}
/>
```

### Trending Badge

```tsx
<ProductCard
  id="4"
  name="Popular Hardware Wallet"
  price={199.00}
  image="https://example.com/wallet.jpg"
  badge={{ text: 'Trending', variant: 'trending' }}
/>
```

### Out of Stock

```tsx
<ProductCard
  id="5"
  name="Ledger Stax"
  description="Next-gen hardware wallet with E-Ink display."
  price={279.00}
  image="https://example.com/ledger-stax.jpg"
  inStock={false}
  badge={{ text: 'Sold Out', variant: 'new' }}
/>
```

### Compact Variant

```tsx
<ProductCard
  id="6"
  name="CoolWallet Pro"
  description="Credit card-sized crypto wallet."
  price={99.00}
  image="https://example.com/coolwallet.jpg"
  variant="compact"
/>
```

### Featured Variant (with description)

```tsx
<ProductCard
  id="7"
  name="Premium Security Suite"
  description="Complete security solution for all your crypto assets with advanced encryption and backup features."
  price={299.00}
  originalPrice={399.00}
  image="https://example.com/suite.jpg"
  rating={4.9}
  reviewCount={512}
  variant="featured"
/>
```

### Low Stock Warning

```tsx
<ProductCard
  id="8"
  name="Limited Edition Wallet"
  price={249.00}
  image="https://example.com/limited.jpg"
  stockCount={5}
  inStock={true}
/>
```

### Multi-Image Gallery

```tsx
<ProductCard
  id="9"
  name="Multi-Color Hardware Wallet"
  price={89.00}
  image="https://example.com/wallet-front.jpg"
  images={[
    'https://example.com/wallet-front.jpg',
    'https://example.com/wallet-back.jpg',
    'https://example.com/wallet-side.jpg',
  ]}
/>
```

## Interactions

- **Hover**: Card lifts with shadow, image zooms slightly, quick actions appear
- **Favorite**: Heart button toggles filled/outline state
- **Image Gallery**: Click dots to switch between images (if multiple images)
- **Add to Cart**: Button disabled when out of stock

## Notes

- Uses Lucide icons (Heart, ShoppingCart, Eye, Star, TrendingUp, Zap)
- Badge variants: new (blue), sale (red), trending (yellow/orange), limited (purple)
- Image scale animation on hover (scale-105)
- Supports dark mode via design tokens
- Stock warning appears when fewer than 10 items remain
- Auto-calculates discount percentage from original price
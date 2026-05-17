# RetailSwapInterface

> **v1.0.9** · stable

A consumer-friendly cryptocurrency swap interface with real-time pricing, exchange rate display, and transaction preview.

## Installation

```bash
# The component is copied to your project with the add cli command
import { RetailSwapInterface } from '@/components/ui/RetailSwapInterface';
```

## Basic Usage

```tsx
import { RetailSwapInterface } from '@/components/ui/RetailSwapInterface';

const assets = [
    { id: 'btc', symbol: 'BTC', name: 'Bitcoin', iconUrl: '₿', balance: 0.5, priceUsd: 45000 },
    { id: 'eth', symbol: 'ETH', name: 'Ethereum', iconUrl: 'Ξ', balance: 2.0, priceUsd: 3000 },
    { id: 'usdc', symbol: 'USDC', name: 'USD Coin', iconUrl: '💲', balance: 1000, priceUsd: 1 },
];

<RetailSwapInterface
    assets={assets}
    onSwap={(from, to, amount) => console.log(`Swap ${amount} ${from} to ${to}`)}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | `CryptoAsset[]` | - | Available assets for swapping |
| `className` | `string` | - | Additional classes |
| `onSwap` | `(from: string, to: string, amount: number) => void` | - | Called when user initiates swap |

### CryptoAsset

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique identifier |
| `symbol` | `string` | Trading symbol (e.g., 'BTC') |
| `name` | `string` | Full name (e.g., 'Bitcoin') |
| `iconUrl` | `string` | Icon or emoji |
| `balance` | `number` | Available balance |
| `priceUsd` | `number` | Price in USD |

## Examples

### BTC to ETH Swap

```tsx
<RetailSwapInterface
    assets={assets}
    onSwap={(from, to, amount) => {
        // Handle swap initiation
    }}
/>
```

### With Custom Assets

```tsx
const myAssets = [
    { id: 'sol', symbol: 'SOL', name: 'Solana', iconUrl: '◎', balance: 50, priceUsd: 100 },
    { id: 'usdt', symbol: 'USDT', name: 'Tether', iconUrl: '₮', balance: 5000, priceUsd: 1 },
];

<RetailSwapInterface assets={myAssets} />
```

## Notes

- Animated swap button rotates 180° when swapping direction
- Shows USD value conversion in real-time
- Displays network cost and fair execution info
- Automatically calculates exchange rate and output amount
- Includes 0.5% spread for slippage protection
- Gas fee displayed separately
- Validates insufficient funds
- Mobile-responsive design
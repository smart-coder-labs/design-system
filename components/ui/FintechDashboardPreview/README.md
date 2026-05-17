# FintechDashboardPreview

> **v1.0.14** · stable

A comprehensive fintech dashboard preview component combining multiple UI components into a cohesive mobile-first banking experience. Features tabs for different sections, real-time asset prices, and integrated financial widgets.

## Installation

```bash
# The component is copied to your project with the add cli command
import { FintechDashboardPreview } from '@/components/ui/FintechDashboardPreview';
```

## Basic Usage

```tsx
import { FintechDashboardPreview } from '@/components/ui/FintechDashboardPreview';

<FintechDashboardPreview userName="Carlos" />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `userName` | `string` | `'Carlos'` | Display name shown in header |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Default

```tsx
<FintechDashboardPreview userName="Carlos" />
```

### Short Name

```tsx
<FintechDashboardPreview userName="Ana" />
```

### Long Name

```tsx
<FintechDashboardPreview userName="Dr. María Guadalupe Fernández del Valle" />
```

### Business Account

```tsx
<FintechDashboardPreview userName="Acme Corp." />
```

### Dark Mode

```tsx
<div className="dark bg-background-primary min-h-screen">
  <FintechDashboardPreview userName="Carlos" />
</div>
```

## Dashboard Tabs

The dashboard features 5 main sections accessible via bottom navigation:

1. **Home** - Account balance, chart, quick transfers, transactions
2. **Cards** - Virtual card preview, cashback widget, security controls
3. **Send** - Quick transfer bar and transfer history
4. **Invest** - Portfolio distribution and asset prices
5. **More** - Settings and additional options

### Home Tab Components

- `BankAccountCard` - Account name, type, balance, CLABE/IBAN
- `BalanceChart` - 7-day balance trend chart
- `QuickTransferBar` - Contact quick-select for transfers
- `TransactionList` - Recent transactions with categories
- `AssetPriceTicker` - Scrolling asset prices (crypto, forex, stocks)

### Cards Tab Components

- `VirtualCardPreview` - Card visualization with brand/gradient
- `CashbackWidget` - Cashback progress and percentage
- `CardSecurityControls` - Card security toggle controls

### Invest Tab Components

- `PortfolioDistribution` - Asset allocation pie chart
- `AssetPriceTicker` - Vertical asset price list

## Notes

- Self-contained with internal mock data
- Sticky header with search and notification buttons
- Fixed bottom navigation with animated tab indicator
- Glassmorphism effect on header and navigation (glass class)
- Tab content animates with fade transitions
- Asset price ticker shows BTC, ETH, USD/MXN, AAPL, TSLA
- Mock transactions include expenses and income
- Supports dark mode via CSS tokens
- Responsive design optimized for mobile viewports
- Uses Framer Motion for tab and content animations
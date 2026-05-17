# FairUseLimitTracker

> **v1.0.24** · stable

A component displaying fair usage limits with animated progress bars. Shows usage categories with visual indicators for normal, warning (80%+), and exceeded (100%+) states.

## Installation

```bash
# The component is copied to your project with the add cli command
import { FairUseLimitTracker, LimitCategory } from '@/components/ui/FairUseLimitTracker';
```

## Basic Usage

```tsx
import { FairUseLimitTracker, LimitCategory } from '@/components/ui/FairUseLimitTracker';
import { RefreshCw, Landmark, CreditCard } from 'lucide-react';

const categories: LimitCategory[] = [
  {
    id: 'transfers',
    title: 'International Transfers',
    used: 12,
    total: 20,
    icon: <RefreshCw className="w-4 h-4" />,
    color: 'text-blue-500',
  },
  {
    id: 'withdrawals',
    title: 'ATM Withdrawals',
    used: 5,
    total: 10,
    icon: <Landmark className="w-4 h-4" />,
    color: 'text-emerald-500',
  },
  {
    id: 'virtual-cards',
    title: 'Virtual Cards',
    used: 3,
    total: 5,
    icon: <CreditCard className="w-4 h-4" />,
    color: 'text-purple-500',
  },
];

<FairUseLimitTracker categories={categories} />
```

## API

### Props

| Prop | Type | Description |
|------|------|-------------|
| `categories` | `LimitCategory[]` | Array of usage categories |
| `className` | `string` | Additional CSS classes |

### LimitCategory

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `title` | `string` | Display title for the category |
| `used` | `number` | Current usage value |
| `total` | `number` | Maximum limit value |
| `currency` | `string` | Optional currency code (e.g., 'USD', 'MXN') |
| `icon` | `React.ReactNode` | Optional icon component |
| `color` | `string` | Tailwind color class for the icon |

## Examples

### Default Usage

```tsx
<FairUseLimitTracker categories={categories} />
```

### Warning State (80%+ usage)

```tsx
<FairUseLimitTracker 
  categories={categories.map(c => ({ ...c, used: c.total * 0.85 }))}
/>
```

### Exceeded Limits (100%+)

```tsx
<FairUseLimitTracker 
  categories={[
    { id: 'transfers', title: 'Transfers', used: 20, total: 20, icon: <RefreshCw />, color: 'text-blue-500' },
    { id: 'withdrawals', title: 'ATM Withdrawals', used: 12, total: 10, icon: <Landmark />, color: 'text-emerald-500' },
  ]}
/>
```

### With Currency

```tsx
<FairUseLimitTracker 
  categories={[
    {
      id: 'spending',
      title: 'Monthly Spending',
      used: 2500,
      total: 5000,
      currency: 'USD',
      icon: <CreditCard />,
      color: 'text-blue-500',
    },
    {
      id: 'savings',
      title: 'Savings Goal',
      used: 180000,
      total: 500000,
      currency: 'MXN',
      icon: <Landmark />,
      color: 'text-emerald-500',
    },
  ]}
/>
```

### Single Category

```tsx
<FairUseLimitTracker 
  categories={[{
    id: 'single',
    title: 'International Transfers',
    used: 3,
    total: 5,
    icon: <RefreshCw />,
    color: 'text-blue-500',
  }]}
/>
```

### Empty State

```tsx
<FairUseLimitTracker categories={[]} />
```

## Notes

- Progress bars animate on mount (staggered by index)
- Color changes based on usage: green (<80%), amber (80-99%), red (100%+)
- Shows percentage remaining (0% when exceeded)
- Exceeded categories display a warning message
- Includes "Upgrade Plan" button at the bottom
- Supports dark mode via CSS tokens
- Uses Framer Motion for smooth progress bar animations
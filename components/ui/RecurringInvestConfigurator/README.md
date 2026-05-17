# RecurringInvestConfigurator

> **v1.0.21** · stable

A two-step wizard for configuring dollar-cost averaging (DCA) investment automation. Allows users to select an asset, set an amount, and choose a frequency.

## Installation

```bash
# The component is copied to your project with the add cli command
import { RecurringInvestConfigurator } from '@/components/ui/RecurringInvestConfigurator';
```

## Basic Usage

```tsx
import { RecurringInvestConfigurator } from '@/components/ui/RecurringInvestConfigurator';

<RecurringInvestConfigurator
    onSave={(rule) => console.log('Saved:', rule)}
/>
```

## With Callback

```tsx
const handleSave = (rule: AutomationRule) => {
    console.log('Amount:', rule.amount);
    console.log('Asset:', rule.asset);
    console.log('Frequency:', rule.frequency);
};

<RecurringInvestConfigurator onSave={handleSave} />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional classes |
| `onSave` | `(rule: AutomationRule) => void` | - | Called when user completes configuration |

### AutomationRule

| Property | Type | Description |
|----------|------|-------------|
| `amount` | `number` | Investment amount in dollars |
| `asset` | `string` | Selected asset name (e.g., 'S&P 500', 'Bitcoin') |
| `frequency` | `'daily' \| 'weekly' \| 'biweekly' \| 'monthly'` | Investment frequency |

## Examples

### Weekly Bitcoin Plan

```tsx
<RecurringInvestConfigurator
    onSave={(rule) => {
        // rule.asset = 'Bitcoin'
        // rule.frequency = 'weekly'
    }}
/>
```

### Monthly ETH Saver

```tsx
<RecurringInvestConfigurator
    onSave={(rule) => {
        // Configure Ethereum monthly investment
    }}
/>
```

### Large Investment

```tsx
<RecurringInvestConfigurator
    onSave={(rule) => {
        // Large portfolio automation
    }}
/>
```

## Notes

- Two-step wizard: Step 1 (asset + amount) → Step 2 (frequency)
- Animated transitions between steps using Framer Motion
- Progress indicator shows current step
- Default assets: S&P 500, Bitcoin, Apple Inc.
- Supported frequencies: Daily, Weekly, Biweekly, Monthly
- Summary displayed before activation
- Mobile-responsive design
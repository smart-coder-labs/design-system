# RotarySelector

> **v1.0.35** · stable

An interactive circular selector with drag-to-rotate functionality. Options are arranged around a central control knob.

## Installation

```bash
# The component is copied to your project with the add cli command
import { RotarySelector } from '@/components/ui/RotarySelector';
```

## Basic Usage

```tsx
import { RotarySelector } from '@/components/ui/RotarySelector';

const options = [
    { id: '1', label: 'Option 1', value: '1' },
    { id: '2', label: 'Option 2', value: '2' },
    { id: '3', label: 'Option 3', value: '3' },
];

<RotarySelector
    options={options}
    onChange={(value, option) => console.log('Selected:', option.label)}
/>
```

## With Icons

```tsx
const investmentOptions = [
    { id: 'conservative', label: 'Conservative', value: 'conservative', icon: '🛡️' },
    { id: 'balanced', label: 'Balanced', value: 'balanced', icon: '⚖️' },
    { id: 'aggressive', label: 'Aggressive', value: 'aggressive', icon: '🚀' },
];

<RotarySelector
    options={investmentOptions}
    value="balanced"
    onChange={handleChange}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `RotarySelectorOption[]` | - | Array of selectable options |
| `value` | `string \| number` | - | Currently selected value (controlled) |
| `onChange` | `(value: string \| number, option: RotarySelectorOption) => void` | - | Called when selection changes |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Selector size |
| `showLabel` | `boolean` | `true` | Show label in center |
| `disabled` | `boolean` | `false` | Disable all interaction |
| `className` | `string` | - | Additional classes |

### RotarySelectorOption

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique identifier |
| `label` | `string` | Display label |
| `value` | `string \| number` | Option value |
| `icon` | `ReactNode` | Icon or emoji |
| `disabled` | `boolean` | Disable individual option |

## Examples

### Currency Selection

```tsx
const currencies = [
    { id: 'usd', label: 'USD', value: 'USD', icon: '$' },
    { id: 'eur', label: 'EUR', value: 'EUR', icon: '€' },
    { id: 'gbp', label: 'GBP', value: 'GBP', icon: '£' },
    { id: 'jpy', label: 'JPY', value: 'JPY', icon: '¥' },
    { id: 'btc', label: 'BTC', value: 'BTC', icon: '₿' },
];

<RotarySelector
    options={currencies}
    value="USD"
    onChange={handleChange}
/>
```

### Timeframe Selection

```tsx
const timeframes = [
    { id: '1d', label: '1 Day', value: '1d' },
    { id: '1w', label: '1 Week', value: '1w' },
    { id: '1m', label: '1 Month', value: '1m' },
    { id: '3m', label: '3 Months', value: '3m' },
    { id: '1y', label: '1 Year', value: '1y' },
    { id: 'all', label: 'All Time', value: 'all' },
];

<RotarySelector
    options={timeframes}
    size="sm"
    value="1m"
    onChange={handleChange}
/>
```

### Disabled State

```tsx
<RotarySelector
    options={options}
    value="balanced"
    disabled
/>
```

## Notes

- Drag rotation via pointer events (mouse and touch)
- Click on option buttons as alternative to dragging
- Animated selection with Framer Motion
- Center displays selected option's icon and label
- Selected option has glow effect
- Sizes affect overall dimensions (sm: 256px, md: 384px, lg: 512px)
- Fully accessible with keyboard support
- Supports dark mode via CSS tokens
# Select

> **v1.0.2** · stable

A dropdown selection component with keyboard navigation, accessibility support, and an optional FilterSelect variant for filtering.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Select, FilterSelect } from '@/components/ui/Select';
```

## Basic Usage

```tsx
import { Select } from '@/components/ui/Select';

<Select>
    <Select.Trigger placeholder="Select account..." />
    <Select.Content>
        <Select.Item value="checking">Checking Account ••••4582</Select.Item>
        <Select.Item value="savings">Savings Account ••••3391</Select.Item>
        <Select.Item value="investment">Investment Portfolio</Select.Item>
    </Select.Content>
</Select>
```

## Controlled

```tsx
import { useState } from 'react';
import { Select } from '@/components/ui/Select';

const [selected, setSelected] = useState('');

<Select value={selected} onValueChange={setSelected}>
    <Select.Trigger placeholder="Select currency..." />
    <Select.Content>
        <Select.Item value="usd">USD - US Dollar</Select.Item>
        <Select.Item value="eur">EUR - Euro</Select.Item>
        <Select.Item value="gbp">GBP - British Pound</Select.Item>
    </Select.Content>
</Select>
```

## Disabled State

```tsx
// Disabled select
<Select disabled defaultValue="checking">
    <Select.Trigger />
    <Select.Content>
        <Select.Item value="checking">Checking Account</Select.Item>
    </Select.Content>
</Select>

// Disabled option
<Select defaultValue="checking">
    <Select.Trigger placeholder="Select currency..." />
    <Select.Content>
        <Select.Item value="usd">USD - US Dollar</Select.Item>
        <Select.Item value="btc" disabled>BTC - Bitcoin (Currently unavailable)</Select.Item>
    </Select.Content>
</Select>
```

## FilterSelect

```tsx
import { FilterSelect } from '@/components/ui/Select';

const options = [
    { id: '1', label: 'Active', value: 'active', count: 5 },
    { id: '2', label: 'Pending', value: 'pending', count: 3 },
    { id: '3', label: 'Completed', value: 'completed', count: 10 },
];

<FilterSelect
    label="Filter by Status"
    options={options}
    onChange={(value) => console.log(value)}
/>
```

## API

### Select Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Controlled value |
| `defaultValue` | `string` | - | Initial value |
| `onValueChange` | `(value: string) => void` | - | Called when value changes |
| `disabled` | `boolean` | `false` | Disables the select |
| `children` | `ReactNode` | - | Select content |

### SelectTrigger Props

| Prop | Type | Description |
|------|------|-------------|
| `placeholder` | `string` | Placeholder text when no value |
| `children` | `ReactNode` | Custom trigger content |
| `asChild` | `boolean` | Use custom element as trigger |
| `className` | `string` | Additional CSS classes |

### SelectContent Props

| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |
| `children` | `ReactNode` | Dropdown content |

### SelectItem Props

| Prop | Type | Description |
|------|------|-------------|
| `value` | `string` | Item value |
| `disabled` | `boolean` | Disabled state |
| `className` | `string` | Additional CSS classes |
| `children` | `ReactNode` | Item display text |

### SelectLabel Props

| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |
| `children` | `ReactNode` | Label content |

### SelectSeparator Props

| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |

### FilterSelect Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Button label |
| `options` | `FilterSelectOption[]` | - | Array of options |
| `value` | `string \| string[]` | - | Selected value(s) |
| `onChange` | `(value: string \| string[]) => void` | - | Value change handler |
| `icon` | `ReactNode` | - | Custom icon |
| `multiselect` | `boolean` | `false` | Enable multiple selection |
| `className` | `string` | - | Additional CSS classes |

## Examples

### With Default Value

```tsx
<Select defaultValue="checking">
    <Select.Trigger />
    <Select.Content>
        <Select.Item value="checking">Checking Account ••••4582</Select.Item>
        <Select.Item value="savings">Savings Account ••••3391</Select.Item>
        <Select.Item value="investment">Investment Portfolio</Select.Item>
    </Select.Content>
</Select>
```

### With Groups and Separators

```tsx
<Select>
    <Select.Trigger placeholder="Select..." />
    <Select.Content>
        <Select.Label>Popular</Select.Label>
        <Select.Item value="aapl">AAPL - Apple Inc.</Select.Item>
        <Select.Item value="googl">GOOGL - Alphabet Inc.</Select.Item>
        <Select.Item value="msft">MSFT - Microsoft Corp.</Select.Item>
        <Select.SelectSeparator />
        <Select.Label>Other</Select.Label>
        <Select.Item value="other">Other...</Select.Item>
    </Select.Content>
</Select>
```

### Multiselect Filter

```tsx
import { FilterSelect } from '@/components/ui/Select';

const options = [
    { id: '1', label: 'Design', value: 'design' },
    { id: '2', label: 'Development', value: 'dev' },
    { id: '3', label: 'Marketing', value: 'marketing' },
];

<FilterSelect
    label="Categories"
    options={options}
    multiselect
    onChange={(value) => console.log(value)}
/>
```

## Notes

- Uses React Context for state management
- Content renders via React Portal to document.body
- Keyboard navigation: Arrow keys to navigate, Enter/Space to select, Escape to close
- Auto-positions dropdown to stay within viewport
- Fully accessible with role="listbox" and aria-activedescendant
- FilterSelect supports both single and multi-select modes
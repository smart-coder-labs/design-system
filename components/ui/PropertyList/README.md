# PropertyList

> **v1.0.28** · stable

A collapsible list component that displays key-value property pairs organized into sections. Perfect for displaying structured data like account details, transaction metadata, or configuration settings.

## Installation

```bash
# The component is copied to your project with the add cli command
import { PropertyList } from '@/components/ui/PropertyList';
```

## Basic Usage

```tsx
import { PropertyList } from '@/components/ui/PropertyList';

<PropertyList
  sections={[
    {
      id: 'account',
      title: 'Account Information',
      items: [
        { label: 'Full Name', value: 'John Doe' },
        { label: 'Email', value: 'john@example.com' },
        { label: 'Phone', value: '+1 (555) 123-4567' },
      ],
    },
  ]}
/>
```

## API

### Props

| Prop          | Type                    | Default     | Description                                   |
|---------------|-------------------------|-------------|----------------------------------------------|
| `sections`    | `PropertySection[]`     | -           | Array of sections with title and items       |
| `variant`     | `'default' \| 'bordered' \| 'inset'` | `'default'` | Visual styling variant              |
| `size`        | `'sm' \| 'md' \| 'lg'` | `'md'`      | Size of labels and values                    |
| `collapsible` | `boolean`              | `true`      | Whether sections can be collapsed            |
| `dividers`    | `boolean`              | `true`      | Whether to show dividers between items      |
| `className`   | `string`               | -           | Additional CSS classes                       |

### PropertySection

| Prop             | Type              | Description                          |
|------------------|-------------------|--------------------------------------|
| `id`             | `string`          | Unique identifier for the section   |
| `title`          | `string`          | Section header text                  |
| `items`          | `PropertyItem[]` | Array of key-value pairs             |
| `defaultExpanded`| `boolean`         | Whether section starts expanded      |

### PropertyItem

| Prop        | Type           | Description                           |
|-------------|----------------|--------------------------------------|
| `label`     | `ReactNode`    | The property name (left side)        |
| `value`     | `ReactNode`    | The property value (right side)     |
| `icon`      | `ReactNode`    | Optional icon displayed before label|
| `editable`  | `boolean`      | Enables inline editing when true     |
| `onChange`  | `(value: string) => void` | Callback when value is edited |

## Examples

### Bordered Variant

```tsx
<PropertyList
  variant="bordered"
  sections={[
    {
      id: 'token',
      title: 'Token Details',
      items: [
        { label: 'Market Cap', value: '$8.2B' },
        { label: '24h Volume', value: '$1.4B' },
        { label: 'Circulating Supply', value: '19.3M BTC' },
        { label: 'All-Time High', value: '$68,789' },
      ],
    },
  ]}
/>
```

### Multiple Sections

```tsx
<PropertyList
  sections={[
    {
      id: 'personal',
      title: 'Personal Information',
      items: [
        { label: 'Full Name', value: 'Cesar Ruiz' },
        { label: 'Email', value: 'cesar@example.com' },
      ],
    },
    {
      id: 'billing',
      title: 'Billing Address',
      items: [
        { label: 'Street', value: '123 Main St' },
        { label: 'City', value: 'San Francisco' },
        { label: 'State', value: 'CA' },
        { label: 'ZIP', value: '94105' },
      ],
    },
    {
      id: 'preferences',
      title: 'Preferences',
      defaultExpanded: false,
      items: [
        { label: 'Language', value: 'English' },
        { label: 'Currency', value: 'USD ($)' },
      ],
    },
  ]}
/>
```

### Editable Items

```tsx
<PropertyList
  variant="inset"
  sections={[
    {
      id: 'account',
      title: 'Account Info',
      items: [
        { label: 'Balance', value: '$124,532.00', editable: true, onChange: (val) => console.log(val) },
        { label: 'Account Type', value: 'Premium' },
        { label: 'Annual Percentage Yield', value: '4.25% APY' },
      ],
    },
  ]}
/>
```

### Large Size with No Dividers

```tsx
<PropertyList
  size="lg"
  collapsible={false}
  dividers={false}
  sections={[
    {
      id: 'summary',
      title: 'Portfolio Summary',
      items: [
        { label: 'Total Value', value: '$1,234,567.89' },
        { label: 'Realized P&L', value: '+$234,567' },
        { label: 'Unrealized P&L', value: '+$98,765' },
      ],
    },
  ]}
/>
```

### Small Size (Compact)

```tsx
<PropertyList
  size="sm"
  variant="inset"
  sections={[
    {
      id: 'crypto',
      title: 'Crypto Holdings',
      items: [
        { label: 'Bitcoin (BTC)', value: '0.42 BTC' },
        { label: 'Ethereum (ETH)', value: '5.2 ETH' },
        { label: 'USDC', value: '10,000 USDC' },
      ],
    },
  ]}
/>
```

## Notes

- Uses Framer Motion for section expand/collapse animations (200ms ease)
- Inline editing triggered by clicking on editable items
- Edit mode shows input field with Save (OK) and Cancel buttons
- Keyboard support in edit mode: Enter to save, Escape to cancel
- Chevron icon rotates 90° when section is expanded
- Supports dark mode via CSS classes
- Fully accessible with proper ARIA attributes
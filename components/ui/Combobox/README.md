# Combobox

> **v1.0.17** · stable

A searchable dropdown/select component with keyboard navigation. Provides a better user experience than native selects with search, filtering, and accessibility features.

## Installation

```bash
import { Combobox } from '@/components/ui/Combobox';
```

## Basic Usage

```tsx
<Combobox
  items={[
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
  ]}
  onChange={(value) => console.log('Selected:', value)}
/>
```

## With Placeholder

```tsx
<Combobox
  items={items}
  placeholder="Choose a fruit..."
  onChange={handleChange}
/>
```

## Controlled Usage

```tsx
const [value, setValue] = useState('apple');

<Combobox
  items={items}
  value={value}
  onChange={setValue}
/>
```

## Custom Messages

```tsx
<Combobox
  items={items}
  placeholder="Select..."
  searchPlaceholder="Search options..."
  emptyMessage="No matching options found"
  onChange={handleChange}
/>
```

## Disabled State

```tsx
<Combobox
  items={items}
  disabled
  placeholder="Unavailable"
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| items | `ComboboxOption[]` | - | Array of selectable options |
| value | `string` | - | Controlled selected value |
| onChange | `(value: string) => void` | - | Change handler |
| placeholder | `string` | `'Select an item...'` | Placeholder when nothing selected |
| searchPlaceholder | `string` | `'Search...'` | Placeholder in search input |
| emptyMessage | `string` | `'No item found.'` | Message when no results |
| disabled | `boolean` | `false` | Disable the combobox |
| className | `string` | - | Additional CSS classes |

### ComboboxOption

```typescript
interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}
```

## Keyboard Navigation

- **Enter/Space/ArrowDown**: Open the dropdown
- **Arrow Up/Down**: Navigate through options
- **Enter**: Select highlighted option
- **Escape**: Close dropdown
- **Tab**: Close dropdown and move to next element

The component also supports typing to filter options - as you type, the list filters in real-time.

## Features

- **Search/Filter**: Type to filter options by label
- **Keyboard Navigation**: Full keyboard support
- **Highlight on Hover**: Mouse hover highlights options
- **Click Outside**: Closes when clicking outside
- **Auto-focus**: Search input auto-focuses when opened
- **Scroll Into View**: Highlighted option scrolls into view
- **Dynamic Sizing**: Dropdown matches trigger width

## Notes

- Uses Framer Motion for smooth open/close animations
- Supports dark mode with appropriate color tokens
- Accessible with ARIA attributes (role="combobox")
- Options support disabled state for individual items
- Search is case-insensitive
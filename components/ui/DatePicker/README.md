# DatePicker

> **v1.0.35** · stable

A single-date selection component with an interactive calendar dropdown. Features keyboard navigation, manual input support, and date range constraints.

## Installation

```bash
import { DatePicker } from '@/components/ui/DatePicker';
```

## Basic Usage

```tsx
<DatePicker
  label="Select Date"
  onChange={(date) => console.log('Selected:', date)}
/>
```

## Controlled Usage

```tsx
const [date, setDate] = useState<Date | null>(null);

<DatePicker
  label="Birth Date"
  value={date}
  onChange={setDate}
/>
```

## With Date Constraints

```tsx
<DatePicker
  label="Appointment Date"
  minDate={new Date()} // Cannot select past dates
  maxDate={new Date(2025, 11, 31)} // Cannot select beyond this date
  onChange={(date) => console.log(date)}
/>
```

## Date Formats

Three display formats are supported:

```tsx
// Short: MM/DD/YYYY
<DatePicker dateFormat="short" />

// Medium: Jan 15, 2024 (default)
<DatePicker dateFormat="medium" />

// Long: January 15, 2024
<DatePicker dateFormat="long" />
```

## Size Variants

```tsx
<DatePicker size="sm" placeholder="Small" />
<DatePicker size="md" placeholder="Medium" />
<DatePicker size="lg" placeholder="Large" />
```

## With Error State

```tsx
<DatePicker
  label="Date of Birth"
  error="Please select a valid date"
  helperText="Must be after 2000"
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | `string` | - | Label text displayed above the input |
| value | `Date \| null` | - | Controlled selected date |
| onChange | `(date: Date \| null) => void` | - | Change handler |
| placeholder | `string` | `'Select date'` | Placeholder text |
| error | `string` | - | Error message to display |
| helperText | `string` | - | Additional helper text |
| disabled | `boolean` | `false` | Disable the picker |
| minDate | `Date` | - | Minimum selectable date |
| maxDate | `Date` | - | Maximum selectable date |
| dateFormat | `'short' \| 'medium' \| 'long'` | `'medium'` | Display format |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |
| className | `string` | `''` | Additional CSS classes |

## Keyboard Navigation

- **Click input** or press **Enter/Space** to open calendar
- **Arrow keys** to navigate days in calendar
- **Enter** to select highlighted date
- **Escape** to close calendar
- **Tab** to navigate through month controls

## Manual Input

Users can type dates directly in the input field:
- Format: MM/DD/YYYY
- Auto-formatting as you type
- Validates date on blur or when complete

## Notes

- Uses Framer Motion for smooth dropdown animations
- Supports dark mode with appropriate color tokens
- Closes on outside click
- Includes "Today" quick-select button
- Input is fully accessible with ARIA attributes
# DateRangePicker

> **v1.0.24** · stable

A date range selection component with visual highlighting of the selected range. Users can select start and end dates to define a range.

## Installation

```bash
import { DateRangePicker } from '@/components/ui/DateRangePicker';
```

## Basic Usage

```tsx
<DateRangePicker
  label="Select Range"
  onChange={(range) => console.log('Range:', range)}
/>
```

## Controlled Usage

```tsx
const [range, setRange] = useState<DateRange>({ from: null, to: null });

<DateRangePicker
  label="Trip Dates"
  value={range}
  onChange={setRange}
/>
```

## With Date Constraints

```tsx
<DateRangePicker
  label="Booking Period"
  minDate={new Date()} // Cannot select past dates
  maxDate={new Date(2025, 11, 31)} // Cannot select beyond this date
  onChange={(range) => console.log(range)}
/>
```

## Date Formats

Three display formats are supported:

```tsx
// Short: MM/DD/YYYY - MM/DD/YYYY
<DateRangePicker dateFormat="short" />

// Medium: Jan 15, 2024 - Jan 20, 2024 (default)
<DateRangePicker dateFormat="medium" />

// Long: January 15, 2024 - January 20, 2024
<DateRangePicker dateFormat="long" />
```

## Size Variants

```tsx
<DateRangePicker size="sm" placeholder="Small" />
<DateRangePicker size="md" placeholder="Medium" />
<DateRangePicker size="lg" placeholder="Large" />
```

## With Error State

```tsx
<DateRangePicker
  label="Project Duration"
  error="End date must be after start date"
  helperText="Select a valid date range"
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | `string` | - | Label text displayed above the input |
| value | `DateRange` | - | Controlled date range `{ from, to }` |
| onChange | `(range: DateRange) => void` | - | Change handler |
| placeholder | `string` | `'Select date range'` | Placeholder text |
| error | `string` | - | Error message to display |
| helperText | `string` | - | Additional helper text |
| disabled | `boolean` | `false` | Disable the picker |
| minDate | `Date` | - | Minimum selectable date |
| maxDate | `Date` | - | Maximum selectable date |
| dateFormat | `'short' \| 'medium' \| 'long'` | `'medium'` | Display format |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |
| className | `string` | `''` | Additional CSS classes |

### DateRange

```typescript
interface DateRange {
  from: Date | null;
  to: Date | null;
}
```

## How It Works

1. **First click**: Sets the start date (`from`)
2. **Second click**: Sets the end date (`to`) and closes the picker
3. **Clicking start again**: Resets and starts a new selection

The calendar visually highlights:
- Start date with rounded left corners
- End date with rounded right corners
- All dates in between with a background color
- Today with a subtle border indicator

## Keyboard Navigation

- **Enter/Space** to open the calendar
- **Arrow keys** to navigate days
- **Enter** to confirm selection
- **Escape** to close without selection

## Notes

- Uses Framer Motion for smooth dropdown animations
- Supports dark mode with appropriate color tokens
- Closes automatically when range is complete
- Input is read-only (must select from calendar)
- Hover preview shows range extension before click
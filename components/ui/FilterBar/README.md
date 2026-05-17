# FilterBar

> **v1.0.24** · stable

A comprehensive filtering component with search, multiple filter groups, active filter display, and clear functionality. Integrates with SearchInput and Select components.

## Installation

```bash
# The component is copied to your project with the add cli command
import { FilterBar, FilterGroup, ActiveFilter } from '@/components/ui/FilterBar';
```

## Basic Usage

```tsx
import { FilterBar, FilterGroup, ActiveFilter } from '@/components/ui/FilterBar';
import { Filter } from 'lucide-react';

const groups: FilterGroup[] = [
  {
    id: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { id: 'active', label: 'Active', value: 'active', count: 42 },
      { id: 'inactive', label: 'Inactive', value: 'inactive', count: 8 },
    ],
  },
  {
    id: 'category',
    label: 'Category',
    type: 'multiselect',
    options: [
      { id: 'transfers', label: 'Transfers', value: 'transfers', count: 120 },
      { id: 'payments', label: 'Payments', value: 'payments', count: 85 },
    ],
  },
];

<FilterBar 
  groups={groups}
  onFilterChange={(filters) => console.log('Filters:', filters)}
  onClearAll={() => console.log('Clear all')}
/>
```

## API

### Props

| Prop | Type | Description |
|------|------|-------------|
| `groups` | `FilterGroup[]` | Array of filter groups |
| `activeFilters` | `ActiveFilter[]` | Currently active filters |
| `onFilterChange` | `(filters: ActiveFilter[]) => void` | Called when filters change |
| `onClearAll` | `() => void` | Called when clear all is clicked |
| `searchPlaceholder` | `string` | Placeholder for search input |
| `showSearch` | `boolean` | Whether to show search input |
| `showFilterCount` | `boolean` | Whether to show active filter count |
| `className` | `string` | Additional CSS classes |

### FilterGroup

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `label` | `string` | Display label |
| `type` | `'select' \| 'multiselect' \| 'date' \| 'search' \| 'custom'` | Filter type |
| `options` | `FilterOption[]` | Available options |
| `placeholder` | `string` | Placeholder text |
| `icon` | `React.ReactNode` | Icon component |
| `customContent` | `ReactNode` | Custom content for 'custom' type |

### FilterOption

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `label` | `string` | Display label |
| `value` | `string` | Filter value |
| `count` | `number` | Item count |

### ActiveFilter

| Prop | Type | Description |
|------|------|-------------|
| `groupId` | `string` | Parent group ID |
| `optionId` | `string` | Option ID |
| `label` | `string` | Display label |
| `value` | `string` | Filter value |

## Examples

### Default

```tsx
<FilterBar 
  groups={groups}
  onFilterChange={handleFilterChange}
/>
```

### With Active Filters

```tsx
const activeFilters: ActiveFilter[] = [
  { groupId: 'status', optionId: 'active', label: 'Status: Active', value: 'active' },
  { groupId: 'category', optionId: 'payments', label: 'Category: Payments', value: 'payments' },
];

<FilterBar 
  groups={groups}
  activeFilters={activeFilters}
  onFilterChange={handleFilterChange}
  onClearAll={handleClear}
/>
```

### Without Search

```tsx
<FilterBar 
  groups={[groups[0], groups[1]]}
  showSearch={false}
  onFilterChange={handleFilterChange}
/>
```

### Without Filter Count

```tsx
<FilterBar 
  groups={groups}
  showFilterCount={false}
  onFilterChange={handleFilterChange}
/>
```

### Transaction History Filters

```tsx
const transactionGroups: FilterGroup[] = [
  {
    id: 'type',
    label: 'Transaction Type',
    type: 'select',
    options: [
      { id: 'all', label: 'All Types', value: 'all', count: 342 },
      { id: 'incoming', label: 'Incoming', value: 'incoming', count: 156 },
    ],
  },
  {
    id: 'amount',
    label: 'Amount Range',
    type: 'multiselect',
    options: [
      { id: 'under50', label: 'Under $50', value: 'under50', count: 89 },
      { id: '50to500', label: '$50 - $500', value: '50to500', count: 145 },
    ],
  },
  {
    id: 'currency',
    label: 'Currency',
    type: 'multiselect',
    options: [
      { id: 'usd', label: 'USD', value: 'usd', count: 210 },
      { id: 'eur', label: 'EUR', value: 'eur', count: 72 },
    ],
  },
];

<FilterBar 
  groups={transactionGroups}
  activeFilters={[
    { groupId: 'type', optionId: 'incoming', label: 'Type: Incoming', value: 'incoming' },
  ]}
  onFilterChange={handleFilterChange}
/>
```

### Minimal Filters

```tsx
<FilterBar 
  groups={[groups[0]]}
  showSearch={false}
  onFilterChange={handleFilterChange}
/>
```

### With Search Only

```tsx
<FilterBar 
  groups={[]}
  searchPlaceholder="Search transactions, accounts, or users..."
/>
```

## Notes

- Uses SearchInput for the search functionality
- Uses FilterSelect for dropdown filter groups
- Supports both single-select and multi-select filter types
- Active filters displayed as removable chips below the filter bar
- Filter count badge shows number of active filters
- Clear all button removes all active filters
- Integrates with FilterSelect for option count display
- Supports dark mode via CSS tokens
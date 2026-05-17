# Table

> **v1.0.20** · stable

A data table component with sorting, pagination, row selection, and customizable column rendering.

## Installation

```bash
import { Table, type Column } from '@/components/ui/Table';
```

## Basic Usage

```tsx
const columns: Column<Stock>[] = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'ticker', header: 'Ticker' },
  { key: 'price', header: 'Price', sortable: true },
  { key: 'change', header: 'Change', sortable: true },
];

const data: Stock[] = [
  { name: 'Apple Inc.', ticker: 'AAPL', price: '$178.50', change: '+2.3%' },
  { name: 'Microsoft Corp.', ticker: 'MSFT', price: '$425.20', change: '+1.5%' },
];

<Table columns={columns} data={data} />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `Column<T>[]` | - | Column definitions |
| `data` | `T[]` | - | Data array |
| `selectable` | `boolean` | `false` | Enable row selection |
| `striped` | `boolean` | `true` | Alternate row background |
| `hoverable` | `boolean` | `true` | Highlight on hover |
| `density` | `'comfortable' \| 'compact'` | `'comfortable'` | Row height |
| `page` | `number` | `1` | Current page number |
| `pageSize` | `number` | `10` | Rows per page |
| `onPageChange` | `(page: number) => void` | - | Page change callback |
| `onSortChange` | `(key, direction) => void` | - | Sort change callback |
| `onRowClick` | `(row: T) => void` | - | Row click callback |

### Column

| Prop | Type | Description |
|------|------|-------------|
| `key` | `keyof T` | Data key for the column |
| `header` | `string` | Column header label |
| `width` | `string` | Optional width (e.g., '100px') |
| `sortable` | `boolean` | Enable sorting on this column |
| `render` | `(value, row) => ReactNode` | Custom cell renderer |

## Examples

### Transactions Table

```tsx
<Table
  columns={[
    { key: 'date', header: 'Date', sortable: true },
    { key: 'description', header: 'Description' },
    { key: 'category', header: 'Category' },
    { key: 'amount', header: 'Amount', sortable: true },
  ]}
  data={[
    { date: 'May 10', description: 'Amazon Purchase', category: 'Shopping', amount: '-$89.99' },
    { date: 'May 9', description: 'Uber Ride', category: 'Transport', amount: '-$24.50' },
  ]}
  striped={true}
  hoverable={true}
/>
```

### Selectable Rows

```tsx
<Table
  columns={[
    { key: 'name', header: 'Name' },
    { key: 'ticker', header: 'Ticker' },
    { key: 'shares', header: 'Shares' },
    { key: 'value', header: 'Value' },
  ]}
  data={data}
  selectable={true}
/>
```

### Compact Density

```tsx
<Table
  columns={[
    { key: 'ticker', header: 'Ticker' },
    { key: 'price', header: 'Price' },
    { key: 'change', header: 'Change' },
  ]}
  data={data}
  density="compact"
/>
```

### Paginated Table

```tsx
const [page, setPage] = useState(1);
const pageSize = 5;

<Table
  columns={[
    { key: 'id', header: 'ID' },
    { key: 'date', header: 'Date', sortable: true },
    { key: 'description', header: 'Description' },
    { key: 'amount', header: 'Amount', sortable: true },
  ]}
  data={paginatedData}
  page={page}
  pageSize={pageSize}
  onPageChange={setPage}
/>
```

### Custom Cell Render

```tsx
<Table
  columns={[
    { key: 'name', header: 'Name' },
    { 
      key: 'status', 
      header: 'Status', 
      render: (value) => (
        <span className={`px-2 py-0.5 rounded-full text-xs ${
          value === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
        }`}>
          {value}
        </span>
      ) 
    },
    { 
      key: 'action', 
      header: '', 
      render: (_, row) => (
        <button className="px-2 py-1 text-xs bg-blue-600 text-white rounded-lg">
          View
        </button>
      ) 
    },
  ]}
  data={data}
/>
```

### External Sort Control

```tsx
const [sortKey, setSortKey] = useState<string>('name');
const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

const sorted = [...data].sort((a, b) => {
  const aVal = a[sortKey as keyof typeof a];
  const bVal = b[sortKey as keyof typeof b];
  return sortDir === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
});

<Table
  columns={[
    { key: 'name', header: 'Name', sortable: true },
    { key: 'role', header: 'Role', sortable: true },
    { key: 'status', header: 'Status', sortable: true },
  ]}
  data={sorted}
  onSortChange={(key, dir) => { setSortKey(String(key)); setSortDir(dir); }}
/>
```

### Empty State

```tsx
<Table
  columns={[
    { key: 'name', header: 'Name' },
    { key: 'value', header: 'Value' },
  ]}
  data={[]}
/>
```

## Notes

- Built-in checkbox component for row selection
- Sort indicators show current sort direction (asc/desc)
- Pagination controls: previous/next buttons with disabled state
- Framer Motion for row entrance animations (opacity only, 180ms)
- Custom `render` function allows flexible cell content
- Default page size is 10 rows
- "No results found" message when data is empty
- Supports keyboard navigation for checkboxes (Space/Enter)
- Dark mode support via design tokens
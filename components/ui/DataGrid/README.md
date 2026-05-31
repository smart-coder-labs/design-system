# DataGrid

> **v1.0.3** · experimental

A powerful data table component with sorting, filtering, grouping, pagination, column management, and export functionality. Supports row selection and customizable cell rendering.

## Installation

```bash
import { DataGrid } from '@/components/ui/DataGrid';
```

## Basic Usage

```tsx
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const columns: DataGridColumn<User>[] = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
  { key: 'role', header: 'Role', filterable: true },
];

const data: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
];

<DataGrid columns={columns} data={data} />
```

## With Sorting

```tsx
<DataGrid
  columns={[
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email', sortable: true },
  ]}
  data={data}
  onSortChange={(key, direction) => console.log(key, direction)}
/>
```

## With Row Selection

```tsx
<DataGrid
  columns={columns}
  data={data}
  selectable
/>
```

## With Filtering

```tsx
<DataGrid
  columns={[
    { key: 'name', header: 'Name', filterable: true },
    { key: 'role', header: 'Role', filterable: true, filterType: 'select', filterOptions: [
      { label: 'Admin', value: 'Admin' },
      { label: 'User', value: 'User' },
    ]},
  ]}
  data={data}
/>
```

## With Grouping

```tsx
<DataGrid
  columns={[
    { key: 'name', header: 'Name' },
    { key: 'role', header: 'Role', groupable: true },
  ]}
  data={data}
/>
```

## With Pagination

```tsx
const [page, setPage] = useState(1);

<DataGrid
  columns={columns}
  data={data}
  page={page}
  pageSize={10}
  onPageChange={setPage}
/>
```

## With Custom Cell Rendering

```tsx
<DataGrid
  columns={[
    {
      key: 'status',
      header: 'Status',
      render: (value, row) => (
        <span className={value === 'active' ? 'text-green-500' : 'text-gray-500'}>
          {value}
        </span>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (_, row) => (
        <button onClick={() => handleEdit(row.id)}>Edit</button>
      ),
    },
  ]}
  data={data}
/>
```

## With Column Pinning

```tsx
<DataGrid
  columns={[
    { key: 'id', header: 'ID', pinnable: true },
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email' },
  ]}
  data={data}
/>
```

## With Export

```tsx
<DataGrid
  columns={columns}
  data={data}
  onExport={() => {
    // Custom export logic
  }}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| columns | `DataGridColumn<T>[]` | - | Column definitions |
| data | `T[]` | - | Data rows |
| selectable | `boolean` | `false` | Enable row selection |
| striped | `boolean` | `true` | Alternate row colors |
| hoverable | `boolean` | `true` | Highlight on hover |
| density | `'comfortable' \| 'compact'` | `'comfortable'` | Row padding |
| page | `number` | `1` | Current page number |
| pageSize | `number` | `10` | Rows per page |
| virtualScrolling | `boolean` | `false` | Enable virtual scrolling |
| maxHeight | `string` | `'600px'` | Maximum table height |
| responsiveLayout | `'table' \| 'cards' \| 'responsive'` | `'responsive'` | Rendering layout mode (`responsive` adapts automatically, `cards` forces mobile cards view, `table` forces desktop view) |
| onPageChange | `(page: number) => void` | - | Page change handler |
| onSortChange | `(key: keyof T, direction: 'asc' \| 'desc') => void` | - | Sort handler |
| onCellEdit | `(row: T, key: keyof T, value: any) => void` | - | Cell edit handler |
| onExport | `() => void` | - | Export button handler |
| variant | `'default' \| 'glasphormism'` | `'default'` | Visual variant. The `glasphormism` variant applies a translucent glassmorphic background, blur, and fine borders matching Apple's design system |

### Compound Components

The `DataGrid` component is built using the compound components pattern. It exports the root `DataGrid` and attaches the following subcomponents for custom rendering or advanced configurations:

- **`DataGrid.Row`**: A generic table row element rendering a motion-enabled row with support for selection and custom cell callbacks.
- **`DataGrid.Pagination`**: An Apple-style pagination control button.
- **`DataGrid.Filter`**: A column filter trigger button rendering combobox or input dropdowns.
- **`DataGrid.ColumnMenu`**: A settings menu to toggle column visibility and pinning.
- **`DataGrid.ResizeHandle`**: An interactive drag handle to resize column widths.

### Custom Layout Composition Example

You can use the individual compound subcomponents directly to build completely custom datagrid or card grid layouts:

```tsx
import { DataGrid } from '@/components/ui/DataGrid';

function CustomDashboardGrid() {
  const colStates = new Map([
    ['name', { visible: true, pinned: null, width: 150 }],
    ['role', { visible: true, pinned: null, width: 150 }],
  ]);

  return (
    <div className="space-y-4 p-4 bg-surface border border-border rounded-2xl">
      <div className="flex justify-between items-center">
        <h4>Compound Parts</h4>
        <DataGrid.ColumnMenu
          columns={columns}
          columnStates={colStates}
          onToggleVisibility={handleToggle}
          onTogglePin={handlePin}
        />
      </div>

      <table className="w-full">
        <tbody>
          {mockData.map((row, index) => (
            <DataGrid.Row
              key={row.id}
              row={row}
              index={index}
              columns={columns}
              columnStates={colStates}
              selectable
              selected={selectedRows.has(index)}
              onToggle={toggleRow}
              onCellClick={handleCellClick}
              onCellEdit={handleCellEdit}
              striped={false}
              hoverable
              rowPadding="py-3"
              editingCell={null}
            />
          ))}
        </tbody>
      </table>

      <div className="flex justify-end gap-2">
        <DataGrid.Pagination onClick={prevPage}>Previous</DataGrid.Pagination>
        <DataGrid.Pagination onClick={nextPage}>Next</DataGrid.Pagination>
      </div>
    </div>
  );
}
```

### DataGridColumn

```typescript
interface DataGridColumn<T> {
  key: keyof T;
  header: string;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  sortable?: boolean;
  filterable?: boolean;
  resizable?: boolean;
  pinnable?: boolean;
  editable?: boolean;
  groupable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
  filterType?: 'text' | 'number' | 'select' | 'date';
  filterOptions?: { label: string; value: any }[];
}
```

## Features

- **Sorting**: Click column headers to sort
- **Filtering**: Filter by text, number, select, or date
- **Grouping**: Group rows by a column value
- **Pagination**: Built-in pagination controls
- **Selection**: Select single or multiple rows
- **Column Visibility**: Show/hide columns via menu
- **Column Pinning**: Pin columns to the left
- **Column Resizing**: Drag to resize columns
- **Export**: Export to CSV
- **Custom Rendering**: Custom cell content
- **Inline Editing**: Edit cells directly

## Column Configuration

| Property | Description |
|----------|-------------|
| `sortable` | Enable sorting on this column |
| `filterable` | Enable filtering on this column |
| `resizable` | Allow column resizing |
| `pinnable` | Allow pinning to left |
| `editable` | Allow inline editing |
| `groupable` | Allow grouping by this column |
| `render` | Custom cell renderer |
| `filterType` | Filter input type |
| `filterOptions` | Options for select filter |

## Notes

- Uses Framer Motion for row animations
- Supports dark mode with appropriate color tokens
- Combines with Table component internally
- Export defaults to CSV if no custom handler
- Virtual scrolling disables pagination
- Grouping requires a column with `groupable: true`
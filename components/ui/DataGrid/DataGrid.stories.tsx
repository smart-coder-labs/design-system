import type { Meta, StoryObj } from '@storybook/react';
import { DataGrid } from './DataGrid';
import { DataGridColumn } from './DataGrid.types';
import { Badge } from '../Badge';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  balance: number;
}

const columns: DataGridColumn<User>[] = [
  { key: 'name', header: 'Name', sortable: true, filterable: true },
  { key: 'email', header: 'Email', sortable: true },
  {
    key: 'role',
    header: 'Role',
    sortable: true,
    filterable: true,
    filterType: 'select',
    filterOptions: [
      { label: 'Admin', value: 'admin' },
      { label: 'User', value: 'user' },
      { label: 'Manager', value: 'manager' },
    ],
    render: (value: string) => (
      <Badge variant={value === 'admin' ? 'primary' : value === 'manager' ? 'warning' : 'default'} size="sm">
        {value}
      </Badge>
    ),
  },
  { key: 'status', header: 'Status', sortable: true },
  {
    key: 'balance',
    header: 'Balance',
    sortable: true,
    render: (value: number) => `$${value.toLocaleString()}`,
  },
];

const mockData: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'admin', status: 'active', balance: 12500 },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'user', status: 'active', balance: 3400 },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'manager', status: 'inactive', balance: 8700 },
  { id: 4, name: 'David Brown', email: 'david@example.com', role: 'user', status: 'pending', balance: 2100 },
  { id: 5, name: 'Eva Garcia', email: 'eva@example.com', role: 'user', status: 'active', balance: 5600 },
  { id: 6, name: 'Frank Lee', email: 'frank@example.com', role: 'admin', status: 'active', balance: 18900 },
  { id: 7, name: 'Grace Kim', email: 'grace@example.com', role: 'manager', status: 'active', balance: 10300 },
  { id: 8, name: 'Henry Chen', email: 'henry@example.com', role: 'user', status: 'inactive', balance: 780 },
];

const meta: Meta<typeof DataGrid<User>> = {
  title: 'Data Display/DataGrid',
  component: DataGrid,
  tags: ['autodocs'],
  args: {
    columns,
    data: mockData,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns,
    data: mockData,
  },
};

export const Selectable: Story = {
  args: {
    columns,
    data: mockData,
    selectable: true,
  },
};

export const CompactDensity: Story = {
  args: {
    columns,
    data: mockData,
    density: 'compact',
  },
};

export const Paginated: Story = {
  args: {
    columns,
    data: mockData,
    pageSize: 3,
  },
};

export const NoStripes: Story = {
  args: {
    columns,
    data: mockData,
    striped: false,
  },
};


export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  args: {
    responsiveLayout: 'cards',
  },
};

interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: 'credit' | 'debit';
  status: 'completed' | 'pending' | 'failed';
}

const fintechColumns: DataGridColumn<Transaction>[] = [
  { key: 'date', header: 'Date', sortable: true },
  { key: 'description', header: 'Description', sortable: true, filterable: true },
  {
    key: 'category',
    header: 'Category',
    sortable: true,
    filterable: true,
    filterType: 'select',
    filterOptions: [
      { label: 'Food & Dining', value: 'Food & Dining' },
      { label: 'Shopping', value: 'Shopping' },
      { label: 'Utilities', value: 'Utilities' },
      { label: 'Salary', value: 'Salary' },
      { label: 'Investment', value: 'Investment' },
    ],
  },
  {
    key: 'amount',
    header: 'Amount',
    sortable: true,
    render: (value: number, row: Transaction) => {
      const isCredit = row.type === 'credit';
      return (
        <span className={isCredit ? 'text-emerald-500 font-medium' : 'text-text-primary font-medium'}>
          {isCredit ? '+' : '-'}${Math.abs(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      );
    },
  },
  {
    key: 'status',
    header: 'Status',
    sortable: true,
    filterable: true,
    filterType: 'select',
    filterOptions: [
      { label: 'Completed', value: 'completed' },
      { label: 'Pending', value: 'pending' },
      { label: 'Failed', value: 'failed' },
    ],
    render: (value: 'completed' | 'pending' | 'failed') => {
      const variant = value === 'completed' ? 'success' : value === 'pending' ? 'warning' : 'error';
      return (
        <Badge variant={variant} size="sm">
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </Badge>
      );
    },
  },
];

const fintechData: Transaction[] = [
  { id: 'TX1001', date: '2026-05-30', description: 'Acme Corp Salary', category: 'Salary', amount: 4500.00, type: 'credit', status: 'completed' },
  { id: 'TX1002', date: '2026-05-29', description: 'Starbucks Coffee', category: 'Food & Dining', amount: 5.75, type: 'debit', status: 'completed' },
  { id: 'TX1003', date: '2026-05-28', description: 'Amazon.com Purchase', category: 'Shopping', amount: 120.50, type: 'debit', status: 'completed' },
  { id: 'TX1004', date: '2026-05-27', description: 'Electric Utility Bill', category: 'Utilities', amount: 85.20, type: 'debit', status: 'pending' },
  { id: 'TX1005', date: '2026-05-26', description: 'Dividend Payment', category: 'Investment', amount: 150.00, type: 'credit', status: 'completed' },
  { id: 'TX1006', date: '2026-05-25', description: 'Uber Ride', category: 'Food & Dining', amount: 24.30, type: 'debit', status: 'failed' },
];

export const FintechUseCase: StoryObj<typeof DataGrid<any>> = {
  args: {
    columns: fintechColumns,
    data: fintechData,
  },
  parameters: {
    docs: {
      description: {
        story: 'DataGrid used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};

export const CompoundComposition: Story = {
  render: () => {
    const colStates = new Map<keyof User, any>([
      ['name', { visible: true, pinned: null, width: 150 }],
      ['email', { visible: true, pinned: null, width: 150 }],
      ['role', { visible: true, pinned: null, width: 150 }],
      ['status', { visible: true, pinned: null, width: 150 }],
      ['balance', { visible: true, pinned: null, width: 150 }],
    ]);

    return (
      <div className="space-y-4 p-4 border border-border-primary rounded-2xl bg-surface-elevated max-w-xl shadow-sm">
        <div className="flex justify-between items-center pb-3 border-b border-border-primary">
          <span className="font-semibold text-text-primary text-sm">Compound Component Sub-parts</span>
          <DataGrid.ColumnMenu
            columns={columns}
            columnStates={colStates}
            onToggleVisibility={() => {}}
            onTogglePin={() => {}}
          />
        </div>
        
        <div className="overflow-hidden border border-border-primary rounded-xl">
          <table className="w-full text-left border-collapse">
            <tbody>
              <DataGrid.Row
                row={mockData[0]}
                index={0}
                columns={columns}
                columnStates={colStates}
                selectable={true}
                selected={false}
                striped={false}
                hoverable={true}
                rowPadding="py-3"
                editingCell={null}
                onToggle={() => {}}
                onCellClick={() => {}}
                onCellEdit={() => {}}
              />
              <DataGrid.Row
                row={mockData[1]}
                index={1}
                columns={columns}
                columnStates={colStates}
                selectable={true}
                selected={true}
                striped={false}
                hoverable={true}
                rowPadding="py-3"
                editingCell={null}
                onToggle={() => {}}
                onCellClick={() => {}}
                onCellEdit={() => {}}
              />
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-border-primary">
          <span className="text-xs text-text-secondary font-medium">Custom Pagination:</span>
          <div className="flex gap-2">
            <DataGrid.Pagination onClick={() => alert('Prev page clicked')}>
              Previous
            </DataGrid.Pagination>
            <DataGrid.Pagination onClick={() => alert('Next page clicked')}>
              Next
            </DataGrid.Pagination>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of building a completely custom data list/table layout using the individual compound subcomponents directly.',
      },
    },
  },
};

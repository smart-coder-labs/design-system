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

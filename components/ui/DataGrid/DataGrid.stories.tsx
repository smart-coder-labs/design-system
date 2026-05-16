import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DataGrid, DataGridColumn } from './DataGrid';
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
    render: (value) => (
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

const meta: Meta<typeof DataGrid> = {
  title: 'Data Display/DataGrid',
  component: DataGrid,
  tags: ['autodocs'],
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

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};
export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
export const FintechUseCase: Story = {
  parameters: {
    docs: {
      description: {
        story: 'DataGrid used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};

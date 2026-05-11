import type { Meta, StoryObj } from '@storybook/react';
import { QueryBuilder } from './QueryBuilder';

const meta = {
  title: 'Components/QueryBuilder',
  component: QueryBuilder,
  tags: ['autodocs'],
} satisfies Meta<typeof QueryBuilder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fields: [
      { name: 'amount', label: 'Amount', type: 'number' },
      { name: 'currency', label: 'Currency', type: 'text' },
      { name: 'date', label: 'Date', type: 'date' },
    ],
    onChange: (query: any) => console.log('Query:', query),
  },
};

export const WithInitialQuery: Story = {
  args: {
    fields: [
      { name: 'status', label: 'Status', type: 'select', options: ['completed', 'pending', 'failed'] },
      { name: 'amount', label: 'Amount', type: 'number' },
      { name: 'date', label: 'Date', type: 'date' },
    ],
    initialQuery: { status: 'completed', amount: { gt: 100 } },
    onChange: (query: any) => console.log('Query:', query),
  },
};

export const TransactionFilter: Story = {
  args: {
    fields: [
      { name: 'type', label: 'Transaction Type', type: 'select', options: ['buy', 'sell', 'swap', 'transfer'] },
      { name: 'minAmount', label: 'Min Amount', type: 'number' },
      { name: 'maxAmount', label: 'Max Amount', type: 'number' },
      { name: 'fromDate', label: 'From Date', type: 'date' },
      { name: 'toDate', label: 'To Date', type: 'date' },
    ],
    onChange: (query: any) => console.log('Query:', query),
  },
};

export const Empty: Story = {
  args: {
    fields: [],
    onChange: (query: any) => console.log('Query:', query),
  },
};

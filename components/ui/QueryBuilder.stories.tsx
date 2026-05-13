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

export const SingleField: Story = {
  args: {
    fields: [
      { id: 'amount', label: 'Amount', type: 'number' },
    ],
    onChange: (query: any) => console.log('Query:', query),
  },
};

export const ManyFilters: Story = {
  args: {
    fields: [
      { id: 'type', label: 'Transaction Type', type: 'select', options: [{ label: 'Buy', value: 'buy' }, { label: 'Sell', value: 'sell' }, { label: 'Swap', value: 'swap' }, { label: 'Transfer', value: 'transfer' }, { label: 'Deposit', value: 'deposit' }, { label: 'Withdrawal', value: 'withdrawal' }] },
      { id: 'amount', label: 'Amount', type: 'number' },
      { id: 'currency', label: 'Currency', type: 'select', options: [{ label: 'USD', value: 'usd' }, { label: 'EUR', value: 'eur' }, { label: 'BTC', value: 'btc' }, { label: 'ETH', value: 'eth' }] },
      { id: 'status', label: 'Status', type: 'select', options: [{ label: 'Completed', value: 'completed' }, { label: 'Pending', value: 'pending' }, { label: 'Failed', value: 'failed' }] },
      { id: 'fromDate', label: 'From Date', type: 'date' },
      { id: 'toDate', label: 'To Date', type: 'date' },
      { id: 'reference', label: 'Reference', type: 'text' },
      { id: 'counterparty', label: 'Counterparty', type: 'text' },
    ],
    onChange: (query: any) => console.log('Query:', query),
  },
};

export const PrefilledWithOr: Story = {
  args: {
    fields: [
      { id: 'amount', label: 'Amount', type: 'number' },
      { id: 'type', label: 'Type', type: 'select', options: [{ label: 'Credit', value: 'credit' }, { label: 'Debit', value: 'debit' }] },
    ],
    value: {
      id: 'root',
      combinator: 'or',
      rules: [
        { id: 'r1', fieldId: 'amount', operator: 'gte', value: '1000' },
        { id: 'r2', fieldId: 'type', operator: 'equals', value: 'credit' },
      ],
    },
    onChange: (query: any) => console.log('Query:', query),
  },
};

export const ComplexNested: Story = {
  args: {
    fields: [
      { id: 'amount', label: 'Amount', type: 'number' },
      { id: 'status', label: 'Status', type: 'select', options: [{ label: 'Completed', value: 'completed' }, { label: 'Pending', value: 'pending' }, { label: 'Failed', value: 'failed' }] },
      { id: 'date', label: 'Date', type: 'date' },
      { id: 'currency', label: 'Currency', type: 'text' },
    ],
    value: {
      id: 'root',
      combinator: 'and',
      rules: [
        {
          id: 'g1',
          combinator: 'or',
          rules: [
            { id: 'r1', fieldId: 'amount', operator: 'gte', value: '5000' },
            { id: 'r2', fieldId: 'status', operator: 'equals', value: 'failed' },
          ],
        },
        { id: 'r3', fieldId: 'currency', operator: 'equals', value: 'USD' },
      ],
    },
    onChange: (query: any) => console.log('Query:', query),
  },
};

export const DarkMode: Story = {
  args: {
    fields: [
      { id: 'amount', label: 'Amount', type: 'number' },
      { id: 'type', label: 'Type', type: 'select', options: [{ label: 'Buy', value: 'buy' }, { label: 'Sell', value: 'sell' }] },
      { id: 'date', label: 'Date', type: 'date' },
    ],
    onChange: (query: any) => console.log('Query:', query),
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story: any) => (
      <div className="dark p-6 bg-zinc-900 min-h-[300px] rounded-xl">
        <Story />
      </div>
    ),
  ],
};

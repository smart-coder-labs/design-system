import type { Meta, StoryObj } from '@storybook/react';
import { TransactionList, Transaction } from './TransactionList';

const meta = {
  title: 'Components/TransactionList',
  component: TransactionList,
  tags: ['autodocs'],
} satisfies Meta<typeof TransactionList>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultTransactions: Transaction[] = [
  { id: '1', title: 'Bitcoin Purchase', description: 'Bought 0.05 BTC', amount: 2150.00, type: 'expense', category: 'transfer', date: 'Today, 2:30 PM', status: 'completed' },
  { id: '2', title: 'Ethereum Sale', description: 'Sold 1.5 ETH', amount: 3420.00, type: 'income', category: 'transfer', date: 'Today, 11:15 AM', status: 'completed' },
  { id: '3', title: 'USDC Transfer', description: 'To external wallet', amount: 5000.00, type: 'expense', category: 'transfer', date: 'Yesterday', status: 'pending' },
  { id: '4', title: 'Salary Deposit', description: 'Monthly income', amount: 8500.00, type: 'income', category: 'work', date: 'Jan 14', status: 'completed' },
  { id: '5', title: 'Coffee Shop', description: 'Starbucks', amount: 5.75, type: 'expense', category: 'food', date: 'Jan 14', status: 'completed' },
  { id: '6', title: 'Failed Swap', description: 'SOL to USDC', amount: 1200.00, type: 'expense', category: 'transfer', date: 'Jan 13', status: 'failed' },
];

export const Default: Story = {
  args: {
    transactions: defaultTransactions,
    onTransactionClick: (tx: Transaction) => console.log('Clicked:', tx),
  },
};

export const Masked: Story = {
  args: {
    transactions: defaultTransactions.slice(0, 3),
    maskable: true,
    onTransactionClick: (tx: Transaction) => console.log('Clicked:', tx),
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Activity Log',
    transactions: defaultTransactions.slice(0, 3),
    onTransactionClick: (tx: Transaction) => console.log('Clicked:', tx),
  },
};

export const Empty: Story = {
  args: {
    transactions: [],
    emptyMessage: 'No recent transactions',
    onTransactionClick: (tx: Transaction) => console.log('Clicked:', tx),
  },
};

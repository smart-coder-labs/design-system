import type { Meta, StoryObj } from '@storybook/react';
import { TransactionList } from './TransactionList';

const meta = {
    title: 'Components/TransactionList',
    component: TransactionList,
    tags: ['autodocs'],
} satisfies Meta<typeof TransactionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Recent Transactions',
        transactions: [
            { id: '1', title: 'Salary Deposit', amount: 4500, type: 'income', status: 'completed', category: 'work', date: '2025-05-11', description: 'Monthly salary' },
            { id: '2', title: 'Amazon Purchase', amount: 89.99, type: 'expense', status: 'completed', category: 'shopping', date: '2025-05-10' },
            { id: '3', title: 'Uber Ride', amount: 24.50, type: 'expense', status: 'completed', category: 'transport', date: '2025-05-10' },
            { id: '4', title: 'Freelance Payment', amount: 1200, type: 'income', status: 'pending', category: 'work', date: '2025-05-09' },
            { id: '5', title: 'Restaurant Dinner', amount: 67.80, type: 'expense', status: 'completed', category: 'food', date: '2025-05-09' },
        ],
        currency: 'USD',
    },
};

export const Masked: Story = {
    args: {
        title: 'Transactions (Masked)',
        transactions: [
            { id: '1', title: 'Wire Transfer', amount: 12500, type: 'income', status: 'completed', category: 'transfer', date: '2025-05-11' },
            { id: '2', title: 'Rent Payment', amount: 1800, type: 'expense', status: 'completed', category: 'housing', date: '2025-05-10' },
            { id: '3', title: 'Electric Bill', amount: 134.20, type: 'expense', status: 'completed', category: 'utilities', date: '2025-05-08' },
        ],
        maskable: true,
        currency: 'USD',
    },
};

export const Empty: Story = {
    args: {
        title: 'Transactions',
        transactions: [],
        emptyMessage: 'No transactions yet. Start your financial journey!',
    },
};

export const WithFailedTransactions: Story = {
    args: {
        title: 'All Activity',
        transactions: [
            { id: '1', title: 'Card Payment', amount: 45.00, type: 'expense', status: 'completed', category: 'card', date: '2025-05-11' },
            { id: '2', title: 'Transfer to Savings', amount: 500, type: 'expense', status: 'failed', category: 'transfer', date: '2025-05-10', description: 'Insufficient funds' },
            { id: '3', title: 'Gift Received', amount: 100, type: 'income', status: 'completed', category: 'gift', date: '2025-05-09' },
            { id: '4', title: 'Online Payment', amount: 299.99, type: 'expense', status: 'pending', category: 'shopping', date: '2025-05-08' },
        ],
        currency: 'USD',
    },
};

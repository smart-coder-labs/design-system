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

export const AllCategories: Story = {
    args: {
        title: 'Spending by Category',
        transactions: [
            { id: '1', title: 'Whole Foods', amount: 89.50, type: 'expense', status: 'completed', category: 'food', date: '2025-05-11' },
            { id: '2', title: 'Walgreens', amount: 24.99, type: 'expense', status: 'completed', category: 'health', date: '2025-05-11' },
            { id: '3', title: 'Amazon', amount: 199.99, type: 'expense', status: 'completed', category: 'shopping', date: '2025-05-10' },
            { id: '4', title: 'Rent Transfer', amount: 1800, type: 'expense', status: 'completed', category: 'housing', date: '2025-05-10' },
            { id: '5', title: 'PG&E Bill', amount: 134.20, type: 'expense', status: 'completed', category: 'utilities', date: '2025-05-09' },
            { id: '6', title: 'Uber Ride', amount: 28.50, type: 'expense', status: 'completed', category: 'transport', date: '2025-05-09' },
        ],
        currency: 'USD',
    },
};

export const LargeAmounts: Story = {
    args: {
        title: 'Portfolio Activity',
        transactions: [
            { id: '1', title: 'Wire Transfer In', amount: 250000, type: 'income', status: 'completed', category: 'transfer', date: '2025-05-11', description: 'From corporate account' },
            { id: '2', title: 'Stock Purchase', amount: 50000, type: 'expense', status: 'pending', category: 'transfer', date: '2025-05-11', description: 'Buy AAPL 280 shares' },
            { id: '3', title: 'Crypto Withdrawal', amount: 25000, type: 'expense', status: 'completed', category: 'transfer', date: '2025-05-10' },
            { id: '4', title: 'Dividend Payment', amount: 1234.56, type: 'income', status: 'completed', category: 'work', date: '2025-05-09' },
        ],
        maskable: true,
        currency: 'USD',
    },
};

export const ManyTransactions: Story = {
    args: {
        title: 'Transaction History (All)',
        transactions: Array.from({ length: 15 }, (_, i) => ({
            id: String(i + 1),
            title: ['Salary', 'Amazon', 'Uber', 'Starbucks', 'Netflix', 'Rent', 'Transfer', 'Dinner', 'Gas', 'Gym', 'Apple Store', 'Spotify', 'Target', 'Wyze', 'Shell'][i],
            amount: [4500, 89.99, 24.50, 5.75, 15.99, 1800, 500, 67.80, 45.00, 49.99, 1299, 9.99, 156.78, 35.00, 52.30][i],
            type: (i === 0 || i === 6) ? 'income' as const : 'expense' as const,
            status: i === 10 ? ('pending' as const) : i === 12 ? ('failed' as const) : ('completed' as const),
            category: (['work', 'shopping', 'transport', 'food', 'other', 'housing', 'transfer', 'food', 'transport', 'health', 'shopping', 'other', 'shopping', 'utilities', 'transport'] as const)[i],
            date: new Date(Date.now() - i * 86400000).toISOString().split('T')[0],
        })),
        currency: 'USD',
    },
};

export const DarkMode: Story = {
    args: {
        title: 'DeFi Activity',
        transactions: [
            { id: '1', title: 'Uniswap Swap', amount: 2500, type: 'expense', status: 'completed', category: 'transfer', date: '2025-05-11', description: 'USDC → ETH' },
            { id: '2', title: 'Aave Deposit', amount: 10000, type: 'expense', status: 'completed', category: 'transfer', date: '2025-05-10', description: 'Deposited USDC' },
            { id: '3', title: 'Staking Reward', amount: 12.50, type: 'income', status: 'completed', category: 'work', date: '2025-05-09' },
            { id: '4', title: 'Gas Fee', amount: 0.005, type: 'expense', status: 'completed', category: 'utilities', date: '2025-05-09', description: 'ETH gas for tx' },
        ],
        currency: 'USD',
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
    decorators: [
        (Story: any) => (
            <div className="dark p-6 bg-zinc-900 rounded-xl">
                <Story />
            </div>
        ),
    ],
};

export const MobileView: Story = {
    args: {
        title: 'Recent Activity',
        transactions: [
            { id: '1', title: 'Coffee', amount: 5.50, type: 'expense', status: 'completed', category: 'food', date: '2025-05-11' },
            { id: '2', title: 'Lunch', amount: 15.75, type: 'expense', status: 'completed', category: 'food', date: '2025-05-11' },
            { id: '3', title: 'Venmo Received', amount: 50, type: 'income', status: 'completed', category: 'transfer', date: '2025-05-10' },
        ],
        currency: 'USD',
    },
    decorators: [
        (Story: any) => (
            <div className="max-w-sm mx-auto">
                <Story />
            </div>
        ),
    ],
};

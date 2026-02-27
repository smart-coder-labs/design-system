import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TransactionList, TransactionRow, type Transaction } from '../components/ui/TransactionList';

const meta: Meta<typeof TransactionList> = {
    title: 'Fintech/Dashboard/TransactionList',
    component: TransactionList,
    parameters: { layout: 'centered' },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof TransactionList>;

const sampleTransactions: Transaction[] = [
    { id: '1', title: 'Starbucks Coffee', description: 'Av. Reforma 222', amount: 89.50, type: 'expense', category: 'food', status: 'completed', date: 'Today, 10:30 AM' },
    { id: '2', title: 'Salary Deposit', description: 'Acme Corp.', amount: 45000, type: 'income', category: 'work', status: 'completed', date: 'Today, 8:00 AM' },
    { id: '3', title: 'Netflix', description: 'Monthly sub', amount: 299, type: 'expense', category: 'utilities', status: 'completed', date: 'Yesterday' },
    { id: '4', title: 'Transfer to Ana', description: 'Rent', amount: 5000, type: 'expense', category: 'transfer', status: 'pending', date: 'Yesterday' },
    { id: '5', title: 'Amazon', description: 'Electronics', amount: 1250, type: 'expense', category: 'shopping', status: 'completed', date: 'Feb 22' },
    { id: '6', title: 'Freelance', description: 'Design project', amount: 12000, type: 'income', category: 'work', status: 'completed', date: 'Feb 21' },
    { id: '7', title: 'Uber', description: 'Trip to airport', amount: 345, type: 'expense', category: 'transport', status: 'completed', date: 'Feb 20' },
    { id: '8', title: 'Failed Payment', description: 'Insurance', amount: 2400, type: 'expense', category: 'other', status: 'failed', date: 'Feb 19' },
];

export const Default: Story = {
    args: {
        transactions: sampleTransactions,
        currency: 'MXN',
        locale: 'es-MX',
    },
    decorators: [(Story) => <div className="w-[420px]"><Story /></div>],
};

export const Empty: Story = {
    args: { transactions: [] },
    decorators: [(Story) => <div className="w-[420px]"><Story /></div>],
};

export const SingleRow: Story = {
    name: '📊 Single Transaction Row',
    render: () => (
        <div className="w-[420px] bg-surface-primary rounded-xl p-2 border border-border-primary">
            <TransactionRow
                transaction={sampleTransactions[0]}
                currency="MXN"
                locale="es-MX"
            />
        </div>
    ),
};

export const MaskedAmounts: Story = {
    name: '👁️ Masked Amounts',
    render: () => (
        <div className="w-[420px] bg-surface-primary rounded-xl p-2 border border-border-primary space-y-0.5">
            {sampleTransactions.slice(0, 3).map(tx => (
                <TransactionRow
                    key={tx.id}
                    transaction={tx}
                    currency="MXN"
                    locale="es-MX"
                    masked
                />
            ))}
        </div>
    ),
};

export const BankingDashboard: Story = {
    name: '🏦 Caso de Uso: Banking Dashboard',
    args: {
        transactions: sampleTransactions,
        currency: 'MXN',
        locale: 'es-MX',
        title: 'Recent Activity',
    },
    decorators: [(Story) => <div className="w-[450px]"><Story /></div>],
};

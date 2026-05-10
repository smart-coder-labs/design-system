import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BankAccountCard } from '../components/ui/BankAccountCard';

const meta: Meta<typeof BankAccountCard> = {
    title: 'Fintech/Dashboard/BankAccountCard',
    component: BankAccountCard,
    parameters: { layout: 'centered' },
    tags: [],
    argTypes: {
        accountType: { control: 'select', options: ['checking', 'savings', 'credit', 'investment'] },
    },
};

export default meta;
type Story = StoryObj<typeof BankAccountCard>;

export const Checking: Story = {
    args: {
        accountName: 'Personal Checking',
        accountType: 'checking',
        balance: 46800.50,
        currency: 'MXN',
        locale: 'es-MX',
        clabeOrIban: '012180001234567891',
    },
    decorators: [(Story) => <div className="w-[380px]"><Story /></div>],
};

export const Savings: Story = {
    args: {
        ...Checking.args,
        accountName: 'Emergency Fund',
        accountType: 'savings',
        balance: 150000,
    },
    decorators: [(Story) => <div className="w-[380px]"><Story /></div>],
};

export const Credit: Story = {
    args: {
        ...Checking.args,
        accountName: 'Platinum Card',
        accountType: 'credit',
        balance: -12500,
        accountNumber: '•••• •••• •••• 8421',
    },
    decorators: [(Story) => <div className="w-[380px]"><Story /></div>],
};

export const Investment: Story = {
    args: {
        ...Checking.args,
        accountName: 'Investment Portfolio',
        accountType: 'investment',
        balance: 285000,
        currency: 'USD',
        locale: 'en-US',
    },
    decorators: [(Story) => <div className="w-[380px]"><Story /></div>],
};

export const HiddenByDefault: Story = {
    name: '👁️ Hidden Balance',
    args: {
        ...Checking.args,
        hiddenByDefault: true,
    },
    decorators: [(Story) => <div className="w-[380px]"><Story /></div>],
};

export const MultipleAccounts: Story = {
    name: '🏦 Caso de Uso: Multiple Accounts',
    render: () => (
        <div className="space-y-4 w-[380px]">
            <BankAccountCard accountName="Personal" accountType="checking" balance={46800} currency="MXN" locale="es-MX" />
            <BankAccountCard accountName="Savings" accountType="savings" balance={150000} currency="MXN" locale="es-MX" />
            <BankAccountCard accountName="Investments" accountType="investment" balance={68500} currency="USD" locale="en-US" />
        </div>
    ),
};

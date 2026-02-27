import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TransferForm } from '../components/ui/TransferForm';

const meta: Meta<typeof TransferForm> = {
    title: 'Fintech/Payments/TransferForm',
    component: TransferForm,
    parameters: { layout: 'centered' },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof TransferForm>;

const recipients = [
    { id: '1', name: 'Ana García', bank: 'BBVA', accountNumber: '•••• 4521' },
    { id: '2', name: 'Carlos Medina', bank: 'Banorte', accountNumber: '•••• 7832' },
    { id: '3', name: 'Laura Pérez', bank: 'Santander', accountNumber: '•••• 1290' },
];

export const Default: Story = {
    args: {
        recipients,
        availableBalance: 46800,
        defaultCurrency: 'MXN',
    },
    decorators: [(Story) => <div className="w-[400px]"><Story /></div>],
};

export const LowBalance: Story = {
    name: '⚠️ Low Balance',
    args: {
        recipients,
        availableBalance: 100,
        defaultCurrency: 'MXN',
    },
    decorators: [(Story) => <div className="w-[400px]"><Story /></div>],
};

export const USDTransfer: Story = {
    name: '💵 USD Transfer',
    args: {
        recipients,
        availableBalance: 5000,
        defaultCurrency: 'USD',
    },
    decorators: [(Story) => <div className="w-[400px]"><Story /></div>],
};

export const Playground: Story = {
    name: '🎨 Playground',
    args: { ...Default.args },
    decorators: [(Story) => <div className="w-[420px]"><Story /></div>],
};

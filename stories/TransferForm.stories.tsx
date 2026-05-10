import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TransferForm, type TransferRecipient, type CurrencyOption } from '../components/ui/TransferForm';

const meta: Meta<typeof TransferForm> = {
    title: 'Fintech/Payments/TransferForm',
    component: TransferForm,
    parameters: { layout: 'centered' },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof TransferForm>;

const recipients: TransferRecipient[] = [
    { id: '1', name: 'Ana García', identifier: 'BBVA •••• 4521', initials: 'AG' },
    { id: '2', name: 'Carlos Medina', identifier: 'Banorte •••• 7832', initials: 'CM' },
    { id: '3', name: 'Laura Pérez', identifier: 'Santander •••• 1290', initials: 'LP' },
];

const currencies: CurrencyOption[] = [
    { code: 'MXN', symbol: '$', name: 'Mexican Peso', flag: '🇲🇽' },
    { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
    { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
];

export const Default: Story = {
    args: {
        recipients,
        currencies,
    },
    decorators: [(Story) => <div className="w-[400px]"><Story /></div>],
};

export const USDTransfer: Story = {
    name: '💵 USD Transfer',
    args: {
        recipients,
        currencies: currencies.filter(c => c.code === 'USD'),
    },
    decorators: [(Story) => <div className="w-[400px]"><Story /></div>],
};

export const Playground: Story = {
    name: '🎨 Playground',
    args: {
        recipients,
        currencies,
    },
    decorators: [(Story) => <div className="w-[420px]"><Story /></div>],
};

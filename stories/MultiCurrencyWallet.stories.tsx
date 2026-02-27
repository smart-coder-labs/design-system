import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MultiCurrencyWallet } from '../components/ui/MultiCurrencyWallet';

const meta: Meta<typeof MultiCurrencyWallet> = {
    title: 'Fintech/FX & International Payments/MultiCurrencyWallet',
    component: MultiCurrencyWallet,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MultiCurrencyWallet>;

export const Default: Story = {
    args: {
        wallets: [
            {
                id: '1',
                currencyCode: 'USD',
                currencyName: 'US Dollar',
                flag: '🇺🇸',
                balance: 15420.50,
                isLocal: true,
            },
            {
                id: '2',
                currencyCode: 'EUR',
                currencyName: 'Euro',
                flag: '🇪🇺',
                balance: 2450.00,
                color: 'from-blue-600 to-indigo-800',
            },
            {
                id: '3',
                currencyCode: 'GBP',
                currencyName: 'British Pound',
                flag: '🇬🇧',
                balance: 850.25,
                color: 'from-rose-600 to-red-800',
            },
        ],
        onAddFunds: (id) => console.log('Add funds to wallet', id),
        onSend: (id) => console.log('Send from wallet', id),
    },
};

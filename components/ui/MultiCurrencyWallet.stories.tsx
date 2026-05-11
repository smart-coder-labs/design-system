import type { Meta, StoryObj } from '@storybook/react';
import { MultiCurrencyWallet } from './MultiCurrencyWallet';

const meta = {
    title: 'Components/MultiCurrencyWallet',
    component: MultiCurrencyWallet,
    tags: ['autodocs'],
} satisfies Meta<typeof MultiCurrencyWallet>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleWallets = [
    { id: '1', currencyCode: 'USD', currencyName: 'US Dollar', flag: '🇺🇸', balance: 12450.80, isLocal: true },
    { id: '2', currencyCode: 'EUR', currencyName: 'Euro', flag: '🇪🇺', balance: 3200.50, color: 'from-blue-600 to-purple-700' },
    { id: '3', currencyCode: 'GBP', currencyName: 'British Pound', flag: '🇬🇧', balance: 1875.00, color: 'from-emerald-600 to-teal-800' },
    { id: '4', currencyCode: 'JPY', currencyName: 'Japanese Yen', flag: '🇯🇵', balance: 150000, color: 'from-red-500 to-rose-700' },
];

export const Default: Story = {
    args: {
        wallets: sampleWallets,
    },
};

export const SingleWallet: Story = {
    args: {
        wallets: [sampleWallets[0]],
    },
};

export const WithCallbacks: Story = {
    args: {
        wallets: sampleWallets.slice(0, 2),
        onAddFunds: (id) => console.log('Add funds to:', id),
        onSend: (id) => console.log('Send from:', id),
    },
};

export const Empty: Story = {
    args: {
        wallets: [],
    },
};

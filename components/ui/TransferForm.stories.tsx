import type { Meta, StoryObj } from '@storybook/react';
import { TransferForm } from './TransferForm';

const meta = {
    title: 'Components/TransferForm',
    component: TransferForm,
    tags: ['autodocs'],
} satisfies Meta<typeof TransferForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultRecipients = [
    { id: '1', name: 'Alice Johnson', accountNumber: '****1234', bank: 'Chase Bank' },
    { id: '2', name: 'Bob Smith', accountNumber: '****5678', bank: 'Bank of America' },
    { id: '3', name: 'Carol White', accountNumber: '****9012', bank: 'Wells Fargo' },
];

const defaultCurrencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'MXN', symbol: 'MX$', name: 'Mexican Peso' },
];

export const Default: Story = {
    args: {
        recipients: defaultRecipients,
        currencies: defaultCurrencies,
        availableBalance: 12500.00,
        defaultCurrency: 'USD',
        onSubmit: (data) => alert(`Transfer: ${data.amount} ${data.currency} to ${data.recipientId}`),
    },
};

export const WithLowBalance: Story = {
    args: {
        recipients: defaultRecipients,
        currencies: defaultCurrencies,
        availableBalance: 350.00,
        defaultCurrency: 'USD',
        onSubmit: (data) => alert(`Transfer: ${data.amount} ${data.currency} to ${data.recipientId}`),
    },
};

export const International: Story = {
    args: {
        recipients: [
            { id: '1', name: 'Maria Garcia', accountNumber: 'ES****1234', bank: 'Banco Santander' },
            { id: '2', name: 'Pierre Dubois', accountNumber: 'FR****5678', bank: 'BNP Paribas' },
        ],
        currencies: [
            { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
            { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
            { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧' },
            { code: 'MXN', symbol: 'MX$', name: 'Mexican Peso', flag: '🇲🇽' },
        ],
        availableBalance: 25000.00,
        defaultCurrency: 'EUR',
        onSubmit: (data) => alert(`International transfer: ${data.amount} ${data.currency}`),
    },
};

import type { Meta, StoryObj } from '@storybook/react';
import { TransferForm, type TransferRecipient, type CurrencyOption } from './TransferForm';

const meta = {
    title: 'Components/TransferForm',
    component: TransferForm,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A fintech-style money transfer form with amount input, currency selector, recipient dropdown, and optional concept field. Includes real-time balance validation and insufficient fund warnings.',
            },
        },
    },
} satisfies Meta<typeof TransferForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultRecipients: TransferRecipient[] = [
    { id: '1', name: 'Alice Johnson', accountNumber: '****1234', bank: 'Chase Bank' },
    { id: '2', name: 'Bob Smith', accountNumber: '****5678', bank: 'Bank of America' },
    { id: '3', name: 'Carol White', accountNumber: '****9012', bank: 'Wells Fargo' },
];

const defaultCurrencies: CurrencyOption[] = [
    { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
    { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
    { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧' },
    { code: 'MXN', symbol: 'MX$', name: 'Mexican Peso', flag: '🇲🇽' },
];

export const Default: Story = {
    args: {
        recipients: defaultRecipients,
        currencies: defaultCurrencies,
        availableBalance: 12500.00,
        defaultCurrency: 'USD',
        onSubmit: (data) => alert(`Transfer: ${data.amount} ${data.currency} to ${data.recipientId} — "${data.concept}"`),
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
            { id: '1', name: 'María García', accountNumber: 'ES****1234', bank: 'Banco Santander' },
            { id: '2', name: 'Pierre Dubois', accountNumber: 'FR****5678', bank: 'BNP Paribas' },
            { id: '3', name: 'Hans Müller', accountNumber: 'DE****9012', bank: 'Deutsche Bank' },
        ],
        currencies: [
            { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
            { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
            { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧' },
            { code: 'MXN', symbol: 'MX$', name: 'Mexican Peso', flag: '🇲🇽' },
            { code: 'JPY', symbol: '¥', name: 'Japanese Yen', flag: '🇯🇵' },
            { code: 'CHF', symbol: 'Fr', name: 'Swiss Franc', flag: '🇨🇭' },
        ],
        availableBalance: 25000.00,
        defaultCurrency: 'EUR',
        onSubmit: (data) => alert(`International transfer: ${data.amount} ${data.currency}`),
    },
};

export const EmptyRecipients: Story = {
    args: {
        recipients: [],
        currencies: defaultCurrencies,
        availableBalance: 5000.00,
        defaultCurrency: 'USD',
        onSubmit: (data) => alert(`Transfer: ${data.amount} ${data.currency}`),
    },
};

export const ZeroBalance: Story = {
    args: {
        recipients: defaultRecipients,
        currencies: defaultCurrencies,
        availableBalance: 0,
        defaultCurrency: 'USD',
        onSubmit: (data) => alert(`Transfer: ${data.amount} ${data.currency}`),
    },
};

export const LargeBalance: Story = {
    args: {
        recipients: defaultRecipients,
        currencies: defaultCurrencies,
        availableBalance: 999999.99,
        defaultCurrency: 'USD',
        onSubmit: (data) => alert(`Transfer: ${data.amount} ${data.currency}`),
    },
};

export const SingleCurrency: Story = {
    args: {
        recipients: defaultRecipients,
        currencies: [
            { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
        ],
        availableBalance: 8200.00,
        defaultCurrency: 'USD',
        onSubmit: (data) => alert(`Transfer: ${data.amount} ${data.currency}`),
    },
};

export const MobileView: Story = {
    parameters: {
        viewport: { defaultViewport: 'mobile1' },
    },
    args: {
        recipients: defaultRecipients,
        currencies: defaultCurrencies,
        availableBalance: 5000.00,
        defaultCurrency: 'USD',
        onSubmit: (data) => alert(`Transfer: ${data.amount} ${data.currency}`),
    },
};

export const NoConcept: Story = {
    args: {
        recipients: defaultRecipients,
        currencies: [
            { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
            { code: 'USDC', symbol: 'USDC', name: 'USD Coin' },
        ],
        availableBalance: 10000.00,
        defaultCurrency: 'USDC',
        onSubmit: (data) => alert(`Crypto transfer: ${data.amount} ${data.currency}`),
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { default: 'dark' },
    },
    args: {
        recipients: defaultRecipients,
        currencies: defaultCurrencies,
        availableBalance: 2500.00,
        defaultCurrency: 'USD',
        onSubmit: (data) => alert(`Transfer: ${data.amount}`),
    },
};

import type { Meta, StoryObj } from '@storybook/react';
import { TransferForm, TransferRecipient, CurrencyOption } from './TransferForm';

const meta = {
  title: 'Components/TransferForm',
  component: TransferForm,
  tags: ['autodocs'],
} satisfies Meta<typeof TransferForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleRecipients: TransferRecipient[] = [
  { id: '1', name: 'Alice Johnson', accountNumber: '••••4242', bank: 'Bank of America' },
  { id: '2', name: 'Bob Smith', accountNumber: '••••8888', bank: 'Chase' },
  { id: '3', name: 'Carol White', accountNumber: '••••1234', bank: 'Wells Fargo' },
];

const sampleCurrencies: CurrencyOption[] = [
  { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧' },
  { code: 'MXN', symbol: '$', name: 'Mexican Peso', flag: '🇲🇽' },
];

export const Default: Story = {
  args: {
    recipients: sampleRecipients,
    availableBalance: 15000,
    onSubmit: (data) => console.log('Submit:', data),
  },
};

export const WithCurrencies: Story = {
  args: {
    recipients: sampleRecipients,
    currencies: sampleCurrencies,
    availableBalance: 25000,
    defaultCurrency: 'EUR',
    onSubmit: (data) => console.log('Submit:', data),
  },
};

export const InsufficientBalance: Story = {
  args: {
    recipients: sampleRecipients,
    availableBalance: 100,
    onSubmit: (data) => console.log('Submit:', data),
  },
};

export const NoRecipients: Story = {
  args: {
    recipients: [],
    availableBalance: 5000,
    onSubmit: (data) => console.log('Submit:', data),
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MultiCurrencyWallet } from './MultiCurrencyWallet';
import { action } from 'storybook/actions';

const meta: Meta<typeof MultiCurrencyWallet> = {
  title: 'Fintech/MultiCurrencyWallet',
  component: MultiCurrencyWallet,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    balances: [
      { currency: 'USD', amount: 12430.50, symbol: '$', name: 'US Dollar' },
      { currency: 'EUR', amount: 3200.00, symbol: '€', name: 'Euro' },
      { currency: 'BTC', amount: 0.5482, symbol: '₿', name: 'Bitcoin' },
      { currency: 'ETH', amount: 3.42, symbol: 'Ξ', name: 'Ethereum' },
    ],
    onSelectCurrency: action('select'),
  },
};

export const SingleCurrency: Story = {
  args: {
    balances: [{ currency: 'USD', amount: 50000, symbol: '$', name: 'US Dollar' }],
    onSelectCurrency: action('select'),
  },
};

export const ManyCurrencies: Story = {
  args: {
    balances: [
      { currency: 'USD', amount: 45000, symbol: '$', name: 'US Dollar' },
      { currency: 'EUR', amount: 12500, symbol: '€', name: 'Euro' },
      { currency: 'GBP', amount: 8900, symbol: '£', name: 'British Pound' },
      { currency: 'BTC', amount: 0.85, symbol: '₿', name: 'Bitcoin' },
      { currency: 'ETH', amount: 12.5, symbol: 'Ξ', name: 'Ethereum' },
      { currency: 'SOL', amount: 150, symbol: '◎', name: 'Solana' },
      { currency: 'MXN', amount: 85000, symbol: 'MX$', name: 'Mexican Peso' },
      { currency: 'USDC', amount: 25000, symbol: '$', name: 'USD Coin' },
    ],
    onSelectCurrency: action('select'),
  },
};

export const WithConversion: Story = {
  args: {
    balances: [
      { currency: 'USD', amount: 45000, symbol: '$', name: 'US Dollar' },
      { currency: 'EUR', amount: 3200, symbol: '€', name: 'Euro' },
    ],
    onSelectCurrency: action('select'),
    onConvert: (from, to) => console.log('Convert:', from, 'to', to),
  },
};

export const TravelWallet: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-text-primary">Travel Wallet</h3>
        <span className="text-xs text-text-tertiary">Updated 2 min ago</span>
      </div>
      <MultiCurrencyWallet
        balances={[
          { currency: 'USD', amount: 2500, symbol: '$', name: 'US Dollar' },
          { currency: 'EUR', amount: 4200, symbol: '€', name: 'Euro' },
          { currency: 'JPY', amount: 50000, symbol: '¥', name: 'Japanese Yen' },
          { currency: 'MXN', amount: 15000, symbol: 'MX$', name: 'Mexican Peso' },
        ]}
        onSelectCurrency={action('select')}
        onConvert={action('convert')}
      />
    </div>
  ),
};

export const EmptyWallet: Story = {
  args: {
    balances: [],
    onSelectCurrency: action('select'),
  },
};

export const CryptoOnly: Story = {
  args: {
    balances: [
      { currency: 'BTC', amount: 0.5482, symbol: '₿', name: 'Bitcoin' },
      { currency: 'ETH', amount: 3.42, symbol: 'Ξ', name: 'Ethereum' },
      { currency: 'SOL', amount: 45.8, symbol: '◎', name: 'Solana' },
      { currency: 'USDC', amount: 5000, symbol: '$', name: 'USD Coin', color: '#2775CA' },
    ],
    onSelectCurrency: action('select'),
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { JsonViewer } from './JsonViewer';

const meta: Meta<typeof JsonViewer> = {
  title: 'Data Display/JsonViewer',
  component: JsonViewer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const transactionData = {
  transaction: {
    id: 'trx_7a3b9f2e',
    amount: 250.00,
    currency: 'USD',
    status: 'completed',
    timestamp: '2025-04-15T14:32:21Z',
    sender: { id: 'usr_4821', name: 'Cesar Ruiz' },
    recipient: { id: 'usr_7734', name: 'Alice Johnson' },
    metadata: { source: 'web', ip: '192.168.1.42', user_agent: 'Mozilla/5.0' },
  },
};

const apiResponse = {
  status: 200,
  data: {
    accounts: [
      { id: 'acc_1', type: 'checking', balance: 12430.50, currency: 'USD' },
      { id: 'acc_2', type: 'savings', balance: 33461.68, currency: 'USD' },
    ],
    total: 45892.18,
  },
  meta: { page: 1, total_pages: 5, count: 42 },
};

export const Default: Story = {
  args: {
    data: transactionData,
  },
};

export const TransactionJSON: Story = {
  args: {
    data: transactionData,
    title: 'Transaction JSON',
  },
};

export const APIResponse: Story = {
  args: {
    data: apiResponse,
    title: 'API Response',
  },
};

export const Collapsed: Story = {
  args: {
    data: transactionData,
    collapsed: true,
  },
};

export const CryptoTxJSON: Story = {
  args: {
    data: {
      tx_hash: '0x7a3b9f2e8c4d1e5f6a7b8c9d0e1f2a3b4c5d6e7f',
      from: '0x1234567890abcdef1234567890abcdef12345678',
      to: '0x87654321fedcba0987654321fedcba0987654321',
      value: '0.025 BTC',
      fee: '0.0001 BTC',
      confirmations: 12,
      block_number: 876543,
      status: 'confirmed',
    },
    title: 'Bitcoin Transaction',
  },
};

export const NestedData: Story = {
  args: {
    data: {
      user: { profile: { name: 'Cesar Ruiz', email: 'cesar@example.com', settings: { theme: 'dark', notifications: { email: true, push: true, sms: false } } } },
      accounts: { checking: { balance: 12430.50, limit: 25000 }, savings: { balance: 33461.68, apy: 4.5 } },
      recent_transactions: Array.from({ length: 3 }, (_, i) => ({ id: `tx_${i}`, amount: i * 100 + 50, status: ['completed', 'pending', 'completed'][i] })),
    },
    title: 'Full User Data',
  },
};

export const EmptyObject: Story = {
  args: {
    data: {},
    title: 'Empty Response',
  },
};

export const ArrayData: Story = {
  args: {
    data: ['BTC', 'ETH', 'SOL', 'ADA', 'DOT'],
    title: 'Supported Cryptocurrencies',
  },
};

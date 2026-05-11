import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Bitcoin (BTC)', value: 'btc' },
      { label: 'Ethereum (ETH)', value: 'eth' },
      { label: 'Solana (SOL)', value: 'sol' },
      { label: 'Cardano (ADA)', value: 'ada' },
    ],
    placeholder: 'Select a coin',
    onChange: (val: string) => console.log('Selected:', val),
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Currency',
    options: [
      { label: 'USD', value: 'usd' },
      { label: 'EUR', value: 'eur' },
      { label: 'GBP', value: 'gbp' },
      { label: 'MXN', value: 'mxn' },
    ],
    onChange: (val: string) => console.log('Selected:', val),
  },
};

export const WithValue: Story = {
  args: {
    label: 'Network',
    value: 'ethereum',
    options: [
      { label: 'Ethereum', value: 'ethereum' },
      { label: 'Polygon', value: 'polygon' },
      { label: 'Arbitrum', value: 'arbitrum' },
      { label: 'Optimism', value: 'optimism' },
    ],
    onChange: (val: string) => console.log('Selected:', val),
  },
};

export const WithError: Story = {
  args: {
    label: 'Asset',
    value: '',
    options: [
      { label: 'BTC', value: 'btc' },
      { label: 'ETH', value: 'eth' },
    ],
    error: 'Please select an asset',
    onChange: (val: string) => console.log('Selected:', val),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Account',
    value: 'savings',
    options: [
      { label: 'Checking', value: 'checking' },
      { label: 'Savings', value: 'savings' },
    ],
    disabled: true,
    onChange: (val: string) => console.log('Selected:', val),
  },
};

export const ManyOptions: Story = {
  args: {
    label: 'Token',
    placeholder: 'Search tokens...',
    options: Array.from({ length: 20 }, (_, i) => ({
      label: `Token ${i + 1} (TKN${i})`,
      value: `tkn${i}`,
    })),
    searchable: true,
    onChange: (val: string) => console.log('Selected:', val),
  },
};

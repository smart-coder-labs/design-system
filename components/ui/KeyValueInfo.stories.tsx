import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { KeyValueInfo } from './KeyValueInfo';

const meta: Meta<typeof KeyValueInfo> = {
  title: 'Components/KeyValueInfo',
  component: KeyValueInfo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Account Balance',
    value: '$12,430.50',
  },
};

export const Currency: Story = {
  args: {
    label: 'Available Balance',
    value: '$12,180.50',
  },
  render: (args) => (
    <div className="space-y-3">
      <KeyValueInfo label="Total Balance" value="$12,430.50" />
      <KeyValueInfo label="Pending" value="-$250.00" valueClassName="text-amber-500" />
      <KeyValueInfo label="Available" value="$12,180.50" />
    </div>
  ),
};

export const WithBadge: Story = {
  args: {
    label: 'Account Status',
    value: 'Active',
    badge: { text: 'Verified', variant: 'success' },
  },
};

export const Horizontal: Story = {
  args: {
    label: 'Transaction ID',
    value: 'TRX-2025-04-8912',
  },
};

export const CompactLayout: Story = {
  render: () => (
    <div className="w-80 space-y-2 text-sm">
      <KeyValueInfo label="Account" value="Checking •••• 4821" />
      <KeyValueInfo label="Balance" value="$12,430.50" />
      <KeyValueInfo label="Status" value="Active" badge={{ text: 'Verified', variant: 'success' }} />
      <KeyValueInfo label="APY" value="0.01%" />
      <KeyValueInfo label="Opened" value="June 15, 2024" />
    </div>
  ),
};

export const CryptoDetails: Story = {
  render: () => (
    <div className="w-80 space-y-2 text-sm">
      <KeyValueInfo label="Asset" value="Bitcoin (BTC)" />
      <KeyValueInfo label="Balance" value="0.5482 BTC" />
      <KeyValueInfo label="Value" value="$36,842.10" />
      <KeyValueInfo label="24h Change" value="+2.45%" valueClassName="text-status-success" />
      <KeyValueInfo label="Cost Basis" value="$42,000.00" />
    </div>
  ),
};

export const TransactionInfo: Story = {
  render: () => (
    <div className="w-80 space-y-2 text-sm">
      <KeyValueInfo label="Reference" value="INV-2025-4421" />
      <KeyValueInfo label="Amount" value="$1,200.00" />
      <KeyValueInfo label="Status" value="Completed" badge={{ text: 'Paid', variant: 'success' }} />
      <KeyValueInfo label="Date" value="Apr 15, 2025" />
      <KeyValueInfo label="Method" value="Wire Transfer" />
    </div>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <div className="w-80 space-y-2 text-sm">
      <KeyValueInfo label="Name" value="Cesar Ruiz" />
      <KeyValueInfo label="Email" value="cesar@example.com" />
      <KeyValueInfo label="2FA" value="Enabled" badge={{ text: 'Active', variant: 'success' }} />
      <KeyValueInfo label="Member Since" value="Jan 15, 2024" />
      <KeyValueInfo label="Last Login" value="Today at 9:30 AM" />
    </div>
  ),
};

export const WithCustomValue: Story = {
  args: {
    label: 'Total Spent This Month',
    value: '$2,450.80',
    valueClassName: 'text-lg font-bold text-accent-blue',
  },
};

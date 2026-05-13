import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    level: 'h1',
    children: 'Account Overview',
  },
};

export const H2: Story = {
  args: {
    level: 'h2',
    children: 'Recent Transactions',
  },
};

export const H3: Story = {
  args: {
    level: 'h3',
    children: 'Investment Portfolio',
  },
};

export const H4: Story = {
  args: {
    level: 'h4',
    children: 'Savings Goals',
  },
};

export const H5: Story = {
  args: {
    level: 'h5',
    children: 'Card Details',
  },
};

export const H6: Story = {
  args: {
    level: 'h6',
    children: 'Transaction Reference',
  },
};

export const DashboardTitle: Story = {
  args: {
    level: 'h1',
    children: 'Good morning, Cesar',
    className: 'text-3xl',
  },
};

export const SectionTitle: Story = {
  args: {
    level: 'h2',
    children: 'Your Portfolio at a Glance',
  },
}

export const MutedHeading: Story = {
  render: () => (
    <div className="space-y-2">
      <Heading level="h3">Available Balance</Heading>
      <span className="text-3xl font-bold text-text-primary">$45,892.18</span>
      <Heading level="h5" className="text-text-tertiary">Updated 2 min ago</Heading>
    </div>
  ),
};

export const BankingDashboardHeadings: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <Heading level="h1">FinBank Pro</Heading>
      <div>
        <Heading level="h2">Accounts</Heading>
        <p className="text-sm text-text-secondary mt-1">View and manage your accounts</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-surface-secondary rounded-xl">
          <Heading level="h5">Checking</Heading>
          <p className="text-lg font-bold text-text-primary">$12,430.50</p>
        </div>
        <div className="p-4 bg-surface-secondary rounded-xl">
          <Heading level="h5">Savings</Heading>
          <p className="text-lg font-bold text-text-primary">$33,461.68</p>
        </div>
      </div>
      <Heading level="h3">Recent Activity</Heading>
    </div>
  ),
};

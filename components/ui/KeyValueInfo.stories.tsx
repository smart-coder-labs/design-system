import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { KeyValueInfo, KeyValueItem } from './KeyValueInfo';

const items: KeyValueItem[] = [
  { key: 'Account Holder', value: 'Cesar Ruiz' },
  { key: 'Account Type', value: 'Premium Checking' },
  { key: 'Account Number', value: '•••• 4832', copyable: true },
  { key: 'Routing Number', value: '021000021', copyable: true },
  { key: 'Balance', value: '$12,450.80' },
  { key: 'Status', value: 'Active' },
];

const meta: Meta<typeof KeyValueInfo> = {
  title: 'Components/KeyValueInfo',
  component: KeyValueInfo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items,
  },
};

export const CardVariant: Story = {
  args: {
    items,
    variant: 'card',
  },
};

export const InlineVariant: Story = {
  args: {
    items,
    variant: 'inline',
  },
};

export const GridVariant: Story = {
  args: {
    items,
    variant: 'grid',
    columns: 2,
  },
};

export const ThreeColumns: Story = {
  args: {
    items: [
      { key: 'Revenue', value: '$124K' },
      { key: 'Users', value: '2,847' },
      { key: 'Growth', value: '+12%' },
      { key: 'Churn', value: '3.2%' },
      { key: 'NPS', value: '72' },
      { key: 'ARR', value: '$1.2M' },
    ],
    variant: 'grid',
    columns: 3,
  },
};

export const Small: Story = {
  args: {
    items,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    items,
    size: 'lg',
    variant: 'card',
  },
};

export const Hoverable: Story = {
  args: {
    items,
    hoverable: true,
    variant: 'card',
  },
};

export const WithDividers: Story = {
  args: {
    items,
    divider: true,
    variant: 'card',
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { key: 'Total Revenue', value: '$124,500', icon: <span className="text-accent-blue">$</span> },
      { key: 'Pending', value: '3', icon: <span className="text-status-warning">⏳</span> },
      { key: 'Completed', value: '142', icon: <span className="text-status-success">✓</span> },
    ],
    variant: 'card',
  },
};

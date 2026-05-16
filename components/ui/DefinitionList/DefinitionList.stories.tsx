import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DefinitionList, DefinitionItem } from './DefinitionList';
import { Badge } from './Badge';

const items: DefinitionItem[] = [
  { term: 'Account Holder', description: 'Cesar Ruiz' },
  { term: 'Account Type', description: 'Premium Checking' },
  { term: 'Account Number', description: '•••• 4832' },
  { term: 'Routing Number', description: '021000021' },
  { term: 'Balance', description: '$12,450.80' },
  { term: 'Status', description: 'Active' },
  { term: 'Opened', description: 'January 15, 2024' },
];

const meta: Meta<typeof DefinitionList> = {
  title: 'Data Display/DefinitionList',
  component: DefinitionList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items,
  },
};

export const Bordered: Story = {
  args: {
    items,
    variant: 'bordered',
  },
};

export const Striped: Story = {
  args: {
    items,
    variant: 'striped',
  },
};

export const Compact: Story = {
  args: {
    items,
    density: 'compact',
  },
};

export const Vertical: Story = {
  args: {
    items,
    orientation: 'vertical',
  },
};

export const WithDividers: Story = {
  args: {
    items,
    divider: true,
  },
};

export const Hoverable: Story = {
  args: {
    items,
    hoverable: true,
  },
};

export const WithBadges: Story = {
  args: {
    items: [
      { term: 'Account', description: 'Checking' },
      { term: 'Verification', description: <Badge variant="success" size="sm">Verified</Badge> },
      { term: 'Risk Level', description: <Badge variant="warning" size="sm">Low</Badge> },
    ],
  },
};

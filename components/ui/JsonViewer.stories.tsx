import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { JsonViewer } from './JsonViewer';

const meta: Meta<typeof JsonViewer> = {
  title: 'Components/JsonViewer',
  component: JsonViewer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = {
  user: {
    id: 42,
    name: 'Cesar Ruiz',
    email: 'cesar@example.com',
    verified: true,
  },
  account: {
    type: 'premium',
    balance: 12450.80,
    currency: 'USD',
    transactions: [
      { id: 'tx-001', amount: 500, type: 'credit', date: '2026-05-10' },
      { id: 'tx-002', amount: -89.50, type: 'debit', date: '2026-05-09' },
    ],
  },
  metadata: null,
};

export const Default: Story = {
  args: {
    data: sampleData,
  },
};

export const InitiallyExpanded: Story = {
  args: {
    data: sampleData,
    initiallyExpanded: true,
  },
};

export const WithoutCopyButton: Story = {
  args: {
    data: sampleData,
    showCopyButton: false,
  },
};

export const SmallIndent: Story = {
  args: {
    data: sampleData,
    indentSize: 8,
  },
};

export const LargeJSON: Story = {
  args: {
    data: {
      status: 'success',
      data: {
        users: Array.from({ length: 5 }, (_, i) => ({
          id: i + 1,
          name: `User ${i + 1}`,
          email: `user${i + 1}@example.com`,
          roles: ['user', ...(i === 0 ? ['admin'] : [])],
          profile: {
            joined: '2026-01-01',
            lastLogin: '2026-05-11',
            settings: {
              theme: 'dark',
              notifications: true,
              language: 'en',
            },
          },
        })),
      },
    },
    initiallyExpanded: true,
    maxHeight: '500px',
  },
};

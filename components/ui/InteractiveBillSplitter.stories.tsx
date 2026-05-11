import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InteractiveBillSplitter, SplitContact } from './InteractiveBillSplitter';
import { action } from '@storybook/addon-actions';

const friends: SplitContact[] = [
  { id: 'me', name: 'You', isUser: true },
  { id: 'ana', name: 'Ana García' },
  { id: 'carlos', name: 'Carlos Medina' },
  { id: 'laura', name: 'Laura Pérez' },
  { id: 'miguel', name: 'Miguel Torres' },
  { id: 'sofia', name: 'Sofia Ruiz' },
];

const meta: Meta<typeof InteractiveBillSplitter> = {
  title: 'Components/InteractiveBillSplitter',
  component: InteractiveBillSplitter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    billAmount: 150.75,
    friends,
    onSplitComplete: action('split-complete'),
  },
};

export const LargeBill: Story = {
  args: {
    billAmount: 480.00,
    friends,
    onSplitComplete: action('split-complete'),
  },
};

export const EuroCurrency: Story = {
  args: {
    billAmount: 89.50,
    currency: 'EUR',
    friends: friends.slice(0, 3),
    onSplitComplete: action('split-complete'),
  },
};

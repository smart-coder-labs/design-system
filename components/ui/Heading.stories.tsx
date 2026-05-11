import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Financial Dashboard',
    level: 1,
  },
};

export const Level1: Story = {
  args: {
    children: 'Account Overview',
    level: 1,
  },
};

export const Level2: Story = {
  args: {
    children: 'Recent Transactions',
    level: 2,
  },
};

export const Level3: Story = {
  args: {
    children: 'Investment Portfolio',
    level: 3,
  },
};

export const Level4: Story = {
  args: {
    children: 'Related Assets',
    level: 4,
  },
};

export const Level5And6: Story = {
  render: () => (
    <div className="space-y-2">
      <Heading level={5}>Sub-section heading (L5)</Heading>
      <Heading level={6}>Minor heading (L6)</Heading>
    </div>
  ),
};

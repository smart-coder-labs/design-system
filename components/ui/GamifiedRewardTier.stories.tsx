import type { Meta, StoryObj } from '@storybook/react';
import { GamifiedRewardTier } from './GamifiedRewardTier';
import React from 'react';

const meta: Meta<typeof GamifiedRewardTier> = {
  title: 'Fintech/GamifiedRewardTier',
  component: GamifiedRewardTier,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GamifiedRewardTier>;

export const SilverTier: Story = {
  args: {
    userName: 'Alex',
    points: 2450,
    currentTier: 'Silver'
  },
  render: (args) => <div className="w-full max-w-md"><GamifiedRewardTier {...args} /></div>
};

export const GoldTier: Story = {
  args: {
    userName: 'Maria',
    points: 12500,
    currentTier: 'Gold'
  },
  render: (args) => <div className="w-full max-w-md"><GamifiedRewardTier {...args} /></div>
};

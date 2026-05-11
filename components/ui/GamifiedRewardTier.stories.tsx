import type { Meta, StoryObj } from '@storybook/react';
import { GamifiedRewardTier } from './GamifiedRewardTier';
import React from 'react';

const meta: Meta<typeof GamifiedRewardTier> = {
  title: 'Fintech/GamifiedRewardTier',
  component: GamifiedRewardTier,
  parameters: {
    layout: 'centered',
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

export const BronzeTier: Story = {
  args: {
    userName: 'Pedro',
    points: 350,
    currentTier: 'Bronze'
  },
  render: (args) => <div className="w-full max-w-md"><GamifiedRewardTier {...args} /></div>
};

export const PlatinumTier: Story = {
  args: {
    userName: 'Laura',
    points: 25000,
    currentTier: 'Platinum'
  },
  render: (args) => <div className="w-full max-w-md"><GamifiedRewardTier {...args} /></div>
};

export const NearPromotion: Story = {
  args: {
    userName: 'Carlos',
    points: 4800,
    currentTier: 'Silver'
  },
  render: (args) => <div className="w-full max-w-md"><GamifiedRewardTier {...args} /></div>
};

export const BronzeNearGold: Story = {
  args: {
    userName: 'Ana',
    points: 950,
    currentTier: 'Bronze'
  },
  render: (args) => <div className="w-full max-w-md"><GamifiedRewardTier {...args} /></div>
};

export const MaxedOutPlatinum: Story = {
  args: {
    userName: 'Ricardo',
    points: 99999,
    currentTier: 'Platinum'
  },
  render: (args) => <div className="w-full max-w-md"><GamifiedRewardTier {...args} /></div>
};

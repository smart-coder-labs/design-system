import type { Meta, StoryObj } from '@storybook/react';
import { GamifiedRewardTier } from './GamifiedRewardTier';
import React from 'react';

const meta: Meta<typeof GamifiedRewardTier> = {
  title: 'Fintech/Engagement/GamifiedRewardTier',
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

export const NewUserOnboarding: Story = {
  args: {
    userName: 'Sofia',
    points: 0,
    currentTier: 'Bronze'
  },
  render: (args) => <div className="w-full max-w-md"><GamifiedRewardTier {...args} /></div>
};

export const AlmostPlatinum: Story = {
  args: {
    userName: 'James',
    points: 19800,
    currentTier: 'Gold'
  },
  render: (args) => <div className="w-full max-w-md"><GamifiedRewardTier {...args} /></div>
};

export const RewardsDashboard: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <GamifiedRewardTier userName="You" points={12450} currentTier="Gold" />
      <div className="p-4 bg-surface-secondary rounded-xl border border-border-primary">
        <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wide mb-3">Available Rewards</p>
        <div className="space-y-3">
          {[
            { name: 'Cashback Boost', desc: '2% extra on all purchases', pts: 5000 },
            { name: 'Fee Waiver', desc: 'Next transfer fee waived', pts: 3000 },
            { name: 'Premium Card', desc: 'Upgrade to Premium Card', pts: 15000 },
          ].map((r, i) => (
            <div key={i} className="flex items-center justify-between p-2 hover:bg-surface-tertiary rounded-lg transition">
              <div>
                <p className="text-sm font-medium text-text-primary">{r.name}</p>
                <p className="text-xs text-text-tertiary">{r.desc}</p>
              </div>
              <span className="text-xs font-semibold text-accent-blue">{r.pts.toLocaleString()} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

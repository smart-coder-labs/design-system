import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { GestureCard } from './GestureCard';
import { Wallet, TrendingUp, CreditCard, PiggyBank } from 'lucide-react';

const meta: Meta<typeof GestureCard> = {
  title: 'Components/GestureCard',
  component: GestureCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-6">
        <h3 className="text-lg font-bold text-text-primary mb-2">Premium Account</h3>
        <p className="text-3xl font-bold text-accent-blue mb-1">$24,580.00</p>
        <p className="text-sm text-text-secondary mb-4">Available balance</p>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-accent-blue/10 text-accent-blue text-xs font-semibold rounded-full">Active</span>
          <span className="px-3 py-1 bg-surface-tertiary text-text-secondary text-xs font-semibold rounded-full">Visa Platinum</span>
        </div>
      </div>
    ),
  },
};

export const LowIntensity: Story = {
  args: {
    intensity: 5,
    children: (
      <div className="p-6">
        <h3 className="text-lg font-bold text-text-primary mb-2">Investment Portfolio</h3>
        <p className="text-2xl font-bold text-emerald-500">$185,000</p>
        <p className="text-sm text-text-secondary">+12.4% this quarter</p>
      </div>
    ),
  },
};

export const HighIntensity: Story = {
  args: {
    intensity: 30,
    children: (
      <div className="p-6">
        <h3 className="text-lg font-bold text-text-primary mb-2">Interactive Card</h3>
        <p className="text-sm text-text-secondary">Move your mouse to rotate</p>
      </div>
    ),
  },
};

export const WithoutGlow: Story = {
  args: {
    glowEffect: false,
    children: (
      <div className="p-6">
        <h3 className="text-lg font-bold text-text-primary">No Glow Effect</h3>
        <p className="text-sm text-text-secondary">Clean, flat interaction</p>
      </div>
    ),
  },
};

export const CreditCardPreview: Story = {
  args: {
    intensity: 15,
    children: (
      <div className="p-6 bg-gradient-to-br from-accent-blue to-purple-600 rounded-xl text-white">
        <div className="flex items-center justify-between mb-8">
          <CreditCard className="w-8 h-8 opacity-80" />
          <span className="text-xs font-semibold tracking-wider opacity-80">VISA</span>
        </div>
        <p className="text-lg tracking-widest mb-4">•••• •••• •••• 4821</p>
        <div className="flex justify-between">
          <div>
            <p className="text-xs opacity-70">Card Holder</p>
            <p className="text-sm font-semibold">CESAR RUIZ</p>
          </div>
          <div className="text-right">
            <p className="text-xs opacity-70">Expires</p>
            <p className="text-sm font-semibold">12/27</p>
          </div>
        </div>
      </div>
    ),
  },
};

export const SavingsGoalCard: Story = {
  args: {
    intensity: 10,
    children: (
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <PiggyBank className="w-5 h-5 text-amber-500" />
          <h3 className="text-sm font-semibold text-text-primary">Emergency Fund</h3>
        </div>
        <p className="text-3xl font-bold text-text-primary mb-1">$32,000</p>
        <div className="w-full h-2 bg-surface-tertiary rounded-full mb-2 overflow-hidden">
          <div className="h-full bg-amber-500 rounded-full" style={{ width: '64%' }} />
        </div>
        <p className="text-xs text-text-tertiary">$18,000 remaining to reach $50,000 goal</p>
      </div>
    ),
  },
};

export const PortfolioCard: Story = {
  args: {
    intensity: 20,
    glowEffect: true,
    children: (
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-5 h-5 text-emerald-500" />
          <h3 className="text-sm font-semibold text-text-primary">Portfolio Overview</h3>
        </div>
        <p className="text-2xl font-bold text-text-primary mb-1">$128,430.52</p>
        <div className="flex items-center gap-1 text-sm">
          <span className="text-status-success font-semibold">+5.2%</span>
          <span className="text-text-tertiary">all time</span>
        </div>
        <div className="flex gap-3 mt-3 text-xs text-text-tertiary">
          <span>BTC $52,340</span>
          <span>ETH $31,200</span>
          <span>SOL $18,750</span>
        </div>
      </div>
    ),
  },
};

export const WalletBalance: Story = {
  args: {
    intensity: 12,
    children: (
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Wallet className="w-5 h-5 text-accent-blue" />
          <span className="text-xs text-text-tertiary font-medium">Total Balance</span>
        </div>
        <p className="text-2xl font-bold text-text-primary">$45,892.18</p>
        <div className="flex justify-between mt-4 pt-3 border-t border-border-primary">
          <div>
            <p className="text-xs text-text-tertiary">Checking</p>
            <p className="text-sm font-semibold text-text-primary">$12,430.50</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-text-tertiary">Savings</p>
            <p className="text-sm font-semibold text-text-primary">$33,461.68</p>
          </div>
        </div>
      </div>
    ),
  },
};

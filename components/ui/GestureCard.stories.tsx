import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { GestureCard } from './GestureCard';

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

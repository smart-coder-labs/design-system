import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InteractiveCursor } from './InteractiveCursor';

const meta: Meta<typeof InteractiveCursor> = {
  title: 'Components/InteractiveCursor',
  component: InteractiveCursor,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className="h-64 w-96 bg-gradient-to-br from-accent-blue/10 to-purple-500/10 rounded-2xl flex items-center justify-center text-text-primary">Move your cursor over this area</div>,
  },
};

export const CardHover: Story = {
  args: {
    color: '#3B82F6',
    size: 200,
    children: (
      <div className="h-64 w-96 bg-surface-primary rounded-2xl border border-border-primary p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-bold text-text-primary">Interactive Card</p>
          <p className="text-sm text-text-secondary mt-2">Hover to see the glow effect</p>
        </div>
      </div>
    ),
  },
};

export const SmallCursor: Story = {
  args: {
    size: 100,
    children: <div className="h-48 w-80 bg-surface-secondary rounded-2xl flex items-center justify-center text-sm text-text-secondary">Small glow radius</div>,
  },
};

export const LargeCursor: Story = {
  args: {
    size: 400,
    children: <div className="h-64 w-96 bg-surface-tertiary rounded-2xl flex items-center justify-center text-text-primary">Large diffused glow</div>,
  },
};

export const GreenGlow: Story = {
  args: {
    color: '#10B981',
    size: 250,
    children: (
      <div className="h-48 w-80 bg-gray-900 rounded-2xl flex items-center justify-center">
        <p className="text-emerald-400 font-semibold">Portfolio +12.4%</p>
      </div>
    ),
  },
};

export const PurpleGlow: Story = {
  args: {
    color: '#8B5CF6',
    size: 300,
    children: (
      <div className="h-64 w-96 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl flex items-center justify-center">
        <p className="text-purple-300 text-lg font-bold">Premium Account</p>
      </div>
    ),
  },
};

export const DashboardWidgetGlow: Story = {
  args: {
    size: 180,
    children: (
      <div className="grid grid-cols-2 gap-4 w-96">
        <div className="h-24 bg-accent-blue/10 rounded-xl flex items-center justify-center text-sm font-semibold text-accent-blue">Balance</div>
        <div className="h-24 bg-emerald-500/10 rounded-xl flex items-center justify-center text-sm font-semibold text-emerald-600">Income</div>
        <div className="h-24 bg-amber-500/10 rounded-xl flex items-center justify-center text-sm font-semibold text-amber-600">Spending</div>
        <div className="h-24 bg-purple-500/10 rounded-xl flex items-center justify-center text-sm font-semibold text-purple-600">Investments</div>
      </div>
    ),
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};

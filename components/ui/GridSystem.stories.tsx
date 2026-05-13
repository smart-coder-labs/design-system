import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { GridSystem } from './GridSystem';

const meta: Meta<typeof GridSystem> = {
  title: 'Components/GridSystem',
  component: GridSystem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cols: 3,
    gap: 'md',
    children: Array.from({ length: 6 }, (_, i) => (
      <div key={i} className="h-24 bg-accent-blue/10 rounded-xl flex items-center justify-center text-accent-blue font-semibold text-sm">
        Item {i + 1}
      </div>
    )),
  },
};

export const TwoColumns: Story = {
  args: {
    cols: 2,
    gap: 'lg',
    children: Array.from({ length: 4 }, (_, i) => (
      <div key={i} className="h-32 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 font-semibold">
        Column {i + 1}
      </div>
    )),
  },
};

export const FourColumns: Story = {
  args: {
    cols: 4,
    gap: 'sm',
    children: Array.from({ length: 8 }, (_, i) => (
      <div key={i} className="h-20 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 font-semibold text-xs">
        Col {i + 1}
      </div>
    )),
  },
};

export const SmallGap: Story = {
  args: {
    cols: 3,
    gap: 'sm',
    children: Array.from({ length: 6 }, (_, i) => (
      <div key={i} className="h-16 bg-surface-secondary rounded-lg flex items-center justify-center text-text-primary text-xs font-medium">
        Card {i + 1}
      </div>
    )),
  },
};

export const LargeGap: Story = {
  args: {
    cols: 2,
    gap: 'lg',
    children: Array.from({ length: 4 }, (_, i) => (
      <div key={i} className="h-40 bg-surface-secondary rounded-2xl flex items-center justify-center text-text-primary">
        Spacious Card {i + 1}
      </div>
    )),
  },
};

export const DashboardWidgets: Story = {
  args: {
    cols: 3,
    gap: 'md',
    children: [
      <div key="1" className="h-32 bg-accent-blue/10 rounded-xl p-4">
        <p className="text-xs text-accent-blue font-semibold uppercase">Balance</p>
        <p className="text-xl font-bold text-accent-blue mt-2">$45,892</p>
      </div>,
      <div key="2" className="h-32 bg-emerald-500/10 rounded-xl p-4">
        <p className="text-xs text-emerald-600 font-semibold uppercase">Income</p>
        <p className="text-xl font-bold text-emerald-600 mt-2">+$12,430</p>
      </div>,
      <div key="3" className="h-32 bg-amber-500/10 rounded-xl p-4">
        <p className="text-xs text-amber-600 font-semibold uppercase">Expenses</p>
        <p className="text-xl font-bold text-amber-600 mt-2">-$8,210</p>
      </div>,
      <div key="4" className="h-24 bg-surface-secondary rounded-xl p-3 col-span-2">
        <p className="text-xs text-text-tertiary font-semibold uppercase">Transactions</p>
        <p className="text-sm text-text-primary mt-1">12 pending, 142 completed</p>
      </div>,
      <div key="5" className="h-24 bg-surface-secondary rounded-xl p-3">
        <p className="text-xs text-text-tertiary font-semibold uppercase">Cards</p>
        <p className="text-sm text-text-primary mt-1">3 active cards</p>
      </div>,
    ],
  },
};

export const SingleItem: Story = {
  args: {
    cols: 1,
    children: (
      <div className="h-48 bg-gradient-to-br from-accent-blue to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
        Full Width Banner
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

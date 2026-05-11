import type { Meta, StoryObj } from '@storybook/react';
import { ExpenseCategorizer } from './ExpenseCategorizer';
import React from 'react';

const meta: Meta<typeof ExpenseCategorizer> = {
  title: 'Fintech/ExpenseCategorizer',
  component: ExpenseCategorizer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExpenseCategorizer>;

export const Default: Story = {
  args: {},
};

export const InContainer: Story = {
  render: () => (
    <div className="max-w-2xl mx-auto">
      <ExpenseCategorizer />
    </div>
  ),
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => (
    <div className="max-w-sm mx-auto">
      <ExpenseCategorizer />
    </div>
  ),
};

export const DarkMode: Story = {
  parameters: {
    themes: { themeOverride: 'dark' },
  },
  render: () => (
    <div className="dark max-w-2xl mx-auto">
      <ExpenseCategorizer />
    </div>
  ),
};

export const InDashboard: Story = {
  render: () => (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Categorización de Gastos</h2>
        <span className="text-xs text-text-secondary">Arrastra transacciones a las categorías</span>
      </div>
      <ExpenseCategorizer />
    </div>
  ),
};

export const FintechUseCase: Story = {
  parameters: {
    docs: {
      description: {
        story: 'ExpenseCategorizer used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};

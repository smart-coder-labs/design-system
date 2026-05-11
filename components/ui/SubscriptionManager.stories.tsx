import type { Meta, StoryObj } from '@storybook/react';
import { SubscriptionManager } from './SubscriptionManager';
import React from 'react';

const meta: Meta<typeof SubscriptionManager> = {
  title: 'Fintech/SubscriptionManager',
  component: SubscriptionManager,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SubscriptionManager>;

export const Default: Story = {
  args: {},
};

export const InContainer: Story = {
  render: () => (
    <div className="max-w-2xl mx-auto">
      <SubscriptionManager />
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
      <SubscriptionManager />
    </div>
  ),
};

export const DarkMode: Story = {
  parameters: {
    themes: { themeOverride: 'dark' },
  },
  render: () => (
    <div className="dark max-w-2xl mx-auto">
      <SubscriptionManager />
    </div>
  ),
};

export const InDashboardLayout: Story = {
  render: () => (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Gestión de Suscripciones</h2>
          <p className="text-sm text-text-secondary">Administra todas tus suscripciones activas en un solo lugar</p>
        </div>
        <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xs font-semibold rounded-full">
          4 activas
        </span>
      </div>
      <SubscriptionManager />
    </div>
  ),
};

export const MonthlyCostSummary: Story = {
  render: () => (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="p-4 bg-background-secondary rounded-xl border border-border-primary">
        <div className="flex justify-between items-center">
          <span className="text-sm text-text-secondary">Total mensual en suscripciones</span>
          <span className="text-xl font-bold">$1,246.00</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-text-secondary">Proyectado anual</span>
          <span className="text-lg font-semibold text-orange-500">$14,952.00</span>
        </div>
      </div>
      <SubscriptionManager />
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HyperPersonalizedWidgetFeed } from './HyperPersonalizedWidgetFeed';

const meta: Meta<typeof HyperPersonalizedWidgetFeed> = {
  title: 'Fintech/Dashboard/HyperPersonalizedWidgetFeed',
  component: HyperPersonalizedWidgetFeed,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithPremiumUser: Story = {
  args: {
    premium: true,
  },
};

export const WithBudgetAlerts: Story = {
  args: {
    showBudgetAlerts: true,
  },
};

export const FullFinancialFeed: Story = {
  args: {
    premium: true,
    showBudgetAlerts: true,
    showSpendingInsights: true,
    showSavingsGoals: true,
  },
};

export const CustomWidgets: Story = {
  args: {
    premium: true,
    showBudgetAlerts: false,
    showSpendingInsights: true,
    showSavingsGoals: false,
  },
};

export const NoWidgetsVisible: Story = {
  args: {
    premium: false,
    showBudgetAlerts: false,
    showSpendingInsights: false,
    showSavingsGoals: false,
    initialWidgets: [
      { id: 'w1', title: 'Saldo Principal', type: 'balance', visible: false, order: 1 },
      { id: 'w2', title: 'Análisis de Gastos', type: 'spending', visible: false, order: 2 },
    ],
  },
};

export const ManyWidgets: Story = {
  args: {
    premium: true,
    showBudgetAlerts: true,
    showSpendingInsights: true,
    showSavingsGoals: true,
    initialWidgets: [
      { id: 'w1', title: 'Saldo Principal', type: 'balance', visible: true, order: 1 },
      { id: 'w2', title: 'Análisis de Gastos', type: 'spending', visible: true, order: 2 },
      { id: 'w3', title: 'Portafolio Cripto', type: 'crypto', visible: true, order: 3 },
      { id: 'w4', title: 'Metas de Ahorro', type: 'savings', visible: true, order: 4 },
      { id: 'w5', title: 'Préstamos Activos', type: 'balance', visible: true, order: 5 },
      { id: 'w6', title: 'Inversiones', type: 'savings', visible: true, order: 6 },
      { id: 'w7', title: 'Recompensas', type: 'spending', visible: true, order: 7 },
      { id: 'w8', title: 'Tarjetas Virtuales', type: 'crypto', visible: true, order: 8 },
    ],
  },
};

export const DarkMode: Story = {
  args: {
    premium: true,
    showBudgetAlerts: true,
  },
  decorators: [
    (Story) => (
      <div className="dark p-4 bg-gray-900 min-h-screen">
        <Story />
      </div>
    ),
  ],
};

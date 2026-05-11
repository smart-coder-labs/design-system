import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HyperPersonalizedWidgetFeed } from './HyperPersonalizedWidgetFeed';

const meta: Meta<typeof HyperPersonalizedWidgetFeed> = {
  title: 'Fintech/HyperPersonalizedWidgetFeed',
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

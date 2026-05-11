import type { Meta, StoryObj } from '@storybook/react';
import { HyperPersonalizedWidgetFeed } from './HyperPersonalizedWidgetFeed';
import React from 'react';

const meta: Meta<typeof HyperPersonalizedWidgetFeed> = {
  title: 'Fintech/HyperPersonalizedWidgetFeed',
  component: HyperPersonalizedWidgetFeed,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HyperPersonalizedWidgetFeed>;

export const Default: Story = {
  args: {},
};

export const InContainer: Story = {
  render: () => (
    <div className="max-w-4xl mx-auto">
      <HyperPersonalizedWidgetFeed />
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
      <HyperPersonalizedWidgetFeed />
    </div>
  ),
};

export const DarkMode: Story = {
  parameters: {
    themes: { themeOverride: 'dark' },
  },
  render: () => (
    <div className="dark max-w-4xl mx-auto">
      <HyperPersonalizedWidgetFeed />
    </div>
  ),
};

export const DashboardLayout: Story = {
  render: () => (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Mi Dashboard</h2>
          <p className="text-sm text-text-secondary">Widgets personalizados para tu control financiero</p>
        </div>
      </div>
      <HyperPersonalizedWidgetFeed />
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Email Address',
  },
};

export const Required: Story = {
  args: {
    children: 'Email Address',
    required: true,
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="space-y-1">
      <Label htmlFor="email" required>Email Address</Label>
      <input id="email" type="email" placeholder="you@example.com" className="w-full px-3 py-2 border border-border-primary rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue bg-surface-primary" />
    </div>
  ),
};

export const WithForm: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div className="space-y-1">
        <Label htmlFor="name" required>Full Name</Label>
        <input id="name" type="text" placeholder="Cesar Ruiz" className="w-full px-3 py-2 border border-border-primary rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue bg-surface-primary" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="email2" required>Email</Label>
        <input id="email2" type="email" placeholder="cesar@example.com" className="w-full px-3 py-2 border border-border-primary rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue bg-surface-primary" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="accountType">Account Type</Label>
        <select id="accountType" className="w-full px-3 py-2 border border-border-primary rounded-xl text-sm bg-surface-primary">
          <option>Checking</option>
          <option>Savings</option>
          <option>Investment</option>
        </select>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Field',
    disabled: true,
  },
};

export const WithHint: Story = {
  render: () => (
    <div className="space-y-1">
      <Label htmlFor="password" required>Password</Label>
      <input id="password" type="password" placeholder="Enter your password" className="w-full px-3 py-2 border border-border-primary rounded-xl text-sm bg-surface-primary" />
      <p className="text-xs text-text-tertiary mt-1">Must be at least 8 characters with a number and symbol</p>
    </div>
  ),
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
export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

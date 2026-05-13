import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from './Panel';

const meta = {
  title: 'Components/Panel',
  component: Panel,
  tags: ['autodocs'],
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Account Overview',
    children: <p className="text-text-secondary">Your account balance and recent activity will appear here.</p>,
  },
};

export const Elevated: Story = {
  args: {
    title: 'Portfolio Performance',
    variant: 'elevated',
    children: <p className="text-text-secondary">+12.4% this quarter across all assets.</p>,
  },
};

export const Bordered: Story = {
  args: {
    title: 'Security Settings',
    variant: 'bordered',
    children: <p className="text-text-secondary">Manage your password, 2FA, and session settings.</p>,
  },
};

export const WithActions: Story = {
  args: {
    title: 'Recent Transactions',
    actions: <button className="text-sm text-accent-blue hover:underline">View All</button>,
    children: <p className="text-text-secondary">Latest 5 transactions displayed below.</p>,
  },
};

export const NoTitle: Story = {
  args: {
    children: (
      <div className="p-4">
        <p className="text-text-primary">Content panel without a title header.</p>
      </div>
    ),
  },
};

export const Compact: Story = {
  args: {
    title: 'Quick Stats',
    compact: true,
    children: <p className="text-text-secondary text-sm">Compact panel for dashboard widgets.</p>,
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
export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

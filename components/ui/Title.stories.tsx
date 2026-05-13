import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

const meta = {
    title: 'Typography/Title',
    component: Title,
    tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
    args: {
        level: 1,
        children: 'Portfolio Dashboard',
    },
};

export const Levels: Story = {
    render: () => (
        <div className="space-y-3">
            <Title level={1}>h1 — Portfolio Dashboard</Title>
            <Title level={2}>h2 — Account Summary</Title>
            <Title level={3}>h3 — Recent Transactions</Title>
            <Title level={4}>h4 — Investment Performance</Title>
            <Title level={5}>h5 — Spending Categories</Title>
            <Title level={6}>h6 — Settings & Preferences</Title>
        </div>
    ),
};

export const Weights: Story = {
    render: () => (
        <div className="space-y-3">
            <Title level={3} weight="normal">Normal weight title</Title>
            <Title level={3} weight="medium">Medium weight title</Title>
            <Title level={3} weight="semibold">Semibold weight title</Title>
            <Title level={3} weight="bold">Bold weight title</Title>
            <Title level={3} weight="black">Black weight title</Title>
        </div>
    ),
};

export const Gradient: Story = {
    args: {
        level: 2,
        gradient: true,
        children: 'Premium Investment Portfolio',
    },
};

export const Colors: Story = {
    render: () => (
        <div className="space-y-3">
            <Title level={4} color="primary">Primary — default color</Title>
            <Title level={4} color="accent">Accent — highlighted titles</Title>
            <Title level={4} color="success">Success — positive metrics</Title>
            <Title level={4} color="warning">Warning — cautionary info</Title>
            <Title level={4} color="error">Error — negative metrics</Title>
        </div>
    ),
};

export const Truncated: Story = {
    args: {
        level: 3,
        truncate: true,
        children: 'This is a very long title that should be truncated when it exceeds the available space to avoid breaking the layout',
        style: { maxWidth: 300 },
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

import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeader } from './SectionHeader';

const meta = {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Portfolio Overview',
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'Recent Transactions',
    subtitle: 'Your latest 10 transactions across all accounts',
  },
};

export const WithAction: Story = {
  args: {
    title: 'Watchlist',
    action: { label: 'Manage', onClick: () => alert('Manage clicked') },
  },
};

export const WithAll: Story = {
  args: {
    title: 'Market Trends',
    subtitle: '24-hour market movement',
    action: { label: 'View All', onClick: () => alert('View All clicked') },
  },
};

export const Large: Story = {
  args: {
    title: 'Account Settings',
    variant: 'large',
  },
};

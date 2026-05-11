import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Dashboard', icon: 'layout-dashboard', active: true },
      { label: 'Portfolio', icon: 'pie-chart' },
      { label: 'Transactions', icon: 'arrow-left-right' },
      { label: 'Markets', icon: 'trending-up' },
      { label: 'Settings', icon: 'settings' },
    ],
    onSelect: (item: any) => console.log('Selected:', item),
  },
};

export const Collapsed: Story = {
  args: {
    items: [
      { label: 'Dashboard', icon: 'layout-dashboard', active: true },
      { label: 'Portfolio', icon: 'pie-chart' },
      { label: 'Transactions', icon: 'arrow-left-right' },
      { label: 'Markets', icon: 'trending-up' },
    ],
    collapsed: true,
    onSelect: (item: any) => console.log('Selected:', item),
  },
};

export const WithSections: Story = {
  args: {
    items: [
      { label: 'Overview', icon: 'home', section: 'Main' },
      { label: 'Analytics', icon: 'bar-chart', section: 'Main' },
      { label: 'Wallet', icon: 'wallet', section: 'Finance' },
      { label: 'Transfers', icon: 'send', section: 'Finance' },
      { label: 'Security', icon: 'shield', section: 'Settings' },
    ],
    onSelect: (item: any) => console.log('Selected:', item),
  },
};

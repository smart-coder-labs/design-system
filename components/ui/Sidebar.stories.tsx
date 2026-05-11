import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { fn } from '@storybook/test';
import { LayoutDashboard, PieChart, ArrowLeftRight, TrendingUp, Settings, Wallet, Send, Shield, Bell, BarChart3 } from 'lucide-react';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  { label: 'Dashboard', icon: <LayoutDashboard size={18} />, active: true, onClick: fn() },
  { label: 'Portfolio', icon: <PieChart size={18} />, onClick: fn() },
  { label: 'Transactions', icon: <ArrowLeftRight size={18} />, onClick: fn() },
  { label: 'Markets', icon: <TrendingUp size={18} />, onClick: fn() },
  { label: 'Settings', icon: <Settings size={18} />, onClick: fn() },
];

export const Default: Story = {
  args: {
    items: defaultItems,
  },
};

export const Collapsed: Story = {
  args: {
    items: defaultItems,
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 60 }}>
        <Story />
      </div>
    ),
  ],
};

export const WithSections: Story = {
  args: {
    items: [
      { label: 'Overview', icon: <LayoutDashboard size={18} />, active: true, onClick: fn() },
      { label: 'Analytics', icon: <BarChart3 size={18} />, onClick: fn() },
      { label: 'Wallet', icon: <Wallet size={18} />, onClick: fn() },
      { label: 'Transfers', icon: <Send size={18} />, onClick: fn() },
      { label: 'Notifications', icon: <Bell size={18} />, onClick: fn() },
      { label: 'Security', icon: <Shield size={18} />, onClick: fn() },
    ],
  },
};

export const WithHrefLinks: Story = {
  args: {
    items: [
      { label: 'Dashboard', icon: <LayoutDashboard size={18} />, href: '/dashboard', active: true },
      { label: 'Portfolio', icon: <PieChart size={18} />, href: '/portfolio' },
      { label: 'Transactions', icon: <ArrowLeftRight size={18} />, href: '/transactions' },
    ],
  },
};

export const ManyItems: Story = {
  args: {
    items: Array.from({ length: 15 }, (_, i) => ({
      label: `Menu Item ${i + 1}`,
      icon: i % 2 === 0 ? <LayoutDashboard size={18} /> : <Settings size={18} />,
      active: i === 0,
      onClick: fn(),
    })),
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      { label: 'Dashboard', icon: <LayoutDashboard size={18} />, active: true, onClick: fn() },
    ],
  },
};

export const DarkActive: Story = {
  args: {
    items: [
      { label: 'Dashboard', icon: <LayoutDashboard size={18} />, onClick: fn() },
      { label: 'Portfolio', icon: <PieChart size={18} />, active: true, onClick: fn() },
      { label: 'Transactions', icon: <ArrowLeftRight size={18} />, onClick: fn() },
    ],
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

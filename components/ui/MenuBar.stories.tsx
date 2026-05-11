import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MenuBar } from './MenuBar';
import { action } from '@storybook/addon-actions';
import { File, Settings, HelpCircle, LogOut, CreditCard, TrendingUp, Users, Shield } from 'lucide-react';

const meta: Meta<typeof MenuBar> = {
  title: 'Components/MenuBar',
  component: MenuBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { id: 'file', label: 'File', icon: <File className="w-4 h-4" />, onClick: action('file') },
      { id: 'settings', label: 'Settings', icon: <Settings className="w-4 h-4" />, onClick: action('settings') },
      { id: 'help', label: 'Help', icon: <HelpCircle className="w-4 h-4" />, onClick: action('help') },
    ],
  },
};

export const BankingMenu: Story = {
  args: {
    items: [
      { id: 'accounts', label: 'Accounts', icon: <CreditCard className="w-4 h-4" />, onClick: action('accounts'), active: true },
      { id: 'investments', label: 'Investments', icon: <TrendingUp className="w-4 h-4" />, onClick: action('investments') },
      { id: 'beneficiaries', label: 'Beneficiaries', icon: <Users className="w-4 h-4" />, onClick: action('beneficiaries') },
      { id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" />, onClick: action('security') },
    ],
  },
};

export const CollapsibleMenu: Story = {
  args: {
    items: [
      { id: 'dashboard', label: 'Dashboard', onClick: action('Dashboard') },
      { id: 'transactions', label: 'Transactions', onClick: action('Transactions') },
      { id: 'analytics', label: 'Analytics', onClick: action('Analytics') },
      { id: 'settings', label: 'Settings', onClick: action('Settings') },
    ],
    collapsible: true,
  },
};

export const Collapsed: Story = {
  args: {
    items: [
      { id: 'dash', label: 'Dashboard', icon: <CreditCard className="w-4 h-4" />, onClick: action('Dashboard') },
      { id: 'tx', label: 'Transactions', icon: <File className="w-4 h-4" />, onClick: action('Transactions') },
      { id: 'inv', label: 'Investments', icon: <TrendingUp className="w-4 h-4" />, onClick: action('Investments') },
      { id: 'log', label: 'Logout', icon: <LogOut className="w-4 h-4" />, onClick: action('Logout') },
    ],
    collapsed: true,
  },
};

export const WithActiveItem: Story = {
  args: {
    items: [
      { id: 'dashboard', label: 'Dashboard', onClick: action('Dashboard') },
      { id: 'transactions', label: 'Transactions', onClick: action('Transactions'), active: true },
      { id: 'reports', label: 'Reports', onClick: action('Reports') },
    ],
  },
};

export const ManyItems: Story = {
  args: {
    items: Array.from({ length: 8 }, (_, i) => ({
      id: `item-${i}`,
      label: `Menu Item ${i + 1}`,
      onClick: action(`item-${i}`),
    })),
  },
};

export const WithSubItems: Story = {
  args: {
    items: [
      { id: 'file', label: 'File', onClick: action('File') },
      { id: 'export', label: 'Export Data', onClick: action('Export') },
      { id: 'preferences', label: 'Preferences', onClick: action('Preferences') },
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

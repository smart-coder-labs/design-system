import type { Meta, StoryObj } from '@storybook/react';
import { NavigationDrawer } from './NavigationDrawer';
import { Home, TrendingUp, Wallet, CreditCard, Settings, HelpCircle, BarChart3, Bell, LogOut, PiggyBank, Shield, Send } from 'lucide-react';
import React from 'react';

const meta: Meta<typeof NavigationDrawer> = {
  title: 'Components/NavigationDrawer',
  component: NavigationDrawer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
  { id: 'investments', label: 'Investments', icon: <TrendingUp className="w-5 h-5" /> },
  { id: 'wallet', label: 'Wallet', icon: <Wallet className="w-5 h-5" /> },
  { id: 'cards', label: 'Cards', icon: <CreditCard className="w-5 h-5" /> },
  { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
  { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
];

export const Default: Story = {
  args: {
    items: navItems,
    activeItemId: 'dashboard',
    onItemClick: (id) => console.log('Clicked:', id),
    onClose: () => console.log('Close drawer'),
    open: true,
  },
};

export const GlassVariant: Story = {
  args: {
    items: navItems,
    activeItemId: 'investments',
    onItemClick: (id) => console.log('Clicked:', id),
    onClose: () => console.log('Close'),
    variant: 'glass',
    open: true,
  },
};

export const BankingNavigation: Story = {
  args: {
    items: [
      { id: 'accounts', label: 'Accounts', icon: <Wallet className="w-5 h-5" /> },
      { id: 'transfer', label: 'Transfer', icon: <Send className="w-5 h-5" /> },
      { id: 'payments', label: 'Payments', icon: <CreditCard className="w-5 h-5" /> },
      { id: 'investments', label: 'Investments', icon: <TrendingUp className="w-5 h-5" /> },
      { id: 'savings', label: 'Savings', icon: <PiggyBank className="w-5 h-5" /> },
      { id: 'security', label: 'Security', icon: <Shield className="w-5 h-5" /> },
    ],
    activeItemId: 'accounts',
    onItemClick: (id) => console.log('Clicked:', id),
    onClose: () => console.log('Close'),
    variant: 'glass',
    open: true,
    headerTitle: 'FinBank',
    headerSubtitle: 'Personal Banking',
  },
};

export const WithHeader: Story = {
  args: {
    items: navItems,
    activeItemId: 'dashboard',
    onItemClick: (id) => console.log('Clicked:', id),
    onClose: () => console.log('Close'),
    open: true,
    headerTitle: 'FinFlow',
    headerSubtitle: 'cesar@email.com',
  },
};

export const OpenState: Story = {
  args: {
    items: navItems,
    activeItemId: 'wallet',
    onItemClick: (id) => console.log('Clicked:', id),
    onClose: () => console.log('Close'),
    open: true,
  },
};

export const NotificationsBadge: Story = {
  args: {
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" />, badge: 3 },
      { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" />, badge: 7 },
      { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
    ],
    activeItemId: 'dashboard',
    onItemClick: (id) => console.log('Clicked:', id),
    onClose: () => console.log('Close'),
    open: true,
  },
};

export const WithFooter: Story = {
  args: {
    items: navItems,
    activeItemId: 'settings',
    onItemClick: (id) => console.log('Clicked:', id),
    onClose: () => console.log('Close'),
    open: true,
    headerTitle: 'Cesar Ruiz',
    headerSubtitle: 'Premium Member',
    footer: (
      <div className="p-4 border-t border-border-primary">
        <button onClick={() => console.log('Logout')} className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition w-full">
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Sign Out</span>
        </button>
      </div>
    ),
  },
};

export const InteractiveDrawer: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = React.useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [active, setActive] = React.useState('dashboard');

    return (
      <div className="h-[500px] relative">
        <button onClick={() => setOpen(!open)} className="absolute top-4 left-4 z-50 px-4 py-2 bg-accent-blue text-white rounded-xl text-sm font-semibold">
          {open ? 'Close' : 'Open'} Drawer
        </button>
        <NavigationDrawer
          items={navItems}
          activeItemId={active}
          onItemClick={(id) => setActive(id)}
          onClose={() => setOpen(false)}
          open={open}
          headerTitle="FinFlow"
        />
      </div>
    );
  },
};

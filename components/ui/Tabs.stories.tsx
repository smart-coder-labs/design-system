import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { useState } from 'react';

const meta = {
    title: 'Components/Tabs',
    component: Tabs,
    tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Tabs defaultValue="overview">
            <Tabs.List>
                <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
                <Tabs.Trigger value="transactions">Transactions</Tabs.Trigger>
                <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="overview" className="p-4 text-sm text-text-secondary">Account overview with balance and recent activity</Tabs.Content>
            <Tabs.Content value="transactions" className="p-4 text-sm text-text-secondary">List of all recent transactions</Tabs.Content>
            <Tabs.Content value="analytics" className="p-4 text-sm text-text-secondary">Spending analytics and charts</Tabs.Content>
        </Tabs>
    ),
};

export const SegmentedVariant: Story = {
    render: () => (
        <Tabs defaultValue="buy">
            <Tabs.List variant="segmented">
                <Tabs.Trigger value="buy">Buy</Tabs.Trigger>
                <Tabs.Trigger value="sell">Sell</Tabs.Trigger>
                <Tabs.Trigger value="swap">Swap</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="buy" className="p-4 text-sm text-text-secondary">Buy stocks, crypto, and ETFs</Tabs.Content>
            <Tabs.Content value="sell" className="p-4 text-sm text-text-secondary">Sell your holdings</Tabs.Content>
            <Tabs.Content value="swap" className="p-4 text-sm text-text-secondary">Swap between currencies and assets</Tabs.Content>
        </Tabs>
    ),
};

export const WithContent: Story = {
    render: () => (
        <Tabs defaultValue="checking">
            <Tabs.List>
                <Tabs.Trigger value="checking">Checking</Tabs.Trigger>
                <Tabs.Trigger value="savings">Savings</Tabs.Trigger>
                <Tabs.Trigger value="credit">Credit Card</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="checking" className="p-4 space-y-3">
                <div className="flex justify-between"><span className="text-sm text-text-secondary">Balance</span><span className="text-sm font-bold">$12,450.80</span></div>
                <div className="flex justify-between"><span className="text-sm text-text-secondary">Account Number</span><span className="text-sm font-mono">••••4582</span></div>
            </Tabs.Content>
            <Tabs.Content value="savings" className="p-4 space-y-3">
                <div className="flex justify-between"><span className="text-sm text-text-secondary">Balance</span><span className="text-sm font-bold text-green-600">$45,200.00</span></div>
                <div className="flex justify-between"><span className="text-sm text-text-secondary">APY</span><span className="text-sm font-bold">4.5%</span></div>
            </Tabs.Content>
            <Tabs.Content value="credit" className="p-4 space-y-3">
                <div className="flex justify-between"><span className="text-sm text-text-secondary">Available Credit</span><span className="text-sm font-bold">$8,500</span></div>
                <div className="flex justify-between"><span className="text-sm text-text-secondary">Current Balance</span><span className="text-sm font-bold">$2,340.50</span></div>
            </Tabs.Content>
        </Tabs>
    ),
};

export const DisabledTab: Story = {
    render: () => (
        <Tabs defaultValue="portfolio">
            <Tabs.List>
                <Tabs.Trigger value="portfolio">Portfolio</Tabs.Trigger>
                <Tabs.Trigger value="history">History</Tabs.Trigger>
                <Tabs.Trigger value="settings" disabled>Settings (Coming Soon)</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="portfolio" className="p-4 text-sm text-text-secondary">Your investment portfolio overview</Tabs.Content>
            <Tabs.Content value="history" className="p-4 text-sm text-text-secondary">Transaction history and statements</Tabs.Content>
        </Tabs>
    ),
};

export const InteractiveTab: Story = {
    render: () => {
        const [activeTab, setActiveTab] = useState('balance');
        const balances: Record<string, { label: string; value: string; change: string }> = {
            balance: { label: 'Total Balance', value: '$124,532.80', change: '+3.2%' },
            invested: { label: 'Invested', value: '$78,200.00', change: '+12.4%' },
            available: { label: 'Available Cash', value: '$46,332.80', change: '+1.1%' },
        };
        const current = balances[activeTab];
        return (
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <Tabs.List>
                    <Tabs.Trigger value="balance">Balance</Tabs.Trigger>
                    <Tabs.Trigger value="invested">Invested</Tabs.Trigger>
                    <Tabs.Trigger value="available">Available</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value={activeTab} className="p-6 text-center space-y-2">
                    <p className="text-xs text-text-secondary">{current.label}</p>
                    <p className="text-4xl font-bold">{current.value}</p>
                    <p className="text-sm text-green-600">{current.change} this month</p>
                </Tabs.Content>
            </Tabs>
        );
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    render: () => (
        <Tabs defaultValue="dashboard">
            <Tabs.List>
                <Tabs.Trigger value="dashboard">Dashboard</Tabs.Trigger>
                <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="dashboard" className="p-4 text-sm text-text-secondary">Dashboard content in dark mode</Tabs.Content>
            <Tabs.Content value="reports" className="p-4 text-sm text-text-secondary">Reports and statements</Tabs.Content>
        </Tabs>
    ),
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
export const FintechUseCase: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Tabs used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};

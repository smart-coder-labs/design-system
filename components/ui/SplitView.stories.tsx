import type { Meta, StoryObj } from '@storybook/react';
import { SplitView } from './SplitView';
import { useState } from 'react';

const meta = {
    title: 'Components/SplitView',
    component: SplitView,
    tags: ['autodocs'],
} satisfies Meta<typeof SplitView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        left: (
            <div className="space-y-2">
                <h3 className="text-sm font-semibold">Folders</h3>
                {['Documents', 'Images', 'Transactions', 'Reports'].map(folder => (
                    <div key={folder} className="p-2 rounded-lg bg-surface-secondary cursor-pointer hover:bg-surface-tertiary text-sm">{folder}</div>
                ))}
            </div>
        ),
        right: (
            <div className="h-full">
                <h2 className="text-lg font-bold mb-4">Transactions</h2>
                <div className="space-y-2">
                    {[
                        { name: 'Invoice_2025.pdf', date: 'May 10', size: '245 KB' },
                        { name: 'Bank_Statement_Q2.csv', date: 'May 8', size: '1.2 MB' },
                        { name: 'Tax_Receipts_2025.pdf', date: 'May 5', size: '890 KB' },
                        { name: 'Portfolio_Summary.xlsx', date: 'Apr 30', size: '2.4 MB' },
                    ].map(file => (
                        <div key={file.name} className="flex justify-between p-2 rounded-lg hover:bg-surface-secondary text-sm cursor-pointer">
                            <span>{file.name}</span>
                            <span className="text-text-secondary">{file.size}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
        initialLeftSize: '280px',
        minLeftSize: 200,
        maxLeftSize: 400,
    },
};

export const FintechDashboard: Story = {
    args: {
        left: (
            <div className="space-y-3">
                <h3 className="text-sm font-semibold">Navigation</h3>
                <div className="space-y-1">
                    {[
                        { label: 'Overview', icon: '📊', active: true },
                        { label: 'Accounts', icon: '🏦' },
                        { label: 'Cards', icon: '💳' },
                        { label: 'Investments', icon: '📈' },
                        { label: 'Loans', icon: '💰' },
                        { label: 'Settings', icon: '⚙️' },
                    ].map(item => (
                        <div key={item.label} className={`flex items-center gap-2 p-2 rounded-lg text-sm cursor-pointer ${item.active ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600' : 'hover:bg-surface-secondary'}`}>
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
        right: (
            <div className="space-y-6">
                <h2 className="text-xl font-bold">Portfolio Overview</h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-surface-secondary rounded-xl"><p className="text-xs text-text-secondary">Total Balance</p><p className="text-2xl font-bold">$124,532</p></div>
                    <div className="p-4 bg-surface-secondary rounded-xl"><p className="text-xs text-text-secondary">Today's P&L</p><p className="text-2xl font-bold text-green-600">+$2,340</p></div>
                    <div className="p-4 bg-surface-secondary rounded-xl"><p className="text-xs text-text-secondary">Investments</p><p className="text-2xl font-bold">18</p></div>
                </div>
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm font-medium mb-2">Recent Activity</p>
                    <div className="space-y-2 text-sm">
                        {['Bought 10 AAPL @ $178.50', 'Sold 5 TSLA @ $245.00', 'Dividend received $45.00'].map((a, i) => (
                            <p key={i} className="text-text-secondary">{a}</p>
                        ))}
                    </div>
                </div>
            </div>
        ),
        initialLeftSize: '200px',
        minLeftSize: 160,
        maxLeftSize: 320,
    },
};

export const SettingsView: Story = {
    args: {
        left: (
            <div className="space-y-2">
                <h3 className="text-sm font-semibold mb-3">Settings</h3>
                {[
                    { label: 'Profile', active: true },
                    { label: 'Security' },
                    { label: 'Notifications' },
                    { label: 'Privacy' },
                    { label: 'Preferences' },
                ].map(item => (
                    <div key={item.label} className={`p-2 rounded-lg text-sm cursor-pointer ${item.active ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 font-medium' : 'hover:bg-surface-secondary'}`}>{item.label}</div>
                ))}
            </div>
        ),
        right: (
            <div className="space-y-4">
                <h2 className="text-lg font-bold">Profile Settings</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div><p className="text-xs text-text-secondary mb-1">First Name</p><div className="p-2 bg-surface-secondary rounded-lg text-sm">John</div></div>
                    <div><p className="text-xs text-text-secondary mb-1">Last Name</p><div className="p-2 bg-surface-secondary rounded-lg text-sm">Doe</div></div>
                    <div className="col-span-2"><p className="text-xs text-text-secondary mb-1">Email</p><div className="p-2 bg-surface-secondary rounded-lg text-sm">john.doe@example.com</div></div>
                </div>
            </div>
        ),
        initialLeftSize: '220px',
        minLeftSize: 160,
        maxLeftSize: 300,
    },
};

export const MinimalLeft: Story = {
    args: {
        left: (
            <div className="flex flex-col items-center gap-3 pt-4">
                {['🏠', '💳', '📊'].map((icon, i) => (
                    <div key={i} className={`w-10 h-10 flex items-center justify-center rounded-xl text-lg cursor-pointer ${i === 0 ? 'bg-blue-100 dark:bg-blue-900/30' : 'hover:bg-surface-secondary'}`}>{icon}</div>
                ))}
            </div>
        ),
        right: (
            <div className="h-full">
                <h2 className="text-lg font-bold">Home</h2>
                <p className="text-sm text-text-secondary mt-2">Welcome to your dashboard</p>
            </div>
        ),
        initialLeftSize: '64px',
        minLeftSize: 48,
        maxLeftSize: 80,
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        left: <div className="text-sm p-2"><h3 className="font-semibold mb-3">Menu</h3><div className="space-y-2">{['Dashboard', 'Accounts', 'Reports'].map(m => <div key={m} className="p-2 rounded-lg hover:bg-surface-secondary cursor-pointer">{m}</div>)}</div></div>,
        right: <div className="h-full"><h2 className="text-lg font-bold">Dashboard</h2><p className="text-sm text-text-secondary mt-2">Content area</p></div>,
        initialLeftSize: '200px',
    },
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
        story: 'SplitView used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};

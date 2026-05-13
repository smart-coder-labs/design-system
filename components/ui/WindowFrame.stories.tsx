import type { Meta, StoryObj } from '@storybook/react';
import { WindowFrame } from './WindowFrame';

const meta = {
    title: 'Components/WindowFrame',
    component: WindowFrame,
    tags: ['autodocs'],
} satisfies Meta<typeof WindowFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Transaction Details',
        children: (
            <div className="p-4 space-y-3">
                <div className="flex justify-between"><span className="text-sm text-text-secondary">Amount</span><span className="text-sm font-bold">$5,000.00</span></div>
                <div className="flex justify-between"><span className="text-sm text-text-secondary">Recipient</span><span className="text-sm font-medium">Alice Johnson</span></div>
                <div className="flex justify-between"><span className="text-sm text-text-secondary">Status</span><span className="text-sm text-green-600 font-medium">Completed</span></div>
            </div>
        ),
    },
};

export const WithSubtitle: Story = {
    args: {
        title: 'Account Settings',
        subtitle: 'Manage your personal information and preferences',
        children: (
            <div className="p-4 space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-border-primary">
                    <span className="text-sm">Profile</span>
                    <span className="text-xs text-blue-500 cursor-pointer">Edit</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border-primary">
                    <span className="text-sm">Security</span>
                    <span className="text-xs text-blue-500 cursor-pointer">Edit</span>
                </div>
                <div className="flex items-center justify-between py-2">
                    <span className="text-sm">Notifications</span>
                    <span className="text-xs text-blue-500 cursor-pointer">Edit</span>
                </div>
            </div>
        ),
    },
};

export const InvestmentDashboard: Story = {
    args: {
        title: 'Portfolio Overview',
        subtitle: 'Your investment summary for Q2 2025',
        children: (
            <div className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-surface-secondary rounded-lg text-center">
                        <p className="text-xs text-text-secondary">Total Value</p>
                        <p className="text-lg font-bold">$124,532</p>
                    </div>
                    <div className="p-3 bg-surface-secondary rounded-lg text-center">
                        <p className="text-xs text-text-secondary">Total Return</p>
                        <p className="text-lg font-bold text-green-600">+12.4%</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-text-secondary">Holdings</h4>
                    <div className="flex justify-between text-sm"><span>AAPL</span><span>$8,925 <span className="text-green-600">+2.3%</span></span></div>
                    <div className="flex justify-between text-sm"><span>NVDA</span><span>$13,202 <span className="text-green-600">+4.2%</span></span></div>
                    <div className="flex justify-between text-sm"><span>VOO</span><span>$15,200 <span className="text-green-600">+1.5%</span></span></div>
                </div>
            </div>
        ),
    },
};

export const LargeContent: Story = {
    args: {
        title: 'Transaction History',
        children: (
            <div className="p-4 space-y-2">
                {[
                    { name: 'Salary Deposit', amount: '+$4,500', date: 'Today' },
                    { name: 'Amazon Purchase', amount: '-$89.99', date: 'Yesterday' },
                    { name: 'Uber Ride', amount: '-$24.50', date: '2 days ago' },
                    { name: 'Netflix', amount: '-$15.99', date: '3 days ago' },
                    { name: 'Electric Bill', amount: '-$134.50', date: '5 days ago' },
                    { name: 'Starbucks', amount: '-$5.75', date: '5 days ago' },
                    { name: 'Dividend', amount: '+$45.00', date: '1 week ago' },
                ].map((tx, i) => (
                    <div key={i} className="flex justify-between py-2 border-b border-border-primary last:border-0">
                        <div><span className="text-sm">{tx.name}</span></div>
                        <div className="flex gap-4"><span className="text-xs text-text-secondary">{tx.date}</span><span className={`text-sm font-medium ${tx.amount.startsWith('+') ? 'text-green-600' : ''}`}>{tx.amount}</span></div>
                    </div>
                ))}
            </div>
        ),
    },
};

export const Minimal: Story = {
    args: {
        title: 'Quick Transfer',
        children: (
            <div className="p-4 text-center text-sm text-text-secondary">
                Send money to your contacts instantly
            </div>
        ),
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        title: 'Security Settings (Dark)',
        children: (
            <div className="p-4 space-y-3">
                <div className="flex justify-between py-2 border-b border-border-primary">
                    <span className="text-sm">Two-Factor Auth</span>
                    <span className="text-xs text-green-500">Active</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border-primary">
                    <span className="text-sm">Last Login</span>
                    <span className="text-xs text-text-secondary">2 minutes ago</span>
                </div>
            </div>
        ),
    },
};

export const EmptyFrame: Story = {
    args: {
        title: 'No Content',
        children: (
            <div className="p-8 text-center text-sm text-text-secondary">
                This window has no content yet.
            </div>
        ),
    },
};

export const LoadingState: Story = {
  parameters: {
    docs: {
      description: {
        story: 'WindowFrame in a loading state, showing an empty frame while content is being fetched or computed.',
      },
    },
  },
};

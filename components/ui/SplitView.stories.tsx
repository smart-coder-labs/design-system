import type { Meta, StoryObj } from '@storybook/react';
import { SplitView } from './SplitView';

const meta = {
    title: 'Components/SplitView',
    component: SplitView,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A macOS Finder-style split layout with a resizable left panel and a right content area. Responsive: stacks vertically on mobile.',
            },
        },
    },
} satisfies Meta<typeof SplitView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        left: (
            <div className="p-4 h-full">
                <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">Accounts</h3>
                <div className="space-y-2">
                    {['Checking', 'Savings', 'Investment', 'Credit Card'].map((account) => (
                        <div key={account} className="p-2 rounded-lg bg-surface-primary cursor-pointer hover:bg-surface-secondary text-sm text-text-primary border border-border-primary">
                            {account}
                        </div>
                    ))}
                </div>
            </div>
        ),
        right: (
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-text-primary">Checking Account</h2>
                <p className="text-3xl font-semibold text-status-success">$12,450.32</p>
                <p className="text-sm text-text-tertiary mt-1">Available balance</p>
            </div>
        ),
        initialLeftSize: '240px',
        minLeftSize: 180,
        maxLeftSize: 400,
    },
};

export const EmptyLeftPanel: Story = {
    args: {
        left: (
            <div className="p-4 text-center text-text-tertiary text-sm">
                <p>No items</p>
            </div>
        ),
        right: (
            <div className="p-6 flex items-center justify-center text-text-tertiary">
                <p>Select an item from the sidebar</p>
            </div>
        ),
        initialLeftSize: '240px',
        minLeftSize: 180,
        maxLeftSize: 400,
    },
};

export const FinderStyle: Story = {
    args: {
        left: (
            <div className="p-4 text-sm">
                <div className="space-y-1">
                    {['Documents', 'Downloads', 'Desktop', 'Applications', 'Projects'].map((item) => (
                        <div key={item} className="p-1.5 rounded hover:bg-surface-secondary cursor-pointer text-text-primary">{item}</div>
                    ))}
                </div>
            </div>
        ),
        right: (
            <div className="p-6">
                <div className="grid grid-cols-4 gap-4">
                    {['Report.pdf', 'Budget.xlsx', 'Logo.png', 'Notes.md'].map((file) => (
                        <div key={file} className="p-4 rounded-lg border border-border-primary text-center cursor-pointer hover:bg-surface-secondary">
                            <div className="text-2xl mb-1">📄</div>
                            <div className="text-xs truncate text-text-primary">{file}</div>
                        </div>
                    ))}
                </div>
            </div>
        ),
        initialLeftSize: '200px',
        minLeftSize: 150,
        maxLeftSize: 350,
    },
};

export const NarrowLeftPanel: Story = {
    args: {
        left: (
            <div className="p-2 text-center">
                {['🏠', '📊', '💳', '⚙️'].map((icon, i) => (
                    <div key={i} className="p-2 rounded-lg hover:bg-surface-secondary cursor-pointer text-lg">{icon}</div>
                ))}
            </div>
        ),
        right: (
            <div className="p-6">
                <h2 className="text-xl font-bold text-text-primary">Quick Overview</h2>
                <p className="text-text-tertiary mt-2">Icon-only sidebar navigation</p>
            </div>
        ),
        initialLeftSize: '60px',
        minLeftSize: 48,
        maxLeftSize: 120,
    },
};

export const WideLeftPanel: Story = {
    args: {
        left: (
            <div className="p-4">
                <h3 className="text-sm font-semibold text-text-secondary uppercase mb-3">Navigation</h3>
                <div className="space-y-3">
                    {[
                        { name: 'Dashboard', desc: 'Overview & metrics' },
                        { name: 'Transactions', desc: 'Recent activity' },
                        { name: 'Analytics', desc: 'Deep insights' },
                        { name: 'Settings', desc: 'Preferences' },
                    ].map((item) => (
                        <div key={item.name} className="p-3 rounded-lg bg-surface-primary border border-border-primary cursor-pointer hover:bg-surface-secondary">
                            <p className="font-medium text-sm text-text-primary">{item.name}</p>
                            <p className="text-xs text-text-tertiary mt-0.5">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
        right: (
            <div className="p-6">
                <h2 className="text-2xl font-bold text-text-primary">Dashboard</h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="p-4 rounded-xl bg-surface-secondary border border-border-primary">
                        <p className="text-xs text-text-tertiary">Revenue</p>
                        <p className="text-2xl font-bold text-text-primary">$48,230</p>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-secondary border border-border-primary">
                        <p className="text-xs text-text-tertiary">Users</p>
                        <p className="text-2xl font-bold text-text-primary">2,847</p>
                    </div>
                </div>
            </div>
        ),
        initialLeftSize: '320px',
        minLeftSize: 240,
        maxLeftSize: 500,
    },
};

export const LongContentList: Story = {
    args: {
        left: (
            <div className="p-4">
                <h3 className="text-sm font-semibold text-text-secondary uppercase mb-3">Inbox</h3>
                <div className="space-y-1">
                    {Array.from({ length: 20 }, (_, i) => (
                        <div key={i} className="p-2 rounded-lg hover:bg-surface-secondary cursor-pointer text-sm text-text-primary border-b border-border-primary last:border-0">
                            Email {i + 1} — Subject line here
                        </div>
                    ))}
                </div>
            </div>
        ),
        right: (
            <div className="p-6">
                <h2 className="text-lg font-bold text-text-primary">Selected Email</h2>
                <p className="text-text-tertiary mt-4 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        ),
        initialLeftSize: '280px',
        minLeftSize: 200,
        maxLeftSize: 450,
    },
};

export const MobileStacked: Story = {
    parameters: {
        viewport: { defaultViewport: 'mobile1' },
    },
    args: {
        left: (
            <div className="p-4">
                <h3 className="text-sm font-semibold text-text-secondary uppercase mb-3">Menu</h3>
                <div className="flex gap-2">
                    {['Home', 'Browse', 'Library'].map((item) => (
                        <span key={item} className="px-3 py-1 rounded-full bg-surface-primary border border-border-primary text-xs text-text-primary">{item}</span>
                    ))}
                </div>
            </div>
        ),
        right: (
            <div className="p-4">
                <h2 className="font-bold text-text-primary">Content Area</h2>
                <p className="text-sm text-text-tertiary mt-2">On mobile, SplitView stacks left above right.</p>
            </div>
        ),
        initialLeftSize: '100%',
        minLeftSize: 150,
        maxLeftSize: 600,
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { default: 'dark' },
    },
    args: {
        left: (
            <div className="p-4 h-full">
                <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">Monitor</h3>
                <div className="space-y-2">
                    {['CPU', 'Memory', 'Disk', 'Network'].map((item) => (
                        <div key={item} className="p-2 rounded-lg bg-surface-primary cursor-pointer hover:bg-surface-secondary text-sm text-text-primary border border-border-primary">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        ),
        right: (
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-text-primary">CPU Usage</h2>
                <p className="text-3xl font-semibold text-accent-blue">32%</p>
                <p className="text-sm text-text-tertiary mt-1">Idle — 8 cores</p>
            </div>
        ),
        initialLeftSize: '220px',
        minLeftSize: 180,
        maxLeftSize: 400,
    },
};

export const TransactionDetails: Story = {
    args: {
        left: (
            <div className="p-4">
                <h3 className="text-sm font-semibold text-text-secondary uppercase mb-3">Transactions</h3>
                <div className="space-y-2">
                    {[
                        { name: 'Starbucks', amount: '-$5.50', type: 'expense' },
                        { name: 'Salary Deposit', amount: '+$4,500', type: 'income' },
                        { name: 'Amazon', amount: '-$89.99', type: 'expense' },
                        { name: 'Transfer to Savings', amount: '-$500', type: 'transfer' },
                        { name: 'Netflix', amount: '-$15.99', type: 'expense' },
                    ].map((tx) => (
                        <div key={tx.name} className="p-2 rounded-lg hover:bg-surface-secondary cursor-pointer border-b border-border-primary last:border-0">
                            <p className="text-sm text-text-primary">{tx.name}</p>
                            <p className={`text-xs font-semibold ${tx.type === 'income' ? 'text-status-success' : tx.type === 'transfer' ? 'text-accent-blue' : 'text-status-error'}`}>{tx.amount}</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
        right: (
            <div className="p-6">
                <h2 className="text-xl font-bold text-text-primary">Starbucks</h2>
                <p className="text-sm text-text-tertiary mt-2">March 15, 2026 at 09:42 AM</p>
                <div className="mt-4 p-4 rounded-xl bg-surface-secondary border border-border-primary">
                    <div className="flex justify-between text-sm">
                        <span className="text-text-tertiary">Amount</span>
                        <span className="text-status-error font-semibold">-$5.50</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                        <span className="text-text-tertiary">Category</span>
                        <span className="text-text-primary">Food & Drinks</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                        <span className="text-text-tertiary">Card</span>
                        <span className="text-text-primary">Visa ***4521</span>
                    </div>
                </div>
            </div>
        ),
        initialLeftSize: '260px',
        minLeftSize: 200,
        maxLeftSize: 350,
    },
};

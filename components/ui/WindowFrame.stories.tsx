import type { Meta, StoryObj } from '@storybook/react';
import { WindowFrame } from './WindowFrame';
import { TrendingUp, Wallet, CreditCard, BarChart3, PieChart, Activity, DollarSign, Coins, ArrowUpRight, ShieldCheck } from 'lucide-react';

const meta = {
    title: 'Components/WindowFrame',
    component: WindowFrame,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A macOS-style window frame with traffic light controls (close, minimize, maximize) and a centered title. Supports default and dark variants, and optional control buttons with callbacks.',
            },
        },
    },
} satisfies Meta<typeof WindowFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Portfolio Dashboard',
        showControls: true,
        children: (
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Account Summary</h3>
                <p className="text-3xl font-bold text-status-success">$124,532.00</p>
                <p className="text-sm text-text-tertiary mt-1">Total Balance</p>
            </div>
        ),
    },
};

export const DarkVariant: Story = {
    args: {
        title: 'Analytics Terminal',
        showControls: true,
        variant: 'dark',
        children: (
            <div className="p-6 text-white">
                <h3 className="text-lg font-semibold mb-2 text-green-400">BTC/USD</h3>
                <p className="text-2xl font-bold text-green-500">$67,432.00</p>
                <div className="flex gap-4 mt-3 text-sm">
                    <span className="text-green-400">High: $68,100</span>
                    <span className="text-red-400">Low: $66,800</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">Last updated: 2:30 PM UTC</p>
            </div>
        ),
    },
};

export const NoControls: Story = {
    args: {
        title: 'Embedded Widget',
        showControls: false,
        children: (
            <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold text-sm">CR</div>
                    <div>
                        <p className="font-semibold text-sm text-text-primary">Cesar Ruiz</p>
                        <p className="text-xs text-text-tertiary">Premium Account</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="p-3 bg-surface-secondary rounded-lg border border-border-primary">
                        <p className="text-text-tertiary text-xs">Income</p>
                        <p className="font-semibold text-status-success">$8,450</p>
                    </div>
                    <div className="p-3 bg-surface-secondary rounded-lg border border-border-primary">
                        <p className="text-text-tertiary text-xs">Expenses</p>
                        <p className="font-semibold text-status-error">$4,230</p>
                    </div>
                </div>
            </div>
        ),
    },
};

export const CryptoDashboard: Story = {
    args: {
        title: 'Crypto Portfolio',
        showControls: true,
        children: (
            <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-text-primary flex items-center gap-2"><Coins className="w-5 h-5 text-yellow-500" /> Holdings</h3>
                    <span className="text-xs text-status-success bg-status-success/10 px-2 py-0.5 rounded-full">+12.4%</span>
                </div>
                {[
                    { name: 'Bitcoin', symbol: 'BTC', amount: '0.42', value: '$28,347', change: '+2.4%' },
                    { name: 'Ethereum', symbol: 'ETH', amount: '3.8', value: '$14,238', change: '+1.8%' },
                    { name: 'Solana', symbol: 'SOL', amount: '125', value: '$12,450', change: '-0.5%' },
                    { name: 'Cardano', symbol: 'ADA', amount: '10,000', value: '$6,200', change: '+5.2%' },
                ].map((coin) => (
                    <div key={coin.symbol} className="flex items-center justify-between p-3 rounded-xl bg-surface-secondary border border-border-primary">
                        <div>
                            <p className="text-sm font-medium text-text-primary">{coin.name}</p>
                            <p className="text-xs text-text-tertiary">{coin.amount} {coin.symbol}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold text-text-primary">{coin.value}</p>
                            <p className={`text-xs ${coin.change.startsWith('+') ? 'text-status-success' : 'text-status-error'}`}>{coin.change}</p>
                        </div>
                    </div>
                ))}
            </div>
        ),
    },
};

export const TransactionHistory: Story = {
    args: {
        title: 'Recent Transactions',
        showControls: true,
        children: (
            <div className="divide-y divide-border-primary">
                {[
                    { name: 'Salary Deposit', amount: '+$4,500.00', type: 'income', time: 'Today, 09:00 AM' },
                    { name: 'Starbucks Coffee', amount: '-$5.50', type: 'expense', time: 'Today, 08:15 AM' },
                    { name: 'Amazon.com', amount: '-$89.99', type: 'expense', time: 'Yesterday' },
                    { name: 'Transfer to Savings', amount: '-$1,000.00', type: 'transfer', time: 'Yesterday' },
                    { name: 'Dividend Payment', amount: '+$45.00', type: 'income', time: 'May 10' },
                    { name: 'Netflix', amount: '-$15.99', type: 'expense', time: 'May 9' },
                    { name: 'Freelance Invoice', amount: '+$850.00', type: 'income', time: 'May 8' },
                ].map((tx, i) => (
                    <div key={i} className="flex items-center justify-between px-6 py-3 text-sm">
                        <div>
                            <p className="text-text-primary font-medium">{tx.name}</p>
                            <p className="text-text-tertiary text-xs">{tx.time}</p>
                        </div>
                        <span className={`font-semibold ${
                            tx.type === 'income' ? 'text-status-success' :
                            tx.type === 'transfer' ? 'text-accent-blue' : 'text-status-error'
                        }`}>{tx.amount}</span>
                    </div>
                ))}
            </div>
        ),
    },
};

export const AnalyticsWidget: Story = {
    args: {
        title: 'Monthly Analytics',
        showControls: true,
        variant: 'dark',
        children: (
            <div className="p-6 text-white space-y-4">
                <div className="grid grid-cols-3 gap-3">
                    {[
                        { label: 'Revenue', value: '$48,230', icon: DollarSign, color: 'text-green-400' },
                        { label: 'Expenses', value: '$22,100', icon: CreditCard, color: 'text-red-400' },
                        { label: 'ROI', value: '18.3%', icon: TrendingUp, color: 'text-blue-400' },
                    ].map((item) => (
                        <div key={item.label} className="p-3 rounded-xl bg-white/5 border border-white/10">
                            <item.icon className={`w-4 h-4 ${item.color} mb-2`} />
                            <p className="text-xs text-gray-400">{item.label}</p>
                            <p className={`text-sm font-bold ${item.color}`}>{item.value}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between text-xs text-gray-400 pt-2 border-t border-white/10">
                    <span>↑ Best month this year</span>
                    <span className="text-green-400">+8.2% vs last month</span>
                </div>
            </div>
        ),
    },
};

export const SettingsPanel: Story = {
    args: {
        title: 'Settings',
        showControls: true,
        children: (
            <div className="p-6 space-y-4">
                <h3 className="text-sm font-semibold text-text-primary">Preferences</h3>
                {[
                    { label: 'Notifications', desc: 'Push, email, and SMS alerts' },
                    { label: 'Currency', desc: 'USD - US Dollar' },
                    { label: 'Language', desc: 'English' },
                    { label: 'Two-Factor Auth', desc: 'Enabled via authenticator app' },
                    { label: 'Dark Mode', desc: 'Follow system preference' },
                ].map((pref) => (
                    <div key={pref.label} className="flex items-center justify-between py-2 border-b border-border-primary last:border-0">
                        <div>
                            <p className="text-sm text-text-primary">{pref.label}</p>
                            <p className="text-xs text-text-tertiary">{pref.desc}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-text-tertiary" />
                    </div>
                ))}
            </div>
        ),
    },
};

export const NoTitle: Story = {
    args: {
        showControls: true,
        children: (
            <div className="p-6">
                <p className="text-text-primary">A window frame without a title, just the traffic light controls.</p>
            </div>
        ),
    },
};

export const MobileView: Story = {
    parameters: {
        viewport: { defaultViewport: 'mobile1' },
    },
    args: {
        title: 'Mobile Dashboard',
        showControls: true,
        children: (
            <div className="p-4">
                <h3 className="font-semibold text-sm text-text-primary">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-2 mt-3">
                    {['Send', 'Request', 'Deposit', 'Pay'].map((action) => (
                        <div key={action} className="p-3 rounded-xl bg-surface-secondary border border-border-primary text-center text-sm font-medium text-text-primary cursor-pointer hover:bg-surface-secondary/80">
                            {action}
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
};

export const EmptyContent: Story = {
    args: {
        title: 'Empty Window',
        showControls: true,
        children: (
            <div className="p-12 flex flex-col items-center justify-center text-center">
                <p className="text-3xl mb-2">📭</p>
                <p className="text-sm text-text-primary font-medium">No content to display</p>
                <p className="text-xs text-text-tertiary mt-1">This window is ready to be filled</p>
            </div>
        ),
    },
};

import type { Meta, StoryObj } from '@storybook/react';
import { ComicPanel } from './ComicPanel';

const meta = {
    title: 'Cyberpunk/ComicPanel',
    component: ComicPanel,
    tags: ['autodocs'],
} satisfies Meta<typeof ComicPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PortfolioMilestone: Story = {
    args: {
        direction: 'left',
        children: (
            <div style={{ padding: '12px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Portfolio Milestone! 🎯</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.5', color: 'var(--color-text-secondary)' }}>
                    Your investment portfolio just crossed <strong>$100,000</strong>!
                    Time to review your asset allocation and rebalance.
                </p>
            </div>
        ),
    },
};

export const SavingsGoalAchieved: Story = {
    args: {
        direction: 'right',
        children: (
            <div style={{ padding: '12px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Savings Goal Achieved! 🚀</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.5', color: 'var(--color-text-secondary)' }}>
                    Congratulations! You've reached your vacation savings goal of <strong>$5,000</strong>. Ready to book that trip?
                </p>
            </div>
        ),
    },
};

export const FinancialTip: Story = {
    args: {
        direction: 'left',
        children: (
            <div style={{ padding: '12px' }}>
                <p style={{ fontSize: '14px', lineHeight: '1.5', color: 'var(--color-text-secondary)' }}>
                    💡 Did you know? Investing <strong>$500/month</strong> with an 8% annual return could
                    grow to over <strong>$150,000</strong> in 15 years thanks to compound interest.
                </p>
            </div>
        ),
    },
};

export const FraudAlert: Story = {
    args: {
        direction: 'right',
        children: (
            <div style={{ padding: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '24px' }}>🚨</span>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#dc2626' }}>Suspicious Activity</h3>
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.5', color: 'var(--color-text-secondary)' }}>
                    A withdrawal of <strong>$3,450.00</strong> was attempted from an unrecognized device.
                    If this wasn't you, tap to freeze your card immediately.
                </p>
            </div>
        ),
    },
};

export const MonthlySummary: Story = {
    args: {
        direction: 'left',
        children: (
            <div style={{ padding: '12px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>April in Review 📊</h3>
                <div style={{ fontSize: '14px', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
                    <p>Income: <strong style={{ color: '#22c55e' }}>+$12,450</strong></p>
                    <p>Expenses: <strong style={{ color: '#ef4444' }}>-$8,230</strong></p>
                    <p>Saved: <strong style={{ color: '#22c55e' }}>$4,220</strong> (34% savings rate)</p>
                </div>
            </div>
        ),
    },
};

export const SubscriptionRenewal: Story = {
    args: {
        direction: 'right',
        children: (
            <div style={{ padding: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '24px' }}>🔄</span>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Subscription Renewing Soon</h3>
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.5', color: 'var(--color-text-secondary)' }}>
                    Your <strong>Premium Plan ($29.99/mo)</strong> renews in 3 days.
                    Current plan includes advanced analytics and priority support.
                </p>
            </div>
        ),
    },
};

export const DarkMode: Story = {
    args: {
        direction: 'left',
        children: (
            <div className="dark" style={{ padding: '12px', background: '#09090b', color: '#fafafa', borderRadius: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '24px' }}>🌙</span>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Dark Mode Activated</h3>
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#a1a1aa' }}>
                    Your eyes will thank you. Dark mode reduces battery consumption
                    by up to <strong>30%</strong> on OLED screens.
                </p>
            </div>
        ),
    },
};

export const LargeAmountNotification: Story = {
    args: {
        direction: 'right',
        children: (
            <div style={{ padding: '12px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Large Deposit Received 🏦</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.5', color: 'var(--color-text-secondary)' }}>
                    A wire transfer of <strong>$250,000.00</strong> from Acme Corp.
                    has been deposited into your Business Checking account.
                </p>
            </div>
        ),
    },
};

import type { Meta, StoryObj } from '@storybook/react';
import { ComicPanel } from './ComicPanel';

const meta = {
    title: 'Components/ComicPanel',
    component: ComicPanel,
    tags: ['autodocs'],
} satisfies Meta<typeof ComicPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        direction: 'left',
        children: (
            <div style={{ padding: '12px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Portfolio Milestone! 🎯</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.5', color: 'var(--color-text-secondary)' }}>
                    Your investment portfolio just crossed $100,000! 
                    Time to review your asset allocation and rebalance.
                </p>
            </div>
        ),
    },
};

export const RightDirection: Story = {
    args: {
        direction: 'right',
        children: (
            <div style={{ padding: '12px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Savings Goal Achieved! 🚀</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.5', color: 'var(--color-text-secondary)' }}>
                    Congratulations! You've reached your vacation savings goal of $5,000. Ready to book that trip?
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
                    💡 Did you know? Investing $500/month with an 8% annual return could grow to over $150,000 in 15 years thanks to compound interest.
                </p>
            </div>
        ),
    },
};

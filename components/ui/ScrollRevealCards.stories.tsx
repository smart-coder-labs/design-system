import type { Meta, StoryObj } from '@storybook/react';
import { ScrollRevealCards } from './ScrollRevealCards';

const meta = {
    title: 'Components/ScrollRevealCards',
    component: ScrollRevealCards,
    tags: ['autodocs'],
} satisfies Meta<typeof ScrollRevealCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            { id: '1', title: 'Smart Investing', description: 'AI-powered insights help you make informed investment decisions with real-time market analysis.', icon: '📈' },
            { id: '2', title: 'Secure Banking', description: 'Bank-grade encryption protects your transactions and personal data at all times.', icon: '🔒' },
            { id: '3', title: 'Real-time Analytics', description: 'Track your portfolio performance with interactive charts and detailed reporting.', icon: '📊' },
        ],
        columns: 3,
    },
};

export const FintechFeatures: Story = {
    args: {
        items: [
            { id: '1', title: 'Automated Savings', description: 'Set up round-ups and recurring transfers to grow your savings automatically without thinking about it.', icon: '💰' },
            { id: '2', title: 'Budget Planning', description: 'Create personalized budgets with smart categorization and get alerts when you approach your limits.', icon: '📋' },
            { id: '3', title: 'Investment Tracking', description: 'Monitor your stocks, bonds, ETFs, and crypto assets all from a single unified dashboard.', icon: '📈' },
            { id: '4', title: 'Expense Analytics', description: 'Visual breakdowns of your spending habits with actionable insights to help you save more.', icon: '🔍' },
            { id: '5', title: 'Goal Setting', description: 'Set financial goals and track your progress with milestones and motivational reminders.', icon: '🎯' },
            { id: '6', title: 'Subscription Manager', description: 'Track all your recurring subscriptions and identify savings opportunities by canceling unused services.', icon: '🔄' },
        ],
        columns: 3,
    },
};

export const PremiumFeatures: Story = {
    args: {
        items: [
            { id: '1', title: 'Premium Support', icon: '⭐', description: '24/7 priority customer support with dedicated account manager.' },
            { id: '2', title: 'Tax Optimization', icon: '📑', description: 'Smart tax-loss harvesting and year-round tax planning strategies.' },
            { id: '3', title: 'Estate Planning', icon: '🏛️', description: 'Comprehensive estate planning tools and will creation assistance.' },
            { id: '4', title: 'International Transfers', icon: '🌍', description: 'Send money globally with real exchange rates and no hidden fees.' },
        ],
        columns: 4,
    },
};

export const TwoColumns: Story = {
    args: {
        items: [
            { id: '1', title: 'Quick Transfers', icon: '💸', description: 'Send money to any contact in seconds with just a few taps.' },
            { id: '2', title: 'Bill Payments', icon: '📄', description: 'Schedule and pay all your bills in one place with reminders.' },
            { id: '3', title: 'Card Management', icon: '💳', description: 'Freeze, unfreeze, or set spending limits on your cards instantly.' },
            { id: '4', title: 'Investment Portfolio', icon: '🏦', description: 'Diversified portfolios managed by expert financial advisors.' },
        ],
        columns: 2,
    },
};

export const Empty: Story = {
    args: {
        items: [],
        columns: 3,
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        items: [
            { id: '1', title: 'Dark Mode Ready', icon: '🌙', description: 'Beautiful dark theme that reduces eye strain during night use.' },
            { id: '2', title: 'OLED Optimized', icon: '📱', description: 'True blacks for OLED screens for better battery life.' },
            { id: '3', title: 'Always Updated', icon: '🔄', description: 'Real-time sync across all your devices.' },
        ],
        columns: 3,
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
        story: 'ScrollRevealCards used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { StickyImageTextSwap } from './StickyImageTextSwap';

const meta = {
    title: 'Components/StickyImageTextSwap',
    component: StickyImageTextSwap,
    tags: ['autodocs'],
} satisfies Meta<typeof StickyImageTextSwap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            {
                id: 1,
                title: 'Smart Investing',
                description: 'Leverage AI-powered insights to make informed investment decisions. Our platform analyzes market trends in real-time to help you grow your portfolio.',
                image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
            },
            {
                id: 2,
                title: 'Real-Time Analytics',
                description: 'Track your portfolio performance with interactive charts and detailed analytics. Get instant notifications on market movements that matter to you.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
            },
            {
                id: 3,
                title: 'Secure Transactions',
                description: 'Bank-grade security with end-to-end encryption. Your data and transactions are protected by the most advanced security protocols available.',
                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
            },
        ],
    },
};

export const FeatureShowcase: Story = {
    args: {
        items: [
            {
                id: 'a',
                title: 'Expense Tracking',
                description: 'Automatically categorize and track every transaction. Get monthly spending reports with actionable insights to help you save more.',
                image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80',
            },
            {
                id: 'b',
                title: 'Budget Planning',
                description: 'Set personalized budgets and get real-time alerts when you are approaching your limits. Achieve your financial goals faster.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
            },
            {
                id: 'c',
                title: 'Investment Dashboard',
                description: 'A comprehensive view of all your investments in one place. Monitor stocks, bonds, ETFs, and crypto with unified analytics.',
                image: 'https://images.unsplash.com/photo-1642790551116-18e150f248e5?w=600&q=80',
            },
        ],
    },
};

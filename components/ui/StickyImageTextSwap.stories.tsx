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
            { id: 1, title: 'Smart Budgeting', description: 'AI-powered budgeting that automatically categorizes your expenses and helps you save more every month.', image: 'https://picsum.photos/seed/budget/800/600' },
            { id: 2, title: 'Investment Tracking', description: 'Real-time portfolio tracking with detailed analytics and personalized recommendations.', image: 'https://picsum.photos/seed/invest/800/600' },
            { id: 3, title: 'Secure Payments', description: 'Bank-grade encryption and instant transfers to anyone, anywhere in the world.', image: 'https://picsum.photos/seed/secure/800/600' },
        ],
    },
};

export const FintechOnboarding: Story = {
    args: {
        items: [
            { id: 1, title: 'Create Your Account', description: 'Sign up in minutes with just your email and phone number. No paperwork required.', image: 'https://picsum.photos/seed/account/800/600' },
            { id: 2, title: 'Link Your Bank', description: 'Connect your existing accounts securely using Plaid. Your data is always encrypted.', image: 'https://picsum.photos/seed/bank-link/800/600' },
            { id: 3, title: 'Start Investing', description: 'Choose from curated portfolios or build your own. Start with as little as $10.', image: 'https://picsum.photos/seed/start-invest/800/600' },
            { id: 4, title: 'Track Your Growth', description: 'Monitor your net worth, portfolio performance, and financial goals from one dashboard.', image: 'https://picsum.photos/seed/growth/800/600' },
        ],
    },
};

export const ThreeFeatures: Story = {
    args: {
        items: [
            { id: 1, title: 'Real-time Analytics', description: 'See your spending patterns and investment performance update in real time with beautiful charts.', image: 'https://picsum.photos/seed/analytics/800/600' },
            { id: 2, title: 'Smart Alerts', description: 'Get notified about unusual spending, upcoming bills, and investment opportunities.', image: 'https://picsum.photos/seed/alerts/800/600' },
            { id: 3, title: 'Goal Tracking', description: 'Set savings goals, track milestones, and get motivational nudges to stay on track.', image: 'https://picsum.photos/seed/goals/800/600' },
        ],
    },
};

export const TwoItems: Story = {
    args: {
        items: [
            { id: 1, title: 'Financial Dashboard', description: 'Complete overview of your financial life in one place.', image: 'https://picsum.photos/seed/dashboard/800/600' },
            { id: 2, title: 'AI Insights', description: 'Personalized recommendations powered by machine learning.', image: 'https://picsum.photos/seed/insights/800/600' },
        ],
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        items: [
            { id: 1, title: 'Dark Mode Ready', description: 'Beautiful dark interface designed for nighttime banking.', image: 'https://picsum.photos/seed/dark-budget/800/600' },
            { id: 2, title: 'OLED Optimized', description: 'True blacks for reduced battery consumption on OLED screens.', image: 'https://picsum.photos/seed/dark-oled/800/600' },
            { id: 3, title: 'Always Available', description: 'Access your finances 24/7 with our always-on platform.', image: 'https://picsum.photos/seed/always/800/600' },
        ],
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
        story: 'StickyImageTextSwap used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};

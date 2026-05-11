import type { Meta, StoryObj } from '@storybook/react';
import { StickyImageTextSwap } from './StickyImageTextSwap';

const meta = {
    title: 'Components/StickyImageTextSwap',
    component: StickyImageTextSwap,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A scroll-driven storytelling component with a sticky image panel on the left and scrollable text sections on the right. As the user scrolls through each section, the image swaps with an elegant crossfade animation. Inspired by Apple product pages.',
            },
        },
    },
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

export const FintechOnboarding: Story = {
    args: {
        items: [
            {
                id: 'onb-1',
                title: 'Open Your Account',
                description: 'Create your financial hub in under 2 minutes. No paperwork, no branch visits. Just your ID and a few taps.',
                image: 'https://images.unsplash.com/photo-1559526324-4bc350d242b6?w=600&q=80',
            },
            {
                id: 'onb-2',
                title: 'Connect Your Cards',
                description: 'Link your existing bank accounts and credit cards. We support over 10,000 financial institutions worldwide.',
                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
            },
            {
                id: 'onb-3',
                title: 'Start Saving Automatically',
                description: 'Set rules and let AI optimize your savings. Round up purchases, automate transfers, and watch your wealth grow.',
                image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80',
            },
            {
                id: 'onb-4',
                title: 'Track & Achieve Goals',
                description: 'Visualize your progress with beautiful charts. Get monthly reports and personalized recommendations.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
            },
        ],
    },
};

export const MobilePayments: Story = {
    args: {
        items: [
            {
                id: 'mp-1',
                title: 'Tap to Pay',
                description: 'Accept contactless payments directly on your phone. No extra hardware needed — just your iPhone and the app.',
                image: 'https://images.unsplash.com/photo-1616077168626-89b59e68e3a8?w=600&q=80',
            },
            {
                id: 'mp-2',
                title: 'Request & Split',
                description: 'Send payment requests instantly. Split bills with friends, collect group gifts, or charge clients effortlessly.',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
            },
            {
                id: 'mp-3',
                title: 'Digital Receipts',
                description: 'Every transaction generates a detailed digital receipt. Search, export, and share your payment history anytime.',
                image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80',
            },
        ],
    },
};

export const WealthManagement: Story = {
    args: {
        items: [
            {
                id: 'wm-1',
                title: 'Portfolio Overview',
                description: 'See all your investments in one unified dashboard. Stocks, bonds, ETFs, real estate, and crypto — all at a glance.',
                image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
            },
            {
                id: 'wm-2',
                title: 'Risk Analysis',
                description: 'Understand your risk exposure with clear, actionable metrics. Our AI flags portfolio imbalances before they become problems.',
                image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=600&q=80',
            },
            {
                id: 'wm-3',
                title: 'Tax Optimization',
                description: 'Minimize your tax burden with smart harvesting strategies. We track cost basis and identify tax-loss opportunities year-round.',
                image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80',
            },
            {
                id: 'wm-4',
                title: 'Retirement Planning',
                description: 'Project your retirement income with Monte Carlo simulations. Adjust variables in real-time and see your future unfold.',
                image: 'https://images.unsplash.com/photo-1518183214770-9cffbec72538?w=600&q=80',
            },
        ],
    },
};

export const TwoItemsOnly: Story = {
    args: {
        items: [
            {
                id: 'min-1',
                title: 'Simple Setup',
                description: 'Get started in minutes. Just connect your first account and we handle the rest.',
                image: 'https://images.unsplash.com/photo-1559526324-4bc350d242b6?w=600&q=80',
            },
            {
                id: 'min-2',
                title: 'You\'re All Set',
                description: 'Your dashboard is ready. Start exploring your financial insights right away.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
            },
        ],
    },
};

export const SingleItem: Story = {
    args: {
        items: [
            {
                id: 'single-1',
                title: 'One Clear Message',
                description: 'Sometimes less is more. A single feature presented with focus and clarity. Perfect for hero sections or landing page highlights.',
                image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
            },
        ],
    },
};

export const LongDescriptions: Story = {
    args: {
        items: [
            {
                id: 'long-1',
                title: 'Comprehensive Financial Platform',
                description: 'Welcome to the future of personal finance. Our platform brings together banking, investing, budgeting, and planning in one seamless experience. With AI-powered insights, real-time analytics, and bank-grade security, you get everything you need to take control of your financial life. Whether you are saving for a vacation, investing for retirement, or just trying to understand where your money goes each month, our tools adapt to your goals and habits. No more juggling five different apps — everything you need is here, designed to work together beautifully.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
            },
            {
                id: 'long-2',
                title: 'Built for Growth',
                description: 'As your financial situation evolves, our platform grows with you. Start with basic budgeting and gradually unlock advanced features like portfolio management, tax optimization, and retirement planning. Our machine learning models learn from your behavior to provide increasingly personalized recommendations over time. The more you use it, the smarter it gets. And with our open banking integrations, you can bring in data from virtually any financial institution, giving you a truly comprehensive view of your financial universe.',
                image: 'https://images.unsplash.com/photo-1642790551116-18e150f248e5?w=600&q=80',
            },
            {
                id: 'long-3',
                title: 'Enterprise-Grade Security',
                description: 'Your financial data deserves the highest level of protection. We employ end-to-end encryption, multi-factor authentication, biometric verification, and real-time fraud detection systems. Our infrastructure is SOC 2 Type II certified and compliant with GDPR, CCPA, and PCI DSS standards. Every transaction is monitored by our AI security layer that detects and blocks suspicious activity before it affects you. We never sell your data. Your privacy is not just a feature — it is the foundation of everything we build.',
                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
            },
        ],
    },
};

export const DarkModeVariant: Story = {
    parameters: {
        themes: { default: 'dark' },
    },
    args: {
        items: [
            {
                id: 'dark-1',
                title: 'Night Mode Investing',
                description: 'Track your portfolio after hours with our dark mode optimized interface. Beautiful gradients and subtle shadows make data easy on the eyes.',
                image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
            },
            {
                id: 'dark-2',
                title: 'Glowing Analytics',
                description: 'Charts and graphs come alive against dark backgrounds. Neon accents highlight key data points for instant recognition.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
            },
            {
                id: 'dark-3',
                title: 'Reduced Eye Strain',
                description: 'Spend hours analyzing your finances without fatigue. Dark mode reduces blue light exposure and adapts to ambient lighting.',
                image: 'https://images.unsplash.com/photo-1642790551116-18e150f248e5?w=600&q=80',
            },
        ],
    },
};

export const MobileResponsive: Story = {
    parameters: {
        viewport: { defaultViewport: 'mobile1' },
    },
    args: {
        items: [
            {
                id: 'mob-1',
                title: 'On the Go',
                description: 'Full-featured mobile experience. All the power of desktop, right in your pocket.',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
            },
            {
                id: 'mob-2',
                title: 'Touch Optimized',
                description: 'Gestures, swipes, and taps — our mobile interface is built for fingers, not mice.',
                image: 'https://images.unsplash.com/photo-1616077168626-89b59e68e3a8?w=600&q=80',
            },
            {
                id: 'mob-3',
                title: 'Offline Mode',
                description: 'View your latest data even without internet. Syncs automatically when you reconnect.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
            },
        ],
    },
};

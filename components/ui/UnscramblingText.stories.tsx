import type { Meta, StoryObj } from '@storybook/react';
import { UnscramblingText } from './UnscramblingText';

const meta = {
    title: 'Cyberpunk/UnscramblingText',
    component: UnscramblingText,
    tags: ['autodocs'],
} satisfies Meta<typeof UnscramblingText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Welcome to FinBank',
        duration: 2000,
    },
};

export const ShortText: Story = {
    args: {
        text: '$45,230',
        duration: 1500,
    },
};

export const LongMessage: Story = {
    args: {
        text: 'Your transfer of $5,000 has been completed successfully',
        duration: 3000,
    },
};

export const FastAnimation: Story = {
    args: {
        text: 'Portfolio Updated',
        duration: 500,
    },
};

export const SlowAnimation: Story = {
    args: {
        text: 'Resolving transaction...',
        duration: 4000,
    },
};

export const SecurityMessage: Story = {
    args: {
        text: 'Secure connection established with 256-bit encryption',
        duration: 2500,
    },
};

export const DashboardGreeting: Story = {
    args: {
        text: 'Good morning, Cesar! Your portfolio is up $2,340 today.',
        duration: 3000,
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        text: 'Dark mode activated',
        duration: 1500,
    },
};

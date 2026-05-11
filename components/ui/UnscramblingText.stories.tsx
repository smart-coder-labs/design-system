import type { Meta, StoryObj } from '@storybook/react';
import { UnscramblingText } from './UnscramblingText';

const meta = {
    title: 'Components/UnscramblingText',
    component: UnscramblingText,
    tags: ['autodocs'],
} satisfies Meta<typeof UnscramblingText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: '$124,532.00',
    },
};

export const WelcomeMessage: Story = {
    args: {
        text: 'Welcome to FinTech Pro',
    },
};

export const ShortText: Story = {
    args: {
        text: '42.7% APY',
    },
};

export const LongText: Story = {
    args: {
        text: 'Your portfolio has grown by 18.3% this quarter',
    },
};

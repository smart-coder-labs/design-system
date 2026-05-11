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

export const CryptoAddress: Story = {
    args: {
        text: '0x742d35Cc6634C0532925a3b844Bc9e7595f2bD18',
    },
};

export const TransactionHash: Story = {
    args: {
        text: '0x3a4b...f9e2',
    },
};

export const LargeNumber: Story = {
    args: {
        text: '$1,234,567,890.42',
    },
};

export const PercentageChange: Story = {
    args: {
        text: '+18.47% APY',
    },
};

export const EmojiText: Story = {
    args: {
        text: 'Payment received 🎉 +$2,450.00',
    },
};

export const MixedSymbols: Story = {
    args: {
        text: 'BTC → ETH | $45,230 @ 2.5%',
    },
};

export const DarkMode: Story = {
    args: {
        text: 'Balance: $124,532.80',
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
    decorators: [
        (Story: any) => (
            <div className="dark p-8 bg-zinc-900 rounded-xl flex items-center justify-center min-h-[100px]">
                <span className="text-4xl"><Story /></span>
            </div>
        ),
    ],
};

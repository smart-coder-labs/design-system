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
    cards: [
      { title: 'Bitcoin (BTC)', value: '$43,250', change: '+2.4%', positive: true },
      { title: 'Ethereum (ETH)', value: '$2,280', change: '+1.8%', positive: true },
      { title: 'Solana (SOL)', value: '$145.20', change: '-0.5%', positive: false },
      { title: 'Cardano (ADA)', value: '$0.52', change: '+3.1%', positive: true },
    ],
  },
};

export const WithDescriptions: Story = {
  args: {
    cards: [
      { title: 'Total Balance', value: '$125,430', description: 'Across all wallets', change: '+5.2%', positive: true },
      { title: '24h Volume', value: '$12,800', description: 'Trading volume', change: '-2.1%', positive: false },
      { title: 'Open Orders', value: '3', description: 'Pending transactions', change: '0%', positive: true },
    ],
  },
};

export const SingleCard: Story = {
  args: {
    cards: [
      { title: 'Portfolio Value', value: '$250,000', change: '+12.8%', positive: true },
    ],
  },
};

export const ManyCards: Story = {
  args: {
    cards: Array.from({ length: 8 }, (_, i) => ({
      title: `Asset ${i + 1}`,
      value: `$${(Math.random() * 10000).toFixed(2)}`,
      change: `${(Math.random() > 0.5 ? '+' : '-')}${(Math.random() * 10).toFixed(1)}%`,
      positive: Math.random() > 0.5,
    })),
  },
};

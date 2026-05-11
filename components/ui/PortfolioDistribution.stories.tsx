import type { Meta, StoryObj } from '@storybook/react';
import { PortfolioDistribution } from './PortfolioDistribution';

const meta = {
  title: 'Components/PortfolioDistribution',
  component: PortfolioDistribution,
  tags: ['autodocs'],
} satisfies Meta<typeof PortfolioDistribution>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    assets: [
      { symbol: 'BTC', name: 'Bitcoin', percentage: 45, value: '$22,500', color: '#F7931A' },
      { symbol: 'ETH', name: 'Ethereum', percentage: 30, value: '$15,000', color: '#627EEA' },
      { symbol: 'SOL', name: 'Solana', percentage: 15, value: '$7,500', color: '#00FFA3' },
      { symbol: 'USDC', name: 'USD Coin', percentage: 10, value: '$5,000', color: '#2775CA' },
    ],
  },
};

export const ManyAssets: Story = {
  args: {
    assets: [
      { symbol: 'BTC', name: 'Bitcoin', percentage: 35, value: '$70,000', color: '#F7931A' },
      { symbol: 'ETH', name: 'Ethereum', percentage: 20, value: '$40,000', color: '#627EEA' },
      { symbol: 'SOL', name: 'Solana', percentage: 12, value: '$24,000', color: '#00FFA3' },
      { symbol: 'ADA', name: 'Cardano', percentage: 10, value: '$20,000', color: '#0033AD' },
      { symbol: 'DOT', name: 'Polkadot', percentage: 8, value: '$16,000', color: '#E6007A' },
      { symbol: 'AVAX', name: 'Avalanche', percentage: 7, value: '$14,000', color: '#E84142' },
      { symbol: 'USDT', name: 'Tether', percentage: 5, value: '$10,000', color: '#26A17B' },
      { symbol: 'MATIC', name: 'Polygon', percentage: 3, value: '$6,000', color: '#8247E5' },
    ],
  },
};

export const Empty: Story = {
  args: {
    assets: [],
  },
};

export const Compact: Story = {
  args: {
    assets: [
      { symbol: 'BTC', name: 'Bitcoin', percentage: 50, value: '$50,000', color: '#F7931A' },
      { symbol: 'ETH', name: 'Ethereum', percentage: 35, value: '$35,000', color: '#627EEA' },
      { symbol: 'Others', name: 'Other', percentage: 15, value: '$15,000', color: '#888888' },
    ],
    compact: true,
  },
};

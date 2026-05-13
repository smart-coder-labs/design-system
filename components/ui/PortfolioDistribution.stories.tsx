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
  },
};

/** Real fintech portfolio — with change indicators */
export const WithChanges: Story = {
  args: {
    assets: [
      { id: 'btc', name: 'Bitcoin', value: 45000, color: '#F7931A', change: 3.2 },
      { id: 'eth', name: 'Ethereum', value: 28000, color: '#627EEA', change: -1.5 },
      { id: 'sol', name: 'Solana', value: 12000, color: '#00FFA3', change: 8.7 },
      { id: 'usdc', name: 'USD Coin', value: 8000, color: '#2775CA', change: 0.0 },
      { id: 'link', name: 'Chainlink', value: 5000, color: '#375BD2', change: -2.1 },
    ],
  },
};

/** Single asset — edge case */
export const SingleAsset: Story = {
  args: {
    assets: [
      { id: 'btc', name: 'Bitcoin', value: 100000, color: '#F7931A', change: 5.0 },
    ],
  },
};

/** Two assets — simple 50/50 split */
export const TwoAssets: Story = {
  args: {
    assets: [
      { id: 'btc', name: 'Bitcoin', value: 50000, color: '#F7931A', change: 1.2 },
      { id: 'eth', name: 'Ethereum', value: 50000, color: '#627EEA', change: -0.8 },
    ],
  },
};

/** Many small allocations — edge case for legend */
export const ManySmallAllocations: Story = {
  args: {
    assets: [
      { id: 'btc', name: 'Bitcoin', value: 35000, color: '#F7931A', change: 2.1 },
      { id: 'eth', name: 'Ethereum', value: 20000, color: '#627EEA', change: -0.4 },
      { id: 'sol', name: 'Solana', value: 10000, color: '#00FFA3', change: 5.6 },
      { id: 'ada', name: 'Cardano', value: 5000, color: '#0033AD', change: 1.1 },
      { id: 'dot', name: 'Polkadot', value: 3000, color: '#E6007A', change: -3.2 },
      { id: 'avax', name: 'Avalanche', value: 2000, color: '#E84142', change: 7.8 },
      { id: 'matic', name: 'Polygon', value: 1500, color: '#8247E5', change: -1.0 },
      { id: 'atom', name: 'Cosmos', value: 1000, color: '#2E3148', change: 0.5 },
      { id: 'near', name: 'NEAR Protocol', value: 750, color: '#000000', change: 4.3 },
      { id: 'apt', name: 'Aptos', value: 500, color: '#00BFA5', change: -2.0 },
    ],
  },
};

/** Dark mode */
export const DarkMode: Story = {
  args: {
    assets: [
      { id: 'btc', name: 'Bitcoin', value: 22500, color: '#F7931A', change: 4.5 },
      { id: 'eth', name: 'Ethereum', value: 15000, color: '#627EEA', change: 2.3 },
      { id: 'sol', name: 'Solana', value: 7500, color: '#00FFA3', change: -1.2 },
    ],
  },
  decorators: [
    (Story) => (
      <div className="dark p-6 bg-gray-950 rounded-2xl">
        <Story />
      </div>
    ),
  ],
};

/** Mobile narrow container */
export const Mobile: Story = {
  args: {
    assets: [
      { id: 'btc', name: 'Bitcoin', value: 22500, color: '#F7931A', change: 3.1 },
      { id: 'eth', name: 'Ethereum', value: 15000, color: '#627EEA', change: -0.7 },
      { id: 'sol', name: 'Solana', value: 7500, color: '#00FFA3', change: 6.2 },
    ],
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm mx-auto">
        <Story />
      </div>
    ),
  ],
};

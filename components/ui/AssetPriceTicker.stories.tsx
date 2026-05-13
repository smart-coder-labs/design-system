import type { Meta, StoryObj } from '@storybook/react';
import { AssetPriceTicker } from './AssetPriceTicker';

const meta = {
    title: 'Fintech/Investments/AssetPriceTicker',
    component: AssetPriceTicker,
    tags: ['autodocs'],
} satisfies Meta<typeof AssetPriceTicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleAssets = [
    { id: '1', symbol: 'BTC', name: 'Bitcoin', price: 67450.32, change: 2.45, type: 'crypto' as const, icon: '₿' },
    { id: '2', symbol: 'ETH', name: 'Ethereum', price: 3456.78, change: -1.23, type: 'crypto' as const, icon: '⟠' },
    { id: '3', symbol: 'AAPL', name: 'Apple Inc.', price: 198.45, change: 0.87, type: 'stock' as const },
    { id: '4', symbol: 'GOOGL', name: 'Alphabet Inc.', price: 175.20, change: -0.32, type: 'stock' as const },
    { id: '5', symbol: 'EUR/USD', name: 'Euro', price: 1.0923, change: 0.15, type: 'forex' as const },
    { id: '6', symbol: 'SOL', name: 'Solana', price: 142.56, change: 5.67, type: 'crypto' as const, icon: '◎' },
];

export const Default: Story = {
    args: {
        assets: sampleAssets,
        currency: 'USD',
        layout: 'horizontal',
    },
};

export const VerticalLayout: Story = {
    args: {
        assets: sampleAssets,
        currency: 'USD',
        layout: 'vertical',
    },
};

export const CompactHorizontal: Story = {
    args: {
        assets: sampleAssets.slice(0, 4),
        currency: 'USD',
        layout: 'horizontal',
        compact: true,
    },
};

export const CompactVertical: Story = {
    args: {
        assets: sampleAssets.slice(0, 4),
        currency: 'USD',
        layout: 'vertical',
        compact: true,
    },
};

export const CryptoOnly: Story = {
    args: {
        assets: sampleAssets.filter(a => a.type === 'crypto'),
        currency: 'USD',
        layout: 'horizontal',
    },
};

export const StocksOnly: Story = {
    args: {
        assets: sampleAssets.filter(a => a.type === 'stock'),
        currency: 'USD',
        layout: 'vertical',
    },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};
export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

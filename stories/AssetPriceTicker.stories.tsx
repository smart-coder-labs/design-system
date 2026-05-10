import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AssetPriceTicker, type AssetPrice } from '../components/ui/AssetPriceTicker';

const meta: Meta<typeof AssetPriceTicker> = {
    title: 'Fintech/Investments/AssetPriceTicker',
    component: AssetPriceTicker,
    parameters: { layout: 'centered' },
    tags: [],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AssetPriceTicker>;

const defaultAssets: AssetPrice[] = [
    { symbol: 'BTC', name: 'Bitcoin', price: 43250, change: 1250, changePercent: 2.98 },
    { symbol: 'ETH', name: 'Ethereum', price: 2280, change: -45, changePercent: -1.94 },
    { symbol: 'AAPL', name: 'Apple Inc.', price: 178.50, change: 2.30, changePercent: 1.31 },
    { symbol: 'GOOGL', name: 'Alphabet', price: 141.25, change: -1.75, changePercent: -1.22 },
    { symbol: 'MXN', name: 'Mexican Peso / USD', price: 17.15, change: 0.05, changePercent: 0.29 },
];

export const Default: Story = {
    args: {
        assets: defaultAssets,
    },
    decorators: [(Story) => <div className="w-[400px]"><Story /></div>],
};

export const CryptoOnly: Story = {
    name: '₿ Crypto Only',
    args: {
        assets: [
            { symbol: 'BTC', name: 'Bitcoin', price: 43250, change: 1250, changePercent: 2.98 },
            { symbol: 'ETH', name: 'Ethereum', price: 2280, change: -45, changePercent: -1.94 },
            { symbol: 'SOL', name: 'Solana', price: 178.90, change: 5.67, changePercent: 3.28 },
        ],
    },
    decorators: [(Story) => <div className="w-[400px]"><Story /></div>],
};

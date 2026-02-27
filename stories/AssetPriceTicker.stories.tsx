import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AssetPriceTicker, type AssetPrice } from '../components/ui/AssetPriceTicker';

const meta: Meta<typeof AssetPriceTicker> = {
    title: 'Fintech/Investments/AssetPriceTicker',
    component: AssetPriceTicker,
    parameters: { layout: 'centered' },
    tags: [],
    argTypes: {
        layout: { control: 'select', options: ['horizontal', 'vertical'] },
    },
};

export default meta;
type Story = StoryObj<typeof AssetPriceTicker>;

const defaultAssets: AssetPrice[] = [
    { id: '1', symbol: 'BTC', name: 'Bitcoin', price: 97234.50, change: 2.34, type: 'crypto', icon: '₿' },
    { id: '2', symbol: 'ETH', name: 'Ethereum', price: 3456.12, change: -0.56, type: 'crypto', icon: 'Ξ' },
    { id: '3', symbol: 'USD/MXN', name: 'Dollar/Peso', price: 17.15, change: 0.12, type: 'forex', icon: '🇲🇽' },
    { id: '4', symbol: 'AAPL', name: 'Apple Inc.', price: 245.80, change: 1.45, type: 'stock', icon: '🍎' },
    { id: '5', symbol: 'TSLA', name: 'Tesla', price: 312.50, change: -2.10, type: 'stock', icon: '⚡' },
];

export const Horizontal: Story = {
    args: {
        assets: defaultAssets,
        layout: 'horizontal',
    },
    decorators: [(Story) => <div className="w-[600px]"><Story /></div>],
};

export const Vertical: Story = {
    args: {
        assets: defaultAssets,
        layout: 'vertical',
    },
    decorators: [(Story) => <div className="w-[400px]"><Story /></div>],
};

export const Compact: Story = {
    args: {
        assets: defaultAssets,
        layout: 'horizontal',
        compact: true,
    },
    decorators: [(Story) => <div className="w-[600px]"><Story /></div>],
};

export const CryptoOnly: Story = {
    name: '₿ Crypto Only',
    args: {
        assets: [
            { id: '1', symbol: 'BTC', name: 'Bitcoin', price: 97234.50, change: 2.34, type: 'crypto', icon: '₿' },
            { id: '2', symbol: 'ETH', name: 'Ethereum', price: 3456.12, change: -0.56, type: 'crypto', icon: 'Ξ' },
            { id: '3', symbol: 'SOL', name: 'Solana', price: 178.90, change: 5.67, type: 'crypto', icon: '☀️' },
            { id: '4', symbol: 'ADA', name: 'Cardano', price: 0.4523, change: -1.23, type: 'crypto', icon: '💎' },
        ],
        layout: 'vertical',
    },
    decorators: [(Story) => <div className="w-[400px]"><Story /></div>],
};

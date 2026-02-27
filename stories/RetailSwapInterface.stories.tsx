import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RetailSwapInterface, type CryptoAsset } from '../components/ui/RetailSwapInterface';

const meta: Meta<typeof RetailSwapInterface> = {
    title: 'Fintech/Wealth & Crypto/RetailSwapInterface',
    component: RetailSwapInterface,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RetailSwapInterface>;

const mockAssets: CryptoAsset[] = [
    { id: 'btc', name: 'Bitcoin', symbol: 'BTC', priceUsd: 64200.5, iconUrl: '🟠', balance: 0.15 },
    { id: 'eth', name: 'Ethereum', symbol: 'ETH', priceUsd: 3450.2, iconUrl: '🟣', balance: 1.2 },
    { id: 'sol', name: 'Solana', symbol: 'SOL', priceUsd: 145.8, iconUrl: '🟣', balance: 0 },
    { id: 'usdc', name: 'USD Coin', symbol: 'USDC', priceUsd: 1.0, iconUrl: '🔵', balance: 1540.0 },
];

export const Default: Story = {
    args: {
        assets: mockAssets,
        onSwap: (from, to, amount) => console.log('Swap:', from, to, amount),
    },
};

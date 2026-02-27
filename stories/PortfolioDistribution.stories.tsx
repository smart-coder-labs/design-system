import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PortfolioDistribution, type PortfolioAsset } from '../components/ui/PortfolioDistribution';

const meta: Meta<typeof PortfolioDistribution> = {
    title: 'Fintech/Investments/PortfolioDistribution',
    component: PortfolioDistribution,
    parameters: { layout: 'centered' },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof PortfolioDistribution>;

const defaultAssets: PortfolioAsset[] = [
    { id: '1', name: 'Stocks', value: 28500, color: '#007AFF', change: 3.2 },
    { id: '2', name: 'Crypto', value: 12000, color: '#FF9500', change: -1.8 },
    { id: '3', name: 'Bonds', value: 8000, color: '#34C759', change: 0.5 },
    { id: '4', name: 'Real Estate', value: 15000, color: '#AF52DE', change: 1.1 },
    { id: '5', name: 'Cash', value: 5000, color: '#8E8E93', change: 0 },
];

export const Default: Story = {
    args: {
        assets: defaultAssets,
        currency: 'MXN',
        locale: 'es-MX',
    },
    decorators: [(Story) => <div className="w-[500px]"><Story /></div>],
};

export const TwoAssets: Story = {
    args: {
        assets: [
            { id: '1', name: 'Crypto', value: 40000, color: '#FF9500', change: 5.2 },
            { id: '2', name: 'Gold', value: 20000, color: '#FFD700', change: 1.4 },
        ],
        currency: 'USD',
        locale: 'en-US',
    },
    decorators: [(Story) => <div className="w-[500px]"><Story /></div>],
};

export const LargePortfolio: Story = {
    name: '💰 Large Portfolio',
    args: {
        assets: [
            { id: '1', name: 'US Equities', value: 250000, color: '#007AFF', change: 2.1 },
            { id: '2', name: 'International', value: 100000, color: '#5AC8FA', change: -0.3 },
            { id: '3', name: 'Fixed Income', value: 80000, color: '#34C759', change: 0.8 },
            { id: '4', name: 'Real Estate', value: 120000, color: '#AF52DE', change: 1.5 },
            { id: '5', name: 'Commodities', value: 30000, color: '#FF9500', change: -2.1 },
            { id: '6', name: 'Cash', value: 20000, color: '#8E8E93', change: 0 },
        ],
        currency: 'USD',
        locale: 'en-US',
    },
    decorators: [(Story) => <div className="w-[550px]"><Story /></div>],
};

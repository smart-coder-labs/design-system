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
    { symbol: 'STK', name: 'Stocks', value: 28500, color: '#007aff' },
    { symbol: 'CRYPTO', name: 'Crypto', value: 12000, color: '#ff9500' },
    { symbol: 'BND', name: 'Bonds', value: 8000, color: '#34c759' },
    { symbol: 'RE', name: 'Real Estate', value: 15000, color: '#af52de' },
    { symbol: 'CASH', name: 'Cash', value: 5000, color: '#8e8e93' },
];

export const Default: Story = {
    args: {
        assets: defaultAssets,
        currency: 'MXN',
        locale: 'es-MX',
    },
    decorators: [(Story) => <div className="w-[400px]"><Story /></div>],
};

export const TwoAssets: Story = {
    args: {
        assets: [
            { symbol: 'CRYPTO', name: 'Crypto', value: 40000, color: '#ff9500' },
            { symbol: 'GOLD', name: 'Gold', value: 20000, color: '#ffd700' },
        ],
        currency: 'USD',
        locale: 'en-US',
    },
    decorators: [(Story) => <div className="w-[400px]"><Story /></div>],
};

export const LargePortfolio: Story = {
    name: '💰 Large Portfolio',
    args: {
        assets: [
            { symbol: 'EQ-US', name: 'US Equities', value: 250000, color: '#007aff' },
            { symbol: 'EQ-INTL', name: 'International', value: 100000, color: '#5ac8fa' },
            { symbol: 'FI', name: 'Fixed Income', value: 80000, color: '#34c759' },
            { symbol: 'RE', name: 'Real Estate', value: 120000, color: '#af52de' },
            { symbol: 'COMM', name: 'Commodities', value: 30000, color: '#ff9500' },
            { symbol: 'CASH', name: 'Cash', value: 20000, color: '#8e8e93' },
        ],
        currency: 'USD',
        locale: 'en-US',
    },
    decorators: [(Story) => <div className="w-[400px]"><Story /></div>],
};

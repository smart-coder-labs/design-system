import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AssetAllocationChart, type AllocationAsset } from '../components/ui/AssetAllocationChart';

const meta: Meta<typeof AssetAllocationChart> = {
    title: 'Fintech/Wealth & Crypto/AssetAllocationChart',
    component: AssetAllocationChart,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AssetAllocationChart>;

const mockPortfolio: AllocationAsset[] = [
    { id: '1', name: 'Global Equities', ticker: 'VTI', value: 45000, color: 'bg-emerald-500', riskLevel: 'medium' },
    { id: '2', name: 'High-Yield Bonds', ticker: 'HYG', value: 12000, color: 'bg-indigo-500', riskLevel: 'low' },
    { id: '3', name: 'Tech Aggressive', ticker: 'QQQ', value: 25000, color: 'bg-amber-500', riskLevel: 'high' },
    { id: '4', name: 'Bitcoin', ticker: 'BTC', value: 8500, color: 'bg-orange-500', riskLevel: 'high' },
    { id: '5', name: 'Cash', ticker: 'USD', value: 5000, color: 'bg-zinc-400', riskLevel: 'low' },
];

export const Default: Story = {
    args: {
        assets: mockPortfolio,
        currency: 'USD',
    },
};

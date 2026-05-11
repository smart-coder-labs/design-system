import type { Meta, StoryObj } from '@storybook/react';
import { RotarySelector } from './RotarySelector';
import { useState } from 'react';

const meta = {
    title: 'Components/RotarySelector',
    component: RotarySelector,
    tags: ['autodocs'],
} satisfies Meta<typeof RotarySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const investmentOptions = [
    { id: 'conservative', label: 'Conservative', value: 'conservative', icon: '🛡️' },
    { id: 'balanced', label: 'Balanced', value: 'balanced', icon: '⚖️' },
    { id: 'aggressive', label: 'Aggressive', value: 'aggressive', icon: '🚀' },
];

export const Default: Story = {
    args: {
        options: [
            { id: '1', label: 'Option 1', value: '1' },
            { id: '2', label: 'Option 2', value: '2' },
            { id: '3', label: 'Option 3', value: '3' },
        ],
        size: 'md',
        showLabel: true,
        onChange: (value, option) => console.log('Selected:', option.label),
    },
};

export const InvestmentProfile: Story = {
    args: {
        options: investmentOptions,
        value: 'balanced',
        size: 'md',
        showLabel: true,
        onChange: (value, option) => console.log('Risk profile:', option.label),
    },
};

export const CurrencySelection: Story = {
    args: {
        options: [
            { id: 'usd', label: 'USD', value: 'USD', icon: '$' },
            { id: 'eur', label: 'EUR', value: 'EUR', icon: '€' },
            { id: 'gbp', label: 'GBP', value: 'GBP', icon: '£' },
            { id: 'jpy', label: 'JPY', value: 'JPY', icon: '¥' },
            { id: 'btc', label: 'BTC', value: 'BTC', icon: '₿' },
        ],
        value: 'USD',
        size: 'md',
        showLabel: true,
        onChange: (value, option) => console.log('Currency:', option.label),
    },
};

export const TimeframeSelection: Story = {
    args: {
        options: [
            { id: '1d', label: '1 Day', value: '1d' },
            { id: '1w', label: '1 Week', value: '1w' },
            { id: '1m', label: '1 Month', value: '1m' },
            { id: '3m', label: '3 Months', value: '3m' },
            { id: '1y', label: '1 Year', value: '1y' },
            { id: 'all', label: 'All Time', value: 'all' },
        ],
        value: '1m',
        size: 'sm',
        showLabel: true,
        onChange: (value, option) => console.log('Timeframe:', option.label),
    },
};

export const Disabled: Story = {
    args: {
        options: investmentOptions,
        value: 'balanced',
        disabled: true,
        onChange: (value, option) => console.log('Selected:', option.label),
    },
};

export const InteractiveSelector: Story = {
    render: () => {
        const [selected, setSelected] = useState('balanced');
        const profiles: Record<string, { description: string; allocation: string }> = {
            conservative: { description: 'Low risk, stable returns. 80% bonds, 20% stocks.', allocation: '2-4% annually' },
            balanced: { description: 'Moderate risk, balanced growth. 50% stocks, 40% bonds, 10% cash.', allocation: '5-8% annually' },
            aggressive: { description: 'High risk, high reward. 80% stocks, 15% crypto, 5% bonds.', allocation: '10-15% annually' },
        };
        const current = profiles[selected] || profiles.balanced;
        return (
            <div className="space-y-4">
                <RotarySelector
                    options={investmentOptions}
                    value={selected}
                    onChange={(_, option) => setSelected(option.value as string)}
                    size="md"
                    showLabel={true}
                />
                <div className="p-4 bg-surface-secondary rounded-xl border border-border-primary text-sm space-y-1">
                    <p className="font-semibold capitalize">{selected} Profile</p>
                    <p className="text-text-secondary">{current.description}</p>
                    <p className="text-green-600 font-medium">Expected return: {current.allocation}</p>
                </div>
            </div>
        );
    },
};

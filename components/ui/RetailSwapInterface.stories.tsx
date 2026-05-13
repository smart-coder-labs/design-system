import type { Meta, StoryObj } from '@storybook/react';
import { RetailSwapInterface } from './RetailSwapInterface';
import { useState } from 'react';

const meta = {
    title: 'Fintech/Wealth & Crypto/RetailSwapInterface',
    component: RetailSwapInterface,
    tags: ['autodocs'],
} satisfies Meta<typeof RetailSwapInterface>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onSwap: (from, to, amount) => console.log(`Swap ${amount} ${from} to ${to}`),
    },
};

export const USDToEUR: Story = {
    args: {
        fromCurrency: 'USD',
        toCurrency: 'EUR',
        fromAmount: '1000',
        onSwap: (from, to, amount) => console.log(`Swap ${amount} ${from} to ${to}`),
    },
};

export const CryptoSwap: Story = {
    args: {
        fromCurrency: 'BTC',
        toCurrency: 'ETH',
        fromAmount: '0.5',
        onSwap: (from, to, amount) => console.log(`Swap ${amount} ${from} to ${to}`),
    },
};

export const LargeAmount: Story = {
    args: {
        fromCurrency: 'USD',
        toCurrency: 'GBP',
        fromAmount: '50000',
        onSwap: (from, to, amount) => console.log(`Swap ${amount} ${from} to ${to}`),
    },
};

export const ExoticPair: Story = {
    args: {
        fromCurrency: 'MXN',
        toCurrency: 'JPY',
        fromAmount: '25000',
        onSwap: (from, to, amount) => console.log(`Swap ${amount} ${from} to ${to}`),
    },
};

export const InteractiveSwap: Story = {
    render: () => {
        const [history, setHistory] = useState<{ from: string; to: string; amount: string }[]>([]);
        return (
            <div className="space-y-4">
                <RetailSwapInterface
                    onSwap={(from, to, amount) => {
                        setHistory(prev => [...prev, { from, to, amount }]);
                    }}
                />
                {history.length > 0 && (
                    <div className="p-4 bg-surface-secondary rounded-xl border border-border-primary">
                        <h4 className="text-sm font-semibold mb-2">Swap History</h4>
                        <div className="space-y-1 text-sm">
                            {history.map((h, i) => (
                                <p key={i}>Swapped {h.amount} {h.from} → {h.to}</p>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        onSwap: (from, to, amount) => console.log(`Swap ${amount} ${from} to ${to}`),
    },
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

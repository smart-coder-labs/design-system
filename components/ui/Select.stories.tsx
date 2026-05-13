import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { useState } from 'react';

const meta = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="max-w-xs">
            <Select>
                <Select.Trigger placeholder="Select account..." />
                <Select.Content>
                    <Select.Item value="checking">Checking Account ••••4582</Select.Item>
                    <Select.Item value="savings">Savings Account ••••3391</Select.Item>
                    <Select.Item value="investment">Investment Portfolio</Select.Item>
                </Select.Content>
            </Select>
        </div>
    ),
};

export const WithValue: Story = {
    render: () => (
        <div className="max-w-xs">
            <Select defaultValue="checking">
                <Select.Trigger />
                <Select.Content>
                    <Select.Item value="checking">Checking Account ••••4582</Select.Item>
                    <Select.Item value="savings">Savings Account ••••3391</Select.Item>
                    <Select.Item value="investment">Investment Portfolio</Select.Item>
                </Select.Content>
            </Select>
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <div className="max-w-xs">
            <Select disabled defaultValue="checking">
                <Select.Trigger />
                <Select.Content>
                    <Select.Item value="checking">Checking Account</Select.Item>
                </Select.Content>
            </Select>
        </div>
    ),
};

export const DisabledOption: Story = {
    render: () => (
        <div className="max-w-xs">
            <Select defaultValue="checking">
                <Select.Trigger placeholder="Select currency..." />
                <Select.Content>
                    <Select.Item value="usd">USD - US Dollar</Select.Item>
                    <Select.Item value="eur">EUR - Euro</Select.Item>
                    <Select.Item value="gbp">GBP - British Pound</Select.Item>
                    <Select.Item value="btc" disabled>BTC - Bitcoin (Currently unavailable)</Select.Item>
                </Select.Content>
            </Select>
        </div>
    ),
};

export const ManyOptions: Story = {
    render: () => (
        <div className="max-w-xs">
            <Select defaultValue="">
                <Select.Trigger placeholder="Select a stock symbol..." />
                <Select.Content>
                    <Select.Item value="AAPL">AAPL - Apple Inc.</Select.Item>
                    <Select.Item value="GOOGL">GOOGL - Alphabet Inc.</Select.Item>
                    <Select.Item value="MSFT">MSFT - Microsoft Corp.</Select.Item>
                    <Select.Item value="AMZN">AMZN - Amazon.com Inc.</Select.Item>
                    <Select.Item value="TSLA">TSLA - Tesla Inc.</Select.Item>
                    <Select.Item value="NVDA">NVDA - NVIDIA Corp.</Select.Item>
                    <Select.Item value="META">META - Meta Platforms Inc.</Select.Item>
                    <Select.Item value="JPM">JPM - JPMorgan Chase</Select.Item>
                    <Select.Item value="V">V - Visa Inc.</Select.Item>
                    <Select.Item value="BTC-USD">BTC-USD - Bitcoin USD</Select.Item>
                </Select.Content>
            </Select>
        </div>
    ),
};

export const InteractiveSelection: Story = {
    render: () => {
        const [selected, setSelected] = useState('');
        const currencies: Record<string, string> = {
            usd: '$1.00 USD',
            eur: '€0.92 EUR',
            gbp: '£0.79 GBP',
            jpy: '¥149.50 JPY',
            btc: '₿0.000014 BTC',
        };
        return (
            <div className="space-y-4 max-w-xs">
                <Select value={selected} onValueChange={setSelected}>
                    <Select.Trigger placeholder="Select currency..." />
                    <Select.Content>
                        <Select.Item value="usd">🇺🇸 USD - US Dollar</Select.Item>
                        <Select.Item value="eur">🇪🇺 EUR - Euro</Select.Item>
                        <Select.Item value="gbp">🇬🇧 GBP - British Pound</Select.Item>
                        <Select.Item value="jpy">🇯🇵 JPY - Japanese Yen</Select.Item>
                        <Select.Item value="btc">₿ Bitcoin</Select.Item>
                    </Select.Content>
                </Select>
                {selected && (
                    <div className="p-3 bg-surface-secondary rounded-lg text-sm text-center">
                        Selected: <strong>{currencies[selected]}</strong>
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
    render: () => (
        <div className="max-w-xs">
            <Select defaultValue="checking">
                <Select.Trigger />
                <Select.Content>
                    <Select.Item value="checking">Checking Account ••••4582</Select.Item>
                    <Select.Item value="savings">Savings Account ••••3391</Select.Item>
                    <Select.Item value="investment">Investment Portfolio</Select.Item>
                </Select.Content>
            </Select>
        </div>
    ),
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

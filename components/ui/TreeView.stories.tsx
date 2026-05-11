import type { Meta, StoryObj } from '@storybook/react';
import { TreeView } from './TreeView';
import { useState } from 'react';

const meta = {
    title: 'Components/TreeView',
    component: TreeView,
    tags: ['autodocs'],
} satisfies Meta<typeof TreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: [
            {
                id: '1', label: 'Accounts', children: [
                    { id: '1.1', label: 'Checking ••••4582' },
                    { id: '1.2', label: 'Savings ••••3391' },
                    { id: '1.3', label: 'Credit Card ••••7821' },
                ],
            },
            {
                id: '2', label: 'Investments', children: [
                    { id: '2.1', label: 'Stocks' },
                    { id: '2.2', label: 'ETFs' },
                    { id: '2.3', label: 'Crypto' },
                ],
            },
            {
                id: '3', label: 'Documents', children: [
                    { id: '3.1', label: 'Statements' },
                    { id: '3.2', label: 'Tax Forms' },
                    { id: '3.3', label: 'Agreements' },
                ],
            },
        ],
    },
};

export const CategoryTree: Story = {
    args: {
        data: [
            {
                id: '1', label: 'Income ($8,230)', children: [
                    { id: '1.1', label: 'Salary ($4,500)' },
                    { id: '1.2', label: 'Freelance ($2,800)' },
                    { id: '1.3', label: 'Investments ($930)' },
                ],
            },
            {
                id: '2', label: 'Expenses ($3,780)', children: [
                    { id: '2.1', label: 'Housing ($1,800)' },
                    { id: '2.2', label: 'Food ($650)' },
                    { id: '2.3', label: 'Transport ($320)' },
                    { id: '2.4', label: 'Entertainment ($180)' },
                    { id: '2.5', label: 'Utilities ($230)' },
                    { id: '2.6', label: 'Other ($600)' },
                ],
            },
            {
                id: '3', label: 'Savings ($4,500)', children: [
                    { id: '3.1', label: 'Emergency Fund ($2,500)' },
                    { id: '3.2', label: 'Vacation ($1,200)' },
                    { id: '3.3', label: 'Retirement ($800)' },
                ],
            },
        ],
    },
};

export const WithCustomRender: Story = {
    render: () => (
        <div className="max-w-md">
            <TreeView
                data={[
                    {
                        id: '1', label: '📈 Growth Portfolio', children: [
                            { id: '1.1', label: 'AAPL - Apple Inc.' },
                            { id: '1.2', label: 'NVDA - NVIDIA Corp.' },
                            { id: '1.3', label: 'MSFT - Microsoft Corp.' },
                        ],
                    },
                    {
                        id: '2', label: '🛡️ Conservative Portfolio', children: [
                            { id: '2.1', label: 'BND - Vanguard Total Bond' },
                            { id: '2.2', label: 'VOO - S&P 500 ETF' },
                            { id: '2.3', label: 'VNQ - Real Estate ETF' },
                        ],
                    },
                ]}
            />
        </div>
    ),
};

export const SingleCategory: Story = {
    args: {
        data: [
            {
                id: '1', label: 'September 2025', children: [
                    { id: '1.1', label: 'Statement_Sept2025.pdf' },
                    { id: '1.2', label: 'Tax_Summary_Q3.pdf' },
                ],
            },
        ],
    },
};

export const DeepNested: Story = {
    args: {
        data: [
            {
                id: '1', label: '📊 Portfolio', children: [
                    {
                        id: '1.1', label: 'Stocks', children: [
                            { id: '1.1.1', label: 'Tech Sector', children: [
                                { id: '1.1.1.1', label: 'AAPL - $8,925' },
                                { id: '1.1.1.2', label: 'MSFT - $12,756' },
                            ]},
                            { id: '1.1.2', label: 'Finance', children: [
                                { id: '1.1.2.1', label: 'JPM - $4,500' },
                                { id: '1.1.2.2', label: 'V - $6,200' },
                            ]},
                        ],
                    },
                    {
                        id: '1.2', label: 'ETFs', children: [
                            { id: '1.2.1', label: 'VOO - $15,200' },
                            { id: '1.2.2', label: 'QQQ - $8,900' },
                        ],
                    },
                ],
            },
        ],
    },
};

export const InteractiveTree: Story = {
    render: () => {
        const [selectedId, setSelectedId] = useState<string | null>(null);
        const details: Record<string, string> = {
            '1.1.1': 'Total: $21,681 • 12 shares • +3.2%',
            '1.1.2': 'Total: $10,700 • 8 shares • +1.8%',
            '1.2.1': 'Total: $15,200 • 45 shares • +4.1%',
            '1.2.2': 'Total: $8,900 • 20 shares • +5.3%',
        };
        return (
            <div className="space-y-4">
                <TreeView
                    data={[
                        {
                            id: '1', label: 'Investment Portfolio', children: [
                                {
                                    id: '1.1', label: 'Stocks', children: [
                                        { id: '1.1.1', label: 'Tech Sector' },
                                        { id: '1.1.2', label: 'Finance Sector' },
                                    ],
                                },
                                {
                                    id: '1.2', label: 'ETFs', children: [
                                        { id: '1.2.1', label: 'VOO (S&P 500)' },
                                        { id: '1.2.2', label: 'QQQ (Nasdaq)' },
                                    ],
                                },
                            ],
                        },
                    ]}
                    selectedId={selectedId || undefined}
                    onSelect={(id) => setSelectedId(id)}
                />
                {selectedId && details[selectedId] && (
                    <div className="p-3 bg-surface-secondary rounded-lg text-sm">
                        <p className="text-xs text-text-secondary">Details for selected item:</p>
                        <p className="font-medium">{details[selectedId]}</p>
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
        data: [
            { id: '1', label: 'Crypto Holdings', children: [
                { id: '1.1', label: 'Bitcoin (BTC) - $28,400' },
                { id: '1.2', label: 'Ethereum (ETH) - $12,500' },
                { id: '1.3', label: 'Solana (SOL) - $3,200' },
            ]},
            { id: '2', label: 'Stablecoins', children: [
                { id: '2.1', label: 'USDC - $15,000' },
                { id: '2.2', label: 'USDT - $5,000' },
            ]},
        ],
    },
};

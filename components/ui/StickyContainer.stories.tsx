import type { Meta, StoryObj } from '@storybook/react';
import { StickyContainer } from './StickyContainer';

const meta = {
    title: 'Layout/StickyContainer',
    component: StickyContainer,
    tags: ['autodocs'],
} satisfies Meta<typeof StickyContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    decorators: [
        (Story) => (
            <div className="relative" style={{ height: 400 }}>
                <Story />
                <div className="mt-16 space-y-4 p-4">
                    {Array.from({ length: 10 }, (_, i) => (
                        <div key={i} className="h-16 bg-surface-secondary rounded-lg flex items-center px-4 text-sm text-text-secondary">
                            Scroll content section {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        ),
    ],
    args: {
        children: (
            <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Filter Controls</span>
                <span className="text-xs text-text-secondary">3 active filters</span>
            </div>
        ),
    },
};

export const TransactionFilters: Story = {
    decorators: [
        (Story) => (
            <div className="relative" style={{ height: 500 }}>
                <Story />
                <div className="mt-20 space-y-3 p-4">
                    {[
                        { name: 'Amazon', amount: '$89.99', date: 'May 10' },
                        { name: 'Uber', amount: '$24.50', date: 'May 9' },
                        { name: 'Netflix', amount: '$15.99', date: 'May 8' },
                        { name: 'Starbucks', amount: '$5.75', date: 'May 8' },
                        { name: 'Apple Store', amount: '$999.00', date: 'May 5' },
                        { name: 'Electric Bill', amount: '$134.50', date: 'May 3' },
                        { name: 'Salary', amount: '+$4,500', date: 'May 1', positive: true },
                    ].map(tx => (
                        <div key={tx.name} className="flex justify-between p-3 bg-surface-secondary rounded-lg text-sm">
                            <span>{tx.name}</span>
                            <span className={tx.positive ? 'text-green-600' : ''}>{tx.amount}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
    ],
    args: {
        top: 0,
        children: (
            <div className="flex items-center gap-3">
                <select className="flex-1 p-2 rounded-lg border border-border-primary bg-surface-primary text-sm">
                    <option>All Categories</option>
                    <option>Dining</option>
                    <option>Transport</option>
                    <option>Bills</option>
                    <option>Shopping</option>
                </select>
                <button className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg">Apply</button>
            </div>
        ),
    },
};

export const StickyHeader: Story = {
    decorators: [
        (Story) => (
            <div className="relative" style={{ height: 400 }}>
                <Story />
                <div className="mt-20 space-y-4 p-4">
                    {['Portfolio Overview', 'Transactions', 'Budget', 'Goals', 'Settings'].map((section, i) => (
                        <div key={section}>
                            <h3 className="text-sm font-bold mb-2">{section}</h3>
                            {Array.from({ length: 3 }, (_, j) => (
                                <div key={j} className="h-12 bg-surface-secondary rounded-lg mb-2 flex items-center px-4 text-sm text-text-secondary">
                                    Item {i * 3 + j + 1}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        ),
    ],
    args: {
        top: 0,
        zIndex: 30,
        className: 'px-6 py-3',
        children: (
            <div className="flex items-center gap-3">
                <h2 className="text-base font-bold flex-1">Dashboard</h2>
                <span className="text-xs text-text-secondary bg-background px-2 py-1 rounded-full">Live</span>
            </div>
        ),
    },
};

export const CustomOffset: Story = {
    decorators: [
        (Story) => (
            <div className="relative pt-16" style={{ height: 400 }}>
                <div style={{ height: 64, position: 'absolute', top: 0, left: 0, right: 0 }} className="bg-blue-600 flex items-center px-4 text-white text-sm font-semibold">
                    App Navigation Bar
                </div>
                <Story />
                <div className="mt-20 space-y-4 p-4">
                    {Array.from({ length: 8 }, (_, i) => (
                        <div key={i} className="h-16 bg-surface-secondary rounded-lg flex items-center px-4 text-sm text-text-secondary">
                            Scroll content {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        ),
    ],
    args: {
        top: 72,
        children: (
            <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">Section Filter</span>
                <div className="flex gap-1">
                    {['All', 'Cards', 'Bank', 'Crypto'].map(tab => (
                        <button key={tab} className={`px-3 py-1 text-xs rounded-lg ${tab === 'All' ? 'bg-blue-600 text-white' : 'bg-surface-secondary'}`}>{tab}</button>
                    ))}
                </div>
            </div>
        ),
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    decorators: [
        (Story) => (
            <div className="relative" style={{ height: 300 }}>
                <Story />
                <div className="mt-16 space-y-4 p-4">
                    {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className="h-16 bg-surface-secondary rounded-lg flex items-center px-4 text-sm text-text-secondary">
                            Dark mode content {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        ),
    ],
    args: {
        children: (
            <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Sticky Controls</span>
                <span className="text-xs text-text-secondary">Dark mode</span>
            </div>
        ),
    },
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
export const FintechUseCase: Story = {
  parameters: {
    docs: {
      description: {
        story: 'StickyContainer used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};

export const LoadingState: Story = {
  parameters: {
    docs: {
      description: {
        story: 'StickyContainer in a loading state, showing the skeleton or placeholder UI while data is being fetched.',
      },
    },
  },
};

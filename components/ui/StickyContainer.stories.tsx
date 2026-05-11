import type { Meta, StoryObj } from '@storybook/react';
import { StickyContainer } from './StickyContainer';
import { Search, Filter, X, ArrowUpDown } from 'lucide-react';

const meta = {
    title: 'Components/StickyContainer',
    component: StickyContainer,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A macOS-style sticky header surface with glassmorphism, configurable top offset, and custom z-index. Ideal for filter bars, table headers, or pinned controls.',
            },
        },
    },
} satisfies Meta<typeof StickyContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        top: 0,
        zIndex: 20,
        children: (
            <div className="p-4">
                <p className="font-semibold text-sm text-text-primary">📌 Sticky Header</p>
                <p className="text-xs text-text-tertiary mt-1">This content stays visible while scrolling</p>
            </div>
        ),
    },
    decorators: [
        (Story) => (
            <div className="h-64 overflow-y-auto border border-border-primary rounded-xl bg-surface-primary">
                <Story />
                <div className="p-4 space-y-4 mt-2">
                    {Array.from({ length: 12 }, (_, i) => (
                        <div key={i} className="h-16 bg-surface-secondary rounded-xl flex items-center px-4 text-sm text-text-tertiary border border-border-primary">
                            Scrollable content item {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        ),
    ],
};

export const FilterBar: Story = {
    args: {
        top: 0,
        zIndex: 20,
        children: (
            <div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 flex-1">
                        <Search className="w-4 h-4 text-text-tertiary" />
                        <input
                            type="text"
                            placeholder="Search transactions..."
                            className="bg-transparent text-sm text-text-primary outline-none flex-1 placeholder:text-text-tertiary"
                            readOnly
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-medium cursor-pointer">All</span>
                        <span className="px-3 py-1 rounded-full bg-surface-primary border border-border-primary text-xs text-text-secondary cursor-pointer hover:bg-surface-secondary">Income</span>
                        <span className="px-3 py-1 rounded-full bg-surface-primary border border-border-primary text-xs text-text-secondary cursor-pointer hover:bg-surface-secondary">Expenses</span>
                    </div>
                    <button className="p-1.5 rounded-lg hover:bg-surface-secondary text-text-tertiary">
                        <Filter className="w-4 h-4" />
                    </button>
                </div>
            </div>
        ),
    },
    decorators: [
        (Story) => (
            <div className="h-64 overflow-y-auto border border-border-primary rounded-xl bg-surface-primary">
                <Story />
                <div className="p-4 space-y-3 mt-2">
                    {[
                        { name: 'Salary Deposit', amount: '+$4,500.00', type: 'income' },
                        { name: 'Starbucks', amount: '-$5.50', type: 'expense' },
                        { name: 'Amazon Purchase', amount: '-$89.99', type: 'expense' },
                        { name: 'Transfer from Savings', amount: '+$1,000.00', type: 'income' },
                        { name: 'Netflix Subscription', amount: '-$15.99', type: 'expense' },
                        { name: 'Uber Ride', amount: '-$24.50', type: 'expense' },
                        { name: 'Freelance Payment', amount: '+$850.00', type: 'income' },
                        { name: 'Grocery Store', amount: '-$132.40', type: 'expense' },
                        { name: 'Electric Bill', amount: '-$78.20', type: 'expense' },
                        { name: 'Dividend Payment', amount: '+$45.00', type: 'income' },
                    ].map((tx, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-surface-secondary border border-border-primary">
                            <span className="text-sm text-text-primary">{tx.name}</span>
                            <span className={`text-sm font-semibold ${tx.type === 'income' ? 'text-status-success' : 'text-status-error'}`}>{tx.amount}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
    ],
};

export const OffsetTop: Story = {
    args: {
        top: 60,
        zIndex: 10,
        children: (
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm text-text-primary">📋 Data Filters</p>
                    <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-medium">Active</span>
                        <span className="px-3 py-1 rounded-full bg-surface-primary border border-border-primary text-xs text-text-secondary">Archived</span>
                    </div>
                </div>
            </div>
        ),
    },
};

export const WithDismissButton: Story = {
    args: {
        top: 0,
        zIndex: 30,
        children: (
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm font-bold">!</span>
                    <div>
                        <p className="text-sm font-semibold text-text-primary">New feature available</p>
                        <p className="text-xs text-text-tertiary">Try our new AI-powered insights</p>
                    </div>
                </div>
                <button className="p-1.5 rounded-lg hover:bg-surface-secondary text-text-tertiary">
                    <X className="w-4 h-4" />
                </button>
            </div>
        ),
    },
};

export const TableHeader: Story = {
    args: {
        top: 0,
        zIndex: 20,
        children: (
            <div className="grid grid-cols-4 gap-4 px-4 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider">
                <span className="flex items-center gap-1 cursor-pointer">Name <ArrowUpDown className="w-3 h-3" /></span>
                <span className="flex items-center gap-1 cursor-pointer">Amount <ArrowUpDown className="w-3 h-3" /></span>
                <span className="flex items-center gap-1 cursor-pointer">Date <ArrowUpDown className="w-3 h-3" /></span>
                <span className="flex items-center gap-1 cursor-pointer">Status <ArrowUpDown className="w-3 h-3" /></span>
            </div>
        ),
    },
    decorators: [
        (Story) => (
            <div className="h-64 overflow-y-auto border border-border-primary rounded-xl bg-surface-primary">
                <Story />
                <div className="divide-y divide-border-primary">
                    {Array.from({ length: 15 }, (_, i) => (
                        <div key={i} className="grid grid-cols-4 gap-4 px-4 py-3 text-sm text-text-primary">
                            <span>Transaction {i + 1}</span>
                            <span className={i % 3 === 0 ? 'text-status-success' : 'text-status-error'}>
                                {i % 3 === 0 ? '+$' : '-$'}{(Math.random() * 1000).toFixed(2)}
                            </span>
                            <span className="text-text-tertiary">May {i + 1}, 2026</span>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${i % 2 === 0 ? 'bg-status-success/10 text-status-success' : 'bg-status-warning/10 text-status-warning'}`}>
                                {i % 2 === 0 ? 'Completed' : 'Pending'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        ),
    ],
};

export const MultipleStickySections: Story = {
    decorators: [
        (Story) => (
            <div className="h-80 overflow-y-auto border border-border-primary rounded-xl bg-surface-primary">
                <Story />
            </div>
        ),
    ],
    render: () => (
        <div>
            <StickyContainer top={0} zIndex={20}>
                <div className="p-4">
                    <p className="font-semibold text-sm text-text-primary">🔝 Primary Header</p>
                    <p className="text-xs text-text-tertiary mt-0.5">Always visible at the top</p>
                </div>
            </StickyContainer>
            <div className="p-4 space-y-4">
                {Array.from({ length: 5 }, (_, i) => (
                    <div key={i} className="h-16 bg-surface-secondary rounded-xl flex items-center px-4 text-sm text-text-tertiary border border-border-primary">
                        Content section {i + 1}
                    </div>
                ))}
            </div>
            <StickyContainer top={80} zIndex={15}>
                <div className="p-4">
                    <p className="font-semibold text-sm text-text-primary">📋 Secondary Filter Bar</p>
                    <p className="text-xs text-text-tertiary mt-0.5">Starts sticking after 80px offset</p>
                </div>
            </StickyContainer>
            <div className="p-4 space-y-4">
                {Array.from({ length: 8 }, (_, i) => (
                    <div key={i + 5} className="h-16 bg-surface-secondary rounded-xl flex items-center px-4 text-sm text-text-tertiary border border-border-primary">
                        More content item {i + 6}
                    </div>
                ))}
            </div>
        </div>
    ),
};

export const EmptyContent: Story = {
    args: {
        top: 0,
        zIndex: 20,
        children: (
            <div className="p-4">
                <p className="font-semibold text-sm text-text-primary">📭 Empty State</p>
                <p className="text-xs text-text-tertiary mt-1">No items to display</p>
            </div>
        ),
    },
};

export const NestedInModal: Story = {
    args: {
        top: 0,
        zIndex: 20,
        children: (
            <div className="p-4">
                <p className="font-semibold text-sm text-text-primary">Modal Header</p>
                <p className="text-xs text-text-tertiary mt-0.5">Sticks inside a modal-like container</p>
            </div>
        ),
    },
    decorators: [
        (Story) => (
            <div className="h-72 overflow-y-auto border border-border-primary rounded-xl bg-surface-primary max-w-sm mx-auto shadow-xl">
                <div className="bg-surface-primary border-b border-border-primary px-4 py-3 flex items-center justify-between">
                    <span className="font-semibold text-sm text-text-primary">Modal Title</span>
                    <X className="w-4 h-4 text-text-tertiary cursor-pointer" />
                </div>
                <Story />
                <div className="p-4 space-y-3">
                    {Array.from({ length: 10 }, (_, i) => (
                        <div key={i} className="h-14 bg-surface-secondary rounded-xl flex items-center px-4 text-sm text-text-tertiary border border-border-primary">
                            Modal content row {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        ),
    ],
};

export const DarkMode: Story = {
    parameters: {
        themes: { default: 'dark' },
    },
    args: {
        top: 0,
        zIndex: 20,
        children: (
            <div className="p-4">
                <p className="font-semibold text-sm text-text-primary">🌙 Dark Mode Header</p>
                <p className="text-xs text-text-tertiary mt-1">Glass effect adapts to dark theme</p>
            </div>
        ),
    },
    decorators: [
        (Story) => (
            <div className="h-64 overflow-y-auto border border-border-primary rounded-xl bg-surface-primary">
                <Story />
                <div className="p-4 space-y-4 mt-2">
                    {Array.from({ length: 8 }, (_, i) => (
                        <div key={i} className="h-16 bg-surface-secondary rounded-xl flex items-center px-4 text-sm text-text-tertiary border border-border-primary">
                            Dark mode item {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        ),
    ],
};

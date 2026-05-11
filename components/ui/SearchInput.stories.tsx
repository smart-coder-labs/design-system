import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from './SearchInput';
import { useState } from 'react';

const meta = {
    title: 'Components/SearchInput',
    component: SearchInput,
    tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: '',
        placeholder: 'Search transactions...',
        onChange: (value) => console.log('Search:', value),
    },
};

export const WithValue: Story = {
    args: {
        value: 'Amazon purchase',
        placeholder: 'Search...',
        onChange: (value) => console.log('Search:', value),
    },
};

export const Loading: Story = {
    args: {
        value: 'Bitcoin',
        isLoading: true,
        placeholder: 'Search...',
        onChange: (value) => console.log('Search:', value),
    },
};

export const WithLabel: Story = {
    args: {
        value: '',
        label: 'Search Transactions',
        placeholder: 'Search by merchant, category, or amount...',
        onChange: (value) => console.log('Search:', value),
    },
};

export const InteractiveSearch: Story = {
    render: () => {
        const [query, setQuery] = useState('');
        const [results, setResults] = useState<string[]>([]);
        const [isLoading, setIsLoading] = useState(false);

        const transactions = [
            'Amazon - $89.99', 'Uber Ride - $24.50', 'Netflix - $15.99',
            'Salary Deposit - $4,500', 'Electric Bill - $134.50',
            'Starbucks - $5.75', 'Apple Store - $999.00',
        ];

        const handleSearch = (value: string) => {
            setIsLoading(true);
            setTimeout(() => {
                setResults(transactions.filter(t => t.toLowerCase().includes(value.toLowerCase())));
                setIsLoading(false);
            }, 500);
        };

        return (
            <div className="space-y-4 max-w-md">
                <SearchInput
                    value={query}
                    onChange={(v) => {
                        setQuery(v);
                        if (v.length > 0) handleSearch(v);
                        else setResults([]);
                    }}
                    isLoading={isLoading}
                    placeholder="Search transactions..."
                    onClear={() => setResults([])}
                />
                {results.length > 0 && (
                    <div className="space-y-1">
                        {results.map((r, i) => (
                            <div key={i} className="p-2 bg-surface-secondary rounded-lg text-sm flex justify-between">
                                <span>{r.split(' - ')[0]}</span>
                                <span className="font-medium">{r.split(' - ')[1]}</span>
                            </div>
                        ))}
                    </div>
                )}
                {query && results.length === 0 && !isLoading && (
                    <p className="text-sm text-text-secondary text-center">No results found</p>
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
        value: '',
        placeholder: 'Search in dark mode...',
        onChange: (value) => console.log('Search:', value),
    },
};

export const Disabled: Story = {
    args: {
        value: 'Search is disabled',
        disabled: true,
        onChange: (value) => console.log('Search:', value),
    },
};

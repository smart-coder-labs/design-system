import type { Meta, StoryObj } from '@storybook/react';
import { RoundUpSavingsToggle } from './RoundUpSavingsToggle';
import { useState } from 'react';

const meta = {
    title: 'Components/RoundUpSavingsToggle',
    component: RoundUpSavingsToggle,
    tags: ['autodocs'],
} satisfies Meta<typeof RoundUpSavingsToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        initialState: false,
        monthlyProjection: 1250.50,
        onToggle: (active) => console.log('Round-up savings:', active ? 'enabled' : 'disabled'),
    },
};

export const Active: Story = {
    args: {
        initialState: true,
        monthlyProjection: 1250.50,
        onToggle: (active) => console.log('Round-up savings:', active ? 'enabled' : 'disabled'),
    },
};

export const LowProjection: Story = {
    args: {
        initialState: true,
        monthlyProjection: 185.75,
        onToggle: (active) => console.log('Round-up savings:', active ? 'enabled' : 'disabled'),
    },
};

export const HighProjection: Story = {
    args: {
        initialState: true,
        monthlyProjection: 3450.00,
        onToggle: (active) => console.log('Round-up savings:', active ? 'enabled' : 'disabled'),
    },
};

export const InteractiveToggle: Story = {
    render: () => {
        const [active, setActive] = useState(false);
        const [savings, setSavings] = useState(452.80);
        return (
            <div className="space-y-4 max-w-md">
                <RoundUpSavingsToggle
                    initialState={active}
                    monthlyProjection={1250.50}
                    onToggle={(state) => {
                        setActive(state);
                        if (state) {
                            setSavings(prev => prev + 1250.50);
                            alert('Round-up savings activated! Your spare change will now go to savings.');
                        } else {
                            alert('Round-up savings paused. No more spare change will be moved.');
                        }
                    }}
                />
                {active && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-sm space-y-1">
                        <p className="font-semibold text-green-700 dark:text-green-300">Total Saved from Round-ups</p>
                        <p className="text-2xl font-bold text-green-600">${savings.toFixed(2)}</p>
                        <p className="text-xs text-green-500">Every purchase rounds up to the nearest dollar</p>
                    </div>
                )}
                {!active && (
                    <div className="p-4 bg-surface-secondary rounded-xl text-sm text-text-secondary text-center">
                        Enable round-up savings to start saving automatically
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
        initialState: true,
        monthlyProjection: 1250.50,
        onToggle: (active) => console.log('Round-up savings:', active ? 'enabled' : 'disabled'),
    },
};

export const StatisticsView: Story = {
    render: () => {
        const [active, setActive] = useState(true);
        return (
            <div className="space-y-4 max-w-md">
                <RoundUpSavingsToggle
                    initialState={active}
                    monthlyProjection={1250.50}
                    onToggle={setActive}
                />
                <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-surface-secondary rounded-xl text-center">
                        <p className="text-lg font-bold">89</p>
                        <p className="text-xs text-text-secondary">Round-ups this month</p>
                    </div>
                    <div className="p-3 bg-surface-secondary rounded-xl text-center">
                        <p className="text-lg font-bold">$0.76</p>
                        <p className="text-xs text-text-secondary">Avg per round-up</p>
                    </div>
                    <div className="p-3 bg-surface-secondary rounded-xl text-center">
                        <p className="text-lg font-bold">$67.64</p>
                        <p className="text-xs text-text-secondary">Saved this month</p>
                    </div>
                </div>
            </div>
        );
    },
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

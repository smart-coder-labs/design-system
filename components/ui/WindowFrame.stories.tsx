import type { Meta, StoryObj } from '@storybook/react';
import { WindowFrame } from './WindowFrame';

const meta = {
    title: 'Components/WindowFrame',
    component: WindowFrame,
    tags: ['autodocs'],
} satisfies Meta<typeof WindowFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Portfolio Dashboard',
        showControls: true,
        children: (
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Account Summary</h3>
                <p className="text-3xl font-bold text-green-600">$124,532.00</p>
                <p className="text-sm text-gray-500 mt-1">Total Balance</p>
            </div>
        ),
    },
};

export const DarkVariant: Story = {
    args: {
        title: 'Analytics Terminal',
        showControls: true,
        variant: 'dark',
        children: (
            <div className="p-6 bg-gray-900 text-white">
                <h3 className="text-lg font-semibold mb-2 text-green-400">$ BTC/USD</h3>
                <p className="text-2xl font-bold text-green-500">$67,432.00</p>
                <div className="flex gap-4 mt-3 text-sm">
                    <span className="text-green-400">High: $68,100</span>
                    <span className="text-red-400">Low: $66,800</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">Last updated: 2:30 PM UTC</p>
            </div>
        ),
    },
};

export const NoControls: Story = {
    args: {
        title: 'Embedded Widget',
        showControls: false,
        children: (
            <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 font-bold text-sm">CR</div>
                    <div>
                        <p className="font-semibold text-sm">Cesar Ruiz</p>
                        <p className="text-xs text-gray-500">Premium Account</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <p className="text-gray-500 text-xs">Income</p>
                        <p className="font-semibold text-green-600">$8,450</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <p className="text-gray-500 text-xs">Expenses</p>
                        <p className="font-semibold text-red-600">$4,230</p>
                    </div>
                </div>
            </div>
        ),
    },
};

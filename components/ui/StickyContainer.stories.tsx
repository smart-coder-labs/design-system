import type { Meta, StoryObj } from '@storybook/react';
import { StickyContainer } from './StickyContainer';

const meta = {
    title: 'Components/StickyContainer',
    component: StickyContainer,
    tags: ['autodocs'],
} satisfies Meta<typeof StickyContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        top: 0,
        zIndex: 20,
        children: (
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
                <p className="font-semibold text-sm">📌 Sticky Header</p>
                <p className="text-xs text-gray-500 mt-1">This content stays visible while scrolling</p>
            </div>
        ),
    },
    decorators: [
        (Story) => (
            <div className="h-64 overflow-y-auto border border-gray-200 rounded-lg">
                <Story />
                <div className="p-4 space-y-4 mt-2">
                    {Array.from({ length: 8 }, (_, i) => (
                        <div key={i} className="h-16 bg-gray-100 dark:bg-gray-700 rounded flex items-center px-4 text-sm text-gray-500">
                            Scrollable content item {i + 1}
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
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="font-semibold text-sm text-blue-700 dark:text-blue-300">📋 Filters Bar</p>
                <div className="flex gap-2 mt-2">
                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-800 text-xs text-blue-700 dark:text-blue-300">All</span>
                    <span className="px-3 py-1 rounded-full bg-white dark:bg-gray-700 text-xs">Active</span>
                    <span className="px-3 py-1 rounded-full bg-white dark:bg-gray-700 text-xs">Completed</span>
                </div>
            </div>
        ),
    },
};

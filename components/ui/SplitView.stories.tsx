import type { Meta, StoryObj } from '@storybook/react';
import { SplitView } from './SplitView';

const meta = {
    title: 'Components/SplitView',
    component: SplitView,
    tags: ['autodocs'],
} satisfies Meta<typeof SplitView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        left: (
            <div className="p-4 bg-gray-50 dark:bg-gray-900 h-full">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Accounts</h3>
                <div className="space-y-2">
                    {['Checking', 'Savings', 'Investment', 'Credit Card'].map((account) => (
                        <div key={account} className="p-2 rounded-lg bg-white dark:bg-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-sm">
                            {account}
                        </div>
                    ))}
                </div>
            </div>
        ),
        right: (
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2">Checking Account</h2>
                <p className="text-3xl font-semibold text-green-600">$12,450.32</p>
                <p className="text-sm text-gray-500 mt-1">Available balance</p>
            </div>
        ),
        initialLeftSize: '240px',
        minLeftSize: 180,
        maxLeftSize: 400,
    },
};

export const FinderStyle: Story = {
    args: {
        left: (
            <div className="p-4 bg-gray-100 dark:bg-gray-800 h-full text-sm">
                <div className="space-y-1">
                    {['Documents', 'Downloads', 'Desktop', 'Applications', 'Projects'].map((item) => (
                        <div key={item} className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">{item}</div>
                    ))}
                </div>
            </div>
        ),
        right: (
            <div className="p-6">
                <div className="grid grid-cols-4 gap-4">
                    {['Report.pdf', 'Budget.xlsx', 'Logo.png', 'Notes.md'].map((file) => (
                        <div key={file} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                            <div className="text-2xl mb-1">📄</div>
                            <div className="text-xs truncate">{file}</div>
                        </div>
                    ))}
                </div>
            </div>
        ),
        initialLeftSize: '200px',
        minLeftSize: 150,
        maxLeftSize: 350,
    },
};

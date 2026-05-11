import type { Meta, StoryObj } from '@storybook/react';
import { TreeView } from './TreeView';

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
                id: '1', name: 'Documents', type: 'folder',
                children: [
                    { id: '1a', name: 'Tax Returns', type: 'folder', children: [
                        { id: '1a1', name: '2024 Tax Return.pdf', type: 'file', meta: '2.4 MB' },
                        { id: '1a2', name: '2023 Tax Return.pdf', type: 'file', meta: '2.1 MB' },
                    ]},
                    { id: '1b', name: 'Statements', type: 'folder', children: [
                        { id: '1b1', name: 'May Statement.pdf', type: 'file', meta: '1.2 MB' },
                        { id: '1b2', name: 'April Statement.pdf', type: 'file', meta: '1.1 MB' },
                    ]},
                ],
            },
            {
                id: '2', name: 'Investments', type: 'folder',
                children: [
                    { id: '2a', name: 'Portfolio Summary.xlsx', type: 'file', meta: '856 KB' },
                    { id: '2b', name: 'Stock Analysis', type: 'folder', children: [
                        { id: '2b1', name: 'AAPL Analysis.pdf', type: 'file', meta: '1.5 MB' },
                        { id: '2b2', name: 'TSLA Report.pdf', type: 'file', meta: '1.3 MB' },
                    ]},
                ],
            },
            {
                id: '3', name: 'Reports', type: 'folder',
                children: [
                    { id: '3a', name: 'Monthly Report Q1.pdf', type: 'file', meta: '3.2 MB' },
                    { id: '3b', name: 'Annual Report 2024.pdf', type: 'file', meta: '5.8 MB' },
                ],
            },
        ],
        defaultExpandedIds: ['1', '2', '1a'],
    },
};

export const SimpleStructure: Story = {
    args: {
        data: [
            { id: '1', name: 'Checking Account', type: 'file', meta: '$12,450' },
            { id: '2', name: 'Savings Account', type: 'file', meta: '$45,200' },
            { id: '3', name: 'Investment Portfolio', type: 'folder', children: [
                { id: '3a', name: 'Stocks', type: 'file', meta: '$62,300' },
                { id: '3b', name: 'Bonds', type: 'file', meta: '$28,000' },
                { id: '3c', name: 'Crypto', type: 'file', meta: '$15,400' },
            ]},
            { id: '4', name: 'Credit Cards', type: 'folder', children: [
                { id: '4a', name: 'Visa Platinum', type: 'file', meta: '-$2,340' },
                { id: '4b', name: 'Mastercard Gold', type: 'file', meta: '-$1,200' },
            ]},
        ],
        defaultExpandedIds: ['3', '4'],
    },
};

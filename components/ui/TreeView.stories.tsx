import type { Meta, StoryObj } from '@storybook/react';
import { TreeView } from './TreeView';

const meta = {
    title: 'Components/TreeView',
    component: TreeView,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A macOS Finder-style tree view with expandable/collapsible folders, file type icons, and meta information. Supports selection, toggling, disabled nodes, and custom icons.',
            },
        },
    },
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

export const SingleFolder: Story = {
    args: {
        data: [
            {
                id: 'root', name: 'My Files', type: 'folder',
                children: [
                    { id: 'f1', name: 'document.txt', type: 'file', meta: '12 KB' },
                    { id: 'f2', name: 'image.png', type: 'file', meta: '2.3 MB' },
                    { id: 'f3', name: 'code.tsx', type: 'file', meta: '4 KB' },
                    { id: 'f4', name: 'data.json', type: 'file', meta: '156 KB' },
                    { id: 'f5', name: 'style.css', type: 'file', meta: '8 KB' },
                ],
            },
        ],
        defaultExpandedIds: ['root'],
    },
};

export const DeepNesting: Story = {
    args: {
        data: [
            {
                id: 'l1', name: 'Project', type: 'folder',
                children: [
                    {
                        id: 'l2a', name: 'src', type: 'folder',
                        children: [
                            {
                                id: 'l3a', name: 'components', type: 'folder',
                                children: [
                                    {
                                        id: 'l4a', name: 'ui', type: 'folder',
                                        children: [
                                            { id: 'f1', name: 'Button.tsx', type: 'file', meta: '2 KB' },
                                            { id: 'f2', name: 'Card.tsx', type: 'file', meta: '3 KB' },
                                        ],
                                    },
                                ],
                            },
                            { id: 'f3', name: 'app.tsx', type: 'file', meta: '1 KB' },
                        ],
                    },
                    { id: 'f4', name: 'package.json', type: 'file', meta: '0.5 KB' },
                ],
            },
        ],
        defaultExpandedIds: ['l1', 'l2a', 'l3a', 'l4a'],
    },
};

export const EmptyTree: Story = {
    args: {
        data: [],
        defaultExpandedIds: [],
    },
};

export const AllFiles: Story = {
    args: {
        data: [
            { id: 's1', name: 'report.txt', type: 'file', meta: '45 KB' },
            { id: 's2', name: 'image.png', type: 'file', meta: '1.2 MB' },
            { id: 's3', name: 'code.ts', type: 'file', meta: '8 KB' },
            { id: 's4', name: 'data.json', type: 'file', meta: '230 KB' },
            { id: 's5', name: 'style.css', type: 'file', meta: '15 KB' },
            { id: 's6', name: 'readme.md', type: 'file', meta: '3 KB' },
            { id: 's7', name: 'logo.svg', type: 'file', meta: '28 KB' },
        ],
    },
};

export const WithDisabledNodes: Story = {
    args: {
        data: [
            {
                id: 'd1', name: 'Shared Folder', type: 'folder',
                children: [
                    { id: 'd1a', name: 'public_file.txt', type: 'file', meta: '14 KB' },
                    { id: 'd1b', name: 'restricted_file.pdf', type: 'file', meta: '2.1 MB', disabled: true },
                ],
            },
            {
                id: 'd2', name: 'Private', type: 'folder', disabled: true,
                children: [
                    { id: 'd2a', name: 'secret.txt', type: 'file', meta: '1 KB' },
                ],
            },
            { id: 'd3', name: 'read_only.md', type: 'file', meta: '5 KB', disabled: true },
        ],
        defaultExpandedIds: ['d1'],
    },
};

export const CodeProject: Story = {
    args: {
        data: [
            {
                id: 'c1', name: 'design-system', type: 'folder',
                children: [
                    {
                        id: 'c2', name: 'src', type: 'folder',
                        children: [
                            { id: 'c2a', name: 'index.ts', type: 'file', meta: '0.3 KB' },
                            { id: 'c2b', name: 'utils.ts', type: 'file', meta: '1 KB' },
                            { id: 'c2c', name: 'components', type: 'folder', children: [
                                { id: 'c2c1', name: 'Button.tsx', type: 'file', meta: '4 KB' },
                                { id: 'c2c2', name: 'Card.tsx', type: 'file', meta: '3 KB' },
                                { id: 'c2c3', name: 'Modal.tsx', type: 'file', meta: '5 KB' },
                            ]},
                        ],
                    },
                    { id: 'c3', name: 'package.json', type: 'file', meta: '0.5 KB' },
                    { id: 'c4', name: 'tsconfig.json', type: 'file', meta: '0.3 KB' },
                ],
            },
        ],
        defaultExpandedIds: ['c1', 'c2', 'c2c'],
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { default: 'dark' },
    },
    args: {
        data: [
            {
                id: 'dm1', name: 'Dark Folder', type: 'folder',
                children: [
                    { id: 'dm1a', name: 'dark_file.txt', type: 'file', meta: '12 KB' },
                    { id: 'dm1b', name: 'night_mode.ts', type: 'file', meta: '8 KB' },
                ],
            },
            { id: 'dm2', name: 'readme.md', type: 'file', meta: '3 KB' },
        ],
        defaultExpandedIds: ['dm1'],
    },
};

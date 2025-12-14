import type { Meta, StoryObj } from '@storybook/react';
import { TreeView, TreeNode } from '../components/TreeView';
import { useState } from 'react';
import { Database, Server, Globe, Lock } from 'lucide-react';

const meta = {
    title: 'Data Display/TreeView',
    component: TreeView,
    parameters: {
        layout: 'padded',
    },
    tags: [],
} satisfies Meta<typeof TreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

const fileSystemData: TreeNode[] = [
    {
        id: 'root',
        name: 'design-system',
        type: 'folder',
        children: [
            {
                id: 'src',
                name: 'src',
                type: 'folder',
                children: [
                    {
                        id: 'components',
                        name: 'components',
                        type: 'folder',
                        children: [
                            { id: 'Button.tsx', name: 'Button.tsx', type: 'file', meta: '2KB' },
                            { id: 'Input.tsx', name: 'Input.tsx', type: 'file', meta: '1.5KB' },
                            { id: 'Card.tsx', name: 'Card.tsx', type: 'file', meta: '3KB' },
                        ]
                    },
                    {
                        id: 'lib',
                        name: 'lib',
                        type: 'folder',
                        children: [
                            { id: 'utils.ts', name: 'utils.ts', type: 'file', meta: '1KB' },
                        ]
                    },
                    { id: 'index.ts', name: 'index.ts', type: 'file', meta: '500B' },
                ]
            },
            {
                id: 'public',
                name: 'public',
                type: 'folder',
                children: [
                    { id: 'logo.svg', name: 'logo.svg', type: 'file', meta: '12KB' },
                    { id: 'favicon.ico', name: 'favicon.ico', type: 'file', meta: '4KB' },
                ]
            },
            { id: 'package.json', name: 'package.json', type: 'file', meta: '1KB' },
            { id: 'README.md', name: 'README.md', type: 'file', meta: '2KB' },
            { id: 'tsconfig.json', name: 'tsconfig.json', type: 'file', meta: '1KB' },
        ]
    }
];

const customIconsData: TreeNode[] = [
    {
        id: 'aws',
        name: 'AWS Infrastructure',
        type: 'folder',
        icon: <Globe className="w-4 h-4 text-orange-500" />,
        children: [
            {
                id: 'ec2',
                name: 'EC2 Instances',
                type: 'folder',
                icon: <Server className="w-4 h-4 text-blue-500" />,
                children: [
                    { id: 'web-server', name: 'web-server-01', type: 'file', meta: 'Running' },
                    { id: 'api-server', name: 'api-server-01', type: 'file', meta: 'Stopped' },
                ]
            },
            {
                id: 'rds',
                name: 'Databases',
                type: 'folder',
                icon: <Database className="w-4 h-4 text-purple-500" />,
                children: [
                    { id: 'primary-db', name: 'primary-db', type: 'file', meta: 'Available' },
                ]
            },
            {
                id: 'iam',
                name: 'IAM Roles',
                type: 'folder',
                icon: <Lock className="w-4 h-4 text-red-500" />,
                children: [
                    { id: 'admin-role', name: 'AdminRole', type: 'file' },
                ]
            }
        ]
    }
];

const InteractiveTreeView = (props: any) => {
    const [selectedId, setSelectedId] = useState<string | undefined>('Button.tsx');

    return (
        <div className="w-64 border border-border-primary/50 rounded-lg bg-surface-primary h-[400px] overflow-y-auto">
            <TreeView
                {...props}
                selectedId={selectedId}
                onSelect={(node) => setSelectedId(node.id)}
            />
        </div>
    );
};

export const FileExplorer: Story = {
    args: {
        data: fileSystemData,
        defaultExpandedIds: ['root', 'src', 'components']
    },
    render: (args) => (
        <InteractiveTreeView 
            {...args}
        />
    )
};

export const CustomIcons: Story = {
    args: {
        data: customIconsData,
        defaultExpandedIds: ['aws', 'ec2', 'rds']
    },
    render: (args) => (
        <InteractiveTreeView 
            {...args}
        />
    )
};

export const EmptyState: Story = {
    args: {
        data: []
    },
    render: () => (
        <div className="w-64 border border-border-primary/50 rounded-lg bg-surface-primary h-[200px] flex items-center justify-center text-text-tertiary text-sm">
            No files found
        </div>
    )
};

import type { Meta, StoryObj } from '@storybook/react';
import { CommandMenu } from './CommandMenu';

const meta = {
    title: 'Navigation/CommandMenu',
    component: CommandMenu,
    tags: ['autodocs'],
} satisfies Meta<typeof CommandMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleGroups = [
    {
        title: 'Navigation',
        items: [
            { id: 'dashboard', label: 'Go to Dashboard', description: 'View your financial overview', icon: '📊', onSelect: () => {}, keywords: ['home', 'overview'] },
            { id: 'transactions', label: 'View Transactions', description: 'Browse recent transactions', icon: '💳', onSelect: () => {}, keywords: ['payments', 'history'] },
            { id: 'accounts', label: 'Manage Accounts', description: 'View and manage your accounts', icon: '🏦', onSelect: () => {}, keywords: ['bank', 'cards'] },
        ],
    },
    {
        title: 'Actions',
        items: [
            { id: 'transfer', label: 'Transfer Money', description: 'Send money between accounts', icon: '💸', onSelect: () => {}, keywords: ['send', 'payment'] },
            { id: 'invest', label: 'Invest', description: 'Buy or sell investments', icon: '📈', onSelect: () => {}, keywords: ['trade', 'stocks'] },
            { id: 'report', label: 'Generate Report', description: 'Create a financial report', icon: '📄', onSelect: () => {}, keywords: ['export', 'pdf'] },
        ],
    },
];

export const Open: Story = {
    args: {
        isOpen: true,
        onClose: () => {},
        groups: sampleGroups,
    },
};

export const Closed: Story = {
    args: {
        isOpen: false,
        onClose: () => {},
        groups: sampleGroups,
    },
};

export const SingleGroup: Story = {
    args: {
        isOpen: true,
        onClose: () => {},
        groups: [sampleGroups[0]],
    },
};

export const WithShortcuts: Story = {
    args: {
        isOpen: true,
        onClose: () => {},
        groups: [
            {
                title: 'Quick Actions',
                items: [
                    { id: 'search', label: 'Search Transactions', description: 'Search across all transactions', icon: '🔍', shortcut: '⌘K', onSelect: () => {}, keywords: ['find'] },
                    { id: 'new-transfer', label: 'New Transfer', description: 'Create a new money transfer', icon: '💸', shortcut: '⌘T', onSelect: () => {}, keywords: ['send'] },
                    { id: 'new-budget', label: 'New Budget', description: 'Create a new budget plan', icon: '📋', shortcut: '⌘B', onSelect: () => {}, keywords: ['plan'] },
                ],
            },
        ],
    },
};

export const EmptyState: Story = {
    args: {
        isOpen: true,
        onClose: () => {},
        groups: [],
        emptyMessage: 'No commands available.',
    },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
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
        story: 'CommandMenu used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};

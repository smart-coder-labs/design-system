import type { Meta, StoryObj } from '@storybook/react';
import { MenuBar } from './MenuBar';
import { FileText, Settings, User, HelpCircle, LogOut, Bell, Search } from 'lucide-react';

const meta = {
    title: 'Components/MenuBar',
    component: MenuBar,
    tags: ['autodocs'],
} satisfies Meta<typeof MenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultMenus = [
    {
        id: 'file',
        label: 'File',
        items: [
            { id: 'new', label: 'New Transaction', icon: <FileText size={16} />, shortcut: '⌘N', onSelect: () => {} },
            { id: 'open', label: 'Open Statement', icon: <FileText size={16} />, shortcut: '⌘O', onSelect: () => {} },
            { id: 'divider-1', label: '', divider: true, onSelect: () => {} },
            { id: 'settings', label: 'Settings', icon: <Settings size={16} />, shortcut: '⌘,', onSelect: () => {} },
            { id: 'divider-2', label: '', divider: true, onSelect: () => {} },
            { id: 'exit', label: 'Exit', icon: <LogOut size={16} />, shortcut: '⌘Q', onSelect: () => {} },
        ],
    },
    {
        id: 'view',
        label: 'View',
        items: [
            { id: 'dashboard', label: 'Dashboard', icon: <Bell size={16} />, shortcut: '⌘1', onSelect: () => {} },
            { id: 'transactions', label: 'Transactions', icon: <Search size={16} />, shortcut: '⌘2', onSelect: () => {}, disabled: true },
            { id: 'portfolio', label: 'Portfolio', icon: <FileText size={16} />, shortcut: '⌘3', onSelect: () => {} },
        ],
    },
    {
        id: 'help',
        label: 'Help',
        items: [
            { id: 'docs', label: 'Documentation', icon: <HelpCircle size={16} />, onSelect: () => {} },
            { id: 'support', label: 'Contact Support', icon: <User size={16} />, onSelect: () => {} },
        ],
    },
];

export const Default: Story = {
    args: {
        menus: defaultMenus,
    },
};

export const WithLeftContent: Story = {
    args: {
        menus: defaultMenus,
        leftContent: <span style={{ fontWeight: 700, fontSize: 14, color: '#1C1C1E' }}>FinFlow</span>,
    },
};

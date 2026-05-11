import type { Meta, StoryObj } from '@storybook/react';
import { MenuBar } from './MenuBar';
import { FileText, Settings, User, HelpCircle, LogOut, Bell, Search, Wallet, TrendingUp, Shield } from 'lucide-react';
import { fn } from '@storybook/test';

const meta = {
    title: 'Components/MenuBar',
    component: MenuBar,
    tags: ['autodocs'],
} satisfies Meta<typeof MenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const fileMenu = {
    id: 'file',
    label: 'File',
    items: [
        { id: 'new', label: 'New Transaction', icon: <FileText size={16} />, shortcut: '⌘N', onSelect: fn() },
        { id: 'open', label: 'Open Statement', icon: <FileText size={16} />, shortcut: '⌘O', onSelect: fn() },
        { id: 'divider-1', label: '', divider: true, onSelect: fn() },
        { id: 'export', label: 'Export as CSV', icon: <FileText size={16} />, shortcut: '⇧⌘E', onSelect: fn() },
        { id: 'divider-2', label: '', divider: true, onSelect: fn() },
        { id: 'settings', label: 'Settings', icon: <Settings size={16} />, shortcut: '⌘,', onSelect: fn() },
        { id: 'exit', label: 'Exit', icon: <LogOut size={16} />, shortcut: '⌘Q', onSelect: fn() },
    ],
};

const viewMenu = {
    id: 'view',
    label: 'View',
    items: [
        { id: 'dashboard', label: 'Dashboard', icon: <Bell size={16} />, shortcut: '⌘1', onSelect: fn() },
        { id: 'transactions', label: 'Transactions', icon: <Search size={16} />, shortcut: '⌘2', onSelect: fn(), disabled: true },
        { id: 'portfolio', label: 'Portfolio', icon: <TrendingUp size={16} />, shortcut: '⌘3', onSelect: fn() },
        { id: 'wallet', label: 'Wallet', icon: <Wallet size={16} />, shortcut: '⌘4', onSelect: fn() },
    ],
};

const helpMenu = {
    id: 'help',
    label: 'Help',
    items: [
        { id: 'docs', label: 'Documentation', icon: <HelpCircle size={16} />, onSelect: fn() },
        { id: 'support', label: 'Contact Support', icon: <User size={16} />, onSelect: fn() },
    ],
};

const defaultMenus = [fileMenu, viewMenu, helpMenu];

export const Default: Story = {
    args: {
        menus: defaultMenus,
    },
};

export const WithAppLogo: Story = {
    args: {
        menus: defaultMenus,
        leftContent: <span style={{ fontWeight: 700, fontSize: 14, color: '#1C1C1E' }}>FinFlow</span>,
    },
};

export const WithRightContent: Story = {
    args: {
        menus: defaultMenus,
        leftContent: <span style={{ fontWeight: 700, fontSize: 14, color: '#1C1C1E' }}>FinFlow</span>,
        rightContent: (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Bell size={18} style={{ color: '#8E8E93' }} />
                <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: '#007AFF', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: 12, fontWeight: 600,
                }}>CR</div>
            </div>
        ),
    },
};

export const SingleMenu: Story = {
    args: {
        menus: [
            {
                id: 'account',
                label: 'Account',
                items: [
                    { id: 'profile', label: 'Profile', icon: <User size={16} />, onSelect: fn() },
                    { id: 'security', label: 'Security', icon: <Shield size={16} />, onSelect: fn() },
                    { id: 'divider', label: '', divider: true, onSelect: fn() },
                    { id: 'signout', label: 'Sign Out', icon: <LogOut size={16} />, shortcut: '⌘⇧Q', onSelect: fn() },
                ],
            },
        ],
        leftContent: <span style={{ fontWeight: 700, fontSize: 14, color: '#1C1C1E' }}>FinFlow</span>,
    },
};

export const ManyMenus: Story = {
    args: {
        menus: [
            { id: 'file', label: 'File', items: [
                { id: 'new', label: 'New', icon: <FileText size={16} />, shortcut: '⌘N', onSelect: fn() },
                { id: 'close', label: 'Close', icon: <FileText size={16} />, shortcut: '⌘W', onSelect: fn() },
            ]},
            { id: 'edit', label: 'Edit', items: [
                { id: 'undo', label: 'Undo', shortcut: '⌘Z', onSelect: fn() },
                { id: 'redo', label: 'Redo', shortcut: '⇧⌘Z', onSelect: fn() },
            ]},
            { id: 'view', label: 'View', items: [
                { id: 'zoom-in', label: 'Zoom In', shortcut: '⌘+', onSelect: fn() },
                { id: 'zoom-out', label: 'Zoom Out', shortcut: '⌘-', onSelect: fn() },
            ]},
            { id: 'window', label: 'Window', items: [
                { id: 'minimize', label: 'Minimize', shortcut: '⌘M', onSelect: fn() },
                { id: 'fullscreen', label: 'Full Screen', shortcut: '⌘F', onSelect: fn() },
            ]},
            { id: 'help', label: 'Help', items: [
                { id: 'about', label: 'About FinFlow', onSelect: fn() },
                { id: 'shortcuts', label: 'Keyboard Shortcuts', shortcut: '⌘/', onSelect: fn() },
            ]},
        ],
    },
};

export const DisabledItems: Story = {
    args: {
        menus: [
            {
                id: 'file',
                label: 'File',
                items: [
                    { id: 'new', label: 'New Transaction', icon: <FileText size={16} />, shortcut: '⌘N', onSelect: fn() },
                    { id: 'open', label: 'Open Statement', icon: <FileText size={16} />, shortcut: '⌘O', onSelect: fn() },
                    { id: 'divider', label: '', divider: true, onSelect: fn() },
                    { id: 'export', label: 'Export as CSV', icon: <FileText size={16} />, shortcut: '⇧⌘E', disabled: true, onSelect: fn() },
                    { id: 'print', label: 'Print...', icon: <FileText size={16} />, shortcut: '⌘P', disabled: true, onSelect: fn() },
                ],
            },
        ],
    },
};

export const CustomStyling: Story = {
    args: {
        menus: [
            {
                id: 'invest',
                label: 'Invest',
                items: [
                    { id: 'buy', label: 'Buy Crypto', icon: <TrendingUp size={16} />, shortcut: '⌘B', onSelect: fn() },
                    { id: 'sell', label: 'Sell Crypto', icon: <TrendingUp size={16} />, shortcut: '⌘S', onSelect: fn() },
                    { id: 'divider', label: '', divider: true, onSelect: fn() },
                    { id: 'recurring', label: 'Recurring Buy', icon: <Wallet size={16} />, shortcut: '⌘R', onSelect: fn() },
                    { id: 'portfolio', label: 'Portfolio', icon: <FileText size={16} />, shortcut: '⌘P', onSelect: fn() },
                ],
            },
            {
                id: 'transfer',
                label: 'Transfer',
                items: [
                    { id: 'send', label: 'Send Money', icon: <Wallet size={16} />, shortcut: '⌘⇧S', onSelect: fn() },
                    { id: 'request', label: 'Request Money', icon: <Wallet size={16} />, shortcut: '⌘⇧R', onSelect: fn() },
                ],
            },
        ],
        className: 'bg-blue-50 border-blue-200',
    },
};

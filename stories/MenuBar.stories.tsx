import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MenuBar, type MenuBarMenu } from '../components/MenuBar';

// Simple placeholder icons using emojis
const AppIcon = () => <span className="text-xl">🎨</span>;
const FileIcon = () => <span>📄</span>;
const FolderIcon = () => <span>📁</span>;
const SaveIcon = () => <span>💾</span>;
const PrintIcon = () => <span>🖨️</span>;
const EditIcon = () => <span>✏️</span>;
const CopyIcon = () => <span>📋</span>;
const CutIcon = () => <span>✂️</span>;
const PasteIcon = () => <span>📌</span>;
const SearchIcon = () => <span>🔍</span>;
const SettingsIcon = () => <span>⚙️</span>;
const HelpIcon = () => <span>❓</span>;
const UserIcon = () => <span>👤</span>;

const meta: Meta<typeof MenuBar> = {
    title: 'Navigation/MenuBar',
    component: MenuBar,
    tags: ['autodocs'],
    argTypes: {
        className: { control: false },
    },
};

export default meta;

type Story = StoryObj<typeof MenuBar>;

const sampleMenus: MenuBarMenu[] = [
    {
        id: 'file',
        label: 'File',
        items: [
            {
                id: 'new',
                label: 'New File',
                icon: <FileIcon />,
                shortcut: '⌘N',
                onSelect: () => console.log('New File'),
            },
            {
                id: 'open',
                label: 'Open...',
                icon: <FolderIcon />,
                shortcut: '⌘O',
                onSelect: () => console.log('Open'),
            },
            {
                id: 'divider-1',
                label: '',
                divider: true,
            },
            {
                id: 'save',
                label: 'Save',
                icon: <SaveIcon />,
                shortcut: '⌘S',
                onSelect: () => console.log('Save'),
            },
            {
                id: 'save-as',
                label: 'Save As...',
                icon: <SaveIcon />,
                shortcut: '⌘⇧S',
                onSelect: () => console.log('Save As'),
            },
            {
                id: 'divider-2',
                label: '',
                divider: true,
            },
            {
                id: 'print',
                label: 'Print',
                icon: <PrintIcon />,
                shortcut: '⌘P',
                onSelect: () => console.log('Print'),
            },
            {
                id: 'divider-3',
                label: '',
                divider: true,
            },
            {
                id: 'close',
                label: 'Close Window',
                shortcut: '⌘W',
                onSelect: () => console.log('Close'),
            },
        ],
    },
    {
        id: 'edit',
        label: 'Edit',
        items: [
            {
                id: 'undo',
                label: 'Undo',
                shortcut: '⌘Z',
                onSelect: () => console.log('Undo'),
            },
            {
                id: 'redo',
                label: 'Redo',
                shortcut: '⌘⇧Z',
                onSelect: () => console.log('Redo'),
            },
            {
                id: 'divider-1',
                label: '',
                divider: true,
            },
            {
                id: 'cut',
                label: 'Cut',
                icon: <CutIcon />,
                shortcut: '⌘X',
                onSelect: () => console.log('Cut'),
            },
            {
                id: 'copy',
                label: 'Copy',
                icon: <CopyIcon />,
                shortcut: '⌘C',
                onSelect: () => console.log('Copy'),
            },
            {
                id: 'paste',
                label: 'Paste',
                icon: <PasteIcon />,
                shortcut: '⌘V',
                onSelect: () => console.log('Paste'),
            },
            {
                id: 'divider-2',
                label: '',
                divider: true,
            },
            {
                id: 'find',
                label: 'Find',
                icon: <SearchIcon />,
                shortcut: '⌘F',
                onSelect: () => console.log('Find'),
            },
            {
                id: 'replace',
                label: 'Find and Replace',
                shortcut: '⌘⌥F',
                onSelect: () => console.log('Replace'),
            },
        ],
    },
    {
        id: 'view',
        label: 'View',
        items: [
            {
                id: 'zoom-in',
                label: 'Zoom In',
                shortcut: '⌘+',
                onSelect: () => console.log('Zoom In'),
            },
            {
                id: 'zoom-out',
                label: 'Zoom Out',
                shortcut: '⌘-',
                onSelect: () => console.log('Zoom Out'),
            },
            {
                id: 'reset-zoom',
                label: 'Reset Zoom',
                shortcut: '⌘0',
                onSelect: () => console.log('Reset Zoom'),
            },
            {
                id: 'divider-1',
                label: '',
                divider: true,
            },
            {
                id: 'fullscreen',
                label: 'Enter Fullscreen',
                shortcut: '⌘⌃F',
                onSelect: () => console.log('Fullscreen'),
            },
        ],
    },
    {
        id: 'help',
        label: 'Help',
        items: [
            {
                id: 'docs',
                label: 'Documentation',
                icon: <HelpIcon />,
                onSelect: () => console.log('Documentation'),
            },
            {
                id: 'shortcuts',
                label: 'Keyboard Shortcuts',
                shortcut: '⌘/',
                onSelect: () => console.log('Shortcuts'),
            },
            {
                id: 'divider-1',
                label: '',
                divider: true,
            },
            {
                id: 'about',
                label: 'About',
                onSelect: () => console.log('About'),
            },
        ],
    },
];

export const Default: Story = {
    args: {
        menus: sampleMenus,
        leftContent: (
            <div className="flex items-center gap-2">
                <AppIcon />
                <span className="text-sm font-semibold text-text-primary">Smart Coder</span>
            </div>
        ),
        rightContent: (
            <div className="flex items-center gap-2">
                <button className="p-1.5 rounded-md hover:bg-surface-secondary transition-colors">
                    <SettingsIcon />
                </button>
                <button className="p-1.5 rounded-md hover:bg-surface-secondary transition-colors">
                    <UserIcon />
                </button>
            </div>
        ),
    },
    render: (args) => (
        <div className="min-h-screen bg-background-secondary">
            <MenuBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-text-primary mb-4">
                        macOS-Style Menu Bar
                    </h1>
                    <p className="text-text-secondary mb-6">
                        Click on any menu item in the menu bar above to see the dropdown. When a menu is
                        open, you can hover over other menus to switch between them.
                    </p>
                    <div className="p-6 bg-surface-primary rounded-lg">
                        <h3 className="text-lg font-semibold text-text-primary mb-3">Features</h3>
                        <ul className="space-y-2 text-text-secondary">
                            <li>• Click to open/close menus</li>
                            <li>• Hover to switch between open menus</li>
                            <li>• Press ESC to close active menu</li>
                            <li>• Support for icons and keyboard shortcuts</li>
                            <li>• Dividers for menu organization</li>
                            <li>• Disabled items support</li>
                            <li>• Smooth animations</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ),
};

export const Simple: Story = {
    args: {
        menus: [
            {
                id: 'file',
                label: 'File',
                items: [
                    { id: 'new', label: 'New', shortcut: '⌘N', onSelect: () => { } },
                    { id: 'open', label: 'Open', shortcut: '⌘O', onSelect: () => { } },
                    { id: 'save', label: 'Save', shortcut: '⌘S', onSelect: () => { } },
                ],
            },
            {
                id: 'edit',
                label: 'Edit',
                items: [
                    { id: 'undo', label: 'Undo', shortcut: '⌘Z', onSelect: () => { } },
                    { id: 'redo', label: 'Redo', shortcut: '⌘⇧Z', onSelect: () => { } },
                ],
            },
        ],
    },
    render: (args) => (
        <div className="min-h-screen bg-background-secondary">
            <MenuBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Simple Menu Bar</h1>
                    <p className="text-text-secondary">
                        A minimal menu bar with just File and Edit menus.
                    </p>
                </div>
            </div>
        </div>
    ),
};

export const WithDisabledItems: Story = {
    args: {
        menus: [
            {
                id: 'file',
                label: 'File',
                items: [
                    { id: 'new', label: 'New File', icon: <FileIcon />, shortcut: '⌘N', onSelect: () => { } },
                    { id: 'open', label: 'Open...', icon: <FolderIcon />, shortcut: '⌘O', onSelect: () => { } },
                    { id: 'divider-1', label: '', divider: true },
                    { id: 'save', label: 'Save', icon: <SaveIcon />, shortcut: '⌘S', disabled: true, onSelect: () => { } },
                    { id: 'save-as', label: 'Save As...', shortcut: '⌘⇧S', disabled: true, onSelect: () => { } },
                    { id: 'divider-2', label: '', divider: true },
                    { id: 'print', label: 'Print', icon: <PrintIcon />, shortcut: '⌘P', onSelect: () => { } },
                ],
            },
        ],
        leftContent: (
            <div className="flex items-center gap-2">
                <AppIcon />
                <span className="text-sm font-semibold text-text-primary">My App</span>
            </div>
        ),
    },
    render: (args) => (
        <div className="min-h-screen bg-background-secondary">
            <MenuBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">
                        Menu Bar with Disabled Items
                    </h1>
                    <p className="text-text-secondary">
                        Some menu items are disabled (Save and Save As...).
                    </p>
                </div>
            </div>
        </div>
    ),
};

export const NoIcons: Story = {
    args: {
        menus: [
            {
                id: 'file',
                label: 'File',
                items: [
                    { id: 'new', label: 'New', shortcut: '⌘N', onSelect: () => { } },
                    { id: 'open', label: 'Open', shortcut: '⌘O', onSelect: () => { } },
                    { id: 'divider-1', label: '', divider: true },
                    { id: 'save', label: 'Save', shortcut: '⌘S', onSelect: () => { } },
                    { id: 'close', label: 'Close', shortcut: '⌘W', onSelect: () => { } },
                ],
            },
            {
                id: 'edit',
                label: 'Edit',
                items: [
                    { id: 'undo', label: 'Undo', shortcut: '⌘Z', onSelect: () => { } },
                    { id: 'redo', label: 'Redo', shortcut: '⌘⇧Z', onSelect: () => { } },
                    { id: 'divider-1', label: '', divider: true },
                    { id: 'cut', label: 'Cut', shortcut: '⌘X', onSelect: () => { } },
                    { id: 'copy', label: 'Copy', shortcut: '⌘C', onSelect: () => { } },
                    { id: 'paste', label: 'Paste', shortcut: '⌘V', onSelect: () => { } },
                ],
            },
        ],
    },
    render: (args) => (
        <div className="min-h-screen bg-background-secondary">
            <MenuBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">
                        Menu Bar without Icons
                    </h1>
                    <p className="text-text-secondary">
                        A clean menu bar with only text and shortcuts.
                    </p>
                </div>
            </div>
        </div>
    ),
};

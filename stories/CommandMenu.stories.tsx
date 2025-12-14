import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CommandMenu, type CommandMenuGroup } from '../components/CommandMenu';
import { Button } from '../components/Button';

// Simple placeholder icons using emojis
const HomeIcon = () => <span>🏠</span>;
const UserIcon = () => <span>👤</span>;
const SettingsIcon = () => <span>⚙️</span>;
const DocumentIcon = () => <span>📄</span>;
const FolderIcon = () => <span>📁</span>;
const SearchIcon = () => <span>🔍</span>;
const BellIcon = () => <span>🔔</span>;
const PlusIcon = () => <span>➕</span>;
const TrashIcon = () => <span>🗑️</span>;
const EditIcon = () => <span>✏️</span>;
const SaveIcon = () => <span>💾</span>;
const ShareIcon = () => <span>🔗</span>;

const meta: Meta<typeof CommandMenu> = {
    title: 'Navigation/CommandMenu',
    component: CommandMenu,
    tags: [],
    argTypes: {
        isOpen: {
            control: 'boolean',
            description: 'Whether the command menu is open',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text for search input',
        },
        emptyMessage: {
            control: 'text',
            description: 'Empty state message',
        },
        className: { control: false },
        onClose: { action: 'closed' },
    },
};

export default meta;

type Story = StoryObj<typeof CommandMenu>;

const sampleGroups: CommandMenuGroup[] = [
    {
        title: 'Navigation',
        items: [
            {
                id: 'home',
                label: 'Go to Home',
                description: 'Navigate to the home page',
                icon: <HomeIcon />,
                shortcut: '⌘H',
                onSelect: () => console.log('Navigate to Home'),
                keywords: ['dashboard', 'main'],
            },
            {
                id: 'profile',
                label: 'View Profile',
                description: 'See your profile information',
                icon: <UserIcon />,
                shortcut: '⌘P',
                onSelect: () => console.log('Navigate to Profile'),
                keywords: ['user', 'account'],
            },
            {
                id: 'settings',
                label: 'Open Settings',
                description: 'Configure your preferences',
                icon: <SettingsIcon />,
                shortcut: '⌘,',
                onSelect: () => console.log('Navigate to Settings'),
                keywords: ['preferences', 'config'],
            },
        ],
    },
    {
        title: 'Actions',
        items: [
            {
                id: 'new-doc',
                label: 'New Document',
                description: 'Create a new document',
                icon: <PlusIcon />,
                shortcut: '⌘N',
                onSelect: () => console.log('Create new document'),
                keywords: ['create', 'add'],
            },
            {
                id: 'search',
                label: 'Search Files',
                description: 'Find files and folders',
                icon: <SearchIcon />,
                shortcut: '⌘F',
                onSelect: () => console.log('Open search'),
                keywords: ['find', 'locate'],
            },
            {
                id: 'save',
                label: 'Save Changes',
                description: 'Save your current work',
                icon: <SaveIcon />,
                shortcut: '⌘S',
                onSelect: () => console.log('Save changes'),
            },
        ],
    },
    {
        title: 'Recent',
        items: [
            {
                id: 'doc1',
                label: 'Project Proposal.docx',
                description: 'Last edited 2 hours ago',
                icon: <DocumentIcon />,
                onSelect: () => console.log('Open Project Proposal'),
            },
            {
                id: 'folder1',
                label: 'Design Assets',
                description: 'Contains 24 files',
                icon: <FolderIcon />,
                onSelect: () => console.log('Open Design Assets'),
            },
        ],
    },
];

// Wrapper component to handle state in stories
const CommandMenuWithState = (args: any) => {
    const [isOpen, setIsOpen] = React.useState(args.isOpen ?? false);

    React.useEffect(() => {
        setIsOpen(args.isOpen);
    }, [args.isOpen]);

    // Handle Cmd+K or Ctrl+K to open
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(true);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="min-h-screen bg-background-secondary p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 p-6 bg-surface-primary rounded-lg">
                    <h2 className="text-2xl font-bold text-text-primary mb-4">Command Menu Demo</h2>
                    <p className="text-text-secondary mb-6">
                        Click the button below or press{' '}
                        <kbd className="px-2 py-1 text-xs font-semibold bg-surface-secondary rounded border border-border-primary">
                            ⌘K
                        </kbd>{' '}
                        to open the command menu.
                    </p>
                    <Button onClick={() => setIsOpen(true)}>
                        Open Command Menu
                    </Button>
                </div>

                <div className="p-6 bg-surface-primary rounded-lg">
                    <h3 className="text-lg font-semibold text-text-primary mb-4">Features</h3>
                    <ul className="space-y-2 text-text-secondary">
                        <li>• Keyboard navigation with arrow keys</li>
                        <li>• Real-time search filtering</li>
                        <li>• Grouped commands</li>
                        <li>• Keyboard shortcuts display</li>
                        <li>• Smooth animations</li>
                        <li>• macOS Spotlight-inspired design</li>
                    </ul>
                </div>
            </div>

            <CommandMenu
                {...args}
                isOpen={isOpen}
                onClose={() => {
                    setIsOpen(false);
                    args.onClose?.();
                }}
            />
        </div>
    );
};

export const Default: Story = {
    render: (args) => <CommandMenuWithState {...args} />,
    args: {
        isOpen: false,
        groups: sampleGroups,
        placeholder: 'Type a command or search...',
        emptyMessage: 'No results found.',
    },
};

export const SimpleCommands: Story = {
    render: (args) => <CommandMenuWithState {...args} />,
    args: {
        isOpen: false,
        groups: [
            {
                items: [
                    {
                        id: 'edit',
                        label: 'Edit',
                        icon: <EditIcon />,
                        shortcut: '⌘E',
                        onSelect: () => console.log('Edit'),
                    },
                    {
                        id: 'delete',
                        label: 'Delete',
                        icon: <TrashIcon />,
                        shortcut: '⌘⌫',
                        onSelect: () => console.log('Delete'),
                    },
                    {
                        id: 'share',
                        label: 'Share',
                        icon: <ShareIcon />,
                        shortcut: '⌘⇧S',
                        onSelect: () => console.log('Share'),
                    },
                ],
            },
        ],
        placeholder: 'What would you like to do?',
    },
};

export const WithDescriptions: Story = {
    render: (args) => <CommandMenuWithState {...args} />,
    args: {
        isOpen: false,
        groups: [
            {
                title: 'Quick Actions',
                items: [
                    {
                        id: 'new-project',
                        label: 'New Project',
                        description: 'Create a new project from scratch',
                        icon: <PlusIcon />,
                        shortcut: '⌘⇧N',
                        onSelect: () => console.log('New Project'),
                    },
                    {
                        id: 'import',
                        label: 'Import Files',
                        description: 'Import files from your computer',
                        icon: <FolderIcon />,
                        shortcut: '⌘I',
                        onSelect: () => console.log('Import'),
                    },
                    {
                        id: 'export',
                        label: 'Export Project',
                        description: 'Export your project as a file',
                        icon: <SaveIcon />,
                        shortcut: '⌘E',
                        onSelect: () => console.log('Export'),
                    },
                ],
            },
        ],
        placeholder: 'Search actions...',
    },
};

export const ManyCommands: Story = {
    render: (args) => <CommandMenuWithState {...args} />,
    args: {
        isOpen: false,
        groups: [
            {
                title: 'File',
                items: [
                    { id: 'new', label: 'New File', icon: <PlusIcon />, shortcut: '⌘N', onSelect: () => { } },
                    { id: 'open', label: 'Open File', icon: <FolderIcon />, shortcut: '⌘O', onSelect: () => { } },
                    { id: 'save', label: 'Save', icon: <SaveIcon />, shortcut: '⌘S', onSelect: () => { } },
                    { id: 'save-as', label: 'Save As...', icon: <SaveIcon />, shortcut: '⌘⇧S', onSelect: () => { } },
                ],
            },
            {
                title: 'Edit',
                items: [
                    { id: 'undo', label: 'Undo', shortcut: '⌘Z', onSelect: () => { } },
                    { id: 'redo', label: 'Redo', shortcut: '⌘⇧Z', onSelect: () => { } },
                    { id: 'cut', label: 'Cut', shortcut: '⌘X', onSelect: () => { } },
                    { id: 'copy', label: 'Copy', shortcut: '⌘C', onSelect: () => { } },
                    { id: 'paste', label: 'Paste', shortcut: '⌘V', onSelect: () => { } },
                ],
            },
            {
                title: 'View',
                items: [
                    { id: 'zoom-in', label: 'Zoom In', shortcut: '⌘+', onSelect: () => { } },
                    { id: 'zoom-out', label: 'Zoom Out', shortcut: '⌘-', onSelect: () => { } },
                    { id: 'reset-zoom', label: 'Reset Zoom', shortcut: '⌘0', onSelect: () => { } },
                    { id: 'fullscreen', label: 'Toggle Fullscreen', shortcut: '⌘⌃F', onSelect: () => { } },
                ],
            },
            {
                title: 'Help',
                items: [
                    { id: 'docs', label: 'Documentation', icon: <DocumentIcon />, onSelect: () => { } },
                    { id: 'shortcuts', label: 'Keyboard Shortcuts', onSelect: () => { } },
                    { id: 'about', label: 'About', onSelect: () => { } },
                ],
            },
        ],
        placeholder: 'Search commands...',
    },
};

export const NoShortcuts: Story = {
    render: (args) => <CommandMenuWithState {...args} />,
    args: {
        isOpen: false,
        groups: [
            {
                title: 'Pages',
                items: [
                    { id: 'home', label: 'Home', icon: <HomeIcon />, onSelect: () => { } },
                    { id: 'profile', label: 'Profile', icon: <UserIcon />, onSelect: () => { } },
                    { id: 'settings', label: 'Settings', icon: <SettingsIcon />, onSelect: () => { } },
                    { id: 'notifications', label: 'Notifications', icon: <BellIcon />, onSelect: () => { } },
                ],
            },
        ],
        placeholder: 'Where would you like to go?',
    },
};

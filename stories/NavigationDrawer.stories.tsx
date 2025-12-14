import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NavigationDrawer, type NavigationDrawerSection } from '../components/NavigationDrawer';
import { Button } from '../components/Button';

// Simple placeholder icons using emojis
const HomeIcon = () => <span>🏠</span>;
const UserIcon = () => <span>👤</span>;
const SettingsIcon = () => <span>⚙️</span>;
const DocumentIcon = () => <span>📄</span>;
const FolderIcon = () => <span>📁</span>;
const StarIcon = () => <span>⭐</span>;
const BellIcon = () => <span>🔔</span>;
const LogoutIcon = () => <span>🚪</span>;

const meta: Meta<typeof NavigationDrawer> = {
    title: 'Navigation/NavigationDrawer',
    component: NavigationDrawer,
    tags: [],
    argTypes: {
        isOpen: {
            control: 'boolean',
            description: 'Whether the drawer is open',
        },
        position: {
            control: 'select',
            options: ['left', 'right'],
            description: 'Drawer position',
        },
        width: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Drawer width',
        },
        showBackdrop: {
            control: 'boolean',
            description: 'Whether to show backdrop',
        },
        closeOnBackdropClick: {
            control: 'boolean',
            description: 'Whether clicking backdrop closes drawer',
        },
        belowNavBar: {
            control: 'boolean',
            description: 'Whether drawer should be positioned below navbar',
        },
        navBarHeight: {
            control: 'number',
            description: 'NavBar height in pixels',
        },
        className: { control: false },
        onClose: { action: 'closed' },
    },
};

export default meta;

type Story = StoryObj<typeof NavigationDrawer>;

const sampleSections: NavigationDrawerSection[] = [
    {
        title: 'Main',
        items: [
            { label: 'Home', icon: <HomeIcon />, active: true },
            { label: 'Profile', icon: <UserIcon /> },
            { label: 'Documents', icon: <DocumentIcon />, badge: '3' },
        ],
    },
    {
        title: 'Workspace',
        items: [
            { label: 'Projects', icon: <FolderIcon /> },
            { label: 'Favorites', icon: <StarIcon />, badge: '12' },
            { label: 'Notifications', icon: <BellIcon />, badge: '5' },
        ],
    },
    {
        title: 'Account',
        items: [
            { label: 'Settings', icon: <SettingsIcon /> },
            { label: 'Logout', icon: <LogoutIcon /> },
        ],
    },
];

// Wrapper component to handle state in stories
const NavigationDrawerWithState = (args: any) => {
    const [isOpen, setIsOpen] = React.useState(args.isOpen ?? false);

    React.useEffect(() => {
        setIsOpen(args.isOpen);
    }, [args.isOpen]);

    return (
        <div className="min-h-screen bg-background-secondary p-8">
            <Button onClick={() => setIsOpen(true)}>
                Open Navigation Drawer
            </Button>

            <NavigationDrawer
                {...args}
                isOpen={isOpen}
                onClose={() => {
                    setIsOpen(false);
                    args.onClose?.();
                }}
            />

            <div className="mt-8 p-6 bg-surface-primary rounded-lg">
                <h2 className="text-xl font-semibold text-text-primary mb-4">Page Content</h2>
                <p className="text-text-secondary mb-4">
                    Click the button above to open the navigation drawer.
                    The drawer will slide in from the {args.position || 'left'}.
                </p>
                <div className="grid gap-4 mt-6">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="h-24 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-500 opacity-80"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Default: Story = {
    render: (args) => <NavigationDrawerWithState {...args} />,
    args: {
        isOpen: false,
        position: 'left',
        width: 'md',
        sections: sampleSections,
        showBackdrop: true,
        closeOnBackdropClick: true,
    },
};

export const RightPosition: Story = {
    render: (args) => <NavigationDrawerWithState {...args} />,
    args: {
        isOpen: false,
        position: 'right',
        width: 'md',
        sections: sampleSections,
        showBackdrop: true,
        closeOnBackdropClick: true,
    },
};

export const SmallWidth: Story = {
    render: (args) => <NavigationDrawerWithState {...args} />,
    args: {
        isOpen: false,
        position: 'left',
        width: 'sm',
        sections: sampleSections,
        showBackdrop: true,
        closeOnBackdropClick: true,
    },
};

export const LargeWidth: Story = {
    render: (args) => <NavigationDrawerWithState {...args} />,
    args: {
        isOpen: false,
        position: 'left',
        width: 'lg',
        sections: sampleSections,
        showBackdrop: true,
        closeOnBackdropClick: true,
    },
};

export const WithHeader: Story = {
    render: (args) => <NavigationDrawerWithState {...args} />,
    args: {
        isOpen: false,
        position: 'left',
        width: 'md',
        sections: sampleSections,
        showBackdrop: true,
        closeOnBackdropClick: true,
        header: (
            <div>
                <h2 className="text-lg font-semibold text-text-primary">Navigation</h2>
                <p className="text-sm text-text-secondary">Choose your destination</p>
            </div>
        ),
    },
};

export const WithFooter: Story = {
    render: (args) => <NavigationDrawerWithState {...args} />,
    args: {
        isOpen: false,
        position: 'left',
        width: 'md',
        sections: sampleSections,
        showBackdrop: true,
        closeOnBackdropClick: true,
        footer: (
            <div className="text-xs text-text-tertiary text-center">
                © 2025 Apple Design System
            </div>
        ),
    },
};

export const WithHeaderAndFooter: Story = {
    render: (args) => <NavigationDrawerWithState {...args} />,
    args: {
        isOpen: false,
        position: 'left',
        width: 'md',
        sections: sampleSections,
        showBackdrop: true,
        closeOnBackdropClick: true,
        header: (
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold text-text-primary">Menu</h2>
                    <p className="text-sm text-text-secondary">Smart Coder Labs</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center">
                    <UserIcon />
                </div>
            </div>
        ),
        footer: (
            <Button variant="ghost" size="sm" className="w-full">
                <LogoutIcon /> <span className="ml-2">Sign Out</span>
            </Button>
        ),
    },
};

export const NoBackdrop: Story = {
    render: (args) => <NavigationDrawerWithState {...args} />,
    args: {
        isOpen: false,
        position: 'left',
        width: 'md',
        sections: sampleSections,
        showBackdrop: false,
        closeOnBackdropClick: false,
    },
};

export const PersistentBackdrop: Story = {
    render: (args) => <NavigationDrawerWithState {...args} />,
    args: {
        isOpen: false,
        position: 'left',
        width: 'md',
        sections: sampleSections,
        showBackdrop: true,
        closeOnBackdropClick: false,
    },
};

export const SingleSection: Story = {
    render: (args) => <NavigationDrawerWithState {...args} />,
    args: {
        isOpen: false,
        position: 'left',
        width: 'md',
        sections: [
            {
                items: [
                    { label: 'Home', icon: <HomeIcon />, active: true },
                    { label: 'Profile', icon: <UserIcon /> },
                    { label: 'Settings', icon: <SettingsIcon /> },
                ],
            },
        ],
        showBackdrop: true,
        closeOnBackdropClick: true,
    },
};

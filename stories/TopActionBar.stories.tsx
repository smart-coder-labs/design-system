import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TopActionBar, TopActionBarButton, TopActionBarIconButton } from '../components/TopActionBar';

// Simple placeholder icons using emojis
const MenuIcon = () => <span>☰</span>;
const SearchIcon = () => <span>🔍</span>;
const BellIcon = () => <span>🔔</span>;
const UserIcon = () => <span>👤</span>;
const SettingsIcon = () => <span>⚙️</span>;
const HomeIcon = () => <span>🏠</span>;
const PlusIcon = () => <span>➕</span>;

const meta: Meta<typeof TopActionBar> = {
    title: 'Navigation/TopActionBar',
    component: TopActionBar,
    tags: ['autodocs'],
    argTypes: {
        glass: {
            control: 'boolean',
            description: 'Whether to use glassmorphism effect',
        },
        sticky: {
            control: 'boolean',
            description: 'Whether the bar should be sticky',
        },
        showBorder: {
            control: 'boolean',
            description: 'Whether to show bottom border',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Size variant',
        },
        className: { control: false },
    },
};

export default meta;

type Story = StoryObj<typeof TopActionBar>;

export const Default: Story = {
    args: {
        leftContent: (
            <>
                <TopActionBarIconButton icon={<MenuIcon />} aria-label="Menu" />
                <span className="text-lg font-semibold text-text-primary">Smart Coder</span>
            </>
        ),
        rightContent: (
            <>
                <TopActionBarIconButton icon={<SearchIcon />} aria-label="Search" />
                <TopActionBarIconButton icon={<BellIcon />} aria-label="Notifications" badge="3" />
                <TopActionBarIconButton icon={<UserIcon />} aria-label="Profile" />
            </>
        ),
        sticky: true,
        showBorder: true,
        size: 'md',
    },
    render: (args) => (
        <div className="min-h-screen bg-background-secondary">
            <TopActionBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-text-primary mb-4">Page Content</h1>
                    <p className="text-text-secondary mb-8">
                        The Top Action Bar is sticky and will remain at the top as you scroll.
                    </p>
                    {[...Array(20)].map((_, i) => (
                        <p key={i} className="mb-4 text-text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    ))}
                </div>
            </div>
        </div>
    ),
};

export const WithCenterContent: Story = {
    args: {
        leftContent: (
            <>
                <TopActionBarIconButton icon={<MenuIcon />} aria-label="Menu" />
                <span className="text-lg font-semibold text-text-primary">Dashboard</span>
            </>
        ),
        centerContent: (
            <div className="flex items-center gap-2">
                <TopActionBarButton icon={<HomeIcon />}>Home</TopActionBarButton>
                <TopActionBarButton>Projects</TopActionBarButton>
                <TopActionBarButton active>Tasks</TopActionBarButton>
                <TopActionBarButton>Team</TopActionBarButton>
            </div>
        ),
        rightContent: (
            <>
                <TopActionBarButton variant="primary" icon={<PlusIcon />}>
                    New Task
                </TopActionBarButton>
                <TopActionBarIconButton icon={<SettingsIcon />} aria-label="Settings" />
            </>
        ),
        sticky: true,
        showBorder: true,
        size: 'md',
    },
    render: (args) => (
        <div className="min-h-screen bg-background-secondary">
            <TopActionBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-text-primary mb-4">Dashboard</h1>
                    <p className="text-text-secondary">
                        This example shows a Top Action Bar with navigation in the center.
                    </p>
                </div>
            </div>
        </div>
    ),
};

export const Glass: Story = {
    args: {
        leftContent: (
            <>
                <TopActionBarIconButton icon={<MenuIcon />} aria-label="Menu" />
                <span className="text-lg font-semibold text-text-primary">App Name</span>
            </>
        ),
        rightContent: (
            <>
                <TopActionBarIconButton icon={<SearchIcon />} aria-label="Search" />
                <TopActionBarIconButton icon={<BellIcon />} aria-label="Notifications" badge="5" />
                <TopActionBarIconButton icon={<UserIcon />} aria-label="Profile" />
            </>
        ),
        glass: true,
        sticky: true,
        showBorder: false,
        size: 'md',
    },
    render: (args) => (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            <TopActionBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-white mb-4">Glassmorphism Effect</h1>
                    <p className="text-white/80 mb-8">
                        The Top Action Bar uses a glass effect with backdrop blur.
                    </p>
                    {[...Array(15)].map((_, i) => (
                        <p key={i} className="mb-4 text-white/70">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    ))}
                </div>
            </div>
        </div>
    ),
};

export const Small: Story = {
    args: {
        leftContent: (
            <>
                <TopActionBarIconButton icon={<MenuIcon />} aria-label="Menu" />
                <span className="text-base font-semibold text-text-primary">Compact</span>
            </>
        ),
        rightContent: (
            <>
                <TopActionBarIconButton icon={<BellIcon />} aria-label="Notifications" />
                <TopActionBarIconButton icon={<UserIcon />} aria-label="Profile" />
            </>
        ),
        sticky: true,
        showBorder: true,
        size: 'sm',
    },
    render: (args) => (
        <div className="min-h-screen bg-background-secondary">
            <TopActionBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Small Size</h1>
                    <p className="text-text-secondary">
                        This is a compact version of the Top Action Bar.
                    </p>
                </div>
            </div>
        </div>
    ),
};

export const Large: Story = {
    args: {
        leftContent: (
            <>
                <TopActionBarIconButton icon={<MenuIcon />} aria-label="Menu" />
                <span className="text-xl font-semibold text-text-primary">Large App</span>
            </>
        ),
        rightContent: (
            <>
                <TopActionBarButton variant="primary" icon={<PlusIcon />}>
                    Create New
                </TopActionBarButton>
                <TopActionBarIconButton icon={<BellIcon />} aria-label="Notifications" badge="12" />
                <TopActionBarIconButton icon={<UserIcon />} aria-label="Profile" />
            </>
        ),
        sticky: true,
        showBorder: true,
        size: 'lg',
    },
    render: (args) => (
        <div className="min-h-screen bg-background-secondary">
            <TopActionBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-text-primary mb-4">Large Size</h1>
                    <p className="text-text-secondary">
                        This is a larger version of the Top Action Bar with more spacing.
                    </p>
                </div>
            </div>
        </div>
    ),
};

export const NotSticky: Story = {
    args: {
        leftContent: (
            <>
                <TopActionBarIconButton icon={<MenuIcon />} aria-label="Menu" />
                <span className="text-lg font-semibold text-text-primary">Non-Sticky</span>
            </>
        ),
        rightContent: (
            <>
                <TopActionBarIconButton icon={<SearchIcon />} aria-label="Search" />
                <TopActionBarIconButton icon={<UserIcon />} aria-label="Profile" />
            </>
        ),
        sticky: false,
        showBorder: true,
        size: 'md',
    },
    render: (args) => (
        <div className="min-h-screen bg-background-secondary">
            <TopActionBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-text-primary mb-4">Non-Sticky Bar</h1>
                    <p className="text-text-secondary mb-8">
                        This Top Action Bar is not sticky and will scroll away with the content.
                    </p>
                    {[...Array(20)].map((_, i) => (
                        <p key={i} className="mb-4 text-text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    ))}
                </div>
            </div>
        </div>
    ),
};

export const WithSearchBar: Story = {
    args: {
        leftContent: (
            <>
                <TopActionBarIconButton icon={<MenuIcon />} aria-label="Menu" />
                <span className="text-lg font-semibold text-text-primary">Search App</span>
            </>
        ),
        centerContent: (
            <div className="relative w-full max-w-md">
                <input
                    type="search"
                    placeholder="Search..."
                    className="w-full h-9 pl-10 pr-4 rounded-lg bg-surface-secondary border border-border-primary text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary">
                    <SearchIcon />
                </span>
            </div>
        ),
        rightContent: (
            <>
                <TopActionBarIconButton icon={<BellIcon />} aria-label="Notifications" badge="7" />
                <TopActionBarIconButton icon={<UserIcon />} aria-label="Profile" />
            </>
        ),
        sticky: true,
        showBorder: true,
        size: 'md',
    },
    render: (args) => (
        <div className="min-h-screen bg-background-secondary">
            <TopActionBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-text-primary mb-4">With Search Bar</h1>
                    <p className="text-text-secondary">
                        This example shows a search bar in the center of the Top Action Bar.
                    </p>
                </div>
            </div>
        </div>
    ),
};

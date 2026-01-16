import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar, type SidebarItem } from '../components/ui/Sidebar';
// Simple placeholder icons using emojis
const HomeIcon = () => <span>🏠</span>;
const UserIcon = () => <span>👤</span>;
const SettingsIcon = () => <span>⚙️</span>;

const meta: Meta<typeof Sidebar> = {
    title: 'Navigation/Sidebar',
    component: Sidebar,
    tags: [],
    argTypes: {
        className: { control: false },
    },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

const sampleItems: SidebarItem[] = [
    { label: 'Home', href: '/', icon: <HomeIcon />, active: true },
    { label: 'Profile', href: '/profile', icon: <UserIcon /> },
    { label: 'Settings', href: '/settings', icon: <SettingsIcon /> },
];

export const Primary: Story = {
    args: {
        items: sampleItems,
    },
};

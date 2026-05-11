import type { Meta, StoryObj } from '@storybook/react';
import { NavigationDrawer } from './NavigationDrawer';
import { Home, TrendingUp, Wallet, CreditCard, Settings, HelpCircle, BarChart3, Bell } from 'lucide-react';
import React from 'react';

const meta = {
    title: 'Components/NavigationDrawer',
    component: NavigationDrawer,
    tags: ['autodocs'],
} satisfies Meta<typeof NavigationDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultSections = [
    {
        title: 'Main',
        items: [
            { label: 'Dashboard', icon: <Home size={20} />, active: true, onClick: () => {} },
            { label: 'Transactions', icon: <TrendingUp size={20} />, onClick: () => {} },
            { label: 'Portfolio', icon: <BarChart3 size={20} />, badge: 3, onClick: () => {} },
        ],
    },
    {
        title: 'Finance',
        items: [
            { label: 'Wallets', icon: <Wallet size={20} />, onClick: () => {} },
            { label: 'Cards', icon: <CreditCard size={20} />, onClick: () => {} },
            { label: 'Notifications', icon: <Bell size={20} />, badge: '12', onClick: () => {} },
        ],
    },
    {
        title: 'Support',
        items: [
            { label: 'Settings', icon: <Settings size={20} />, onClick: () => {} },
            { label: 'Help Center', icon: <HelpCircle size={20} />, onClick: () => {} },
        ],
    },
];

export const Default: Story = {
    args: {
        isOpen: true,
        onClose: () => {},
        sections: defaultSections,
        header: (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 20, background: '#007AFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>CR</div>
                <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>Cesar Ruiz</div>
                    <div style={{ fontSize: 12, color: '#8E8E93' }}>Premium Account</div>
                </div>
            </div>
        ),
        footer: (
            <div style={{ padding: '8px 0' }}>
                <div style={{ fontSize: 12, color: '#8E8E93' }}>FinFlow v2.4.1</div>
            </div>
        ),
    },
};

export const RightPosition: Story = {
    args: {
        ...Default.args,
        position: 'right',
    },
};

export const SmallWidth: Story = {
    args: {
        ...Default.args,
        width: 'sm',
    },
};

export const LargeWidth: Story = {
    args: {
        ...Default.args,
        width: 'lg',
    },
};

export const WithoutBackdrop: Story = {
    args: {
        ...Default.args,
        showBackdrop: false,
    },
};

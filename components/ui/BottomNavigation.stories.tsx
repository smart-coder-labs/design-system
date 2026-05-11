import type { Meta, StoryObj } from '@storybook/react';
import { BottomNavigation } from './BottomNavigation';
import { Home, Search, Bell, User, Settings, Wallet, ChartBar, CreditCard } from 'lucide-react';

const meta = {
    title: 'Components/BottomNavigation',
    component: BottomNavigation,
    tags: ['autodocs'],
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

const mainNavItems = [
    { id: 'home', label: 'Home', icon: Home, active: true },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'notifications', label: 'Alerts', icon: Bell, badge: 3 },
    { id: 'profile', label: 'Profile', icon: User },
];

export const Default: Story = {
    args: {
        items: mainNavItems,
        variant: 'default',
        showLabels: true,
        size: 'md',
    },
};

export { Default as TabBar };

export const FinanceNav: Story = {
    args: {
        items: [
            { id: 'wallet', label: 'Wallet', icon: Wallet, active: true },
            { id: 'analytics', label: 'Analytics', icon: ChartBar },
            { id: 'cards', label: 'Cards', icon: CreditCard, badge: 'NEW' },
            { id: 'profile', label: 'Profile', icon: User },
        ],
        variant: 'default',
        size: 'md',
    },
};

export const GlassVariant: Story = {
    args: {
        items: mainNavItems,
        variant: 'glass',
    },
};

export const ElevatedVariant: Story = {
    args: {
        items: mainNavItems,
        variant: 'elevated',
    },
};

export const SmallSize: Story = {
    args: {
        items: mainNavItems,
        size: 'sm',
    },
};

export const LargeSize: Story = {
    args: {
        items: mainNavItems,
        size: 'lg',
    },
};

export const WithoutLabels: Story = {
    args: {
        items: mainNavItems,
        showLabels: false,
        size: 'md',
    },
};

export const WithDisabledItem: Story = {
    args: {
        items: [
            { id: 'home', label: 'Home', icon: Home, active: true },
            { id: 'search', label: 'Search', icon: Search, disabled: true },
            { id: 'notifications', label: 'Alerts', icon: Bell, badge: 3 },
            { id: 'profile', label: 'Profile', icon: User },
        ],
    },
};

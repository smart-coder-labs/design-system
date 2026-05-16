import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeader } from './SectionHeader';

const meta = {
    title: 'Layout/SectionHeader',
    component: SectionHeader,
    tags: ['autodocs'],
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Recent Transactions',
        description: 'View and manage your latest financial activities',
    },
};

export const WithAction: Story = {
    args: {
        title: 'Your Portfolio',
        description: 'Track your investments and assets',
        action: { label: 'View All', onClick: () => alert('View All clicked') },
    },
};

export const WithSecondaryAction: Story = {
    args: {
        title: 'Budgets',
        description: 'Monthly spending by category',
        action: { label: 'Create Budget', onClick: () => alert('Create Budget clicked') },
        secondaryAction: { label: 'Manage Categories', onClick: () => alert('Manage Categories clicked') },
    },
};

export const Compact: Story = {
    args: {
        title: 'Quick Stats',
        compact: true,
    },
};

export const DashboardOverview: Story = {
    args: {
        title: 'Dashboard Overview',
        description: 'Your financial summary for Q2 2025',
        action: { label: 'Export Report', onClick: () => alert('Exporting...') },
        secondaryAction: { label: 'Customize', onClick: () => alert('Customize') },
    },
};

export const AccountSettings: Story = {
    args: {
        title: 'Account Settings',
        description: 'Manage your personal information and preferences',
        action: { label: 'Save Changes', onClick: () => alert('Saved') },
    },
};

export const SecuritySection: Story = {
    args: {
        title: 'Security',
        description: 'Two-factor authentication, passwords, and recovery options',
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        title: 'Notifications',
        description: 'Manage your alert preferences',
        action: { label: 'Mark All Read', onClick: () => alert('All marked read') },
    },
};

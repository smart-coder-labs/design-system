import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Plus, Download, Filter } from 'lucide-react';

const meta: Meta<typeof SectionHeader> = {
    title: 'Layout/SectionHeader',
    component: SectionHeader,
    tags: [],
    argTypes: {
        size: {
            control: 'radio',
            options: ['sm', 'md', 'lg'],
        },
        divider: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
    args: {
        title: 'Account Settings',
        description: 'Manage your account settings and preferences.',
    },
};

export const WithActions: Story = {
    args: {
        title: 'Projects',
        description: 'View and manage your ongoing projects.',
        actions: (
            <>
                <Button variant="outline" leftIcon={<Filter size={16} />}>Filter</Button>
                <Button variant="primary" leftIcon={<Plus size={16} />}>New Project</Button>
            </>
        ),
    },
};

export const WithDivider: Story = {
    args: {
        title: 'Notifications',
        description: 'Choose what you want to be notified about.',
        divider: true,
        actions: <Button variant="ghost">Mark all as read</Button>,
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        title: 'Personal Information',
        description: 'Update your personal details here.',
        divider: true,
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        title: 'Dashboard',
        description: 'Welcome back! Here is an overview of your activity.',
        actions: (
            <Button variant="secondary" leftIcon={<Download size={16} />}>
                Export Report
            </Button>
        ),
    },
};

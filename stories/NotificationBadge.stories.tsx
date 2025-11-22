import type { Meta, StoryObj } from '@storybook/react';
import { NotificationBadge } from '../components/Badge';
import { Button } from '../components/Button';

const meta: Meta<typeof NotificationBadge> = {
    title: 'Components/NotificationBadge',
    component: NotificationBadge,
    tags: ['autodocs'],
    argTypes: {
        count: { control: 'number' },
        max: { control: 'number' },
        showZero: { control: 'boolean' },
        dot: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof NotificationBadge>;

export const Default: Story = {
    args: {
        count: 5,
        children: <Button>Notifications</Button>,
    },
};

export const WithMax: Story = {
    args: {
        count: 150,
        max: 99,
        children: <Button>Notifications</Button>,
    },
};

export const DotOnly: Story = {
    args: {
        dot: true,
        count: 5,
        children: <Button>Updates</Button>,
    },
};

import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
}

const meta = {
    title: 'Components/Table',
    component: Table,
    tags: ['autodocs'],
} satisfies Meta<typeof Table<User>>;

export default meta;
type Story = StoryObj<typeof meta>;

const users: User[] = [
    { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'Active' },
    { id: '3', name: 'Carol White', email: 'carol@example.com', role: 'Editor', status: 'Inactive' },
    { id: '4', name: 'David Brown', email: 'david@example.com', role: 'User', status: 'Active' },
    { id: '5', name: 'Eve Davis', email: 'eve@example.com', role: 'Moderator', status: 'Pending' },
];

export const Default: Story = {
    args: {
        columns: [
            { key: 'name', header: 'Name' },
            { key: 'email', header: 'Email' },
            { key: 'role', header: 'Role' },
            { key: 'status', header: 'Status' },
        ],
        data: users,
        density: 'comfortable',
    },
};

export const Striped: Story = {
    args: {
        columns: [
            { key: 'name', header: 'Name' },
            { key: 'email', header: 'Email' },
            { key: 'role', header: 'Role' },
            { key: 'status', header: 'Status' },
        ],
        data: users,
        striped: true,
        density: 'comfortable',
    },
};

export const Sortable: Story = {
    args: {
        columns: [
            { key: 'name', header: 'Name', sortable: true },
            { key: 'email', header: 'Email', sortable: true },
            { key: 'role', header: 'Role', sortable: true },
            { key: 'status', header: 'Status', sortable: true },
        ],
        data: users,
        striped: true,
        hoverable: true,
        density: 'comfortable',
    },
};

export const Selectable: Story = {
    args: {
        columns: [
            { key: 'name', header: 'Name' },
            { key: 'email', header: 'Email' },
            { key: 'role', header: 'Role' },
            { key: 'status', header: 'Status' },
        ],
        data: users,
        selectable: true,
        hoverable: true,
        density: 'comfortable',
    },
};

export const Compact: Story = {
    args: {
        columns: [
            { key: 'name', header: 'Name' },
            { key: 'email', header: 'Email' },
            { key: 'role', header: 'Role' },
            { key: 'status', header: 'Status' },
        ],
        data: users,
        striped: true,
        density: 'compact',
    },
};

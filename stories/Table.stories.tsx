import type { Meta, StoryObj } from '@storybook/react';
import { Table, Column } from '../components/ui/Table';
import { Tag } from '../components/ui/Tag';
import { useState } from 'react';

type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'Active' | 'Inactive' | 'Pending';
};

const meta = {
    title: 'Data Display/Table',
    component: Table<User>,
    tags: [],
    argTypes: {
        striped: {
            control: 'boolean',
        },
        hoverable: {
            control: 'boolean',
        },
        selectable: {
            control: 'boolean',
        },
        density: {
            control: 'select',
            options: ['comfortable', 'compact'],
        },
    },
} satisfies Meta<typeof Table<User>>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Manager', status: 'Active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Pending' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', role: 'Admin', status: 'Active' },
    { id: 7, name: 'Eve Anderson', email: 'eve@example.com', role: 'User', status: 'Active' },
    { id: 8, name: 'Frank Miller', email: 'frank@example.com', role: 'Manager', status: 'Inactive' },
    { id: 9, name: 'Grace Lee', email: 'grace@example.com', role: 'User', status: 'Active' },
    { id: 10, name: 'Henry Wilson', email: 'henry@example.com', role: 'User', status: 'Pending' },
    { id: 11, name: 'Ivy Chen', email: 'ivy@example.com', role: 'Admin', status: 'Active' },
    { id: 12, name: 'Jack Ryan', email: 'jack@example.com', role: 'User', status: 'Active' },
];

const columns: Column<User>[] = [
    { key: 'id', header: 'ID', width: '80px', sortable: true },
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email', sortable: true },
    { key: 'role', header: 'Role', sortable: true },
    {
        key: 'status',
        header: 'Status',
        sortable: true,
        render: (value: User['status']) => {
            const variant = value === 'Active' ? 'success' : value === 'Inactive' ? 'error' : 'warning';
            return <Tag label={value} variant={variant} size="sm" />;
        },
    },
];

export const Default: Story = {
    args: {
        columns,
        data: sampleData,
    },
};

export const Striped: Story = {
    args: {
        columns,
        data: sampleData,
        striped: true,
    },
};

export const Compact: Story = {
    args: {
        columns,
        data: sampleData,
        density: 'compact',
    },
};

export const WithoutHover: Story = {
    args: {
        columns,
        data: sampleData,
        hoverable: false,
    },
};

export const Selectable: Story = {
    args: {
        columns,
        data: sampleData,
        selectable: true,
    },
};

export const WithPagination: Story = {
    args: {
        columns,
        data: sampleData,
    },
    render: () => {
        const [page, setPage] = useState(1);

        return (
            <Table
                columns={columns}
                data={sampleData}
                page={page}
                pageSize={5}
                onPageChange={setPage}
            />
        );
    },
};

export const WithSorting: Story = {
    args: {
        columns,
        data: sampleData,
    },
    render: () => {
        const [data, setData] = useState(sampleData);

        const handleSort = (key: keyof User, direction: 'asc' | 'desc') => {
            const sorted = [...data].sort((a, b) => {
                const aVal = a[key];
                const bVal = b[key];

                if (aVal < bVal) return direction === 'asc' ? -1 : 1;
                if (aVal > bVal) return direction === 'asc' ? 1 : -1;
                return 0;
            });

            setData(sorted);
        };

        return (
            <Table
                columns={columns}
                data={data}
                onSortChange={handleSort}
            />
        );
    },
};

export const FullFeatured: Story = {
    args: {
        columns,
        data: sampleData,
    },
    render: () => {
        const [data, setData] = useState(sampleData);
        const [page, setPage] = useState(1);

        const handleSort = (key: keyof User, direction: 'asc' | 'desc') => {
            const sorted = [...data].sort((a, b) => {
                const aVal = a[key];
                const bVal = b[key];

                if (aVal < bVal) return direction === 'asc' ? -1 : 1;
                if (aVal > bVal) return direction === 'asc' ? 1 : -1;
                return 0;
            });

            setData(sorted);
        };

        return (
            <Table
                columns={columns}
                data={data}
                selectable
                striped
                hoverable
                page={page}
                pageSize={5}
                onPageChange={setPage}
                onSortChange={handleSort}
            />
        );
    },
};

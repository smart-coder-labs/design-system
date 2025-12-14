import type { Meta, StoryObj } from '@storybook/react';
import { PermissionsMatrix, Role, Permission } from '../components/PermissionsMatrix';
import { useState } from 'react';

const meta: Meta<typeof PermissionsMatrix> = {
    title: 'Data Display/PermissionsMatrix',
    component: PermissionsMatrix,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `
# Permissions Matrix

A matrix component for managing permissions across different roles.

## Features

- 📊 **Matrix View**: Visualizes permissions vs roles.
- 📂 **Categorization**: Groups permissions by category.
- 🖱️ **Interactive**: Toggle individual permissions or entire categories.
- 📱 **Responsive**: Horizontally scrollable for many roles.
`,
            },
        },
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof PermissionsMatrix>;

const roles: Role[] = [
    { id: 'admin', name: 'Admin', description: 'Full access to all resources' },
    { id: 'editor', name: 'Editor', description: 'Can edit content but not settings' },
    { id: 'viewer', name: 'Viewer', description: 'Read-only access' },
];

const permissions: Permission[] = [
    // User Management
    { id: 'users.view', name: 'View Users', category: 'User Management', description: 'View user list and details' },
    { id: 'users.create', name: 'Create Users', category: 'User Management', description: 'Add new users' },
    { id: 'users.edit', name: 'Edit Users', category: 'User Management', description: 'Modify user details' },
    { id: 'users.delete', name: 'Delete Users', category: 'User Management', description: 'Remove users' },

    // Content
    { id: 'posts.view', name: 'View Posts', category: 'Content', description: 'Read blog posts' },
    { id: 'posts.create', name: 'Create Posts', category: 'Content', description: 'Write new posts' },
    { id: 'posts.publish', name: 'Publish Posts', category: 'Content', description: 'Make posts public' },

    // Settings
    { id: 'settings.view', name: 'View Settings', category: 'Settings', description: 'View system configuration' },
    { id: 'settings.edit', name: 'Edit Settings', category: 'Settings', description: 'Modify system configuration' },
];

const initialRolePermissions = {
    admin: ['users.view', 'users.create', 'users.edit', 'users.delete', 'posts.view', 'posts.create', 'posts.publish', 'settings.view', 'settings.edit'],
    editor: ['users.view', 'posts.view', 'posts.create', 'posts.publish'],
    viewer: ['users.view', 'posts.view'],
};

const PermissionsMatrixWithState = (args: any) => {
    const [rolePermissions, setRolePermissions] = useState(args.rolePermissions || initialRolePermissions);

    const handleChange = (roleId: string, newPermissions: string[]) => {
        setRolePermissions({
            ...rolePermissions,
            [roleId]: newPermissions,
        });
    };

    return (
        <PermissionsMatrix
            {...args}
            rolePermissions={rolePermissions}
            onChange={handleChange}
        />
    );
};

export const Default: Story = {
    render: (args) => <PermissionsMatrixWithState {...args} />,
    args: {
        roles,
        permissions,
        rolePermissions: initialRolePermissions,
    },
};

export const ManyRoles: Story = {
    render: (args) => <PermissionsMatrixWithState {...args} />,
    args: {
        roles: [
            ...roles,
            { id: 'manager', name: 'Manager', description: 'Team lead' },
            { id: 'auditor', name: 'Auditor', description: 'Compliance checks' },
            { id: 'support', name: 'Support', description: 'Customer support' },
            { id: 'guest', name: 'Guest', description: 'Limited access' },
        ],
        permissions,
        rolePermissions: initialRolePermissions,
    },
};

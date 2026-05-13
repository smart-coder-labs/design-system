import type { Meta, StoryObj } from '@storybook/react';
import { PermissionsMatrix, type Role, type Permission } from './PermissionsMatrix';
import { fn } from 'storybook/test';

const meta = {
  title: 'Components/PermissionsMatrix',
  component: PermissionsMatrix,
  tags: ['autodocs'],
} satisfies Meta<typeof PermissionsMatrix>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultRoles: Role[] = [
  { id: 'admin', name: 'Admin', description: 'Full system access' },
  { id: 'editor', name: 'Editor', description: 'Can create and edit content' },
  { id: 'viewer', name: 'Viewer', description: 'Read-only access' },
];

const defaultPermissions: Permission[] = [
  { id: 'read', name: 'Read', description: 'View documents', category: 'Content' },
  { id: 'write', name: 'Write', description: 'Create and edit documents', category: 'Content' },
  { id: 'delete', name: 'Delete', description: 'Remove documents', category: 'Content' },
  { id: 'share', name: 'Share', description: 'Share with external users', category: 'Collaboration' },
  { id: 'export', name: 'Export', description: 'Export to CSV/PDF', category: 'Collaboration' },
];

export const Default: Story = {
  args: {
    roles: defaultRoles,
    permissions: defaultPermissions,
    rolePermissions: {
      admin: ['read', 'write', 'delete', 'share', 'export'],
      editor: ['read', 'write', 'share', 'export'],
      viewer: ['read'],
    },
    onChange: fn(),
  },
};

export const CryptoPermissions: Story = {
  args: {
    roles: [
      { id: 'owner', name: 'Owner', description: 'Full wallet control' },
      { id: 'trader', name: 'Trader', description: 'Can trade assets' },
      { id: 'auditor', name: 'Auditor', description: 'View-only for compliance' },
    ],
    permissions: [
      { id: 'view-balance', name: 'View Balance', category: 'Read' },
      { id: 'view-history', name: 'View History', category: 'Read' },
      { id: 'trade', name: 'Trade', description: 'Buy and sell assets', category: 'Write' },
      { id: 'withdraw', name: 'Withdraw', description: 'Withdraw to external wallet', category: 'Write' },
      { id: 'api-access', name: 'API Access', description: 'Programmatic account access', category: 'Advanced' },
      { id: 'whitelist', name: 'Whitelist Addresses', category: 'Advanced' },
    ],
    rolePermissions: {
      owner: ['view-balance', 'view-history', 'trade', 'withdraw', 'api-access', 'whitelist'],
      trader: ['view-balance', 'view-history', 'trade'],
      auditor: ['view-balance', 'view-history'],
    },
    onChange: fn(),
  },
};

export const Editable: Story = {
  args: {
    roles: defaultRoles,
    permissions: defaultPermissions,
    rolePermissions: {
      admin: ['read', 'write', 'delete', 'share', 'export'],
      editor: ['read', 'write', 'share'],
      viewer: ['read'],
    },
    onChange: fn(),
  },
};

export const SingleRole: Story = {
  args: {
    roles: [
      { id: 'superadmin', name: 'Super Admin', description: 'All permissions' },
    ],
    permissions: defaultPermissions,
    rolePermissions: {
      superadmin: ['read', 'write', 'delete', 'share', 'export'],
    },
    onChange: fn(),
  },
};

export const ManyRoles: Story = {
  args: {
    roles: [
      { id: 'superadmin', name: 'Super Admin' },
      { id: 'admin', name: 'Admin' },
      { id: 'manager', name: 'Manager' },
      { id: 'editor', name: 'Editor' },
      { id: 'contributor', name: 'Contributor' },
      { id: 'viewer', name: 'Viewer' },
    ],
    permissions: [
      { id: 'read', name: 'Read', category: 'Content' },
      { id: 'write', name: 'Write', category: 'Content' },
      { id: 'delete', name: 'Delete', category: 'Content' },
      { id: 'publish', name: 'Publish', category: 'Content' },
      { id: 'manage-users', name: 'Manage Users', category: 'Admin' },
      { id: 'manage-roles', name: 'Manage Roles', category: 'Admin' },
    ],
    rolePermissions: {
      superadmin: ['read', 'write', 'delete', 'publish', 'manage-users', 'manage-roles'],
      admin: ['read', 'write', 'delete', 'publish', 'manage-users'],
      manager: ['read', 'write', 'delete', 'publish'],
      editor: ['read', 'write', 'publish'],
      contributor: ['read', 'write'],
      viewer: ['read'],
    },
    onChange: fn(),
  },
};

export const ManyPermissions: Story = {
  args: {
    roles: defaultRoles,
    permissions: [
      { id: 'view-accounts', name: 'View Accounts', category: 'Accounts' },
      { id: 'create-accounts', name: 'Create Accounts', category: 'Accounts' },
      { id: 'delete-accounts', name: 'Delete Accounts', category: 'Accounts' },
      { id: 'view-transactions', name: 'View Transactions', category: 'Transactions' },
      { id: 'create-transactions', name: 'Create Transactions', category: 'Transactions' },
      { id: 'approve-transactions', name: 'Approve Transactions', category: 'Transactions' },
      { id: 'view-reports', name: 'View Reports', category: 'Reports' },
      { id: 'export-reports', name: 'Export Reports', category: 'Reports' },
      { id: 'manage-settings', name: 'Manage Settings', category: 'Admin' },
      { id: 'audit-logs', name: 'View Audit Logs', category: 'Admin' },
    ],
    rolePermissions: {
      admin: ['view-accounts', 'create-accounts', 'delete-accounts', 'view-transactions', 'create-transactions', 'approve-transactions', 'view-reports', 'export-reports', 'manage-settings', 'audit-logs'],
      editor: ['view-accounts', 'view-transactions', 'create-transactions', 'view-reports', 'export-reports'],
      viewer: ['view-accounts', 'view-transactions', 'view-reports'],
    },
    onChange: fn(),
  },
};

export const AllGranted: Story = {
  args: {
    roles: defaultRoles,
    permissions: defaultPermissions,
    rolePermissions: {
      admin: ['read', 'write', 'delete', 'share', 'export'],
      editor: ['read', 'write', 'delete', 'share', 'export'],
      viewer: ['read', 'write', 'delete', 'share', 'export'],
    },
    onChange: fn(),
  },
};

export const NoneGranted: Story = {
  args: {
    roles: defaultRoles,
    permissions: defaultPermissions,
    rolePermissions: {
      admin: [],
      editor: [],
      viewer: [],
    },
    onChange: fn(),
  },
};

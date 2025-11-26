import type { Meta, StoryObj } from '@storybook/react';
import { SecurityActivityLog } from './SecurityActivityLog';

const meta = {
    title: 'Components/SecurityActivityLog',
    component: SecurityActivityLog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SecurityActivityLog>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleEvents = [
    {
        id: '1',
        type: 'login' as const,
        description: 'Signed in from new device',
        timestamp: '2 minutes ago',
        location: 'San Francisco, CA',
        ipAddress: '192.168.1.100',
        device: 'MacBook Pro',
        status: 'success' as const,
        user: 'John Doe',
    },
    {
        id: '2',
        type: 'password_change' as const,
        description: 'Password updated successfully',
        timestamp: '1 hour ago',
        location: 'San Francisco, CA',
        ipAddress: '192.168.1.100',
        device: 'iPhone 15 Pro',
        status: 'success' as const,
        user: 'John Doe',
    },
    {
        id: '3',
        type: '2fa_enabled' as const,
        description: 'Two-factor authentication enabled',
        timestamp: '3 hours ago',
        location: 'San Francisco, CA',
        ipAddress: '192.168.1.100',
        device: 'MacBook Pro',
        status: 'success' as const,
        user: 'John Doe',
    },
    {
        id: '4',
        type: 'suspicious_activity' as const,
        description: 'Failed login attempt detected',
        timestamp: '1 day ago',
        location: 'Unknown Location',
        ipAddress: '203.0.113.45',
        device: 'Unknown Device',
        status: 'error' as const,
    },
    {
        id: '5',
        type: 'device_added' as const,
        description: 'New device authorized',
        timestamp: '2 days ago',
        location: 'New York, NY',
        ipAddress: '192.168.1.101',
        device: 'iPad Air',
        status: 'success' as const,
        user: 'John Doe',
    },
];

export const Default: Story = {
    args: {
        events: sampleEvents,
    },
};

export const WithClickHandler: Story = {
    args: {
        events: sampleEvents,
        onEventClick: (event) => console.log('Event clicked:', event),
    },
};

export const LoginEvents: Story = {
    args: {
        events: [
            {
                id: '1',
                type: 'login' as const,
                description: 'Signed in successfully',
                timestamp: '5 minutes ago',
                location: 'San Francisco, CA',
                ipAddress: '192.168.1.100',
                device: 'MacBook Pro',
                status: 'success' as const,
                user: 'John Doe',
            },
            {
                id: '2',
                type: 'login' as const,
                description: 'Signed in from mobile',
                timestamp: '2 hours ago',
                location: 'San Francisco, CA',
                ipAddress: '192.168.1.101',
                device: 'iPhone 15 Pro',
                status: 'success' as const,
                user: 'John Doe',
            },
            {
                id: '3',
                type: 'logout' as const,
                description: 'Signed out',
                timestamp: '5 hours ago',
                location: 'San Francisco, CA',
                ipAddress: '192.168.1.100',
                device: 'MacBook Pro',
                status: 'success' as const,
                user: 'John Doe',
            },
        ],
    },
};

export const SecurityAlerts: Story = {
    args: {
        events: [
            {
                id: '1',
                type: 'suspicious_activity' as const,
                description: 'Multiple failed login attempts',
                timestamp: '10 minutes ago',
                location: 'Unknown Location',
                ipAddress: '203.0.113.45',
                device: 'Unknown Device',
                status: 'error' as const,
            },
            {
                id: '2',
                type: 'suspicious_activity' as const,
                description: 'Login from unusual location',
                timestamp: '1 hour ago',
                location: 'Moscow, Russia',
                ipAddress: '198.51.100.23',
                device: 'Windows PC',
                status: 'warning' as const,
            },
            {
                id: '3',
                type: 'password_reset' as const,
                description: 'Password reset requested',
                timestamp: '2 hours ago',
                location: 'San Francisco, CA',
                ipAddress: '192.168.1.100',
                device: 'MacBook Pro',
                status: 'warning' as const,
                user: 'John Doe',
            },
        ],
    },
};

export const DeviceManagement: Story = {
    args: {
        events: [
            {
                id: '1',
                type: 'device_added' as const,
                description: 'New device authorized',
                timestamp: '1 hour ago',
                location: 'San Francisco, CA',
                ipAddress: '192.168.1.102',
                device: 'iPad Pro',
                status: 'success' as const,
                user: 'John Doe',
            },
            {
                id: '2',
                type: 'device_removed' as const,
                description: 'Device removed from account',
                timestamp: '3 hours ago',
                location: 'San Francisco, CA',
                ipAddress: '192.168.1.100',
                device: 'Old iPhone',
                status: 'success' as const,
                user: 'John Doe',
            },
        ],
    },
};

export const TwoFactorAuth: Story = {
    args: {
        events: [
            {
                id: '1',
                type: '2fa_enabled' as const,
                description: 'Two-factor authentication enabled',
                timestamp: '1 hour ago',
                location: 'San Francisco, CA',
                ipAddress: '192.168.1.100',
                device: 'MacBook Pro',
                status: 'success' as const,
                user: 'John Doe',
            },
            {
                id: '2',
                type: '2fa_disabled' as const,
                description: 'Two-factor authentication disabled',
                timestamp: '1 day ago',
                location: 'San Francisco, CA',
                ipAddress: '192.168.1.100',
                device: 'MacBook Pro',
                status: 'warning' as const,
                user: 'John Doe',
            },
        ],
    },
};

export const PermissionChanges: Story = {
    args: {
        events: [
            {
                id: '1',
                type: 'permission_granted' as const,
                description: 'Admin access granted',
                timestamp: '30 minutes ago',
                location: 'San Francisco, CA',
                status: 'success' as const,
                user: 'Admin User',
            },
            {
                id: '2',
                type: 'permission_revoked' as const,
                description: 'Write access revoked',
                timestamp: '2 hours ago',
                location: 'San Francisco, CA',
                status: 'success' as const,
                user: 'Admin User',
            },
        ],
    },
};

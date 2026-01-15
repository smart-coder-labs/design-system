import type { Meta, StoryObj } from '@storybook/react';
import { DeviceList } from './DeviceList';

const meta = {
    title: 'Components/DeviceList',
    component: DeviceList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DeviceList>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleDevices = [
    {
        id: '1',
        name: 'MacBook Pro',
        type: 'laptop' as const,
        os: 'macOS Sonoma',
        browser: 'Safari 17.2',
        lastActive: '2 minutes ago',
        location: 'San Francisco, CA',
        ipAddress: '192.168.1.100',
        status: 'active' as const,
        isCurrentDevice: true,
    },
    {
        id: '2',
        name: 'iPhone 15 Pro',
        type: 'phone' as const,
        os: 'iOS 17.2',
        browser: 'Safari Mobile',
        lastActive: '1 hour ago',
        location: 'San Francisco, CA',
        ipAddress: '192.168.1.101',
        status: 'active' as const,
    },
    {
        id: '3',
        name: 'iPad Air',
        type: 'tablet' as const,
        os: 'iPadOS 17.2',
        browser: 'Safari',
        lastActive: '3 days ago',
        location: 'New York, NY',
        ipAddress: '192.168.1.102',
        status: 'inactive' as const,
    },
    {
        id: '4',
        name: 'Work Desktop',
        type: 'desktop' as const,
        os: 'Windows 11',
        browser: 'Chrome 120',
        lastActive: '1 week ago',
        location: 'Los Angeles, CA',
        ipAddress: '192.168.1.103',
        status: 'suspended' as const,
    },
];

export const Default: Story = {
    args: {
        devices: sampleDevices,
        showActions: true,
    },
};

export const WithActions: Story = {
    args: {
        devices: sampleDevices,
        showActions: true,
        onRemove: (device) => console.log('Remove device:', device),
        onMoreActions: (device) => console.log('More actions:', device),
    },
};

export const WithoutActions: Story = {
    args: {
        devices: sampleDevices,
        showActions: false,
    },
};

export const SingleDevice: Story = {
    args: {
        devices: [sampleDevices[0]],
        showActions: true,
    },
};

export const MobileDevices: Story = {
    args: {
        devices: [
            {
                id: '1',
                name: 'iPhone 15 Pro Max',
                type: 'phone' as const,
                os: 'iOS 17.2',
                browser: 'Safari Mobile',
                lastActive: 'Just now',
                location: 'San Francisco, CA',
                status: 'active' as const,
                isCurrentDevice: true,
            },
            {
                id: '2',
                name: 'Samsung Galaxy S23',
                type: 'phone' as const,
                os: 'Android 14',
                browser: 'Chrome Mobile',
                lastActive: '5 minutes ago',
                location: 'San Francisco, CA',
                status: 'active' as const,
            },
            {
                id: '3',
                name: 'Google Pixel 8',
                type: 'phone' as const,
                os: 'Android 14',
                browser: 'Chrome Mobile',
                lastActive: '2 hours ago',
                location: 'Seattle, WA',
                status: 'inactive' as const,
            },
        ],
        showActions: true,
    },
};

export const SuspendedDevices: Story = {
    args: {
        devices: [
            {
                id: '1',
                name: 'Old Laptop',
                type: 'laptop' as const,
                os: 'Windows 10',
                browser: 'Chrome 100',
                lastActive: '3 months ago',
                location: 'Unknown',
                status: 'suspended' as const,
            },
            {
                id: '2',
                name: 'Lost Phone',
                type: 'phone' as const,
                os: 'iOS 16',
                browser: 'Safari',
                lastActive: '1 month ago',
                location: 'Unknown',
                status: 'suspended' as const,
            },
        ],
        showActions: true,
    },
};

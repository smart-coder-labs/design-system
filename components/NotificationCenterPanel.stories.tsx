import type { Meta, StoryObj } from '@storybook/react';
import { NotificationCenterPanel, type Notification } from './NotificationCenterPanel';
import { Mail, Calendar, AlertCircle, CheckCircle2, Info } from 'lucide-react';
import { useState } from 'react';

const meta = {
    title: 'Components/NotificationCenterPanel',
    component: NotificationCenterPanel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NotificationCenterPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleNotifications = [
    {
        id: '1',
        title: 'New message from Sarah',
        message: 'Hey! Are we still on for the meeting tomorrow?',
        type: 'info' as const,
        timestamp: '2 minutes ago',
        read: false,
        icon: <Mail className="w-5 h-5" />,
    },
    {
        id: '2',
        title: 'Meeting reminder',
        message: 'Team standup starts in 15 minutes',
        type: 'info' as const,
        timestamp: '10 minutes ago',
        read: false,
        icon: <Calendar className="w-5 h-5" />,
    },
    {
        id: '3',
        title: 'Deployment successful',
        message: 'Your application has been deployed to production',
        type: 'success' as const,
        timestamp: '1 hour ago',
        read: true,
        icon: <CheckCircle2 className="w-5 h-5" />,
    },
    {
        id: '4',
        title: 'Security alert',
        message: 'New login from unrecognized device',
        type: 'warning' as const,
        timestamp: '3 hours ago',
        read: false,
        icon: <AlertCircle className="w-5 h-5" />,
        action: {
            label: 'Review',
            onClick: () => console.log('Review security alert'),
        },
    },
    {
        id: '5',
        title: 'System update available',
        message: 'A new version is ready to install',
        type: 'info' as const,
        timestamp: '1 day ago',
        read: true,
        icon: <Info className="w-5 h-5" />,
        action: {
            label: 'Update',
            onClick: () => console.log('Update system'),
        },
    },
];

export const Default: Story = {
    args: {
        notifications: sampleNotifications,
    },
};

export const WithActions: Story = {
    args: {
        notifications: sampleNotifications,
        onNotificationClick: (notification) => console.log('Clicked:', notification),
        onMarkAllRead: () => console.log('Mark all as read'),
        onClearAll: () => console.log('Clear all'),
        onDismiss: (notification) => console.log('Dismiss:', notification),
    },
};

export const FullyInteractive: Story = {
    args: {
        notifications: sampleNotifications,
    },
    render: () => {
        const [notifications, setNotifications] = useState(sampleNotifications);

        const handleNotificationClick = (notification: Notification) => {
            console.log('Notification clicked:', notification);
            // Mark as read when clicked
            setNotifications(prev =>
                prev.map(n =>
                    n.id === notification.id ? { ...n, read: true } : n
                )
            );
        };

        const handleMarkAllRead = () => {
            console.log('Marking all as read');
            setNotifications(prev =>
                prev.map(n => ({ ...n, read: true }))
            );
        };

        const handleClearAll = () => {
            console.log('Clearing all notifications');
            setNotifications([]);
        };

        const handleDismiss = (notification: Notification) => {
            console.log('Dismissing:', notification);
            setNotifications(prev =>
                prev.filter(n => n.id !== notification.id)
            );
        };

        return (
            <div className="w-full max-w-md">
                <NotificationCenterPanel
                    notifications={notifications}
                    onNotificationClick={handleNotificationClick}
                    onMarkAllRead={handleMarkAllRead}
                    onClearAll={handleClearAll}
                    onDismiss={handleDismiss}
                />
            </div>
        );
    },
};

export const Empty: Story = {
    args: {
        notifications: [],
    },
};

export const UnreadOnly: Story = {
    args: {
        notifications: sampleNotifications.filter(n => !n.read),
        onMarkAllRead: () => console.log('Mark all as read'),
    },
};

export const SuccessNotifications: Story = {
    args: {
        notifications: [
            {
                id: '1',
                title: 'Payment processed',
                message: 'Your payment of $99.99 has been successfully processed',
                type: 'success' as const,
                timestamp: '5 minutes ago',
                read: false,
            },
            {
                id: '2',
                title: 'Profile updated',
                message: 'Your profile information has been updated',
                type: 'success' as const,
                timestamp: '1 hour ago',
                read: false,
            },
            {
                id: '3',
                title: 'Backup completed',
                message: 'Your data has been backed up successfully',
                type: 'success' as const,
                timestamp: '2 hours ago',
                read: true,
            },
        ],
    },
};

export const WarningNotifications: Story = {
    args: {
        notifications: [
            {
                id: '1',
                title: 'Storage almost full',
                message: 'You are using 95% of your storage space',
                type: 'warning' as const,
                timestamp: '10 minutes ago',
                read: false,
                action: {
                    label: 'Upgrade',
                    onClick: () => console.log('Upgrade storage'),
                },
            },
            {
                id: '2',
                title: 'Unusual activity detected',
                message: 'We noticed unusual login attempts on your account',
                type: 'warning' as const,
                timestamp: '1 hour ago',
                read: false,
                action: {
                    label: 'Secure Account',
                    onClick: () => console.log('Secure account'),
                },
            },
        ],
    },
};

export const ErrorNotifications: Story = {
    args: {
        notifications: [
            {
                id: '1',
                title: 'Payment failed',
                message: 'Your payment could not be processed. Please update your payment method.',
                type: 'error' as const,
                timestamp: '5 minutes ago',
                read: false,
                action: {
                    label: 'Update Payment',
                    onClick: () => console.log('Update payment'),
                },
            },
            {
                id: '2',
                title: 'Sync error',
                message: 'Failed to sync your data. Please try again.',
                type: 'error' as const,
                timestamp: '30 minutes ago',
                read: false,
                action: {
                    label: 'Retry',
                    onClick: () => console.log('Retry sync'),
                },
            },
        ],
    },
};

export const ManyNotifications: Story = {
    args: {
        notifications: [
            ...sampleNotifications,
            ...sampleNotifications.map((n, i) => ({ ...n, id: `${n.id}-${i}`, timestamp: `${i + 2} days ago` })),
        ],
    },
};

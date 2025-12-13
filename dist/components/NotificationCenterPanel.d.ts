import React from 'react';
export type NotificationType = 'info' | 'success' | 'warning' | 'error';
export interface Notification {
    id: string;
    title: string;
    message?: string;
    type?: NotificationType;
    timestamp: string;
    read?: boolean;
    action?: {
        label: string;
        onClick: () => void;
    };
    icon?: React.ReactNode;
}
export interface NotificationCenterPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    notifications: Notification[];
    onNotificationClick?: (notification: Notification) => void;
    onMarkAllRead?: () => void;
    onClearAll?: () => void;
    onDismiss?: (notification: Notification) => void;
    className?: string;
}
export declare const NotificationCenterPanel: React.ForwardRefExoticComponent<NotificationCenterPanelProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=NotificationCenterPanel.d.ts.map
import React from 'react';
export type SecurityEventType = 'login' | 'logout' | 'password_change' | 'password_reset' | '2fa_enabled' | '2fa_disabled' | 'device_added' | 'device_removed' | 'suspicious_activity' | 'permission_granted' | 'permission_revoked';
export interface SecurityEvent {
    id: string;
    type: SecurityEventType;
    description: string;
    timestamp: string;
    location?: string;
    ipAddress?: string;
    device?: string;
    status: 'success' | 'warning' | 'error';
    user?: string;
}
export interface SecurityActivityLogProps extends React.HTMLAttributes<HTMLDivElement> {
    events: SecurityEvent[];
    onEventClick?: (event: SecurityEvent) => void;
    className?: string;
}
export declare const SecurityActivityLog: React.ForwardRefExoticComponent<SecurityActivityLogProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SecurityActivityLog.d.ts.map
import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';
export interface BadgeProps extends Omit<HTMLMotionProps<'span'>, 'size'> {
    variant?: BadgeVariant;
    size?: BadgeSize;
    dot?: boolean;
    children?: React.ReactNode;
}
export declare const Badge: React.ForwardRefExoticComponent<Omit<BadgeProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export interface NotificationBadgeProps {
    count?: number;
    max?: number;
    showZero?: boolean;
    dot?: boolean;
    children: React.ReactNode;
    className?: string;
}
export declare const NotificationBadge: React.FC<NotificationBadgeProps>;
//# sourceMappingURL=Badge.d.ts.map
import React from 'react';
export type TimelineLayout = 'default' | 'alternate';
export type TimelineStatus = 'default' | 'success' | 'warning' | 'error' | 'info' | 'loading';
export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
    layout?: TimelineLayout;
    children?: React.ReactNode;
}
export interface TimelineItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    date?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    status?: TimelineStatus;
    isActive?: boolean;
    isLast?: boolean;
    position?: 'left' | 'right';
    layout?: TimelineLayout;
}
export declare const TimelineItem: React.ForwardRefExoticComponent<TimelineItemProps & React.RefAttributes<HTMLDivElement>>;
export declare const Timeline: React.ForwardRefExoticComponent<TimelineProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Timeline.d.ts.map
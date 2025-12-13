import React from 'react';
import { type LucideIcon } from 'lucide-react';
export type ActivityType = 'default' | 'comment' | 'commit' | 'pr' | 'review' | 'alert' | 'success' | 'file';
export interface ActivityActor {
    name: string;
    avatarSrc?: string;
    initials?: string;
}
export interface ActivityItemProps extends React.HTMLAttributes<HTMLDivElement> {
    actor: ActivityActor;
    action: React.ReactNode;
    target?: React.ReactNode;
    date: React.ReactNode;
    type?: ActivityType;
    icon?: LucideIcon;
    showConnector?: boolean;
    isLast?: boolean;
}
export interface ActivityFeedProps extends React.HTMLAttributes<HTMLDivElement> {
    items?: ActivityItemProps[];
    children?: React.ReactNode;
    showConnector?: boolean;
}
export declare const ActivityItem: React.ForwardRefExoticComponent<ActivityItemProps & React.RefAttributes<HTMLDivElement>>;
export declare const ActivityFeed: React.ForwardRefExoticComponent<ActivityFeedProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ActivityFeed.d.ts.map
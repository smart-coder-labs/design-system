/* ========================================
   ACTIVITY FEED - TYPES
   ======================================== */

import type { HTMLAttributes, ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

export type ActivityType = 'default' | 'comment' | 'commit' | 'pr' | 'review' | 'alert' | 'success' | 'file';

export interface ActivityActor {
    name: string;
    avatarSrc?: string;
    initials?: string;
}

export interface ActivityItemProps extends HTMLAttributes<HTMLDivElement> {
    actor: ActivityActor;
    action: ReactNode;
    target?: ReactNode;
    date: ReactNode;
    type?: ActivityType;
    icon?: LucideIcon;
    showConnector?: boolean;
    isLast?: boolean;
}

export interface ActivityFeedProps extends HTMLAttributes<HTMLDivElement> {
    items?: ActivityItemProps[];
    children?: ReactNode;
    showConnector?: boolean;
}
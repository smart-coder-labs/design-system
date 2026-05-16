/* ========================================
   BREADCRUMB TABS HYBRID - TYPES
   ======================================== */

import type { ReactNode } from 'react';

export interface BreadcrumbItem {
    label: string;
    href?: string;
    icon?: ReactNode;
}

export interface TabItem {
    id: string;
    label: string;
    icon?: ReactNode;
    badge?: number;
}

export interface BreadcrumbTabsHybridProps {
    breadcrumbs: BreadcrumbItem[];
    tabs: TabItem[];
    activeTab?: string;
    onTabChange?: (tabId: string) => void;
    onBreadcrumbClick?: (index: number) => void;
    variant?: 'default' | 'compact' | 'elevated';
    showHomeIcon?: boolean;
    className?: string;
}
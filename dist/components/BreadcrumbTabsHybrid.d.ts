import React from 'react';
export interface BreadcrumbItem {
    label: string;
    href?: string;
    icon?: React.ReactNode;
}
export interface TabItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
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
export declare const BreadcrumbTabsHybrid: React.FC<BreadcrumbTabsHybridProps>;
export default BreadcrumbTabsHybrid;
//# sourceMappingURL=BreadcrumbTabsHybrid.d.ts.map
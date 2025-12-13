import React from 'react';
export interface TabsProps {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    children: React.ReactNode;
    className?: string;
}
export interface TabsListProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'segmented';
}
export interface TabsTriggerProps {
    value: string;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}
export interface TabsContentProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}
export declare const Tabs: React.FC<TabsProps>;
export declare const TabsList: React.FC<TabsListProps>;
export declare const TabsTrigger: React.FC<TabsTriggerProps>;
export declare const TabsContent: React.FC<TabsContentProps>;
//# sourceMappingURL=Tabs.d.ts.map
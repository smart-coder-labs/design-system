import React from 'react';
export type KPITrend = 'up' | 'down' | 'neutral';
export type KPIVariant = 'default' | 'bordered' | 'elevated' | 'minimal';
export type KPISize = 'sm' | 'md' | 'lg';
export interface KPIBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    label: React.ReactNode;
    value: React.ReactNode;
    change?: string;
    trend?: KPITrend;
    icon?: React.ReactNode;
    variant?: KPIVariant;
    size?: KPISize;
    description?: React.ReactNode;
    loading?: boolean;
}
export declare const KPIBlock: React.ForwardRefExoticComponent<KPIBlockProps & React.RefAttributes<HTMLDivElement>>;
export interface KPIGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    columns?: 1 | 2 | 3 | 4;
    gap?: 'sm' | 'md' | 'lg';
}
export declare const KPIGroup: React.ForwardRefExoticComponent<KPIGroupProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=KPIBlock.d.ts.map
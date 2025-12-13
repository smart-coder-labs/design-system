import React from 'react';
export type StatisticTrend = 'up' | 'down' | 'neutral';
export type StatisticVariant = 'card' | 'soft' | 'bordered' | 'minimal' | 'glass';
export type StatisticSize = 'sm' | 'md' | 'lg';
export type StatisticAccent = 'blue' | 'green' | 'purple' | 'orange' | 'pink';
export interface StatisticGoal {
    label?: React.ReactNode;
    value?: React.ReactNode;
    progress?: number;
}
export interface StatisticMetric {
    id?: string;
    label: React.ReactNode;
    value: React.ReactNode;
    description?: React.ReactNode;
    change?: string;
    trend?: StatisticTrend;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
    target?: React.ReactNode;
    sparkline?: number[];
    sparklineAccent?: StatisticAccent;
    goal?: StatisticGoal;
    subtle?: boolean;
}
export interface StatisticDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
    metrics: StatisticMetric[];
    variant?: StatisticVariant;
    size?: StatisticSize;
    columns?: 1 | 2 | 3 | 4;
    animate?: boolean;
    gap?: 'sm' | 'md' | 'lg';
}
export interface StatisticHighlightProps extends React.HTMLAttributes<HTMLDivElement> {
    label: React.ReactNode;
    value: React.ReactNode;
    change?: string;
    trend?: StatisticTrend;
    description?: React.ReactNode;
    badge?: React.ReactNode;
    sparkline?: number[];
    sparklineAccent?: StatisticAccent;
    size?: StatisticSize;
    progress?: number;
}
export declare const StatisticDisplay: React.ForwardRefExoticComponent<StatisticDisplayProps & React.RefAttributes<HTMLDivElement>>;
export declare const StatisticHighlight: React.ForwardRefExoticComponent<StatisticHighlightProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=StatisticDisplay.d.ts.map
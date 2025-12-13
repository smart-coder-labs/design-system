import React from 'react';
export type MonitorTab = 'cpu' | 'memory' | 'energy' | 'disk' | 'network';
export interface ProcessData {
    id: string;
    name: string;
    pid: number;
    cpu?: number;
    memory?: number;
    energy?: number;
    diskRead?: number;
    diskWrite?: number;
    networkIn?: number;
    networkOut?: number;
    user?: string;
}
export interface MetricData {
    label: string;
    value: number;
    unit: string;
    trend?: 'up' | 'down' | 'neutral';
    history: number[];
    color?: string;
}
export interface ActivityMonitorProps extends React.HTMLAttributes<HTMLDivElement> {
    processes?: ProcessData[];
    cpuMetrics?: MetricData;
    memoryMetrics?: MetricData;
    energyMetrics?: MetricData;
    diskMetrics?: MetricData;
    networkMetrics?: MetricData;
    defaultTab?: MonitorTab;
    autoRefresh?: boolean;
    refreshInterval?: number;
    onProcessSelect?: (process: ProcessData) => void;
    onSortChange?: (key: keyof ProcessData, direction: 'asc' | 'desc') => void;
}
export declare const ActivityMonitor: React.ForwardRefExoticComponent<ActivityMonitorProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ActivityMonitor.d.ts.map
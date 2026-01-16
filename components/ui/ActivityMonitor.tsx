"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';;
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';
import { Sparkline } from './Sparkline';
import { Progress } from './Progress';
import { 
    Cpu, 
    HardDrive, 
    Zap, 
    Network, 
    Activity,
    ArrowUpDown,
    TrendingUp,
    TrendingDown,
    Minus
} from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

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

/* ========================================
   HELPER FUNCTIONS
   ======================================== */

const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
};

const formatPercentage = (value: number): string => {
    return `${value.toFixed(1)}%`;
};

const formatWatts = (watts: number): string => {
    return `${watts.toFixed(1)} W`;
};

const getTrendIcon = (trend?: 'up' | 'down' | 'neutral') => {
    switch (trend) {
        case 'up':
            return <TrendingUp className="w-3.5 h-3.5 text-status-error" />;
        case 'down':
            return <TrendingDown className="w-3.5 h-3.5 text-status-success" />;
        default:
            return <Minus className="w-3.5 h-3.5 text-text-tertiary" />;
    }
};

/* ========================================
   METRIC CARD COMPONENT
   ======================================== */

interface MetricCardProps {
    label: string;
    value: string;
    subtitle?: string;
    history: number[];
    trend?: 'up' | 'down' | 'neutral';
    color?: string;
    icon?: React.ReactNode;
    className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
    label,
    value,
    subtitle,
    history,
    trend,
    color = 'rgb(0, 122, 255)',
    icon,
    className,
}) => {
    return (
        <div className={cn(
            "bg-surface-primary border border-border-primary rounded-xl p-4 shadow-sm",
            className
        )}>
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                    {icon && (
                        <div className="text-text-tertiary">
                            {icon}
                        </div>
                    )}
                    <span className="text-xs font-medium text-text-secondary uppercase tracking-wide">
                        {label}
                    </span>
                </div>
                {trend && getTrendIcon(trend)}
            </div>
            
            <div className="mb-3">
                <div className="text-2xl font-semibold text-text-primary mb-1">
                    {value}
                </div>
                {subtitle && (
                    <div className="text-xs text-text-tertiary">
                        {subtitle}
                    </div>
                )}
            </div>

            {history.length > 0 && (
                <div className="h-12 flex items-end">
                    <Sparkline
                        data={history}
                        width={200}
                        height={48}
                        color={color}
                        showArea={true}
                        strokeWidth={2}
                    />
                </div>
            )}
        </div>
    );
};

/* ========================================
   PROCESS TABLE COMPONENT
   ======================================== */

interface ProcessTableProps {
    processes: ProcessData[];
    activeTab: MonitorTab;
    onProcessSelect?: (process: ProcessData) => void;
    onSortChange?: (key: keyof ProcessData, direction: 'asc' | 'desc') => void;
}

const ProcessTable: React.FC<ProcessTableProps> = ({
    processes,
    activeTab,
    onProcessSelect,
    onSortChange,
}) => {
    const [sortKey, setSortKey] = useState<keyof ProcessData | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

    const handleSort = (key: keyof ProcessData) => {
        const newDirection = sortKey === key && sortDirection === 'asc' ? 'desc' : 'asc';
        setSortKey(key);
        setSortDirection(newDirection);
        onSortChange?.(key, newDirection);
    };

    const getSortableColumns = (): Array<{ key: keyof ProcessData; label: string; render: (p: ProcessData) => React.ReactNode }> => {
        const baseColumns = [
            { key: 'name' as keyof ProcessData, label: 'Process Name', render: (p: ProcessData) => p.name },
            { key: 'pid' as keyof ProcessData, label: 'PID', render: (p: ProcessData) => p.pid },
        ];

        switch (activeTab) {
            case 'cpu':
                return [
                    ...baseColumns,
                    { key: 'cpu' as keyof ProcessData, label: '% CPU', render: (p: ProcessData) => formatPercentage(p.cpu || 0) },
                    { key: 'user' as keyof ProcessData, label: 'User', render: (p: ProcessData) => p.user || '—' },
                ];
            case 'memory':
                return [
                    ...baseColumns,
                    { key: 'memory' as keyof ProcessData, label: 'Memory', render: (p: ProcessData) => formatBytes(p.memory || 0) },
                    { key: 'user' as keyof ProcessData, label: 'User', render: (p: ProcessData) => p.user || '—' },
                ];
            case 'energy':
                return [
                    ...baseColumns,
                    { key: 'energy' as keyof ProcessData, label: 'Energy Impact', render: (p: ProcessData) => formatWatts(p.energy || 0) },
                    { key: 'user' as keyof ProcessData, label: 'User', render: (p: ProcessData) => p.user || '—' },
                ];
            case 'disk':
                return [
                    ...baseColumns,
                    { key: 'diskRead' as keyof ProcessData, label: 'Read', render: (p: ProcessData) => formatBytes(p.diskRead || 0) },
                    { key: 'diskWrite' as keyof ProcessData, label: 'Write', render: (p: ProcessData) => formatBytes(p.diskWrite || 0) },
                ];
            case 'network':
                return [
                    ...baseColumns,
                    { key: 'networkIn' as keyof ProcessData, label: 'Sent', render: (p: ProcessData) => formatBytes(p.networkIn || 0) },
                    { key: 'networkOut' as keyof ProcessData, label: 'Received', render: (p: ProcessData) => formatBytes(p.networkOut || 0) },
                ];
            default:
                return baseColumns;
        }
    };

    const columns = getSortableColumns();

    const sortedProcesses = [...processes].sort((a, b) => {
        if (!sortKey) return 0;
        const aVal = a[sortKey];
        const bVal = b[sortKey];
        
        if (aVal === undefined || aVal === null) return 1;
        if (bVal === undefined || bVal === null) return -1;
        
        const comparison = typeof aVal === 'number' && typeof bVal === 'number'
            ? aVal - bVal
            : String(aVal).localeCompare(String(bVal));
        
        return sortDirection === 'asc' ? comparison : -comparison;
    });

    return (
        <div className="border border-border-primary rounded-xl overflow-hidden bg-surface-primary">
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead className="bg-surface-secondary/50 border-b border-border-primary">
                        <tr>
                            {columns.map((col) => (
                                <th
                                    key={String(col.key)}
                                    className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wide cursor-pointer hover:bg-surface-secondary transition-colors"
                                    onClick={() => handleSort(col.key)}
                                >
                                    <div className="flex items-center gap-2">
                                        {col.label}
                                        <ArrowUpDown className="w-3 h-3 text-text-tertiary" />
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedProcesses.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length} className="px-4 py-8 text-center text-sm text-text-tertiary">
                                    No processes found
                                </td>
                            </tr>
                        ) : (
                            sortedProcesses.map((process, index) => (
                                <tr
                                    key={process.id}
                                    className={cn(
                                        "border-b border-border-secondary hover:bg-surface-secondary/50 transition-colors cursor-pointer",
                                        index % 2 === 0 && "bg-surface-primary"
                                    )}
                                    onClick={() => onProcessSelect?.(process)}
                                >
                                    {columns.map((col) => (
                                        <td key={String(col.key)} className="px-4 py-3 text-sm text-text-primary">
                                            {col.render(process)}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

/* ========================================
   MAIN COMPONENT
   ======================================== */

export const ActivityMonitor = React.forwardRef<HTMLDivElement, ActivityMonitorProps>(
    (
        {
            processes = [],
            cpuMetrics,
            memoryMetrics,
            energyMetrics,
            diskMetrics,
            networkMetrics,
            defaultTab = 'cpu',
            autoRefresh = false,
            refreshInterval = 1000,
            onProcessSelect,
            onSortChange,
            className,
            ...props
        },
        ref
    ) => {
        const [activeTab, setActiveTab] = useState<MonitorTab>(defaultTab);
        const [isRefreshing, setIsRefreshing] = useState(false);
        const intervalRef = useRef<NodeJS.Timeout | null>(null);

        // Auto-refresh simulation
        useEffect(() => {
            if (autoRefresh) {
                intervalRef.current = setInterval(() => {
                    setIsRefreshing(true);
                    setTimeout(() => setIsRefreshing(false), 200);
                }, refreshInterval);
            }

            return () => {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            };
        }, [autoRefresh, refreshInterval]);

        // Get metrics for active tab
        const getActiveMetrics = (): MetricData | undefined => {
            switch (activeTab) {
                case 'cpu':
                    return cpuMetrics;
                case 'memory':
                    return memoryMetrics;
                case 'energy':
                    return energyMetrics;
                case 'disk':
                    return diskMetrics;
                case 'network':
                    return networkMetrics;
                default:
                    return undefined;
            }
        };

        const activeMetrics = getActiveMetrics();

        // Get tab-specific icon and color
        const getTabConfig = (tab: MonitorTab) => {
            switch (tab) {
                case 'cpu':
                    return { icon: Cpu, color: 'rgb(0, 122, 255)', label: 'CPU' };
                case 'memory':
                    return { icon: HardDrive, color: 'rgb(88, 86, 214)', label: 'Memory' };
                case 'energy':
                    return { icon: Zap, color: 'rgb(255, 149, 0)', label: 'Energy' };
                case 'disk':
                    return { icon: HardDrive, color: 'rgb(52, 199, 89)', label: 'Disk' };
                case 'network':
                    return { icon: Network, color: 'rgb(255, 59, 48)', label: 'Network' };
            }
        };

        const tabConfig = getTabConfig(activeTab);

        return (
            <div
                ref={ref}
                className={cn(
                    "bg-surface-primary rounded-xl border border-border-primary shadow-lg overflow-hidden",
                    className
                )}
                {...props}
            >
                {/* Header */}
                <div className="px-6 py-4 border-b border-border-primary bg-surface-secondary/30">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-accent-blue/10 rounded-lg">
                                <Activity className="w-5 h-5 text-accent-blue" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-text-primary">
                                    Activity Monitor
                                </h2>
                                <p className="text-xs text-text-tertiary">
                                    System resource usage and process monitoring
                                </p>
                            </div>
                        </div>
                        {autoRefresh && (
                            <div className="flex items-center gap-2 text-xs text-text-tertiary">
                                <motion.div
                                    animate={{ opacity: isRefreshing ? 0.5 : 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Activity className="w-4 h-4" />
                                </motion.div>
                                <span>Auto-refresh</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Tabs */}
                <div className="px-6 pt-4">
                    <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as MonitorTab)}>
                        <TabsList variant="segmented" className="w-full">
                            <TabsTrigger value="cpu" className="flex-1">
                                <div className="flex items-center gap-2">
                                    <Cpu className="w-4 h-4" />
                                    <span>CPU</span>
                                </div>
                            </TabsTrigger>
                            <TabsTrigger value="memory" className="flex-1">
                                <div className="flex items-center gap-2">
                                    <HardDrive className="w-4 h-4" />
                                    <span>Memory</span>
                                </div>
                            </TabsTrigger>
                            <TabsTrigger value="energy" className="flex-1">
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4" />
                                    <span>Energy</span>
                                </div>
                            </TabsTrigger>
                            <TabsTrigger value="disk" className="flex-1">
                                <div className="flex items-center gap-2">
                                    <HardDrive className="w-4 h-4" />
                                    <span>Disk</span>
                                </div>
                            </TabsTrigger>
                            <TabsTrigger value="network" className="flex-1">
                                <div className="flex items-center gap-2">
                                    <Network className="w-4 h-4" />
                                    <span>Network</span>
                                </div>
                            </TabsTrigger>
                        </TabsList>

                        {/* Tab Content */}
                        <TabsContent value={activeTab} className="mt-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {/* Metrics Grid */}
                                    {activeMetrics && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                            <MetricCard
                                                label={activeMetrics.label}
                                                value={`${activeMetrics.value.toFixed(1)} ${activeMetrics.unit}`}
                                                history={activeMetrics.history}
                                                trend={activeMetrics.trend}
                                                color={activeMetrics.color || tabConfig.color}
                                                icon={<tabConfig.icon className="w-4 h-4" />}
                                            />
                                        </div>
                                    )}

                                    {/* Progress Bar for CPU/Memory */}
                                    {(activeTab === 'cpu' || activeTab === 'memory') && activeMetrics && (
                                        <div className="mb-6">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium text-text-secondary">
                                                    {activeMetrics.label}
                                                </span>
                                                <span className="text-sm text-text-primary">
                                                    {activeMetrics.value.toFixed(1)}%
                                                </span>
                                            </div>
                                            <Progress
                                                value={activeMetrics.value}
                                                className="h-2"
                                                indicatorClassName={cn(
                                                    activeTab === 'cpu' && "bg-accent-blue",
                                                    activeTab === 'memory' && "bg-status-info"
                                                )}
                                            />
                                        </div>
                                    )}

                                    {/* Process Table */}
                                    <div>
                                        <h3 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wide">
                                            Processes
                                        </h3>
                                        <ProcessTable
                                            processes={processes}
                                            activeTab={activeTab}
                                            onProcessSelect={onProcessSelect}
                                            onSortChange={onSortChange}
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        );
    }
);

ActivityMonitor.displayName = 'ActivityMonitor';


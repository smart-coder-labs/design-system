'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../Tabs';
import { Sparkline } from '../Sparkline';
import { Progress } from '../Progress';
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

import type { ActivityMonitorProps, MonitorTab, MetricData, ProcessData } from './ActivityMonitor.types';
import { 
    formatBytes, 
    formatPercentage, 
    formatWatts, 
    formatMbps 
} from './ActivityMonitor.utils';

/* ========================================
   SUB-COMPONENTS
   ======================================== */

const MetricCard: React.FC<{
    label: string;
    value: string;
    icon: React.ReactNode;
    trend?: 'up' | 'down' | 'neutral';
    progress?: number;
    sparklineData?: number[];
}> = ({ label, value, icon, trend, progress, sparklineData }) => (
    <div className="bg-surface-primary rounded-2xl p-5 border border-border-primary shadow-sm">
        <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-surface-secondary rounded-xl text-text-tertiary">
                {icon}
            </div>
            {trend && (
                <div className={cn(
                    "flex items-center gap-1 text-xs font-medium",
                    trend === 'up' ? 'text-status-success' : trend === 'down' ? 'text-status-error' : 'text-text-tertiary'
                )}>
                    {trend === 'up' && <TrendingUp className="w-3 h-3" />}
                    {trend === 'down' && <TrendingDown className="w-3 h-3" />}
                    {trend === 'neutral' && <Minus className="w-3 h-3" />}
                </div>
            )}
        </div>
        <div className="text-2xl font-bold text-text-primary mb-1">{value}</div>
        <div className="text-sm text-text-tertiary">{label}</div>
        {progress !== undefined && (
            <Progress value={progress} className="mt-3" />
        )}
        {sparklineData && sparklineData.length > 0 && (
            <div className="mt-3 h-10">
                <Sparkline data={sparklineData} />
            </div>
        )}
    </div>
);

const ProcessList: React.FC<{
    processes: ProcessData[];
    activeTab: MonitorTab;
    onSelect?: (process: ProcessData) => void;
    onSort?: (key: keyof ProcessData, direction: 'asc' | 'desc') => void;
}> = ({ processes, activeTab, onSelect, onSort }) => (
    <div className="space-y-2">
        {/* Header */}
        <div className="flex items-center gap-2 pb-2 border-b border-border-primary text-xs font-medium text-text-tertiary">
            <button className="flex items-center gap-1 hover:text-text-primary" onClick={() => onSort?.('name', 'asc')}>
                Process <ArrowUpDown className="w-3 h-3" />
            </button>
            <div className="flex-1" />
            <button className="w-16 text-right hover:text-text-primary" onClick={() => onSort?.('cpu', 'desc')}>
                CPU
            </button>
            <button className="w-20 text-right hover:text-text-primary" onClick={() => onSort?.('memory', 'desc')}>
                Memory
            </button>
        </div>
        
        {/* Process rows */}
        {processes.map((process) => (
            <div
                key={process.id}
                className="flex items-center gap-2 p-3 rounded-xl bg-surface-secondary/50 hover:bg-surface-secondary cursor-pointer transition-colors"
                onClick={() => onSelect?.(process)}
            >
                <div className="flex-1 min-w-0">
                    <div className="font-medium text-text-primary truncate">{process.name}</div>
                    <div className="text-xs text-text-tertiary">PID: {process.pid}</div>
                </div>
                <div className="w-16 text-right font-mono text-sm">
                    {process.cpu !== undefined ? formatPercentage(process.cpu) : '-'}
                </div>
                <div className="w-20 text-right font-mono text-sm">
                    {process.memory !== undefined ? formatBytes(process.memory * 1024 * 1024) : '-'}
                </div>
            </div>
        ))}
    </div>
);

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
                case 'cpu': return cpuMetrics;
                case 'memory': return memoryMetrics;
                case 'energy': return energyMetrics;
                case 'disk': return diskMetrics;
                case 'network': return networkMetrics;
                default: return undefined;
            }
        };

        const tabIcons = {
            cpu: <Cpu className="w-4 h-4" />,
            memory: <HardDrive className="w-4 h-4" />,
            energy: <Zap className="w-4 h-4" />,
            network: <Network className="w-4 h-4" />,
            disk: <HardDrive className="w-4 h-4" />,
        };

        return (
            <div ref={ref} className={cn('w-full bg-surface-secondary rounded-3xl p-6', className)} {...props}>
                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as MonitorTab)}>
                    <TabsList className="mb-6">
                        {(['cpu', 'memory', 'energy', 'disk', 'network'] as MonitorTab[]).map((tab) => (
                            <TabsTrigger key={tab} value={tab} className="flex items-center gap-2">
                                {tabIcons[tab]}
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* Metrics Grid */}
                    <TabsContent value={activeTab}>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            {cpuMetrics && (
                                <MetricCard
                                    label={cpuMetrics.label}
                                    value={formatPercentage(cpuMetrics.value)}
                                    icon={<Cpu className="w-5 h-5" />}
                                    trend={cpuMetrics.trend}
                                    progress={cpuMetrics.value}
                                    sparklineData={cpuMetrics.history}
                                />
                            )}
                            {memoryMetrics && (
                                <MetricCard
                                    label={memoryMetrics.label}
                                    value={formatBytes(memoryMetrics.value * 1024 * 1024 * 1024)}
                                    icon={<HardDrive className="w-5 h-5" />}
                                    trend={memoryMetrics.trend}
                                    progress={memoryMetrics.value}
                                    sparklineData={memoryMetrics.history}
                                />
                            )}
                            {energyMetrics && (
                                <MetricCard
                                    label={energyMetrics.label}
                                    value={formatWatts(energyMetrics.value)}
                                    icon={<Zap className="w-5 h-5" />}
                                    trend={energyMetrics.trend}
                                />
                            )}
                            {networkMetrics && (
                                <MetricCard
                                    label={networkMetrics.label}
                                    value={`↓${formatMbps(networkMetrics.history[networkMetrics.history.length - 1] || 0)}`}
                                    icon={<Network className="w-5 h-5" />}
                                    trend={networkMetrics.trend}
                                />
                            )}
                        </div>
                    </TabsContent>
                </Tabs>

                {/* Process List */}
                {processes.length > 0 && (
                    <div className="mt-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                                <Activity className="w-5 h-5" />
                                Processes
                            </h3>
                            {isRefreshing && (
                                <span className="text-xs text-text-tertiary animate-pulse">
                                    Refreshing...
                                </span>
                            )}
                        </div>
                        <ProcessList
                            processes={processes}
                            activeTab={activeTab}
                            onSelect={onProcessSelect}
                            onSort={onSortChange}
                        />
                    </div>
                )}
            </div>
        );
    }
);

ActivityMonitor.displayName = 'ActivityMonitor';
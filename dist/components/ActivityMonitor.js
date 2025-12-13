"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';
import { Sparkline } from './Sparkline';
import { Progress } from './Progress';
import { Cpu, HardDrive, Zap, Network, Activity, ArrowUpDown, TrendingUp, TrendingDown, Minus } from 'lucide-react';
/* ========================================
   HELPER FUNCTIONS
   ======================================== */
const formatBytes = (bytes) => {
    if (bytes === 0)
        return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
};
const formatPercentage = (value) => {
    return `${value.toFixed(1)}%`;
};
const formatWatts = (watts) => {
    return `${watts.toFixed(1)} W`;
};
const getTrendIcon = (trend) => {
    switch (trend) {
        case 'up':
            return _jsx(TrendingUp, { className: "w-3.5 h-3.5 text-status-error" });
        case 'down':
            return _jsx(TrendingDown, { className: "w-3.5 h-3.5 text-status-success" });
        default:
            return _jsx(Minus, { className: "w-3.5 h-3.5 text-text-tertiary" });
    }
};
const MetricCard = ({ label, value, subtitle, history, trend, color = 'rgb(0, 122, 255)', icon, className, }) => {
    return (_jsxs("div", { className: cn("bg-surface-primary border border-border-primary rounded-xl p-4 shadow-sm", className), children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsxs("div", { className: "flex items-center gap-2", children: [icon && (_jsx("div", { className: "text-text-tertiary", children: icon })), _jsx("span", { className: "text-xs font-medium text-text-secondary uppercase tracking-wide", children: label })] }), trend && getTrendIcon(trend)] }), _jsxs("div", { className: "mb-3", children: [_jsx("div", { className: "text-2xl font-semibold text-text-primary mb-1", children: value }), subtitle && (_jsx("div", { className: "text-xs text-text-tertiary", children: subtitle }))] }), history.length > 0 && (_jsx("div", { className: "h-12 flex items-end", children: _jsx(Sparkline, { data: history, width: 200, height: 48, color: color, showArea: true, strokeWidth: 2 }) }))] }));
};
const ProcessTable = ({ processes, activeTab, onProcessSelect, onSortChange, }) => {
    const [sortKey, setSortKey] = useState(null);
    const [sortDirection, setSortDirection] = useState('desc');
    const handleSort = (key) => {
        const newDirection = sortKey === key && sortDirection === 'asc' ? 'desc' : 'asc';
        setSortKey(key);
        setSortDirection(newDirection);
        onSortChange?.(key, newDirection);
    };
    const getSortableColumns = () => {
        const baseColumns = [
            { key: 'name', label: 'Process Name', render: (p) => p.name },
            { key: 'pid', label: 'PID', render: (p) => p.pid },
        ];
        switch (activeTab) {
            case 'cpu':
                return [
                    ...baseColumns,
                    { key: 'cpu', label: '% CPU', render: (p) => formatPercentage(p.cpu || 0) },
                    { key: 'user', label: 'User', render: (p) => p.user || '—' },
                ];
            case 'memory':
                return [
                    ...baseColumns,
                    { key: 'memory', label: 'Memory', render: (p) => formatBytes(p.memory || 0) },
                    { key: 'user', label: 'User', render: (p) => p.user || '—' },
                ];
            case 'energy':
                return [
                    ...baseColumns,
                    { key: 'energy', label: 'Energy Impact', render: (p) => formatWatts(p.energy || 0) },
                    { key: 'user', label: 'User', render: (p) => p.user || '—' },
                ];
            case 'disk':
                return [
                    ...baseColumns,
                    { key: 'diskRead', label: 'Read', render: (p) => formatBytes(p.diskRead || 0) },
                    { key: 'diskWrite', label: 'Write', render: (p) => formatBytes(p.diskWrite || 0) },
                ];
            case 'network':
                return [
                    ...baseColumns,
                    { key: 'networkIn', label: 'Sent', render: (p) => formatBytes(p.networkIn || 0) },
                    { key: 'networkOut', label: 'Received', render: (p) => formatBytes(p.networkOut || 0) },
                ];
            default:
                return baseColumns;
        }
    };
    const columns = getSortableColumns();
    const sortedProcesses = [...processes].sort((a, b) => {
        if (!sortKey)
            return 0;
        const aVal = a[sortKey];
        const bVal = b[sortKey];
        if (aVal === undefined || aVal === null)
            return 1;
        if (bVal === undefined || bVal === null)
            return -1;
        const comparison = typeof aVal === 'number' && typeof bVal === 'number'
            ? aVal - bVal
            : String(aVal).localeCompare(String(bVal));
        return sortDirection === 'asc' ? comparison : -comparison;
    });
    return (_jsx("div", { className: "border border-border-primary rounded-xl overflow-hidden bg-surface-primary", children: _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full border-collapse", children: [_jsx("thead", { className: "bg-surface-secondary/50 border-b border-border-primary", children: _jsx("tr", { children: columns.map((col) => (_jsx("th", { className: "px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wide cursor-pointer hover:bg-surface-secondary transition-colors", onClick: () => handleSort(col.key), children: _jsxs("div", { className: "flex items-center gap-2", children: [col.label, _jsx(ArrowUpDown, { className: "w-3 h-3 text-text-tertiary" })] }) }, String(col.key)))) }) }), _jsx("tbody", { children: sortedProcesses.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: columns.length, className: "px-4 py-8 text-center text-sm text-text-tertiary", children: "No processes found" }) })) : (sortedProcesses.map((process, index) => (_jsx("tr", { className: cn("border-b border-border-secondary hover:bg-surface-secondary/50 transition-colors cursor-pointer", index % 2 === 0 && "bg-surface-primary"), onClick: () => onProcessSelect?.(process), children: columns.map((col) => (_jsx("td", { className: "px-4 py-3 text-sm text-text-primary", children: col.render(process) }, String(col.key)))) }, process.id)))) })] }) }) }));
};
/* ========================================
   MAIN COMPONENT
   ======================================== */
export const ActivityMonitor = React.forwardRef(({ processes = [], cpuMetrics, memoryMetrics, energyMetrics, diskMetrics, networkMetrics, defaultTab = 'cpu', autoRefresh = false, refreshInterval = 1000, onProcessSelect, onSortChange, className, ...props }, ref) => {
    const [activeTab, setActiveTab] = useState(defaultTab);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const intervalRef = useRef(null);
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
    const getActiveMetrics = () => {
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
    const getTabConfig = (tab) => {
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
    return (_jsxs("div", { ref: ref, className: cn("bg-surface-primary rounded-xl border border-border-primary shadow-lg overflow-hidden", className), ...props, children: [_jsx("div", { className: "px-6 py-4 border-b border-border-primary bg-surface-secondary/30", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "p-2 bg-accent-blue/10 rounded-lg", children: _jsx(Activity, { className: "w-5 h-5 text-accent-blue" }) }), _jsxs("div", { children: [_jsx("h2", { className: "text-lg font-semibold text-text-primary", children: "Activity Monitor" }), _jsx("p", { className: "text-xs text-text-tertiary", children: "System resource usage and process monitoring" })] })] }), autoRefresh && (_jsxs("div", { className: "flex items-center gap-2 text-xs text-text-tertiary", children: [_jsx(motion.div, { animate: { opacity: isRefreshing ? 0.5 : 1 }, transition: { duration: 0.2 }, children: _jsx(Activity, { className: "w-4 h-4" }) }), _jsx("span", { children: "Auto-refresh" })] }))] }) }), _jsx("div", { className: "px-6 pt-4", children: _jsxs(Tabs, { value: activeTab, onValueChange: (v) => setActiveTab(v), children: [_jsxs(TabsList, { variant: "segmented", className: "w-full", children: [_jsx(TabsTrigger, { value: "cpu", className: "flex-1", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Cpu, { className: "w-4 h-4" }), _jsx("span", { children: "CPU" })] }) }), _jsx(TabsTrigger, { value: "memory", className: "flex-1", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(HardDrive, { className: "w-4 h-4" }), _jsx("span", { children: "Memory" })] }) }), _jsx(TabsTrigger, { value: "energy", className: "flex-1", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Zap, { className: "w-4 h-4" }), _jsx("span", { children: "Energy" })] }) }), _jsx(TabsTrigger, { value: "disk", className: "flex-1", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(HardDrive, { className: "w-4 h-4" }), _jsx("span", { children: "Disk" })] }) }), _jsx(TabsTrigger, { value: "network", className: "flex-1", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Network, { className: "w-4 h-4" }), _jsx("span", { children: "Network" })] }) })] }), _jsx(TabsContent, { value: activeTab, className: "mt-6", children: _jsx(AnimatePresence, { mode: "wait", children: _jsxs(motion.div, { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.2 }, children: [activeMetrics && (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6", children: _jsx(MetricCard, { label: activeMetrics.label, value: `${activeMetrics.value.toFixed(1)} ${activeMetrics.unit}`, history: activeMetrics.history, trend: activeMetrics.trend, color: activeMetrics.color || tabConfig.color, icon: _jsx(tabConfig.icon, { className: "w-4 h-4" }) }) })), (activeTab === 'cpu' || activeTab === 'memory') && activeMetrics && (_jsxs("div", { className: "mb-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: "text-sm font-medium text-text-secondary", children: activeMetrics.label }), _jsxs("span", { className: "text-sm text-text-primary", children: [activeMetrics.value.toFixed(1), "%"] })] }), _jsx(Progress, { value: activeMetrics.value, className: "h-2", indicatorClassName: cn(activeTab === 'cpu' && "bg-accent-blue", activeTab === 'memory' && "bg-status-info") })] })), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wide", children: "Processes" }), _jsx(ProcessTable, { processes: processes, activeTab: activeTab, onProcessSelect: onProcessSelect, onSortChange: onSortChange })] })] }, activeTab) }) })] }) })] }));
});
ActivityMonitor.displayName = 'ActivityMonitor';
//# sourceMappingURL=ActivityMonitor.js.map
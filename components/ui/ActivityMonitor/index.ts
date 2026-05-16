/* ========================================
   ACTIVITY MONITOR - BARREL EXPORT
   ======================================== */

export { ActivityMonitor } from './ActivityMonitor';
export type { 
    ActivityMonitorProps,
    MonitorTab,
    ProcessData,
    MetricData 
} from './ActivityMonitor.types';
export { 
    formatBytes,
    formatPercentage,
    formatWatts,
    formatMbps,
    getTrendIcon,
    getTrendColor,
    calculateAverage,
    calculatePeak,
    sortProcesses
} from './ActivityMonitor.utils';

/* Alias exports for convenience */
export type { MonitorTab as Tab };
export type { ProcessData as Process };
export type { MetricData as Metric };
/* ========================================
   ACTIVITY MONITOR - UTILS
   ======================================== */

export const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
};

export const formatPercentage = (value: number): string => {
    return `${value.toFixed(1)}%`;
};

export const formatWatts = (watts: number): string => {
    if (watts < 1000) return `${watts.toFixed(0)} W`;
    return `${(watts / 1000).toFixed(1)} kW`;
};

export const formatMbps = (mbps: number): string => {
    if (mbps < 1000) return `${mbps.toFixed(1)} Mbps`;
    return `${(mbps / 1000).toFixed(2)} Gbps`;
};

export const getTrendIcon = (trend: 'up' | 'down' | 'neutral') => {
    return trend;
};

export const getTrendColor = (trend: 'up' | 'down' | 'neutral', isNegativeGood = false) => {
    if (isNegativeGood) {
        if (trend === 'down') return 'text-status-success';
        if (trend === 'up') return 'text-status-error';
    }
    if (trend === 'up') return 'text-status-success';
    if (trend === 'down') return 'text-status-error';
    return 'text-text-tertiary';
};

/* Metric calculation helpers */
export const calculateAverage = (values: number[]): number => {
    if (values.length === 0) return 0;
    return values.reduce((a, b) => a + b, 0) / values.length;
};

export const calculatePeak = (values: number[]): number => {
    return Math.max(...values);
};

/* Sorting helpers */
export const sortProcesses = <T extends { [key: string]: unknown }>(
    processes: T[],
    key: keyof T,
    direction: 'asc' | 'desc'
): T[] => {
    return [...processes].sort((a, b) => {
        const aVal = a[key];
        const bVal = b[key];
        
        if (typeof aVal === 'number' && typeof bVal === 'number') {
            return direction === 'asc' ? aVal - bVal : bVal - aVal;
        }
        
        if (typeof aVal === 'string' && typeof bVal === 'string') {
            return direction === 'asc' 
                ? aVal.localeCompare(bVal) 
                : bVal.localeCompare(aVal);
        }
        
        return 0;
    });
};
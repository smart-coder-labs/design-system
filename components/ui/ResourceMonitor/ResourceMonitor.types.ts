interface ResourceDataPoint {
    timestamp: number;
    cpu: number;     // 0-100
    memory: number;  // 0-100 (relative) or absolute
    tokens: number;  // tokens per minute
}


interface ResourceMonitorProps extends React.HTMLAttributes<HTMLDivElement> {
    data?: ResourceDataPoint[];
    currentCpu?: number;
    currentMemory?: number; // in GB
    currentTokens?: number; // in k
    autoRefresh?: boolean;
    refreshInterval?: number;
}

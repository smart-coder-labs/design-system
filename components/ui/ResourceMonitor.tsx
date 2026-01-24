"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';
import { BarChart3 } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export interface ResourceDataPoint {
    timestamp: number;
    cpu: number;     // 0-100
    memory: number;  // 0-100 (relative) or absolute
    tokens: number;  // tokens per minute
}

export interface ResourceMonitorProps extends React.HTMLAttributes<HTMLDivElement> {
    data?: ResourceDataPoint[];
    currentCpu?: number;
    currentMemory?: number; // in GB
    currentTokens?: number; // in k
    autoRefresh?: boolean;
    refreshInterval?: number;
}

/* ========================================
   HELPER FUNCTIONS
   ======================================== */

const generateMockData = (points = 20): ResourceDataPoint[] => {
    return Array.from({ length: points }, (_, i) => ({
        timestamp: Date.now() - (points - 1 - i) * 60000,
        cpu: 30 + Math.sin(i * 0.5) * 20 + Math.random() * 10,
        memory: 40 + Math.cos(i * 0.3) * 15 + Math.random() * 5,
        tokens: 5 + Math.sin(i * 0.8) * 4 + Math.random() * 2, // 5k-9k range
    }));
};

/* ========================================
   CHART COMPONENT
   ======================================== */

interface ChartProps {
    data: ResourceDataPoint[];
    height?: number;
    className?: string;
}

const Chart: React.FC<ChartProps> = ({ data, height = 200, className }) => {
    if (!data.length) return null;

    const width = 100; // viewbox units
    const maxY = 100;

    // Helper to scale values to viewbox coords
    const getX = (index: number) => (index / (data.length - 1)) * width;
    const getY = (value: number) => maxY - (Math.min(value, maxY) / maxY) * maxY; 
    // ^ Assuming input values are roughly 0-100. For tokens we might need normalization.
    
    // Normalize tokens for visualization (scale to 0-100 range roughly)
    const maxTokens = Math.max(...data.map(d => d.tokens)) * 1.2 || 10;
    const normalizeTokens = (val: number) => (val / maxTokens) * 100;

    // Create paths
    const generatePath = (getValue: (d: ResourceDataPoint) => number) => {
        return data.map((d, i) => {
            const x = getX(i);
            const y = getY(getValue(d));
            return `${i === 0 ? 'M' : 'L'} ${x},${y}`;
        }).join(' ');
    };

    const generateSmoothPath = (getValue: (d: ResourceDataPoint) => number) => {
        // Simple smoothing for demo purposes (catmull-rom or similar would be better, but simple bezier works)
        // For now, let's stick to simple line or standard cubic bezier if needed. 
        // A simple L polyline is robust. If we want smooth, we can basic bezier.
        
        const points = data.map((d, i) => ({ x: getX(i), y: getY(getValue(d)) }));
        
        let path = `M ${points[0].x},${points[0].y}`;
        
        for (let i = 0; i < points.length - 1; i++) {
             const p0 = points[i];
             const p1 = points[i + 1];
             const cp1x = p0.x + (p1.x - p0.x) * 0.5;
             const cp1y = p0.y;
             const cp2x = p0.x + (p1.x - p0.x) * 0.5;
             const cp2y = p1.y;
             
             path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p1.x},${p1.y}`;
        }
        return path;
    };

    const cpuPath = generateSmoothPath(d => d.cpu);
    const memoryPath = generateSmoothPath(d => d.memory); // We'll style this as dashed
    
    // Area for CPU (Blue)
    const cpuAreaPath = `${cpuPath} L ${width},${maxY} L 0,${maxY} Z`;

    return (
        <div className={cn("relative w-full overflow-hidden", className)} style={{ height }}>
            {/* Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-4 pointer-events-none">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="row-span-1 border-t border-white/5 w-full h-full" />
                ))}
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="col-span-1 border-r border-white/5 h-full" />
                ))}
            </div>

            <svg 
                viewBox={`0 0 ${width} ${maxY}`} 
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
            >
                {/* Defs for gradients */}
                <defs>
                    <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* CPU Area */}
                <path d={cpuAreaPath} fill="url(#cpuGradient)" />

                {/* Memory Line (Dashed) */}
                <path 
                    d={memoryPath} 
                    fill="none" 
                    stroke="rgb(165, 85, 65)" /* A rusty/brown color from screenshot */
                    strokeWidth="0.5"
                    strokeDasharray="1, 1"
                    strokeOpacity="0.8"
                />

                {/* CPU Line (Solid Blue) */}
                <path 
                    d={cpuPath} 
                    fill="none" 
                    stroke="#3b82f6" 
                    strokeWidth="0.8"
                />
            </svg>
            
            {/* Bottom Border Line - distinct blue glow */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        </div>
    );
};

/* ========================================
   MAIN COMPONENT
   ======================================== */

export const ResourceMonitor = React.forwardRef<HTMLDivElement, ResourceMonitorProps>(
    (
        {
            data: initialData,
            currentCpu = 42,
            currentMemory = 2.4,
            currentTokens = 8.4,
            autoRefresh = true,
            refreshInterval = 2000,
            className,
            ...props
        },
        ref
    ) => {
        const [timeRange, setTimeRange] = useState<'realtime' | '24h' | '7d'>('realtime');
        const [data, setData] = useState<ResourceDataPoint[]>(initialData || generateMockData(20));

        // Animation for live data
        useEffect(() => {
            if (!autoRefresh) return;
            
            const interval = setInterval(() => {
                setData(prev => {
                    const next = [...prev.slice(1)];
                    next.push({
                        timestamp: Date.now(),
                        cpu: 30 + Math.sin(Date.now() / 1000) * 20 + Math.random() * 15,
                        memory: 40 + Math.cos(Date.now() / 2000) * 10 + Math.random() * 5,
                        tokens: 5 + Math.sin(Date.now() / 1500) * 2 + Math.random() * 2,
                    });
                    return next;
                });
            }, refreshInterval);

            return () => clearInterval(interval);
        }, [autoRefresh, refreshInterval]);

        return (
            <div
                ref={ref}
                className={cn(
                    "bg-[#090C14] rounded-xl border border-white/10 shadow-xl overflow-hidden text-white font-sans",
                    className
                )}
                {...props}
            >
                {/* Header */}
                <div className="px-6 py-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <BarChart3 className="w-5 h-5 text-blue-500" />
                        <h2 className="text-base font-semibold tracking-wide text-gray-200">
                            Resource Monitor
                        </h2>
                    </div>
                    
                    <div className="flex bg-black/20 rounded-lg p-1 border border-white/5">
                        {(['realtime', '24h', '7d'] as const).map((range) => (
                            <button
                                key={range}
                                onClick={() => setTimeRange(range)}
                                className={cn(
                                    "px-3 py-1 text-xs font-medium rounded-md transition-all duration-200",
                                    timeRange === range 
                                        ? "bg-blue-600 text-white shadow-sm" 
                                        : "text-gray-500 hover:text-gray-300"
                                )}
                            >
                                {range === 'realtime' ? 'Real-time' : range}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Metrics Summary */}
                <div className="px-6 flex items-center gap-8 mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                        <span className="text-xs font-medium text-gray-400">CPU Usage:</span>
                        <span className="text-sm font-semibold text-gray-200">{data[data.length - 1]?.cpu.toFixed(0)}%</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#A55541]" />
                        <span className="text-xs font-medium text-gray-400">Memory:</span>
                        <span className="text-sm font-semibold text-gray-200">{currentMemory} GB</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span className="text-xs font-medium text-gray-400">Tokens/min:</span>
                        <span className="text-sm font-semibold text-gray-200">{currentTokens}k</span>
                    </div>
                </div>

                {/* Main Chart Area */}
                <div className="w-full h-48 bg-gradient-to-b from-transparent to-blue-500/5 relative">
                    <Chart data={data} height={192} />
                </div>
            </div>
        );
    }
);

ResourceMonitor.displayName = 'ResourceMonitor';

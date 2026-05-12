"use client";
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { TrendingUp, TrendingDown, Eye, EyeOff } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export interface BalanceChartProps {
    data: { label: string; value: number }[];
    currency?: string;
    locale?: string;
    title?: string;
    maskable?: boolean;
    height?: number;
    className?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

export const BalanceChart: React.FC<BalanceChartProps> = ({
    data,
    currency = 'USD',
    locale = 'en-US',
    title = 'Balance Evolution',
    maskable = true,
    height = 160,
    className = '',
}) => {
    const [masked, setMasked] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const values = data.map((d) => d.value);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;

    const trend = values[values.length - 1] >= values[0] ? 'up' : 'down';
    const change = values.length > 1
        ? ((values[values.length - 1] - values[0]) / values[0]) * 100
        : 0;

    const formatCurrency = (v: number) =>
        new Intl.NumberFormat(locale, { style: 'currency', currency, minimumFractionDigits: 0 }).format(v);

    const chartWidth = 400;
    const padding = 2;
    const effectiveHeight = height - padding * 2;

    const points = useMemo(() =>
        data.map((d, i) => ({
            x: (i / (data.length - 1)) * chartWidth,
            y: padding + effectiveHeight - ((d.value - min) / range) * effectiveHeight,
            value: d.value,
            label: d.label,
        })),
        [data, min, range, chartWidth, effectiveHeight]
    );

    const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`).join(' ');
    const areaPath = `${linePath} L ${chartWidth},${height} L 0,${height} Z`;
    const gradientId = 'balance-chart-gradient';
    const strokeColor = trend === 'up' ? 'rgb(52, 199, 89)' : 'rgb(255, 59, 48)';

    const current = hoveredIndex !== null ? points[hoveredIndex] : points[points.length - 1];

    return (
        <motion.div
            className={cn(
                'bg-surface-primary rounded-2xl border border-border-primary shadow-sm p-5',
                className,
            )}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <p className="text-xs text-text-tertiary font-medium uppercase tracking-wider">{title}</p>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-2xl font-bold text-text-primary tabular-nums">
                            {masked ? '••••••' : formatCurrency(current.value)}
                        </span>
                        <span className={cn(
                            'flex items-center gap-0.5 text-xs font-bold px-2 py-0.5 rounded-full',
                            trend === 'up'
                                ? 'bg-status-success/10 text-status-success'
                                : 'bg-status-error/10 text-status-error',
                        )}>
                            {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            {Math.abs(change).toFixed(1)}%
                        </span>
                    </div>
                    <div className="h-4 mt-0.5 overflow-hidden">
                        <p className={cn(
                            "text-[10px] text-text-quaternary transition-opacity duration-200",
                            hoveredIndex !== null ? "opacity-100" : "opacity-0"
                        )}>
                            {current.label}
                        </p>
                    </div>
                </div>
                {maskable && (
                    <button
                        onClick={() => setMasked((p) => !p)}
                        className="w-7 h-7 rounded-full bg-surface-secondary flex items-center justify-center text-text-tertiary hover:text-text-primary transition-apple"
                        aria-label={masked ? 'Show balance' : 'Hide balance'}
                    >
                        {masked ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                )}
            </div>

            {/* Chart */}
            <div className="relative" style={{ height }}>
                <svg
                    viewBox={`0 0 ${chartWidth} ${height}`}
                    className="w-full h-full"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={strokeColor} stopOpacity="0.15" />
                            <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Area fill */}
                    <motion.path
                        d={areaPath}
                        fill={`url(#${gradientId})`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    />

                    {/* Line */}
                    <motion.path
                        d={linePath}
                        fill="none"
                        stroke={strokeColor}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    />

                    {/* Hover dots */}
                    {points.map((p, i) => (
                        <g key={i}>
                            {/* Invisible hover target */}
                            <rect
                                x={p.x - chartWidth / data.length / 2}
                                y={0}
                                width={chartWidth / data.length}
                                height={height}
                                fill="transparent"
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            />
                            {hoveredIndex === i && (
                                <>
                                    <line
                                        x1={p.x} y1={0} x2={p.x} y2={height}
                                        stroke={strokeColor} strokeWidth="1" strokeDasharray="4 4" opacity="0.3"
                                    />
                                    <circle cx={p.x} cy={p.y} r="5" fill="white" stroke={strokeColor} strokeWidth="2.5" />
                                </>
                            )}
                        </g>
                    ))}
                </svg>
            </div>

            {/* Day labels */}
            <div className="flex justify-between mt-2 px-1">
                {data.map((d, i) => (
                    <span
                        key={i}
                        className={cn(
                            'text-[10px] tabular-nums transition-apple duration-200',
                            hoveredIndex === i ? 'text-text-primary' : 'text-text-quaternary',
                        )}
                    >
                        {d.label}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

BalanceChart.displayName = 'BalanceChart';
export default BalanceChart;

"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { PieChart } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export interface PortfolioAsset {
    id: string;
    name: string;
    value: number;
    color: string;
    percentage?: number;
    change?: number;
}

export interface PortfolioDistributionProps {
    assets: PortfolioAsset[];
    totalLabel?: string;
    currency?: string;
    locale?: string;
    size?: number;
    className?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

export const PortfolioDistribution: React.FC<PortfolioDistributionProps> = ({
    assets,
    totalLabel = 'Total Portfolio',
    currency = 'USD',
    locale = 'en-US',
    size = 200,
    className = '',
}) => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const total = useMemo(() => assets.reduce((sum, a) => sum + a.value, 0), [assets]);
    const formatCurrency = (v: number) =>
        new Intl.NumberFormat(locale, { style: 'currency', currency, minimumFractionDigits: 0 }).format(v);

    // Calculate donut segments
    const radius = 80;
    const strokeWidth = 24;
    const circumference = 2 * Math.PI * radius;

    const segments = useMemo(() => {
        let cumulativeOffset = 0;
        return assets.map((asset) => {
            const pct = total > 0 ? asset.value / total : 0;
            const dashLength = circumference * pct;
            const gapLength = circumference - dashLength;
            const offset = -cumulativeOffset;
            cumulativeOffset += dashLength;
            return {
                ...asset,
                pct,
                dashArray: `${dashLength} ${gapLength}`,
                dashOffset: offset,
            };
        });
    }, [assets, total, circumference]);

    const hoveredAsset = hoveredId ? assets.find((a) => a.id === hoveredId) : null;
    const centerValue = hoveredAsset ? formatCurrency(hoveredAsset.value) : formatCurrency(total);
    const centerLabel = hoveredAsset ? hoveredAsset.name : totalLabel;

    return (
        <motion.div
            className={cn(
                'bg-surface-primary rounded-2xl border border-border-primary shadow-sm p-6',
                className,
            )}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Header */}
            <div className="flex items-center gap-2 mb-5">
                <PieChart className="w-4 h-4 text-accent-blue" />
                <h3 className="text-sm font-bold text-text-primary">Portfolio Distribution</h3>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Donut Chart */}
                <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
                    <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                        {segments.map((seg, i) => (
                            <motion.circle
                                key={seg.id}
                                cx="100" cy="100" r={radius}
                                fill="none"
                                stroke={seg.color}
                                strokeWidth={hoveredId === seg.id ? strokeWidth + 4 : strokeWidth}
                                strokeDasharray={seg.dashArray}
                                strokeDashoffset={seg.dashOffset}
                                strokeLinecap="butt"
                                className="cursor-pointer transition-all duration-200"
                                style={{ opacity: hoveredId && hoveredId !== seg.id ? 0.35 : 1 }}
                                onMouseEnter={() => setHoveredId(seg.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                initial={{ strokeDashoffset: circumference }}
                                animate={{ strokeDashoffset: seg.dashOffset }}
                                transition={{ delay: i * 0.1 + 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            />
                        ))}
                    </svg>

                    {/* Center label */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={centerLabel}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="text-center"
                            >
                                <p className="text-[10px] text-text-tertiary font-medium uppercase tracking-wider">{centerLabel}</p>
                                <p className="text-xl font-bold text-text-primary tabular-nums">{centerValue}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex-1 w-full space-y-2">
                    {segments.map((seg, i) => (
                        <motion.div
                            key={seg.id}
                            className={cn(
                                'flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-apple',
                                hoveredId === seg.id ? 'bg-surface-secondary' : 'hover:bg-surface-secondary/50',
                            )}
                            onMouseEnter={() => setHoveredId(seg.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 + 0.4, duration: 0.25 }}
                        >
                            <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: seg.color }} />
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-semibold text-text-primary">{seg.name}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-bold text-text-primary tabular-nums">
                                    {(seg.pct * 100).toFixed(1)}%
                                </p>
                                <p className="text-[10px] text-text-tertiary tabular-nums">
                                    {formatCurrency(seg.value)}
                                </p>
                            </div>
                            {seg.change !== undefined && (
                                <span className={cn(
                                    'text-[10px] font-bold px-1.5 py-0.5 rounded-full',
                                    seg.change >= 0
                                        ? 'bg-status-success/10 text-status-success'
                                        : 'bg-status-error/10 text-status-error',
                                )}>
                                    {seg.change >= 0 ? '+' : ''}{seg.change.toFixed(1)}%
                                </span>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

PortfolioDistribution.displayName = 'PortfolioDistribution';
export default PortfolioDistribution;

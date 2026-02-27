"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Info, TrendingUp, AlertTriangle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Tooltip } from './Tooltip';

export interface AllocationAsset {
    id: string;
    name: string;
    ticker: string;
    value: number;
    color: string; // valid Tailwind color class or hex (e.g., 'bg-blue-500' or '#3b82f6')
    riskLevel: 'low' | 'medium' | 'high';
}

export interface AssetAllocationChartProps {
    assets: AllocationAsset[];
    currency?: string;
    className?: string;
}

export const AssetAllocationChart: React.FC<AssetAllocationChartProps> = ({
    assets,
    currency = 'USD',
    className,
}) => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(val);

    // Calculate percentage and sort for treemap visualization
    const sortedAssets = [...assets]
        .map(a => ({ ...a, percentage: (a.value / totalValue) * 100 }))
        .sort((a, b) => b.percentage - a.percentage);

    return (
        <div className={cn("w-full max-w-lg bg-white dark:bg-zinc-900 rounded-[2rem] p-6 shadow-xl border border-zinc-200 dark:border-zinc-800", className)}>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-xl shadow-sm">
                        <PieChart className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Asset Allocation</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">Total Portfolio Value</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-2xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight">
                        {formatCurrency(totalValue)}
                    </p>
                </div>
            </div>

            {/* Treemap Visualization */}
            <div className="relative w-full h-64 rounded-2xl overflow-hidden flex flex-wrap gap-1 p-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-inner">
                {sortedAssets.map((asset) => {
                    const isHovered = hoveredId === asset.id;
                    const isDimmed = hoveredId !== null && hoveredId !== asset.id;

                    // Simplistic flex basis sizing for a pseudo-treemap
                    const flexBasis = Math.max(asset.percentage, 10); // minimum size to be readable

                    return (
                        <motion.div
                            key={asset.id}
                            onMouseEnter={() => setHoveredId(asset.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            layout
                            className={cn(
                                "relative rounded-xl flex flex-col justify-end p-3 text-white overflow-hidden cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md",
                                asset.color.startsWith('bg-') ? asset.color : 'bg-zinc-800'
                            )}
                            style={{
                                flexBasis: `${flexBasis}%`,
                                flexGrow: asset.percentage,
                                backgroundColor: !asset.color.startsWith('bg-') ? asset.color : undefined,
                                opacity: isDimmed ? 0.4 : 1,
                                filter: isDimmed ? 'grayscale(50%)' : 'none',
                            }}
                            whileHover={{ scale: 1.02, zIndex: 10 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Decorative shiny effect */}
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

                            <AnimatePresence>
                                {(isHovered || asset.percentage > 15) && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="relative z-10"
                                    >
                                        <div className="font-bold text-lg leading-none drop-shadow-md">
                                            {asset.percentage.toFixed(1)}%
                                        </div>
                                        <div className="text-xs font-medium opacity-90 truncate leading-tight mt-1 mix-blend-overlay">
                                            {asset.name}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>

            {/* Legend & Details */}
            <div className="mt-6 space-y-3 max-h-48 overflow-y-auto custom-scrollbar pr-2">
                {sortedAssets.map((asset) => (
                    <div
                        key={asset.id}
                        onMouseEnter={() => setHoveredId(asset.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className={cn(
                            "flex items-center justify-between p-3 rounded-xl border border-transparent transition-all cursor-default",
                            hoveredId === asset.id
                                ? "bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 shadow-sm"
                                : "hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30"
                        )}
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className={cn("w-3 h-3 rounded-full shadow-inner", asset.color)}
                                style={{ backgroundColor: !asset.color.startsWith('bg-') ? asset.color : undefined }}
                            />
                            <div>
                                <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100 leading-tight">{asset.name}</p>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">{asset.ticker}</p>
                                    <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                    <p className={cn("text-[10px] uppercase font-bold tracking-wider",
                                        asset.riskLevel === 'high' ? "text-rose-500" :
                                        asset.riskLevel === 'medium' ? "text-amber-500" :
                                        "text-emerald-500"
                                    )}>
                                        {asset.riskLevel} Risk
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                                {formatCurrency(asset.value)}
                            </p>
                            <p className="text-[10px] font-bold text-zinc-500 tracking-wider">
                                {asset.percentage.toFixed(2)}%
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Risk Warning (if high risk concentration) */}
            {sortedAssets.filter(a => a.riskLevel === 'high').reduce((sum, a) => sum + a.percentage, 0) > 40 && (
                <div className="mt-5 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/40 flex gap-3 items-start">
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-800 dark:text-amber-300 font-medium">
                        <b>High Risk Concentration:</b> Over 40% of your portfolio is in high-risk assets. Consider diversifying to reduce volatility.
                    </p>
                </div>
            )}
        </div>
    );
};

AssetAllocationChart.displayName = 'AssetAllocationChart';

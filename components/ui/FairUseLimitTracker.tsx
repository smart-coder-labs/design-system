"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { CreditCard, Landmark, RefreshCw } from 'lucide-react';

export interface LimitCategory {
    id: string;
    title: string;
    used: number;
    total: number;
    currency?: string;
    icon?: React.ReactNode;
    color?: string; // Tailwind color classes e.g "text-blue-500"
}

export interface FairUseLimitTrackerProps {
    categories: LimitCategory[];
    className?: string;
}

export const FairUseLimitTracker: React.FC<FairUseLimitTrackerProps> = ({
    categories,
    className,
}) => {
    return (
        <div className={cn("w-full max-w-sm rounded-[2rem] p-6 bg-surface-primary border border-border-primary shadow-xl", className)}>
            <div className="mb-6">
                <h3 className="text-xl font-bold text-text-primary mb-1">Fair Use Limits</h3>
                <p className="text-sm text-text-tertiary">Your monthly free allowances reset in 12 days</p>
            </div>

            <div className="space-y-6">
                {categories.map((cat, idx) => {
                    const percentage = Math.min((cat.used / cat.total) * 100, 100);
                    const isExceeded = percentage >= 100;
                    const isWarning = percentage >= 80 && !isExceeded;

                    const formattedUsed = cat.currency
                        ? new Intl.NumberFormat('en-US', { style: 'currency', currency: cat.currency }).format(cat.used)
                        : cat.used;
                    const formattedTotal = cat.currency
                        ? new Intl.NumberFormat('en-US', { style: 'currency', currency: cat.currency }).format(cat.total)
                        : cat.total;

                    return (
                        <div key={cat.id} className="relative bg-background-secondary rounded-2xl p-4 border border-border-primary">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className={cn("p-2 rounded-xl bg-white dark:bg-zinc-700 shadow-sm", cat.color || "text-zinc-600 dark:text-zinc-300")}>
                                        {cat.icon || <RefreshCw className="w-4 h-4" />}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-text-primary text-sm">{cat.title}</p>
                                        <p className={cn("text-xs font-medium mix-blend-overlay",
                                            isExceeded ? "text-red-600 dark:text-red-400" :
                                                isWarning ? "text-amber-600 dark:text-amber-400" :
                                                    "text-text-tertiary"
                                        )}>
                                            {formattedUsed} / {formattedTotal}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className={cn("text-lg font-bold tracking-tight",
                                        isExceeded ? "text-red-600 dark:text-red-400" :
                                            isWarning ? "text-amber-600 dark:text-amber-400" :
                                                "text-emerald-600 dark:text-emerald-400"
                                    )}>
                                        {isExceeded ? "0" : (100 - percentage).toFixed(0)}%
                                    </p>
                                    <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 dark:text-zinc-500">Left</p>
                                </div>
                            </div>

                            {/* Circular/Linear Progress Indicator */}
                            <div className="relative h-2.5 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${percentage}%` }}
                                    transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 }}
                                    className={cn(
                                        "absolute top-0 left-0 h-full rounded-full transition-all duration-300",
                                        isExceeded ? "bg-red-500" :
                                            isWarning ? "bg-amber-500" :
                                                "bg-gradient-to-r from-emerald-500 to-teal-400"
                                    )}
                                />
                            </div>

                            {isExceeded && (
                                <motion.p
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-xs text-red-600 dark:text-red-400 font-medium mt-2 flex items-center gap-1"
                                >
                                    You've exceeded your free limit. A 1% fee applies.
                                </motion.p>
                            )}
                        </div>
                    );
                })}
            </div>
            
            <button className="w-full mt-6 py-3 rounded-xl border-2 border-dashed border-border-primary text-text-secondary font-semibold hover:border-zinc-300 dark:hover:border-zinc-600 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">
                Upgrade Plan for Higher Limits
            </button>
        </div>
    );
};

FairUseLimitTracker.displayName = 'FairUseLimitTracker';

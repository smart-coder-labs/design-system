"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Gift, TrendingUp, Sparkles } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export interface CashbackWidgetProps {
    earned: number;
    total?: number;
    currency?: string;
    locale?: string;
    percentage?: number;
    label?: string;
    period?: string;
    className?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

export const CashbackWidget: React.FC<CashbackWidgetProps> = ({
    earned,
    total,
    currency = 'USD',
    locale = 'en-US',
    percentage = 2.5,
    label = 'Cashback Earned',
    period = 'This month',
    className = '',
}) => {
    const formatCurrency = (v: number) =>
        new Intl.NumberFormat(locale, { style: 'currency', currency, minimumFractionDigits: 2 }).format(v);

    // Progress ring calculations
    const progress = total ? Math.min(earned / total, 1) : 0.65;
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * (1 - progress);

    return (
        <motion.div
            className={cn(
                'bg-surface-primary rounded-2xl border border-border-primary shadow-sm p-5',
                'relative overflow-hidden group',
                className,
            )}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -2 }}
        >
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-amber-400/5 blur-2xl group-hover:bg-amber-400/10 transition-apple duration-500" />

            <div className="relative flex items-center gap-4">
                {/* Progress ring */}
                <div className="relative w-24 h-24 shrink-0">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        {/* Background circle */}
                        <circle
                            cx="50" cy="50" r={radius}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="6"
                            className="text-surface-secondary"
                        />
                        {/* Progress circle */}
                        <motion.circle
                            cx="50" cy="50" r={radius}
                            fill="none"
                            stroke="url(#cashback-gradient)"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            animate={{ strokeDashoffset }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        />
                        <defs>
                            <linearGradient id="cashback-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#f59e0b" />
                                <stop offset="100%" stopColor="#f97316" />
                            </linearGradient>
                        </defs>
                    </svg>
                    {/* Center content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Sparkles className="w-4 h-4 text-amber-500 mb-0.5" />
                        <span className="text-[10px] font-bold text-text-primary">{percentage}%</span>
                    </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1">
                        <Gift className="w-3.5 h-3.5 text-amber-500" />
                        <span className="text-xs font-medium text-text-tertiary uppercase tracking-wider">{label}</span>
                    </div>
                    <p className="text-2xl font-bold text-text-primary tabular-nums">
                        {formatCurrency(earned)}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                        <span className="flex items-center gap-0.5 text-[10px] font-bold text-status-success bg-status-success/10 px-1.5 py-0.5 rounded-full">
                            <TrendingUp className="w-2.5 h-2.5" /> +{percentage}%
                        </span>
                        <span className="text-[10px] text-text-quaternary">{period}</span>
                    </div>
                    {total && (
                        <div className="mt-2">
                            <div className="flex items-center justify-between text-[10px] text-text-tertiary mb-0.5">
                                <span>Goal</span>
                                <span>{formatCurrency(total)}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

CashbackWidget.displayName = 'CashbackWidget';
export default CashbackWidget;

"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, LockIcon, UnlockIcon, ChevronUp, ChevronDown, Check } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Slider } from './Slider';

export interface CreditLimitManagerProps {
    maxLimit: number;
    initialLimit?: number;
    currentBalance?: number;
    currency?: string;
    className?: string;
    onSave?: (newLimit: number) => void;
}

export const CreditLimitManager: React.FC<CreditLimitManagerProps> = ({
    maxLimit = 10000,
    initialLimit = 10000,
    currentBalance = 1500,
    currency = 'USD',
    className,
    onSave,
}) => {
    const [limit, setLimit] = useState(initialLimit);
    const [isSaving, setIsSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(val);

    const safeMinLimit = Math.max(currentBalance, 0);

    const handleLimitChange = (val: number) => {
        if (val < safeMinLimit) return; // Prevent setting below current balance
        setLimit(val);
        setSaved(false);
    };

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setSaved(true);
            onSave?.(limit);
        }, 800);
    };

    const percentage = (limit / maxLimit) * 100;

    return (
        <div className={cn("w-full max-w-md bg-surface-primary rounded-[2rem] p-6 shadow-xl border border-border-primary", className)}>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-2xl shadow-sm">
                    <Shield className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-text-primary">Credit Limit</h3>
                    <p className="text-sm text-text-tertiary">Control your spending power</p>
                </div>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-800/40 rounded-3xl p-6 border border-border-primary/50 mb-6">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">Active Limit</p>
                        <h2 className="text-4xl font-bold tracking-tight text-text-primary transition-all duration-100">
                            {formatCurrency(limit)}
                        </h2>
                    </div>
                </div>

                <div className="relative pt-4 pb-2">
                    {/* The literal Slider if there's an existing standard component, but since it's highly custom, we implement the custom slider here */}
                    <div className="relative h-2 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full">
                        <div
                            className={cn(
                                "absolute top-0 left-0 h-full rounded-full",
                                limit < maxLimit / 2 ? "bg-emerald-500" :
                                    limit < maxLimit * 0.8 ? "bg-violet-500" :
                                        "bg-amber-500"
                            )}
                            style={{ width: `${percentage}%`, transition: 'width 80ms linear' }}
                        >
                            <div
                                className="absolute right-0 top-1/2 -mt-3 -mr-3 w-6 h-6 bg-white border-2 border-inherit rounded-full shadow-lg cursor-pointer"
                            />
                        </div>
                        {/* Fake invisible input for accessibility and sliding logic via slider, since we're using a native one is safer */}
                        <input
                            type="range"
                            min={safeMinLimit}
                            max={maxLimit}
                            step={100}
                            value={limit}
                            onChange={(e) => handleLimitChange(Number(e.target.value))}
                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        />
                    </div>
                    
                    <div className="flex justify-between items-center mt-3 text-xs font-medium text-text-tertiary">
                        <span>{formatCurrency(safeMinLimit)} (Balance)</span>
                        <span>{formatCurrency(maxLimit)} Max</span>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-4 flex gap-3 border border-blue-100 dark:border-blue-900/30 mb-6">
                <LockIcon className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800 dark:text-blue-300">
                    Lowering your limit temporarily protects you from unauthorized large purchases. It doesn't affect your credit score.
                </p>
            </div>

            <motion.button
                whileTap={{ scale: 0.96 }}
                disabled={limit === initialLimit && !saved}
                onClick={handleSave}
                className={cn(
                    "w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue",
                    limit === initialLimit && !saved
                        ? "bg-background-secondary text-zinc-400 dark:text-zinc-500 cursor-not-allowed border border-transparent"
                        : saved
                            ? "bg-status-success/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
                            : "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:shadow-lg"
                )}
            >
                {isSaving ? (
                    <span className="w-5 h-5 border-2 border-current border-t-transparent flex rounded-full animate-spin" />
                ) : saved ? (
                    <>
                        <Check className="w-5 h-5" /> <span>Limit Saved</span>
                    </>
                ) : (
                    "Apply Changes"
                )}
            </motion.button>
        </div>
    );
};

CreditLimitManager.displayName = 'CreditLimitManager';

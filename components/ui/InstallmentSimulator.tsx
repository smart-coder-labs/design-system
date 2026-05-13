"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info, CalendarDays, ShoppingBag } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface InstallmentSimulatorProps {
    purchaseAmount: number;
    currency?: string;
    maxMonths?: number;
    interestRate?: number; // annual percentage rate
    className?: string;
    onConfirm?: (months: number, monthlyPayment: number) => void;
}

export const InstallmentSimulator: React.FC<InstallmentSimulatorProps> = ({
    purchaseAmount = 1200,
    currency = 'USD',
    maxMonths = 12,
    interestRate = 18,
    className,
    onConfirm,
}) => {
    const [months, setMonths] = useState(3);
    
    // Simple amortization formula
    const monthlyInterestRate = interestRate / 100 / 12;
    const monthlyPayment = months === 1 
        ? purchaseAmount 
        : (purchaseAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));

    const totalPaid = monthlyPayment * months;
    const totalInterest = totalPaid - purchaseAmount;

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency, minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(val);

    const monthOptions = [1, 3, 6, 9, 12].filter(m => m <= maxMonths);

    return (
        <div className={cn("w-full max-w-md bg-surface-primary rounded-[2rem] p-6 shadow-xl border border-border-primary", className)}>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl shadow-sm">
                    <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-text-primary">Pay Over Time</h3>
                    <p className="text-sm text-text-tertiary">Choose how you want to split this purchase</p>
                </div>
            </div>

            <div className="bg-background-secondary dark:bg-gray-900/40 rounded-3xl p-6 border border-border-primary/50 mb-6">
                <div className="flex justify-between items-end mb-4">
                    <div>
                        <p className="text-xs uppercase tracking-wider text-text-tertiary font-bold mb-1">Buy Now Price</p>
                        <h2 className="text-2xl font-bold tracking-tight text-text-primary">
                            {formatCurrency(purchaseAmount)}
                        </h2>
                    </div>
                </div>

                <div className="space-y-3">
                    <p className="text-sm font-medium text-text-secondary">Choose Duration</p>
                    <div className="flex gap-2 pb-2">
                        {monthOptions.map(m => (
                            <button
                                key={m}
                                onClick={() => setMonths(m)}
                                className={cn(
                                    "flex-1 py-3 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer shadow-sm",
                                    months === m
                                        ? "border-accent-blue bg-accent-blue-tint text-accent-blue ring-1 ring-accent-blue"
                                        : "border-border-primary bg-surface-primary text-text-secondary hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-md"
                                )}
                            >
                                <span className={cn("text-lg font-bold", months === m ? "text-blue-600 dark:text-blue-400" : "")}>{m}</span>
                                <span className="text-[10px] uppercase font-semibold">Mo</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-surface-primary border border-border-primary rounded-2xl p-5 mb-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                    <CalendarDays className="w-5 h-5 text-text-tertiary" />
                    <p className="text-sm font-semibold">Payment Summary</p>
                </div>
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center text-text-secondary">
                        <span>Monthly Payment</span>
                        <motion.span
                            key={`monthly-${months}`}
                            initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                            className="font-bold text-text-primary"
                        >
                            {formatCurrency(monthlyPayment)}
                        </motion.span>
                    </div>
                    <div className="flex justify-between items-center text-text-secondary">
                        <span>Total Interest ({interestRate}% APR)</span>
                        <motion.span
                            key={`interest-${months}`}
                            initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                            className="font-medium"
                        >
                            {months === 1 ? '0.00' : formatCurrency(totalInterest)}
                        </motion.span>
                    </div>
                    <div className="h-px bg-zinc-200 dark:bg-gray-900 my-2" />
                    <div className="flex justify-between items-center font-bold text-text-primary">
                        <span>Total Paid Over Time</span>
                        <motion.span
                            key={`total-${months}`}
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                            className="text-lg"
                        >
                            {formatCurrency(totalPaid)}
                        </motion.span>
                    </div>
                </div>

                {/* mini chart visualizing interest vs principal */}
                <div className="mt-5 relative h-3 bg-background-secondary rounded-full overflow-hidden flex shadow-inner">
                    <motion.div
                        className="h-full bg-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${(purchaseAmount / totalPaid) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.div
                        className="h-full bg-amber-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${(totalInterest / totalPaid) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
                <div className="flex justify-between items-center text-[10px] uppercase font-bold text-text-tertiary mt-2">
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500" /> Principal</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-amber-400" /> Interest</span>
                </div>
            </div>

            <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => onConfirm?.(months, monthlyPayment)}
                className="w-full py-4 bg-zinc-900 dark:bg-surface-primary text-white dark:text-zinc-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
            >
                Confirm Plan
            </motion.button>
        </div>
    );
};

InstallmentSimulator.displayName = 'InstallmentSimulator';

"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Repeat, Rocket, ChevronRight, Check } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface AutomationRule {
    amount: number;
    asset: string;
    frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly';
}

export interface RecurringInvestConfiguratorProps {
    className?: string;
    onSave?: (rule: AutomationRule) => void;
}

export const RecurringInvestConfigurator: React.FC<RecurringInvestConfiguratorProps> = ({
    className,
    onSave,
}) => {
    const [step, setStep] = useState<1 | 2>(1);
    const [amount, setAmount] = useState<string>("50");
    const [asset, setAsset] = useState<string>("S&P 500");
    const [frequency, setFrequency] = useState<AutomationRule['frequency']>('biweekly');

    const frequencies = [
        { id: 'daily', label: 'Daily', desc: 'Every market day' },
        { id: 'weekly', label: 'Weekly', desc: 'Every Monday' },
        { id: 'biweekly', label: 'Bi/Weekly', desc: 'Every 15 days' },
        { id: 'monthly', label: 'Monthly', desc: '1st of month' },
    ];

    const assets = [
        { id: 'S&P 500', name: 'S&P 500', type: 'ETF', color: 'bg-blue-500' },
        { id: 'Bitcoin', name: 'Bitcoin', type: 'Crypto', color: 'bg-orange-500' },
        { id: 'Apple', name: 'Apple Inc.', type: 'Stock', color: 'bg-zinc-800' },
    ];

    const handleNext = () => setStep(2);
    const handleBack = () => setStep(1);

    const handleSave = () => {
        onSave?.({
            amount: parseFloat(amount) || 0,
            asset,
            frequency,
        });
    };

    return (
        <div className={cn("w-full max-w-sm bg-surface-primary rounded-[2rem] p-6 shadow-xl border border-border-primary overflow-hidden relative", className)}>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl shadow-sm">
                    <Repeat className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-text-primary">Auto-Invest</h3>
                    <p className="text-sm text-text-tertiary">Dollar Cost Averaging</p>
                </div>
            </div>

            <div className="mb-4">
                <div className="h-1.5 w-full bg-background-secondary rounded-full overflow-hidden flex">
                    <motion.div
                        className="h-full bg-indigo-500"
                        initial={{ width: '50%' }}
                        animate={{ width: step === 1 ? '50%' : '100%' }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-text-tertiary mt-2">
                    <span className={step === 1 ? "text-indigo-600 dark:text-indigo-400" : ""}>Step 1: What</span>
                    <span className={step === 2 ? "text-indigo-600 dark:text-indigo-400" : ""}>Step 2: When</span>
                </div>
            </div>

            <div className="relative min-h-[300px]">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            className="space-y-6"
                        >
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-text-secondary block">I want to buy</label>
                                <div className="flex gap-2 pb-2 overflow-x-auto custom-scrollbar">
                                    {assets.map((a) => (
                                        <button
                                            key={a.id}
                                            onClick={() => setAsset(a.id)}
                                            className={cn(
                                                "flex-shrink-0 flex items-center gap-2 p-2 pr-4 rounded-xl border-2 transition-all",
                                                asset === a.id
                                                    ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500"
                                                    : "border-border-primary hover:border-zinc-300 shadow-sm text-text-primary"
                                            )}
                                        >
                                            <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white", a.color)}>
                                                {a.name[0]}
                                            </div>
                                            <div className="text-left leading-tight">
                                                <div className="text-sm font-bold">{a.name}</div>
                                                <div className="text-[10px] uppercase font-semibold text-text-tertiary">{a.type}</div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-text-secondary block">Amount</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-text-tertiary">$</span>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="w-full bg-background-secondary border border-border-primary rounded-2xl pl-10 pr-4 py-4 text-3xl font-black text-text-primary outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                </div>
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.96 }}
                                onClick={handleNext}
                                className="w-full py-4 bg-zinc-900 hover:bg-zinc-700 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-zinc-900 rounded-xl font-bold flex items-center justify-center gap-2 mt-4 shadow-md hover:shadow-lg transition-all"
                            >
                                Continue <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 20, opacity: 0 }}
                            className="space-y-6"
                        >
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-text-secondary block flex items-center gap-2">
                                    <Calendar className="w-4 h-4" /> Keep buying it
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {frequencies.map((f) => (
                                        <button
                                            key={f.id}
                                            onClick={() => setFrequency(f.id as AutomationRule['frequency'])}
                                            className={cn(
                                                "p-4 rounded-xl border-2 text-left transition-all",
                                                frequency === f.id
                                                    ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 ring-2 ring-indigo-500/20 shadow-sm text-indigo-900 dark:text-indigo-100"
                                                    : "border-border-primary hover:border-zinc-300 text-text-primary"
                                            )}
                                        >
                                            <div className="font-bold text-text-primary">{f.label}</div>
                                            <div className="text-xs text-text-tertiary mt-1 font-medium">{f.desc}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-4 text-sm text-indigo-900 dark:text-indigo-200">
                                <b>Summary:</b> You will auto-invest <b>${amount}</b> in <b>{asset}</b> on a <b>{frequency}</b> basis.
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    onClick={handleBack}
                                    className="px-6 py-4 rounded-xl font-bold text-text-tertiary bg-background-secondary hover:bg-background-secondary transition-colors"
                                >
                                    Back
                                </button>
                                <motion.button
                                    whileTap={{ scale: 0.96 }}
                                    onClick={handleSave}
                                    className="flex-1 py-4 bg-accent-blue hover:bg-accent-blue-hover text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-accent-blue/30 transition-all"
                                >
                                    <Rocket className="w-5 h-5" /> Activate
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

RecurringInvestConfigurator.displayName = 'RecurringInvestConfigurator';

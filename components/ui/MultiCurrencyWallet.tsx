"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Globe, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface WalletBalance {
    id: string;
    currencyCode: string;
    currencyName: string;
    flag: string;
    balance: number;
    isLocal?: boolean;
    color?: string; // Example: 'from-blue-600 to-blue-800'
}

export interface MultiCurrencyWalletProps {
    wallets: WalletBalance[];
    className?: string;
    onAddFunds?: (id: string) => void;
    onSend?: (id: string) => void;
}

export const MultiCurrencyWallet: React.FC<MultiCurrencyWalletProps> = ({
    wallets,
    className,
    onAddFunds,
    onSend,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextWallet = () => {
        setActiveIndex((prev) => (prev + 1) % wallets.length);
    };

    const prevWallet = () => {
        setActiveIndex((prev) => (prev === 0 ? wallets.length - 1 : prev - 1));
    };

    if (!wallets || wallets.length === 0) return null;

    const activeWallet = wallets[activeIndex];

    return (
        <div className={cn("relative w-full max-w-sm rounded-[2rem] p-6 bg-surface-primary border border-border-primary shadow-xl", className)}>
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-text-primary">
                    <Globe className="w-5 h-5 text-blue-500" />
                    Global Wallets
                </h3>
                <div className="flex gap-2">
                    <button
                        onClick={prevWallet}
                        className="p-1.5 rounded-full bg-background-secondary hover:bg-background-secondary transition"
                    >
                        <ChevronLeft className="w-4 h-4 text-text-secondary" />
                    </button>
                    <button
                        onClick={nextWallet}
                        className="p-1.5 rounded-full bg-background-secondary hover:bg-background-secondary transition"
                    >
                        <ChevronRight className="w-4 h-4 text-text-secondary" />
                    </button>
                </div>
            </div>

            <div className="relative h-48 mb-6">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={activeWallet.id}
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -50, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={cn(
                            "absolute inset-0 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-lg",
                            activeWallet.isLocal
                                ? "bg-gradient-to-br from-zinc-800 to-zinc-950 text-white"
                                : activeWallet.color
                                ? `bg-gradient-to-br ${activeWallet.color} text-white`
                                : "bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
                        )}
                    >
                        {/* Decorative Patterns */}
                        {!activeWallet.isLocal && (
                            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                        )}
                        <div className="flex justify-between items-start relative z-10">
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">{activeWallet.flag}</span>
                                <div>
                                    <p className="text-sm opacity-80 font-medium">
                                        {activeWallet.isLocal ? "Local Account" : "Foreign Wallet"}
                                    </p>
                                    <p className="font-bold tracking-wide">{activeWallet.currencyName}</p>
                                </div>
                            </div>
                            <span className="font-mono text-sm opacity-60 mix-blend-overlay">VISA</span>
                        </div>

                        <div className="relative z-10">
                            <p className="text-xs uppercase tracking-wider mb-1 opacity-70">Available Balance</p>
                            <h2 className="text-4xl font-bold tracking-tight">
                                {new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: activeWallet.currencyCode,
                                }).format(activeWallet.balance)}
                            </h2>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex gap-4">
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onAddFunds?.(activeWallet.id)}
                    className="flex-1 py-3 px-2 sm:px-4 rounded-xl bg-accent-blue hover:bg-accent-blue-hover text-white font-semibold flex items-center justify-center gap-2 shadow-md shadow-accent-blue/20 transition-colors cursor-pointer whitespace-nowrap"
                >
                    <ArrowDownLeft className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    <span className="text-sm sm:text-base">Add Funds</span>
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onSend?.(activeWallet.id)}
                    className="flex-1 py-3 px-2 sm:px-4 rounded-xl bg-background-secondary hover:bg-border-primary/30 text-text-primary font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
                >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    <span className="text-sm sm:text-base">Send</span>
                </motion.button>
            </div>

            {/* Pagination dots indicator */}
            <div className="mt-6 flex justify-center gap-1.5">
                {wallets.map((w, idx) => (
                    <div
                        key={w.id}
                        className={cn(
                            "h-1.5 rounded-full transition-all duration-300",
                            idx === activeIndex
                                ? "w-6 bg-accent-blue"
                                : "w-1.5 bg-zinc-300 dark:bg-zinc-700"
                        )}
                    />
                ))}
            </div>
        </div>
    );
};

MultiCurrencyWallet.displayName = 'MultiCurrencyWallet';

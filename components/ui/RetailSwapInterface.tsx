"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, Info, ShieldCheck, Zap } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Tooltip } from './Tooltip'; // assumed to exist, will use native styled tooltip if not

export interface CryptoAsset {
    id: string;
    symbol: string;
    name: string;
    iconUrl?: string; // or emoji
    balance: number;
    priceUsd: number;
}

export interface RetailSwapInterfaceProps {
    assets: CryptoAsset[];
    className?: string;
    onSwap?: (from: string, to: string, amount: number) => void;
}

export const RetailSwapInterface: React.FC<RetailSwapInterfaceProps> = ({
    assets,
    className,
    onSwap,
}) => {
    const [fromAsset, setFromAsset] = useState<CryptoAsset>(assets[0] || { id: 'btc', symbol: 'BTC', name: 'Bitcoin', iconUrl: '₿', balance: 0.5, priceUsd: 45000 });
    const [toAsset, setToAsset] = useState<CryptoAsset>(assets[1] || { id: 'usdc', symbol: 'USDC', name: 'USD Coin', iconUrl: '💲', balance: 1000, priceUsd: 1 });
    const [amount, setAmount] = useState<string>("0.1");
    const [swapRotation, setSwapRotation] = useState(0);

    const amountNum = parseFloat(amount) || 0;
    const usdValue = amountNum * fromAsset.priceUsd;
    
    // Simplistic simulated exchange
    const exchangeRate = fromAsset.priceUsd / toAsset.priceUsd;
    const outAmount = amountNum * exchangeRate;
    
    // Abstracted away fees
    const spreadPercentage = 0.5;
    const gasFeeUsd = 2.50;
    const totalOut = Math.max(0, outAmount * (1 - spreadPercentage / 100) - (gasFeeUsd / toAsset.priceUsd));
    
    const handleInvert = () => {
        setSwapRotation(prev => prev + 180);
        setFromAsset(toAsset);
        setToAsset(fromAsset);
        setAmount("0");
    };

    return (
        <div className={cn("w-full max-w-sm bg-surface-primary rounded-[2rem] p-6 shadow-xl border border-border-primary", className)}>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-500" />
                    Swap Crypto
                </h3>
            </div>

            <div className="relative flex flex-col gap-2 relative z-10">
                {/* Pay */}
                <div className="bg-background-secondary rounded-3xl p-4 border border-border-primary focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-text-tertiary">You pay</span>
                        <span className="text-xs font-medium text-text-secondary bg-background-secondary px-2 py-1 rounded-lg">
                            Bal: {fromAsset.balance} {fromAsset.symbol}
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0"
                            className="w-1/2 text-4xl font-bold tracking-tighter bg-transparent outline-none text-text-primary [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <button className="flex-1 flex items-center justify-between gap-2 p-2 pl-3 ml-auto text-text-primary bg-surface-primary rounded-2xl shadow-sm border border-border-primary hover:bg-background-secondary transition-colors cursor-pointer">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">{fromAsset.iconUrl}</span>
                                <span className="font-bold">{fromAsset.symbol}</span>
                            </div>
                            <span className="text-text-tertiary rotate-90">›</span>
                        </button>
                    </div>
                    <p className="text-sm font-medium text-text-tertiary mt-2">
                        ≈ ${usdValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                </div>

                {/* Swap Icon */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleInvert}
                        className="p-2.5 bg-background-secondary border-4 border-surface-primary dark:border-zinc-900 rounded-full text-text-secondary hover:text-blue-500 transition-all shadow-sm"
                    >
                        <motion.div animate={{ rotate: swapRotation }} transition={{ duration: 0.35, ease: 'easeInOut' }}>
                            <ArrowLeftRight className="w-5 h-5" />
                        </motion.div>
                    </motion.button>
                </div>

                {/* Receive */}
                <div className="bg-background-secondary rounded-3xl p-4 border border-border-primary">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-text-tertiary">You receive</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-1/2 text-4xl font-bold tracking-tighter text-text-primary truncate">
                            {totalOut > 0 ? totalOut.toLocaleString(undefined, { maximumFractionDigits: 4 }) : '0'}
                        </div>
                        <button className="flex-1 flex items-center justify-between gap-2 p-2 pl-3 ml-auto text-text-primary bg-surface-primary rounded-2xl shadow-sm border border-border-primary hover:bg-background-secondary transition-colors cursor-pointer">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">{toAsset.iconUrl}</span>
                                <span className="font-bold">{toAsset.symbol}</span>
                            </div>
                            <span className="text-text-tertiary rotate-90">›</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Smart Abstracted Details */}
            <div className="mt-6 space-y-3 bg-blue-50 dark:bg-blue-900/10 p-4 rounded-2xl border border-blue-200 dark:border-blue-900/40">
                <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-text-tertiary flex items-center gap-1.5 tooltip-trigger relative group">
                        Network Cost <Info className="w-3.5 h-3.5" />
                        <div className="absolute bottom-full left-0 mb-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-zinc-900 text-white text-xs p-2 rounded-lg z-50 shadow-xl">
                            Gas fee to process this on the blockchain. We found the cheapest route.
                        </div>
                    </span>
                    <span className="text-text-primary">${gasFeeUsd.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-text-tertiary flex items-center gap-1.5 tooltip-trigger relative group">
                        Fair Execution <Info className="w-3.5 h-3.5" />
                        <div className="absolute bottom-full left-0 mb-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-zinc-900 text-white text-xs p-2 rounded-lg z-50 shadow-xl">
                            Includes a {spreadPercentage}% protective spread to prevent failed transactions (Slippage).
                        </div>
                    </span>
                    <span className="text-emerald-600 flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4" /> Guaranteed
                    </span>
                </div>
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSwap?.(fromAsset.id, toAsset.id, amountNum)}
                disabled={amountNum > fromAsset.balance || amountNum <= 0}
                className={cn(
                    "w-full py-4 rounded-xl font-bold text-center mt-6 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue",
                    amountNum > fromAsset.balance || amountNum <= 0
                        ? "bg-background-secondary text-text-tertiary cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
                )}
            >
                {amountNum > fromAsset.balance ? 'Insufficient Funds' : 'Review Swap'}
            </motion.button>
        </div>
    );
};

RetailSwapInterface.displayName = 'RetailSwapInterface';

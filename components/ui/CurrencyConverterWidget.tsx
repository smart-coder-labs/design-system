"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownUp, Info, Clock, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface CurrencyOption {
    code: string;
    flag: string;
    name: string;
}

export interface CurrencyConverterWidgetProps {
    currencies: CurrencyOption[];
    exchangeRate: number; // e.g. 1 USD = 0.92 EUR
    feePercentage: number;
    estimatedDelivery: string;
    className?: string;
    onConvert?: (from: string, to: string, amount: number) => void;
}

export const CurrencyConverterWidget: React.FC<CurrencyConverterWidgetProps> = ({
    currencies,
    exchangeRate = 0.92,
    feePercentage = 0.5,
    estimatedDelivery = 'In seconds',
    className,
    onConvert,
}) => {
    const [amount, setAmount] = useState<string>('1000');
    const [fromCurrency, setFromCurrency] = useState<CurrencyOption>(currencies[0] || { code: 'USD', flag: '🇺🇸', name: 'US Dollar' });
    const [toCurrency, setToCurrency] = useState<CurrencyOption>(currencies[1] || { code: 'EUR', flag: '🇪🇺', name: 'Euro' });
    const [isSwapping, setIsSwapping] = useState(false);

    const parsedAmount = parseFloat(amount) || 0;
    const feeAmount = (parsedAmount * feePercentage) / 100;
    const amountAfterFee = parsedAmount - feeAmount;
    const convertedAmount = amountAfterFee * exchangeRate;

    const handleSwap = () => {
        setIsSwapping(true);
        setTimeout(() => {
            setFromCurrency(toCurrency);
            setToCurrency(fromCurrency);
            setIsSwapping(false);
        }, 300);
    };

    return (
        <div className={cn('w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-xl border border-zinc-200 dark:border-zinc-800', className)}>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Send Money</h3>
                <button className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline">Rates</button>
            </div>

            <div className="space-y-4">
                {/* Send Input */}
                <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-4 border border-zinc-200 dark:border-zinc-800 focus-within:border-blue-500 dark:focus-within:border-blue-500 transition-colors">
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">You send</p>
                    <div className="flex items-center justify-between">
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="bg-transparent text-3xl font-semibold text-zinc-900 dark:text-zinc-100 outline-none w-1/2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            placeholder="0.00"
                        />
                        <button className="flex items-center gap-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full px-3 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors shadow-sm">
                            <span className="text-lg">{fromCurrency.flag}</span>
                            <span className="font-semibold text-zinc-900 dark:text-zinc-100">{fromCurrency.code}</span>
                        </button>
                    </div>
                </div>

                {/* Exchange Details */}
                <div className="relative flex flex-col items-center">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleSwap}
                        className="absolute top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full p-2 shadow-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <motion.div animate={{ rotate: isSwapping ? 180 : 0 }} transition={{ duration: 0.3 }}>
                            <ArrowDownUp className="w-4 h-4" />
                        </motion.div>
                    </motion.button>

                    <div className="w-full flex-1 border-l-2 border-dashed border-zinc-200 dark:border-zinc-700 ml-6 py-4 pl-6 space-y-3">
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                                <span>Fee ({feePercentage}%)</span>
                            </div>
                            <span className="font-medium text-zinc-700 dark:text-zinc-300">- {feeAmount.toFixed(2)} {fromCurrency.code}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                                <span>Amount we'll convert</span>
                            </div>
                            <span className="font-medium text-zinc-700 dark:text-zinc-300">{amountAfterFee.toFixed(2)} {fromCurrency.code}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                <span className="flex items-center gap-1 font-medium">Guaranteed rate <Info className="w-3.5 h-3.5" /></span>
                            </div>
                            <span className="font-medium text-zinc-900 dark:text-zinc-100">{exchangeRate.toFixed(4)}</span>
                        </div>
                    </div>
                </div>

                {/* Receiver Gets */}
                <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-4 border border-zinc-200 dark:border-zinc-800">
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">Recipient gets</p>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100 truncate w-1/2">
                            {convertedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                        <button className="flex items-center gap-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full px-3 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors shadow-sm">
                            <span className="text-lg">{toCurrency.flag}</span>
                            <span className="font-semibold text-zinc-900 dark:text-zinc-100">{toCurrency.code}</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-center justify-between bg-emerald-50 dark:bg-emerald-500/10 rounded-xl p-3 border border-emerald-100 dark:border-emerald-500/20">
                    <div className="flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-400 font-medium">
                        <Clock className="w-4 h-4" />
                        <span>Arrives {estimatedDelivery}</span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onConvert?.(fromCurrency.code, toCurrency.code, parsedAmount)}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold shadow-lg shadow-blue-500/30 transition-all"
                >
                    Continue
                </motion.button>
            </div>
        </div>
    );
};

CurrencyConverterWidget.displayName = 'CurrencyConverterWidget';

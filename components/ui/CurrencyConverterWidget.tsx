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
        <div className={cn('w-full max-w-md bg-surface-primary rounded-3xl p-6 shadow-xl border border-border-primary', className)}>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-text-primary">Send Money</h3>
                <button className="text-sm text-accent-blue font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded">Rates</button>
            </div>

            <div className="space-y-4">
                {/* Send Input */}
                <div className="bg-background-secondary rounded-2xl p-4 border border-border-primary focus-within:border-accent-blue transition-colors">
                    <p className="text-xs font-medium text-text-tertiary mb-2">You send</p>
                    <div className="flex items-center justify-between">
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="bg-transparent text-3xl font-semibold text-text-primary outline-none w-1/2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            placeholder="0.00"
                        />
                        <button className="flex items-center gap-2 bg-surface-primary border border-border-primary rounded-full px-3 py-1.5 hover:bg-background-secondary transition-colors shadow-sm">
                            <span className="text-lg">{fromCurrency.flag}</span>
                            <span className="font-semibold text-text-primary">{fromCurrency.code}</span>
                        </button>
                    </div>
                </div>

                {/* Exchange Details */}
                <div className="flex flex-col items-center gap-1">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleSwap}
                        className="self-center z-10 bg-surface-primary border border-border-primary rounded-full p-2 shadow-sm text-text-secondary hover:text-accent-blue transition-colors"
                    >
                        <motion.div animate={{ rotate: isSwapping ? 180 : 0 }} transition={{ duration: 0.3 }}>
                            <ArrowDownUp className="w-4 h-4" />
                        </motion.div>
                    </motion.button>

                    <div className="w-full py-2 space-y-3">
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-text-tertiary">
                                <span className="w-1.5 h-1.5 rounded-full bg-border-primary" />
                                <span>Fee ({feePercentage}%)</span>
                            </div>
                            <span className="font-medium text-text-secondary">- {feeAmount.toFixed(2)} {fromCurrency.code}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-text-tertiary">
                                <span className="w-1.5 h-1.5 rounded-full bg-border-primary" />
                                <span>Amount we'll convert</span>
                            </div>
                            <span className="font-medium text-text-secondary">{amountAfterFee.toFixed(2)} {fromCurrency.code}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-status-success">
                                <span className="w-1.5 h-1.5 rounded-full bg-status-success" />
                                <span className="flex items-center gap-1 font-medium">Guaranteed rate <Info className="w-3.5 h-3.5" /></span>
                            </div>
                            <span className="font-medium text-text-primary">{exchangeRate.toFixed(4)}</span>
                        </div>
                    </div>
                </div>

                {/* Receiver Gets */}
                <div className="bg-background-secondary rounded-2xl p-4 border border-border-primary">
                    <p className="text-xs font-medium text-text-tertiary mb-2">Recipient gets</p>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-semibold text-text-primary truncate w-1/2">
                            {convertedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                        <button className="flex items-center gap-2 bg-surface-primary border border-border-primary rounded-full px-3 py-1.5 hover:bg-background-secondary transition-colors shadow-sm">
                            <span className="text-lg">{toCurrency.flag}</span>
                            <span className="font-semibold text-text-primary">{toCurrency.code}</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-center justify-between bg-status-success/10 rounded-xl p-3 border border-status-success/20">
                    <div className="flex items-center gap-2 text-sm text-status-success font-medium">
                        <Clock className="w-4 h-4" />
                        <span>Arrives {estimatedDelivery}</span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-status-success" />
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onConvert?.(fromCurrency.code, toCurrency.code, parsedAmount)}
                    className="w-full py-4 bg-accent-blue hover:bg-accent-blue-hover text-white rounded-2xl font-semibold shadow-lg shadow-accent-blue/30 transition-all"
                >
                    Continue
                </motion.button>
            </div>
        </div>
    );
};

CurrencyConverterWidget.displayName = 'CurrencyConverterWidget';

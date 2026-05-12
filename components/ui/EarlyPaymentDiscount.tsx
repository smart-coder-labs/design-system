"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, TrendingDown, ArrowRight, Zap, Target } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Slider } from './Slider';

export interface EarlyPaymentDiscountProps {
    totalInterestRemaining: number;
    remainingMonths: number;
    monthlyPayment: number;
    currency?: string;
    className?: string;
    onPayEarly?: (amountToPay: number, interestSaved: number) => void;
}

export const EarlyPaymentDiscount: React.FC<EarlyPaymentDiscountProps> = ({
    totalInterestRemaining = 120.50,
    remainingMonths = 6,
    monthlyPayment = 200,
    currency = 'USD',
    className,
    onPayEarly,
}) => {
    // How many EXTRA months the user wants to pay now
    const [extraMonths, setExtraMonths] = useState(1);

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(val);

    // Simplistic interest savings calculation: Assume linear interest for demo purposes
    const interestSavedPerMonth = totalInterestRemaining / remainingMonths;
    const totalInterestSaved = extraMonths * interestSavedPerMonth;

    const extraPaymentAmount = extraMonths * monthlyPayment;

    return (
        <div className={cn("w-full max-w-sm bg-gradient-to-br from-emerald-500 to-teal-700 rounded-[2rem] p-6 text-white shadow-xl relative overflow-hidden", className)}>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-900/40 rounded-full blur-2xl -ml-12 -mb-12 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm shadow-inner">
                        <TrendingDown className="w-5 h-5 text-emerald-100" />
                    </div>
                    <span className="font-semibold tracking-wide text-emerald-50">Early Payoff Magic</span>
                </div>
                <Sparkles className="w-5 h-5 text-emerald-200" />
            </div>

            <div className="relative z-10 mb-8">
                <p className="text-sm text-emerald-100 font-medium mb-1 drop-shadow-sm">You can save up to</p>
                <div className="flex items-baseline gap-2">
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={totalInterestSaved}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 10, opacity: 0 }}
                            className="text-5xl font-extrabold tracking-tighter drop-shadow-md"
                        >
                            {formatCurrency(totalInterestSaved)}
                        </motion.span>
                    </AnimatePresence>
                    <span className="text-sm font-semibold text-emerald-200 uppercase tracking-widest">in interest</span>
                </div>
            </div>

            <div className="relative z-10 bg-black/20 backdrop-blur-md rounded-3xl p-5 border border-white/10 shadow-inner mb-6 space-y-5">
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-emerald-100 uppercase tracking-wider flex items-center gap-1">
                            <Target className="w-3.5 h-3.5" /> Pay Ahead
                        </span>
                        <span className="text-sm font-bold text-white bg-white/20 px-2 py-0.5 rounded-md shadow-sm">
                            {extraMonths} {extraMonths === 1 ? 'Month' : 'Months'}
                        </span>
                    </div>

                    <div className="relative py-2">
                        <input
                            type="range"
                            min={1}
                            max={remainingMonths}
                            step={1}
                            value={extraMonths}
                            onChange={(e) => setExtraMonths(Number(e.target.value))}
                            className="w-full accent-white bg-white/30 h-1.5 rounded-full cursor-pointer appearance-none outline-none overflow-hidden"
                            style={{
                                backgroundImage: `linear-gradient(white, white)`,
                                backgroundSize: `${((extraMonths - 1) / (remainingMonths - 1)) * 100}% 100%`,
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-bold text-emerald-200 uppercase mt-1">
                        <span>Min (1m)</span>
                        <span>Max ({remainingMonths}m)</span>
                    </div>
                </div>

                <div className="h-px w-full bg-white/10" />

                <div className="flex items-center justify-between text-sm">
                    <span className="text-emerald-100 font-medium">Extra Payment Today</span>
                    <span className="font-bold text-white tracking-wide">{formatCurrency(extraPaymentAmount)}</span>
                </div>
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onPayEarly?.(extraPaymentAmount, totalInterestSaved)}
                className="relative z-10 w-full bg-white text-emerald-800 hover:text-emerald-900 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-emerald-900/20 transition-all cursor-pointer group"
            >
                <Zap className="w-5 h-5 text-emerald-500 group-hover:text-emerald-600 transition-apple" />
                Capture Savings
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </motion.button>
        </div>
    );
};

EarlyPaymentDiscount.displayName = 'EarlyPaymentDiscount';

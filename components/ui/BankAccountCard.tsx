"use client";
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Eye, EyeOff, Copy, Check, ChevronRight, Landmark } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export type AccountType = 'checking' | 'savings' | 'credit' | 'investment';

export interface BankAccountCardProps {
    accountName?: string;
    accountType?: AccountType;
    accountNumber?: string;
    clabeOrIban?: string;
    balance: number;
    currency?: string;
    locale?: string;
    hiddenByDefault?: boolean;
    onCopy?: (value: string) => void;
    onClick?: () => void;
    className?: string;
}

/* ========================================
   CONSTANTS
   ======================================== */

const accountTypeConfig: Record<AccountType, { label: string; gradient: string }> = {
    checking: { label: 'Checking Account', gradient: 'from-blue-600 to-blue-800' },
    savings: { label: 'Savings Account', gradient: 'from-emerald-600 to-emerald-800' },
    credit: { label: 'Credit Card', gradient: 'from-violet-600 to-violet-800' },
    investment: { label: 'Investment', gradient: 'from-amber-600 to-amber-800' },
};

/* ========================================
   COMPONENT
   ======================================== */

export const BankAccountCard: React.FC<BankAccountCardProps> = ({
    accountName = 'Personal Account',
    accountType = 'checking',
    accountNumber = '•••• •••• •••• 1234',
    clabeOrIban = '012180001234567891',
    balance = 0,
    currency = 'USD',
    locale = 'en-US',
    hiddenByDefault = false,
    onCopy,
    onClick,
    className = '',
}) => {
    const [isHidden, setIsHidden] = useState(hiddenByDefault);
    const [copied, setCopied] = useState(false);

    const config = accountTypeConfig[accountType];

    const formattedBalance = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
    }).format(balance);

    const maskedBalance = '••••••';

    const handleCopy = useCallback(async (e: React.MouseEvent) => {
        e.stopPropagation();
        try {
            await navigator.clipboard.writeText(clabeOrIban);
            setCopied(true);
            onCopy?.(clabeOrIban);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback
            onCopy?.(clabeOrIban);
        }
    }, [clabeOrIban, onCopy]);

    const toggleVisibility = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setIsHidden((p) => !p);
    }, []);

    return (
        <motion.div
            className={cn(
                'relative overflow-hidden rounded-2xl p-6 cursor-pointer select-none',
                'bg-gradient-to-br text-white',
                config.gradient,
                'shadow-lg hover:shadow-xl transition-shadow duration-300',
                className,
            )}
            onClick={onClick}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.8 }}
            role="button"
            tabIndex={0}
            aria-label={`${config.label}: ${accountName}`}
        >
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/[0.07]" />
            <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-white/[0.05]" />

            {/* Top row */}
            <div className="relative flex items-start justify-between mb-6">
                <div>
                    <p className="text-xs font-medium text-white/60 uppercase tracking-wider">{config.label}</p>
                    <p className="text-sm font-bold text-white/90 mt-0.5">{accountName}</p>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm">
                    <Landmark className="w-5 h-5 text-white/80" />
                </div>
            </div>

            {/* Balance */}
            <div className="relative mb-5">
                <p className="text-xs font-medium text-white/50 mb-1">Available Balance</p>
                <div className="flex items-center gap-3">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={isHidden ? 'hidden' : 'visible'}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            className="text-3xl font-bold tracking-tight"
                        >
                            {isHidden ? maskedBalance : formattedBalance}
                        </motion.span>
                    </AnimatePresence>
                    <button
                        onClick={toggleVisibility}
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-apple"
                        aria-label={isHidden ? 'Show balance' : 'Hide balance'}
                    >
                        {isHidden ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                </div>
            </div>

            {/* Bottom row */}
            <div className="relative flex items-end justify-between">
                <div>
                    <p className="text-[10px] font-medium text-white/40 uppercase tracking-wider mb-0.5">Account Number</p>
                    <p className="text-sm font-mono text-white/70">{accountNumber}</p>
                </div>
                <div className="flex items-center gap-2">
                    {/* CLABE/IBAN copy */}
                    <motion.button
                        onClick={handleCopy}
                        className={cn(
                            'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-apple',
                            copied ? 'bg-white/20 text-white' : 'bg-white/10 text-white/70 hover:bg-white/15',
                        )}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Copy CLABE/IBAN"
                    >
                        <AnimatePresence mode="wait">
                            {copied ? (
                                <motion.span key="c" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-1">
                                    <Check className="w-3 h-3" /> Copied
                                </motion.span>
                            ) : (
                                <motion.span key="d" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-1">
                                    <Copy className="w-3 h-3" /> CLABE
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                    <ChevronRight className="w-4 h-4 text-white/30" />
                </div>
            </div>
        </motion.div>
    );
};

BankAccountCard.displayName = 'BankAccountCard';
export default BankAccountCard;

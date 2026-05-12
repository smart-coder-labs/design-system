"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import {
    Eye, EyeOff, ShoppingBag, Utensils, Heart, ArrowUpRight,
    ArrowDownLeft, MoreHorizontal, Clock, CheckCircle2, XCircle,
    Home, Zap, CreditCard, Briefcase, Gift, Car
} from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export type TransactionType = 'income' | 'expense';
export type TransactionStatus = 'completed' | 'pending' | 'failed';
export type TransactionCategory =
    | 'food' | 'health' | 'shopping' | 'transfer'
    | 'housing' | 'utilities' | 'card' | 'work'
    | 'gift' | 'transport' | 'other';

export interface Transaction {
    id: string;
    title: string;
    description?: string;
    amount: number;
    type: TransactionType;
    status?: TransactionStatus;
    category?: TransactionCategory;
    date: string;
    icon?: React.ReactNode;
}

export interface TransactionRowProps {
    transaction: Transaction;
    currency?: string;
    locale?: string;
    masked?: boolean;
    onClick?: (transaction: Transaction) => void;
    className?: string;
}

export interface TransactionListProps {
    transactions: Transaction[];
    currency?: string;
    locale?: string;
    title?: string;
    maskable?: boolean;
    onTransactionClick?: (transaction: Transaction) => void;
    emptyMessage?: string;
    className?: string;
}

/* ========================================
   CONSTANTS
   ======================================== */

const categoryIcons: Record<TransactionCategory, React.ReactNode> = {
    food: <Utensils className="w-4 h-4" />,
    health: <Heart className="w-4 h-4" />,
    shopping: <ShoppingBag className="w-4 h-4" />,
    transfer: <ArrowUpRight className="w-4 h-4" />,
    housing: <Home className="w-4 h-4" />,
    utilities: <Zap className="w-4 h-4" />,
    card: <CreditCard className="w-4 h-4" />,
    work: <Briefcase className="w-4 h-4" />,
    gift: <Gift className="w-4 h-4" />,
    transport: <Car className="w-4 h-4" />,
    other: <MoreHorizontal className="w-4 h-4" />,
};

const categoryColors: Record<TransactionCategory, string> = {
    food: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
    health: 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
    shopping: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    transfer: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    housing: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
    utilities: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400',
    card: 'bg-slate-100 text-slate-600 dark:bg-slate-800/50 dark:text-slate-400',
    work: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
    gift: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
    transport: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400',
    other: 'bg-gray-100 text-gray-600 dark:bg-gray-800/50 dark:text-gray-400',
};

const statusConfig: Record<TransactionStatus, { icon: React.ReactNode; label: string; color: string }> = {
    completed: { icon: <CheckCircle2 className="w-3 h-3" />, label: 'Completed', color: 'text-status-success' },
    pending: { icon: <Clock className="w-3 h-3" />, label: 'Pending', color: 'text-status-warning' },
    failed: { icon: <XCircle className="w-3 h-3" />, label: 'Failed', color: 'text-status-error' },
};

/* ========================================
   TRANSACTION ROW
   ======================================== */

export const TransactionRow: React.FC<TransactionRowProps> = ({
    transaction,
    currency = 'USD',
    locale = 'en-US',
    masked = false,
    onClick,
    className = '',
}) => {
    const { title, description, amount, type, status = 'completed', category = 'other', date } = transaction;
    const isIncome = type === 'income';
    const formattedAmount = new Intl.NumberFormat(locale, {
        style: 'currency', currency, minimumFractionDigits: 2,
    }).format(Math.abs(amount));

    const statusInfo = statusConfig[status];

    return (
        <motion.div
            className={cn(
                'flex items-center gap-3.5 py-3.5 px-4 rounded-xl cursor-pointer',
                'hover:bg-surface-secondary/60 transition-apple duration-150',
                'group',
                className,
            )}
            onClick={() => onClick?.(transaction)}
            whileTap={{ scale: 0.99 }}
            role="button"
            tabIndex={0}
            aria-label={`${title}: ${isIncome ? '+' : '-'}${formattedAmount}`}
        >
            {/* Category icon */}
            <div className={cn(
                'flex items-center justify-center w-10 h-10 rounded-xl shrink-0',
                categoryColors[category],
            )}>
                {transaction.icon || categoryIcons[category]}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-text-primary truncate">{title}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                    {description && (
                        <span className="text-xs text-text-tertiary truncate">{description}</span>
                    )}
                    {status !== 'completed' && (
                        <span className={cn('inline-flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-wider leading-none', statusInfo.color)}>
                            {statusInfo.icon} {statusInfo.label}
                        </span>
                    )}
                </div>
            </div>

            {/* Amount & Date */}
            <div className="text-right shrink-0">
                <p className={cn(
                    'text-sm font-bold tabular-nums',
                    masked ? 'text-text-tertiary' : isIncome ? 'text-status-success' : 'text-text-primary',
                )}>
                    {masked ? '••••' : `${isIncome ? '+' : '-'}${formattedAmount}`}
                </p>
                <p className="text-[10px] text-text-quaternary mt-0.5">{date}</p>
            </div>
        </motion.div>
    );
};

TransactionRow.displayName = 'TransactionRow';

/* ========================================
   TRANSACTION LIST
   ======================================== */

export const TransactionList: React.FC<TransactionListProps> = ({
    transactions,
    currency = 'USD',
    locale = 'en-US',
    title = 'Recent Transactions',
    maskable = true,
    onTransactionClick,
    emptyMessage = 'No transactions yet',
    className = '',
}) => {
    const [masked, setMasked] = useState(false);

    return (
        <motion.div
            className={cn(
                'bg-surface-primary rounded-2xl border border-border-primary shadow-sm overflow-hidden',
                className,
            )}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border-secondary">
                <h3 className="text-sm font-bold text-text-primary">{title}</h3>
                {maskable && (
                    <button
                        onClick={() => setMasked((p) => !p)}
                        className="w-7 h-7 rounded-full bg-surface-secondary flex items-center justify-center text-text-tertiary hover:text-text-primary transition-apple"
                        aria-label={masked ? 'Show amounts' : 'Hide amounts'}
                    >
                        {masked ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                )}
            </div>

            {/* List */}
            <div className="divide-y divide-border-secondary/50">
                {transactions.length === 0 ? (
                    <div className="flex items-center justify-center py-12 text-sm text-text-tertiary">
                        {emptyMessage}
                    </div>
                ) : (
                    transactions.map((tx, i) => (
                        <motion.div
                            key={tx.id}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04, duration: 0.2 }}
                        >
                            <TransactionRow
                                transaction={tx}
                                currency={currency}
                                locale={locale}
                                masked={masked}
                                onClick={onTransactionClick}
                            />
                        </motion.div>
                    ))
                )}
            </div>
        </motion.div>
    );
};

TransactionList.displayName = 'TransactionList';
export default TransactionList;

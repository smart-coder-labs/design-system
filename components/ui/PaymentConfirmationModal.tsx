"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { X, ShieldCheck, Clock, ArrowRight, AlertTriangle } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export interface PaymentConfirmationData {
    recipientName: string;
    recipientBank?: string;
    recipientAccount?: string;
    amount: number;
    currency: string;
    concept?: string;
    fee?: number;
    estimatedArrival?: string;
}

export interface PaymentConfirmationModalProps {
    open?: boolean;
    data: PaymentConfirmationData;
    locale?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    loading?: boolean;
    className?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

export const PaymentConfirmationModal: React.FC<PaymentConfirmationModalProps> = ({
    open = true,
    data,
    locale = 'en-US',
    onConfirm,
    onCancel,
    loading = false,
    className = '',
}) => {
    const formatCurrency = (v: number) =>
        new Intl.NumberFormat(locale, {
            style: 'currency', currency: data.currency, minimumFractionDigits: 2,
        }).format(v);

    const total = data.amount + (data.fee || 0);

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black/40 backdrop-blur-md z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onCancel}
                    />

                    {/* Modal */}
                    <motion.div
                        className={cn(
                            'fixed top-1/2 left-1/2 z-50 w-[380px] max-w-[calc(100vw-2rem)]',
                            'bg-surface-primary border border-border-primary rounded-3xl shadow-xl overflow-hidden',
                            className,
                        )}
                        initial={{ opacity: 0, scale: 0.92, x: '-50%', y: '-50%' }}
                        animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                        exit={{ opacity: 0, scale: 0.92, x: '-50%', y: '-50%' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        role="dialog"
                        aria-label="Payment Confirmation"
                    >
                        {/* Header */}
                        <div className="relative flex items-center justify-center py-5 border-b border-border-secondary">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-accent-blue" />
                                <h2 className="text-base font-bold text-text-primary">Confirm Payment</h2>
                            </div>
                            <button
                                onClick={onCancel}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-surface-secondary flex items-center justify-center text-text-tertiary hover:text-text-primary transition-apple"
                                aria-label="Close"
                            >
                                <X className="w-3.5 h-3.5" />
                            </button>
                        </div>

                        {/* Amount */}
                        <div className="text-center py-6 px-6">
                            <p className="text-xs text-text-tertiary mb-1">You are sending</p>
                            <p className="text-3xl font-bold text-text-primary tabular-nums">
                                {formatCurrency(data.amount)}
                            </p>
                            <p className="text-xs text-text-secondary mt-1">
                                to <span className="font-semibold text-text-primary">{data.recipientName}</span>
                            </p>
                        </div>

                        {/* Details */}
                        <div className="mx-6 rounded-xl bg-surface-secondary/50 border border-border-secondary divide-y divide-border-secondary">
                            <div className="flex items-center justify-between px-4 py-3">
                                <span className="text-xs text-text-tertiary">Recipient</span>
                                <span className="text-xs font-semibold text-text-primary">{data.recipientName}</span>
                            </div>
                            {data.recipientBank && (
                                <div className="flex items-center justify-between px-4 py-3">
                                    <span className="text-xs text-text-tertiary">Bank</span>
                                    <span className="text-xs font-medium text-text-secondary">{data.recipientBank}</span>
                                </div>
                            )}
                            {data.recipientAccount && (
                                <div className="flex items-center justify-between px-4 py-3">
                                    <span className="text-xs text-text-tertiary">Account</span>
                                    <span className="text-xs font-mono font-medium text-text-secondary">{data.recipientAccount}</span>
                                </div>
                            )}
                            {data.concept && (
                                <div className="flex items-center justify-between px-4 py-3">
                                    <span className="text-xs text-text-tertiary">Concept</span>
                                    <span className="text-xs font-medium text-text-secondary">{data.concept}</span>
                                </div>
                            )}
                            <div className="flex items-center justify-between px-4 py-3">
                                <span className="text-xs text-text-tertiary">Amount</span>
                                <span className="text-xs font-semibold text-text-primary tabular-nums">{formatCurrency(data.amount)}</span>
                            </div>
                            {data.fee !== undefined && data.fee > 0 && (
                                <div className="flex items-center justify-between px-4 py-3">
                                    <span className="text-xs text-text-tertiary">Fee</span>
                                    <span className="text-xs font-medium text-text-secondary tabular-nums">{formatCurrency(data.fee)}</span>
                                </div>
                            )}
                            <div className="flex items-center justify-between px-4 py-3 bg-surface-secondary/40">
                                <span className="text-xs font-bold text-text-primary">Total</span>
                                <span className="text-sm font-bold text-text-primary tabular-nums">{formatCurrency(total)}</span>
                            </div>
                        </div>

                        {/* ETA */}
                        {data.estimatedArrival && (
                            <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-text-tertiary">
                                <Clock className="w-3 h-3" />
                                <span>Estimated arrival: <span className="font-semibold text-text-secondary">{data.estimatedArrival}</span></span>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex flex-col gap-2 p-6">
                            <motion.button
                                onClick={onConfirm}
                                disabled={loading}
                                className={cn(
                                    'w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-apple',
                                    'bg-accent-blue text-white hover:bg-accent-blue-hover active:bg-accent-blue-active',
                                    'disabled:opacity-60 disabled:cursor-not-allowed',
                                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2',
                                )}
                                whileTap={!loading ? { scale: 0.98 } : {}}
                            >
                                {loading ? (
                                    <motion.div
                                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                                    />
                                ) : (
                                    <>Confirm & Send <ArrowRight className="w-4 h-4" /></>
                                )}
                            </motion.button>
                            <button
                                onClick={onCancel}
                                className="w-full py-2.5 text-sm font-semibold text-text-secondary hover:text-text-primary transition-apple"
                            >
                                Cancel
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

PaymentConfirmationModal.displayName = 'PaymentConfirmationModal';
export default PaymentConfirmationModal;

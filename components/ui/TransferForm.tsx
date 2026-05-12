"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { ArrowRight, AlertCircle, ChevronDown, User, Wallet } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export interface TransferRecipient {
    id: string;
    name: string;
    accountNumber?: string;
    bank?: string;
    avatarUrl?: string;
}

export interface CurrencyOption {
    code: string;
    symbol: string;
    name: string;
    flag?: string;
}

export interface TransferFormProps {
    recipients?: TransferRecipient[];
    currencies?: CurrencyOption[];
    availableBalance?: number;
    defaultCurrency?: string;
    onSubmit?: (data: { recipientId: string; amount: number; currency: string; concept: string }) => void;
    className?: string;
}

/* ========================================
   DEFAULT DATA
   ======================================== */

const defaultCurrencies: CurrencyOption[] = [
    { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
    { code: 'MXN', symbol: '$', name: 'Mexican Peso', flag: '🇲🇽' },
    { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
];

/* ========================================
   COMPONENT
   ======================================== */

export const TransferForm: React.FC<TransferFormProps> = ({
    recipients = [],
    currencies = defaultCurrencies,
    availableBalance = 0,
    defaultCurrency = 'USD',
    onSubmit,
    className = '',
}) => {
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState(defaultCurrency);
    const [recipientId, setRecipientId] = useState('');
    const [concept, setConcept] = useState('');
    const [showCurrencies, setShowCurrencies] = useState(false);
    const [showRecipients, setShowRecipients] = useState(false);

    const numericAmount = parseFloat(amount) || 0;
    const isInsufficient = numericAmount > availableBalance;
    const isValid = numericAmount > 0 && recipientId && !isInsufficient;

    const selectedCurrency = currencies.find((c) => c.code === currency) || currencies[0];
    const selectedRecipient = recipients.find((r) => r.id === recipientId);

    const formatBalance = (v: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency, minimumFractionDigits: 2 }).format(v);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValid) return;
        onSubmit?.({ recipientId, amount: numericAmount, currency, concept });
    };

    return (
        <motion.form
            className={cn(
                'bg-surface-primary rounded-2xl border border-border-primary shadow-sm p-6',
                className,
            )}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
            <h3 className="text-base font-bold text-text-primary mb-5">Send Money</h3>

            {/* Amount input with currency selector */}
            <div className="mb-5">
                <label className="text-xs font-medium text-text-secondary mb-1.5 block">Amount</label>
                <div className={cn(
                    'flex items-center border-2 rounded-xl overflow-hidden transition-colors duration-200 transition-apple',
                    isInsufficient ? 'border-status-error' : 'border-border-primary focus-within:border-accent-blue',
                )}>
                    {/* Currency selector */}
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setShowCurrencies((p) => !p)}
                            className="flex items-center gap-1.5 px-4 py-3.5 bg-surface-secondary/50 text-sm font-semibold text-text-primary hover:bg-surface-secondary transition-apple border-r border-border-primary"
                        >
                            <span>{selectedCurrency.flag}</span>
                            <span>{selectedCurrency.code}</span>
                            <ChevronDown className="w-3 h-3 text-text-tertiary" />
                        </button>
                        <AnimatePresence>
                            {showCurrencies && (
                                <motion.div
                                    className="absolute top-full left-0 mt-1 bg-surface-primary border border-border-primary rounded-xl shadow-lg z-10 overflow-hidden min-w-[180px]"
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -4 }}
                                >
                                    {currencies.map((c) => (
                                        <button
                                            key={c.code}
                                            type="button"
                                            onClick={() => { setCurrency(c.code); setShowCurrencies(false); }}
                                            className={cn(
                                                'w-full flex items-center gap-2 px-4 py-2.5 text-sm text-left hover:bg-surface-secondary transition-apple',
                                                c.code === currency && 'bg-accent-blue/5 text-accent-blue',
                                            )}
                                        >
                                            <span>{c.flag}</span>
                                            <span className="font-semibold">{c.code}</span>
                                            <span className="text-text-tertiary text-xs">{c.name}</span>
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Amount field */}
                    <input
                        type="number"
                        inputMode="decimal"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="flex-1 px-4 py-3.5 text-lg font-bold text-text-primary bg-transparent outline-none tabular-nums [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        aria-label="Transfer amount"
                    />
                </div>

                {/* Balance info */}
                <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-text-tertiary flex items-center gap-1">
                        <Wallet className="w-3 h-3" /> Available: {formatBalance(availableBalance)}
                    </span>
                    <AnimatePresence>
                        {isInsufficient && (
                            <motion.span
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-1 text-xs font-semibold text-status-error"
                            >
                                <AlertCircle className="w-3 h-3" /> Insufficient funds
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Recipient selector */}
            <div className="mb-5">
                <label className="text-xs font-medium text-text-secondary mb-1.5 block">Recipient</label>
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setShowRecipients((v) => !v)}
                        className={cn(
                            'w-full flex items-center gap-2.5 pl-10 pr-4 py-3 text-sm font-medium rounded-xl border-2 bg-surface-primary transition-apple text-left',
                            showRecipients ? 'border-accent-blue' : 'border-border-primary',
                            recipientId ? 'text-text-primary' : 'text-text-tertiary',
                        )}
                    >
                        <User className="absolute left-3.5 w-4 h-4 text-text-tertiary shrink-0" />
                        <span className="flex-1 truncate">
                            {selectedRecipient ? `${selectedRecipient.name}${selectedRecipient.bank ? ` (${selectedRecipient.bank})` : ''}` : 'Select a recipient'}
                        </span>
                        <ChevronDown className={cn('w-4 h-4 text-text-tertiary shrink-0 transition-transform duration-200', showRecipients && 'rotate-180')} />
                    </button>

                    <AnimatePresence>
                        {showRecipients && (
                            <motion.div
                                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                                transition={{ duration: 0.15 }}
                                className="absolute z-20 w-full mt-1.5 bg-surface-primary border border-border-primary rounded-xl shadow-lg overflow-hidden"
                            >
                                {recipients.map((r) => (
                                    <button
                                        key={r.id}
                                        type="button"
                                        onClick={() => { setRecipientId(r.id); setShowRecipients(false); }}
                                        className={cn(
                                            'w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors',
                                            r.id === recipientId
                                                ? 'bg-accent-blue/10 text-accent-blue font-medium'
                                                : 'text-text-primary hover:bg-surface-secondary',
                                        )}
                                    >
                                        <div className="w-7 h-7 rounded-full bg-surface-secondary flex items-center justify-center shrink-0 text-xs font-bold text-text-secondary">
                                            {r.name[0]}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="font-medium truncate">{r.name}</p>
                                            {r.bank && <p className="text-xs text-text-tertiary">{r.bank}</p>}
                                        </div>
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Concept */}
            <div className="mb-6">
                <label className="text-xs font-medium text-text-secondary mb-1.5 block">Concept (optional)</label>
                <input
                    type="text"
                    placeholder="e.g., Rent payment"
                    value={concept}
                    onChange={(e) => setConcept(e.target.value)}
                    maxLength={100}
                    className="w-full px-4 py-3 text-sm rounded-xl border-2 border-border-primary bg-surface-primary text-text-primary focus:border-accent-blue outline-none transition-apple focus-visible:ring-2 focus-visible:ring-accent-blue"
                />
            </div>

            {/* Submit */}
            <motion.button
                type="submit"
                disabled={!isValid}
                className={cn(
                    'w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold transition-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue',
                    isValid
                        ? 'bg-accent-blue text-white hover:bg-accent-blue-hover active:bg-accent-blue-active'
                        : 'bg-surface-secondary text-text-tertiary cursor-not-allowed',
                )}
                whileTap={isValid ? { scale: 0.98 } : {}}
            >
                Continue <ArrowRight className="w-4 h-4" />
            </motion.button>
        </motion.form>
    );
};

TransferForm.displayName = 'TransferForm';
export default TransferForm;

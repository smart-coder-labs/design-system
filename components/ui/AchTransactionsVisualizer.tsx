import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import {
    ArrowDownRight, ArrowUpRight, Building2, Calendar, CheckCircle2,
    ChevronDown, CreditCard, DollarSign,
    FileText, Hash, ShieldAlert, XCircle, Activity, Receipt, ListFilter,
    ShieldCheck, Banknote, History,
    Clock
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';
import { Timeline, TimelineItem } from './Timeline';

/* ========================================
   TYPES MAPPED FROM GRAPHQL RESPONSE
   ======================================== */

export interface AchFee {
    id: string;
    totalFeeInDollars: number;
    description: string;
    feeId: string;
}

export interface AchHistoryItem {
    id: string;
    transactionId: string;
    status: string;
    action: string;
    payload: any;
    reason: string | null;
    changedBy: string | null;
    changedAt: string;
}

export interface AchTransaction {
    id: string;
    amount: number;
    currency: string;
    type: string; // 'CREDIT' | 'DEBIT' | etc.
    description: string;
    status: string;
    bankAccountId: string;
    accountType: string;
    effectiveDate: string;
    routingNumber: string;
    accountNumberLast4: string;
    requestedAt: string;
    traceNumber: string | null;
    errorMessage: string | null;
    employer: { _id: string; business_name: string } | null;
    carrier: { _id: string; carrier_name: string } | null;
    policy: { _id: string; policy_number: string } | null;
    bankAccount: { _id: string; name: string } | null;
    fees: AchFee[];
    history: AchHistoryItem[] | null;
}

export interface AchTransactionsVisualizerProps {
    transactions: AchTransaction[];
    title?: string;
    className?: string;
}

/* ========================================
   UTILITIES & CONFIGS
   ======================================== */

const statusConfig: Record<string, { icon: React.FC<any>; color: string; bg: string; label: string }> = {
    COMPLETED: { icon: CheckCircle2, color: 'text-status-success', bg: 'bg-status-success/15 border border-status-success/20', label: 'Completed' },
    PENDING: { icon: Clock, color: 'text-status-warning', bg: 'bg-status-warning/15 border border-status-warning/20', label: 'Pending' },
    UPLOADED: { icon: Activity, color: 'text-accent-blue', bg: 'bg-accent-blue/15 border border-accent-blue/20', label: 'Uploaded' },
    FAILED: { icon: XCircle, color: 'text-status-error', bg: 'bg-status-error/15 border border-status-error/20', label: 'Failed' },
};

const getStatusConfig = (status: string) => statusConfig[status] || { icon: Activity, color: 'text-text-tertiary', bg: 'bg-surface-secondary', label: status };

const formatCurrency = (amount: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency, minimumFractionDigits: 2 }).format(amount);
};

const formatDate = (dateStr: string) => {
    if (!dateStr) return 'N/A';
    return new Intl.DateTimeFormat('en-US', {
        month: 'short', day: 'numeric', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    }).format(new Date(dateStr));
};

/* ========================================
   SUB-COMPONENTS
   ======================================== */

const DetailItem = ({ icon: Icon, label, value }: { icon: any; label: string; value: React.ReactNode }) => (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-primary/50 border border-border-primary/40 hover:bg-surface-secondary/50 transition-colors">
        <div className="flex-shrink-0 mt-0.5 p-2 bg-surface-secondary rounded-lg text-text-tertiary">
            <Icon className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-1">{label}</p>
            <div className="text-sm font-semibold text-text-primary break-words">{value || '—'}</div>
        </div>
    </div>
);

/* ========================================
   MAIN ROW COMPONENT
   ======================================== */

const AchTransactionRow = ({ transaction }: { transaction: AchTransaction }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { type, amount, status, effectiveDate, description, employer, bankAccount, accountNumberLast4 } = transaction;

    const isCredit = type === 'CREDIT';
    const sConf = getStatusConfig(status);
    const StatusIcon = sConf.icon;

    return (
        <motion.div
            layout="position"
            className={cn(
                "group relative bg-surface-primary rounded-2xl border transition-all duration-300 overflow-hidden",
                isExpanded
                    ? "border-border-primary shadow-lg ring-4 ring-surface-secondary/50 my-4"
                    : "border-border-secondary hover:border-border-primary hover:shadow-md cursor-pointer mb-2"
            )}
        >
            {/* Clickable Header Area */}
            <div
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 z-10 relative"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {/* Type Icon Indicator */}
                <div className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105",
                    isCredit
                        ? "bg-gradient-to-br from-status-success/20 to-status-success/10 text-status-success"
                        : "bg-gradient-to-br from-accent-purple/20 to-accent-purple/10 text-accent-purple"
                )}>
                    {isCredit ? <ArrowDownRight className="w-6 h-6" /> : <ArrowUpRight className="w-6 h-6" />}
                </div>

                {/* Core Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-base font-bold text-text-primary truncate">
                            {employer?.business_name || 'System Transaction'}
                        </span>
                        <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase", sConf.bg, sConf.color)}>
                            <StatusIcon className="w-3 h-3" />
                            {sConf.label}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-tertiary">
                        <span className="truncate">{description}</span>
                        <span className="w-1 h-1 rounded-full bg-border-primary flex-shrink-0" />
                        <span className="font-medium">{bankAccount?.name} (•••{accountNumberLast4})</span>
                    </div>
                </div>

                {/* Amount and expand chevron */}
                <div className="flex items-center gap-6 sm:justify-end">
                    <div className="text-right">
                        <p className={cn(
                            "text-lg font-black font-mono tracking-tight",
                            isCredit ? "text-status-success" : "text-text-primary"
                        )}>
                            {isCredit ? '+' : '-'}{formatCurrency(amount, transaction.currency)}
                        </p>
                        <p className="text-xs text-text-tertiary font-medium">
                            {formatDate(effectiveDate)}
                        </p>
                    </div>
                    <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center bg-surface-secondary text-text-tertiary transition-transform duration-300",
                        isExpanded ? "rotate-180 bg-surface-tertiary text-text-primary" : "group-hover:bg-border-primary/50 group-hover:text-text-primary"
                    )}>
                        <ChevronDown className="w-5 h-5" />
                    </div>
                </div>
            </div>

            {/* Expandable Details Area */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="border-t border-border-secondary/60 bg-surface-primary"
                    >
                        <div className="p-5 md:p-6">
                            <Tabs defaultValue="details">
                                <TabsList variant="default" className="mb-6">
                                    <TabsTrigger value="details" className="gap-2 flex items-center justify-center">
                                        <FileText className="w-4 h-4" /> Details
                                    </TabsTrigger>
                                    <TabsTrigger value="fees" className="gap-2 flex items-center justify-center">
                                        <Banknote className="w-4 h-4" /> Fees
                                    </TabsTrigger>
                                    <TabsTrigger value="history" className="gap-2 flex items-center justify-center">
                                        <History className="w-4 h-4" /> History
                                    </TabsTrigger>
                                </TabsList>

                                <div className="mt-4 min-h-[200px]">
                                    {/* TAB: DETAILS */}
                                    <TabsContent value="details">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            <DetailItem icon={Hash} label="Transaction ID" value={<span className="font-mono text-xs">{transaction.id}</span>} />
                                            <DetailItem icon={Calendar} label="Requested At" value={formatDate(transaction.requestedAt)} />
                                            <DetailItem icon={Activity} label="Status" value={sConf.label} />
                                            <DetailItem icon={Building2} label="Carrier" value={transaction.carrier?.carrier_name} />
                                            <DetailItem icon={ShieldCheck} label="Policy" value={transaction.policy?.policy_number} />
                                            <DetailItem icon={CreditCard} label="Bank Account" value={`${transaction.bankAccount?.name} (${transaction.accountType})`} />
                                            <DetailItem icon={Hash} label="Routing Number" value={transaction.routingNumber} />
                                            <DetailItem icon={FileText} label="Trace Number" value={transaction.traceNumber} />
                                            {transaction.errorMessage && (
                                                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                                                    <DetailItem icon={ShieldAlert} label="Error Message" value={<span className="text-status-error">{transaction.errorMessage}</span>} />
                                                </div>
                                            )}
                                        </div>
                                    </TabsContent>

                                    {/* TAB: FEES */}
                                    <TabsContent value="fees">
                                        {(!transaction.fees || transaction.fees.length === 0) ? (
                                            <div className="flex flex-col items-center justify-center h-48 text-text-tertiary">
                                                <Receipt className="w-12 h-12 mb-4 opacity-20" />
                                                <p className="text-sm font-medium">No fees associated with this transaction.</p>
                                            </div>
                                        ) : (
                                            <div className="space-y-3 max-w-2xl mx-auto">
                                                {transaction.fees.map((fee, idx) => (
                                                    <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-border-primary bg-surface-secondary/30">
                                                        <div className="flex items-center gap-3">
                                                            <div className="p-2 bg-surface-primary rounded-lg shadow-sm border border-border-secondary">
                                                                <DollarSign className="w-5 h-5 text-accent-blue" />
                                                            </div>
                                                            <div>
                                                                <p className="font-bold text-text-primary">{fee.description || 'Service Fee'}</p>
                                                                <p className="text-xs text-text-tertiary font-mono tracking-tight mt-0.5">ID: {fee.feeId}</p>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="text-lg font-black text-text-primary tracking-tight">
                                                                {formatCurrency(fee.totalFeeInDollars)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </TabsContent>

                                    {/* TAB: HISTORY */}
                                    <TabsContent value="history">
                                        {(!transaction.history || transaction.history.length === 0) ? (
                                            <div className="flex flex-col items-center justify-center h-48 text-text-tertiary">
                                                <History className="w-12 h-12 mb-4 opacity-20" />
                                                <p className="text-sm font-medium">No history trail available.</p>
                                                <p className="text-xs mt-1">Status changes will appear here.</p>
                                            </div>
                                        ) : (
                                            <div className="flex justify-center">
                                                <Timeline layout="alternate">
                                                    {transaction.history.map((hist, idx) => {
                                                        const isFail = hist.status === 'FAILED';
                                                        const isPending = hist.status === 'PENDING' || hist.status === 'UPLOADED';
                                                        const isComplete = hist.status === 'COMPLETED';
                                                        
                                                        let sType: 'default' | 'success' | 'warning' | 'error' | 'info' = 'default';
                                                        if (isFail) sType = 'error';
                                                        else if (isComplete) sType = 'success';
                                                        else if (isPending) sType = 'info';

                                                        return (
                                                            <TimelineItem
                                                                key={idx}
                                                                status={sType}
                                                                date={formatDate(hist.changedAt)}
                                                                title={`Status: ${hist.status}`}
                                                                description={
                                                                    <div className="mt-1 space-y-2">
                                                                        {hist.action && <span className="inline-block px-2 py-0.5 bg-surface-secondary border border-border-secondary rounded text-xs font-medium text-text-primary mr-2 uppercase tracking-wide">{hist.action}</span>}
                                                                        {hist.reason && <p className="text-sm">Reason: {hist.reason}</p>}
                                                                        {hist.changedBy && <p className="text-xs text-text-quaternary mt-2">Changed by: {hist.changedBy}</p>}
                                                                    </div>
                                                                }
                                                            />
                                                        )
                                                    })}
                                                </Timeline>
                                            </div>
                                        )}
                                    </TabsContent>
                                </div>
                            </Tabs>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

/* ========================================
   EXPORT COMPONENT
   ======================================== */

export const AchTransactionsVisualizer: React.FC<AchTransactionsVisualizerProps> = ({ transactions, title = 'ACH Transactions', className }) => {
    return (
        <div className={cn("w-full max-w-6xl mx-auto flex flex-col gap-6", className)}>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-text-primary">{title}</h2>
                    <p className="text-sm text-text-tertiary mt-1">View and manage all your ACH transfers, payouts, and collections.</p>
                </div>
                <div className="hidden sm:flex items-center gap-3">
                    <div className="px-4 py-2 rounded-xl bg-surface-secondary text-sm font-semibold flex items-center gap-2 border border-border-secondary">
                        <ListFilter className="w-4 h-4 opacity-50" />
                        Total Records: <span className="text-accent-blue">{transactions.length}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                {transactions.length > 0 ? (
                    transactions.map((tx) => (
                        <AchTransactionRow key={tx.id} transaction={tx} />
                    ))
                ) : (
                    <div className="p-12 text-center rounded-3xl border border-dashed border-border-primary/50 bg-surface-secondary/20">
                        <Activity className="w-12 h-12 mx-auto text-text-quaternary mb-4" />
                        <h3 className="text-lg font-bold text-text-primary mb-1">No Transactions Found</h3>
                        <p className="text-sm text-text-tertiary">There are no ACH transactions matching this criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AchTransactionsVisualizer;

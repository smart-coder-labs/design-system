import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import {
    ArrowDownRight, ArrowUpRight, CheckCircle2,
    ChevronDown, DollarSign,
    FileText, Activity, Receipt, ListFilter,
    Banknote, History, Clock, XCircle
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';
import { Timeline, TimelineItem } from './Timeline';
import { Table, Column } from './Table';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from './Sheet';

/* ========================================
   TYPES
   ======================================== */

export interface VisualizerDetailItem {
    id: string;
    icon?: React.FC<any>;
    label: string;
    value: React.ReactNode;
    fullWidth?: boolean;
}

export interface VisualizerFeeItem {
    id: string;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    amount: number;
    currency?: string;
}

export interface VisualizerHistoryItem {
    id: string;
    statusType?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'loading';
    date: React.ReactNode;
    title: React.ReactNode;
    description?: React.ReactNode;
}

export interface VisualizerTransaction {
    id: string;
    amount: number;
    currency?: string;
    type: 'CREDIT' | 'DEBIT' | string;
    status: string;
    date: React.ReactNode;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    description?: React.ReactNode;
    
    details?: VisualizerDetailItem[];
    fees?: VisualizerFeeItem[];
    history?: VisualizerHistoryItem[];
}

export interface AchTransactionsVisualizerProps {
    transactions: VisualizerTransaction[];
    layout?: 'list' | 'table';
    tableColumns?: Column<VisualizerTransaction>[];
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    className?: string;
    emptyMessage?: string;
    emptyDescription?: string;
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

const getStatusConfig = (status: string) => statusConfig[status.toUpperCase()] || { icon: Activity, color: 'text-text-tertiary', bg: 'bg-surface-secondary', label: status };

const formatCurrency = (amount: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency, minimumFractionDigits: 2 }).format(amount);
};

/* ========================================
   SUB-COMPONENTS
   ======================================== */

const DetailItem = ({ item }: { item: VisualizerDetailItem }) => {
    const Icon = item.icon || FileText;
    return (
        <div className={cn(
            "flex items-start gap-3 p-3 rounded-xl bg-surface-primary/50 border border-border-primary/40 hover:bg-surface-secondary/50 transition-colors",
            item.fullWidth && "col-span-1 md:col-span-2 lg:col-span-3"
        )}>
            <div className="flex-shrink-0 mt-0.5 p-2 bg-surface-secondary rounded-lg text-text-tertiary">
                <Icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-1">{item.label}</p>
                <div className="text-sm font-semibold text-text-primary break-words">{item.value || '—'}</div>
            </div>
        </div>
    );
};

/* ========================================
   REUSABLE DETAILS TABS
   ======================================== */

const TransactionDetailsTabView = ({ transaction }: { transaction: VisualizerTransaction }) => {
    const { details, fees, history } = transaction;
    return (
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
                    {(!details || details.length === 0) ? (
                            <div className="flex flex-col items-center justify-center h-48 text-text-tertiary">
                            <FileText className="w-12 h-12 mb-4 opacity-20" />
                            <p className="text-sm font-medium">No additional details available.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {details.map(item => (
                                <DetailItem key={item.id} item={item} />
                            ))}
                        </div>
                    )}
                </TabsContent>

                {/* TAB: FEES */}
                <TabsContent value="fees">
                    {(!fees || fees.length === 0) ? (
                        <div className="flex flex-col items-center justify-center h-48 text-text-tertiary">
                            <Receipt className="w-12 h-12 mb-4 opacity-20" />
                            <p className="text-sm font-medium">No fees associated with this transaction.</p>
                        </div>
                    ) : (
                        <div className="space-y-3 max-w-2xl mx-auto">
                            {fees.map((fee) => (
                                <div key={fee.id} className="flex items-center justify-between p-4 rounded-xl border border-border-primary bg-surface-secondary/30">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-surface-primary rounded-lg shadow-sm border border-border-secondary">
                                            <DollarSign className="w-5 h-5 text-accent-blue" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-text-primary">{fee.title || 'Service Fee'}</div>
                                            {fee.subtitle && <div className="text-xs text-text-tertiary mt-0.5 font-mono">{fee.subtitle}</div>}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-black text-text-primary tracking-tight">
                                            {formatCurrency(fee.amount, fee.currency || transaction.currency)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </TabsContent>

                {/* TAB: HISTORY */}
                <TabsContent value="history">
                    {(!history || history.length === 0) ? (
                        <div className="flex flex-col items-center justify-center h-48 text-text-tertiary">
                            <History className="w-12 h-12 mb-4 opacity-20" />
                            <p className="text-sm font-medium">No history trail available.</p>
                        </div>
                    ) : (
                        <div className="flex justify-center">
                            <Timeline layout="alternate">
                                {history.map((hist) => (
                                    <TimelineItem
                                        key={hist.id}
                                        status={hist.statusType || 'default'}
                                        date={hist.date}
                                        title={hist.title}
                                        description={hist.description}
                                    />
                                ))}
                            </Timeline>
                        </div>
                    )}
                </TabsContent>
            </div>
        </Tabs>
    );
};

/* ========================================
   MAIN ROW COMPONENT
   ======================================== */

const AchTransactionRow = ({ transaction }: { transaction: VisualizerTransaction }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { type, amount, status, date, description, title, subtitle, details, fees, history } = transaction;

    const isCredit = type.toUpperCase() === 'CREDIT';
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
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-base font-bold text-text-primary truncate">
                            {title || 'Unknown'}
                        </span>
                        <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase", sConf.bg, sConf.color)}>
                            <StatusIcon className="w-3 h-3" />
                            {sConf.label}
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-text-tertiary">
                        {description && <span className="truncate">{description}</span>}
                        {description && subtitle && <span className="w-1 h-1 rounded-full bg-border-primary flex-shrink-0" />}
                        {subtitle && <span className="font-medium">{subtitle}</span>}
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
                        <p className="text-xs text-text-tertiary font-medium mt-1">
                            {date}
                        </p>
                    </div>
                    <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center bg-surface-secondary text-text-tertiary transition-transform duration-300 flex-shrink-0",
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
                            <TransactionDetailsTabView transaction={transaction} />
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

export const AchTransactionsVisualizer: React.FC<AchTransactionsVisualizerProps> = ({ 
    transactions, 
    layout = 'list',
    tableColumns,
    title = 'ACH Transactions', 
    subtitle = 'View and manage all your ACH transfers, payouts, and collections.',
    emptyMessage = 'No Transactions Found',
    emptyDescription = 'There are no ACH transactions matching this criteria.',
    className 
}) => {
    const [selectedTx, setSelectedTx] = useState<VisualizerTransaction | null>(null);

    // Generate default columns if not provided
    const defaultColumns: Column<VisualizerTransaction>[] = [
        {
            key: 'title',
            header: 'Entity / Title',
            sortable: true,
            render: (_val, row) => (
                <div>
                    <div className="font-bold text-text-primary">{row.title || 'Unknown'}</div>
                    {row.subtitle && <div className="text-xs text-text-tertiary mt-0.5">{row.subtitle}</div>}
                </div>
            )
        },
        {
            key: 'date',
            header: 'Date',
            width: '150px',
            sortable: true,
            render: (val) => <span className="text-text-secondary whitespace-nowrap">{val}</span>
        },
        {
            key: 'status',
            header: 'Status',
            width: '120px',
            sortable: true,
            render: (val, row) => {
                const sConf = getStatusConfig(row.status);
                const StatusIcon = sConf.icon;
                return (
                    <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold tracking-wide uppercase", sConf.bg, sConf.color)}>
                        <StatusIcon className="w-3.5 h-3.5" />
                        {sConf.label}
                    </div>
                );
            }
        },
        {
            key: 'amount',
            header: 'Amount',
            width: '120px',
            sortable: true,
            render: (val, row) => {
                const isCredit = row.type.toUpperCase() === 'CREDIT';
                return (
                    <div className={cn("font-bold font-mono text-right", isCredit ? "text-status-success" : "text-text-primary")}>
                        {isCredit ? '+' : '-'}{formatCurrency(row.amount, row.currency)}
                    </div>
                );
            }
        }
    ];

    const appliedColumns = tableColumns || defaultColumns;

    return (
        <div className={cn("w-full max-w-6xl mx-auto flex flex-col gap-6", className)}>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-text-primary">{title}</h2>
                    {subtitle && <p className="text-sm text-text-tertiary mt-1">{subtitle}</p>}
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
                    layout === 'table' ? (
                        <Table 
                            data={transactions} 
                            columns={appliedColumns} 
                            hoverable
                            density="comfortable"
                            onRowClick={setSelectedTx}
                        />
                    ) : (
                        transactions.map((tx) => (
                            <AchTransactionRow key={tx.id} transaction={tx} />
                        ))
                    )
                ) : (
                    <div className="p-12 text-center rounded-3xl border border-dashed border-border-primary/50 bg-surface-secondary/20">
                        <Activity className="w-12 h-12 mx-auto text-text-quaternary mb-4" />
                        <h3 className="text-lg font-bold text-text-primary mb-1">{emptyMessage}</h3>
                        <p className="text-sm text-text-tertiary">{emptyDescription}</p>
                    </div>
                )}
            </div>

            {layout === 'table' && (
                <Sheet open={!!selectedTx} onOpenChange={(open) => !open && setSelectedTx(null)}>
                    <SheetContent side="right" className="w-[90vw] sm:max-w-xl overflow-y-auto">
                        <SheetHeader className="mb-6 mt-4">
                            <SheetTitle>Transaction Details</SheetTitle>
                            <SheetDescription>View detailed information, fee breakdowns, and history logs.</SheetDescription>
                        </SheetHeader>
                        {selectedTx && (
                            <TransactionDetailsTabView transaction={selectedTx} />
                        )}
                    </SheetContent>
                </Sheet>
            )}
        </div>
    );
};

export default AchTransactionsVisualizer;

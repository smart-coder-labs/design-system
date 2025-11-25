import React from 'react';
import { FileText, Download, Printer, Share2, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Button } from './Button';

export interface InvoiceItem {
    id: string;
    description: string;
    quantity: number;
    price: number;
    total: number;
}

export interface InvoiceParty {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    email?: string;
    phone?: string;
}

export interface InvoicePreviewProps {
    invoiceNumber: string;
    dateIssued: string;
    dueDate: string;
    status: 'paid' | 'pending' | 'overdue';
    from: InvoiceParty;
    to: InvoiceParty;
    items: InvoiceItem[];
    subtotal: number;
    tax: number;
    taxRate?: number;
    discount?: number;
    total: number;
    currency?: string;
    logo?: string;
    notes?: string;
    onDownload?: () => void;
    onPrint?: () => void;
    onShare?: () => void;
    className?: string;
}

export const InvoicePreview: React.FC<InvoicePreviewProps> = ({
    invoiceNumber,
    dateIssued,
    dueDate,
    status,
    from,
    to,
    items,
    subtotal,
    tax,
    taxRate,
    discount = 0,
    total,
    currency = '$',
    logo,
    notes,
    onDownload,
    onPrint,
    onShare,
    className = '',
}) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'paid':
                return 'text-status-success bg-status-success/10 border-status-success/20';
            case 'pending':
                return 'text-status-warning bg-status-warning/10 border-status-warning/20';
            case 'overdue':
                return 'text-status-error bg-status-error/10 border-status-error/20';
            default:
                return 'text-text-secondary bg-background-secondary border-border-primary';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'paid':
                return <CheckCircle className="w-4 h-4" />;
            case 'pending':
                return <Clock className="w-4 h-4" />;
            case 'overdue':
                return <AlertCircle className="w-4 h-4" />;
            default:
                return null;
        }
    };

    return (
        <div className={`bg-surface-primary rounded-2xl shadow-sm border border-border-primary overflow-hidden ${className}`}>
            {/* Toolbar */}
            <div className="flex items-center justify-between p-4 border-b border-border-primary bg-background-secondary/30">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-accent-blue" />
                    </div>
                    <span className="font-semibold text-text-primary">Invoice Preview</span>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={onShare} leftIcon={<Share2 className="w-4 h-4" />}>
                        Share
                    </Button>
                    <Button variant="ghost" size="sm" onClick={onPrint} leftIcon={<Printer className="w-4 h-4" />}>
                        Print
                    </Button>
                    <Button variant="outline" size="sm" onClick={onDownload} leftIcon={<Download className="w-4 h-4" />}>
                        Download
                    </Button>
                </div>
            </div>

            {/* Invoice Content */}
            <div className="p-8 md:p-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                    <div>
                        {logo ? (
                            <img src={logo} alt="Company Logo" className="h-12 mb-4" />
                        ) : (
                            <div className="h-12 w-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-xl font-bold text-accent-blue">{from.name.charAt(0)}</span>
                            </div>
                        )}
                        <h1 className="text-3xl font-bold text-text-primary mb-2">Invoice</h1>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium capitalize ${getStatusColor(status)}`}>
                            {getStatusIcon(status)}
                            {status}
                        </div>
                    </div>
                    <div className="text-right">
                        <h3 className="text-lg font-semibold text-text-primary mb-1">{from.name}</h3>
                        <div className="text-sm text-text-secondary space-y-1">
                            <p>{from.address}</p>
                            <p>{from.city}, {from.state} {from.zip}</p>
                            <p>{from.country}</p>
                            {from.email && <p>{from.email}</p>}
                        </div>
                    </div>
                </div>

                {/* Invoice Details & Bill To */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-4">Bill To</h4>
                        <h3 className="text-lg font-semibold text-text-primary mb-2">{to.name}</h3>
                        <div className="text-sm text-text-secondary space-y-1">
                            <p>{to.address}</p>
                            <p>{to.city}, {to.state} {to.zip}</p>
                            <p>{to.country}</p>
                            {to.email && <p>{to.email}</p>}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between md:justify-end gap-8">
                            <div className="text-right">
                                <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-1">Invoice Number</h4>
                                <p className="font-medium text-text-primary">{invoiceNumber}</p>
                            </div>
                            <div className="text-right">
                                <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-1">Date Issued</h4>
                                <p className="font-medium text-text-primary">{dateIssued}</p>
                            </div>
                        </div>
                        <div className="flex justify-between md:justify-end gap-8">
                            <div className="text-right">
                                <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-1">Due Date</h4>
                                <p className="font-medium text-text-primary">{dueDate}</p>
                            </div>
                            <div className="text-right">
                                <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-1">Amount Due</h4>
                                <p className="font-bold text-xl text-text-primary">{currency}{total.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Items Table */}
                <div className="mb-12 overflow-hidden rounded-xl border border-border-primary">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-background-secondary/50 border-b border-border-primary">
                                <th className="py-3 px-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider">Description</th>
                                <th className="py-3 px-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider text-right">Qty</th>
                                <th className="py-3 px-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider text-right">Price</th>
                                <th className="py-3 px-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-primary">
                            {items.map((item) => (
                                <tr key={item.id} className="group hover:bg-background-secondary/30 transition-colors">
                                    <td className="py-4 px-4 text-sm font-medium text-text-primary">{item.description}</td>
                                    <td className="py-4 px-4 text-sm text-text-secondary text-right">{item.quantity}</td>
                                    <td className="py-4 px-4 text-sm text-text-secondary text-right">{currency}{item.price.toFixed(2)}</td>
                                    <td className="py-4 px-4 text-sm font-medium text-text-primary text-right">{currency}{item.total.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Summary & Notes */}
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 min-w-[200px]">
                        {notes && (
                            <>
                                <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2">Notes</h4>
                                <p className="text-sm text-text-secondary leading-relaxed">{notes}</p>
                            </>
                        )}
                    </div>
                    <div className="w-full md:w-80 space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-text-secondary">Subtotal</span>
                            <span className="font-medium text-text-primary">{currency}{subtotal.toFixed(2)}</span>
                        </div>
                        {discount > 0 && (
                            <div className="flex justify-between text-sm">
                                <span className="text-text-secondary">Discount</span>
                                <span className="font-medium text-status-success">-{currency}{discount.toFixed(2)}</span>
                            </div>
                        )}
                        <div className="flex justify-between text-sm">
                            <span className="text-text-secondary">Tax {taxRate ? `(${taxRate}%)` : ''}</span>
                            <span className="font-medium text-text-primary">{currency}{tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-baseline pt-4 mt-4 border-t border-border-primary">
                            <span className="text-base font-bold text-text-primary">Total</span>
                            <span className="text-2xl font-bold text-text-primary">{currency}{total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 pt-8 border-t border-border-dashed text-center">
                    <p className="text-sm text-text-tertiary">Thank you for your business!</p>
                    <p className="text-xs text-text-tertiary mt-1">Please include invoice number on your check.</p>
                </div>
            </div>
        </div>
    );
};

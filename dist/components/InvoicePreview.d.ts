import React from 'react';
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
export declare const InvoicePreview: React.FC<InvoicePreviewProps>;
//# sourceMappingURL=InvoicePreview.d.ts.map
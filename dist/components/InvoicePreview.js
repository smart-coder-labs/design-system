import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { FileText, Download, Printer, Share2, CheckCircle, Clock, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from './Button';
export const InvoicePreview = ({ invoiceNumber, dateIssued, dueDate, status, from, to, items, subtotal, tax, taxRate, discount = 0, total, currency = '$', logo, notes, onDownload, onPrint, onShare, className = '', }) => {
    const invoiceRef = useRef(null);
    const [isDownloading, setIsDownloading] = useState(false);
    const getStatusColor = (status) => {
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
    const getStatusIcon = (status) => {
        switch (status) {
            case 'paid':
                return _jsx(CheckCircle, { className: "w-4 h-4" });
            case 'pending':
                return _jsx(Clock, { className: "w-4 h-4" });
            case 'overdue':
                return _jsx(AlertCircle, { className: "w-4 h-4" });
            default:
                return null;
        }
    };
    const handlePrint = () => {
        if (onPrint) {
            onPrint();
            return;
        }
        window.print();
    };
    const handleShare = async () => {
        if (onShare) {
            onShare();
            return;
        }
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `Invoice ${invoiceNumber}`,
                    text: `Invoice ${invoiceNumber} from ${from.name}`,
                    url: window.location.href,
                });
            }
            catch (error) {
                console.error('Error sharing:', error);
            }
        }
        else {
            // Fallback: Copy URL to clipboard
            try {
                await navigator.clipboard.writeText(window.location.href);
                // In a real app, we would show a toast here
                alert('Link copied to clipboard!');
            }
            catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    };
    const handleDownload = async () => {
        if (onDownload) {
            onDownload();
            return;
        }
        if (!invoiceRef.current)
            return;
        try {
            setIsDownloading(true);
            const html2canvas = (await import('html2canvas')).default;
            const jsPDF = (await import('jspdf')).default;
            const canvas = await html2canvas(invoiceRef.current, {
                scale: 2, // Higher scale for better quality
                useCORS: true, // Enable CORS for images
                logging: false,
                backgroundColor: '#ffffff'
            });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });
            const imgWidth = 210; // A4 width in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save(`invoice-${invoiceNumber}.pdf`);
        }
        catch (error) {
            console.error('Error generating PDF:', error);
            alert('Failed to generate PDF. Please try again.');
        }
        finally {
            setIsDownloading(false);
        }
    };
    return (_jsxs("div", { className: `bg-surface-primary rounded-2xl shadow-sm border border-border-primary overflow-hidden ${className}`, children: [_jsxs("div", { className: "flex items-center justify-between p-4 border-b border-border-primary bg-background-secondary/30 print:hidden", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center", children: _jsx(FileText, { className: "w-4 h-4 text-accent-blue" }) }), _jsx("span", { className: "font-semibold text-text-primary", children: "Invoice Preview" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: handleShare, leftIcon: _jsx(Share2, { className: "w-4 h-4" }), children: "Share" }), _jsx(Button, { variant: "ghost", size: "sm", onClick: handlePrint, leftIcon: _jsx(Printer, { className: "w-4 h-4" }), children: "Print" }), _jsx(Button, { variant: "outline", size: "sm", onClick: handleDownload, disabled: isDownloading, leftIcon: isDownloading ? _jsx(Loader2, { className: "w-4 h-4 animate-spin" }) : _jsx(Download, { className: "w-4 h-4" }), children: isDownloading ? 'Generating...' : 'Download' })] })] }), _jsxs("div", { ref: invoiceRef, className: "p-8 md:p-12 bg-white", children: [_jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start gap-8 mb-12", children: [_jsxs("div", { children: [logo ? (_jsx("img", { src: logo, alt: "Company Logo", className: "h-12 mb-4" })) : (_jsx("div", { className: "h-12 w-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-4", children: _jsx("span", { className: "text-xl font-bold text-accent-blue", children: from.name.charAt(0) }) })), _jsx("h1", { className: "text-3xl font-bold text-text-primary mb-2", children: "Invoice" }), _jsxs("div", { className: `inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium capitalize ${getStatusColor(status)}`, children: [getStatusIcon(status), status] })] }), _jsxs("div", { className: "text-right", children: [_jsx("h3", { className: "text-lg font-semibold text-text-primary mb-1", children: from.name }), _jsxs("div", { className: "text-sm text-text-secondary space-y-1", children: [_jsx("p", { children: from.address }), _jsxs("p", { children: [from.city, ", ", from.state, " ", from.zip] }), _jsx("p", { children: from.country }), from.email && _jsx("p", { children: from.email })] })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12", children: [_jsxs("div", { children: [_jsx("h4", { className: "text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-4", children: "Bill To" }), _jsx("h3", { className: "text-lg font-semibold text-text-primary mb-2", children: to.name }), _jsxs("div", { className: "text-sm text-text-secondary space-y-1", children: [_jsx("p", { children: to.address }), _jsxs("p", { children: [to.city, ", ", to.state, " ", to.zip] }), _jsx("p", { children: to.country }), to.email && _jsx("p", { children: to.email })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex justify-between md:justify-end gap-8", children: [_jsxs("div", { className: "text-right", children: [_jsx("h4", { className: "text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-1", children: "Invoice Number" }), _jsx("p", { className: "font-medium text-text-primary", children: invoiceNumber })] }), _jsxs("div", { className: "text-right", children: [_jsx("h4", { className: "text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-1", children: "Date Issued" }), _jsx("p", { className: "font-medium text-text-primary", children: dateIssued })] })] }), _jsxs("div", { className: "flex justify-between md:justify-end gap-8", children: [_jsxs("div", { className: "text-right", children: [_jsx("h4", { className: "text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-1", children: "Due Date" }), _jsx("p", { className: "font-medium text-text-primary", children: dueDate })] }), _jsxs("div", { className: "text-right", children: [_jsx("h4", { className: "text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-1", children: "Amount Due" }), _jsxs("p", { className: "font-bold text-xl text-text-primary", children: [currency, total.toFixed(2)] })] })] })] })] }), _jsx("div", { className: "mb-12 overflow-hidden rounded-xl border border-border-primary", children: _jsxs("table", { className: "w-full text-left border-collapse", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-background-secondary/50 border-b border-border-primary", children: [_jsx("th", { className: "py-3 px-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider", children: "Description" }), _jsx("th", { className: "py-3 px-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider text-right", children: "Qty" }), _jsx("th", { className: "py-3 px-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider text-right", children: "Price" }), _jsx("th", { className: "py-3 px-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider text-right", children: "Total" })] }) }), _jsx("tbody", { className: "divide-y divide-border-primary", children: items.map((item) => (_jsxs("tr", { className: "group hover:bg-background-secondary/30 transition-colors", children: [_jsx("td", { className: "py-4 px-4 text-sm font-medium text-text-primary", children: item.description }), _jsx("td", { className: "py-4 px-4 text-sm text-text-secondary text-right", children: item.quantity }), _jsxs("td", { className: "py-4 px-4 text-sm text-text-secondary text-right", children: [currency, item.price.toFixed(2)] }), _jsxs("td", { className: "py-4 px-4 text-sm font-medium text-text-primary text-right", children: [currency, item.total.toFixed(2)] })] }, item.id))) })] }) }), _jsxs("div", { className: "flex flex-col md:flex-row gap-8", children: [_jsx("div", { className: "flex-1 min-w-[200px]", children: notes && (_jsxs(_Fragment, { children: [_jsx("h4", { className: "text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2", children: "Notes" }), _jsx("p", { className: "text-sm text-text-secondary leading-relaxed", children: notes })] })) }), _jsxs("div", { className: "w-full md:w-80 space-y-3", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-text-secondary", children: "Subtotal" }), _jsxs("span", { className: "font-medium text-text-primary", children: [currency, subtotal.toFixed(2)] })] }), discount > 0 && (_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-text-secondary", children: "Discount" }), _jsxs("span", { className: "font-medium text-status-success", children: ["-", currency, discount.toFixed(2)] })] })), _jsxs("div", { className: "flex justify-between text-sm", children: [_jsxs("span", { className: "text-text-secondary", children: ["Tax ", taxRate ? `(${taxRate}%)` : ''] }), _jsxs("span", { className: "font-medium text-text-primary", children: [currency, tax.toFixed(2)] })] }), _jsxs("div", { className: "flex justify-between items-baseline pt-4 mt-4 border-t border-border-primary", children: [_jsx("span", { className: "text-base font-bold text-text-primary", children: "Total" }), _jsxs("span", { className: "text-2xl font-bold text-text-primary", children: [currency, total.toFixed(2)] })] })] })] }), _jsxs("div", { className: "mt-12 pt-8 border-t border-border-dashed text-center", children: [_jsx("p", { className: "text-sm text-text-tertiary", children: "Thank you for your business!" }), _jsx("p", { className: "text-xs text-text-tertiary mt-1", children: "Please include invoice number on your check." })] })] })] }));
};
//# sourceMappingURL=InvoicePreview.js.map
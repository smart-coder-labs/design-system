import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '../lib/utils';
import { Info, AlertCircle, CheckCircle, AlertTriangle, X } from 'lucide-react';
/* ========================================
   CALLOUT COMPONENT
   ======================================== */
export const Callout = forwardRef(({ variant = 'info', title, icon, dismissible = false, onDismiss, className, children, ...props }, ref) => {
    const variants = {
        info: {
            container: "bg-status-info/10 border-status-info/20 text-status-info",
            icon: Info,
        },
        success: {
            container: "bg-status-success/10 border-status-success/20 text-status-success",
            icon: CheckCircle,
        },
        warning: {
            container: "bg-status-warning/10 border-status-warning/20 text-status-warning",
            icon: AlertTriangle,
        },
        error: {
            container: "bg-status-error/10 border-status-error/20 text-status-error",
            icon: AlertCircle,
        },
        neutral: {
            container: "bg-surface-secondary border-border-primary text-text-primary",
            icon: Info,
        },
    };
    const Icon = icon || variants[variant].icon;
    return (_jsxs("div", { ref: ref, className: cn("relative flex gap-3 p-4 rounded-xl border", variants[variant].container, className), ...props, children: [_jsx("div", { className: "flex-shrink-0 mt-0.5", children: _jsx(Icon, { className: "w-5 h-5" }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [title && (_jsx("h4", { className: "font-semibold mb-1", children: title })), _jsx("div", { className: cn("text-sm", variant === 'neutral' ? "text-text-secondary" : ""), children: children })] }), dismissible && onDismiss && (_jsx("button", { onClick: onDismiss, className: "flex-shrink-0 p-1 rounded-lg hover:bg-black/10 transition-colors focus:outline-none", "aria-label": "Dismiss", children: _jsx(X, { className: "w-4 h-4" }) }))] }));
});
Callout.displayName = 'Callout';
//# sourceMappingURL=Callout.js.map
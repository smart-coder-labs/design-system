import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../lib/utils';
export const PaymentMethodSelector = ({ methods, value: controlledValue, defaultValue, onChange, onAdd, className = '', showAdd = true, }) => {
    const isControlled = typeof controlledValue === 'string';
    const [internal, setInternal] = React.useState(defaultValue);
    const selected = isControlled ? controlledValue : internal;
    const handleSelect = (id) => {
        const method = methods.find((m) => m.id === id);
        if (!method || method.disabled)
            return;
        if (!isControlled)
            setInternal(id);
        onChange?.(id);
    };
    return (_jsxs("div", { className: cn('space-y-3', className), children: [_jsx("div", { role: "radiogroup", "aria-label": "Payment methods", className: "grid gap-3", children: methods.map((m) => {
                    const isSelected = selected === m.id;
                    return (_jsxs("button", { type: "button", role: "radio", "aria-checked": isSelected, "aria-disabled": m.disabled, onClick: () => handleSelect(m.id), disabled: m.disabled, className: cn('w-full flex items-center justify-between gap-4 p-4 rounded-xl border transition-colors shadow-sm', isSelected
                            ? 'border-accent-blue bg-accent-blue/5 text-accent-blue shadow-[0_1px_2px_rgba(10,132,255,0.08)]'
                            : 'border-border-primary bg-surface-secondary text-text-primary', m.disabled ? 'opacity-40 cursor-not-allowed' : 'hover:border-accent-blue'), children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("div", { className: "flex-shrink-0", children: [m.type === 'card' && (_jsx("div", { className: "w-10 h-6 flex items-center justify-center bg-white rounded-md text-sm font-medium", children: "\u25CF\u25CF\u25CF\u25CF" })), m.type === 'applepay' && (_jsx("div", { className: "text-sm font-medium", children: "\uF8FF" })), m.type === 'paypal' && (_jsx("div", { className: "text-sm font-medium", children: "PP" })), m.type === 'bank' && (_jsx("div", { className: "text-sm font-medium", children: "\uD83C\uDFE6" }))] }), _jsxs("div", { className: "text-left", children: [_jsx("div", { className: cn('text-sm font-medium', isSelected ? 'text-accent-blue' : 'text-text-primary'), children: m.label ?? m.type }), m.details && (_jsx("div", { className: cn('text-xs mt-1', isSelected ? 'text-accent-blue/80' : 'text-text-tertiary'), children: m.details }))] })] }), _jsx("div", { className: "flex items-center", children: isSelected ? (_jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, className: "text-accent-blue", children: _jsx("path", { d: "M5 13l4 4L19 7", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" }) })) : (_jsx("div", { className: "w-4 h-4 rounded-full border border-border-primary" })) })] }, m.id));
                }) }), showAdd && (_jsx("div", { children: _jsx("button", { type: "button", onClick: () => onAdd?.(), className: "inline-flex items-center gap-2 px-3 py-2 rounded-md bg-transparent text-accent-blue hover:underline", children: "+ Add payment method" }) }))] }));
};
export default PaymentMethodSelector;
//# sourceMappingURL=PaymentMethodSelector.js.map
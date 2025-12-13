import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { cn } from '../lib/utils';
export const RatingStars = ({ value: controlledValue, defaultValue = 0, max = 5, readOnly = false, size = 'md', onChange, }) => {
    const isControlled = typeof controlledValue === 'number';
    const [internal, setInternal] = useState(defaultValue);
    const value = isControlled ? controlledValue : internal;
    const sizes = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
    };
    const handleSet = (v) => {
        if (readOnly)
            return;
        if (!isControlled)
            setInternal(v);
        onChange?.(v);
    };
    return (_jsx("div", { className: cn('inline-flex items-center', readOnly ? 'pointer-events-none' : ''), role: readOnly ? undefined : 'radiogroup', "aria-label": readOnly ? `Rating ${value} of ${max}` : 'Rating', children: Array.from({ length: max }).map((_, i) => {
            const idx = i + 1;
            const filled = idx <= value;
            return (_jsx("button", { type: "button", "aria-checked": filled, role: readOnly ? undefined : 'radio', onClick: () => handleSet(idx), className: cn('inline-flex items-center justify-center', sizes[size], 'rounded-sm', filled ? 'text-accent-blue' : 'text-text-tertiary', readOnly ? 'cursor-default' : 'hover:text-accent-blue'), "aria-label": `${idx} star${idx > 1 ? 's' : ''}`, children: _jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, className: "w-full h-full", children: _jsx("path", { d: "M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.402 8.172L12 18.896l-7.336 3.874 1.402-8.172L.132 9.21l8.2-1.192z" }) }) }, idx));
        }) }));
};
export const ReviewsList = ({ reviews, className = '', compact = false }) => {
    return (_jsx("div", { className: cn('space-y-4', className), children: reviews.map((r) => (_jsxs("article", { className: cn('flex gap-4 items-start'), children: [_jsx("div", { className: "flex-shrink-0", children: r.avatar ?? _jsx("div", { className: "w-10 h-10 rounded-full bg-surface-secondary" }) }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "font-medium text-text-primary", children: r.author }), _jsx("div", { className: "text-sm text-text-tertiary", children: r.date })] }), _jsx("div", { children: _jsx(RatingStars, { value: r.rating, readOnly: true, size: compact ? 'sm' : 'md' }) })] }), r.text && _jsx("p", { className: "mt-2 text-text-primary", children: r.text })] })] }, r.id))) }));
};
export default ReviewsList;
//# sourceMappingURL=Reviews.js.map
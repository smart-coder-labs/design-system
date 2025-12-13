import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../lib/utils';
export const PriceDisplay = ({ amount, currency = 'USD', locale = 'en-US', showCents = true, compact = false, className = '', original = null, variant = 'default', currencyDisplay = 'symbol', }) => {
    const formatter = React.useMemo(() => {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
            minimumFractionDigits: showCents ? 2 : 0,
            maximumFractionDigits: showCents ? 2 : 0,
            currencyDisplay,
        });
    }, [locale, currency, showCents, currencyDisplay]);
    const parts = formatter.formatToParts(amount);
    const makeSpan = (key, children, classes = '') => (_jsx("span", { className: classes, children: children }, key));
    const classMap = {
        default: 'text-text-primary',
        muted: 'text-text-tertiary',
        accent: 'text-accent-blue',
    };
    const integerClass = `font-semibold ${classMap[variant]} ${compact ? 'text-base' : 'text-2xl'}`;
    const currencyClass = `${compact ? 'text-base' : 'text-2xl'} font-semibold ${classMap[variant]} mr-2`;
    return (_jsxs("div", { className: cn('inline-flex items-baseline gap-3', className), "aria-label": `Price ${currency} ${amount}`, children: [_jsx("div", { className: cn('inline-flex items-baseline', compact ? 'text-base' : 'text-lg'), children: parts.map((p, idx) => {
                    const baseSmall = 'text-xs opacity-90';
                    const cls = p.type === 'fraction'
                        ? `align-baseline ${baseSmall} ${classMap[variant]}`
                        : p.type === 'decimal'
                            ? `${baseSmall} ${classMap[variant]}`
                            : p.type === 'currency'
                                ? currencyClass
                                : '';
                    const partClass = p.type === 'integer' ? integerClass : cls;
                    return makeSpan(String(idx) + p.type, p.value, partClass);
                }) }), original != null && (_jsx("div", { className: "text-sm text-text-tertiary line-through", children: formatter.format(original) }))] }));
};
export default PriceDisplay;
//# sourceMappingURL=PriceDisplay.js.map
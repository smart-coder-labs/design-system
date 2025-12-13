import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useRef } from 'react';
import { cn } from '../lib/utils';
export const QuantitySelector = ({ value: controlledValue, defaultValue = 1, onChange, min = 0, max = Infinity, step = 1, disabled = false, compact = false, className = '', ['aria-label']: ariaLabel = 'Quantity', }) => {
    const isControlled = typeof controlledValue === 'number';
    const [internal, setInternal] = useState(defaultValue);
    const value = isControlled ? controlledValue : internal;
    const inputRef = useRef(null);
    useEffect(() => {
        if (!isControlled)
            return;
        // when controlled, keep internal in sync for the input value
        setInternal(controlledValue);
    }, [controlledValue, isControlled]);
    const clamp = (v) => Math.min(max, Math.max(min, v));
    const handleChange = (v) => {
        const next = clamp(Math.round(v / step) * step);
        if (!isControlled)
            setInternal(next);
        onChange?.(next);
    };
    const inc = () => {
        if (disabled)
            return;
        handleChange((value ?? 0) + step);
    };
    const dec = () => {
        if (disabled)
            return;
        handleChange((value ?? 0) - step);
    };
    const onKeyDown = (e) => {
        if (disabled)
            return;
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            inc();
        }
        else if (e.key === 'ArrowDown') {
            e.preventDefault();
            dec();
        }
        else if (e.key === 'Home') {
            e.preventDefault();
            handleChange(min);
        }
        else if (e.key === 'End') {
            e.preventDefault();
            handleChange(max === Infinity ? value : max);
        }
    };
    return (_jsxs("div", { role: "spinbutton", "aria-label": ariaLabel, "aria-valuenow": Number.isFinite(value) ? value : undefined, "aria-valuemin": min, "aria-valuemax": Number.isFinite(max) ? max : undefined, tabIndex: 0, onKeyDown: onKeyDown, className: cn('inline-flex items-center gap-2', className), children: [_jsx("button", { type: "button", "aria-label": "Decrease", onClick: dec, disabled: disabled || value <= min, className: cn('w-8 h-8 flex items-center justify-center rounded-lg border border-border-primary bg-surface-secondary text-text-primary', 'hover:bg-surface-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue', compact ? 'w-7 h-7' : ''), children: _jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, children: _jsx("path", { d: "M5 12h14", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) }), _jsx("input", { ref: inputRef, type: "number", value: Number.isFinite(value) ? String(value) : '', onChange: (e) => handleChange(Number(e.target.value || 0)), disabled: disabled, className: cn('w-16 text-center bg-transparent outline-none text-text-primary', compact ? 'text-sm' : 'text-base'), "aria-label": ariaLabel, min: min, max: Number.isFinite(max) ? max : undefined, step: step }), _jsx("button", { type: "button", "aria-label": "Increase", onClick: inc, disabled: disabled || value >= max, className: cn('w-8 h-8 flex items-center justify-center rounded-lg border border-border-primary bg-surface-secondary text-text-primary', 'hover:bg-surface-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue', compact ? 'w-7 h-7' : ''), children: _jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, children: _jsx("path", { d: "M12 5v14M5 12h14", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) })] }));
};
export default QuantitySelector;
//# sourceMappingURL=QuantitySelector.js.map
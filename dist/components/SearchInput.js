import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Spinner } from './Spinner';
import { Label } from './Label';
/* ========================================
   SEARCH INPUT COMPONENT
   ======================================== */
export const SearchInput = ({ value, onChange, onSearch, onClear, isLoading = false, debounceTime = 0, className, containerClassName, placeholder = 'Search...', disabled, label, ...props }) => {
    const inputRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const handleClear = () => {
        onChange('');
        onClear?.();
        inputRef.current?.focus();
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch?.(value);
        }
        props.onKeyDown?.(e);
    };
    return (_jsxs("div", { className: cn("relative w-full space-y-2", containerClassName), children: [label && (_jsx(Label, { htmlFor: props.id, className: "mb-2", children: label })), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none", children: _jsx(Search, { className: cn("w-4 h-4 transition-colors", isFocused && "text-accent-blue") }) }), _jsx("input", { ref: inputRef, type: "text", value: value, onChange: (e) => onChange(e.target.value), onKeyDown: handleKeyDown, onFocus: (e) => {
                            setIsFocused(true);
                            props.onFocus?.(e);
                        }, onBlur: (e) => {
                            setIsFocused(false);
                            props.onBlur?.(e);
                        }, disabled: disabled, placeholder: placeholder, className: cn("w-full h-10 pl-9 pr-10 rounded-xl border bg-surface-primary text-text-primary transition-all", "placeholder:text-text-tertiary", "focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue", "disabled:opacity-50 disabled:cursor-not-allowed", "border-border-primary", className), ...props }), _jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center", children: _jsx(AnimatePresence, { mode: "wait", children: isLoading ? (_jsx(motion.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "flex items-center justify-center", children: _jsx(Spinner, { size: "sm", color: "blue" }) }, "loader")) : value.length > 0 ? (_jsx(motion.button, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, onClick: handleClear, disabled: disabled, className: "p-0.5 rounded-full hover:bg-surface-tertiary text-text-tertiary hover:text-text-primary transition-colors focus:outline-none", type: "button", "aria-label": "Clear search", children: _jsx(X, { className: "w-3.5 h-3.5" }) }, "clear")) : null }) })] })] }));
};
SearchInput.displayName = 'SearchInput';
//# sourceMappingURL=SearchInput.js.map
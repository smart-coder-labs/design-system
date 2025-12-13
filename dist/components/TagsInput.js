import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import { X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Label } from './Label';
/* ========================================
   TAGS INPUT COMPONENT
   ======================================== */
export const TagsInput = ({ value = [], onChange, placeholder = 'Add tags...', label, error, helperText, disabled = false, maxTags, className, onBlur, }) => {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addTag();
        }
        else if (e.key === 'Backspace' && inputValue === '' && value.length > 0) {
            removeTag(value.length - 1);
        }
    };
    const addTag = () => {
        const trimmedInput = inputValue.trim();
        if (trimmedInput && !value.includes(trimmedInput)) {
            if (maxTags && value.length >= maxTags)
                return;
            onChange?.([...value, trimmedInput]);
            setInputValue('');
        }
    };
    const removeTag = (index) => {
        if (disabled)
            return;
        const newTags = [...value];
        newTags.splice(index, 1);
        onChange?.(newTags);
    };
    const handleContainerClick = () => {
        if (!disabled) {
            inputRef.current?.focus();
        }
    };
    return (_jsxs("div", { className: cn("w-full space-y-2", className), children: [label && (_jsx(Label, { className: "mb-2", children: label })), _jsxs("div", { onClick: handleContainerClick, className: cn("flex flex-wrap items-center gap-2 w-full min-h-[40px] px-3 py-2 rounded-xl border bg-surface-primary text-text-primary transition-all cursor-text", isFocused ? "ring-2 ring-accent-blue/20 border-accent-blue" : "border-border-primary", error ? "border-status-error focus-within:border-status-error focus-within:ring-status-error/20" : "", disabled ? "opacity-50 cursor-not-allowed bg-surface-secondary" : ""), children: [_jsx(AnimatePresence, { mode: "popLayout", children: value.map((tag, index) => (_jsxs(motion.span, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, layout: true, className: cn("inline-flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium bg-surface-tertiary text-text-primary", disabled && "bg-surface-secondary text-text-secondary"), children: [tag, !disabled && (_jsx("button", { type: "button", onClick: (e) => {
                                        e.stopPropagation();
                                        removeTag(index);
                                    }, className: "p-0.5 rounded-full hover:bg-surface-secondary text-text-tertiary hover:text-text-primary transition-colors focus:outline-none", children: _jsx(X, { className: "w-3 h-3" }) }))] }, `${tag}-${index}`))) }), _jsx("input", { ref: inputRef, type: "text", value: inputValue, onChange: (e) => setInputValue(e.target.value), onKeyDown: handleKeyDown, onFocus: () => setIsFocused(true), onBlur: () => {
                            setIsFocused(false);
                            addTag(); // Add tag on blur if there's input
                            onBlur?.();
                        }, disabled: disabled, placeholder: value.length === 0 ? placeholder : '', className: "flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm placeholder:text-text-tertiary disabled:cursor-not-allowed" })] }), (error || helperText) && (_jsx(motion.p, { initial: { opacity: 0, y: -4 }, animate: { opacity: 1, y: 0 }, className: cn("text-sm", error ? "text-status-error" : "text-text-secondary"), children: error || helperText }))] }));
};
TagsInput.displayName = 'TagsInput';
//# sourceMappingURL=TagsInput.js.map
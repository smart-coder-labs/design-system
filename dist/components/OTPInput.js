import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
/* ========================================
   OTP INPUT COMPONENT
   ======================================== */
export const OTPInput = ({ length = 6, value = '', onChange, onComplete, disabled = false, error = false, separator = _jsx("span", { className: "text-text-tertiary font-bold", children: "-" }), groupSize = 3, className, autoFocus = false, }) => {
    const inputRefs = useRef([]);
    // Initialize state
    const [values, setValues] = useState(() => {
        const initialValues = Array(length).fill('');
        if (value) {
            const chars = value.split('');
            chars.forEach((char, i) => {
                if (i < length)
                    initialValues[i] = char;
            });
        }
        return initialValues;
    });
    // Sync with external value
    useEffect(() => {
        if (value !== undefined) {
            const newValues = Array(length).fill('');
            const chars = value.split('');
            chars.forEach((char, i) => {
                if (i < length)
                    newValues[i] = char;
            });
            setValues(newValues);
        }
    }, [value, length]);
    // Auto focus first input
    useEffect(() => {
        if (autoFocus && !disabled) {
            inputRefs.current[0]?.focus();
        }
    }, [autoFocus, disabled]);
    const focusInput = (index) => {
        if (inputRefs.current[index]) {
            inputRefs.current[index]?.focus();
        }
    };
    const handleChange = (index, e) => {
        const val = e.target.value;
        // Only allow numbers
        if (!/^\d*$/.test(val))
            return;
        let newValues = [...values];
        // Handle paste or multi-char input
        if (val.length > 1) {
            const chars = val.split('').filter(c => /\d/.test(c));
            let currentIndex = index;
            chars.forEach((char) => {
                if (currentIndex < length) {
                    newValues[currentIndex] = char;
                    currentIndex++;
                }
            });
            setValues(newValues);
            const newValueString = newValues.join('');
            onChange?.(newValueString);
            if (newValueString.length === length) {
                onComplete?.(newValueString);
                inputRefs.current[length - 1]?.blur();
            }
            else {
                focusInput(Math.min(currentIndex, length - 1));
            }
            return;
        }
        // Handle single char
        newValues[index] = val;
        setValues(newValues);
        const newValueString = newValues.join('');
        onChange?.(newValueString);
        if (val && index < length - 1) {
            focusInput(index + 1);
        }
        if (newValueString.length === length) {
            onComplete?.(newValueString);
            if (index === length - 1) {
                inputRefs.current[index]?.blur();
            }
        }
    };
    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace') {
            e.preventDefault();
            if (values[index]) {
                const newValues = [...values];
                newValues[index] = '';
                setValues(newValues);
                onChange?.(newValues.join(''));
            }
            else if (index > 0) {
                const newValues = [...values];
                newValues[index - 1] = '';
                setValues(newValues);
                onChange?.(newValues.join(''));
                focusInput(index - 1);
            }
        }
        else if (e.key === 'ArrowLeft' && index > 0) {
            e.preventDefault();
            focusInput(index - 1);
        }
        else if (e.key === 'ArrowRight' && index < length - 1) {
            e.preventDefault();
            focusInput(index + 1);
        }
    };
    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
        const chars = pastedData.split('').filter(c => /\d/.test(c));
        const newValues = [...values];
        let currentIndex = 0;
        chars.forEach((char) => {
            if (currentIndex < length) {
                newValues[currentIndex] = char;
                currentIndex++;
            }
        });
        setValues(newValues);
        const newValueString = newValues.join('');
        onChange?.(newValueString);
        if (newValueString.length === length) {
            onComplete?.(newValueString);
            inputRefs.current[length - 1]?.blur();
        }
        else {
            focusInput(Math.min(currentIndex, length - 1));
        }
    };
    return (_jsx("div", { className: cn("flex items-center gap-2", className), children: Array.from({ length }).map((_, index) => (_jsxs(React.Fragment, { children: [index > 0 && index % groupSize === 0 && separator, _jsx(motion.div, { whileFocus: { scale: 1.05, y: -2 }, transition: { type: 'spring', stiffness: 300, damping: 30 }, children: _jsx("input", { ref: (el) => {
                            inputRefs.current[index] = el;
                        }, type: "text", inputMode: "numeric", maxLength: 1, value: values[index], onChange: (e) => handleChange(index, e), onKeyDown: (e) => handleKeyDown(index, e), onPaste: handlePaste, disabled: disabled, className: cn("w-12 h-14 text-2xl text-center font-semibold rounded-xl border bg-surface-primary text-text-primary transition-all shadow-sm", "focus:outline-none focus:ring-4 focus:ring-accent-blue/10 focus:border-accent-blue", "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-surface-secondary", error
                            ? "border-status-error text-status-error focus:border-status-error focus:ring-status-error/10"
                            : "border-border-primary") }) })] }, index))) }));
};
OTPInput.displayName = 'OTPInput';
//# sourceMappingURL=OTPInput.js.map
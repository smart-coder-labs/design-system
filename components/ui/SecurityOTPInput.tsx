"use client";
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { ShieldCheck, ShieldAlert, Loader2 } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export type OTPStatus = 'idle' | 'loading' | 'success' | 'error';

export interface SecurityOTPInputProps {
    length?: number;
    onComplete?: (code: string) => void;
    onChange?: (code: string) => void;
    status?: OTPStatus;
    errorMessage?: string;
    successMessage?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    className?: string;
    label?: string;
    description?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

export const SecurityOTPInput: React.FC<SecurityOTPInputProps> = ({
    length = 6,
    onComplete,
    onChange,
    status = 'idle',
    errorMessage = 'Invalid code. Please try again.',
    successMessage = 'Verified successfully!',
    autoFocus = true,
    disabled = false,
    className = '',
    label = 'Verification Code',
    description = 'Enter the 6-digit code sent to your device',
}) => {
    const [values, setValues] = useState<string[]>(Array(length).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        if (autoFocus && inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [autoFocus]);

    useEffect(() => {
        if (status === 'error') {
            setValues(Array(length).fill(''));
            setTimeout(() => inputRefs.current[0]?.focus(), 400);
        }
    }, [status, length]);

    const handleChange = useCallback((index: number, value: string) => {
        if (disabled || status === 'loading') return;
        const digit = value.replace(/\D/g, '').slice(-1);
        const newValues = [...values];
        newValues[index] = digit;
        setValues(newValues);

        const code = newValues.join('');
        onChange?.(code);

        if (digit && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
        if (code.length === length && !code.includes('')) {
            onComplete?.(code);
        }
    }, [values, length, disabled, status, onChange, onComplete]);

    const handleKeyDown = useCallback((index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace') {
            e.preventDefault();
            const newValues = [...values];
            if (values[index]) {
                newValues[index] = '';
                setValues(newValues);
                onChange?.(newValues.join(''));
            } else if (index > 0) {
                newValues[index - 1] = '';
                setValues(newValues);
                onChange?.(newValues.join(''));
                inputRefs.current[index - 1]?.focus();
            }
        } else if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        } else if (e.key === 'ArrowRight' && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    }, [values, length, onChange]);

    const handlePaste = useCallback((e: React.ClipboardEvent) => {
        e.preventDefault();
        if (disabled || status === 'loading') return;
        const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
        if (!pasted) return;
        const newValues = Array(length).fill('');
        pasted.split('').forEach((char, i) => { newValues[i] = char; });
        setValues(newValues);
        onChange?.(newValues.join(''));
        const nextIndex = Math.min(pasted.length, length - 1);
        inputRefs.current[nextIndex]?.focus();
        if (pasted.length === length) {
            onComplete?.(pasted);
        }
    }, [length, disabled, status, onChange, onComplete]);

    const borderColor = status === 'error'
        ? 'border-status-error'
        : status === 'success'
            ? 'border-status-success'
            : 'border-border-primary focus-within:border-accent-blue';

    return (
        <motion.div
            className={cn('flex flex-col items-center gap-4', className)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Header */}
            <div className="text-center space-y-1">
                <p className="text-sm font-semibold text-text-primary">{label}</p>
                <p className="text-xs text-text-secondary">{description}</p>
            </div>

            {/* OTP Boxes */}
            <div className="flex items-center gap-2.5">
                {Array.from({ length }).map((_, i) => (
                    <React.Fragment key={i}>
                        <motion.input
                            ref={(el) => { inputRefs.current[i] = el; }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={values[i]}
                            disabled={disabled || status === 'loading' || status === 'success'}
                            onChange={(e) => handleChange(i, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(i, e)}
                            onPaste={handlePaste}
                            aria-label={`Digit ${i + 1} of ${length}`}
                            className={cn(
                                'w-12 h-14 text-center text-xl font-bold rounded-xl border-2 bg-surface-primary text-text-primary',
                                'outline-none transition-all duration-200',
                                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus:border-accent-blue',
                                'disabled:opacity-50 disabled:cursor-not-allowed',
                                'placeholder:text-text-quaternary',
                                borderColor,
                            )}
                            animate={
                                status === 'error'
                                    ? { x: [0, -6, 6, -4, 4, 0] }
                                    : status === 'success'
                                        ? { scale: [1, 1.08, 1] }
                                        : {}
                            }
                            transition={{ duration: 0.4 }}
                        />
                        {/* Dash separator in the middle */}
                        {i === Math.floor(length / 2) - 1 && (
                            <span className="text-text-quaternary text-xl font-light mx-1">–</span>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Status feedback */}
            <AnimatePresence mode="wait">
                {status === 'loading' && (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="flex items-center gap-2 text-text-secondary"
                    >
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="text-xs font-medium">Verifying...</span>
                    </motion.div>
                )}
                {status === 'success' && (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-status-success"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-xs font-semibold">{successMessage}</span>
                    </motion.div>
                )}
                {status === 'error' && (
                    <motion.div
                        key="error"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-status-error"
                    >
                        <ShieldAlert className="w-4 h-4" />
                        <span className="text-xs font-semibold">{errorMessage}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

SecurityOTPInput.displayName = 'SecurityOTPInput';
export default SecurityOTPInput;

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

/* ========================================
   TYPES
   ======================================== */

export interface SegmentedInputProps {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
    onComplete?: (value: string) => void;
    disabled?: boolean;
    error?: boolean;
    type?: 'text' | 'number' | 'password';
    placeholder?: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

/* ========================================
   STYLES
   ======================================== */

const sizeStyles = {
    sm: 'w-8 h-8 text-sm rounded-md',
    md: 'w-10 h-10 text-base rounded-lg',
    lg: 'w-12 h-12 text-lg rounded-xl',
};

/* ========================================
   SEGMENTED INPUT COMPONENT
   ======================================== */

export const SegmentedInput: React.FC<SegmentedInputProps> = ({
    length = 6,
    value = '',
    onChange,
    onComplete,
    disabled = false,
    error = false,
    type = 'text',
    placeholder = '',
    className,
    size = 'md',
}) => {
    // Create an array of input refs
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Initialize state with value prop or empty string
    const [values, setValues] = useState<string[]>(() => {
        const initialValues = Array(length).fill('');
        if (value) {
            const chars = value.split('');
            chars.forEach((char, i) => {
                if (i < length) initialValues[i] = char;
            });
        }
        return initialValues;
    });

    // Sync with external value prop
    useEffect(() => {
        if (value !== undefined) {
            const newValues = Array(length).fill('');
            const chars = value.split('');
            chars.forEach((char, i) => {
                if (i < length) newValues[i] = char;
            });
            setValues(newValues);
        }
    }, [value, length]);

    const focusInput = (index: number) => {
        if (inputRefs.current[index]) {
            inputRefs.current[index]?.focus();
        }
    };

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        let newValues = [...values];

        // Handle pasting or typing multiple characters
        if (val.length > 1) {
            const chars = val.split('');
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
            }

            // Focus the next empty input or the last one
            const nextEmptyIndex = newValues.findIndex(v => v === '');
            focusInput(nextEmptyIndex === -1 ? length - 1 : nextEmptyIndex);
            return;
        }

        // Handle single character input
        newValues[index] = val;
        setValues(newValues);

        const newValueString = newValues.join('');
        onChange?.(newValueString);

        if (val && index < length - 1) {
            focusInput(index + 1);
        }

        if (newValueString.length === length) {
            onComplete?.(newValueString);
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace') {
            if (!values[index] && index > 0) {
                // If current is empty, move back and delete
                const newValues = [...values];
                newValues[index - 1] = '';
                setValues(newValues);
                onChange?.(newValues.join(''));
                focusInput(index - 1);
            } else {
                // Just clear current
                const newValues = [...values];
                newValues[index] = '';
                setValues(newValues);
                onChange?.(newValues.join(''));
            }
        } else if (e.key === 'ArrowLeft' && index > 0) {
            focusInput(index - 1);
        } else if (e.key === 'ArrowRight' && index < length - 1) {
            focusInput(index + 1);
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
        const chars = pastedData.split('');
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
        }

        focusInput(Math.min(currentIndex, length - 1));
    };

    return (
        <div className={cn("flex gap-2", className)}>
            {Array.from({ length }).map((_, index) => (
                <motion.div
                    key={index}
                    whileFocus={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <input
                        ref={(el) => {
                            inputRefs.current[index] = el;
                        }}
                        type={type === 'number' ? 'text' : type}
                        inputMode={type === 'number' ? 'numeric' : 'text'}
                        maxLength={1}
                        value={values[index]}
                        onChange={(e) => handleChange(index, e)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        disabled={disabled}
                        placeholder={placeholder}
                        className={cn(
                            "bg-surface-primary border border-border-primary text-text-primary text-center font-medium transition-apple focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 disabled:opacity-40 disabled:cursor-not-allowed",
                            sizeStyles[size],
                            error && "border-status-error focus:border-status-error focus:ring-status-error/20 text-status-error"
                        )}
                    />
                </motion.div>
            ))}
        </div>
    );
};

SegmentedInput.displayName = 'SegmentedInput';

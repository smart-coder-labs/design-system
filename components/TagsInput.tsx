import React, { useState, useRef } from 'react';
import { X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Label } from './Label';

/* ========================================
   TYPES
   ======================================== */

export interface TagsInputProps {
    value?: string[];
    onChange?: (tags: string[]) => void;
    placeholder?: string;
    label?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    maxTags?: number;
    className?: string;
    onBlur?: () => void;
}

/* ========================================
   TAGS INPUT COMPONENT
   ======================================== */

export const TagsInput: React.FC<TagsInputProps> = ({
    value = [],
    onChange,
    placeholder = 'Add tags...',
    label,
    error,
    helperText,
    disabled = false,
    maxTags,
    className,
    onBlur,
}) => {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addTag();
        } else if (e.key === 'Backspace' && inputValue === '' && value.length > 0) {
            removeTag(value.length - 1);
        }
    };

    const addTag = () => {
        const trimmedInput = inputValue.trim();
        if (trimmedInput && !value.includes(trimmedInput)) {
            if (maxTags && value.length >= maxTags) return;
            onChange?.([...value, trimmedInput]);
            setInputValue('');
        }
    };

    const removeTag = (index: number) => {
        if (disabled) return;
        const newTags = [...value];
        newTags.splice(index, 1);
        onChange?.(newTags);
    };

    const handleContainerClick = () => {
        if (!disabled) {
            inputRef.current?.focus();
        }
    };

    return (
        <div className={cn("w-full space-y-2", className)}>
            {label && (
                <Label className="mb-2">
                    {label}
                </Label>
            )}

            <div
                onClick={handleContainerClick}
                className={cn(
                    "flex flex-wrap items-center gap-2 w-full min-h-[40px] px-3 py-2 rounded-xl border bg-surface-primary text-text-primary transition-all cursor-text",
                    isFocused ? "ring-2 ring-accent-blue/20 border-accent-blue" : "border-border-primary",
                    error ? "border-status-error focus-within:border-status-error focus-within:ring-status-error/20" : "",
                    disabled ? "opacity-50 cursor-not-allowed bg-surface-secondary" : ""
                )}
            >
                <AnimatePresence mode="popLayout">
                    {value.map((tag, index) => (
                        <motion.span
                            key={`${tag}-${index}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            layout
                            className={cn(
                                "inline-flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium bg-surface-tertiary text-text-primary",
                                disabled && "bg-surface-secondary text-text-secondary"
                            )}
                        >
                            {tag}
                            {!disabled && (
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeTag(index);
                                    }}
                                    className="p-0.5 rounded-full hover:bg-surface-secondary text-text-tertiary hover:text-text-primary transition-colors focus:outline-none"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            )}
                        </motion.span>
                    ))}
                </AnimatePresence>

                <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                        setIsFocused(false);
                        addTag(); // Add tag on blur if there's input
                        onBlur?.();
                    }}
                    disabled={disabled}
                    placeholder={value.length === 0 ? placeholder : ''}
                    className="flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm placeholder:text-text-tertiary disabled:cursor-not-allowed"
                />
            </div>

            {(error || helperText) && (
                <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                        "text-sm",
                        error ? "text-status-error" : "text-text-secondary"
                    )}
                >
                    {error || helperText}
                </motion.p>
            )}
        </div>
    );
};

TagsInput.displayName = 'TagsInput';

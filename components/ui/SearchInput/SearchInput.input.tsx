"use client";

import React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Spinner } from '../Spinner';
import type { SearchInputInputProps } from './SearchInput.types';
import { useSearchInputContext } from './SearchInput.context';

export const SearchInputInput = React.forwardRef<HTMLInputElement, SearchInputInputProps>(
    ({ value, onChange, onSearch, onClear, isLoading = false, placeholder, disabled, id, onFocus, onBlur, onKeyDown, className, ...props }, ref) => {
        const { isFocused, setIsFocused } = useSearchInputContext();

        const handleClear = () => {
            onChange('');
            onClear?.();
            (ref as React.RefObject<HTMLInputElement>)?.current?.focus();
        };

        const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                onSearch?.(String(value));
            }
            onKeyDown?.(e);
        };

        return (
            <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none">
                    <Search className={cn("w-4 h-4 transition-colors", isFocused && "text-accent-blue")} />
                </div>

                <input
                    ref={ref}
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={(e) => {
                        setIsFocused(true);
                        onFocus?.(e);
                    }}
                    onBlur={(e) => {
                        setIsFocused(false);
                        onBlur?.(e);
                    }}
                    disabled={disabled}
                    placeholder={placeholder}
                    id={id}
                    className={cn(
                        "w-full h-10 pl-9 pr-10 rounded-xl border bg-surface-primary text-text-primary transition-all",
                        "placeholder:text-text-tertiary",
                        "focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue",
                        "disabled:opacity-50 disabled:cursor-not-allowed",
                        "border-border-primary",
                        className
                    )}
                    {...props}
                />

                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                    <AnimatePresence mode="wait">
                        {isLoading ? (
                            <motion.div
                                key="loader"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                            >
                                <Spinner size="sm" color="blue" />
                            </motion.div>
                        ) : value && String(value).length > 0 ? (
                            <motion.button
                                key="clear"
                                type="button"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                onClick={handleClear}
                                disabled={disabled}
                                className="p-0.5 rounded-full hover:bg-surface-tertiary text-text-tertiary hover:text-text-primary transition-colors focus:outline-none"
                                aria-label="Clear search"
                            >
                                <X className="w-3.5 h-3.5" />
                            </motion.button>
                        ) : null}
                    </AnimatePresence>
                </div>
            </div>
        );
    }
);
SearchInputInput.displayName = 'SearchInputInput';
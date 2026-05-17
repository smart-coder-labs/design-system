"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { cn } from '../../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { Spinner } from '../Spinner';
import { Label } from '../Label';
import {
    searchInputVariants,
    SearchInputProps,
} from './SearchInput.types';
import { SearchInputContext } from './SearchInput.context';
import { useSearchInputContext } from './SearchInput.context';

/* ========================================
   HOOKS
   ======================================== */

function useDebounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
    callback: T,
    delay: number
): T {
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return useCallback(
        ((...args: Parameters<T>) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
                callback(...args);
            }, delay);
        }) as T,
        [callback, delay]
    );
}

/* ========================================
   MAIN COMPONENT
   ======================================== */

const SearchInputRoot = React.forwardRef<HTMLDivElement, SearchInputProps>(
    (
        {
            value,
            onChange,
            onSearch,
            onClear,
            isLoading = false,
            debounceTime = 0,
            className,
            containerClassName,
            placeholder = 'Search...',
            disabled,
            label,
            id,
            onFocus,
            onBlur,
            onKeyDown,
            children,
            size,
            variant,
        },
        ref
    ) => {
        const inputRef = useRef<HTMLInputElement>(null);
        const [isFocused, setIsFocused] = useState(false);
        const [localValue, setLocalValue] = useState(value);

        // Sync external value
        useEffect(() => {
            setLocalValue(value);
        }, [value]);

        // Debounced onSearch
        const debouncedSearch = useDebounce(
            (val: string) => {
                if (val.trim()) {
                    onSearch?.(val);
                }
            },
            debounceTime
        );

        const handleChange = (newValue: string) => {
            setLocalValue(newValue);
            onChange(newValue);
            if (debounceTime > 0) {
                debouncedSearch(newValue);
            }
        };

        const handleClear = () => {
            setLocalValue('');
            onChange('');
            onClear?.();
            inputRef.current?.focus();
        };

        const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(true);
            onFocus?.(e);
        };

        const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(false);
            onBlur?.(e);
        };

        const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter' && debounceTime === 0) {
                onSearch?.(localValue);
            }
            onKeyDown?.(e);
        };

        const contextValue = {
            isFocused,
            setIsFocused,
            isLoading,
            disabled,
            inputRef,
        };

        // Render with compound components
        if (children) {
            return (
                <SearchInputContext.Provider value={contextValue}>
                    <div ref={ref} className={cn("relative w-full space-y-2", containerClassName)}>
                        {label && (
                            <Label htmlFor={id} className="mb-2">
                                {label}
                            </Label>
                        )}
                        {/* Input is rendered by consumer via SearchInput.Input */}
                        {children}
                    </div>
                </SearchInputContext.Provider>
            );
        }

        // Default render (backwards compatible)
        return (
            <SearchInputContext.Provider value={contextValue}>
                <div ref={ref} className={cn("relative w-full space-y-2", containerClassName)}>
                    {label && (
                        <Label htmlFor={id} className="mb-2">
                            {label}
                        </Label>
                    )}
                    <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none">
                            <Search className={cn("w-4 h-4 transition-colors", isFocused && "text-accent-blue")} />
                        </div>

                        <input
                            ref={inputRef}
                            type="text"
                            value={localValue}
                            onChange={(e) => handleChange(e.target.value)}
                            onKeyDown={handleKeyDown}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            disabled={disabled}
                            placeholder={placeholder}
                            id={id}
                            className={cn(
                                searchInputVariants({ size, variant }),
                                className,
                                "placeholder:text-text-tertiary",
                                "focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue",
                                "border-border-primary"
                            )}
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
                                ) : localValue && localValue.length > 0 ? (
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
                </div>
            </SearchInputContext.Provider>
        );
    }
);

SearchInputRoot.displayName = 'SearchInput';

/* ========================================
   COMPOUND COMPONENT ATTACHMENTS
   ======================================== */

import { SearchInputInput } from './SearchInput.input';
import { SearchInputDropdown } from './SearchInput.dropdown';
import { SearchInputSection } from './SearchInput.section';
import { SearchInputItem } from './SearchInput.item';
import { SearchInputItemContent } from './SearchInput.itemContent';
import { SearchInputTrailingBadge } from './SearchInput.trailingBadge';
import { SearchInputItemIcon } from './SearchInput.itemIcon';

type SearchInputComponent = typeof SearchInputRoot & {
    Input: typeof SearchInputInput;
    Dropdown: typeof SearchInputDropdown;
    Section: typeof SearchInputSection;
    Item: typeof SearchInputItem;
    ItemContent: typeof SearchInputItemContent;
    TrailingBadge: typeof SearchInputTrailingBadge;
    ItemIcon: typeof SearchInputItemIcon;
};

const SearchInput = SearchInputRoot as SearchInputComponent;

SearchInput.Input = SearchInputInput;
SearchInput.Dropdown = SearchInputDropdown;
SearchInput.Section = SearchInputSection;
SearchInput.Item = SearchInputItem;
SearchInput.ItemContent = SearchInputItemContent;
SearchInput.TrailingBadge = SearchInputTrailingBadge;
SearchInput.ItemIcon = SearchInputItemIcon;

export { SearchInput };
export { searchInputVariants } from './SearchInput.types';
export type { SearchInputComponent, SearchInputProps };
"use client";

import React, { useRef, useState, createContext, useContext } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Spinner } from '../Spinner';
import { Label } from '../Label';

/* ========================================
   CONTEXT TYPES
   ======================================== */

type SearchInputContextValue = {
    isFocused: boolean;
    setIsFocused: (focused: boolean) => void;
    isLoading: boolean;
    disabled?: boolean;
    inputRef: React.RefObject<HTMLInputElement | null>;
};

const SearchInputContext = createContext<SearchInputContextValue | null>(null);

function useSearchInputContext() {
    const context = useContext(SearchInputContext);
    if (!context) {
        throw new Error("SearchInput compound components must be used within SearchInput");
    }
    return context;
}

/* ========================================
   TYPE DEFINITIONS
   ======================================== */

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
    value: string;
    onChange: (value: string) => void;
    onSearch?: (value: string) => void;
    onClear?: () => void;
    isLoading?: boolean;
    debounceTime?: number;
    containerClassName?: string;
    label?: string;
    children?: React.ReactNode;
}

/* ========================================
   COMPOUND COMPONENTS
   ======================================== */

/* -------- SearchInput.Input -------- */

export interface SearchInputInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    onChange: (value: string) => void;
    onSearch?: (value: string) => void;
    onClear?: () => void;
    isLoading?: boolean;
    debounceTime?: number;
    placeholder?: string;
}

export const SearchInputInput: React.FC<SearchInputInputProps> = ({
    value,
    onChange,
    onSearch,
    onClear,
    isLoading = false,
    debounceTime = 0,
    placeholder = 'Search...',
    disabled,
    id,
    onFocus,
    onBlur,
    onKeyDown,
    className,
    ...props
}) => {
    const { isFocused, setIsFocused, inputRef } = useSearchInputContext();

    const handleClear = () => {
        onChange('');
        onClear?.();
        inputRef.current?.focus();
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
                <Search className={cn(
                    "w-4 h-4 transition-colors",
                    isFocused && "text-accent-blue"
                )} />
            </div>

            <input
                ref={inputRef}
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
                                className="flex items-center justify-center"
                            >
                                <Spinner size="sm" color="blue" />
                            </motion.div>
                        ) : String(value).length > 0 ? (
                        <motion.button
                            key="clear"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={handleClear}
                            disabled={disabled}
                            className="p-0.5 rounded-full hover:bg-surface-tertiary text-text-tertiary hover:text-text-primary transition-colors focus:outline-none"
                            type="button"
                            aria-label="Clear search"
                        >
                            <X className="w-3.5 h-3.5" />
                        </motion.button>
                    ) : null}
                </AnimatePresence>
            </div>
        </div>
    );
};

SearchInputInput.displayName = 'SearchInputInput';

/* -------- SearchInput.Dropdown -------- */

export interface SearchInputDropdownProps {
    show: boolean;
    hasResults?: boolean;
    query?: string;
    children: React.ReactNode;
    className?: string;
}

export const SearchInputDropdown: React.FC<SearchInputDropdownProps> = ({
    show,
    hasResults = false,
    query,
    children,
    className
}) => {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className={cn(
                        "absolute top-full left-0 right-0 mt-1 rounded-lg border shadow-2xl z-50 overflow-hidden",
                        className
                    )}
                    style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        borderColor: 'var(--color-border-primary)',
                    }}
                >
                    {!hasResults && query && (
                        <div 
                            className="px-4 py-3 text-sm"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            No results for "{query}"
                        </div>
                    )}
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

SearchInputDropdown.displayName = 'SearchInputDropdown';

/* -------- SearchInput.Section -------- */

export interface SearchInputSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export const SearchInputSection: React.FC<SearchInputSectionProps> = ({
    title,
    children,
    className
}) => {
    return (
        <div className={cn(className)}>
            <div 
                className="px-3 py-1.5 text-xs font-medium uppercase tracking-wider"
                style={{ 
                    color: 'var(--color-text-tertiary)', 
                    borderBottom: '1px solid var(--color-border-primary)' 
                }}
            >
                {title}
            </div>
            {children}
        </div>
    );
};

SearchInputSection.displayName = 'SearchInputSection';

/* -------- SearchInput.Item -------- */

export interface SearchInputItemProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const SearchInputItem: React.FC<SearchInputItemProps> = ({
    children,
    onClick,
    className
}) => {
    const { disabled } = useSearchInputContext();

    if (onClick) {
        return (
            <button
                onClick={onClick}
                disabled={disabled}
                className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 text-left transition-colors",
                    disabled && "opacity-50 cursor-not-allowed",
                    className
                )}
            >
                {children}
            </button>
        );
    }

    return (
        <div className={cn("flex items-center gap-3 px-3 py-2.5", className)}>
            {children}
        </div>
    );
};

SearchInputItem.displayName = 'SearchInputItem';

/* -------- SearchInput.ItemContent -------- */

export interface SearchInputItemContentProps {
    label: string;
    subtitle?: string;
    className?: string;
}

export const SearchInputItemContent: React.FC<SearchInputItemContentProps> = ({
    label,
    subtitle,
    className
}) => {
    return (
        <div className={cn("flex-1 min-w-0", className)}>
            <div 
                className="text-sm truncate" 
                style={{ color: 'var(--color-text-primary)' }}
            >
                {label}
            </div>
            {subtitle && (
                <div 
                    className="text-xs truncate" 
                    style={{ color: 'var(--color-text-tertiary)' }}
                >
                    {subtitle}
                </div>
            )}
        </div>
    );
};

SearchInputItemContent.displayName = 'SearchInputItemContent';

/* -------- SearchInput.PriorityBadge -------- */

export interface SearchInputPriorityBadgeProps {
    priority: 'P0' | 'P1' | 'P2' | 'P3';
    className?: string;
}

export const SearchInputPriorityBadge: React.FC<SearchInputPriorityBadgeProps> = ({
    priority,
    className
}) => {
    const badgeClass = cn(
        "text-xs font-mono px-1.5 py-0.5 rounded",
        priority === 'P0' ? "text-red-400 bg-red-900/30" :
        priority === 'P1' ? "text-yellow-400 bg-yellow-900/30" :
        priority === 'P2' ? "text-gray-400 bg-gray-800/50" :
        "text-gray-500 bg-gray-800/30",
        className
    );

    return (
        <span className={badgeClass}>
            {priority}
        </span>
    );
};

SearchInputPriorityBadge.displayName = 'SearchInputPriorityBadge';

/* -------- SearchInput.ResourceIcon -------- */

export interface SearchInputResourceIconProps {
    type: 'paper' | 'book' | 'course' | 'website';
    className?: string;
}

export const SearchInputResourceIcon: React.FC<SearchInputResourceIconProps> = ({
    type,
    className
}) => {
    const iconMap = {
        paper: '📄',
        book: '📚',
        course: '🎓',
        website: '💻'
    };

    return (
        <span className={cn("text-base", className)}>
            {iconMap[type]}
        </span>
    );
};

SearchInputResourceIcon.displayName = 'SearchInputResourceIcon';

/* ========================================
   MAIN COMPONENT
   ======================================== */

export const SearchInput: React.FC<SearchInputProps> = ({
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
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    const contextValue: SearchInputContextValue = {
        isFocused,
        setIsFocused,
        isLoading,
        disabled,
        inputRef: inputRef as React.RefObject<HTMLInputElement | null>,
    };

    const handleClear = () => {
        onChange('');
        onClear?.();
        inputRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch?.(value);
        }
        onKeyDown?.(e);
    };

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onFocus?.(e);
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        onBlur?.(e);
    };

    // If children are provided, render compound components pattern
    if (children) {
        return (
            <SearchInputContext.Provider value={contextValue}>
                <div className={cn("relative w-full space-y-2", containerClassName)}>
                    {label && (
                        <Label htmlFor={id} className="mb-2">
                            {label}
                        </Label>
                    )}
                    <SearchInputInput
                        value={value}
                        onChange={onChange}
                        onSearch={onSearch}
                        onClear={onClear}
                        isLoading={isLoading}
                        debounceTime={debounceTime}
                        placeholder={placeholder}
                        disabled={disabled}
                        id={id}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        onKeyDown={handleKeyDown}
                        className={className}
                    />
                    {children}
                </div>
            </SearchInputContext.Provider>
        );
    }

    // Default render without children (backwards compatible)
    return (
        <SearchInputContext.Provider value={contextValue}>
            <div className={cn("relative w-full space-y-2", containerClassName)}>
                {label && (
                    <Label htmlFor={id} className="mb-2">
                        {label}
                    </Label>
                )}
                <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none">
                        <Search className={cn(
                            "w-4 h-4 transition-colors",
                            isFocused && "text-accent-blue"
                        )} />
                    </div>

                    <input
                        ref={inputRef}
                        type="text"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
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
                    />

                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                        <AnimatePresence mode="wait">
                            {isLoading ? (
                                <motion.div
                                    key="loader"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="flex items-center justify-center"
                                >
                                    <Spinner size="sm" color="blue" />
                                </motion.div>
                            ) : value.length > 0 ? (
                                <motion.button
                                    key="clear"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    onClick={handleClear}
                                    disabled={disabled}
                                    className="p-0.5 rounded-full hover:bg-surface-tertiary text-text-tertiary hover:text-text-primary transition-colors focus:outline-none"
                                    type="button"
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
};

// Type for the compound component
type SearchInputComponent = React.FC<SearchInputProps> & {
    Input: typeof SearchInputInput;
    Dropdown: typeof SearchInputDropdown;
    Section: typeof SearchInputSection;
    Item: typeof SearchInputItem;
    ItemContent: typeof SearchInputItemContent;
    PriorityBadge: typeof SearchInputPriorityBadge;
    ResourceIcon: typeof SearchInputResourceIcon;
};

SearchInput.displayName = 'SearchInput';

// Attach compound components
(SearchInput as SearchInputComponent).Input = SearchInputInput;
(SearchInput as SearchInputComponent).Dropdown = SearchInputDropdown;
(SearchInput as SearchInputComponent).Section = SearchInputSection;
(SearchInput as SearchInputComponent).Item = SearchInputItem;
(SearchInput as SearchInputComponent).ItemContent = SearchInputItemContent;
(SearchInput as SearchInputComponent).PriorityBadge = SearchInputPriorityBadge;
(SearchInput as SearchInputComponent).ResourceIcon = SearchInputResourceIcon;

export type { SearchInputComponent };
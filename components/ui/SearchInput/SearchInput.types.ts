import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

/* ========================================
   VARIANTS (cva)
   ======================================== */

export const searchInputVariants = cva(
    "w-full rounded-xl border bg-surface-primary text-text-primary transition-all",
    {
        variants: {
            size: {
                sm: "h-8 text-sm px-7",
                md: "h-10 text-base pl-9 pr-10",
                lg: "h-12 text-lg pl-10 pr-12",
            },
            variant: {
                default: "border-border-primary focus:border-accent-blue",
                error: "border-status-error focus:border-status-error",
            },
        },
        defaultVariants: {
            size: "md",
            variant: "default",
        },
    }
);

/* ========================================
   MAIN COMPONENT TYPES
   ======================================== */

export interface SearchInputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value'>,
        VariantProps<typeof searchInputVariants> {
    value: string;
    onChange: (value: string) => void;
    onSearch?: (value: string) => void;
    onClear?: () => void;
    isLoading?: boolean;
    debounceTime?: number;
    containerClassName?: string;
    label?: string;
    children?: React.ReactNode;
    /** Called when Escape is pressed so the consumer can close the results popup */
    onClose?: () => void;
}

/* ========================================
   COMPOUND COMPONENT TYPES
   ======================================== */

export interface SearchInputInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    onChange: (value: string) => void;
    onSearch?: (value: string) => void;
    onClear?: () => void;
    isLoading?: boolean;
    debounceTime?: number;
    placeholder?: string;
}

export interface SearchInputDropdownProps {
    show: boolean;
    hasResults?: boolean;
    query?: string;
    children: React.ReactNode;
    className?: string;
    maxHeight?: string;
}

export interface SearchInputSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export interface SearchInputItemProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export interface SearchInputItemContentProps {
    label: string;
    subtitle?: string;
    className?: string;
}

export interface SearchInputTrailingBadgeProps {
    /** Badge content - can be text, icon, or any React node */
    children: React.ReactNode;
    /** Visual variant for the badge */
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
    className?: string;
}

export interface SearchInputItemIconProps {
    /** Resource type - renders predefined icon */
    type?: 'paper' | 'book' | 'course' | 'website';
    /** Custom icon node (overrides type) */
    icon?: React.ReactNode;
    className?: string;
}

/* ========================================
   CONTEXT TYPES
   ======================================== */

export type SearchInputContextValue = {
    isFocused: boolean;
    setIsFocused: (focused: boolean) => void;
    isLoading: boolean;
    disabled?: boolean;
    inputRef: React.RefObject<HTMLInputElement | null>;
    /** Index of the keyboard-highlighted option, -1 when nothing is highlighted */
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    /** Stable id of the results popup (`role="listbox"` / `aria-controls`) */
    listboxId: string;
    /** Builds the DOM id of the option at `index` (used by `aria-activedescendant`) */
    getOptionId: (index: number) => string;
    /** Registers an option element in DOM order and returns its flat index */
    registerOption: (element: HTMLElement) => number;
    /** Removes an option element from the registry */
    unregisterOption: (element: HTMLElement) => void;
    /** Current flat index of an already registered option element (-1 if unknown) */
    getOptionIndex: (element: HTMLElement) => number;
    /** Bumped whenever the registry changes so items can refresh their index */
    optionsVersion: number;
    /** Whether the results popup is open (reported by SearchInput.Dropdown) */
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    /** Combobox keyboard navigation; returns true when the event was consumed */
    handleKeyNavigation: (event: React.KeyboardEvent<HTMLInputElement>) => boolean;
};
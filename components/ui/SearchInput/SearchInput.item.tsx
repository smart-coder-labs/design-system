"use client";

import React from 'react';
import { cn } from '../../../lib/utils';
import type { SearchInputItemProps } from './SearchInput.types';
import { useSearchInputContext } from './SearchInput.context';

export const SearchInputItem: React.FC<SearchInputItemProps> = ({
    children,
    onClick,
    className
}) => {
    const { disabled } = useSearchInputContext();

    if (onClick) {
        return (
            <button
                type="button"
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
"use client";

import React from 'react';
import { cn } from '../../../lib/utils';
import type { SearchInputTrailingBadgeProps } from './SearchInput.types';

const variantClasses = {
    default: "text-gray-400 bg-gray-800/50",
    primary: "text-blue-400 bg-blue-900/30",
    success: "text-green-400 bg-green-900/30",
    warning: "text-yellow-400 bg-yellow-900/30",
    error: "text-red-400 bg-red-900/30",
};

export const SearchInputTrailingBadge: React.FC<SearchInputTrailingBadgeProps> = ({
    children,
    variant = 'default',
    className
}) => {
    return (
        <span className={cn(
            "text-xs font-mono px-1.5 py-0.5 rounded",
            variantClasses[variant],
            className
        )}>
            {children}
        </span>
    );
};
SearchInputTrailingBadge.displayName = 'SearchInputTrailingBadge';
"use client";

import React from 'react';
import { cn } from '../../../lib/utils';
import type { SearchInputItemContentProps } from './SearchInput.types';

export const SearchInputItemContent: React.FC<SearchInputItemContentProps> = ({
    label,
    subtitle,
    className
}) => {
    return (
        <div className={cn("flex-1 min-w-0", className)}>
            <div className="text-sm truncate" style={{ color: 'var(--color-text-primary)' }}>
                {label}
            </div>
            {subtitle && (
                <div className="text-xs truncate" style={{ color: 'var(--color-text-tertiary)' }}>
                    {subtitle}
                </div>
            )}
        </div>
    );
};
SearchInputItemContent.displayName = 'SearchInputItemContent';
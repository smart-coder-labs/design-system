"use client";

import React from 'react';
import { cn } from '../../../lib/utils';
import type { SearchInputSectionProps } from './SearchInput.types';

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
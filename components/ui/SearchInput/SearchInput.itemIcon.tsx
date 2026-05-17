"use client";

import React from 'react';
import { cn } from '../../../lib/utils';
import type { SearchInputItemIconProps } from './SearchInput.types';

const defaultIcons: Record<string, string> = {
    paper: '📄',
    book: '📚',
    course: '🎓',
    website: '💻'
};

export const SearchInputItemIcon: React.FC<SearchInputItemIconProps> = ({
    type,
    icon,
    className
}) => {
    return (
        <span className={cn("text-base", className)}>
            {icon ?? (type ? defaultIcons[type] : null)}
        </span>
    );
};
SearchInputItemIcon.displayName = 'SearchInputItemIcon';
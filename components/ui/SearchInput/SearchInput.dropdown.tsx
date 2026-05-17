"use client";

import React from 'react';
import { cn } from '../../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import type { SearchInputDropdownProps } from './SearchInput.types';

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
                        <div className="px-4 py-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
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
"use client";

import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export interface PromptSuggestion {
    id: string;
    text: string;
    icon?: React.ReactNode;
}

export interface PromptSuggestionChipsProps extends React.HTMLAttributes<HTMLDivElement> {
    suggestions: PromptSuggestion[];
    onSuggestionClick?: (suggestion: PromptSuggestion) => void;
    maxVisible?: number;
    variant?: 'default' | 'compact';
    className?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

export const PromptSuggestionChips = React.forwardRef<HTMLDivElement, PromptSuggestionChipsProps>(
    (
        {
            suggestions,
            onSuggestionClick,
            maxVisible = 4,
            variant = 'default',
            className,
            ...props
        },
        ref
    ) => {
        const visibleSuggestions = suggestions.slice(0, maxVisible);

        if (suggestions.length === 0) return null;

        return (
            <div
                ref={ref}
                className={cn(
                    "flex flex-wrap gap-2",
                    variant === 'compact' && "gap-1.5",
                    className
                )}
                {...props}
            >
                {visibleSuggestions.map((suggestion, index) => (
                    <motion.button
                        key={suggestion.id}
                        onClick={() => onSuggestionClick?.(suggestion)}
                        className={cn(
                            "inline-flex items-center gap-2 px-3 py-1.5 rounded-full",
                            "bg-surface-secondary border border-border-primary",
                            "text-sm font-medium text-text-primary",
                            "hover:bg-surface-tertiary hover:border-border-secondary",
                            "transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue",
                            variant === 'compact' && "px-2.5 py-1 text-xs"
                        )}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {suggestion.icon || <Sparkles className="w-3.5 h-3.5 text-accent-blue" />}
                        <span>{suggestion.text}</span>
                    </motion.button>
                ))}
            </div>
        );
    }
);

PromptSuggestionChips.displayName = 'PromptSuggestionChips';


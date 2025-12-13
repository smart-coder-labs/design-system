"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
/* ========================================
   COMPONENT
   ======================================== */
export const PromptSuggestionChips = React.forwardRef(({ suggestions, onSuggestionClick, maxVisible = 4, variant = 'default', className, ...props }, ref) => {
    const visibleSuggestions = suggestions.slice(0, maxVisible);
    if (suggestions.length === 0)
        return null;
    return (_jsx("div", { ref: ref, className: cn("flex flex-wrap gap-2", variant === 'compact' && "gap-1.5", className), ...props, children: visibleSuggestions.map((suggestion, index) => (_jsxs(motion.button, { onClick: () => onSuggestionClick?.(suggestion), className: cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-full", "bg-surface-secondary border border-border-primary", "text-sm font-medium text-text-primary", "hover:bg-surface-tertiary hover:border-border-secondary", "transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue", variant === 'compact' && "px-2.5 py-1 text-xs"), initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { delay: index * 0.05 }, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: [suggestion.icon || _jsx(Sparkles, { className: "w-3.5 h-3.5 text-accent-blue" }), _jsx("span", { children: suggestion.text })] }, suggestion.id))) }));
});
PromptSuggestionChips.displayName = 'PromptSuggestionChips';
//# sourceMappingURL=PromptSuggestionChips.js.map
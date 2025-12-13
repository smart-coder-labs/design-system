import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../lib/utils';
export const SectionHeader = React.forwardRef(({ className, title, description, actions, size = 'md', divider = false, ...props }, ref) => {
    const titleSizes = {
        sm: 'text-lg',
        md: 'text-2xl',
        lg: 'text-3xl',
    };
    const descSizes = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
    };
    return (_jsx("div", { ref: ref, className: cn('flex flex-col gap-4 w-full', divider && 'border-b border-border-primary pb-4 mb-4', className), ...props, children: _jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4", children: [_jsxs("div", { className: "space-y-1 flex-1", children: [_jsx("h2", { className: cn('font-bold text-text-primary tracking-tight', titleSizes[size]), children: title }), description && (_jsx("p", { className: cn('text-text-secondary leading-relaxed', descSizes[size]), children: description }))] }), actions && (_jsx("div", { className: "flex items-center gap-2 flex-shrink-0 mt-1 sm:mt-0", children: actions }))] }) }));
});
SectionHeader.displayName = 'SectionHeader';
//# sourceMappingURL=SectionHeader.js.map
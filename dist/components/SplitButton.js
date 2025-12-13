import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
/* ========================================
   SPLIT BUTTON COMPONENT
   ======================================== */
export const SplitButton = forwardRef(({ label, onClick, actions, variant = 'primary', size = 'md', disabled = false, className, }, ref) => {
    const variants = {
        primary: {
            button: "bg-accent-blue text-white hover:bg-accent-blueHover active:bg-accent-blueActive",
            divider: "bg-white/20",
            container: "",
        },
        secondary: {
            button: "bg-surface-secondary text-text-primary hover:bg-surface-tertiary active:bg-surface-tertiary/80",
            divider: "bg-border-primary",
            container: "border border-border-primary",
        },
        tertiary: {
            button: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary",
            divider: "bg-border-primary",
            container: "border border-border-primary",
        },
    };
    const sizes = {
        sm: {
            button: "h-8 px-3 text-sm",
            icon: "w-3.5 h-3.5",
            dropdown: "w-7",
        },
        md: {
            button: "h-10 px-4 text-base",
            icon: "w-4 h-4",
            dropdown: "w-9",
        },
        lg: {
            button: "h-12 px-5 text-lg",
            icon: "w-5 h-5",
            dropdown: "w-11",
        },
    };
    return (_jsxs("div", { ref: ref, className: cn("inline-flex rounded-xl overflow-hidden shadow-sm", variants[variant].container, className), children: [_jsx(motion.button, { whileTap: { scale: 0.98 }, onClick: onClick, disabled: disabled, className: cn("flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20", variants[variant].button, sizes[size].button, disabled && "opacity-50 cursor-not-allowed"), children: label }), _jsx("div", { className: cn("w-px", variants[variant].divider) }), _jsxs(DropdownMenuPrimitive.Root, { children: [_jsx(DropdownMenuPrimitive.Trigger, { asChild: true, children: _jsx(motion.button, { whileTap: { scale: 0.98 }, disabled: disabled, className: cn("flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20", variants[variant].button, sizes[size].dropdown, disabled && "opacity-50 cursor-not-allowed"), children: _jsx(ChevronDown, { className: sizes[size].icon }) }) }), _jsx(DropdownMenuPrimitive.Portal, { children: _jsx(DropdownMenuPrimitive.Content, { align: "end", sideOffset: 4, className: cn("min-w-[160px] bg-surface-elevated border border-border-primary rounded-xl shadow-lg p-1", "z-dropdown", "animate-in fade-in-0 zoom-in-95"), children: actions.map((action, index) => (_jsxs(DropdownMenuPrimitive.Item, { onClick: action.onClick, disabled: action.disabled, className: cn("flex items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer outline-none transition-colors", "text-text-primary hover:bg-surface-secondary", "focus:bg-surface-secondary", action.disabled && "opacity-50 cursor-not-allowed"), children: [action.icon && _jsx(action.icon, { className: "w-4 h-4" }), action.label] }, index))) }) })] })] }));
});
SplitButton.displayName = 'SplitButton';
//# sourceMappingURL=SplitButton.js.map
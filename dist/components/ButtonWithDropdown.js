import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
/* ========================================
   BUTTON WITH DROPDOWN COMPONENT
   ======================================== */
export const ButtonWithDropdown = forwardRef(({ label, actions, variant = 'primary', size = 'md', disabled = false, className, }, ref) => {
    const variants = {
        primary: "bg-accent-blue text-white hover:bg-accent-blueHover active:bg-accent-blueActive shadow-sm",
        secondary: "bg-surface-secondary text-text-primary hover:bg-surface-tertiary active:bg-surface-tertiary/80 border border-border-primary",
        tertiary: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary",
    };
    const sizes = {
        sm: {
            button: "h-8 px-3 text-sm gap-1.5",
            icon: "w-3.5 h-3.5",
        },
        md: {
            button: "h-10 px-4 text-base gap-2",
            icon: "w-4 h-4",
        },
        lg: {
            button: "h-12 px-5 text-lg gap-2.5",
            icon: "w-5 h-5",
        },
    };
    return (_jsxs(DropdownMenuPrimitive.Root, { children: [_jsx(DropdownMenuPrimitive.Trigger, { asChild: true, children: _jsxs(motion.button, { ref: ref, whileTap: { scale: 0.98 }, disabled: disabled, className: cn("inline-flex items-center justify-center font-medium rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20", variants[variant], sizes[size].button, disabled && "opacity-50 cursor-not-allowed", className), children: [label, _jsx(ChevronDown, { className: sizes[size].icon })] }) }), _jsx(DropdownMenuPrimitive.Portal, { children: _jsx(DropdownMenuPrimitive.Content, { align: "start", sideOffset: 4, className: cn("min-w-[160px] bg-surface-elevated border border-border-primary rounded-xl shadow-lg p-1", "z-dropdown", "animate-in fade-in-0 zoom-in-95"), children: actions.map((action, index) => (_jsxs(DropdownMenuPrimitive.Item, { onClick: action.onClick, disabled: action.disabled, className: cn("flex items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer outline-none transition-colors", "text-text-primary hover:bg-surface-secondary", "focus:bg-surface-secondary", action.disabled && "opacity-50 cursor-not-allowed"), children: [action.icon && _jsx(action.icon, { className: "w-4 h-4" }), action.label] }, index))) }) })] }));
});
ButtonWithDropdown.displayName = 'ButtonWithDropdown';
//# sourceMappingURL=ButtonWithDropdown.js.map
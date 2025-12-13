import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
/* ========================================
   CONTEXT
   ======================================== */
const TabsContext = React.createContext({});
/* ========================================
   COMPONENTS
   ======================================== */
export const Tabs = ({ defaultValue, value, onValueChange, children, className = '', }) => {
    // Manage state to support animations
    const [activeValue, setActiveValue] = React.useState(value || defaultValue);
    // Sync with controlled value if provided
    React.useEffect(() => {
        if (value !== undefined) {
            setActiveValue(value);
        }
    }, [value]);
    const handleValueChange = (newValue) => {
        if (value === undefined) {
            setActiveValue(newValue);
        }
        onValueChange?.(newValue);
    };
    return (_jsx(TabsContext.Provider, { value: { activeValue }, children: _jsx(TabsPrimitive.Root, { defaultValue: defaultValue, value: value, onValueChange: handleValueChange, className: className, children: children }) }));
};
export const TabsList = ({ children, className = '', variant = 'default', }) => {
    // Pass variant to context for Triggers to know what style to use
    // We need to clone the context provider or just pass it down? 
    // Actually TabsTrigger needs to know the variant. 
    // Let's wrap children in another provider or just cloneElement?
    // Context is cleaner.
    // We need to merge with existing context (activeValue)
    const context = React.useContext(TabsContext);
    const variantStyles = {
        default: 'inline-flex items-center gap-1 border-b border-border-primary w-full justify-start',
        segmented: 'inline-flex items-center gap-1 p-1 bg-surface-secondary rounded-xl',
    };
    return (_jsx(TabsContext.Provider, { value: { ...context, variant }, children: _jsx(TabsPrimitive.List, { className: cn(variantStyles[variant], className), children: children }) }));
};
export const TabsTrigger = ({ value, children, disabled = false, className = '', }) => {
    const { activeValue, variant } = React.useContext(TabsContext);
    const isSelected = activeValue === value;
    return (_jsxs(TabsPrimitive.Trigger, { value: value, disabled: disabled, className: cn("relative px-4 py-2 text-sm font-medium transition-colors outline-none disabled:opacity-40 disabled:cursor-not-allowed z-10", variant === 'default' && "hover:text-text-primary", variant === 'segmented' && "flex-1 text-center", className), children: [_jsx("span", { className: cn("relative z-20 transition-colors duration-200", isSelected ? "text-text-primary" : "text-text-secondary hover:text-text-primary"), children: children }), isSelected && variant === 'default' && (_jsx(motion.div, { layoutId: "tab-indicator", className: "absolute bottom-0 left-0 right-0 h-0.5 bg-accent-blue rounded-full z-10", initial: false, transition: {
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                    mass: 0.5,
                } })), isSelected && variant === 'segmented' && (_jsx(motion.div, { layoutId: "tab-background", className: "absolute inset-0 bg-surface-primary rounded-lg shadow-sm z-0", initial: false, transition: {
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                    mass: 0.5,
                } }))] }));
};
export const TabsContent = ({ value, children, className = '', }) => (_jsx(TabsPrimitive.Content, { value: value, className: cn("outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 rounded-xl mt-4", className), children: _jsx(motion.div, { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 8 }, transition: {
            duration: 0.2,
            ease: "easeOut",
        }, children: children }) }));
//# sourceMappingURL=Tabs.js.map
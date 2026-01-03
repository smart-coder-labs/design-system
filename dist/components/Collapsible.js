"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { motion } from "framer-motion";
const CollapsibleContext = React.createContext(null);
const Collapsible = React.forwardRef(({ open, defaultOpen = false, onOpenChange, disabled, className, children, ...props }, ref) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const isControlled = open !== undefined;
    const currentOpen = isControlled ? open : internalOpen;
    const baseId = React.useId();
    const toggle = React.useCallback(() => {
        if (disabled)
            return;
        const next = !currentOpen;
        if (!isControlled)
            setInternalOpen(next);
        onOpenChange?.(next);
    }, [currentOpen, disabled, isControlled, onOpenChange]);
    const contextValue = React.useMemo(() => ({ open: !!currentOpen, disabled, triggerId: `${baseId}-trigger`, contentId: `${baseId}-content`, toggle }), [baseId, currentOpen, disabled, toggle]);
    return (_jsx(CollapsibleContext.Provider, { value: contextValue, children: _jsx("div", { ref: ref, "data-state": currentOpen ? "open" : "closed", "data-disabled": disabled ? "" : undefined, className: className, ...props, children: children }) }));
});
Collapsible.displayName = "Collapsible";
const CollapsibleTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
    const context = React.useContext(CollapsibleContext);
    if (!context) {
        throw new Error("CollapsibleTrigger must be used within Collapsible");
    }
    const { open, toggle, triggerId, contentId, disabled } = context;
    return (_jsx("button", { ref: ref, id: triggerId, type: "button", "aria-controls": contentId, "aria-expanded": open, onClick: toggle, disabled: disabled || props.disabled, "data-state": open ? "open" : "closed", "data-disabled": disabled || props.disabled ? "" : undefined, className: className, ...props, children: children }));
});
CollapsibleTrigger.displayName = "CollapsibleTrigger";
const CollapsibleContent = React.forwardRef(({ className, children, ...props }, ref) => {
    const context = React.useContext(CollapsibleContext);
    if (!context) {
        throw new Error("CollapsibleContent must be used within Collapsible");
    }
    const { open, triggerId, contentId, disabled } = context;
    return (_jsx("div", { ref: ref, id: contentId, role: "region", "aria-labelledby": triggerId, "aria-hidden": !open, "data-state": open ? "open" : "closed", "data-disabled": disabled ? "" : undefined, className: className, ...props, children: _jsx(motion.div, { initial: false, animate: { height: open ? "auto" : 0, opacity: open ? 1 : 0 }, transition: { duration: 0.2, ease: "easeInOut" }, style: { overflow: "hidden" }, children: children }) }));
});
CollapsibleContent.displayName = "CollapsibleContent";
export { Collapsible, CollapsibleTrigger, CollapsibleContent };
//# sourceMappingURL=Collapsible.js.map
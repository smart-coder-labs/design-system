"use client";

import * as React from "react";
import { motion } from "framer-motion";

type CollapsibleContextValue = {
    open: boolean;
    disabled?: boolean;
    triggerId: string;
    contentId: string;
    toggle: () => void;
};

const CollapsibleContext = React.createContext<CollapsibleContextValue | null>(null);

export type CollapsibleProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Collapsible = React.forwardRef<HTMLDivElement, CollapsibleProps>(
    ({ open, defaultOpen = false, onOpenChange, disabled, className, children, ...props }, ref) => {
        const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
        const isControlled = open !== undefined;
        const currentOpen = isControlled ? open : internalOpen;

        const baseId = React.useId();

        const toggle = React.useCallback(() => {
            if (disabled) return;
            const next = !currentOpen;
            if (!isControlled) setInternalOpen(next);
            onOpenChange?.(next);
        }, [currentOpen, disabled, isControlled, onOpenChange]);

        const contextValue = React.useMemo<CollapsibleContextValue>(
            () => ({ open: !!currentOpen, disabled, triggerId: `${baseId}-trigger`, contentId: `${baseId}-content`, toggle }),
            [baseId, currentOpen, disabled, toggle]
        );

        return (
            <CollapsibleContext.Provider value={contextValue}>
                <div
                    ref={ref}
                    data-state={currentOpen ? "open" : "closed"}
                    data-disabled={disabled ? "" : undefined}
                    className={className}
                    {...props}
                >
                    {children}
                </div>
            </CollapsibleContext.Provider>
        );
    }
);
Collapsible.displayName = "Collapsible";

export type CollapsibleTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const CollapsibleTrigger = React.forwardRef<HTMLButtonElement, CollapsibleTriggerProps>(
    ({ className, children, ...props }, ref) => {
        const context = React.useContext(CollapsibleContext);
        if (!context) {
            throw new Error("CollapsibleTrigger must be used within Collapsible");
        }

        const { open, toggle, triggerId, contentId, disabled } = context;

        return (
            <button
                ref={ref}
                id={triggerId}
                type="button"
                aria-controls={contentId}
                aria-expanded={open}
                onClick={toggle}
                disabled={disabled || props.disabled}
                data-state={open ? "open" : "closed"}
                data-disabled={disabled || props.disabled ? "" : undefined}
                className={className}
                {...props}
            >
                {children}
            </button>
        );
    }
);
CollapsibleTrigger.displayName = "CollapsibleTrigger";

export type CollapsibleContentProps = React.HTMLAttributes<HTMLDivElement>;

const CollapsibleContent = React.forwardRef<HTMLDivElement, CollapsibleContentProps>(
    ({ className, children, ...props }, ref) => {
        const context = React.useContext(CollapsibleContext);
        if (!context) {
            throw new Error("CollapsibleContent must be used within Collapsible");
        }

        const { open, triggerId, contentId, disabled } = context;

        return (
            <div
                ref={ref}
                id={contentId}
                role="region"
                aria-labelledby={triggerId}
                aria-hidden={!open}
                data-state={open ? "open" : "closed"}
                data-disabled={disabled ? "" : undefined}
                className={className}
                {...props}
            >
                <motion.div
                    initial={false}
                    animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                >
                    {children}
                </motion.div>
            </div>
        );
    }
);
CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleTrigger, CollapsibleContent };

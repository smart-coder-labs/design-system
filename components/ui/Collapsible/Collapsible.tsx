"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";
import type { CollapsibleProps } from "./Collapsible.types";

type CollapsibleContextValue = {
    open: boolean;
    disabled?: boolean;
    triggerId: string;
    contentId: string;
    toggle: () => void;
};

const CollapsibleContext = React.createContext<CollapsibleContextValue | null>(null);

const Collapsible = React.forwardRef<HTMLDivElement, CollapsibleProps>(
    ({ open, defaultOpen = false, onOpenChange, disabled, variant = 'default', className, children, ...props }, ref) => {
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
                    className={cn(
                        variant === 'glasphormism'
                            ? "bg-surface-glass/40 backdrop-blur-md border border-border-primary/50 rounded-xl p-3 shadow-sm"
                            : "border border-border-primary rounded-lg p-3 bg-surface-primary shadow-sm",
                        className
                    )}
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
                className={cn("w-full text-left", className)}
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

        // The collapsed subtree must not be visible, focusable or hit-testable.
        // `visibility: hidden` gives that guarantee in CSS, but it has to be applied
        // only *after* the collapse animation has run — and removed synchronously
        // when opening, so the expand animation stays visible.
        const [isCollapsed, setIsCollapsed] = React.useState(!open);

        if (open && isCollapsed) {
            // Render-phase state adjustment: reveal before paint, no flash.
            setIsCollapsed(false);
        }

        return (
            <div
                ref={ref}
                id={contentId}
                role="region"
                aria-labelledby={triggerId}
                aria-hidden={!open}
                // `inert` guarantees the collapsed content cannot be focused or clicked,
                // so no focusable element ever lives inside an `aria-hidden` subtree.
                inert={!open}
                data-state={open ? "open" : "closed"}
                data-disabled={disabled ? "" : undefined}
                className={className}
                {...props}
            >
                <motion.div
                    initial={false}
                    animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    onAnimationComplete={() => {
                        if (!open) setIsCollapsed(true);
                    }}
                    style={{
                        overflow: "hidden",
                        visibility: isCollapsed ? "hidden" : "visible",
                    }}
                >
                    {children}
                </motion.div>
            </div>
        );
    }
);
CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleTrigger, CollapsibleContent };

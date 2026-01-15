"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

type AccordionType = "single" | "multiple";

type AccordionSingleProps = {
    type?: "single";
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    collapsible?: boolean;
};

type AccordionMultipleProps = {
    type: "multiple";
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
    collapsible?: boolean;
};

type AccordionProps = (AccordionSingleProps | AccordionMultipleProps) &
    React.HTMLAttributes<HTMLDivElement>;

type AccordionContextValue = {
    type: AccordionType;
    openValues: string[];
    collapsible: boolean;
    toggleItem: (value: string) => void;
};

type AccordionItemContextValue = {
    value: string;
    isOpen: boolean;
    disabled?: boolean;
    toggle: () => void;
    triggerId: string;
    contentId: string;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);
const AccordionItemContext = React.createContext<AccordionItemContextValue | null>(null);

const toArray = (value: unknown): string[] => {
    if (Array.isArray(value)) return value;
    if (typeof value === "string" && value.length > 0) return [value];
    return [];
};

const toSingle = (value: unknown): string => {
    if (typeof value === "string") return value;
    if (Array.isArray(value)) return value[0] ?? "";
    return "";
};

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
    (
        {
            type = "single",
            value,
            defaultValue,
            onValueChange,
            collapsible = true,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const isMultiple = type === "multiple";
        const [internalValue, setInternalValue] = React.useState<string | string[]>(() =>
            isMultiple ? toArray(defaultValue) : toSingle(defaultValue)
        );

        const stateValue = value !== undefined ? value : internalValue;
        const singleValue = isMultiple ? "" : toSingle(stateValue);
        const openValues = isMultiple ? toArray(stateValue) : singleValue ? [singleValue] : [];

        const toggleItem = React.useCallback(
            (itemValue: string) => {
                if (isMultiple) {
                    if (value !== undefined) {
                        const current = toArray(value);
                        const isOpen = current.includes(itemValue);
                        const next = isOpen
                            ? current.filter((entry) => entry !== itemValue)
                            : [...current, itemValue];
                        onValueChange?.(next as never);
                        return;
                    }

                    setInternalValue((prev) => {
                        const current = toArray(prev);
                        const isOpen = current.includes(itemValue);
                        const next = isOpen
                            ? current.filter((entry) => entry !== itemValue)
                            : [...current, itemValue];
                        onValueChange?.(next as never);
                        return next;
                    });
                    return;
                }

                const current = value !== undefined ? toSingle(value) : singleValue;
                const isOpen = current === itemValue;
                const next = isOpen ? (collapsible ? "" : itemValue) : itemValue;

                if (value !== undefined) {
                    onValueChange?.(next as never);
                    return;
                }

                setInternalValue(next);
                onValueChange?.(next as never);
            },
            [collapsible, isMultiple, onValueChange, singleValue, value]
        );

        const contextValue = React.useMemo<AccordionContextValue>(
            () => ({ type, openValues, collapsible, toggleItem }),
            [type, openValues, collapsible, toggleItem]
        );

        return (
            <AccordionContext.Provider value={contextValue}>
                <div ref={ref} className={cn(className)} {...props}>
                    {children}
                </div>
            </AccordionContext.Provider>
        );
    }
);
Accordion.displayName = "Accordion";

type AccordionItemProps = React.HTMLAttributes<HTMLDivElement> & {
    value: string;
    disabled?: boolean;
};

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
    ({ className, children, value, disabled = false, ...props }, ref) => {
        const accordion = React.useContext(AccordionContext);

        if (!accordion) {
            throw new Error("AccordionItem must be used within Accordion");
        }

        const isOpen = accordion.openValues.includes(value);
        const baseId = React.useId();

        const handleToggle = React.useCallback(() => {
            if (disabled) return;
            accordion.toggleItem(value);
        }, [accordion, disabled, value]);

        const itemContext = React.useMemo<AccordionItemContextValue>(
            () => ({
                value,
                isOpen,
                disabled,
                toggle: handleToggle,
                triggerId: `${baseId}-trigger`,
                contentId: `${baseId}-content`,
            }),
            [baseId, disabled, handleToggle, isOpen, value]
        );

        return (
            <AccordionItemContext.Provider value={itemContext}>
                <div
                    ref={ref}
                    data-state={isOpen ? "open" : "closed"}
                    data-disabled={disabled ? "" : undefined}
                    className={cn("border-b border-border-primary", className)}
                    {...props}
                >
                    {children}
                </div>
            </AccordionItemContext.Provider>
        );
    }
);
AccordionItem.displayName = "AccordionItem";

type AccordionTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
    ({ className, children, ...props }, ref) => {
        const item = React.useContext(AccordionItemContext);

        if (!item) {
            throw new Error("AccordionTrigger must be used within AccordionItem");
        }

        const { isOpen, toggle, triggerId, contentId, disabled } = item;

        return (
            <div className="flex">
                <button
                    ref={ref}
                    id={triggerId}
                    type="button"
                    aria-controls={contentId}
                    aria-expanded={isOpen}
                    onClick={toggle}
                    disabled={disabled || props.disabled}
                    data-state={isOpen ? "open" : "closed"}
                    data-disabled={disabled || props.disabled ? "" : undefined}
                    className={cn(
                        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-accent-blue [&[data-state=open]>svg]:rotate-180",
                        className
                    )}
                    {...props}
                >
                    {children}
                    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-text-tertiary" />
                </button>
            </div>
        );
    }
);
AccordionTrigger.displayName = "AccordionTrigger";

type AccordionContentProps = React.HTMLAttributes<HTMLDivElement>;

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
    ({ className, children, ...props }, ref) => {
        const item = React.useContext(AccordionItemContext);

        if (!item) {
            throw new Error("AccordionContent must be used within AccordionItem");
        }

        const { isOpen, triggerId, contentId, disabled } = item;
        const contentRef = React.useRef<HTMLDivElement>(null);
        const [contentHeight, setContentHeight] = React.useState(0);

        React.useLayoutEffect(() => {
            const el = contentRef.current;
            if (!el) return;

            const updateHeight = () => setContentHeight(el.scrollHeight);
            updateHeight();

            const resizeObserver = new ResizeObserver(updateHeight);
            resizeObserver.observe(el);

            return () => resizeObserver.disconnect();
        }, [children]);

        const measuredHeight = contentHeight || contentRef.current?.scrollHeight || 0;
        const contentStyle = {
            "--radix-accordion-content-height": `${measuredHeight}px`,
            height: isOpen ? `${measuredHeight}px` : 0,
        } as React.CSSProperties;

        return (
            <div
                ref={ref}
                style={contentStyle}
                role="region"
                id={contentId}
                aria-labelledby={triggerId}
                aria-hidden={!isOpen}
                data-state={isOpen ? "open" : "closed"}
                data-disabled={disabled ? "" : undefined}
                className={cn(
                    "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                    className
                )}
                {...props}
            >
                <div ref={contentRef} className="pb-4 pt-0 text-text-secondary">
                    {children}
                </div>
            </div>
        );
    }
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

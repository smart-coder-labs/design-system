"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "../lib/utils";

type PopoverContextValue = {
    open: boolean;
    setOpen: (open: boolean) => void;
    triggerRef: React.MutableRefObject<HTMLElement | null>;
};

const PopoverContext = React.createContext<PopoverContextValue | null>(null);

function usePopoverContext() {
    const context = React.useContext(PopoverContext);
    if (!context) {
        throw new Error("Popover components must be used within Popover");
    }
    return context;
}

function mergeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
    return (node: T) => {
        refs.forEach((ref) => {
            if (!ref) return;
            if (typeof ref === "function") {
                ref(node);
            } else {
                (ref as React.MutableRefObject<T | null>).current = node;
            }
        });
    };
}

type PopoverProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
};

function Popover({ open: controlledOpen, defaultOpen = false, onOpenChange, children }: PopoverProps) {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
    const open = controlledOpen ?? uncontrolledOpen;

    const setOpen = React.useCallback(
        (value: boolean) => {
            if (controlledOpen === undefined) {
                setUncontrolledOpen(value);
            }
            onOpenChange?.(value);
        },
        [controlledOpen, onOpenChange]
    );

    const triggerRef = React.useRef<HTMLElement | null>(null);

    const value = React.useMemo(
        () => ({ open, setOpen, triggerRef }),
        [open, setOpen]
    );

    return <PopoverContext.Provider value={value}>{children}</PopoverContext.Provider>;
}

type PopoverTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    children: React.ReactNode;
};

const PopoverTrigger = React.forwardRef<HTMLElement, PopoverTriggerProps>(
    ({ asChild = false, children, onClick, className, ...props }, ref) => {
        const { open, setOpen, triggerRef } = usePopoverContext();
        const mergedRef = mergeRefs(ref, triggerRef as React.Ref<HTMLElement>);

        const handleClick = (event: React.MouseEvent<HTMLElement>) => {
            onClick?.(event as any);
            if (event.defaultPrevented) return;
            setOpen(!open);
        };

        if (asChild && React.isValidElement(children)) {
            return React.cloneElement(children, {
                ref: mergeRefs((children as any).ref, mergedRef),
                onClick: (event: React.MouseEvent<HTMLElement>) => {
                    (children as any).props?.onClick?.(event);
                    handleClick(event);
                },
                className: cn((children as any).props?.className, className),
                "aria-haspopup": "dialog",
                "aria-expanded": open,
                ...props,
            });
        }

        return (
            <button
                type="button"
                ref={mergedRef as React.Ref<HTMLButtonElement>}
                onClick={handleClick}
                aria-haspopup="dialog"
                aria-expanded={open}
                className={className}
                {...props}
            >
                {children}
            </button>
        );
    }
);
PopoverTrigger.displayName = "PopoverTrigger";

type PopoverContentProps = React.HTMLAttributes<HTMLDivElement> & {
    align?: "start" | "center" | "end";
    side?: "top" | "bottom" | "left" | "right";
    sideOffset?: number;
};

const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
    (
        { align = "center", side = "bottom", sideOffset = 4, className, style, children, ...props },
        ref
    ) => {
        const { open, setOpen, triggerRef } = usePopoverContext();
        const contentRef = React.useRef<HTMLDivElement | null>(null);
        const mergedRef = mergeRefs(ref, contentRef);
        const [position, setPosition] = React.useState({ top: 0, left: 0 });

        const updatePosition = React.useCallback(() => {
            const trigger = triggerRef.current;
            const content = contentRef.current;
            if (!trigger || !content) return;

            const triggerRect = trigger.getBoundingClientRect();
            const contentRect = content.getBoundingClientRect();

            let top = 0;
            let left = 0;

            if (side === "left" || side === "right") {
                top = triggerRect.top;
                if (align === "center") {
                    top = triggerRect.top + triggerRect.height / 2 - contentRect.height / 2;
                } else if (align === "end") {
                    top = triggerRect.bottom - contentRect.height;
                }

                left =
                    side === "left"
                        ? triggerRect.left - contentRect.width - sideOffset
                        : triggerRect.right + sideOffset;
            } else {
                left = triggerRect.left;
                if (align === "center") {
                    left = triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
                } else if (align === "end") {
                    left = triggerRect.right - contentRect.width;
                }

                top = side === "top"
                    ? triggerRect.top - contentRect.height - sideOffset
                    : triggerRect.bottom + sideOffset;
            }

            const clampedLeft = Math.max(8, Math.min(left, window.innerWidth - contentRect.width - 8));
            const clampedTop = Math.max(8, Math.min(top, window.innerHeight - contentRect.height - 8));

            setPosition({ top: clampedTop, left: clampedLeft });
        }, [align, side, sideOffset, triggerRef]);

        React.useLayoutEffect(() => {
            if (open) {
                updatePosition();
            }
        }, [open, updatePosition]);

        React.useEffect(() => {
            if (!open) return;
            const handleScroll = () => updatePosition();
            const handleResize = () => updatePosition();
            window.addEventListener("scroll", handleScroll, true);
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("scroll", handleScroll, true);
                window.removeEventListener("resize", handleResize);
            };
        }, [open, updatePosition]);

        React.useEffect(() => {
            if (!open) return;
            const handleClick = (event: MouseEvent) => {
                const target = event.target as Node;
                if (contentRef.current?.contains(target) || triggerRef.current?.contains(target)) {
                    return;
                }
                setOpen(false);
            };

            const handleKeyDown = (event: KeyboardEvent) => {
                if (event.key === "Escape") {
                    setOpen(false);
                }
            };

            document.addEventListener("mousedown", handleClick);
            document.addEventListener("keydown", handleKeyDown);
            return () => {
                document.removeEventListener("mousedown", handleClick);
                document.removeEventListener("keydown", handleKeyDown);
            };
        }, [open, setOpen]);

        if (!open) return null;

        return createPortal(
            <div
                ref={mergedRef}
                data-state={open ? "open" : "closed"}
                className={cn(
                    "z-50 w-72 rounded-xl border border-border-primary bg-surface-glass backdrop-blur-xl p-4 text-text-primary shadow-lg outline-none",
                    className
                )}
                style={{
                    position: "fixed",
                    top: position.top,
                    left: position.left,
                    ...style,
                }}
                {...props}
            >
                {children}
            </div>,
            document.body
        );
    }
);
PopoverContent.displayName = "PopoverContent";

export { Popover, PopoverTrigger, PopoverContent };

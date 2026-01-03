"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "../lib/utils";
const PopoverContext = React.createContext(null);
function usePopoverContext() {
    const context = React.useContext(PopoverContext);
    if (!context) {
        throw new Error("Popover components must be used within Popover");
    }
    return context;
}
function mergeRefs(...refs) {
    return (node) => {
        refs.forEach((ref) => {
            if (!ref)
                return;
            if (typeof ref === "function") {
                ref(node);
            }
            else {
                ref.current = node;
            }
        });
    };
}
function Popover({ open: controlledOpen, defaultOpen = false, onOpenChange, children }) {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = React.useCallback((value) => {
        if (controlledOpen === undefined) {
            setUncontrolledOpen(value);
        }
        onOpenChange?.(value);
    }, [controlledOpen, onOpenChange]);
    const triggerRef = React.useRef(null);
    const value = React.useMemo(() => ({ open, setOpen, triggerRef }), [open, setOpen]);
    return _jsx(PopoverContext.Provider, { value: value, children: children });
}
const PopoverTrigger = React.forwardRef(({ asChild = false, children, onClick, className, ...props }, ref) => {
    const { open, setOpen, triggerRef } = usePopoverContext();
    const mergedRef = mergeRefs(ref, triggerRef);
    const handleClick = (event) => {
        onClick?.(event);
        if (event.defaultPrevented)
            return;
        setOpen(!open);
    };
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
            ref: mergeRefs(children.ref, mergedRef),
            onClick: (event) => {
                children.props?.onClick?.(event);
                handleClick(event);
            },
            className: cn(children.props?.className, className),
            "aria-haspopup": "dialog",
            "aria-expanded": open,
            ...props,
        });
    }
    return (_jsx("button", { type: "button", ref: mergedRef, onClick: handleClick, "aria-haspopup": "dialog", "aria-expanded": open, className: className, ...props, children: children }));
});
PopoverTrigger.displayName = "PopoverTrigger";
const PopoverContent = React.forwardRef(({ align = "center", side = "bottom", sideOffset = 4, className, style, children, ...props }, ref) => {
    const { open, setOpen, triggerRef } = usePopoverContext();
    const contentRef = React.useRef(null);
    const mergedRef = mergeRefs(ref, contentRef);
    const [position, setPosition] = React.useState({ top: 0, left: 0 });
    const updatePosition = React.useCallback(() => {
        const trigger = triggerRef.current;
        const content = contentRef.current;
        if (!trigger || !content)
            return;
        const triggerRect = trigger.getBoundingClientRect();
        const contentRect = content.getBoundingClientRect();
        let top = 0;
        let left = 0;
        if (side === "left" || side === "right") {
            top = triggerRect.top;
            if (align === "center") {
                top = triggerRect.top + triggerRect.height / 2 - contentRect.height / 2;
            }
            else if (align === "end") {
                top = triggerRect.bottom - contentRect.height;
            }
            left =
                side === "left"
                    ? triggerRect.left - contentRect.width - sideOffset
                    : triggerRect.right + sideOffset;
        }
        else {
            left = triggerRect.left;
            if (align === "center") {
                left = triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
            }
            else if (align === "end") {
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
        if (!open)
            return;
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
        if (!open)
            return;
        const handleClick = (event) => {
            const target = event.target;
            if (contentRef.current?.contains(target) || triggerRef.current?.contains(target)) {
                return;
            }
            setOpen(false);
        };
        const handleKeyDown = (event) => {
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
    if (!open)
        return null;
    return createPortal(_jsx("div", { ref: mergedRef, "data-state": open ? "open" : "closed", className: cn("z-50 w-72 rounded-xl border border-border-primary bg-surface-glass backdrop-blur-xl p-4 text-text-primary shadow-lg outline-none", className), style: {
            position: "fixed",
            top: position.top,
            left: position.left,
            ...style,
        }, ...props, children: children }), document.body);
});
PopoverContent.displayName = "PopoverContent";
export { Popover, PopoverTrigger, PopoverContent };
//# sourceMappingURL=Popover.js.map
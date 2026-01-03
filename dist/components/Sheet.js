"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { createPortal } from "react-dom";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "../lib/utils";
const SheetContext = React.createContext(null);
function useSheetContext() {
    const context = React.useContext(SheetContext);
    if (!context) {
        throw new Error("Sheet components must be used within Sheet");
    }
    return context;
}
const Sheet = ({ open: controlledOpen, defaultOpen = false, onOpenChange, children }) => {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
    const open = controlledOpen ?? uncontrolledOpen;
    const triggerRef = React.useRef(null);
    const setOpen = React.useCallback((next) => {
        if (controlledOpen === undefined) {
            setUncontrolledOpen(next);
        }
        onOpenChange?.(next);
    }, [controlledOpen, onOpenChange]);
    const value = React.useMemo(() => ({ open, setOpen, triggerRef }), [open, setOpen]);
    return _jsx(SheetContext.Provider, { value: value, children: children });
};
const SheetTrigger = React.forwardRef(({ asChild = false, children, className, onClick, ...props }, ref) => {
    const { open, setOpen, triggerRef } = useSheetContext();
    const mergedRef = (node) => {
        triggerRef.current = node;
        if (typeof ref === "function")
            ref(node);
        else if (ref)
            ref.current = node;
    };
    const handleClick = (event) => {
        onClick?.(event);
        if (event.defaultPrevented)
            return;
        setOpen(!open);
    };
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
            ref: mergedRef,
            onClick: (event) => {
                children.props?.onClick?.(event);
                handleClick(event);
            },
            className: cn(children.props?.className, className),
            "aria-haspopup": "dialog",
            "aria-expanded": open,
        });
    }
    return (_jsx("button", { type: "button", ref: mergedRef, onClick: handleClick, "aria-haspopup": "dialog", "aria-expanded": open, className: className, ...props, children: children }));
});
SheetTrigger.displayName = "SheetTrigger";
const SheetClose = React.forwardRef(({ children, onClick, className, ...props }, ref) => {
    const { setOpen } = useSheetContext();
    return (_jsx("button", { type: "button", ref: ref, onClick: (event) => {
            onClick?.(event);
            if (!event.defaultPrevented)
                setOpen(false);
        }, className: className, ...props, children: children }));
});
SheetClose.displayName = "SheetClose";
const SheetPortal = ({ children }) => {
    if (typeof document === "undefined")
        return null;
    return createPortal(children, document.body);
};
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => {
    const { open, setOpen } = useSheetContext();
    return (_jsx("div", { ref: ref, "data-state": open ? "open" : "closed", className: cn("fixed inset-0 z-50 bg-black/20 backdrop-blur-sm", className), onClick: () => setOpen(false), ...props }));
});
SheetOverlay.displayName = "SheetOverlay";
const sheetVariants = cva("fixed z-50 gap-4 bg-surface-primary p-6 shadow-lg transition ease-in-out", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b border-border-primary",
            bottom: "inset-x-0 bottom-0 border-t border-border-primary",
            left: "inset-y-0 left-0 h-full w-3/4 border-r border-border-primary sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4 border-l border-border-primary sm:max-w-sm",
        },
    },
    defaultVariants: {
        side: "right",
    },
});
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => {
    const { open, setOpen } = useSheetContext();
    React.useEffect(() => {
        if (!open)
            return;
        const handleKeyDown = (event) => {
            if (event.key === "Escape")
                setOpen(false);
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, setOpen]);
    if (!open)
        return null;
    return (_jsxs(SheetPortal, { children: [_jsx(SheetOverlay, {}), _jsxs("div", { ref: ref, role: "dialog", "aria-modal": "true", "data-state": open ? "open" : "closed", className: cn(sheetVariants({ side }), className), ...props, children: [_jsxs(SheetClose, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", children: [_jsx(X, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: "Close" })] }), children] })] }));
});
SheetContent.displayName = "SheetContent";
const SheetHeader = ({ className, ...props }) => (_jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props }));
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props }) => (_jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }));
SheetFooter.displayName = "SheetFooter";
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (_jsx("h2", { ref: ref, className: cn("text-lg font-semibold text-text-primary", className), ...props })));
SheetTitle.displayName = "SheetTitle";
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => (_jsx("p", { ref: ref, className: cn("text-sm text-text-secondary", className), ...props })));
SheetDescription.displayName = "SheetDescription";
export { Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, };
//# sourceMappingURL=Sheet.js.map
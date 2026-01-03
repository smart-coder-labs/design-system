"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { createPortal } from "react-dom";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "../lib/utils";
const ToastContext = React.createContext({
    viewport: null,
    setViewport: () => { },
});
const ToastItemContext = React.createContext(null);
const ToastProvider = ({ children }) => {
    const [viewport, setViewport] = React.useState(null);
    const value = React.useMemo(() => ({ viewport, setViewport }), [viewport]);
    return _jsx(ToastContext.Provider, { value: value, children: children });
};
function useComposedRefs(...refs) {
    return React.useCallback((node) => {
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
    }, [refs]);
}
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => {
    const { setViewport } = React.useContext(ToastContext);
    const composedRefs = useComposedRefs(ref, (node) => setViewport(node));
    return (_jsx("div", { ref: composedRefs, className: cn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className), ...props }));
});
ToastViewport.displayName = "ToastViewport";
const toastVariants = cva("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-xl border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border-border-primary bg-surface-glass backdrop-blur-xl text-text-primary",
            destructive: "destructive group border-status-error bg-status-error text-white",
            success: "border-status-success bg-surface-glass backdrop-blur-xl text-status-success",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const Toast = React.forwardRef(function Toast({ className, variant, open, defaultOpen, onOpenChange, duration = 5000, role = "status", ...props }, ref) {
    const { viewport } = React.useContext(ToastContext);
    const isControlled = open !== undefined;
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen ?? false);
    const isOpen = isControlled ? open : internalOpen;
    const handleOpenChange = React.useCallback((next) => {
        if (!isControlled)
            setInternalOpen(next);
        onOpenChange?.(next);
    }, [isControlled, onOpenChange]);
    React.useEffect(() => {
        if (!isOpen)
            return;
        if (duration === Infinity)
            return;
        const timer = window.setTimeout(() => handleOpenChange(false), duration);
        return () => window.clearTimeout(timer);
    }, [duration, handleOpenChange, isOpen]);
    const close = React.useCallback(() => handleOpenChange(false), [handleOpenChange]);
    if (!isOpen)
        return null;
    const body = (_jsx(ToastItemContext.Provider, { value: { close }, children: _jsx("div", { ref: ref, role: role, "aria-live": role === "alert" ? "assertive" : "polite", "aria-atomic": "true", "data-state": isOpen ? "open" : "closed", className: cn(toastVariants({ variant }), className), ...props }) }));
    return viewport ? createPortal(body, viewport) : body;
});
Toast.displayName = "Toast";
const ToastAction = React.forwardRef(function ToastAction({ className, altText, "aria-label": ariaLabel, ...props }, ref) {
    return (_jsx("button", { ref: ref, type: "button", className: cn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-transparent bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className), "aria-label": ariaLabel ?? altText, ...props }));
});
ToastAction.displayName = "ToastAction";
const ToastClose = React.forwardRef(function ToastClose({ className, ...props }, ref) {
    const ctx = React.useContext(ToastItemContext);
    return (_jsx("button", { ref: ref, type: "button", className: cn("absolute right-2 top-2 rounded-md p-1 text-text-secondary opacity-0 transition-opacity hover:text-text-primary focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className), "aria-label": "Close", onClick: (event) => {
            props.onClick?.(event);
            ctx?.close();
        }, ...props, children: _jsx(X, { className: "h-4 w-4" }) }));
});
ToastClose.displayName = "ToastClose";
const ToastTitle = React.forwardRef(function ToastTitle({ className, ...props }, ref) {
    return _jsx("div", { ref: ref, className: cn("text-sm font-semibold", className), ...props });
});
ToastTitle.displayName = "ToastTitle";
const ToastDescription = React.forwardRef(function ToastDescription({ className, ...props }, ref) {
    return _jsx("div", { ref: ref, className: cn("text-sm opacity-90", className), ...props });
});
ToastDescription.displayName = "ToastDescription";
export { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction, };
//# sourceMappingURL=Toast.js.map
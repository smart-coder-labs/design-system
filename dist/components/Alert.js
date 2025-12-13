"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react";
import { cn } from "../lib/utils";
const alertVariants = cva("relative w-full rounded-xl border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
    variants: {
        variant: {
            default: "bg-surface-secondary text-text-primary border-border-primary",
            destructive: "border-status-error/50 text-status-error dark:border-status-error [&>svg]:text-status-error bg-status-error/10",
            success: "border-status-success/50 text-status-success dark:border-status-success [&>svg]:text-status-success bg-status-success/10",
            warning: "border-status-warning/50 text-status-warning dark:border-status-warning [&>svg]:text-status-warning bg-status-warning/10",
            info: "border-status-info/50 text-status-info dark:border-status-info [&>svg]:text-status-info bg-status-info/10",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const icons = {
    default: Info,
    destructive: XCircle,
    success: CheckCircle2,
    warning: AlertCircle,
    info: Info,
};
const Alert = React.forwardRef(({ className, variant = "default", children, ...props }, ref) => {
    const Icon = icons[variant || "default"];
    return (_jsxs("div", { ref: ref, role: "alert", className: cn(alertVariants({ variant }), className), ...props, children: [_jsx(Icon, { className: "h-4 w-4" }), children] }));
});
Alert.displayName = "Alert";
const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (_jsx("h5", { ref: ref, className: cn("mb-1 font-medium leading-none tracking-tight", className), ...props })));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("text-sm [&_p]:leading-relaxed opacity-90", className), ...props })));
AlertDescription.displayName = "AlertDescription";
export { Alert, AlertTitle, AlertDescription };
//# sourceMappingURL=Alert.js.map
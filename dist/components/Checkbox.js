"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Check, Minus } from "lucide-react";
import { cn } from "../lib/utils";
const Checkbox = React.forwardRef(({ className, checked, defaultChecked = false, onCheckedChange, disabled, ...props }, ref) => {
    const inputRef = React.useRef(null);
    const setRefs = React.useCallback((node) => {
        inputRef.current = node;
        if (typeof ref === "function")
            ref(node);
        else if (ref)
            ref.current = node;
    }, [ref]);
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const currentChecked = checked !== undefined ? checked : internalChecked;
    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.indeterminate = currentChecked === "indeterminate";
        }
    }, [currentChecked]);
    const dataState = currentChecked === "indeterminate" ? "indeterminate" : currentChecked ? "checked" : "unchecked";
    const handleChange = (event) => {
        // If it was indeterminate, a user action should move to checked.
        const nextChecked = currentChecked === "indeterminate" ? true : event.target.checked;
        if (checked === undefined) {
            setInternalChecked(nextChecked);
        }
        onCheckedChange?.(nextChecked);
    };
    return (_jsxs("span", { className: "inline-flex items-center align-middle", "data-state": dataState, "aria-disabled": disabled ? true : undefined, children: [_jsx("input", { ref: setRefs, type: "checkbox", className: cn("peer h-5 w-5 shrink-0 rounded-md border border-border-primary shadow-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-accent-blue data-[state=checked]:text-white data-[state=checked]:border-accent-blue data-[state=indeterminate]:bg-accent-blue data-[state=indeterminate]:text-white data-[state=indeterminate]:border-accent-blue transition-all duration-200 appearance-none", className), role: "checkbox", "aria-checked": dataState === "indeterminate" ? "mixed" : currentChecked, "data-state": dataState, checked: currentChecked === true, onChange: handleChange, disabled: disabled, ...props }), _jsx("span", { className: cn("pointer-events-none -ml-5 flex h-5 w-5 items-center justify-center text-current align-middle", "[input[data-state=unchecked]+&]:opacity-0"), "aria-hidden": true, children: dataState === "indeterminate" ? (_jsx(Minus, { className: "h-3 w-3 stroke-3" })) : (_jsx(Check, { className: "h-3.5 w-3.5 stroke-3" })) })] }));
});
Checkbox.displayName = "Checkbox";
export { Checkbox };
//# sourceMappingURL=Checkbox.js.map
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Circle } from "lucide-react";
import { cn } from "../lib/utils";
const RadioGroupContext = React.createContext(null);
function useRadioGroupContext() {
    const context = React.useContext(RadioGroupContext);
    if (!context) {
        throw new Error("RadioGroup components must be used within RadioGroup");
    }
    return context;
}
const RadioGroup = React.forwardRef(({ className, value: controlledValue, defaultValue, onValueChange, name, disabled, children, ...props }, ref) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
    const groupValue = controlledValue ?? uncontrolledValue;
    const groupName = React.useId();
    const setValue = React.useCallback((val) => {
        if (controlledValue === undefined) {
            setUncontrolledValue(val);
        }
        onValueChange?.(val);
    }, [controlledValue, onValueChange]);
    const contextValue = React.useMemo(() => ({ name: name ?? groupName, value: groupValue, disabled, setValue }), [name, groupName, groupValue, disabled, setValue]);
    return (_jsx(RadioGroupContext.Provider, { value: contextValue, children: _jsx("div", { ref: ref, role: "radiogroup", "aria-disabled": disabled || undefined, className: cn("grid gap-2", className), ...props, children: children }) }));
});
RadioGroup.displayName = "RadioGroup";
const RadioGroupItem = React.forwardRef(({ className, value, disabled, ...props }, ref) => {
    const { name, value: selectedValue, disabled: groupDisabled, setValue } = useRadioGroupContext();
    const checked = selectedValue === value;
    const isDisabled = disabled || groupDisabled;
    return (_jsxs("label", { ref: ref, className: cn("inline-flex items-center gap-2 cursor-pointer select-none", isDisabled && "cursor-not-allowed opacity-60", className), ...props, children: [_jsx("input", { type: "radio", className: "sr-only", name: name, value: value, checked: checked, disabled: isDisabled, onChange: () => setValue(value) }), _jsx("span", { "aria-hidden": true, "data-state": checked ? "checked" : "unchecked", className: cn("aspect-square h-5 w-5 rounded-full border border-border-primary text-accent-blue shadow-sm ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200", checked && "border-accent-blue text-accent-blue"), children: _jsx("span", { className: "flex h-full w-full items-center justify-center", children: checked && _jsx(Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) }) })] }));
});
RadioGroupItem.displayName = "RadioGroupItem";
export { RadioGroup, RadioGroupItem };
//# sourceMappingURL=RadioGroup.js.map
"use client";

import * as React from "react";
import { Circle } from "lucide-react";
import { cn } from "../../lib/utils";

type RadioGroupContextValue = {
    name: string;
    value?: string;
    disabled?: boolean;
    setValue: (value: string) => void;
};

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null);

function useRadioGroupContext() {
    const context = React.useContext(RadioGroupContext);
    if (!context) {
        throw new Error("RadioGroup components must be used within RadioGroup");
    }
    return context;
}

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    name?: string;
    disabled?: boolean;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
    ({ className, value: controlledValue, defaultValue, onValueChange, name, disabled, children, ...props }, ref) => {
        const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
        const groupValue = controlledValue ?? uncontrolledValue;
        const groupName = React.useId();

        const setValue = React.useCallback(
            (val: string) => {
                if (controlledValue === undefined) {
                    setUncontrolledValue(val);
                }
                onValueChange?.(val);
            },
            [controlledValue, onValueChange]
        );

        const contextValue = React.useMemo(
            () => ({ name: name ?? groupName, value: groupValue, disabled, setValue }),
            [name, groupName, groupValue, disabled, setValue]
        );

        return (
            <RadioGroupContext.Provider value={contextValue}>
                <div
                    ref={ref}
                    role="radiogroup"
                    aria-disabled={disabled || undefined}
                    className={cn("grid gap-2", className)}
                    {...props}
                >
                    {children}
                </div>
            </RadioGroupContext.Provider>
        );
    }
);
RadioGroup.displayName = "RadioGroup";

interface RadioGroupItemProps extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
    value: string;
    disabled?: boolean;
}

const RadioGroupItem = React.forwardRef<HTMLLabelElement, RadioGroupItemProps>(
    ({ className, value, disabled, ...props }, ref) => {
        const { name, value: selectedValue, disabled: groupDisabled, setValue } = useRadioGroupContext();
        const checked = selectedValue === value;
        const isDisabled = disabled || groupDisabled;

        return (
            <label
                ref={ref}
                className={cn(
                    "inline-flex items-center gap-2 cursor-pointer select-none",
                    isDisabled && "cursor-not-allowed opacity-60",
                    className
                )}
                {...props}
            >
                <input
                    type="radio"
                    className="sr-only"
                    name={name}
                    value={value}
                    checked={checked}
                    disabled={isDisabled}
                    onChange={() => setValue(value)}
                />
                <span
                    aria-hidden
                    data-state={checked ? "checked" : "unchecked"}
                    className={cn(
                        "aspect-square h-5 w-5 rounded-full border border-border-primary text-accent-blue shadow-sm ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200",
                        checked && "border-accent-blue text-accent-blue"
                    )}
                >
                    <span className="flex h-full w-full items-center justify-center">
                        {checked && <Circle className="h-2.5 w-2.5 fill-current text-current" />}
                    </span>
                </span>
            </label>
        );
    }
);
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };

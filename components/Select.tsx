"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
        ref={ref}
        className={cn(
            "group flex h-10 w-full items-center justify-between rounded-lg border border-border-primary bg-surface-primary px-3 py-2 text-sm ring-offset-background placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 shadow-sm hover:bg-surface-secondary/50 transition-colors",
            className
        )}
        {...props}
    >
        {children}
        <SelectPrimitive.Icon asChild>
            <ChevronDown className="h-4 w-4 opacity-50 group-data-[state=open]:rotate-180 transition-transform duration-200" />
        </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content
            ref={ref}
            className={cn(
                "relative z-50 min-w-[8rem] overflow-hidden rounded-xl border border-border-primary bg-surface-glass backdrop-blur-xl text-text-primary shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                position === "popper" &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                className
            )}
            position={position}
            {...props}
        >
            <SelectPrimitive.Viewport
                className={cn(
                    "p-1",
                    position === "popper" &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                )}
            >
                {children}
            </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.Label
        ref={ref}
        className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
        {...props}
    />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
        ref={ref}
        className={cn(
            "relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent-blue focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors",
            className
        )}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <SelectPrimitive.ItemIndicator>
                <Check className="h-4 w-4" />
            </SelectPrimitive.ItemIndicator>
        </span>

        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.Separator
        ref={ref}
        className={cn("-mx-1 my-1 h-px bg-border-primary", className)}
        {...props}
    />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

/* ========================================
   FILTER SELECT VARIANT
   ======================================== */

export interface FilterSelectOption {
    id: string;
    label: string;
    value: string;
    count?: number;
}

export interface FilterSelectProps {
    label: string;
    options: FilterSelectOption[];
    value?: string | string[];
    onChange?: (value: string | string[]) => void;
    icon?: React.ReactNode;
    multiselect?: boolean;
    className?: string;
}

export const FilterSelect: React.FC<FilterSelectProps> = ({
    label,
    options,
    value,
    onChange,
    icon,
    multiselect = false,
    className = '',
}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOptionClick = (option: FilterSelectOption) => {
        if (multiselect) {
            const currentValues = Array.isArray(value) ? value : [];
            const newValues = currentValues.includes(option.value)
                ? currentValues.filter(v => v !== option.value)
                : [...currentValues, option.value];
            onChange?.(newValues);
        } else {
            onChange?.(option.value);
            setIsOpen(false);
        }
    };

    const isOptionActive = (optionValue: string) => {
        if (Array.isArray(value)) {
            return value.includes(optionValue);
        }
        return value === optionValue;
    };

    const getActiveLabel = () => {
        if (!value) return null;

        if (Array.isArray(value)) {
            if (value.length === 0) return null;
            if (value.length === 1) {
                const option = options.find(o => o.value === value[0]);
                return option?.label;
            }
            return `${value.length} selected`;
        }

        const option = options.find(o => o.value === value);
        return option?.label;
    };

    const activeLabel = getActiveLabel();

    return (
        <div className={cn("relative", className)}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "inline-flex items-center gap-2 px-4 py-2 rounded-lg",
                    "border transition-all",
                    activeLabel
                        ? "bg-accent-blue/10 border-accent-blue/30 text-accent-blue"
                        : "bg-surface-secondary border-border-primary text-text-primary hover:bg-surface-tertiary"
                )}
            >
                {icon || <ChevronDown className="w-4 h-4" />}
                <span className="text-sm font-medium">
                    {activeLabel || label}
                </span>
                <ChevronDown className={cn(
                    "w-4 h-4 transition-transform",
                    isOpen && "rotate-180"
                )} />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute top-full left-0 mt-2 w-64 bg-surface-primary border border-border-primary rounded-xl shadow-lg z-20 overflow-hidden">
                        <div className="max-h-80 overflow-y-auto p-2">
                            {options.map((option) => {
                                const isActive = isOptionActive(option.value);

                                return (
                                    <button
                                        key={option.id}
                                        onClick={() => handleOptionClick(option)}
                                        className={cn(
                                            "w-full flex items-center justify-between px-3 py-2 rounded-lg",
                                            "text-sm transition-colors",
                                            isActive
                                                ? "bg-accent-blue/10 text-accent-blue"
                                                : "text-text-primary hover:bg-surface-secondary"
                                        )}
                                    >
                                        <div className="flex items-center gap-2">
                                            {multiselect && (
                                                <div className={cn(
                                                    "w-4 h-4 rounded border flex items-center justify-center",
                                                    isActive
                                                        ? "bg-accent-blue border-accent-blue"
                                                        : "border-border-primary"
                                                )}>
                                                    {isActive && <Check className="w-3 h-3 text-white" />}
                                                </div>
                                            )}
                                            <span>{option.label}</span>
                                        </div>
                                        {option.count !== undefined && (
                                            <span className="text-xs text-text-tertiary">
                                                {option.count}
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
};

"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { createPortal } from "react-dom";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
const SelectContext = React.createContext(null);
function useSelectContext() {
    const context = React.useContext(SelectContext);
    if (!context) {
        throw new Error("Select components must be used within Select");
    }
    return context;
}
const Select = ({ value: controlledValue, defaultValue, onValueChange, children, disabled = false }) => {
    const [open, setOpen] = React.useState(false);
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
    const [items, setItems] = React.useState(new Map());
    const [highlightedValue, setHighlightedValue] = React.useState();
    const triggerRef = React.useRef(null);
    const currentValue = controlledValue ?? uncontrolledValue;
    const setValue = React.useCallback((next) => {
        if (controlledValue === undefined) {
            setUncontrolledValue(next);
        }
        onValueChange?.(next);
        setOpen(false);
    }, [controlledValue, onValueChange]);
    const registerItem = React.useCallback((value, label, disabledItem) => {
        setItems((prev) => {
            const next = new Map(prev);
            next.set(value, { value, label, disabled: disabledItem });
            return next;
        });
    }, []);
    const unregisterItem = React.useCallback((value) => {
        setItems((prev) => {
            const next = new Map(prev);
            next.delete(value);
            return next;
        });
    }, []);
    const getLabel = React.useCallback((val) => {
        if (!val)
            return undefined;
        return items.get(val)?.label;
    }, [items]);
    React.useEffect(() => {
        if (open) {
            const enabledValues = Array.from(items.values())
                .filter((item) => !item.disabled)
                .map((item) => item.value);
            setHighlightedValue(currentValue ?? enabledValues[0]);
        }
    }, [open, currentValue, items]);
    const contextValue = React.useMemo(() => ({
        open,
        setOpen,
        value: currentValue,
        setValue,
        registerItem,
        unregisterItem,
        getLabel,
        triggerRef,
        highlightedValue,
        setHighlightedValue,
        disabled,
    }), [open, currentValue, setValue, registerItem, unregisterItem, getLabel, highlightedValue, disabled]);
    return _jsx(SelectContext.Provider, { value: contextValue, children: children });
};
const SelectTrigger = React.forwardRef(({ className, children, asChild = false, disabled, ...props }, ref) => {
    const { open, setOpen, triggerRef, disabled: groupDisabled } = useSelectContext();
    const mergedDisabled = disabled || groupDisabled;
    const mergedRef = (node) => {
        triggerRef.current = node;
        if (typeof ref === "function")
            ref(node);
        else if (ref)
            ref.current = node;
    };
    const handleClick = (e) => {
        if (mergedDisabled)
            return;
        props.onClick?.(e);
        if (!e.defaultPrevented)
            setOpen(!open);
    };
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
            ref: mergedRef,
            onClick: handleClick,
            className: cn(children.props?.className, className),
            "aria-haspopup": "listbox",
            "aria-expanded": open,
            "aria-disabled": mergedDisabled || undefined,
        });
    }
    return (_jsxs("button", { type: "button", ref: mergedRef, onClick: (e) => handleClick(e), "aria-haspopup": "listbox", "aria-expanded": open, "aria-disabled": mergedDisabled || undefined, disabled: mergedDisabled, className: cn("group flex h-10 w-full items-center justify-between rounded-lg border border-border-primary bg-surface-primary px-3 py-2 text-sm ring-offset-background placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 shadow-sm hover:bg-surface-secondary/50 transition-colors", className), ...props, children: [children, _jsx(ChevronDown, { className: "h-4 w-4 opacity-50 group-data-[state=open]:rotate-180 transition-transform duration-200" })] }));
});
SelectTrigger.displayName = "SelectTrigger";
const SelectValue = ({ placeholder = "Select an option", className, children }) => {
    const { value, getLabel } = useSelectContext();
    const label = getLabel(value);
    return _jsx("span", { className: cn("truncate", className), children: label ?? children ?? placeholder });
};
const SelectContent = React.forwardRef(({ className, children }, ref) => {
    const { open, setOpen, triggerRef, highlightedValue, setHighlightedValue, value } = useSelectContext();
    const contentRef = React.useRef(null);
    const mergedRef = (node) => {
        contentRef.current = node;
        if (typeof ref === "function")
            ref(node);
        else if (ref)
            ref.current = node;
    };
    const [position, setPosition] = React.useState({ top: 0, left: 0, width: 0 });
    const updatePosition = React.useCallback(() => {
        const trigger = triggerRef.current;
        const content = contentRef.current;
        if (!trigger || !content)
            return;
        const rect = trigger.getBoundingClientRect();
        const width = rect.width;
        let left = rect.left;
        let top = rect.bottom + 4;
        const contentRect = content.getBoundingClientRect();
        if (left + contentRect.width > window.innerWidth - 8) {
            left = window.innerWidth - contentRect.width - 8;
        }
        if (left < 8)
            left = 8;
        if (top + contentRect.height > window.innerHeight - 8) {
            top = rect.top - contentRect.height - 4;
        }
        setPosition({ top, left, width });
    }, [triggerRef]);
    React.useLayoutEffect(() => {
        if (open)
            updatePosition();
    }, [open, updatePosition]);
    React.useEffect(() => {
        if (!open)
            return;
        const handleClick = (event) => {
            const target = event.target;
            if (contentRef.current?.contains(target) || triggerRef.current?.contains(target))
                return;
            setOpen(false);
        };
        const handleKeyDown = (event) => {
            if (!open)
                return;
            const items = contentRef.current?.querySelectorAll("[data-select-item]:not([data-disabled=true])") ?? [];
            const enabledValues = Array.from(items).map((el) => el.dataset.value).filter(Boolean);
            if (event.key === "Escape") {
                setOpen(false);
            }
            if (enabledValues.length === 0)
                return;
            const currentIndex = highlightedValue ? enabledValues.indexOf(highlightedValue) : -1;
            if (event.key === "ArrowDown") {
                event.preventDefault();
                const next = enabledValues[(currentIndex + 1) % enabledValues.length];
                setHighlightedValue(next);
            }
            if (event.key === "ArrowUp") {
                event.preventDefault();
                const prev = enabledValues[(currentIndex - 1 + enabledValues.length) % enabledValues.length];
                setHighlightedValue(prev);
            }
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                const targetValue = highlightedValue ?? enabledValues[0];
                if (targetValue) {
                    const el = contentRef.current?.querySelector(`[data-select-item="${targetValue}"]`);
                    el?.click();
                }
            }
        };
        const handleResize = () => updatePosition();
        document.addEventListener("mousedown", handleClick);
        document.addEventListener("keydown", handleKeyDown);
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleResize, true);
        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleResize, true);
        };
    }, [open, setOpen, highlightedValue, setHighlightedValue, updatePosition]);
    if (!open)
        return null;
    return createPortal(_jsx("div", { ref: mergedRef, role: "listbox", "aria-activedescendant": highlightedValue ? `select-item-${highlightedValue}` : undefined, className: cn("relative z-50 min-w-[8rem] overflow-hidden rounded-xl border border-border-primary bg-surface-glass backdrop-blur-xl text-text-primary shadow-lg p-1", className), style: { position: "fixed", top: position.top, left: position.left, minWidth: position.width }, "data-state": open ? "open" : "closed", children: children }), document.body);
});
SelectContent.displayName = "SelectContent";
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className), ...props })));
SelectLabel.displayName = "SelectLabel";
const SelectItem = React.forwardRef(({ value, disabled = false, children, className, ...props }, ref) => {
    const { value: selectedValue, setValue, registerItem, unregisterItem, highlightedValue, setHighlightedValue } = useSelectContext();
    const label = React.useMemo(() => {
        if (typeof children === "string")
            return children;
        if (React.isValidElement(children)) {
            const element = children;
            return element.props?.children ?? value;
        }
        return value;
    }, [children, value]);
    React.useEffect(() => {
        registerItem(value, String(label), disabled);
        return () => unregisterItem(value);
    }, [value, label, disabled, registerItem, unregisterItem]);
    const isSelected = selectedValue === value;
    const isHighlighted = highlightedValue === value;
    return (_jsxs("button", { ref: ref, id: `select-item-${value}`, role: "option", type: "button", "data-select-item": value, "data-value": value, "data-disabled": disabled ? "true" : undefined, "aria-selected": isSelected, disabled: disabled, onMouseEnter: () => setHighlightedValue(value), onFocus: () => setHighlightedValue(value), onClick: () => !disabled && setValue(value), className: cn("relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none transition-colors", isSelected
            ? "bg-accent-blue text-white"
            : isHighlighted
                ? "bg-surface-secondary text-text-primary"
                : "text-text-primary", disabled && "pointer-events-none opacity-50", className), ...props, children: [_jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: isSelected && _jsx(Check, { className: "h-4 w-4" }) }), _jsx("span", { className: "truncate", children: children })] }));
});
SelectItem.displayName = "SelectItem";
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("-mx-1 my-1 h-px bg-border-primary", className), ...props })));
SelectSeparator.displayName = "SelectSeparator";
const SelectGroup = ({ className, children }) => (_jsx("div", { className: cn("py-1", className), children: children }));
export const FilterSelect = ({ label, options, value, onChange, icon, multiselect = false, className = '', }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleOptionClick = (option) => {
        if (multiselect) {
            const currentValues = Array.isArray(value) ? value : [];
            const newValues = currentValues.includes(option.value)
                ? currentValues.filter(v => v !== option.value)
                : [...currentValues, option.value];
            onChange?.(newValues);
        }
        else {
            onChange?.(option.value);
            setIsOpen(false);
        }
    };
    const isOptionActive = (optionValue) => {
        if (Array.isArray(value)) {
            return value.includes(optionValue);
        }
        return value === optionValue;
    };
    const getActiveLabel = () => {
        if (!value)
            return null;
        if (Array.isArray(value)) {
            if (value.length === 0)
                return null;
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
    return (_jsxs("div", { className: cn("relative", className), children: [_jsxs("button", { onClick: () => setIsOpen(!isOpen), className: cn("inline-flex items-center gap-2 px-4 py-2 rounded-lg", "border transition-all", activeLabel
                    ? "bg-accent-blue/10 border-accent-blue/30 text-accent-blue"
                    : "bg-surface-secondary border-border-primary text-text-primary hover:bg-surface-tertiary"), children: [icon || _jsx(ChevronDown, { className: "w-4 h-4" }), _jsx("span", { className: "text-sm font-medium", children: activeLabel || label }), _jsx(ChevronDown, { className: cn("w-4 h-4 transition-transform", isOpen && "rotate-180") })] }), isOpen && (_jsxs(_Fragment, { children: [_jsx("div", { className: "fixed inset-0 z-10", onClick: () => setIsOpen(false) }), _jsx("div", { className: "absolute top-full left-0 mt-2 w-64 bg-surface-primary border border-border-primary rounded-xl shadow-lg z-20 overflow-hidden", children: _jsx("div", { className: "max-h-80 overflow-y-auto p-2", children: options.map((option) => {
                                const isActive = isOptionActive(option.value);
                                return (_jsxs("button", { onClick: () => handleOptionClick(option), className: cn("w-full flex items-center justify-between px-3 py-2 rounded-lg", "text-sm transition-colors", isActive
                                        ? "bg-accent-blue/10 text-accent-blue"
                                        : "text-text-primary hover:bg-surface-secondary"), children: [_jsxs("div", { className: "flex items-center gap-2", children: [multiselect && (_jsx("div", { className: cn("w-4 h-4 rounded border flex items-center justify-center", isActive
                                                        ? "bg-accent-blue border-accent-blue"
                                                        : "border-border-primary"), children: isActive && _jsx(Check, { className: "w-3 h-3 text-white" }) })), _jsx("span", { children: option.label })] }), option.count !== undefined && (_jsx("span", { className: "text-xs text-text-tertiary", children: option.count }))] }, option.id));
                            }) }) })] }))] }));
};
export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, };
//# sourceMappingURL=Select.js.map
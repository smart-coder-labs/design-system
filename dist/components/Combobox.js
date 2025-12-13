"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { ChevronsUpDown, Search } from "lucide-react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../lib/utils";
export function Combobox({ items, value, onChange, placeholder = "Select an item...", searchPlaceholder = "Search...", emptyMessage = "No item found.", disabled = false, className, }) {
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const [highlightedIndex, setHighlightedIndex] = React.useState(0);
    const inputRef = React.useRef(null);
    const listRef = React.useRef(null);
    const filteredItems = React.useMemo(() => {
        if (!search)
            return items;
        return items.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()));
    }, [items, search]);
    const selectedItem = items.find((item) => item.value === value);
    // Reset highlight when search changes
    React.useEffect(() => {
        setHighlightedIndex(0);
    }, [search]);
    // Focus input when opened
    React.useEffect(() => {
        if (open) {
            // Small timeout to ensure popover is mounted
            setTimeout(() => inputRef.current?.focus(), 50);
            setSearch("");
            setHighlightedIndex(0);
        }
    }, [open]);
    const handleSelect = (itemValue) => {
        onChange?.(itemValue);
        setOpen(false);
    };
    const handleKeyDown = (e) => {
        if (!open) {
            if (e.key === "Enter" || e.key === "ArrowDown" || e.key === " ") {
                e.preventDefault();
                setOpen(true);
            }
            return;
        }
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setHighlightedIndex((prev) => prev < filteredItems.length - 1 ? prev + 1 : 0);
                break;
            case "ArrowUp":
                e.preventDefault();
                setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
                break;
            case "Enter":
                e.preventDefault();
                if (highlightedIndex >= 0 && filteredItems[highlightedIndex]) {
                    handleSelect(filteredItems[highlightedIndex].value);
                }
                break;
            case "Escape":
                e.preventDefault();
                setOpen(false);
                break;
            case "Tab":
                setOpen(false);
                break;
        }
    };
    // Scroll highlighted item into view
    React.useEffect(() => {
        if (open && listRef.current && highlightedIndex >= 0) {
            const highlightedElement = listRef.current.children[highlightedIndex];
            if (highlightedElement) {
                highlightedElement.scrollIntoView({
                    block: "nearest",
                });
            }
        }
    }, [highlightedIndex, open]);
    return (_jsxs(PopoverPrimitive.Root, { open: open, onOpenChange: setOpen, children: [_jsx(PopoverPrimitive.Trigger, { asChild: true, children: _jsxs("button", { role: "combobox", "aria-expanded": open, disabled: disabled, className: cn("group flex h-10 w-full items-center justify-between rounded-lg border border-border-primary bg-surface-primary px-3 py-2 text-sm ring-offset-background placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm hover:bg-surface-secondary/50 transition-colors", className), onKeyDown: handleKeyDown, children: [_jsx("span", { className: cn("truncate", !selectedItem && "text-text-tertiary"), children: selectedItem ? selectedItem.label : placeholder }), _jsx(ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })] }) }), _jsx(PopoverPrimitive.Portal, { children: _jsxs(PopoverPrimitive.Content, { className: cn("relative z-50 min-w-[var(--radix-popover-trigger-width)] overflow-hidden rounded-xl border border-border-primary bg-surface-glass backdrop-blur-xl text-text-primary shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "p-0"), align: "start", sideOffset: 4, children: [_jsxs("div", { className: "flex items-center border-b border-border-primary px-3", children: [_jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), _jsx("input", { ref: inputRef, className: "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-text-tertiary disabled:cursor-not-allowed disabled:opacity-50", placeholder: searchPlaceholder, value: search, onChange: (e) => setSearch(e.target.value), onKeyDown: handleKeyDown })] }), _jsx("div", { ref: listRef, className: "max-h-[200px] overflow-y-auto overflow-x-hidden py-1", onMouseLeave: () => setHighlightedIndex(-1), children: filteredItems.length === 0 ? (_jsx("div", { className: "p-2 text-center text-sm text-text-tertiary", children: emptyMessage })) : (filteredItems.map((item, index) => {
                                const isSelected = item.value === value;
                                const isHighlighted = index === highlightedIndex;
                                return (_jsx("div", { className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors mx-1", isSelected
                                        ? "bg-accent-blue text-white"
                                        : isHighlighted
                                            ? "bg-surface-secondary text-text-primary"
                                            : "text-text-primary", item.disabled && "pointer-events-none opacity-50"), onClick: () => !item.disabled && handleSelect(item.value), onMouseEnter: () => setHighlightedIndex(index), children: _jsx("span", { className: "truncate", children: item.label }) }, item.value));
                            })) })] }) })] }));
}
//# sourceMappingURL=Combobox.js.map
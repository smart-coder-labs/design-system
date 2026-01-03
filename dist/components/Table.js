"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { ArrowUpDown, ChevronLeft, ChevronRight, Check, } from "lucide-react";
/* -------------------------------------------------------------------------- */
/*                               ROOT COMPONENT                               */
/* -------------------------------------------------------------------------- */
export function Table({ columns, data, selectable = false, striped = true, hoverable = true, density = "comfortable", page = 1, pageSize = 10, onPageChange, onSortChange, }) {
    const [sortKey, setSortKey] = React.useState(null);
    const [sortDirection, setSortDirection] = React.useState("asc");
    const [selectedRows, setSelectedRows] = React.useState(new Set());
    const handleSort = (col) => {
        if (!col.sortable)
            return;
        const newDirection = sortKey === col.key && sortDirection === "asc" ? "desc" : "asc";
        setSortKey(col.key);
        setSortDirection(newDirection);
        onSortChange?.(col.key, newDirection);
    };
    const toggleRow = (index) => {
        const copy = new Set(selectedRows);
        copy.has(index) ? copy.delete(index) : copy.add(index);
        setSelectedRows(copy);
    };
    const toggleAll = () => {
        if (selectedRows.size === data.length) {
            setSelectedRows(new Set());
        }
        else {
            setSelectedRows(new Set(data.map((_, i) => i)));
        }
    };
    const totalPages = Math.ceil(data.length / pageSize);
    const paginatedData = data.slice((page - 1) * pageSize, page * pageSize);
    const rowPadding = density === "compact" ? "py-2" : "py-3";
    return (_jsxs("div", { className: "overflow-hidden border border-border-primary rounded-xl bg-surface-elevated shadow-lg", children: [_jsxs("table", { className: "w-full border-collapse text-left", children: [_jsx("thead", { className: "bg-surface-secondary/50 border-b border-border-primary", children: _jsxs("tr", { children: [selectable && (_jsx("th", { className: "w-10 px-4", children: _jsx(Checkbox, { checked: selectedRows.size === data.length, onCheckedChange: toggleAll }) })), columns.map((col) => (_jsx("th", { className: cn("px-4 py-3 text-sm font-medium text-text-secondary select-none whitespace-nowrap", col.width && `w-[${col.width}]`), children: _jsxs("button", { className: cn(col.sortable
                                            ? "flex items-center gap-1 hover:text-text-primary transition-colors"
                                            : ""), onClick: () => handleSort(col), children: [col.header, col.sortable && (_jsx(ArrowUpDown, { className: cn("h-3 w-3 transition-opacity", sortKey === col.key
                                                    ? "opacity-100 text-text-primary"
                                                    : "opacity-40") }))] }) }, String(col.key))))] }) }), _jsxs("tbody", { children: [paginatedData.length === 0 && (_jsx("tr", { children: _jsx("td", { colSpan: columns.length + (selectable ? 1 : 0), className: "py-10 text-center text-text-tertiary", children: "No results found." }) })), paginatedData.map((row, index) => {
                                const globalIndex = (page - 1) * pageSize + index;
                                return (_jsxs(motion.tr, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.18 }, className: cn("border-b border-border-primary/50 transition-colors", striped && index % 2 === 1
                                        ? "bg-surface-secondary/40"
                                        : "", hoverable &&
                                        "hover:bg-surface-secondary/70 cursor-pointer"), children: [selectable && (_jsx("td", { className: "px-4", children: _jsx(Checkbox, { checked: selectedRows.has(globalIndex), onCheckedChange: () => toggleRow(globalIndex) }) })), columns.map((col) => (_jsx("td", { className: cn("px-4 text-sm text-text-primary", rowPadding), children: col.render
                                                ? col.render(row[col.key], row)
                                                : row[col.key] }, String(col.key))))] }, globalIndex));
                            })] })] }), _jsxs("div", { className: "flex items-center justify-between px-4 py-3 bg-surface-secondary/40 border-t border-border-primary", children: [_jsxs("p", { className: "text-xs text-text-tertiary", children: ["Page ", page, " of ", totalPages] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(PaginationButton, { disabled: page === 1, onClick: () => onPageChange?.(page - 1), children: _jsx(ChevronLeft, { className: "w-4 h-4" }) }), _jsx(PaginationButton, { disabled: page === totalPages, onClick: () => onPageChange?.(page + 1), children: _jsx(ChevronRight, { className: "w-4 h-4" }) })] })] })] }));
}
/* -------------------------------------------------------------------------- */
/*                               SUB COMPONENTS                               */
/* -------------------------------------------------------------------------- */
function PaginationButton({ disabled, children, onClick, }) {
    return (_jsx("button", { disabled: disabled, onClick: onClick, className: cn("p-2 rounded-lg border border-border-primary text-text-secondary transition-all", "hover:bg-surface-secondary hover:text-text-primary", "disabled:opacity-40 disabled:cursor-not-allowed"), children: children }));
}
function Checkbox({ checked, onCheckedChange, disabled, }) {
    return (_jsx("button", { type: "button", role: "checkbox", "aria-checked": checked, "aria-disabled": disabled || undefined, "data-state": checked ? "checked" : "unchecked", onClick: () => {
            if (disabled)
                return;
            onCheckedChange?.();
        }, onKeyDown: (event) => {
            if (disabled)
                return;
            if (event.key === " " || event.key === "Enter") {
                event.preventDefault();
                onCheckedChange?.();
            }
        }, className: cn("h-4 w-4 rounded-md border border-border-primary bg-surface-primary flex items-center justify-center", "data-[state=checked]:bg-accent-blue data-[state=checked]:border-accent-blue", "transition-colors", disabled && "opacity-50 cursor-not-allowed"), children: checked && _jsx(Check, { className: "h-3 w-3 text-white" }) }));
}
//# sourceMappingURL=Table.js.map
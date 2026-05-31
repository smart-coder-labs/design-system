"use client";

import * as React from "react";
import { cn } from '../../../lib/utils';;
import { motion } from "framer-motion";
import {
    ArrowUpDown,
    ChevronLeft,
    ChevronRight,
    Check,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export type Column<T> = {
    key: keyof T;
    header: string;
    width?: string;
    sortable?: boolean;
    render?: (value: any, row: T) => React.ReactNode;
};

export interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
    selectable?: boolean;
    striped?: boolean;
    hoverable?: boolean;
    density?: "comfortable" | "compact";
    page?: number;
    pageSize?: number;
    responsiveLayout?: 'table' | 'cards' | 'responsive';
    onPageChange?: (page: number) => void;
    onSortChange?: (key: keyof T, direction: "asc" | "desc") => void;
    onRowClick?: (row: T) => void;
}

/* -------------------------------------------------------------------------- */
/*                               ROOT COMPONENT                               */
/* -------------------------------------------------------------------------- */

export function Table<T>({
    columns,
    data,
    selectable = false,
    striped = true,
    hoverable = true,
    density = "comfortable",
    page = 1,
    pageSize = 10,
    responsiveLayout = "responsive",
    onPageChange,
    onSortChange,
    onRowClick,
}: TableProps<T>) {
    const [sortKey, setSortKey] = React.useState<keyof T | null>(null);
    const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">(
        "asc"
    );
    const [selectedRows, setSelectedRows] = React.useState<Set<number>>(new Set());

    const handleSort = (col: Column<T>) => {
        if (!col.sortable) return;
        const newDirection =
            sortKey === col.key && sortDirection === "asc" ? "desc" : "asc";

        setSortKey(col.key);
        setSortDirection(newDirection);
        onSortChange?.(col.key, newDirection);
    };

    const toggleRow = (index: number) => {
        const copy = new Set(selectedRows);
        copy.has(index) ? copy.delete(index) : copy.add(index);
        setSelectedRows(copy);
    };

    const toggleAll = () => {
        if (selectedRows.size === data.length) {
            setSelectedRows(new Set());
        } else {
            setSelectedRows(new Set(data.map((_, i) => i)));
        }
    };

    const totalPages = Math.ceil(data.length / pageSize);

    const paginatedData = data.slice(
        (page - 1) * pageSize,
        page * pageSize
    );

    const rowPadding =
        density === "compact" ? "py-2" : "py-3";

    return (
        <div className="overflow-hidden border border-border-primary rounded-xl bg-surface-elevated shadow-lg">
            {/* Mobile / Card Grid View */}
            <div className={cn(
                "p-4 bg-surface-secondary/20 rounded-xl",
                responsiveLayout === "cards" && "block",
                responsiveLayout === "table" && "hidden",
                responsiveLayout === "responsive" && "block md:hidden"
            )}>
                {selectable && (
                    <div className="flex items-center justify-between px-4 py-3 bg-surface-elevated border border-border-primary rounded-xl shadow-sm mb-4">
                        <label className="flex items-center gap-3 text-xs font-semibold text-text-secondary uppercase tracking-wider cursor-pointer">
                            <Checkbox
                                checked={selectedRows.size === data.length && data.length > 0}
                                onCheckedChange={toggleAll}
                            />
                            <span>Select All</span>
                        </label>
                        <span className="text-xs font-medium px-2.5 py-1 bg-accent-blue/10 text-accent-blue rounded-full">
                            {selectedRows.size} selected
                        </span>
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {paginatedData.length === 0 ? (
                        <div className="col-span-full py-12 text-center text-text-tertiary bg-surface-elevated border border-border-primary rounded-xl">
                            No results found.
                        </div>
                    ) : (
                        paginatedData.map((row, index) => {
                            const globalIndex = (page - 1) * pageSize + index;
                            const isSelected = selectedRows.has(globalIndex);
                            const titleValue = columns[0]?.render
                                ? columns[0].render(row[columns[0].key], row)
                                : String(row[columns[0]?.key] || "");
                            
                            // Get initials or first char for visual avatar representation
                            const firstChar = typeof titleValue === 'string' 
                                ? titleValue.charAt(0) 
                                : String(row[columns[0]?.key] || "?").charAt(0);

                            return (
                                <motion.div
                                    key={globalIndex}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, delay: index * 0.03 }}
                                    onClick={() => onRowClick?.(row)}
                                    className={cn(
                                        "group flex flex-col justify-between border rounded-2xl bg-surface-elevated overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer",
                                        isSelected 
                                            ? "border-accent-blue bg-accent-blue/[0.02]" 
                                            : "border-border-primary/80 hover:border-accent-blue/30"
                                    )}
                                >
                                    {/* Card Header */}
                                    <div className="flex items-center justify-between px-4 py-3 bg-surface-secondary/30 border-b border-border-primary/50">
                                        <div className="flex items-center gap-3 min-w-0">
                                            {selectable && (
                                                <div onClick={(e) => e.stopPropagation()} className="flex-shrink-0">
                                                    <Checkbox
                                                        checked={isSelected}
                                                        onCheckedChange={() => toggleRow(globalIndex)}
                                                    />
                                                </div>
                                            )}
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-blue/15 to-accent-blue/5 text-accent-blue flex items-center justify-center font-bold text-xs flex-shrink-0 select-none">
                                                {firstChar.toUpperCase()}
                                            </div>
                                            <span className="font-semibold text-text-primary text-sm truncate group-hover:text-accent-blue transition-colors">
                                                {titleValue}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-4 space-y-2.5 flex-grow">
                                        <div className="grid grid-cols-2 gap-3 text-sm">
                                            {columns.slice(1).map((col) => {
                                                const renderedVal = col.render
                                                    ? col.render(row[col.key], row)
                                                    : String(row[col.key] || "-");

                                                return (
                                                    <div key={String(col.key)} className="flex flex-col gap-0.5 py-0.5">
                                                        <span className="text-text-tertiary text-[10px] font-semibold uppercase tracking-wider">{col.header}</span>
                                                        <span className="text-text-primary text-xs font-medium truncate">
                                                            {renderedVal}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })
                    )}
                </div>
            </div>

            {/* Desktop Table View */}
            <table className={cn(
                "w-full border-collapse text-left",
                responsiveLayout === "cards" && "hidden",
                responsiveLayout === "table" && "table",
                responsiveLayout === "responsive" && "hidden md:table"
            )}>
                <thead className="bg-surface-secondary/50 border-b border-border-primary">
                    <tr>
                        {selectable && (
                            <th className="w-10 px-4">
                                <Checkbox
                                    checked={selectedRows.size === data.length}
                                    onCheckedChange={toggleAll}
                                />
                            </th>
                        )}

                        {columns.map((col) => (
                            <th
                                key={String(col.key)}
                                className={cn(
                                    "px-4 py-3 text-sm font-medium text-text-secondary select-none whitespace-nowrap",
                                    col.width && `w-[${col.width}]`
                                )}
                            >
                                <button
                                    className={cn(
                                        col.sortable
                                            ? "flex items-center gap-1 hover:text-text-primary transition-colors"
                                            : ""
                                    )}
                                    onClick={() => handleSort(col)}
                                >
                                    {col.header}

                                    {col.sortable && (
                                        <ArrowUpDown
                                            className={cn(
                                                "h-3 w-3 transition-opacity",
                                                sortKey === col.key
                                                    ? "opacity-100 text-text-primary"
                                                    : "opacity-40"
                                            )}
                                        />
                                    )}
                                </button>
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {paginatedData.length === 0 && (
                        <tr>
                            <td
                                colSpan={columns.length + (selectable ? 1 : 0)}
                                className="py-10 text-center text-text-tertiary"
                            >
                                No results found.
                            </td>
                        </tr>
                    )}

                    {paginatedData.map((row, index) => {
                        const globalIndex = (page - 1) * pageSize + index;

                        return (
                            <motion.tr
                                key={globalIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.18 }}
                                className={cn(
                                    "border-b border-border-primary/50 transition-colors",
                                    striped && index % 2 === 1
                                        ? "bg-surface-secondary/40"
                                        : "",
                                    hoverable &&
                                    "hover:bg-surface-secondary/70 cursor-pointer"
                                )}
                                onClick={() => onRowClick?.(row)}
                            >
                                {selectable && (
                                    <td className="px-4">
                                        <Checkbox
                                            checked={selectedRows.has(globalIndex)}
                                            onCheckedChange={() => toggleRow(globalIndex)}
                                        />
                                    </td>
                                )}

                                {columns.map((col) => (
                                    <td
                                        key={String(col.key)}
                                        className={cn(
                                            "px-4 text-sm text-text-primary",
                                            rowPadding
                                        )}
                                    >
                                        {col.render
                                            ? col.render(row[col.key], row)
                                            : (row[col.key] as any)}
                                    </td>
                                ))}
                            </motion.tr>
                        );
                    })}
                </tbody>
            </table>

            {/* PAGINATION */}
            <div className="flex items-center justify-between px-4 py-3 bg-surface-secondary/40 border-t border-border-primary">
                <p className="text-xs text-text-tertiary">
                    Page {page} of {totalPages}
                </p>

                <div className="flex items-center gap-2">
                    <PaginationButton
                        disabled={page === 1}
                        onClick={() => onPageChange?.(page - 1)}
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </PaginationButton>
                    <PaginationButton
                        disabled={page === totalPages}
                        onClick={() => onPageChange?.(page + 1)}
                    >
                        <ChevronRight className="w-4 h-4" />
                    </PaginationButton>
                </div>
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*                               SUB COMPONENTS                               */
/* -------------------------------------------------------------------------- */

function PaginationButton({
    disabled,
    children,
    onClick,
}: {
    disabled?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={cn(
                "p-2 rounded-lg border border-border-primary text-text-secondary transition-all",
                "hover:bg-surface-secondary hover:text-text-primary",
                "disabled:opacity-40 disabled:cursor-not-allowed"
            )}
        >
            {children}
        </button>
    );
}

function Checkbox({
    checked,
    onCheckedChange,
    disabled,
}: {
    checked: boolean;
    onCheckedChange?: () => void;
    disabled?: boolean;
}) {
    return (
        <button
            type="button"
            role="checkbox"
            aria-checked={checked}
            aria-disabled={disabled || undefined}
            data-state={checked ? "checked" : "unchecked"}
            onClick={() => {
                if (disabled) return;
                onCheckedChange?.();
            }}
            onKeyDown={(event) => {
                if (disabled) return;
                if (event.key === " " || event.key === "Enter") {
                    event.preventDefault();
                    onCheckedChange?.();
                }
            }}
            className={cn(
                "h-4 w-4 rounded-md border border-border-primary bg-surface-primary flex items-center justify-center",
                "data-[state=checked]:bg-accent-blue data-[state=checked]:border-accent-blue",
                "transition-colors",
                disabled && "opacity-50 cursor-not-allowed"
            )}
        >
            {checked && <Check className="h-3 w-3 text-white" />}
        </button>
    );
}

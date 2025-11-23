"use client";

import * as React from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import {
    Filter,
    Settings2,
    Pin,
    PinOff,
    Download,
    Check,
} from "lucide-react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Table } from "./Table";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export interface DataGridColumn<T> {
    key: keyof T;
    header: string;
    width?: number;
    minWidth?: number;
    maxWidth?: number;
    sortable?: boolean;
    filterable?: boolean;
    resizable?: boolean;
    pinnable?: boolean;
    editable?: boolean;
    groupable?: boolean;
    render?: (value: any, row: T) => React.ReactNode;
    filterType?: "text" | "number" | "select" | "date";
    filterOptions?: { label: string; value: any }[];
}

export interface DataGridProps<T> {
    columns: DataGridColumn<T>[];
    data: T[];
    selectable?: boolean;
    striped?: boolean;
    hoverable?: boolean;
    density?: "comfortable" | "compact";
    page?: number;
    pageSize?: number;
    virtualScrolling?: boolean;
    maxHeight?: string;
    onPageChange?: (page: number) => void;
    onSortChange?: (key: keyof T, direction: "asc" | "desc") => void;
    onCellEdit?: (row: T, key: keyof T, value: any) => void;
    onExport?: () => void;
}

interface ColumnState {
    visible: boolean;
    pinned: "left" | "right" | null;
    width: number;
}

/* -------------------------------------------------------------------------- */
/*                               ROOT COMPONENT                               */
/* -------------------------------------------------------------------------- */

export function DataGrid<T>({
    columns,
    data,
    selectable = false,
    striped = true,
    hoverable = true,
    density = "comfortable",
    page = 1,
    pageSize = 10,
    virtualScrolling = false,
    maxHeight = "600px",
    onPageChange,
    onSortChange,
    onCellEdit,
    onExport,
}: DataGridProps<T>) {
    // State
    const [sortKey, setSortKey] = React.useState<keyof T | null>(null);
    const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc");
    const [selectedRows, setSelectedRows] = React.useState<Set<number>>(new Set());
    const [columnStates, setColumnStates] = React.useState<Map<keyof T, ColumnState>>(
        new Map(
            columns.map((col) => [
                col.key,
                {
                    visible: true,
                    pinned: null,
                    width: col.width || 150,
                },
            ])
        )
    );
    const [filters, setFilters] = React.useState<Map<keyof T, string>>(new Map());
    const [groupBy, setGroupBy] = React.useState<keyof T | null>(null);
    const [expandedGroups, setExpandedGroups] = React.useState<Set<string>>(new Set());
    const [resizingColumn, setResizingColumn] = React.useState<keyof T | null>(null);
    const [editingCell, setEditingCell] = React.useState<{
        row: number;
        col: keyof T;
    } | null>(null);

    // Handlers
    const handleSort = (col: DataGridColumn<T>) => {
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

    const toggleColumnVisibility = (key: keyof T) => {
        setColumnStates((prev) => {
            const newStates = new Map(prev);
            const state = newStates.get(key);
            if (state) {
                newStates.set(key, { ...state, visible: !state.visible });
            }
            return newStates;
        });
    };

    const toggleColumnPin = (key: keyof T) => {
        setColumnStates((prev) => {
            const newStates = new Map(prev);
            const state = newStates.get(key);
            if (state) {
                const newPinned = state.pinned === "left" ? null : "left";
                newStates.set(key, { ...state, pinned: newPinned });
            }
            return newStates;
        });
    };

    const updateFilter = (key: keyof T, value: string) => {
        setFilters((prev) => {
            const newFilters = new Map(prev);
            if (value) {
                newFilters.set(key, value);
            } else {
                newFilters.delete(key);
            }
            return newFilters;
        });
    };

    const toggleGroup = (groupValue: string) => {
        setExpandedGroups((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(groupValue)) {
                newSet.delete(groupValue);
            } else {
                newSet.add(groupValue);
            }
            return newSet;
        });
    };

    const handleCellEdit = (rowIndex: number, key: keyof T, value: any) => {
        onCellEdit?.(data[rowIndex], key, value);
        setEditingCell(null);
    };

    const exportToCSV = () => {
        if (!onExport) {
            // Default CSV export
            const visibleColumns = columns.filter(
                (col) => columnStates.get(col.key)?.visible
            );
            const headers = visibleColumns.map((col) => col.header).join(",");
            const rows = filteredData
                .map((row) =>
                    visibleColumns
                        .map((col) => {
                            const value = row[col.key];
                            return typeof value === "string" && value.includes(",")
                                ? `"${value}"`
                                : value;
                        })
                        .join(",")
                )
                .join("\n");

            const csv = `${headers}\n${rows}`;
            const blob = new Blob([csv], { type: "text/csv" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "data-export.csv";
            a.click();
            URL.revokeObjectURL(url);
        } else {
            onExport();
        }
    };

    // Filter data
    let filteredData = React.useMemo(() => {
        let result = [...data];

        // Apply filters
        filters.forEach((filterValue, key) => {
            result = result.filter((row) => {
                const value = String(row[key]).toLowerCase();
                return value.includes(filterValue.toLowerCase());
            });
        });

        // Apply sorting
        if (sortKey) {
            result.sort((a, b) => {
                const aVal = a[sortKey];
                const bVal = b[sortKey];

                if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
                if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
                return 0;
            });
        }

        return result;
    }, [data, filters, sortKey, sortDirection]);

    // Group data
    const groupedData = React.useMemo(() => {
        if (!groupBy) return null;

        const groups = new Map<any, T[]>();
        filteredData.forEach((row) => {
            const groupValue = row[groupBy];
            if (!groups.has(groupValue)) {
                groups.set(groupValue, []);
            }
            groups.get(groupValue)!.push(row);
        });

        return groups;
    }, [filteredData, groupBy]);

    // Pagination
    const totalPages = Math.ceil(filteredData.length / pageSize);
    const paginatedData = virtualScrolling
        ? filteredData
        : filteredData.slice((page - 1) * pageSize, page * pageSize);

    // Column organization
    const visibleColumns = React.useMemo(() => {
        const visible = columns.filter((col) => columnStates.get(col.key)?.visible);
        const pinned = visible.filter((col) => columnStates.get(col.key)?.pinned === "left");
        const unpinned = visible.filter((col) => !columnStates.get(col.key)?.pinned);
        return [...pinned, ...unpinned];
    }, [columns, columnStates]);

    const rowPadding = density === "compact" ? "py-2" : "py-3";

    return (
        <div className="flex flex-col gap-3">
            {/* TOOLBAR */}
            <div className="flex items-center justify-between px-4 py-3 bg-surface-elevated border border-border-primary rounded-xl">
                <div className="flex items-center gap-2">
                    {/* Group By */}
                    <select
                        value={groupBy ? String(groupBy) : ""}
                        onChange={(e) => setGroupBy(e.target.value as keyof T || null)}
                        className="px-3 py-1.5 text-sm bg-surface-secondary border border-border-primary rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    >
                        <option value="">No grouping</option>
                        {columns
                            .filter((col) => col.groupable)
                            .map((col) => (
                                <option key={String(col.key)} value={String(col.key)}>
                                    Group by {col.header}
                                </option>
                            ))}
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    {/* Export */}
                    <button
                        onClick={exportToCSV}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-surface-secondary border border-border-primary rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-secondary/70 transition-all"
                    >
                        <Download className="w-4 h-4" />
                        Export CSV
                    </button>

                    {/* Column Visibility */}
                    <ColumnVisibilityMenu
                        columns={columns}
                        columnStates={columnStates}
                        onToggleVisibility={toggleColumnVisibility}
                        onTogglePin={toggleColumnPin}
                    />
                </div>
            </div>

            {/* TABLE */}
            <div
                className="overflow-auto border border-border-primary rounded-xl bg-surface-elevated shadow-lg"
                style={{ maxHeight: virtualScrolling ? maxHeight : undefined }}
            >
                <Table
                    columns={columns as any}          // tipado compatible con Table
                    data={paginatedData}
                    striped={striped}
                    hoverable={hoverable}
                    density={density}
                    onSortChange={onSortChange}
                    onPageChange={onPageChange}
                    page={page}
                    pageSize={pageSize}
                />
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*                               SUB COMPONENTS                               */
/* -------------------------------------------------------------------------- */

interface DataGridRowProps<T> {
    row: T;
    index: number;
    columns: DataGridColumn<T>[];
    columnStates: Map<keyof T, ColumnState>;
    selectable: boolean;
    selected: boolean;
    striped: boolean;
    hoverable: boolean;
    rowPadding: string;
    editingCell: { row: number; col: keyof T } | null;
    onToggle: (index: number) => void;
    onCellClick: (key: keyof T) => void;
    onCellEdit: (key: keyof T, value: any) => void;
}

function DataGridRow<T>({
    row,
    index,
    columns,
    columnStates,
    selectable,
    selected,
    striped,
    hoverable,
    rowPadding,
    editingCell,
    onToggle,
    onCellClick,
    onCellEdit,
}: DataGridRowProps<T>) {
    return (
        <motion.tr
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className={cn(
                "border-b border-border-primary/50 transition-colors",
                striped && index % 2 === 1 ? "bg-surface-secondary/40" : "",
                hoverable && "hover:bg-surface-secondary/70",
                selected && "bg-accent-blue/10"
            )}
        >
            {selectable && (
                <td className="px-4">
                    <Checkbox checked={selected} onCheckedChange={() => onToggle(index)} />
                </td>
            )}

            {columns.map((col) => {
                const state = columnStates.get(col.key)!;
                const isEditing =
                    editingCell?.row === index && editingCell?.col === col.key;

                return (
                    <td
                        key={String(col.key)}
                        className={cn(
                            "px-4 text-sm text-text-primary",
                            rowPadding,
                            state.pinned === "left" &&
                            "sticky left-0 bg-surface-primary z-10"
                        )}
                        onClick={() => col.editable && onCellClick(col.key)}
                    >
                        {isEditing ? (
                            <input
                                type="text"
                                defaultValue={String(row[col.key])}
                                autoFocus
                                onBlur={(e) => onCellEdit(col.key, e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        onCellEdit(col.key, e.currentTarget.value);
                                    }
                                }}
                                className="w-full px-2 py-1 bg-surface-secondary border border-accent-blue rounded-md focus:outline-none"
                            />
                        ) : col.render ? (
                            col.render(row[col.key], row)
                        ) : (
                            (row[col.key] as any)
                        )}
                    </td>
                );
            })}
        </motion.tr>
    );
}

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
}: {
    checked: boolean;
    onCheckedChange?: () => void;
}) {
    return (
        <CheckboxPrimitive.Root
            checked={checked}
            onCheckedChange={onCheckedChange}
            className={cn(
                "h-4 w-4 rounded-md border border-border-primary bg-surface-primary flex items-center justify-center",
                "data-[state=checked]:bg-accent-blue data-[state=checked]:border-accent-blue",
                "transition-colors"
            )}
        >
            <CheckboxPrimitive.Indicator>
                <Check className="h-3 w-3 text-white" />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
}

function FilterButton<T>({
    column,
    value,
    onChange,
}: {
    column: DataGridColumn<T>;
    value: string;
    onChange: (value: string) => void;
}) {
    const [open, setOpen] = React.useState(false);
    const [localValue, setLocalValue] = React.useState(value);

    return (
        <DropdownMenuPrimitive.Root open={open} onOpenChange={setOpen}>
            <DropdownMenuPrimitive.Trigger asChild>
                <button
                    className={cn(
                        "p-1 rounded-md transition-colors",
                        value
                            ? "text-accent-blue bg-accent-blue/10"
                            : "text-text-tertiary hover:text-text-secondary"
                    )}
                >
                    <Filter className="w-3.5 h-3.5" />
                </button>
            </DropdownMenuPrimitive.Trigger>

            <DropdownMenuPrimitive.Portal>
                <DropdownMenuPrimitive.Content
                    align="end"
                    className="z-50 min-w-[200px] p-2 bg-surface-elevated border border-border-primary rounded-xl shadow-lg"
                >
                    <div className="flex flex-col gap-2">
                        <input
                            type="text"
                            placeholder={`Filter ${column.header}...`}
                            value={localValue}
                            onChange={(e) => setLocalValue(e.target.value)}
                            className="px-3 py-2 text-sm bg-surface-secondary border border-border-primary rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-blue"
                        />
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => {
                                    onChange(localValue);
                                    setOpen(false);
                                }}
                                className="flex-1 px-3 py-1.5 text-sm bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors"
                            >
                                Apply
                            </button>
                            <button
                                onClick={() => {
                                    setLocalValue("");
                                    onChange("");
                                    setOpen(false);
                                }}
                                className="px-3 py-1.5 text-sm bg-surface-secondary text-text-secondary rounded-lg hover:text-text-primary transition-colors"
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </DropdownMenuPrimitive.Content>
            </DropdownMenuPrimitive.Portal>
        </DropdownMenuPrimitive.Root>
    );
}

function ColumnVisibilityMenu<T>({
    columns,
    columnStates,
    onToggleVisibility,
    onTogglePin,
}: {
    columns: DataGridColumn<T>[];
    columnStates: Map<keyof T, ColumnState>;
    onToggleVisibility: (key: keyof T) => void;
    onTogglePin: (key: keyof T) => void;
}) {
    return (
        <DropdownMenuPrimitive.Root>
            <DropdownMenuPrimitive.Trigger asChild>
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-surface-secondary border border-border-primary rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-secondary/70 transition-all">
                    <Settings2 className="w-4 h-4" />
                    Columns
                </button>
            </DropdownMenuPrimitive.Trigger>

            <DropdownMenuPrimitive.Portal>
                <DropdownMenuPrimitive.Content
                    align="end"
                    className="z-50 min-w-[220px] p-2 bg-surface-elevated border border-border-primary rounded-xl shadow-lg max-h-[400px] overflow-auto"
                >
                    {columns.map((col) => {
                        const state = columnStates.get(col.key)!;
                        return (
                            <div
                                key={String(col.key)}
                                className="flex items-center justify-between px-3 py-2 text-sm text-text-primary hover:bg-surface-secondary rounded-lg transition-colors"
                            >
                                <label className="flex items-center gap-2 flex-1 cursor-pointer">
                                    <Checkbox
                                        checked={state.visible}
                                        onCheckedChange={() => onToggleVisibility(col.key)}
                                    />
                                    <span>{col.header}</span>
                                </label>

                                {col.pinnable && (
                                    <button
                                        onClick={() => onTogglePin(col.key)}
                                        className={cn(
                                            "p-1 rounded-md transition-colors",
                                            state.pinned
                                                ? "text-accent-blue bg-accent-blue/10"
                                                : "text-text-tertiary hover:text-text-secondary"
                                        )}
                                    >
                                        {state.pinned ? (
                                            <Pin className="w-3.5 h-3.5" />
                                        ) : (
                                            <PinOff className="w-3.5 h-3.5" />
                                        )}
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </DropdownMenuPrimitive.Content>
            </DropdownMenuPrimitive.Portal>
        </DropdownMenuPrimitive.Root>
    );
}

function ColumnResizeHandle<T>({
    columnKey,
    onResize,
}: {
    columnKey: keyof T;
    onResize: (width: number) => void;
}) {
    const [isDragging, setIsDragging] = React.useState(false);
    const startXRef = React.useRef(0);
    const startWidthRef = React.useRef(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
        startXRef.current = e.clientX;
        const th = (e.target as HTMLElement).closest("th");
        startWidthRef.current = th?.offsetWidth || 150;

        const handleMouseMove = (moveEvent: MouseEvent) => {
            const diff = moveEvent.clientX - startXRef.current;
            const newWidth = Math.max(100, startWidthRef.current + diff);
            onResize(newWidth);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    return (
        <div
            onMouseDown={handleMouseDown}
            className={cn(
                "absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-accent-blue transition-colors",
                isDragging && "bg-accent-blue"
            )}
        />
    );
}

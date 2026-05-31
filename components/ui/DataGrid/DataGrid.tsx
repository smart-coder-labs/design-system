"use client";

import * as React from "react";
import { cn } from "../../../lib/utils";
import { motion } from "framer-motion";
import { Download, Filter, Pin, PinOff, Settings2 } from "lucide-react";
import { Table } from "../Table";
import { Checkbox } from "../Checkbox";
import { Combobox } from "../Combobox";
import { DataGridColumn, DataGridProps } from './DataGrid.types';

interface ColumnState {
    visible: boolean;
    pinned: "left" | "right" | null;
    width: number;
}

const DataGridComponent = <T,>(
    {
        columns = [],
        data = [],
        selectable = false,
        striped = true,
        hoverable = true,
        density = "comfortable",
        page = 1,
        pageSize = 10,
        virtualScrolling = false,
        maxHeight = "600px",
        responsiveLayout = "responsive",
        onPageChange,
        onSortChange,
        onCellEdit,
        onExport,
        className,
        variant = "default",
        ...props
    }: DataGridProps<T>,
    ref: React.Ref<HTMLDivElement>
) => {
    const isGlass = variant === "glasphormism";
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

    let filteredData = React.useMemo(() => {
        let result = [...data];

        filters.forEach((filterValue, key) => {
            result = result.filter((row) => {
                const value = String(row[key]).toLowerCase();
                return value.includes(filterValue.toLowerCase());
            });
        });

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

    const totalPages = Math.ceil(filteredData.length / pageSize);
    const paginatedData = virtualScrolling
        ? filteredData
        : filteredData.slice((page - 1) * pageSize, page * pageSize);

    const visibleColumns = React.useMemo(() => {
        const visible = columns.filter((col) => columnStates.get(col.key)?.visible);
        const pinned = visible.filter((col) => columnStates.get(col.key)?.pinned === "left");
        const unpinned = visible.filter((col) => !columnStates.get(col.key)?.pinned);
        return [...pinned, ...unpinned];
    }, [columns, columnStates]);

    const rowPadding = density === "compact" ? "py-2" : "py-3";

    return (
        <div ref={ref} className={cn("flex flex-col gap-3", className)} {...props}>
            <div className={cn(
                "flex items-center justify-between px-4 py-3 border rounded-xl",
                isGlass
                    ? "bg-surface-glass/40 backdrop-blur-md border-border-primary/30 shadow-sm"
                    : "bg-surface-elevated border-border-primary"
            )}>
                <div className="flex items-center gap-2">
                    <select
                        value={groupBy ? String(groupBy) : ""}
                        onChange={(e) => setGroupBy(e.target.value as keyof T || null)}
                        className={cn(
                            "px-3 py-1.5 text-sm border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all",
                            isGlass
                                ? "bg-surface-glass/20 border-border-primary/30 hover:bg-surface-glass/30"
                                : "bg-surface-secondary border-border-primary"
                        )}
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
                    <button
                        onClick={exportToCSV}
                        className={cn(
                            "flex items-center gap-1.5 px-3 py-1.5 text-sm border rounded-lg text-text-secondary transition-all",
                            isGlass
                                ? "bg-surface-glass/20 border-border-primary/30 hover:text-text-primary hover:bg-surface-glass/45"
                                : "bg-surface-secondary border-border-primary hover:text-text-primary hover:bg-surface-secondary/70"
                        )}
                    >
                        <Download className="w-4 h-4" />
                        Export CSV
                    </button>

                    <ColumnVisibilityMenu
                        columns={columns}
                        columnStates={columnStates}
                        onToggleVisibility={toggleColumnVisibility}
                        onTogglePin={toggleColumnPin}
                        variant={variant}
                    />
                </div>
            </div>

            <div
                className={cn(
                    "overflow-auto border rounded-xl shadow-lg",
                    isGlass
                        ? "border-border-primary/30 bg-surface-glass/40 backdrop-blur-md"
                        : "border-border-primary bg-surface-elevated"
                )}
                style={{ maxHeight: virtualScrolling ? maxHeight : undefined }}
            >
                <Table
                    columns={columns as any}
                    data={paginatedData}
                    striped={striped}
                    hoverable={hoverable}
                    density={density}
                    selectable={selectable}
                    responsiveLayout={responsiveLayout}
                    onSortChange={onSortChange}
                    onPageChange={onPageChange}
                    page={page}
                    pageSize={pageSize}
                    variant={variant}
                    nested={true}
                />
            </div>
        </div>
    );
};

const DataGridRoot = React.forwardRef(DataGridComponent) as unknown as <T>(
    props: DataGridProps<T> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactNode;
(DataGridRoot as any).displayName = "DataGrid";

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
    variant?: 'default' | 'glasphormism';
}

const DataGridRowInner = <T,>(
    {
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
        variant = 'default',
    }: DataGridRowProps<T>,
    ref: React.Ref<HTMLTableRowElement>
) => {
    const isGlass = variant === 'glasphormism';
    return (
        <motion.tr
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className={cn(
                isGlass ? "border-b border-border-primary/20 transition-colors" : "border-b border-border-primary/50 transition-colors",
                striped && index % 2 === 1
                    ? isGlass ? "bg-surface-glass/10" : "bg-surface-secondary/40"
                    : "",
                hoverable &&
                (isGlass ? "hover:bg-surface-glass/25" : "hover:bg-surface-secondary/70"),
                selected &&
                (isGlass ? "bg-accent-blue/15" : "bg-accent-blue/10")
            )}
        >
            {selectable && (
                <td className="px-4">
                    <Checkbox
                        checked={selected}
                        onCheckedChange={() => onToggle(index)}
                        className={isGlass ? "border-border-primary/45 bg-surface-glass/25" : undefined}
                    />
                </td>
            )}

            {columns.map((col) => {
                const state = columnStates.get(col.key);
                const isEditing =
                    editingCell?.row === index && editingCell?.col === col.key;

                return (
                    <td
                        key={String(col.key)}
                        className={cn(
                            "px-4 text-sm text-text-primary",
                            rowPadding,
                            state?.pinned === "left" &&
                            (isGlass
                                ? "sticky left-0 bg-surface-glass/80 backdrop-blur-md z-10"
                                : "sticky left-0 bg-surface-primary z-10")
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
                                className={cn(
                                    "w-full px-2 py-1 border rounded-md focus:outline-none transition-all",
                                    isGlass
                                        ? "bg-surface-glass/25 border-accent-blue/70 focus:bg-surface-glass/35"
                                        : "bg-surface-secondary border-accent-blue"
                                )}
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
};

const DataGridRow = React.forwardRef(DataGridRowInner) as unknown as <T>(
    props: DataGridRowProps<T> & { ref?: React.Ref<HTMLTableRowElement> }
) => React.ReactNode;
(DataGridRow as any).displayName = "DataGridRow";

const PaginationButton = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'glasphormism' }
>(({ className, variant = 'default', ...props }, ref) => {
    const isGlass = variant === 'glasphormism';
    return (
        <button
            ref={ref}
            className={cn(
                "p-2 rounded-lg border text-text-secondary transition-all",
                isGlass
                    ? "border-border-primary/30 bg-surface-glass/20 hover:bg-surface-glass/45 hover:text-text-primary"
                    : "border-border-primary hover:bg-surface-secondary hover:text-text-primary",
                "disabled:opacity-40 disabled:cursor-not-allowed",
                className
            )}
            {...props}
        />
    );
});
PaginationButton.displayName = "DataGridPagination";

interface FilterButtonProps<T> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    column: DataGridColumn<T>;
    value: string;
    onChange: (value: string) => void;
    variant?: 'default' | 'glasphormism';
}

const FilterButtonInner = <T,>(
    { column, value, onChange, className, variant = 'default', ...props }: FilterButtonProps<T>,
    ref: React.Ref<HTMLDivElement>
) => {
    const [open, setOpen] = React.useState(false);
    const [localValue, setLocalValue] = React.useState(value);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const isSelect = column.filterType === "select" && column.filterOptions?.length;
    const isGlass = variant === 'glasphormism';

    React.useEffect(() => {
        if (!open) return;
        const handleClick = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [open]);

    React.useImperativeHandle(ref, () => containerRef.current!);

    return (
        <div className={cn("relative", className)} ref={containerRef} {...props}>
            <button
                className={cn(
                    "p-1 rounded-md transition-colors",
                    value ? "text-accent-blue bg-accent-blue/10" : "text-text-tertiary hover:text-text-secondary"
                )}
                onClick={() => setOpen((prev) => !prev)}
                type="button"
            >
                <Filter className="w-3.5 h-3.5" />
            </button>

            {open && (
                <div className={cn(
                    "absolute right-0 mt-2 z-50 min-w-[220px] p-3 border rounded-xl shadow-lg space-y-2",
                    isGlass
                        ? "bg-surface-glass/80 backdrop-blur-md border-border-primary/35 shadow-xl"
                        : "bg-surface-elevated border-border-primary shadow-lg"
                )}>
                    {isSelect ? (
                        <Combobox
                            items={column.filterOptions!.map((opt) => ({ value: String(opt.value), label: opt.label }))}
                            value={localValue || undefined}
                            onChange={(val) => setLocalValue(val)}
                            placeholder={`Filter ${column.header}...`}
                            searchPlaceholder="Search..."
                            emptyMessage="No options"
                            className={isGlass ? "bg-surface-glass/20 border-border-primary/30" : undefined}
                        />
                    ) : (
                        <input
                            type="text"
                            placeholder={`Filter ${column.header}...`}
                            value={localValue}
                            onChange={(e) => setLocalValue(e.target.value)}
                            className={cn(
                                "w-full px-3 py-2 text-sm border rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all",
                                isGlass
                                    ? "bg-surface-glass/25 border-border-primary/30 focus:bg-surface-glass/35"
                                    : "bg-surface-secondary border-border-primary"
                            )}
                        />
                    )}
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
                            className={cn(
                                "px-3 py-1.5 text-sm rounded-lg transition-colors",
                                isGlass
                                    ? "bg-surface-glass/25 hover:bg-surface-glass/40 text-text-secondary hover:text-text-primary"
                                    : "bg-surface-secondary text-text-secondary hover:text-text-primary"
                            )}
                        >
                            Clear
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const FilterButton = React.forwardRef(FilterButtonInner) as unknown as <T>(
    props: FilterButtonProps<T> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactNode;
(FilterButton as any).displayName = "DataGridFilter";

interface ColumnVisibilityMenuProps<T> extends React.HTMLAttributes<HTMLDivElement> {
    columns: DataGridColumn<T>[];
    columnStates: Map<keyof T, ColumnState>;
    onToggleVisibility: (key: keyof T) => void;
    onTogglePin: (key: keyof T) => void;
    variant?: 'default' | 'glasphormism';
}

const ColumnVisibilityMenuInner = <T,>(
    {
        columns,
        columnStates,
        onToggleVisibility,
        onTogglePin,
        className,
        variant = 'default',
        ...props
    }: ColumnVisibilityMenuProps<T>,
    ref: React.Ref<HTMLDivElement>
) => {
    const [open, setOpen] = React.useState(false);
    const [selectedKey, setSelectedKey] = React.useState<string>(columns[0] ? String(columns[0].key) : "");
    const containerRef = React.useRef<HTMLDivElement>(null);
    const selectedColumn = columns.find((col) => String(col.key) === selectedKey) ?? columns[0];
    const selectedState = selectedColumn ? columnStates.get(selectedColumn.key)! : undefined;
    const isGlass = variant === 'glasphormism';

    React.useEffect(() => {
        if (!open) return;
        const handleClick = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [open]);

    React.useImperativeHandle(ref, () => containerRef.current!);

    return (
        <div className={cn("relative", className)} ref={containerRef} {...props}>
            <button
                className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 text-sm border rounded-lg text-text-secondary transition-all",
                    isGlass
                        ? "bg-surface-glass/20 border-border-primary/30 hover:text-text-primary hover:bg-surface-glass/45"
                        : "bg-surface-secondary border-border-primary hover:text-text-primary hover:bg-surface-secondary/70"
                )}
                onClick={() => setOpen((prev) => !prev)}
                type="button"
            >
                <Settings2 className="w-4 h-4" />
                Columns
            </button>

            {open && (
                <div className={cn(
                    "absolute right-0 mt-2 z-50 w-[260px] p-3 border rounded-xl shadow-lg space-y-3",
                    isGlass
                        ? "bg-surface-glass/80 backdrop-blur-md border-border-primary/35 shadow-xl"
                        : "bg-surface-elevated border-border-primary shadow-lg"
                )}>
                    <Combobox
                        items={columns.map((col) => ({ value: String(col.key), label: col.header }))}
                        value={selectedKey || undefined}
                        onChange={(val) => setSelectedKey(val)}
                        placeholder="Select column"
                        searchPlaceholder="Search columns..."
                        className={isGlass ? "bg-surface-glass/20 border-border-primary/30" : undefined}
                    />

                    {selectedColumn && selectedState && (
                        <div className="flex items-center justify-between gap-2 text-sm text-text-primary">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <Checkbox
                                    checked={selectedState.visible}
                                    onCheckedChange={() => onToggleVisibility(selectedColumn.key)}
                                    className={isGlass ? "border-border-primary/45 bg-surface-glass/25" : undefined}
                                />
                                <span>{selectedColumn.header}</span>
                            </label>

                            {selectedColumn.pinnable && (
                                <button
                                    onClick={() => onTogglePin(selectedColumn.key)}
                                    className={cn(
                                        "p-1 rounded-md transition-colors",
                                        selectedState.pinned
                                            ? "text-accent-blue bg-accent-blue/10"
                                            : isGlass
                                                ? "text-text-tertiary hover:text-text-secondary hover:bg-surface-glass/20"
                                                : "text-text-tertiary hover:text-text-secondary hover:bg-surface-secondary"
                                    )}
                                >
                                    {selectedState.pinned ? <Pin className="w-3.5 h-3.5" /> : <PinOff className="w-3.5 h-3.5" />}
                                </button>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const ColumnVisibilityMenu = React.forwardRef(ColumnVisibilityMenuInner) as unknown as <T>(
    props: ColumnVisibilityMenuProps<T> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactNode;
(ColumnVisibilityMenu as any).displayName = "DataGridColumnMenu";

interface ColumnResizeHandleProps<T> extends React.HTMLAttributes<HTMLDivElement> {
    columnKey: keyof T;
    onResize: (width: number) => void;
}

const ColumnResizeHandleInner = <T,>(
    { columnKey, onResize, className, ...props }: ColumnResizeHandleProps<T>,
    ref: React.Ref<HTMLDivElement>
) => {
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
            ref={ref}
            onMouseDown={handleMouseDown}
            className={cn(
                "absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-accent-blue transition-colors",
                isDragging && "bg-accent-blue",
                className
            )}
            {...props}
        />
    );
};

const ColumnResizeHandle = React.forwardRef(ColumnResizeHandleInner) as unknown as <T>(
    props: ColumnResizeHandleProps<T> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactNode;
(ColumnResizeHandle as any).displayName = "DataGridColumnResizeHandle";

type DataGridCompound = typeof DataGridRoot & {
    Row: typeof DataGridRow;
    Pagination: typeof PaginationButton;
    Filter: typeof FilterButton;
    ColumnMenu: typeof ColumnVisibilityMenu;
    ResizeHandle: typeof ColumnResizeHandle;
};

const CompoundDataGrid = DataGridRoot as unknown as DataGridCompound;
CompoundDataGrid.Row = DataGridRow;
CompoundDataGrid.Pagination = PaginationButton;
CompoundDataGrid.Filter = FilterButton;
CompoundDataGrid.ColumnMenu = ColumnVisibilityMenu;
CompoundDataGrid.ResizeHandle = ColumnResizeHandle;

export { CompoundDataGrid as DataGrid };


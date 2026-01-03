"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { Download, Filter, Pin, PinOff, Settings2 } from "lucide-react";
import { Table } from "./Table";
import { Checkbox } from "./Checkbox";
import { Combobox } from "./Combobox";
/* -------------------------------------------------------------------------- */
/*                               ROOT COMPONENT                               */
/* -------------------------------------------------------------------------- */
export function DataGrid({ columns, data, selectable = false, striped = true, hoverable = true, density = "comfortable", page = 1, pageSize = 10, virtualScrolling = false, maxHeight = "600px", onPageChange, onSortChange, onCellEdit, onExport, }) {
    // State
    const [sortKey, setSortKey] = React.useState(null);
    const [sortDirection, setSortDirection] = React.useState("asc");
    const [selectedRows, setSelectedRows] = React.useState(new Set());
    const [columnStates, setColumnStates] = React.useState(new Map(columns.map((col) => [
        col.key,
        {
            visible: true,
            pinned: null,
            width: col.width || 150,
        },
    ])));
    const [filters, setFilters] = React.useState(new Map());
    const [groupBy, setGroupBy] = React.useState(null);
    const [expandedGroups, setExpandedGroups] = React.useState(new Set());
    const [resizingColumn, setResizingColumn] = React.useState(null);
    const [editingCell, setEditingCell] = React.useState(null);
    // Handlers
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
    const toggleColumnVisibility = (key) => {
        setColumnStates((prev) => {
            const newStates = new Map(prev);
            const state = newStates.get(key);
            if (state) {
                newStates.set(key, { ...state, visible: !state.visible });
            }
            return newStates;
        });
    };
    const toggleColumnPin = (key) => {
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
    const updateFilter = (key, value) => {
        setFilters((prev) => {
            const newFilters = new Map(prev);
            if (value) {
                newFilters.set(key, value);
            }
            else {
                newFilters.delete(key);
            }
            return newFilters;
        });
    };
    const toggleGroup = (groupValue) => {
        setExpandedGroups((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(groupValue)) {
                newSet.delete(groupValue);
            }
            else {
                newSet.add(groupValue);
            }
            return newSet;
        });
    };
    const handleCellEdit = (rowIndex, key, value) => {
        onCellEdit?.(data[rowIndex], key, value);
        setEditingCell(null);
    };
    const exportToCSV = () => {
        if (!onExport) {
            // Default CSV export
            const visibleColumns = columns.filter((col) => columnStates.get(col.key)?.visible);
            const headers = visibleColumns.map((col) => col.header).join(",");
            const rows = filteredData
                .map((row) => visibleColumns
                .map((col) => {
                const value = row[col.key];
                return typeof value === "string" && value.includes(",")
                    ? `"${value}"`
                    : value;
            })
                .join(","))
                .join("\n");
            const csv = `${headers}\n${rows}`;
            const blob = new Blob([csv], { type: "text/csv" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "data-export.csv";
            a.click();
            URL.revokeObjectURL(url);
        }
        else {
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
                if (aVal < bVal)
                    return sortDirection === "asc" ? -1 : 1;
                if (aVal > bVal)
                    return sortDirection === "asc" ? 1 : -1;
                return 0;
            });
        }
        return result;
    }, [data, filters, sortKey, sortDirection]);
    // Group data
    const groupedData = React.useMemo(() => {
        if (!groupBy)
            return null;
        const groups = new Map();
        filteredData.forEach((row) => {
            const groupValue = row[groupBy];
            if (!groups.has(groupValue)) {
                groups.set(groupValue, []);
            }
            groups.get(groupValue).push(row);
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
    return (_jsxs("div", { className: "flex flex-col gap-3", children: [_jsxs("div", { className: "flex items-center justify-between px-4 py-3 bg-surface-elevated border border-border-primary rounded-xl", children: [_jsx("div", { className: "flex items-center gap-2", children: _jsxs("select", { value: groupBy ? String(groupBy) : "", onChange: (e) => setGroupBy(e.target.value || null), className: "px-3 py-1.5 text-sm bg-surface-secondary border border-border-primary rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue", children: [_jsx("option", { value: "", children: "No grouping" }), columns
                                    .filter((col) => col.groupable)
                                    .map((col) => (_jsxs("option", { value: String(col.key), children: ["Group by ", col.header] }, String(col.key))))] }) }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("button", { onClick: exportToCSV, className: "flex items-center gap-1.5 px-3 py-1.5 text-sm bg-surface-secondary border border-border-primary rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-secondary/70 transition-all", children: [_jsx(Download, { className: "w-4 h-4" }), "Export CSV"] }), _jsx(ColumnVisibilityMenu, { columns: columns, columnStates: columnStates, onToggleVisibility: toggleColumnVisibility, onTogglePin: toggleColumnPin })] })] }), _jsx("div", { className: "overflow-auto border border-border-primary rounded-xl bg-surface-elevated shadow-lg", style: { maxHeight: virtualScrolling ? maxHeight : undefined }, children: _jsx(Table, { columns: columns, data: paginatedData, striped: striped, hoverable: hoverable, density: density, onSortChange: onSortChange, onPageChange: onPageChange, page: page, pageSize: pageSize }) })] }));
}
function DataGridRow({ row, index, columns, columnStates, selectable, selected, striped, hoverable, rowPadding, editingCell, onToggle, onCellClick, onCellEdit, }) {
    return (_jsxs(motion.tr, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.18 }, className: cn("border-b border-border-primary/50 transition-colors", striped && index % 2 === 1 ? "bg-surface-secondary/40" : "", hoverable && "hover:bg-surface-secondary/70", selected && "bg-accent-blue/10"), children: [selectable && (_jsx("td", { className: "px-4", children: _jsx(Checkbox, { checked: selected, onCheckedChange: () => onToggle(index) }) })), columns.map((col) => {
                const state = columnStates.get(col.key);
                const isEditing = editingCell?.row === index && editingCell?.col === col.key;
                return (_jsx("td", { className: cn("px-4 text-sm text-text-primary", rowPadding, state.pinned === "left" &&
                        "sticky left-0 bg-surface-primary z-10"), onClick: () => col.editable && onCellClick(col.key), children: isEditing ? (_jsx("input", { type: "text", defaultValue: String(row[col.key]), autoFocus: true, onBlur: (e) => onCellEdit(col.key, e.target.value), onKeyDown: (e) => {
                            if (e.key === "Enter") {
                                onCellEdit(col.key, e.currentTarget.value);
                            }
                        }, className: "w-full px-2 py-1 bg-surface-secondary border border-accent-blue rounded-md focus:outline-none" })) : col.render ? (col.render(row[col.key], row)) : row[col.key] }, String(col.key)));
            })] }));
}
function PaginationButton({ disabled, children, onClick, }) {
    return (_jsx("button", { disabled: disabled, onClick: onClick, className: cn("p-2 rounded-lg border border-border-primary text-text-secondary transition-all", "hover:bg-surface-secondary hover:text-text-primary", "disabled:opacity-40 disabled:cursor-not-allowed"), children: children }));
}
function FilterButton({ column, value, onChange, }) {
    const [open, setOpen] = React.useState(false);
    const [localValue, setLocalValue] = React.useState(value);
    const containerRef = React.useRef(null);
    const isSelect = column.filterType === "select" && column.filterOptions?.length;
    React.useEffect(() => {
        if (!open)
            return;
        const handleClick = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [open]);
    return (_jsxs("div", { className: "relative", ref: containerRef, children: [_jsx("button", { className: cn("p-1 rounded-md transition-colors", value ? "text-accent-blue bg-accent-blue/10" : "text-text-tertiary hover:text-text-secondary"), onClick: () => setOpen((prev) => !prev), type: "button", children: _jsx(Filter, { className: "w-3.5 h-3.5" }) }), open && (_jsxs("div", { className: "absolute right-0 mt-2 z-50 min-w-[220px] p-3 bg-surface-elevated border border-border-primary rounded-xl shadow-lg space-y-2", children: [isSelect ? (_jsx(Combobox, { items: column.filterOptions.map((opt) => ({ value: String(opt.value), label: opt.label })), value: localValue || undefined, onChange: (val) => setLocalValue(val), placeholder: `Filter ${column.header}...`, searchPlaceholder: "Search...", emptyMessage: "No options" })) : (_jsx("input", { type: "text", placeholder: `Filter ${column.header}...`, value: localValue, onChange: (e) => setLocalValue(e.target.value), className: "w-full px-3 py-2 text-sm bg-surface-secondary border border-border-primary rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-blue" })), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { onClick: () => {
                                    onChange(localValue);
                                    setOpen(false);
                                }, className: "flex-1 px-3 py-1.5 text-sm bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors", children: "Apply" }), _jsx("button", { onClick: () => {
                                    setLocalValue("");
                                    onChange("");
                                    setOpen(false);
                                }, className: "px-3 py-1.5 text-sm bg-surface-secondary text-text-secondary rounded-lg hover:text-text-primary transition-colors", children: "Clear" })] })] }))] }));
}
function ColumnVisibilityMenu({ columns, columnStates, onToggleVisibility, onTogglePin, }) {
    const [open, setOpen] = React.useState(false);
    const [selectedKey, setSelectedKey] = React.useState(columns[0] ? String(columns[0].key) : "");
    const containerRef = React.useRef(null);
    const selectedColumn = columns.find((col) => String(col.key) === selectedKey) ?? columns[0];
    const selectedState = selectedColumn ? columnStates.get(selectedColumn.key) : undefined;
    React.useEffect(() => {
        if (!open)
            return;
        const handleClick = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [open]);
    return (_jsxs("div", { className: "relative", ref: containerRef, children: [_jsxs("button", { className: "flex items-center gap-1.5 px-3 py-1.5 text-sm bg-surface-secondary border border-border-primary rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-secondary/70 transition-all", onClick: () => setOpen((prev) => !prev), type: "button", children: [_jsx(Settings2, { className: "w-4 h-4" }), "Columns"] }), open && (_jsxs("div", { className: "absolute right-0 mt-2 z-50 w-[260px] p-3 bg-surface-elevated border border-border-primary rounded-xl shadow-lg space-y-3", children: [_jsx(Combobox, { items: columns.map((col) => ({ value: String(col.key), label: col.header })), value: selectedKey || undefined, onChange: (val) => setSelectedKey(val), placeholder: "Select column", searchPlaceholder: "Search columns..." }), selectedColumn && selectedState && (_jsxs("div", { className: "flex items-center justify-between gap-2 text-sm text-text-primary", children: [_jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [_jsx(Checkbox, { checked: selectedState.visible, onCheckedChange: () => onToggleVisibility(selectedColumn.key) }), _jsx("span", { children: selectedColumn.header })] }), selectedColumn.pinnable && (_jsx("button", { onClick: () => onTogglePin(selectedColumn.key), className: cn("p-1 rounded-md transition-colors", selectedState.pinned
                                    ? "text-accent-blue bg-accent-blue/10"
                                    : "text-text-tertiary hover:text-text-secondary"), children: selectedState.pinned ? _jsx(Pin, { className: "w-3.5 h-3.5" }) : _jsx(PinOff, { className: "w-3.5 h-3.5" }) }))] }))] }))] }));
}
function ColumnResizeHandle({ columnKey, onResize, }) {
    const [isDragging, setIsDragging] = React.useState(false);
    const startXRef = React.useRef(0);
    const startWidthRef = React.useRef(0);
    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        startXRef.current = e.clientX;
        const th = e.target.closest("th");
        startWidthRef.current = th?.offsetWidth || 150;
        const handleMouseMove = (moveEvent) => {
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
    return (_jsx("div", { onMouseDown: handleMouseDown, className: cn("absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-accent-blue transition-colors", isDragging && "bg-accent-blue") }));
}
//# sourceMappingURL=DataGrid.js.map
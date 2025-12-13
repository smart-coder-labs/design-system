import * as React from "react";
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
    filterOptions?: {
        label: string;
        value: any;
    }[];
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
export declare function DataGrid<T>({ columns, data, selectable, striped, hoverable, density, page, pageSize, virtualScrolling, maxHeight, onPageChange, onSortChange, onCellEdit, onExport, }: DataGridProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DataGrid.d.ts.map
import * as React from "react";
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
    onPageChange?: (page: number) => void;
    onSortChange?: (key: keyof T, direction: "asc" | "desc") => void;
}
export declare function Table<T>({ columns, data, selectable, striped, hoverable, density, page, pageSize, onPageChange, onSortChange, }: TableProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Table.d.ts.map
import React from 'react';
export interface FilterOption {
    id: string;
    label: string;
    value: string;
    count?: number;
}
export interface FilterGroup {
    id: string;
    label: string;
    type: 'select' | 'multiselect' | 'date' | 'search' | 'custom';
    options?: FilterOption[];
    placeholder?: string;
    icon?: React.ReactNode;
    customContent?: React.ReactNode;
}
export interface ActiveFilter {
    groupId: string;
    optionId: string;
    label: string;
    value: string;
}
export interface FilterBarProps {
    groups: FilterGroup[];
    activeFilters?: ActiveFilter[];
    onFilterChange?: (filters: ActiveFilter[]) => void;
    onClearAll?: () => void;
    searchPlaceholder?: string;
    showSearch?: boolean;
    showFilterCount?: boolean;
    className?: string;
}
export declare const FilterBar: React.FC<FilterBarProps>;
export default FilterBar;
//# sourceMappingURL=FilterBar.d.ts.map
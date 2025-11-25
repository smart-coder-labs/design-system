import React, { useState } from 'react';
import { X, Filter } from 'lucide-react';
import { Button } from './Button';
import { SearchInput } from './SearchInput';
import { FilterSelect, FilterSelectOption } from './Select';

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

export const FilterBar: React.FC<FilterBarProps> = ({
    groups,
    activeFilters = [],
    onFilterChange,
    onClearAll,
    searchPlaceholder = 'Search...',
    showSearch = true,
    showFilterCount = true,
    className = '',
}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleFilterChange = (groupId: string, value: string | string[]) => {
        const group = groups.find(g => g.id === groupId);
        if (!group || !group.options) return;

        let newFilters = [...activeFilters];

        if (group.type === 'multiselect') {
            // Remove all existing filters for this group
            newFilters = newFilters.filter(f => f.groupId !== groupId);

            // Add new filters for selected values
            const values = Array.isArray(value) ? value : [value];
            values.forEach(val => {
                const option = group.options?.find(o => o.value === val);
                if (option) {
                    newFilters.push({
                        groupId,
                        optionId: option.id,
                        label: option.label,
                        value: option.value,
                    });
                }
            });
        } else {
            // For single select, remove existing filter for this group and add new one
            newFilters = newFilters.filter(f => f.groupId !== groupId);
            const option = group.options?.find(o => o.value === value);
            if (option) {
                newFilters.push({
                    groupId,
                    optionId: option.id,
                    label: option.label,
                    value: option.value,
                });
            }
        }

        onFilterChange?.(newFilters);
    };

    const handleRemoveFilter = (filter: ActiveFilter) => {
        const newFilters = activeFilters.filter(
            f => !(f.groupId === filter.groupId && f.optionId === filter.optionId)
        );
        onFilterChange?.(newFilters);
    };

    const handleClearAll = () => {
        onFilterChange?.([]);
        onClearAll?.();
        setSearchQuery('');
    };

    const getGroupValue = (groupId: string): string | string[] | undefined => {
        const group = groups.find(g => g.id === groupId);
        const groupFilters = activeFilters.filter(f => f.groupId === groupId);

        if (!group || groupFilters.length === 0) return undefined;

        if (group.type === 'multiselect') {
            return groupFilters.map(f => f.value);
        }

        return groupFilters[0]?.value;
    };

    return (
        <div className={`bg-surface-primary border border-border-primary rounded-xl p-4 ${className}`}>
            <div className="flex flex-wrap items-center gap-3">
                {/* Search Input */}
                {showSearch && (
                    <div className="flex-1 min-w-[200px]">
                        <SearchInput
                            value={searchQuery}
                            onChange={setSearchQuery}
                            placeholder={searchPlaceholder}
                        />
                    </div>
                )}

                {/* Filter Dropdowns */}
                {groups.map((group) => {
                    if (group.type === 'custom') {
                        return (
                            <div key={group.id}>
                                {group.customContent}
                            </div>
                        );
                    }

                    const filterOptions: FilterSelectOption[] = group.options?.map(opt => ({
                        id: opt.id,
                        label: opt.label,
                        value: opt.value,
                        count: opt.count,
                    })) || [];

                    return (
                        <FilterSelect
                            key={group.id}
                            label={group.label}
                            options={filterOptions}
                            value={getGroupValue(group.id)}
                            onChange={(value) => handleFilterChange(group.id, value)}
                            icon={group.icon || <Filter className="w-4 h-4" />}
                            multiselect={group.type === 'multiselect'}
                        />
                    );
                })}

                {/* Active Filter Count */}
                {showFilterCount && activeFilters.length > 0 && (
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-secondary text-text-secondary text-sm">
                        <Filter className="w-4 h-4" />
                        <span>{activeFilters.length} active</span>
                    </div>
                )}

                {/* Clear All Button */}
                {activeFilters.length > 0 && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleClearAll}
                        leftIcon={<X className="w-4 h-4" />}
                    >
                        Clear all
                    </Button>
                )}
            </div>

            {/* Active Filters Pills */}
            {activeFilters.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border-primary">
                    {activeFilters.map((filter, index) => (
                        <div
                            key={`${filter.groupId}-${filter.optionId}-${index}`}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-sm"
                        >
                            <span className="font-medium">{filter.label}</span>
                            <button
                                onClick={() => handleRemoveFilter(filter)}
                                className="hover:bg-accent-blue/20 rounded-full p-0.5 transition-colors"
                            >
                                <X className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterBar;

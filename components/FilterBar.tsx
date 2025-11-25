import React, { useState } from 'react';
import { X, Search, Filter, ChevronDown, Check } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';

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
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const handleFilterToggle = (groupId: string, option: FilterOption) => {
        const group = groups.find(g => g.id === groupId);
        if (!group) return;

        let newFilters = [...activeFilters];

        if (group.type === 'multiselect') {
            const existingIndex = newFilters.findIndex(
                f => f.groupId === groupId && f.optionId === option.id
            );

            if (existingIndex >= 0) {
                newFilters.splice(existingIndex, 1);
            } else {
                newFilters.push({
                    groupId,
                    optionId: option.id,
                    label: option.label,
                    value: option.value,
                });
            }
        } else {
            // For single select, remove existing filter for this group and add new one
            newFilters = newFilters.filter(f => f.groupId !== groupId);
            newFilters.push({
                groupId,
                optionId: option.id,
                label: option.label,
                value: option.value,
            });
            setOpenDropdown(null);
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

    const isOptionActive = (groupId: string, optionId: string) => {
        return activeFilters.some(f => f.groupId === groupId && f.optionId === optionId);
    };

    const getActiveLabel = (groupId: string) => {
        const groupFilters = activeFilters.filter(f => f.groupId === groupId);
        if (groupFilters.length === 0) return null;
        if (groupFilters.length === 1) return groupFilters[0].label;
        return `${groupFilters.length} selected`;
    };

    return (
        <div className={`bg-surface-primary border border-border-primary rounded-xl p-4 ${className}`}>
            <div className="flex flex-wrap items-center gap-3">
                {/* Search Input */}
                {showSearch && (
                    <div className="flex-1 min-w-[200px]">
                        <Input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={searchPlaceholder}
                            leftIcon={<Search className="w-4 h-4" />}
                        />
                    </div>
                )}

                {/* Filter Dropdowns */}
                {groups.map((group) => {
                    const activeLabel = getActiveLabel(group.id);
                    const isOpen = openDropdown === group.id;

                    return (
                        <div key={group.id} className="relative">
                            <button
                                onClick={() => setOpenDropdown(isOpen ? null : group.id)}
                                className={`
                                    inline-flex items-center gap-2 px-4 py-2 rounded-lg
                                    border transition-all
                                    ${activeLabel
                                        ? 'bg-accent-blue/10 border-accent-blue/30 text-accent-blue'
                                        : 'bg-surface-secondary border-border-primary text-text-primary hover:bg-surface-tertiary'
                                    }
                                `}
                            >
                                {group.icon || <Filter className="w-4 h-4" />}
                                <span className="text-sm font-medium">
                                    {activeLabel || group.label}
                                </span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-10"
                                        onClick={() => setOpenDropdown(null)}
                                    />
                                    <div className="absolute top-full left-0 mt-2 w-64 bg-surface-primary border border-border-primary rounded-xl shadow-lg z-20 overflow-hidden">
                                        <div className="max-h-80 overflow-y-auto p-2">
                                            {group.type === 'custom' ? (
                                                group.customContent
                                            ) : (
                                                group.options?.map((option) => {
                                                    const isActive = isOptionActive(group.id, option.id);
                                                    const isMulti = group.type === 'multiselect';

                                                    return (
                                                        <button
                                                            key={option.id}
                                                            onClick={() => handleFilterToggle(group.id, option)}
                                                            className={`
                                                                w-full flex items-center justify-between px-3 py-2 rounded-lg
                                                                text-sm transition-colors
                                                                ${isActive
                                                                    ? 'bg-accent-blue/10 text-accent-blue'
                                                                    : 'text-text-primary hover:bg-surface-secondary'
                                                                }
                                                            `}
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                {isMulti && (
                                                                    <div className={`
                                                                        w-4 h-4 rounded border flex items-center justify-center
                                                                        ${isActive
                                                                            ? 'bg-accent-blue border-accent-blue'
                                                                            : 'border-border-primary'
                                                                        }
                                                                    `}>
                                                                        {isActive && <Check className="w-3 h-3 text-white" />}
                                                                    </div>
                                                                )}
                                                                <span>{option.label}</span>
                                                            </div>
                                                            {option.count !== undefined && (
                                                                <span className="text-xs text-text-tertiary">
                                                                    {option.count}
                                                                </span>
                                                            )}
                                                        </button>
                                                    );
                                                })
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
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

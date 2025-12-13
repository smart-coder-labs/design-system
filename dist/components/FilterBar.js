import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { X, Filter } from 'lucide-react';
import { Button } from './Button';
import { SearchInput } from './SearchInput';
import { FilterSelect } from './Select';
export const FilterBar = ({ groups, activeFilters = [], onFilterChange, onClearAll, searchPlaceholder = 'Search...', showSearch = true, showFilterCount = true, className = '', }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleFilterChange = (groupId, value) => {
        const group = groups.find(g => g.id === groupId);
        if (!group || !group.options)
            return;
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
        }
        else {
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
    const handleRemoveFilter = (filter) => {
        const newFilters = activeFilters.filter(f => !(f.groupId === filter.groupId && f.optionId === filter.optionId));
        onFilterChange?.(newFilters);
    };
    const handleClearAll = () => {
        onFilterChange?.([]);
        onClearAll?.();
        setSearchQuery('');
    };
    const getGroupValue = (groupId) => {
        const group = groups.find(g => g.id === groupId);
        const groupFilters = activeFilters.filter(f => f.groupId === groupId);
        if (!group || groupFilters.length === 0)
            return undefined;
        if (group.type === 'multiselect') {
            return groupFilters.map(f => f.value);
        }
        return groupFilters[0]?.value;
    };
    return (_jsxs("div", { className: `bg-surface-primary border border-border-primary rounded-xl p-4 ${className}`, children: [_jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [showSearch && (_jsx("div", { className: "flex-1 min-w-[200px]", children: _jsx(SearchInput, { value: searchQuery, onChange: setSearchQuery, placeholder: searchPlaceholder }) })), groups.map((group) => {
                        if (group.type === 'custom') {
                            return (_jsx("div", { children: group.customContent }, group.id));
                        }
                        const filterOptions = group.options?.map(opt => ({
                            id: opt.id,
                            label: opt.label,
                            value: opt.value,
                            count: opt.count,
                        })) || [];
                        return (_jsx(FilterSelect, { label: group.label, options: filterOptions, value: getGroupValue(group.id), onChange: (value) => handleFilterChange(group.id, value), icon: group.icon || _jsx(Filter, { className: "w-4 h-4" }), multiselect: group.type === 'multiselect' }, group.id));
                    }), showFilterCount && activeFilters.length > 0 && (_jsxs("div", { className: "flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-secondary text-text-secondary text-sm", children: [_jsx(Filter, { className: "w-4 h-4" }), _jsxs("span", { children: [activeFilters.length, " active"] })] })), activeFilters.length > 0 && (_jsx(Button, { variant: "ghost", size: "sm", onClick: handleClearAll, leftIcon: _jsx(X, { className: "w-4 h-4" }), children: "Clear all" }))] }), activeFilters.length > 0 && (_jsx("div", { className: "flex flex-wrap gap-2 mt-4 pt-4 border-t border-border-primary", children: activeFilters.map((filter, index) => (_jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-sm", children: [_jsx("span", { className: "font-medium", children: filter.label }), _jsx("button", { onClick: () => handleRemoveFilter(filter), className: "hover:bg-accent-blue/20 rounded-full p-0.5 transition-colors", children: _jsx(X, { className: "w-3.5 h-3.5" }) })] }, `${filter.groupId}-${filter.optionId}-${index}`))) }))] }));
};
export default FilterBar;
//# sourceMappingURL=FilterBar.js.map
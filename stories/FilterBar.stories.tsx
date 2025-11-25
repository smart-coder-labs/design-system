import type { Meta, StoryObj } from '@storybook/react';
import { FilterBar } from '../components/FilterBar';
import type { FilterGroup, ActiveFilter } from '../components/FilterBar';
import { useState } from 'react';
import { Calendar, Tag, Users, MapPin, Star } from 'lucide-react';

const meta: Meta<typeof FilterBar> = {
    title: 'Components/FilterBar',
    component: FilterBar,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FilterBar>;

// Sample filter groups
const productFilters: FilterGroup[] = [
    {
        id: 'category',
        label: 'Category',
        type: 'multiselect',
        icon: <Tag className="w-4 h-4" />,
        options: [
            { id: 'electronics', label: 'Electronics', value: 'electronics', count: 245 },
            { id: 'clothing', label: 'Clothing', value: 'clothing', count: 189 },
            { id: 'books', label: 'Books', value: 'books', count: 432 },
            { id: 'home', label: 'Home & Garden', value: 'home', count: 156 },
            { id: 'sports', label: 'Sports', value: 'sports', count: 98 },
        ],
    },
    {
        id: 'price',
        label: 'Price Range',
        type: 'select',
        options: [
            { id: 'under-25', label: 'Under $25', value: '0-25' },
            { id: '25-50', label: '$25 - $50', value: '25-50' },
            { id: '50-100', label: '$50 - $100', value: '50-100' },
            { id: '100-plus', label: '$100+', value: '100+' },
        ],
    },
    {
        id: 'rating',
        label: 'Rating',
        type: 'select',
        icon: <Star className="w-4 h-4" />,
        options: [
            { id: '4-plus', label: '4+ Stars', value: '4+', count: 567 },
            { id: '3-plus', label: '3+ Stars', value: '3+', count: 892 },
            { id: '2-plus', label: '2+ Stars', value: '2+', count: 1024 },
        ],
    },
];

const userFilters: FilterGroup[] = [
    {
        id: 'status',
        label: 'Status',
        type: 'multiselect',
        options: [
            { id: 'active', label: 'Active', value: 'active', count: 1234 },
            { id: 'inactive', label: 'Inactive', value: 'inactive', count: 456 },
            { id: 'pending', label: 'Pending', value: 'pending', count: 89 },
        ],
    },
    {
        id: 'role',
        label: 'Role',
        type: 'multiselect',
        icon: <Users className="w-4 h-4" />,
        options: [
            { id: 'admin', label: 'Admin', value: 'admin', count: 12 },
            { id: 'editor', label: 'Editor', value: 'editor', count: 45 },
            { id: 'viewer', label: 'Viewer', value: 'viewer', count: 789 },
        ],
    },
    {
        id: 'location',
        label: 'Location',
        type: 'select',
        icon: <MapPin className="w-4 h-4" />,
        options: [
            { id: 'us', label: 'United States', value: 'us' },
            { id: 'uk', label: 'United Kingdom', value: 'uk' },
            { id: 'ca', label: 'Canada', value: 'ca' },
            { id: 'au', label: 'Australia', value: 'au' },
        ],
    },
    {
        id: 'date',
        label: 'Date Range',
        type: 'select',
        icon: <Calendar className="w-4 h-4" />,
        options: [
            { id: 'today', label: 'Today', value: 'today' },
            { id: 'week', label: 'Last 7 days', value: 'week' },
            { id: 'month', label: 'Last 30 days', value: 'month' },
            { id: 'year', label: 'Last year', value: 'year' },
        ],
    },
];

// Interactive story with state
export const Default: Story = {
    render: () => {
        const [filters, setFilters] = useState<ActiveFilter[]>([]);

        return (
            <div className="space-y-4">
                <FilterBar
                    groups={productFilters}
                    activeFilters={filters}
                    onFilterChange={setFilters}
                    searchPlaceholder="Search products..."
                />
                <div className="p-4 bg-surface-secondary rounded-lg">
                    <p className="text-sm text-text-secondary">
                        Active filters: {filters.length === 0 ? 'None' : filters.map(f => f.label).join(', ')}
                    </p>
                </div>
            </div>
        );
    },
};

export const WithActiveFilters: Story = {
    render: () => {
        const [filters, setFilters] = useState<ActiveFilter[]>([
            { groupId: 'category', optionId: 'electronics', label: 'Electronics', value: 'electronics' },
            { groupId: 'category', optionId: 'books', label: 'Books', value: 'books' },
            { groupId: 'price', optionId: '25-50', label: '$25 - $50', value: '25-50' },
        ]);

        return (
            <FilterBar
                groups={productFilters}
                activeFilters={filters}
                onFilterChange={setFilters}
                searchPlaceholder="Search products..."
            />
        );
    },
};

export const UserManagement: Story = {
    render: () => {
        const [filters, setFilters] = useState<ActiveFilter[]>([]);

        return (
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">User Management</h3>
                    <p className="text-sm text-text-secondary">Filter and search through your user base</p>
                </div>
                <FilterBar
                    groups={userFilters}
                    activeFilters={filters}
                    onFilterChange={setFilters}
                    searchPlaceholder="Search users by name or email..."
                />
                <div className="bg-surface-primary border border-border-primary rounded-xl p-6">
                    <p className="text-sm text-text-secondary">
                        {filters.length === 0
                            ? 'Showing all users'
                            : `Filtered by: ${filters.map(f => f.label).join(', ')}`
                        }
                    </p>
                </div>
            </div>
        );
    },
};

export const WithoutSearch: Story = {
    render: () => {
        const [filters, setFilters] = useState<ActiveFilter[]>([]);

        return (
            <FilterBar
                groups={productFilters}
                activeFilters={filters}
                onFilterChange={setFilters}
                showSearch={false}
            />
        );
    },
};

export const Compact: Story = {
    render: () => {
        const [filters, setFilters] = useState<ActiveFilter[]>([]);

        const compactFilters: FilterGroup[] = [
            {
                id: 'status',
                label: 'Status',
                type: 'select',
                options: [
                    { id: 'all', label: 'All', value: 'all' },
                    { id: 'active', label: 'Active', value: 'active' },
                    { id: 'archived', label: 'Archived', value: 'archived' },
                ],
            },
            {
                id: 'sort',
                label: 'Sort by',
                type: 'select',
                options: [
                    { id: 'newest', label: 'Newest first', value: 'newest' },
                    { id: 'oldest', label: 'Oldest first', value: 'oldest' },
                    { id: 'name', label: 'Name (A-Z)', value: 'name' },
                ],
            },
        ];

        return (
            <FilterBar
                groups={compactFilters}
                activeFilters={filters}
                onFilterChange={setFilters}
                showSearch={false}
                showFilterCount={false}
            />
        );
    },
};

export const ECommerceDashboard: Story = {
    render: () => {
        const [filters, setFilters] = useState<ActiveFilter[]>([
            { groupId: 'category', optionId: 'electronics', label: 'Electronics', value: 'electronics' },
            { groupId: 'rating', optionId: '4-plus', label: '4+ Stars', value: '4+' },
        ]);

        return (
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary">Products</h2>
                        <p className="text-sm text-text-secondary mt-1">Manage your product catalog</p>
                    </div>
                    <div className="text-sm text-text-tertiary">
                        1,234 products
                    </div>
                </div>

                <FilterBar
                    groups={productFilters}
                    activeFilters={filters}
                    onFilterChange={setFilters}
                    searchPlaceholder="Search by name, SKU, or description..."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-surface-primary border border-border-primary rounded-xl p-4">
                            <div className="aspect-square bg-surface-secondary rounded-lg mb-3" />
                            <h4 className="font-semibold text-text-primary mb-1">Product {i}</h4>
                            <p className="text-sm text-text-secondary">$99.99</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
};

import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { useState } from 'react';

const meta = {
    title: 'Components/Table',
    component: Table,
    tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        columns: [
            { key: 'name', header: 'Name', sortable: true },
            { key: 'ticker', header: 'Ticker' },
            { key: 'price', header: 'Price', sortable: true },
            { key: 'change', header: 'Change', sortable: true },
        ],
        data: [
            { name: 'Apple Inc.', ticker: 'AAPL', price: '$178.50', change: '+2.3%' },
            { name: 'Microsoft Corp.', ticker: 'MSFT', price: '$425.20', change: '+1.5%' },
            { name: 'NVIDIA Corp.', ticker: 'NVDA', price: '$880.10', change: '+4.2%' },
            { name: 'Amazon.com', ticker: 'AMZN', price: '$185.30', change: '-0.8%' },
            { name: 'Tesla Inc.', ticker: 'TSLA', price: '$245.00', change: '-1.2%' },
        ],
    },
};

export const Transactions: Story = {
    args: {
        columns: [
            { key: 'date', header: 'Date', sortable: true },
            { key: 'description', header: 'Description' },
            { key: 'category', header: 'Category' },
            { key: 'amount', header: 'Amount', sortable: true },
        ],
        data: [
            { date: 'May 10', description: 'Amazon Purchase', category: 'Shopping', amount: '-$89.99' },
            { date: 'May 9', description: 'Uber Ride', category: 'Transport', amount: '-$24.50' },
            { date: 'May 8', description: 'Salary Deposit', category: 'Income', amount: '+$4,500.00' },
            { date: 'May 7', description: 'Netflix', category: 'Entertainment', amount: '-$15.99' },
            { date: 'May 6', description: 'Starbucks Coffee', category: 'Dining', amount: '-$5.75' },
            { date: 'May 5', description: 'Electric Bill', category: 'Utilities', amount: '-$134.50' },
            { date: 'May 4', description: 'Dividend Payment', category: 'Investment Income', amount: '+$45.00' },
            { date: 'May 3', description: 'Apple Store', category: 'Shopping', amount: '-$999.00' },
        ],
        striped: true,
        hoverable: true,
    },
};

export const Sortable: Story = {
    render: () => {
        const [sortKey, setSortKey] = useState<string>('name');
        const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
        const data = [
            { name: 'Alice Johnson', role: 'Admin', status: 'Active', lastLogin: '2m ago' },
            { name: 'Bob Smith', role: 'User', status: 'Active', lastLogin: '1h ago' },
            { name: 'Carol White', role: 'Manager', status: 'Inactive', lastLogin: '3d ago' },
            { name: 'David Brown', role: 'User', status: 'Active', lastLogin: '5m ago' },
            { name: 'Eve Davis', role: 'Admin', status: 'Suspended', lastLogin: '2w ago' },
        ];
        const sorted = [...data].sort((a, b) => {
            const aVal = a[sortKey as keyof typeof a];
            const bVal = b[sortKey as keyof typeof b];
            return sortDir === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
        });
        return (
            <Table
                columns={[
                    { key: 'name', header: 'Name', sortable: true },
                    { key: 'role', header: 'Role', sortable: true },
                    { key: 'status', header: 'Status', sortable: true },
                    { key: 'lastLogin', header: 'Last Login', sortable: true },
                ]}
                data={sorted}
                onSortChange={(key, dir) => { setSortKey(String(key)); setSortDir(dir); }}
            />
        );
    },
};

export const Selectable: Story = {
    args: {
        columns: [
            { key: 'name', header: 'Name' },
            { key: 'ticker', header: 'Ticker' },
            { key: 'shares', header: 'Shares' },
            { key: 'value', header: 'Value' },
        ],
        data: [
            { name: 'Apple Inc.', ticker: 'AAPL', shares: 50, value: '$8,925' },
            { name: 'Microsoft Corp.', ticker: 'MSFT', shares: 30, value: '$12,756' },
            { name: 'NVIDIA Corp.', ticker: 'NVDA', shares: 15, value: '$13,202' },
            { name: 'Amazon.com', ticker: 'AMZN', shares: 25, value: '$4,633' },
            { name: 'Tesla Inc.', ticker: 'TSLA', shares: 20, value: '$4,900' },
        ],
        selectable: true,
    },
};

export const Compact: Story = {
    args: {
        columns: [
            { key: 'ticker', header: 'Ticker' },
            { key: 'price', header: 'Price' },
            { key: 'change', header: 'Change' },
        ],
        data: [
            { ticker: 'AAPL', price: '$178.50', change: '+2.3%' },
            { ticker: 'MSFT', price: '$425.20', change: '+1.5%' },
            { ticker: 'NVDA', price: '$880.10', change: '+4.2%' },
            { ticker: 'GOOGL', price: '$175.80', change: '+0.9%' },
            { ticker: 'TSLA', price: '$245.00', change: '-1.2%' },
            { ticker: 'META', price: '$515.40', change: '+3.1%' },
            { ticker: 'JPM', price: '$198.20', change: '-0.3%' },
            { ticker: 'V', price: '$275.60', change: '+0.7%' },
            { ticker: 'BTC', price: '$46,820', change: '+5.4%' },
            { ticker: 'ETH', price: '$3,120', change: '+3.8%' },
        ],
        density: 'compact',
        page: 1,
        pageSize: 10,
    },
};

export const Paginated: Story = {
    render: () => {
        const [page, setPage] = useState(1);
        const pageSize = 5;
        const allData = Array.from({ length: 23 }, (_, i) => ({
            id: `TXN-${1000 + i}`,
            date: new Date(2025, 4, 10 - i).toLocaleDateString(),
            description: `Transaction ${i + 1}`,
            amount: i % 3 === 0 ? `+$${(i * 100 + 50).toFixed(2)}` : `-$${(i * 25 + 10).toFixed(2)}`,
        }));
        const pageData = allData.slice((page - 1) * pageSize, page * pageSize);
        return (
            <Table
                columns={[
                    { key: 'id', header: 'ID' },
                    { key: 'date', header: 'Date', sortable: true },
                    { key: 'description', header: 'Description' },
                    { key: 'amount', header: 'Amount', sortable: true },
                ]}
                data={pageData}
                page={page}
                pageSize={pageSize}
                onPageChange={setPage}
            />
        );
    },
};

export const Empty: Story = {
    args: {
        columns: [
            { key: 'name', header: 'Name' },
            { key: 'value', header: 'Value' },
        ],
        data: [],
    },
};

export const CustomRender: Story = {
    args: {
        columns: [
            { key: 'name', header: 'Name' },
            { key: 'status', header: 'Status', render: (v) => <span className={`px-2 py-0.5 rounded-full text-xs ${v === 'Active' ? 'bg-green-100 text-green-700' : v === 'Inactive' ? 'bg-gray-100 text-gray-500' : 'bg-red-100 text-red-700'}`}>{v}</span> },
            { key: 'button', header: '', render: (_, row) => <button onClick={() => alert(`Row: ${(row as any).name}`)} className="px-2 py-1 text-xs bg-blue-600 text-white rounded-lg">View</button> },
        ],
        data: [
            { name: 'Checking Account', status: 'Active' },
            { name: 'Savings Account', status: 'Active' },
            { name: 'Credit Card', status: 'Frozen' },
            { name: 'Investment', status: 'Inactive' },
        ],
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        columns: [
            { key: 'name', header: 'Asset', sortable: true },
            { key: 'balance', header: 'Balance' },
            { key: 'apy', header: 'APY' },
        ],
        data: [
            { name: 'High-Yield Savings', balance: '$45,000', apy: '4.5%' },
            { name: 'Checking', balance: '$8,200', apy: '0.1%' },
            { name: 'CD 6-Month', balance: '$25,000', apy: '5.2%' },
        ],
    },
};


export const WithData: Story = {
    args: {
        columns: ['Name', 'Email', 'Role', 'Status'],
        rows: [
            ['Cesar Ruiz', 'cesar@finflow.com', 'Admin', 'Active'],
            ['Ana Lopez', 'ana@finflow.com', 'Editor', 'Active'],
            ['Carlos Mendez', 'carlos@finflow.com', 'Viewer', 'Inactive'],
            ['Sofia Torres', 'sofia@finflow.com', 'Editor', 'Active'],
            ['Miguel Santos', 'miguel@finflow.com', 'Viewer', 'Pending'],
        ],
    },
};

export const FinancialData: Story = {
    args: {
        columns: ['Date', 'Description', 'Amount', 'Category'],
        rows: [
            ['May 11, 2026', 'Amazon.com', '$129.99', 'Shopping'],
            ['May 10, 2026', 'Starbucks Coffee', '$5.75', 'Food & Drink'],
            ['May 10, 2026', 'Uber Ride', '$24.50', 'Transport'],
            ['May 09, 2026', 'Netflix Subscription', '$15.99', 'Entertainment'],
            ['May 08, 2026', 'Payroll Deposit', '$4,500.00', 'Income'],
        ],
    },
};

export const EmptyTable: Story = {
    args: {
        columns: ['Name', 'Email', 'Role', 'Status'],
        rows: [],
        emptyMessage: 'No users found matching your search criteria.',
    },
};

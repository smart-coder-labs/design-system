import type { Meta, StoryObj } from "@storybook/react";
import { DataGrid, DataGridColumn } from "../components/DataGrid";
import { useState } from "react";
import { Badge } from "../components/Badge";

const meta: Meta<typeof DataGrid> = {
    title: "Data Display/DataGrid",
    component: DataGrid,
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component:
                    "An advanced data grid component with sorting, filtering, column resizing, pinning, grouping, cell editing, and export capabilities. Built with Apple design system aesthetics.",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

/* -------------------------------------------------------------------------- */
/*                                SAMPLE DATA                                 */
/* -------------------------------------------------------------------------- */

interface Employee {
    id: number;
    name: string;
    email: string;
    department: string;
    role: string;
    salary: number;
    status: "active" | "inactive" | "on-leave";
    joinDate: string;
}

const sampleEmployees: Employee[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@company.com",
        department: "Engineering",
        role: "Senior Developer",
        salary: 120000,
        status: "active",
        joinDate: "2021-03-15",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@company.com",
        department: "Marketing",
        role: "Marketing Manager",
        salary: 95000,
        status: "active",
        joinDate: "2020-07-22",
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob.johnson@company.com",
        department: "Engineering",
        role: "DevOps Engineer",
        salary: 110000,
        status: "active",
        joinDate: "2022-01-10",
    },
    {
        id: 4,
        name: "Alice Williams",
        email: "alice.williams@company.com",
        department: "Design",
        role: "UI/UX Designer",
        salary: 90000,
        status: "on-leave",
        joinDate: "2021-11-05",
    },
    {
        id: 5,
        name: "Charlie Brown",
        email: "charlie.brown@company.com",
        department: "Sales",
        role: "Sales Representative",
        salary: 70000,
        status: "active",
        joinDate: "2023-02-14",
    },
    {
        id: 6,
        name: "Diana Prince",
        email: "diana.prince@company.com",
        department: "Engineering",
        role: "Tech Lead",
        salary: 140000,
        status: "active",
        joinDate: "2019-05-20",
    },
    {
        id: 7,
        name: "Ethan Hunt",
        email: "ethan.hunt@company.com",
        department: "Security",
        role: "Security Analyst",
        salary: 85000,
        status: "inactive",
        joinDate: "2022-08-30",
    },
    {
        id: 8,
        name: "Fiona Gallagher",
        email: "fiona.gallagher@company.com",
        department: "HR",
        role: "HR Manager",
        salary: 95000,
        status: "active",
        joinDate: "2020-04-12",
    },
    {
        id: 9,
        name: "George Miller",
        email: "george.miller@company.com",
        department: "Marketing",
        role: "Content Writer",
        salary: 65000,
        status: "active",
        joinDate: "2023-06-01",
    },
    {
        id: 10,
        name: "Hannah Montana",
        email: "hannah.montana@company.com",
        department: "Design",
        role: "Graphic Designer",
        salary: 75000,
        status: "active",
        joinDate: "2021-09-18",
    },
    {
        id: 11,
        name: "Ian Malcolm",
        email: "ian.malcolm@company.com",
        department: "Engineering",
        role: "Data Scientist",
        salary: 130000,
        status: "active",
        joinDate: "2020-12-03",
    },
    {
        id: 12,
        name: "Julia Roberts",
        email: "julia.roberts@company.com",
        department: "Sales",
        role: "Sales Manager",
        salary: 105000,
        status: "active",
        joinDate: "2019-10-25",
    },
];

const employeeColumns: DataGridColumn<Employee>[] = [
    {
        key: "id",
        header: "ID",
        width: 80,
        sortable: true,
        filterable: true,
        resizable: true,
        pinnable: true,
    },
    {
        key: "name",
        header: "Name",
        width: 180,
        sortable: true,
        filterable: true,
        resizable: true,
        pinnable: true,
        editable: true,
    },
    {
        key: "email",
        header: "Email",
        width: 220,
        sortable: true,
        filterable: true,
        resizable: true,
    },
    {
        key: "department",
        header: "Department",
        width: 140,
        sortable: true,
        filterable: true,
        resizable: true,
        groupable: true,
    },
    {
        key: "role",
        header: "Role",
        width: 160,
        sortable: true,
        filterable: true,
        resizable: true,
    },
    {
        key: "salary",
        header: "Salary",
        width: 120,
        sortable: true,
        filterable: true,
        resizable: true,
        render: (value: number) => (
            <span className="font-medium text-accent-blue">
                ${value.toLocaleString()}
            </span>
        ),
    },
    {
        key: "status",
        header: "Status",
        width: 120,
        sortable: true,
        filterable: true,
        resizable: true,
        render: (value: Employee["status"]) => {
            const variants = {
                active: "success" as const,
                inactive: "error" as const,
                "on-leave": "warning" as const,
            };
            return (
                <Badge variant={variants[value]} size="sm">
                    {value}
                </Badge>
            );
        },
    },
    {
        key: "joinDate",
        header: "Join Date",
        width: 120,
        sortable: true,
        filterable: true,
        resizable: true,
    },
];

/* -------------------------------------------------------------------------- */
/*                                  STORIES                                   */
/* -------------------------------------------------------------------------- */

export const Default: Story = {
    render: () => {
        const [page, setPage] = useState(1);

        return (
            <DataGrid
                columns={employeeColumns}
                data={sampleEmployees}
                page={page}
                pageSize={5}
                onPageChange={setPage}
            />
        );
    },
};

export const WithSelection: Story = {
    render: () => {
        const [page, setPage] = useState(1);

        return (
            <DataGrid
                columns={employeeColumns}
                data={sampleEmployees}
                selectable
                page={page}
                pageSize={5}
                onPageChange={setPage}
            />
        );
    },
};

export const CompactDensity: Story = {
    render: () => {
        const [page, setPage] = useState(1);

        return (
            <DataGrid
                columns={employeeColumns}
                data={sampleEmployees}
                density="compact"
                page={page}
                pageSize={8}
                onPageChange={setPage}
            />
        );
    },
};

export const WithSorting: Story = {
    render: () => {
        const [page, setPage] = useState(1);
        const [sortKey, setSortKey] = useState<keyof Employee | null>(null);
        const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

        return (
            <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Click on column headers with sort icons to sort the data
                    </p>
                    {sortKey && (
                        <p className="text-sm text-text-primary mt-2">
                            Sorted by:{" "}
                            <span className="font-medium">
                                {sortKey} ({sortDirection})
                            </span>
                        </p>
                    )}
                </div>

                <DataGrid
                    columns={employeeColumns}
                    data={sampleEmployees}
                    page={page}
                    pageSize={5}
                    onPageChange={setPage}
                    onSortChange={(key, direction) => {
                        setSortKey(key);
                        setSortDirection(direction);
                    }}
                />
            </div>
        );
    },
};

export const WithFiltering: Story = {
    render: () => {
        const [page, setPage] = useState(1);

        return (
            <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Click the filter icons next to column headers to filter data
                    </p>
                </div>

                <DataGrid
                    columns={employeeColumns}
                    data={sampleEmployees}
                    page={page}
                    pageSize={5}
                    onPageChange={setPage}
                />
            </div>
        );
    },
};

export const WithGrouping: Story = {
    render: () => {
        const [page, setPage] = useState(1);

        return (
            <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Use the "Group by" dropdown in the toolbar to group rows by department
                    </p>
                </div>

                <DataGrid
                    columns={employeeColumns}
                    data={sampleEmployees}
                    page={page}
                    pageSize={20}
                    onPageChange={setPage}
                />
            </div>
        );
    },
};

export const WithResizableColumns: Story = {
    render: () => {
        const [page, setPage] = useState(1);

        return (
            <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Hover over column borders and drag to resize columns
                    </p>
                </div>

                <DataGrid
                    columns={employeeColumns}
                    data={sampleEmployees}
                    page={page}
                    pageSize={5}
                    onPageChange={setPage}
                />
            </div>
        );
    },
};

export const WithPinnedColumns: Story = {
    render: () => {
        const [page, setPage] = useState(1);

        return (
            <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Use the "Columns" menu to pin columns to the left (ID and Name are
                        pinnable)
                    </p>
                </div>

                <DataGrid
                    columns={employeeColumns}
                    data={sampleEmployees}
                    page={page}
                    pageSize={5}
                    onPageChange={setPage}
                />
            </div>
        );
    },
};

export const WithColumnVisibility: Story = {
    render: () => {
        const [page, setPage] = useState(1);

        return (
            <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Use the "Columns" menu to show/hide columns
                    </p>
                </div>

                <DataGrid
                    columns={employeeColumns}
                    data={sampleEmployees}
                    page={page}
                    pageSize={5}
                    onPageChange={setPage}
                />
            </div>
        );
    },
};

export const WithCellEditing: Story = {
    render: () => {
        const [page, setPage] = useState(1);
        const [data, setData] = useState(sampleEmployees);

        return (
            <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Click on the "Name" column cells to edit them (editable columns are
                        configured)
                    </p>
                </div>

                <DataGrid
                    columns={employeeColumns}
                    data={data}
                    page={page}
                    pageSize={5}
                    onPageChange={setPage}
                    onCellEdit={(row, key, value) => {
                        setData((prev) =>
                            prev.map((item) =>
                                item.id === (row as Employee).id
                                    ? { ...item, [key]: value }
                                    : item
                            )
                        );
                    }}
                />
            </div>
        );
    },
};

export const VirtualScrolling: Story = {
    render: () => {
        // Generate more data for virtual scrolling demo
        const largeDataset = Array.from({ length: 100 }, (_, i) => ({
            ...sampleEmployees[i % sampleEmployees.length],
            id: i + 1,
        }));

        return (
            <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Virtual scrolling enabled for 100+ rows. Scroll through the data grid
                        to see the performance
                    </p>
                </div>

                <DataGrid
                    columns={employeeColumns}
                    data={largeDataset}
                    virtualScrolling
                    maxHeight="500px"
                />
            </div>
        );
    },
};

export const WithExport: Story = {
    render: () => {
        const [page, setPage] = useState(1);

        return (
            <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Click the "Export CSV" button in the toolbar to download the data as CSV
                    </p>
                </div>

                <DataGrid
                    columns={employeeColumns}
                    data={sampleEmployees}
                    page={page}
                    pageSize={5}
                    onPageChange={setPage}
                />
            </div>
        );
    },
};

export const FullFeatured: Story = {
    render: () => {
        const [page, setPage] = useState(1);
        const [data, setData] = useState(sampleEmployees);

        return (
            <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                        Full-Featured Data Grid
                    </h3>
                    <ul className="text-sm text-text-secondary space-y-1">
                        <li>✓ Sortable columns (click headers)</li>
                        <li>✓ Filterable columns (filter icons)</li>
                        <li>✓ Resizable columns (drag borders)</li>
                        <li>✓ Pinnable columns (Columns menu)</li>
                        <li>✓ Column visibility (Columns menu)</li>
                        <li>✓ Row grouping (Group by dropdown)</li>
                        <li>✓ Cell editing (click Name cells)</li>
                        <li>✓ Row selection (checkboxes)</li>
                        <li>✓ CSV export (Export button)</li>
                        <li>✓ Pagination</li>
                    </ul>
                </div>

                <DataGrid
                    columns={employeeColumns}
                    data={data}
                    selectable
                    page={page}
                    pageSize={5}
                    onPageChange={setPage}
                    onCellEdit={(row, key, value) => {
                        setData((prev) =>
                            prev.map((item) =>
                                item.id === (row as Employee).id
                                    ? { ...item, [key]: value }
                                    : item
                            )
                        );
                    }}
                />
            </div>
        );
    },
};

export const CustomRendering: Story = {
    render: () => {
        const [page, setPage] = useState(1);

        const customColumns: DataGridColumn<Employee>[] = [
            {
                key: "name",
                header: "Employee",
                width: 220,
                sortable: true,
                filterable: true,
                resizable: true,
                pinnable: true,
                render: (value: string, row: Employee) => (
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center font-semibold text-sm">
                            {value
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </div>
                        <div>
                            <div className="font-medium text-text-primary">{value}</div>
                            <div className="text-xs text-text-tertiary">{row.email}</div>
                        </div>
                    </div>
                ),
            },
            {
                key: "department",
                header: "Department",
                width: 140,
                sortable: true,
                groupable: true,
            },
            {
                key: "role",
                header: "Role",
                width: 160,
                sortable: true,
            },
            {
                key: "salary",
                header: "Annual Salary",
                width: 140,
                sortable: true,
                render: (value: number) => (
                    <div className="text-right">
                        <div className="font-semibold text-text-primary">
                            ${value.toLocaleString()}
                        </div>
                        <div className="text-xs text-text-tertiary">
                            ${Math.round(value / 12).toLocaleString()}/mo
                        </div>
                    </div>
                ),
            },
            {
                key: "status",
                header: "Status",
                width: 120,
                sortable: true,
                render: (value: Employee["status"]) => {
                    const config = {
                        active: {
                            variant: "success" as const,
                            label: "Active",
                            dot: true,
                        },
                        inactive: { variant: "error" as const, label: "Inactive", dot: true },
                        "on-leave": {
                            variant: "warning" as const,
                            label: "On Leave",
                            dot: true,
                        },
                    };
                    const { variant, label, dot } = config[value];
                    return (
                        <Badge variant={variant} size="sm" dot={dot}>
                            {label}
                        </Badge>
                    );
                },
            },
        ];

        return (
            <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Custom cell rendering with avatars, formatted values, and rich content
                    </p>
                </div>

                <DataGrid
                    columns={customColumns}
                    data={sampleEmployees}
                    page={page}
                    pageSize={5}
                    onPageChange={setPage}
                />
            </div>
        );
    },
};

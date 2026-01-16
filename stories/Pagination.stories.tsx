import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '../components/ui/Pagination';

const meta: Meta<typeof Pagination> = {
    title: 'Navigation/Pagination',
    component: Pagination,
    tags: [],
    argTypes: {
        currentPage: {
            control: { type: 'number', min: 1 },
            description: 'Current active page (1-indexed)',
        },
        totalPages: {
            control: { type: 'number', min: 1 },
            description: 'Total number of pages',
        },
        siblingCount: {
            control: { type: 'number', min: 0, max: 3 },
            description: 'Number of page buttons to show around current page',
        },
        showFirstLast: {
            control: 'boolean',
            description: 'Show first/last page buttons',
        },
        showPrevNext: {
            control: 'boolean',
            description: 'Show previous/next buttons',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Size variant',
        },
        className: { control: false },
        onPageChange: { action: 'page changed' },
    },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

// Wrapper component to handle state in stories
const PaginationWithState = (args: any) => {
    const [currentPage, setCurrentPage] = React.useState(args.currentPage || 1);

    React.useEffect(() => {
        setCurrentPage(args.currentPage);
    }, [args.currentPage]);

    return (
        <div className="p-8 bg-background-secondary rounded-lg">
            <Pagination
                {...args}
                currentPage={currentPage}
                onPageChange={(page) => {
                    setCurrentPage(page);
                    args.onPageChange?.(page);
                }}
            />
            <div className="mt-6 text-center text-sm text-text-secondary">
                Current Page: <span className="font-semibold text-text-primary">{currentPage}</span> of{' '}
                <span className="font-semibold text-text-primary">{args.totalPages}</span>
            </div>
        </div>
    );
};

export const Default: Story = {
    render: (args) => <PaginationWithState {...args} />,
    args: {
        currentPage: 1,
        totalPages: 10,
        siblingCount: 1,
        showFirstLast: true,
        showPrevNext: true,
        size: 'md',
    },
};

export const Small: Story = {
    render: (args) => <PaginationWithState {...args} />,
    args: {
        currentPage: 1,
        totalPages: 10,
        size: 'sm',
        siblingCount: 1,
        showFirstLast: true,
        showPrevNext: true,
    },
};

export const Large: Story = {
    render: (args) => <PaginationWithState {...args} />,
    args: {
        currentPage: 1,
        totalPages: 10,
        size: 'lg',
        siblingCount: 1,
        showFirstLast: true,
        showPrevNext: true,
    },
};

export const ManyPages: Story = {
    render: (args) => <PaginationWithState {...args} />,
    args: {
        currentPage: 25,
        totalPages: 50,
        siblingCount: 1,
        showFirstLast: true,
        showPrevNext: true,
        size: 'md',
    },
};

export const MiddlePage: Story = {
    render: (args) => <PaginationWithState {...args} />,
    args: {
        currentPage: 5,
        totalPages: 10,
        siblingCount: 1,
        showFirstLast: true,
        showPrevNext: true,
        size: 'md',
    },
};

export const LastPage: Story = {
    render: (args) => <PaginationWithState {...args} />,
    args: {
        currentPage: 10,
        totalPages: 10,
        siblingCount: 1,
        showFirstLast: true,
        showPrevNext: true,
        size: 'md',
    },
};

export const WithMoreSiblings: Story = {
    render: (args) => <PaginationWithState {...args} />,
    args: {
        currentPage: 10,
        totalPages: 20,
        siblingCount: 2,
        showFirstLast: true,
        showPrevNext: true,
        size: 'md',
    },
};

export const WithoutFirstLast: Story = {
    render: (args) => <PaginationWithState {...args} />,
    args: {
        currentPage: 5,
        totalPages: 10,
        siblingCount: 1,
        showFirstLast: false,
        showPrevNext: true,
        size: 'md',
    },
};

export const WithoutPrevNext: Story = {
    render: (args) => <PaginationWithState {...args} />,
    args: {
        currentPage: 5,
        totalPages: 10,
        siblingCount: 1,
        showFirstLast: true,
        showPrevNext: false,
        size: 'md',
    },
};

export const MinimalControls: Story = {
    render: (args) => <PaginationWithState {...args} />,
    args: {
        currentPage: 5,
        totalPages: 10,
        siblingCount: 1,
        showFirstLast: false,
        showPrevNext: false,
        size: 'md',
    },
};

export const FewPages: Story = {
    render: (args) => <PaginationWithState {...args} />,
    args: {
        currentPage: 2,
        totalPages: 5,
        siblingCount: 1,
        showFirstLast: true,
        showPrevNext: true,
        size: 'md',
    },
};

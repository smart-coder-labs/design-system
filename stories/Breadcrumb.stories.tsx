import type { Meta, StoryObj } from '@storybook/react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
} from '../components/Breadcrumb';
import {
    Dropdown,
    DropdownItem,
} from '../components/Dropdown';
import { ChevronDown } from 'lucide-react';

const meta: Meta<typeof Breadcrumb> = {
    title: 'Navigation/Breadcrumb',
    component: Breadcrumb,
    tags: [],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
    render: () => (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    ),
};

export const WithDropdown: Story = {
    render: () => (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <Dropdown
                        trigger={
                            <button className="flex items-center gap-1">
                                <BreadcrumbEllipsis className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                            </button>
                        }
                        align="start"
                    >
                        <DropdownItem>Documentation</DropdownItem>
                        <DropdownItem>Themes</DropdownItem>
                        <DropdownItem>GitHub</DropdownItem>
                    </Dropdown>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    ),
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BreadcrumbTabsHybrid } from '../components/ui/BreadcrumbTabsHybrid';
import {
    Home,
    Folder,
    FileText,
    Settings,
    Users,
    BarChart,
    ShoppingCart,
    Package,
    Truck,
    CreditCard,
    Layout,
    Code,
    Database,
} from 'lucide-react';

const meta: Meta<typeof BreadcrumbTabsHybrid> = {
    title: 'Navigation/BreadcrumbTabsHybrid',
    component: BreadcrumbTabsHybrid,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'A hybrid navigation component that combines breadcrumbs with tabs, providing hierarchical context while allowing quick switching between related views. Perfect for complex applications with multi-level navigation.',
            },
        },
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof BreadcrumbTabsHybrid>;

export const Default: Story = {
    args: {
        breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: 'Projects', href: '/projects' },
            { label: 'Design System', href: '/projects/design-system' },
        ],
        tabs: [
            { id: 'overview', label: 'Overview', icon: <Layout className="w-4 h-4" /> },
            { id: 'components', label: 'Components', icon: <Package className="w-4 h-4" /> },
            { id: 'settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> },
        ],
    },
    render: (args) => {
        const [activeTab, setActiveTab] = React.useState('overview');
        return (
            <BreadcrumbTabsHybrid
                {...args}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
        );
    },
};

export const WithBadges: Story = {
    args: {
        breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: 'Dashboard', href: '/dashboard' },
        ],
        tabs: [
            {
                id: 'notifications',
                label: 'Notifications',
                icon: <FileText className="w-4 h-4" />,
                badge: 12,
            },
            {
                id: 'messages',
                label: 'Messages',
                icon: <Users className="w-4 h-4" />,
                badge: 5,
            },
            {
                id: 'analytics',
                label: 'Analytics',
                icon: <BarChart className="w-4 h-4" />,
            },
        ],
    },
    render: (args) => {
        const [activeTab, setActiveTab] = React.useState('notifications');
        return (
            <BreadcrumbTabsHybrid
                {...args}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
        );
    },
};

export const ECommerce: Story = {
    args: {
        breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: 'Store', href: '/store' },
            { label: 'Orders', href: '/store/orders' },
            { label: 'Order #12345' },
        ],
        tabs: [
            {
                id: 'details',
                label: 'Details',
                icon: <ShoppingCart className="w-4 h-4" />,
            },
            {
                id: 'items',
                label: 'Items',
                icon: <Package className="w-4 h-4" />,
                badge: 3,
            },
            {
                id: 'shipping',
                label: 'Shipping',
                icon: <Truck className="w-4 h-4" />,
            },
            {
                id: 'payment',
                label: 'Payment',
                icon: <CreditCard className="w-4 h-4" />,
            },
        ],
    },
    render: (args) => {
        const [activeTab, setActiveTab] = React.useState('details');
        return (
            <BreadcrumbTabsHybrid
                {...args}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
        );
    },
};

export const CompactVariant: Story = {
    args: {
        breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: 'Documentation', href: '/docs' },
            { label: 'Components' },
        ],
        tabs: [
            { id: 'usage', label: 'Usage' },
            { id: 'api', label: 'API' },
            { id: 'examples', label: 'Examples' },
            { id: 'changelog', label: 'Changelog' },
        ],
        variant: 'compact',
    },
    render: (args) => {
        const [activeTab, setActiveTab] = React.useState('usage');
        return (
            <BreadcrumbTabsHybrid
                {...args}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
        );
    },
};

export const ElevatedVariant: Story = {
    args: {
        breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: 'Admin', href: '/admin' },
            { label: 'Users' },
        ],
        tabs: [
            { id: 'all', label: 'All Users', badge: 156 },
            { id: 'active', label: 'Active', badge: 142 },
            { id: 'pending', label: 'Pending', badge: 8 },
            { id: 'blocked', label: 'Blocked', badge: 6 },
        ],
        variant: 'elevated',
        className: 'm-6',
    },
    render: (args) => {
        const [activeTab, setActiveTab] = React.useState('all');
        return (
            <BreadcrumbTabsHybrid
                {...args}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
        );
    },
};

export const DeepNavigation: Story = {
    args: {
        breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: 'Projects', href: '/projects', icon: <Folder className="w-4 h-4" /> },
            {
                label: 'Web App',
                href: '/projects/web-app',
                icon: <Code className="w-4 h-4" />,
            },
            {
                label: 'Backend',
                href: '/projects/web-app/backend',
                icon: <Database className="w-4 h-4" />,
            },
            { label: 'API Documentation' },
        ],
        tabs: [
            { id: 'endpoints', label: 'Endpoints' },
            { id: 'authentication', label: 'Authentication' },
            { id: 'models', label: 'Models' },
            { id: 'errors', label: 'Error Codes' },
        ],
    },
    render: (args) => {
        const [activeTab, setActiveTab] = React.useState('endpoints');
        return (
            <BreadcrumbTabsHybrid
                {...args}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
        );
    },
};

export const WithoutHomeIcon: Story = {
    args: {
        breadcrumbs: [
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Reports', href: '/reports' },
            { label: 'Monthly Sales' },
        ],
        tabs: [
            { id: 'summary', label: 'Summary' },
            { id: 'details', label: 'Details' },
            { id: 'charts', label: 'Charts' },
        ],
        showHomeIcon: false,
    },
    render: (args) => {
        const [activeTab, setActiveTab] = React.useState('summary');
        return (
            <BreadcrumbTabsHybrid
                {...args}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
        );
    },
};

export const ManyTabs: Story = {
    args: {
        breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: 'Settings', href: '/settings' },
        ],
        tabs: [
            { id: 'general', label: 'General' },
            { id: 'profile', label: 'Profile' },
            { id: 'security', label: 'Security' },
            { id: 'notifications', label: 'Notifications', badge: 3 },
            { id: 'privacy', label: 'Privacy' },
            { id: 'billing', label: 'Billing' },
            { id: 'team', label: 'Team', badge: 12 },
            { id: 'integrations', label: 'Integrations' },
            { id: 'api', label: 'API Keys' },
            { id: 'advanced', label: 'Advanced' },
        ],
    },
    render: (args) => {
        const [activeTab, setActiveTab] = React.useState('general');
        return (
            <BreadcrumbTabsHybrid
                {...args}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
        );
    },
};

export const Interactive: Story = {
    args: {
        breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Electronics' },
        ],
        tabs: [
            { id: 'all', label: 'All Products', badge: 234 },
            { id: 'featured', label: 'Featured', badge: 12 },
            { id: 'sale', label: 'On Sale', badge: 45 },
            { id: 'new', label: 'New Arrivals', badge: 8 },
        ],
        activeTab: 'all',
    },
    render: (args) => {
        const [activeTab, setActiveTab] = React.useState(args.activeTab || 'all');
        const [breadcrumbs, setBreadcrumbs] = React.useState(args.breadcrumbs);

        const handleTabChange = (tabId: string) => {
            setActiveTab(tabId);
            console.log('Tab changed to:', tabId);
        };

        const handleBreadcrumbClick = (index: number) => {
            console.log('Breadcrumb clicked:', breadcrumbs[index].label);
            // Simulate navigation by truncating breadcrumbs
            setBreadcrumbs(breadcrumbs.slice(0, index + 1));
        };

        return (
            <div className="min-h-screen bg-background-primary">
                <BreadcrumbTabsHybrid
                    {...args}
                    breadcrumbs={breadcrumbs}
                    activeTab={activeTab}
                    onTabChange={handleTabChange}
                    onBreadcrumbClick={handleBreadcrumbClick}
                />
                <div className="p-6">
                    <div className="bg-surface-secondary rounded-xl p-6 border border-border-primary">
                        <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Active Tab: {activeTab}
                        </h3>
                        <p className="text-text-secondary text-sm">
                            Click on tabs to switch between views. Click on breadcrumbs to navigate up
                            the hierarchy.
                        </p>
                    </div>
                </div>
            </div>
        );
    },
};

export const DarkMode: Story = {
    args: {
        breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: 'Workspace', href: '/workspace' },
            { label: 'Project Alpha' },
        ],
        tabs: [
            { id: 'overview', label: 'Overview', icon: <Layout className="w-4 h-4" /> },
            {
                id: 'tasks',
                label: 'Tasks',
                icon: <FileText className="w-4 h-4" />,
                badge: 24,
            },
            { id: 'team', label: 'Team', icon: <Users className="w-4 h-4" />, badge: 8 },
            {
                id: 'analytics',
                label: 'Analytics',
                icon: <BarChart className="w-4 h-4" />,
            },
        ],
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
    decorators: [
        (Story) => (
            <div className="dark">
                <Story />
            </div>
        ),
    ],
    render: (args) => {
        const [activeTab, setActiveTab] = React.useState('overview');
        return (
            <BreadcrumbTabsHybrid
                {...args}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
        );
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="space-y-8 p-6 bg-background-primary min-h-screen">
            <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                    Default Variant
                </h3>
                <BreadcrumbTabsHybrid
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Projects', href: '/projects' },
                        { label: 'Design System' },
                    ]}
                    tabs={[
                        { id: 'overview', label: 'Overview' },
                        { id: 'components', label: 'Components', badge: 86 },
                        { id: 'settings', label: 'Settings' },
                    ]}
                    activeTab="overview"
                />
            </div>

            <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                    Compact Variant
                </h3>
                <BreadcrumbTabsHybrid
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Documentation', href: '/docs' },
                        { label: 'Components' },
                    ]}
                    tabs={[
                        { id: 'usage', label: 'Usage' },
                        { id: 'api', label: 'API' },
                        { id: 'examples', label: 'Examples' },
                    ]}
                    activeTab="usage"
                    variant="compact"
                />
            </div>

            <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                    Elevated Variant
                </h3>
                <BreadcrumbTabsHybrid
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Admin', href: '/admin' },
                        { label: 'Users' },
                    ]}
                    tabs={[
                        { id: 'all', label: 'All Users', badge: 156 },
                        { id: 'active', label: 'Active', badge: 142 },
                        { id: 'pending', label: 'Pending', badge: 8 },
                    ]}
                    activeTab="all"
                    variant="elevated"
                />
            </div>
        </div>
    ),
};

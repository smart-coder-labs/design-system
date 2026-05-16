import type { Meta, StoryObj } from '@storybook/react';
import { BreadcrumbTabsHybrid } from './BreadcrumbTabsHybrid';
import { Settings, Users, FileText, BarChart } from 'lucide-react';

const meta = {
    title: 'Navigation/BreadcrumbTabsHybrid',
    component: BreadcrumbTabsHybrid,
    tags: ['autodocs'],
} satisfies Meta<typeof BreadcrumbTabsHybrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultBreadcrumbs = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Accounts', href: '/accounts' },
    { label: 'Settings' },
];

const defaultTabs = [
    { id: 'general', label: 'General', icon: <Settings className="w-4 h-4" /> },
    { id: 'users', label: 'Users', icon: <Users className="w-4 h-4" />, badge: 12 },
    { id: 'reports', label: 'Reports', icon: <FileText className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart className="w-4 h-4" />, badge: 5 },
];

export const Default: Story = {
    args: {
        breadcrumbs: defaultBreadcrumbs,
        tabs: defaultTabs,
        activeTab: 'general',
        variant: 'default',
        showHomeIcon: true,
    },
};

export const CompactVariant: Story = {
    args: {
        breadcrumbs: defaultBreadcrumbs,
        tabs: defaultTabs,
        activeTab: 'users',
        variant: 'compact',
    },
};

export const ElevatedVariant: Story = {
    args: {
        breadcrumbs: defaultBreadcrumbs,
        tabs: defaultTabs,
        activeTab: 'reports',
        variant: 'elevated',
    },
};

export const WithoutHomeIcon: Story = {
    args: {
        breadcrumbs: defaultBreadcrumbs,
        tabs: defaultTabs,
        activeTab: 'general',
        showHomeIcon: false,
    },
};

export const SingleBreadcrumb: Story = {
    args: {
        breadcrumbs: [{ label: 'Dashboard' }],
        tabs: defaultTabs,
        activeTab: 'general',
        variant: 'default',
    },
};

export const LongBreadcrumbs: Story = {
    args: {
        breadcrumbs: [
            { label: 'Organization', href: '/org' },
            { label: 'Workspace', href: '/workspace' },
            { label: 'Projects', href: '/projects' },
            { label: 'Finances' },
        ],
        tabs: defaultTabs,
        activeTab: 'analytics',
    },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};
export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

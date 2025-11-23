import type { Meta, StoryObj } from '@storybook/react';
import { KPIBlock, KPIGroup } from '../components/KPIBlock';
import { Users, DollarSign, ShoppingCart, Eye, Target, Activity, Server, Shield, TrendingUp } from 'lucide-react';

const meta = {
    title: 'Data Display/KPIBlock',
    component: KPIBlock,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof KPIBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========================================
// BASIC EXAMPLES
// ========================================

export const Default: Story = {
    args: {
        label: 'Total Revenue',
        value: '$124,500',
    },
};

export const WithTrendUp: Story = {
    args: {
        label: 'Monthly Sales',
        value: '$45,280',
        trend: 'up',
        change: '+12.5%',
    },
};

export const WithTrendDown: Story = {
    args: {
        label: 'Bounce Rate',
        value: '32.4%',
        trend: 'down',
        change: '-8.2%',
    },
};

export const WithTrendNeutral: Story = {
    args: {
        label: 'Conversion Rate',
        value: '3.45%',
        trend: 'neutral',
        change: '0.0%',
    },
};

export const WithIcon: Story = {
    args: {
        label: 'Active Users',
        value: '2,543',
        icon: <Users className="w-5 h-5" />,
        trend: 'up',
        change: '+5.2%',
    },
};

// ========================================
// SIZE VARIANTS
// ========================================

export const SmallSize: Story = {
    args: {
        label: 'Page Views',
        value: '15,234',
        size: 'sm',
        icon: <Eye className="w-4 h-4" />,
        trend: 'up',
        change: '+23.1%',
    },
};

export const MediumSize: Story = {
    args: {
        label: 'Total Orders',
        value: '1,249',
        size: 'md',
        icon: <ShoppingCart className="w-5 h-5" />,
        trend: 'up',
        change: '+18.3%',
    },
};

export const LargeSize: Story = {
    args: {
        label: 'Revenue',
        value: '$324,500',
        size: 'lg',
        icon: <DollarSign className="w-6 h-6" />,
        trend: 'up',
        change: '+15.7%',
    },
};

// ========================================
// STYLE VARIANTS
// ========================================

export const DefaultVariant: Story = {
    args: {
        label: 'Conversion Rate',
        value: '3.8%',
        variant: 'default',
        icon: <Target className="w-5 h-5" />,
        trend: 'up',
        change: '+0.3%',
    },
};

export const ElevatedVariant: Story = {
    args: {
        label: 'Daily Active Users',
        value: '8,234',
        variant: 'elevated',
        icon: <Activity className="w-5 h-5" />,
        trend: 'up',
        change: '+12.5%',
    },
};

export const BorderedVariant: Story = {
    args: {
        label: 'Total Sales',
        value: '$67,890',
        variant: 'bordered',
        icon: <DollarSign className="w-5 h-5" />,
        trend: 'down',
        change: '-2.4%',
    },
};

// ========================================
// LOADING STATE
// ========================================

export const Loading: Story = {
    args: {
        label: 'Loading Data',
        value: '$0',
        loading: true,
        icon: <DollarSign className="w-5 h-5" />,
    },
};

// ========================================
// KPI GROUPS
// ========================================

export const TwoColumnGrid: Story = {
    args: {
        label: 'Metric',
        value: '-',
    },
    render: () => (
        <KPIGroup columns={2}>
            <KPIBlock
                label="Total Revenue"
                value="$324,500"
                icon={<DollarSign className="w-5 h-5" />}
                trend="up"
                change="+15.7%"
                variant="elevated"
            />
            <KPIBlock
                label="Active Users"
                value="8,234"
                icon={<Users className="w-5 h-5" />}
                trend="up"
                change="+12.5%"
                variant="elevated"
            />
        </KPIGroup>
    ),
};

export const ThreeColumnGrid: Story = {
    args: {
        label: 'Metric',
        value: '-',
    },
    render: () => (
        <KPIGroup columns={3}>
            <KPIBlock
                label="Revenue"
                value="$124,500"
                icon={<DollarSign className="w-5 h-5" />}
                trend="up"
                change="+15.7%"
                variant="elevated"
            />
            <KPIBlock
                label="Orders"
                value="1,249"
                icon={<ShoppingCart className="w-5 h-5" />}
                trend="up"
                change="+18.3%"
                variant="elevated"
            />
            <KPIBlock
                label="Users"
                value="2,543"
                icon={<Users className="w-5 h-5" />}
                trend="up"
                change="+5.2%"
                variant="elevated"
            />
        </KPIGroup>
    ),
};

export const FourColumnGrid: Story = {
    args: {
        label: 'Metric',
        value: '-',
    },
    render: () => (
        <KPIGroup columns={4}>
            <KPIBlock
                label="Revenue"
                value="$324,500"
                icon={<DollarSign className="w-5 h-5" />}
                trend="up"
                change="+15.7%"
                variant="elevated"
            />
            <KPIBlock
                label="Orders"
                value="1,249"
                icon={<ShoppingCart className="w-5 h-5" />}
                trend="up"
                change="+18.3%"
                variant="elevated"
            />
            <KPIBlock
                label="Users"
                value="8,234"
                icon={<Users className="w-5 h-5" />}
                trend="up"
                change="+12.5%"
                variant="elevated"
            />
            <KPIBlock
                label="Views"
                value="15,234"
                icon={<Eye className="w-5 h-5" />}
                trend="up"
                change="+23.1%"
                variant="elevated"
            />
        </KPIGroup>
    ),
};

// ========================================
// REAL-WORLD EXAMPLES
// ========================================

export const DashboardMetrics: Story = {
    args: {
        label: 'Metric',
        value: '-',
    },
    render: () => (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold text-text-primary">Dashboard Overview</h3>
            <KPIGroup columns={4}>
                <KPIBlock
                    label="Total Revenue"
                    value="$324,500"
                    icon={<DollarSign className="w-5 h-5" />}
                    trend="up"
                    change="+15.7%"
                    variant="elevated"
                    size="md"
                />
                <KPIBlock
                    label="Total Orders"
                    value="1,249"
                    icon={<ShoppingCart className="w-5 h-5" />}
                    trend="up"
                    change="+18.3%"
                    variant="elevated"
                    size="md"
                />
                <KPIBlock
                    label="Active Users"
                    value="8,234"
                    icon={<Users className="w-5 h-5" />}
                    trend="up"
                    change="+12.5%"
                    variant="elevated"
                    size="md"
                />
                <KPIBlock
                    label="Conversion Rate"
                    value="3.8%"
                    icon={<Target className="w-5 h-5" />}
                    trend="up"
                    change="+0.3%"
                    variant="elevated"
                    size="md"
                />
            </KPIGroup>
        </div>
    ),
};

export const MixedTrends: Story = {
    args: {
        label: 'Metric',
        value: '-',
    },
    render: () => (
        <KPIGroup columns={3}>
            <KPIBlock
                label="Revenue"
                value="$124,500"
                icon={<DollarSign className="w-5 h-5" />}
                trend="up"
                change="+15.7%"
                variant="elevated"
            />
            <KPIBlock
                label="Bounce Rate"
                value="32.4%"
                icon={<Activity className="w-5 h-5" />}
                trend="down"
                change="-8.2%"
                variant="elevated"
            />
            <KPIBlock
                label="Conversion"
                value="3.45%"
                icon={<Target className="w-5 h-5" />}
                trend="neutral"
                change="0.0%"
                variant="elevated"
            />
        </KPIGroup>
    ),
};

export const CompactDisplay: Story = {
    args: {
        label: 'Metric',
        value: '-',
    },
    render: () => (
        <div className="max-w-md space-y-3">
            <KPIBlock
                label="Revenue"
                value="$124,500"
                trend="up"
                change="+15.7%"
                variant="bordered"
                size="sm"
            />
            <KPIBlock
                label="Orders"
                value="1,249"
                trend="up"
                change="+18.3%"
                variant="bordered"
                size="sm"
            />
            <KPIBlock
                label="Users"
                value="2,543"
                trend="up"
                change="+5.2%"
                variant="bordered"
                size="sm"
            />
        </div>
    ),
};

export const LoadingStates: Story = {
    args: {
        label: 'Metric',
        value: '-',
    },
    render: () => (
        <KPIGroup columns={3}>
            <KPIBlock
                label="Revenue"
                value="$0"
                icon={<DollarSign className="w-5 h-5" />}
                loading
                variant="elevated"
            />
            <KPIBlock
                label="Orders"
                value="0"
                icon={<ShoppingCart className="w-5 h-5" />}
                loading
                variant="elevated"
            />
            <KPIBlock
                label="Users"
                value="0"
                icon={<Users className="w-5 h-5" />}
                loading
                variant="elevated"
            />
        </KPIGroup>
    ),
};

export const SidebarMetrics: Story = {
    args: {
        label: 'Metric',
        value: '-',
    },
    render: () => (
        <div className="max-w-xs space-y-4">
            <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide">Quick Stats</h3>
            <div className="space-y-3">
                <KPIBlock
                    label="Today's Revenue"
                    value="$12,450"
                    trend="up"
                    change="+8.2%"
                    size="sm"
                />
                <KPIBlock
                    label="New Orders"
                    value="34"
                    trend="up"
                    change="+12.0%"
                    size="sm"
                />
                <KPIBlock
                    label="Active Now"
                    value="156"
                    trend="neutral"
                    change="0.0%"
                    size="sm"
                />
            </div>
        </div>
    ),
};

// ========================================
// STORIES - USE CASES
// ========================================

export const ExecutiveRevenuePanel: Story = {
    name: '💼 Caso de Uso: Panel Ejecutivo de Revenue',
    args: {
        label: 'Metric',
        value: '-',
    },
    render: () => (
        <div className="space-y-6">
            <div className="space-y-1">
                <p className="text-sm uppercase tracking-[0.25em] text-text-tertiary">Weekly Review</p>
                <h3 className="text-2xl font-semibold text-text-primary">Revenue Pulse</h3>
            </div>
            <KPIGroup columns={3}>
                <KPIBlock
                    label="Monthly Recurring Revenue"
                    value="$1.4M"
                    change="+6.3%"
                    trend="up"
                    icon={<DollarSign className="w-5 h-5" />}
                    variant="elevated"
                    size="lg"
                />
                <KPIBlock
                    label="Enterprise Pipeline"
                    value="$4.9M"
                    change="+18.0%"
                    trend="up"
                    icon={<TrendingUp className="w-5 h-5" />}
                    variant="elevated"
                />
                <KPIBlock
                    label="Net Revenue Retention"
                    value="134%"
                    change="+2.4 pts"
                    trend="up"
                    icon={<Users className="w-5 h-5" />}
                    variant="bordered"
                />
            </KPIGroup>
        </div>
    ),
    decorators: [
        (StoryComponent) => (
            <div className="w-full max-w-5xl mx-auto">
                <StoryComponent />
            </div>
        ),
    ],
};

export const GrowthMarketingPulse: Story = {
    name: '📈 Caso de Uso: Tablero de Growth y Marketing',
    args: {
        label: 'Metric',
        value: '-',
    },
    render: () => (
        <div className="space-y-4">
            <div className="space-y-1">
                <h3 className="text-lg font-semibold text-text-primary">Acquisition Overview</h3>
                <p className="text-sm text-text-secondary">Blend de campañas orgánicas, paid y referidos durante la última semana.</p>
            </div>
            <KPIGroup columns={4}>
                <KPIBlock
                    label="New Leads"
                    value="8,932"
                    change="+21.6%"
                    trend="up"
                    icon={<Activity className="w-5 h-5" />}
                    size="md"
                    variant="default"
                />
                <KPIBlock
                    label="Paid CAC"
                    value="$184"
                    change="-7.2%"
                    trend="down"
                    icon={<DollarSign className="w-5 h-5" />}
                    size="md"
                    variant="bordered"
                />
                <KPIBlock
                    label="Signup to Trial"
                    value="42%"
                    change="+3.1%"
                    trend="up"
                    icon={<Target className="w-5 h-5" />}
                    size="md"
                    variant="elevated"
                />
                <KPIBlock
                    label="Active Campaigns"
                    value="18"
                    change="+2"
                    trend="neutral"
                    icon={<ShoppingCart className="w-5 h-5" />}
                    size="md"
                    variant="bordered"
                />
            </KPIGroup>
        </div>
    ),
    decorators: [
        (StoryComponent) => (
            <div className="w-full max-w-6xl mx-auto">
                <StoryComponent />
            </div>
        ),
    ],
};

export const OperationsBridge: Story = {
    name: '🛡️ Caso de Uso: Operations Bridge',
    args: {
        label: 'Metric',
        value: '-',
    },
    render: () => (
        <div className="space-y-6 bg-surface-elevated/40 p-6 rounded-2xl">
            <div className="space-y-1">
                <p className="text-sm font-medium text-text-secondary">Live SRE Feed</p>
                <h3 className="text-xl font-semibold text-text-primary">Infra Critical Signals</h3>
            </div>
            <KPIGroup columns={3}>
                <KPIBlock
                    label="Global Uptime"
                    value="99.985%"
                    change="+0.003%"
                    trend="up"
                    icon={<Server className="w-5 h-5" />}
                    variant="elevated"
                />
                <KPIBlock
                    label="Active Incidents"
                    value="2"
                    change="-1"
                    trend="down"
                    icon={<Shield className="w-5 h-5" />}
                    variant="bordered"
                />
                <KPIBlock
                    label="Avg. Response Time"
                    value="142 ms"
                    change="-12 ms"
                    trend="up"
                    icon={<Eye className="w-5 h-5" />}
                    variant="elevated"
                />
            </KPIGroup>
        </div>
    ),
    decorators: [
        (StoryComponent) => (
            <div className="w-full max-w-4xl mx-auto">
                <StoryComponent />
            </div>
        ),
    ],
};

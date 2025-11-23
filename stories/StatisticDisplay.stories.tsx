import type { Meta, StoryObj } from '@storybook/react';
import { StatisticDisplay, StatisticHighlight } from '../components/StatisticDisplay';
import type { StatisticMetric } from '../components/StatisticDisplay';
import { DollarSign, Users, ShoppingCart, Activity, Target, Cpu, Server, Globe, TrendingUp } from 'lucide-react';

const overviewMetrics: StatisticMetric[] = [
    {
        id: 'revenue',
        label: 'Revenue',
        value: '$248K',
        description: 'Últimos 30 días',
        change: '+12.4%',
        trend: 'up',
        icon: <DollarSign className="w-5 h-5" />,
        target: 'Goal: $260K',
        sparkline: [180, 190, 205, 198, 214, 220, 248],
        sparklineAccent: 'blue',
        goal: { label: 'Q1 Goal', value: '$260K', progress: 0.82 },
    },
    {
        id: 'orders',
        label: 'Orders',
        value: '1,982',
        description: 'Pedidos completados',
        change: '+6.1%',
        trend: 'up',
        icon: <ShoppingCart className="w-5 h-5" />,
        sparkline: [1200, 1250, 1300, 1400, 1500, 1700, 1982],
        sparklineAccent: 'green',
        goal: { label: 'Goal', value: '2,100', progress: 0.76 },
    },
    {
        id: 'users',
        label: 'Active Users',
        value: '28,430',
        description: 'Usuarios activos mensuales',
        change: '+3.4%',
        trend: 'up',
        icon: <Users className="w-5 h-5" />,
        sparkline: [22000, 23000, 24000, 25000, 26000, 27500, 28430],
        sparklineAccent: 'purple',
        goal: { label: 'Target', value: '30K', progress: 0.71 },
    },
];

const performanceMetrics: StatisticMetric[] = [
    {
        id: 'conversion',
        label: 'Conversion Rate',
        value: '3.42%',
        description: 'Tasa promedio del sitio',
        change: '+0.2%',
        trend: 'up',
        icon: <Target className="w-5 h-5" />,
        sparkline: [2.9, 3.0, 3.2, 3.1, 3.25, 3.35, 3.42],
        sparklineAccent: 'pink',
    },
    {
        id: 'bounce',
        label: 'Bounce Rate',
        value: '38.1%',
        description: 'Visitantes que abandonan',
        change: '-4.5%',
        trend: 'down',
        icon: <Activity className="w-5 h-5" />,
        sparkline: [45, 44, 43, 41, 40, 39, 38],
        sparklineAccent: 'orange',
    },
    {
        id: 'cpu',
        label: 'Avg. CPU',
        value: '42%',
        description: 'Cargas del cluster M3',
        change: '-1.2%',
        trend: 'down',
        icon: <Cpu className="w-5 h-5" />,
        sparkline: [60, 55, 50, 48, 46, 44, 42],
        sparklineAccent: 'green',
    },
    {
        id: 'latency',
        label: 'P95 Latency',
        value: '212 ms',
        description: 'Región us-west',
        change: '+8 ms',
        trend: 'neutral',
        icon: <Server className="w-5 h-5" />,
        sparkline: [180, 190, 185, 200, 205, 207, 212],
        sparklineAccent: 'blue',
    },
];

const funnelMetrics: StatisticMetric[] = [
    {
        id: 'visits',
        label: 'Sessions',
        value: '182K',
        description: 'Visitantes únicos',
        change: '+5.3%',
        trend: 'up',
        icon: <Activity className="w-5 h-5" />,
        sparkline: [150, 155, 160, 168, 174, 182],
        sparklineAccent: 'blue',
    },
    {
        id: 'signup',
        label: 'Signups',
        value: '42,981',
        description: 'Nuevos registros',
        change: '+11.8%',
        trend: 'up',
        icon: <Users className="w-5 h-5" />,
        sparkline: [30, 33, 35, 38, 41, 43],
        sparklineAccent: 'green',
    },
    {
        id: 'trial',
        label: 'Trials to Paid',
        value: '68%',
        description: 'Conversión a pago',
        change: '+2.1%',
        trend: 'up',
        icon: <Target className="w-5 h-5" />,
        sparkline: [55, 58, 60, 63, 66, 68],
        sparklineAccent: 'purple',
    },
];

const infraMetrics: StatisticMetric[] = [
    {
        id: 'uptime',
        label: 'Global Uptime',
        value: '99.982%',
        description: 'Últimas 24h',
        change: '+0.004%',
        trend: 'up',
        icon: <Server className="w-5 h-5" />,
        sparkline: [99.93, 99.95, 99.96, 99.97, 99.98, 99.982],
        sparklineAccent: 'green',
    },
    {
        id: 'traffic',
        label: 'Global Traffic',
        value: '14.2M req/min',
        description: 'Pico actual',
        change: '+1.8%',
        trend: 'up',
        icon: <Globe className="w-5 h-5" />,
        sparkline: [11, 12, 12.5, 13, 13.5, 14.2],
        sparklineAccent: 'blue',
    },
    {
        id: 'alerts',
        label: 'Active Alerts',
        value: '4',
        description: 'Incidentes monitoreados',
        change: '-2',
        trend: 'down',
        icon: <Activity className="w-5 h-5" />,
        sparkline: [9, 8, 7, 6, 5, 4],
        sparklineAccent: 'orange',
    },
    {
        id: 'latency-global',
        label: 'Global Latency',
        value: '182 ms',
        description: 'P95 en todas las regiones',
        change: '-12 ms',
        trend: 'down',
        icon: <Cpu className="w-5 h-5" />,
        sparkline: [210, 205, 198, 194, 188, 182],
        sparklineAccent: 'purple',
    },
];

const meta = {
    title: 'Data Display/StatisticDisplay',
    component: StatisticDisplay,
    subcomponents: { StatisticHighlight },
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof StatisticDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========================================
   STORIES
   ======================================== */

export const DefaultGrid: Story = {
    args: {
        metrics: overviewMetrics,
        columns: 3,
        variant: 'card',
        size: 'md',
    },
};

export const SoftVariant: Story = {
    args: {
        metrics: overviewMetrics,
        columns: 3,
        variant: 'soft',
        size: 'md',
    },
};

export const MinimalList: Story = {
    args: {
        metrics: overviewMetrics,
        columns: 1,
        variant: 'minimal',
        size: 'lg',
    },
};

export const CompactStats: Story = {
    args: {
        metrics: performanceMetrics,
        columns: 2,
        variant: 'bordered',
        size: 'sm',
        gap: 'sm',
    },
};

export const GlassPanels: Story = {
    args: {
        metrics: performanceMetrics,
        columns: 4,
        variant: 'glass',
        size: 'md',
    },
};

/* ========================================
   STORIES - USE CASES
   ======================================== */

export const WithHighlight: Story = {
    name: '✨ Caso de Uso: Resumen Ejecutivo con Highlight',
    args: {
        metrics: overviewMetrics,
    },
    render: () => (
        <div className="space-y-8">
            <StatisticHighlight
                label="Net Revenue"
                value="$428,500"
                description="Vs. last quarter"
                change="+18.2%"
                trend="up"
                badge={<span className="px-2 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold">Live</span>}
                sparkline={[320, 340, 360, 370, 390, 410, 428]}
                progress={0.86}
            />
            <StatisticDisplay metrics={overviewMetrics} columns={3} variant="card" />
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

export const AnalyticsBoard: Story = {
    name: '📡 Caso de Uso: Board de Analítica en Tiempo Real',
    args: {
        metrics: performanceMetrics,
    },
    render: () => (
        <div className="space-y-6">
            <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-text-primary">Realtime Overview</h3>
                <p className="text-sm text-text-secondary">
                    Supervisión continua del sistema en múltiples regiones y servicios clave.
                </p>
            </div>
            <StatisticDisplay metrics={performanceMetrics} columns={4} variant="soft" size="sm" />
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

export const InternationalRollout: Story = {
    name: '🌍 Caso de Uso: Despliegue Internacional',
    args: {
        metrics: overviewMetrics,
    },
    render: () => (
        <StatisticDisplay
            metrics={[
                {
                    id: 'emea',
                    label: 'EMEA',
                    value: '$124K',
                    description: 'Ingresos región EMEA',
                    change: '+9.1%',
                    trend: 'up',
                    icon: <Globe className="w-5 h-5" />,
                    sparkline: [80, 82, 90, 94, 102, 110, 124],
                    sparklineAccent: 'purple',
                },
                {
                    id: 'latam',
                    label: 'LATAM',
                    value: '$64K',
                    description: 'Lanzamiento Beta',
                    change: '+21.4%',
                    trend: 'up',
                    icon: <TrendingUp className="w-5 h-5" />,
                    sparkline: [28, 30, 35, 40, 47, 54, 64],
                    sparklineAccent: 'green',
                },
                {
                    id: 'apac',
                    label: 'APAC',
                    value: '$102K',
                    description: 'Mercados consolidados',
                    change: '+4.2%',
                    trend: 'up',
                    icon: <Globe className="w-5 h-5" />,
                    sparkline: [70, 72, 75, 80, 88, 95, 102],
                    sparklineAccent: 'blue',
                },
            ]}
            columns={3}
            variant="card"
            size="md"
        />
    ),
    decorators: [
        (StoryComponent) => (
            <div className="w-full max-w-4xl mx-auto">
                <StoryComponent />
            </div>
        ),
    ],
};

export const ProductFunnel: Story = {
    name: '🌀 Caso de Uso: Funnel de Producto SaaS',
    args: {
        metrics: funnelMetrics,
    },
    render: () => (
        <div className="space-y-6">
            <StatisticHighlight
                label="ARR"
                value="$3.8M"
                description="Pipeline proyectado Q3"
                change="+24.6%"
                trend="up"
                sparkline={[2.2, 2.4, 2.6, 2.9, 3.2, 3.8]}
                progress={0.64}
            />
            <StatisticDisplay metrics={funnelMetrics} columns={3} variant="soft" />
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

export const OperationsWarRoom: Story = {
    name: '🛠️ Caso de Uso: Operations War Room',
    args: {
        metrics: infraMetrics,
    },
    render: () => (
        <div className="space-y-5">
            <h3 className="text-base font-semibold text-text-secondary uppercase tracking-[0.2em]">Infra Health</h3>
            <StatisticDisplay metrics={infraMetrics} columns={4} variant="glass" size="sm" />
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

export const QuarterlyOKRs: Story = {
    name: '📊 Caso de Uso: Panel de OKRs Trimestrales',
    args: {
        metrics: overviewMetrics,
    },
    render: () => (
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <StatisticDisplay metrics={overviewMetrics} columns={3} variant="card" animate={false} />
            <div className="space-y-4">
                <StatisticHighlight
                    label="Gross Margin"
                    value="72.5%"
                    description="YOY +3.4 pts"
                    change="+1.2%"
                    trend="up"
                    sparkline={[66, 67, 68, 69.5, 71, 72.5]}
                    progress={0.78}
                />
                <StatisticHighlight
                    label="Net Retention"
                    value="131%"
                    description="Enterprise cohort"
                    change="+4%"
                    trend="up"
                    sparkline={[118, 120, 123, 125, 129, 131]}
                    progress={0.81}
                />
            </div>
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

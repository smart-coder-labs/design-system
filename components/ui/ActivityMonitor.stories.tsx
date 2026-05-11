import type { Meta, StoryObj } from '@storybook/react';
import { ActivityMonitor } from './ActivityMonitor';

const meta = {
    title: 'Components/ActivityMonitor',
    component: ActivityMonitor,
    tags: ['autodocs'],
} satisfies Meta<typeof ActivityMonitor>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProcesses = [
    { id: '1', name: 'Portfolio Sync', pid: 4521, cpu: 23.5, memory: 156, user: 'system' },
    { id: '2', name: 'Fraud Detection', pid: 3891, cpu: 45.2, memory: 420, user: 'system' },
    { id: '3', name: 'Market Watcher', pid: 2104, cpu: 8.1, memory: 88, user: 'system' },
    { id: '4', name: 'Transaction Indexer', pid: 5562, cpu: 12.7, memory: 204, user: 'system' },
    { id: '5', name: 'Report Generator', pid: 6723, cpu: 3.2, memory: 64, user: 'cesar' },
];

const generateHistory = (base: number, variance: number, length = 20) =>
    Array.from({ length }, (_, i) => base + Math.sin(i * 0.5) * variance + (Math.random() - 0.5) * variance * 0.5);

const cpuMetrics = {
    label: 'CPU Usage',
    value: 45.2,
    unit: '%',
    trend: 'up' as const,
    history: generateHistory(40, 15),
    color: '#007AFF',
};

const memoryMetrics = {
    label: 'Memory',
    value: 4.8,
    unit: 'GB',
    trend: 'neutral' as const,
    history: generateHistory(4, 1),
    color: '#34C759',
};

const energyMetrics = {
    label: 'Energy',
    value: 12.3,
    unit: 'W',
    trend: 'down' as const,
    history: generateHistory(14, 3),
    color: '#FF9500',
};

const diskMetrics = {
    label: 'Disk',
    value: 156,
    unit: 'MB/s',
    trend: 'neutral' as const,
    history: generateHistory(120, 60),
    color: '#AF52DE',
};

const networkMetrics = {
    label: 'Network',
    value: 42,
    unit: 'MB/s',
    trend: 'up' as const,
    history: generateHistory(30, 20),
    color: '#5AC8FA',
};

export const Default: Story = {
    args: {
        processes: sampleProcesses,
        cpuMetrics,
        memoryMetrics,
        energyMetrics,
        diskMetrics,
        networkMetrics,
        defaultTab: 'cpu',
    },
};

export const MemoryTab: Story = {
    args: {
        processes: sampleProcesses,
        cpuMetrics,
        memoryMetrics,
        energyMetrics,
        diskMetrics,
        networkMetrics,
        defaultTab: 'memory',
    },
};

export const DiskTab: Story = {
    args: {
        processes: sampleProcesses,
        cpuMetrics,
        memoryMetrics,
        energyMetrics,
        diskMetrics,
        networkMetrics,
        defaultTab: 'disk',
    },
};

export const WithAutoRefresh: Story = {
    args: {
        processes: sampleProcesses.slice(0, 3),
        cpuMetrics,
        memoryMetrics,
        energyMetrics,
        diskMetrics,
        networkMetrics,
        autoRefresh: true,
        refreshInterval: 5000,
    },
};

export const MinimalData: Story = {
    args: {
        processes: sampleProcesses.slice(0, 2),
        cpuMetrics,
        memoryMetrics,
        energyMetrics,
        diskMetrics,
        networkMetrics,
    },
};

export const ManyProcesses: Story = {
    args: {
        processes: [
            { id: '1', name: 'Fraud Detection Engine', pid: 3891, cpu: 45.2, memory: 420, user: 'system' },
            { id: '2', name: 'Transaction Indexer-Service', pid: 5562, cpu: 12.7, memory: 204, user: 'system' },
            { id: '3', name: 'Market Data Stream', pid: 2104, cpu: 8.1, memory: 88, user: 'system' },
            { id: '4', name: 'Portfolio Sync Worker', pid: 4521, cpu: 23.5, memory: 156, user: 'system' },
            { id: '5', name: 'Report Generator', pid: 6723, cpu: 3.2, memory: 64, user: 'cesar' },
            { id: '6', name: 'API Gateway', pid: 1234, cpu: 15.8, memory: 312, user: 'system' },
            { id: '7', name: 'Cache Warmup', pid: 7890, cpu: 0.5, memory: 12, user: 'system' },
            { id: '8', name: 'Audit Logger', pid: 3456, cpu: 1.2, memory: 48, user: 'system' },
        ],
        cpuMetrics,
        memoryMetrics,
        energyMetrics,
        diskMetrics,
        networkMetrics,
        defaultTab: 'cpu',
    },
    parameters: {
        docs: {
            description: {
                story: 'ActivityMonitor with 8 processes showcasing a full fintech backend services view with fraud detection, market data, and API gateway monitoring.',
            },
        },
    },
};

export const NetworkTab: Story = {
    args: {
        processes: sampleProcesses,
        cpuMetrics,
        memoryMetrics,
        energyMetrics,
        diskMetrics,
        networkMetrics,
        defaultTab: 'network',
    },
    parameters: {
        docs: {
            description: {
                story: 'ActivityMonitor focused on the Network tab, showing network throughput metrics with process-level traffic data.',
            },
        },
    },
};

export const EnergyTab: Story = {
    args: {
        processes: sampleProcesses,
        cpuMetrics,
        memoryMetrics,
        energyMetrics,
        diskMetrics,
        networkMetrics,
        defaultTab: 'energy',
    },
    parameters: {
        docs: {
            description: {
                story: 'ActivityMonitor focused on the Energy tab, showing power consumption metrics for the fintech backend processes.',
            },
        },
    },
};

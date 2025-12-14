import type { Meta, StoryObj } from '@storybook/react';
import { ActivityMonitor, type ProcessData, type MetricData } from '../components/ActivityMonitor';
import { useState, useEffect } from 'react';

const meta = {
    title: 'Data Display/ActivityMonitor',
    component: ActivityMonitor,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'Un monitor de actividad estilo macOS para visualizar el uso de recursos del sistema (CPU, Memory, Energy, Disk, Network) con gráficos en tiempo real y listas de procesos ordenables.',
            },
        },
    },
    tags: [],
    argTypes: {
        defaultTab: {
            control: 'select',
            options: ['cpu', 'memory', 'energy', 'disk', 'network'],
            description: 'Pestaña activa por defecto',
        },
        autoRefresh: {
            control: 'boolean',
            description: 'Activar actualización automática',
        },
        refreshInterval: {
            control: { type: 'number', min: 500, max: 5000, step: 100 },
            description: 'Intervalo de actualización en milisegundos',
        },
    },
} satisfies Meta<typeof ActivityMonitor>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========================================
   SAMPLE DATA
   ======================================== */

// Generar datos de historial para gráficos
const generateHistory = (baseValue: number, variance: number = 5, length: number = 50): number[] => {
    return Array.from({ length }, () => {
        const variation = (Math.random() - 0.5) * variance;
        return Math.max(0, Math.min(100, baseValue + variation));
    });
};

const sampleProcesses: ProcessData[] = [
    { id: '1', name: 'Chrome', pid: 1234, cpu: 45.2, memory: 2048000000, energy: 12.5, user: 'john' },
    { id: '2', name: 'Xcode', pid: 5678, cpu: 32.1, memory: 4096000000, energy: 18.3, user: 'john' },
    { id: '3', name: 'Spotify', pid: 9012, cpu: 8.5, memory: 512000000, energy: 4.2, user: 'john' },
    { id: '4', name: 'Slack', pid: 3456, cpu: 12.3, memory: 768000000, energy: 6.8, user: 'john' },
    { id: '5', name: 'Finder', pid: 7890, cpu: 2.1, memory: 256000000, energy: 1.5, user: 'john' },
    { id: '6', name: 'Safari', pid: 2345, cpu: 15.7, memory: 1024000000, energy: 8.9, user: 'john' },
    { id: '7', name: 'Terminal', pid: 6789, cpu: 1.2, memory: 128000000, energy: 0.8, user: 'john' },
    { id: '8', name: 'VS Code', pid: 1357, cpu: 18.4, memory: 1536000000, energy: 10.2, user: 'john' },
    { id: '9', name: 'Mail', pid: 2468, cpu: 3.6, memory: 384000000, energy: 2.1, user: 'john' },
    { id: '10', name: 'Messages', pid: 3691, cpu: 2.8, memory: 192000000, energy: 1.2, user: 'john' },
];

const sampleDiskProcesses: ProcessData[] = [
    { id: '1', name: 'Time Machine', pid: 1234, diskRead: 524288000, diskWrite: 1048576000, user: 'john' },
    { id: '2', name: 'Xcode', pid: 5678, diskRead: 209715200, diskWrite: 524288000, user: 'john' },
    { id: '3', name: 'Chrome', pid: 9012, diskRead: 104857600, diskWrite: 52428800, user: 'john' },
    { id: '4', name: 'Spotify', pid: 3456, diskRead: 52428800, diskWrite: 26214400, user: 'john' },
    { id: '5', name: 'Slack', pid: 7890, diskRead: 26214400, diskWrite: 13107200, user: 'john' },
];

const sampleNetworkProcesses: ProcessData[] = [
    { id: '1', name: 'Chrome', pid: 1234, networkIn: 157286400, networkOut: 52428800, user: 'john' },
    { id: '2', name: 'Slack', pid: 5678, networkIn: 52428800, networkOut: 26214400, user: 'john' },
    { id: '3', name: 'Spotify', pid: 9012, networkIn: 104857600, networkOut: 13107200, user: 'john' },
    { id: '4', name: 'Safari', pid: 3456, networkIn: 78643200, networkOut: 39321600, user: 'john' },
    { id: '5', name: 'Mail', pid: 7890, networkIn: 26214400, networkOut: 13107200, user: 'john' },
];

const cpuMetrics: MetricData = {
    label: 'CPU Usage',
    value: 45.8,
    unit: '%',
    trend: 'up',
    history: generateHistory(45, 10),
    color: 'rgb(0, 122, 255)',
};

const memoryMetrics: MetricData = {
    label: 'Memory Pressure',
    value: 62.3,
    unit: '%',
    trend: 'neutral',
    history: generateHistory(62, 8),
    color: 'rgb(88, 86, 214)',
};

const energyMetrics: MetricData = {
    label: 'Energy Impact',
    value: 58.4,
    unit: 'W',
    trend: 'down',
    history: generateHistory(58, 12),
    color: 'rgb(255, 149, 0)',
};

const diskMetrics: MetricData = {
    label: 'Disk Activity',
    value: 28.7,
    unit: 'MB/s',
    trend: 'up',
    history: generateHistory(28, 6),
    color: 'rgb(52, 199, 89)',
};

const networkMetrics: MetricData = {
    label: 'Network Activity',
    value: 12.4,
    unit: 'MB/s',
    trend: 'neutral',
    history: generateHistory(12, 4),
    color: 'rgb(255, 59, 48)',
};

/* ========================================
   STORIES - BASIC
   ======================================== */

export const Default: Story = {
    args: {
        processes: sampleProcesses,
        cpuMetrics,
        memoryMetrics,
        energyMetrics,
        diskMetrics,
        networkMetrics,
        defaultTab: 'cpu',
        autoRefresh: false,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const CPU: Story = {
    name: '💻 CPU Tab',
    args: {
        processes: sampleProcesses,
        cpuMetrics,
        memoryMetrics,
        energyMetrics,
        diskMetrics,
        networkMetrics,
        defaultTab: 'cpu',
        autoRefresh: false,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const Memory: Story = {
    name: '🧠 Memory Tab',
    args: {
        processes: sampleProcesses,
        cpuMetrics,
        memoryMetrics,
        energyMetrics,
        diskMetrics,
        networkMetrics,
        defaultTab: 'memory',
        autoRefresh: false,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const Energy: Story = {
    name: '⚡ Energy Tab',
    args: {
        processes: sampleProcesses,
        cpuMetrics,
        memoryMetrics,
        energyMetrics,
        diskMetrics,
        networkMetrics,
        defaultTab: 'energy',
        autoRefresh: false,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const Disk: Story = {
    name: '💾 Disk Tab',
    args: {
        processes: sampleDiskProcesses,
        cpuMetrics,
        memoryMetrics,
        energyMetrics,
        diskMetrics,
        networkMetrics,
        defaultTab: 'disk',
        autoRefresh: false,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const Network: Story = {
    name: '🌐 Network Tab',
    args: {
        processes: sampleNetworkProcesses,
        cpuMetrics,
        memoryMetrics,
        energyMetrics,
        diskMetrics,
        networkMetrics,
        defaultTab: 'network',
        autoRefresh: false,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>
        ),
    ],
};

/* ========================================
   STORIES - FEATURES
   ======================================== */

export const WithAutoRefresh: Story = {
    name: '🔄 Con Auto-Refresh',
    args: {
        processes: sampleProcesses,
        cpuMetrics,
        memoryMetrics,
        energyMetrics,
        diskMetrics,
        networkMetrics,
        defaultTab: 'cpu',
        autoRefresh: true,
        refreshInterval: 2000,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const WithProcessSelection: Story = {
    name: '👆 Con Selección de Procesos',
    args: {
        processes: sampleProcesses,
        cpuMetrics,
        memoryMetrics,
        energyMetrics,
        diskMetrics,
        networkMetrics,
        defaultTab: 'cpu',
        autoRefresh: false,
        onProcessSelect: (process) => {
            console.log('Selected process:', process);
            alert(`Selected: ${process.name} (PID: ${process.pid})`);
        },
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>
        ),
    ],
};

/* ========================================
   STORIES - USE CASES
   ======================================== */

export const SystemMonitoring: Story = {
    name: '🖥️ Caso de Uso: Monitoreo del Sistema',
    render: () => {
        const [metrics, setMetrics] = useState({
            cpu: { ...cpuMetrics, value: 45.8 },
            memory: { ...memoryMetrics, value: 62.3 },
            energy: { ...energyMetrics, value: 58.4 },
            disk: { ...diskMetrics, value: 28.7 },
            network: { ...networkMetrics, value: 12.4 },
        });

        useEffect(() => {
            const interval = setInterval(() => {
                setMetrics((prev) => ({
                    cpu: {
                        ...prev.cpu,
                        value: Math.max(0, Math.min(100, prev.cpu.value + (Math.random() - 0.5) * 5)),
                        history: [...prev.cpu.history.slice(1), prev.cpu.value],
                    },
                    memory: {
                        ...prev.memory,
                        value: Math.max(0, Math.min(100, prev.memory.value + (Math.random() - 0.5) * 3)),
                        history: [...prev.memory.history.slice(1), prev.memory.value],
                    },
                    energy: {
                        ...prev.energy,
                        value: Math.max(0, Math.min(100, prev.energy.value + (Math.random() - 0.5) * 4)),
                        history: [...prev.energy.history.slice(1), prev.energy.value],
                    },
                    disk: {
                        ...prev.disk,
                        value: Math.max(0, Math.min(100, prev.disk.value + (Math.random() - 0.5) * 2)),
                        history: [...prev.disk.history.slice(1), prev.disk.value],
                    },
                    network: {
                        ...prev.network,
                        value: Math.max(0, Math.min(100, prev.network.value + (Math.random() - 0.5) * 2)),
                        history: [...prev.network.history.slice(1), prev.network.value],
                    },
                }));
            }, 1000);

            return () => clearInterval(interval);
        }, []);

        return (
            <div className="w-full max-w-6xl mx-auto">
                <ActivityMonitor
                    processes={sampleProcesses}
                    cpuMetrics={metrics.cpu}
                    memoryMetrics={metrics.memory}
                    energyMetrics={metrics.energy}
                    diskMetrics={metrics.disk}
                    networkMetrics={metrics.network}
                    defaultTab="cpu"
                    autoRefresh={true}
                    refreshInterval={1000}
                />
            </div>
        );
    },
};

export const HighLoadScenario: Story = {
    name: '🔥 Caso de Uso: Alta Carga del Sistema',
    args: {
        processes: [
            { id: '1', name: 'Xcode (Building)', pid: 1234, cpu: 95.8, memory: 8192000000, energy: 45.2, user: 'dev' },
            { id: '2', name: 'Chrome (20 tabs)', pid: 5678, cpu: 78.3, memory: 4096000000, energy: 32.1, user: 'dev' },
            { id: '3', name: 'Docker Desktop', pid: 9012, cpu: 45.6, memory: 6144000000, energy: 28.5, user: 'dev' },
            { id: '4', name: 'VS Code', pid: 3456, cpu: 32.4, memory: 2048000000, energy: 15.8, user: 'dev' },
            { id: '5', name: 'Slack', pid: 7890, cpu: 12.1, memory: 1024000000, energy: 8.3, user: 'dev' },
            { id: '6', name: 'Spotify', pid: 2345, cpu: 8.7, memory: 512000000, energy: 4.2, user: 'dev' },
        ],
        cpuMetrics: {
            label: 'CPU Usage',
            value: 89.5,
            unit: '%',
            trend: 'up',
            history: generateHistory(89, 5),
            color: 'rgb(255, 59, 48)',
        },
        memoryMetrics: {
            label: 'Memory Pressure',
            value: 87.2,
            unit: '%',
            trend: 'up',
            history: generateHistory(87, 4),
            color: 'rgb(255, 59, 48)',
        },
        energyMetrics: {
            label: 'Energy Impact',
            value: 92.8,
            unit: 'W',
            trend: 'up',
            history: generateHistory(92, 6),
            color: 'rgb(255, 149, 0)',
        },
        diskMetrics,
        networkMetrics,
        defaultTab: 'cpu',
        autoRefresh: false,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const LowLoadScenario: Story = {
    name: '😴 Caso de Uso: Baja Carga del Sistema',
    args: {
        processes: [
            { id: '1', name: 'Finder', pid: 1234, cpu: 1.2, memory: 128000000, energy: 0.8, user: 'user' },
            { id: '2', name: 'Mail', pid: 5678, cpu: 2.5, memory: 256000000, energy: 1.5, user: 'user' },
            { id: '3', name: 'Messages', pid: 9012, cpu: 1.8, memory: 192000000, energy: 1.2, user: 'user' },
            { id: '4', name: 'Terminal', pid: 3456, cpu: 0.5, memory: 64000000, energy: 0.3, user: 'user' },
        ],
        cpuMetrics: {
            label: 'CPU Usage',
            value: 8.2,
            unit: '%',
            trend: 'down',
            history: generateHistory(8, 2),
            color: 'rgb(52, 199, 89)',
        },
        memoryMetrics: {
            label: 'Memory Pressure',
            value: 15.4,
            unit: '%',
            trend: 'down',
            history: generateHistory(15, 3),
            color: 'rgb(52, 199, 89)',
        },
        energyMetrics: {
            label: 'Energy Impact',
            value: 6.5,
            unit: 'W',
            trend: 'down',
            history: generateHistory(6, 1),
            color: 'rgb(52, 199, 89)',
        },
        diskMetrics: {
            label: 'Disk Activity',
            value: 0.8,
            unit: 'MB/s',
            trend: 'neutral',
            history: generateHistory(0.8, 0.3),
            color: 'rgb(52, 199, 89)',
        },
        networkMetrics: {
            label: 'Network Activity',
            value: 0.2,
            unit: 'MB/s',
            trend: 'neutral',
            history: generateHistory(0.2, 0.1),
            color: 'rgb(52, 199, 89)',
        },
        defaultTab: 'cpu',
        autoRefresh: false,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const EmptyState: Story = {
    name: '📭 Estado Vacío',
    args: {
        processes: [],
        cpuMetrics,
        memoryMetrics,
        energyMetrics,
        diskMetrics,
        networkMetrics,
        defaultTab: 'cpu',
        autoRefresh: false,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>
        ),
    ],
};

/* ========================================
   STORIES - PLAYGROUND
   ======================================== */

export const Playground: Story = {
    name: '🎨 Playground',
    args: {
        processes: sampleProcesses,
        cpuMetrics,
        memoryMetrics,
        energyMetrics,
        diskMetrics,
        networkMetrics,
        defaultTab: 'cpu',
        autoRefresh: false,
        refreshInterval: 1000,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>
        ),
    ],
};


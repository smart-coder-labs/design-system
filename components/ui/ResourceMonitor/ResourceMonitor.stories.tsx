import type { Meta, StoryObj } from '@storybook/react';
import { ResourceMonitor } from './ResourceMonitor';

const meta = {
    title: 'Data Display/ResourceMonitor',
    component: ResourceMonitor,
    tags: ['autodocs'],
} satisfies Meta<typeof ResourceMonitor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        cpuUsage: 45,
        memoryUsage: 62,
        diskUsage: 78,
        networkIn: 1.2,
        networkOut: 0.8,
    },
};

export const HighLoad: Story = {
    args: {
        cpuUsage: 92,
        memoryUsage: 88,
        diskUsage: 95,
        networkIn: 15.5,
        networkOut: 12.3,
        label: 'Production Server',
    },
};

export const IdealConditions: Story = {
    args: {
        cpuUsage: 12,
        memoryUsage: 34,
        diskUsage: 45,
        networkIn: 0.3,
        networkOut: 0.2,
        label: 'API Server',
    },
};

export const MemoryConstrained: Story = {
    args: {
        cpuUsage: 35,
        memoryUsage: 94,
        diskUsage: 55,
        networkIn: 2.1,
        networkOut: 1.8,
        label: 'Database Server',
    },
};

export const WithUptime: Story = {
    args: {
        cpuUsage: 23,
        memoryUsage: 45,
        diskUsage: 67,
        networkIn: 0.5,
        networkOut: 0.4,
        uptime: '14d 6h 32m',
        label: 'Redis Cache',
    },
};

export const WithProcesses: Story = {
    args: {
        cpuUsage: 55,
        memoryUsage: 72,
        diskUsage: 60,
        networkIn: 3.2,
        networkOut: 2.9,
        uptime: '7d 12h',
        label: 'Web Server',
        topProcesses: [
            { name: 'node', cpu: 22, memory: 18 },
            { name: 'nginx', cpu: 8, memory: 5 },
            { name: 'postgres', cpu: 6, memory: 24 },
            { name: 'redis', cpu: 3, memory: 2 },
        ],
    },
};

export const WithAllData: Story = {
    args: {
        cpuUsage: 67,
        memoryUsage: 81,
        diskUsage: 73,
        networkIn: 8.5,
        networkOut: 6.2,
        uptime: '32d 4h 15m',
        label: 'Main Application Server',
        topProcesses: [
            { name: 'node', cpu: 34, memory: 28 },
            { name: 'postgres', cpu: 12, memory: 15 },
            { name: 'nginx', cpu: 5, memory: 3 },
            { name: 'sidekiq', cpu: 8, memory: 6 },
            { name: 'prometheus', cpu: 4, memory: 7 },
        ],
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        cpuUsage: 45,
        memoryUsage: 62,
        diskUsage: 78,
        networkIn: 1.2,
        networkOut: 0.8,
        label: 'Dark Mode Server',
    },
};

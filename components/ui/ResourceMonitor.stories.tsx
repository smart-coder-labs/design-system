import type { Meta, StoryObj } from '@storybook/react';
import { ResourceMonitor } from './ResourceMonitor';

const meta = {
    title: 'Components/ResourceMonitor',
    component: ResourceMonitor,
    parameters: {
        layout: 'padded',
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#1a1b1e' },
                { name: 'light', value: '#ffffff' },
            ],
        },
    },
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
        currentCpu: { control: { type: 'range', min: 0, max: 100 } },
        currentMemory: { control: { type: 'number', step: 0.1 } },
        currentTokens: { control: { type: 'number', step: 0.1 } },
    },
} satisfies Meta<typeof ResourceMonitor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LiveSimulation: Story = {
    args: {
        autoRefresh: true,
        currentCpu: 42,
        currentMemory: 2.4,
        currentTokens: 8.4,
        className: 'max-w-4xl',
    },
};

// Generate deterministic sample data for static view
const generateStaticData = () => {
    const points = 20;
    const now = Date.now();
    return Array.from({ length: points }, (_, i) => ({
        timestamp: now - (points - 1 - i) * 60000,
        cpu: 30 + Math.sin(i * 0.5) * 20, // Clean waves
        memory: 40 + Math.cos(i * 0.3) * 15,
        tokens: 5 + Math.sin(i * 0.8) * 4,
    }));
};

export const StaticSnapshot: Story = {
    args: {
        autoRefresh: false,
        data: generateStaticData(),
        currentCpu: 45,
        currentMemory: 3.2,
        currentTokens: 6.8,
        className: 'max-w-4xl',
    },
};

export const HighLoad: Story = {
    args: {
        autoRefresh: true,
        currentCpu: 92,
        currentMemory: 15.8,
        currentTokens: 45.2,
        className: 'max-w-4xl',
        refreshInterval: 500, // Faster updates
    },
};

export const MobileView: Story = {
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
    args: {
        autoRefresh: true,
        className: 'w-full',
    },
};

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FloatingElement } from './FloatingElement';

const meta: Meta<typeof FloatingElement> = {
    title: 'Components/FloatingElement',
    component: FloatingElement,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className="h-96 flex items-center justify-center bg-gradient-to-b from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 rounded-2xl overflow-hidden">
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <div className="w-24 h-24 bg-accent-blue/20 rounded-2xl flex items-center justify-center text-accent-blue text-3xl">✦</div>,
    },
};

export const SlowSpeed: Story = {
    args: {
        rotationSpeed: 0.3,
        children: <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 text-2xl">●</div>,
    },
};

export const FastSpeed: Story = {
    args: {
        rotationSpeed: 2,
        children: <div className="w-16 h-16 bg-purple-500/20 rotate-45 flex items-center justify-center text-purple-500 text-xl">◆</div>,
    },
};

export const NoRotation: Story = {
    args: {
        rotationSpeed: 0,
        children: <div className="w-24 h-24 bg-rose-500/20 rounded-3xl flex items-center justify-center text-rose-500 text-3xl">◈</div>,
    },
};

export const LargeIcon: Story = {
    args: {
        rotationSpeed: 0.6,
        children: (
            <div className="w-32 h-32 bg-amber-500/15 rounded-full flex items-center justify-center text-amber-500 text-5xl">
                💰
            </div>
        ),
    },
};

export const SmallIcon: Story = {
    args: {
        rotationSpeed: 1.5,
        children: <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-500 text-lg">✦</div>,
    },
};

export const MultipleOnSamePage: Story = {
    decorators: [
        (Story) => (
            <div className="h-96 flex items-center justify-center bg-gradient-to-b from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 rounded-2xl overflow-hidden relative">
                <FloatingElement rotationSpeed={0.5}>
                    <div className="absolute -top-20 -left-20 w-20 h-20 bg-sky-500/20 rounded-full flex items-center justify-center text-sky-500 text-2xl">✦</div>
                </FloatingElement>
                <FloatingElement rotationSpeed={1.2}>
                    <div className="w-24 h-24 bg-violet-500/20 rounded-2xl flex items-center justify-center text-violet-500 text-3xl">◆</div>
                </FloatingElement>
                <FloatingElement rotationSpeed={0.8}>
                    <div className="absolute -bottom-16 -right-16 w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 text-xl">●</div>
                </FloatingElement>
                <Story />
            </div>
        ),
    ],
};

export const ComplexChildren: Story = {
    args: {
        rotationSpeed: 0.4,
        children: (
            <div className="w-40 h-40 bg-gradient-to-br from-accent-blue/20 to-purple-500/20 rounded-3xl flex flex-col items-center justify-center gap-2 border border-white/10 shadow-lg">
                <span className="text-4xl">🚀</span>
                <span className="text-xs font-semibold text-accent-blue">Growth</span>
            </div>
        ),
    },
};

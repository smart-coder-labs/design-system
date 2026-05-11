import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InteractiveCursor } from './InteractiveCursor';

const meta: Meta<typeof InteractiveCursor> = {
    title: 'Components/InteractiveCursor',
    component: InteractiveCursor,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    decorators: [
        (Story) => (
            <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-12">
                <div className="text-center max-w-lg">
                    <h2 className="text-2xl font-bold text-text-primary mb-2">Move your cursor</h2>
                    <p className="text-text-secondary">
                        The interactive cursor follows your mouse with a smooth spring animation.
                    </p>
                    <div className="mt-8 interactive p-6 bg-accent-blue/10 rounded-2xl border border-accent-blue/30">
                        <p className="text-sm font-semibold text-accent-blue">Hover over this area</p>
                        <p className="text-xs text-text-secondary mt-1">The cursor scales up when hovering interactive elements</p>
                    </div>
                </div>
                <Story />
            </div>
        ),
    ],
};

export const OnDarkBackground: Story = {
    decorators: [
        (Story) => (
            <div className="h-screen flex items-center justify-center bg-gray-900 p-12">
                <div className="text-center max-w-lg">
                    <h2 className="text-2xl font-bold text-white mb-2">Dark Mode Cursor</h2>
                    <p className="text-gray-400">
                        The cursor adapts on dark backgrounds.
                    </p>
                    <div className="mt-8 interactive p-6 bg-purple-900/30 rounded-2xl border border-purple-500/30">
                        <p className="text-sm font-semibold text-purple-400">Hover for scale effect</p>
                        <p className="text-xs text-gray-400 mt-1">The cursor should enlarge slightly</p>
                    </div>
                </div>
                <Story />
            </div>
        ),
    ],
};

export const MultipleInteractiveElements: Story = {
    decorators: [
        (Story) => (
            <div className="h-screen flex flex-col items-center justify-center gap-4 bg-zinc-50 dark:bg-zinc-900 p-12">
                <h2 className="text-2xl font-bold text-text-primary mb-4">Multiple interactive targets</h2>
                <div className="flex gap-4 flex-wrap justify-center">
                    <div className="interactive px-8 py-4 bg-rose-100 dark:bg-rose-900/30 rounded-2xl border border-rose-300 dark:border-rose-700">
                        <span className="text-sm font-semibold text-rose-600 dark:text-rose-400">Button A</span>
                    </div>
                    <div className="interactive px-8 py-4 bg-sky-100 dark:bg-sky-900/30 rounded-2xl border border-sky-300 dark:border-sky-700">
                        <span className="text-sm font-semibold text-sky-600 dark:text-sky-400">Button B</span>
                    </div>
                    <div className="interactive px-8 py-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl border border-emerald-300 dark:border-emerald-700">
                        <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Button C</span>
                    </div>
                </div>
                <p className="text-xs text-text-tertiary mt-4">All .interactive elements trigger the scale effect</p>
                <Story />
            </div>
        ),
    ],
};

export const WithContentArea: Story = {
    decorators: [
        (Story) => (
            <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-950 dark:to-indigo-950 p-12">
                <div className="max-w-2xl text-center">
                    <h2 className="text-3xl font-bold text-text-primary mb-4">Interactive Demo</h2>
                    <p className="text-text-secondary mb-8">
                        The custom cursor replaces the default cursor across the entire screen.
                        Notice how it scales up over the interactive elements below.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-left">
                        <div className="interactive p-4 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-border-primary">
                            <p className="font-semibold text-sm">Card One</p>
                            <p className="text-xs text-text-tertiary mt-1">Hover me</p>
                        </div>
                        <div className="interactive p-4 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-border-primary">
                            <p className="font-semibold text-sm">Card Two</p>
                            <p className="text-xs text-text-tertiary mt-1">And me</p>
                        </div>
                    </div>
                </div>
                <Story />
            </div>
        ),
    ],
};

export const SingleInteractiveButton: Story = {
    decorators: [
        (Story) => (
            <div className="h-screen flex items-center justify-center bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 p-12">
                <div className="text-center">
                    <h2 className="text-xl font-bold text-text-primary mb-4">Fintech CTA</h2>
                    <div className="interactive inline-block px-8 py-4 bg-accent-blue text-white rounded-2xl shadow-lg cursor-pointer">
                        <span className="font-bold">Open Account</span>
                    </div>
                    <p className="text-xs text-text-tertiary mt-4">Hover the button — cursor scales up</p>
                </div>
                <Story />
            </div>
        ),
    ],
};

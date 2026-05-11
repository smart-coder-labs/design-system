import type { Meta, StoryObj } from '@storybook/react';
import { ResizablePanel } from './ResizablePanel';
import { useState } from 'react';

const meta = {
    title: 'Components/ResizablePanel',
    component: ResizablePanel,
    tags: ['autodocs'],
} satisfies Meta<typeof ResizablePanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        left: (
            <div className="p-4 h-full">
                <h3 className="text-sm font-semibold mb-3">Navigation</h3>
                <div className="space-y-2 text-sm">
                    {['Dashboard', 'Portfolio', 'Transactions', 'Settings'].map(item => (
                        <div key={item} className="p-2 rounded-lg bg-surface-secondary cursor-pointer hover:bg-surface-tertiary">{item}</div>
                    ))}
                </div>
            </div>
        ),
        right: (
            <div className="p-6 h-full">
                <h2 className="text-xl font-bold mb-2">Dashboard</h2>
                <p className="text-3xl font-semibold text-green-600">$124,532.00</p>
                <p className="text-sm text-text-secondary mt-1">Portfolio Value</p>
            </div>
        ),
        defaultSize: 250,
        minSize: 180,
        maxSize: 400,
    },
};

export const HorizontalLayout: Story = {
    args: {
        top: (
            <div className="p-4 h-full">
                <h3 className="text-sm font-semibold mb-3">Account Summary</h3>
                <div className="grid grid-cols-3 gap-4">
                    <div className="p-3 bg-surface-secondary rounded-lg"><p className="text-xs text-text-secondary">Balance</p><p className="text-lg font-bold">$12,450</p></div>
                    <div className="p-3 bg-surface-secondary rounded-lg"><p className="text-xs text-text-secondary">Income</p><p className="text-lg font-bold text-green-600">+$4,230</p></div>
                    <div className="p-3 bg-surface-secondary rounded-lg"><p className="text-xs text-text-secondary">Expenses</p><p className="text-lg font-bold text-red-500">-$1,890</p></div>
                </div>
            </div>
        ),
        bottom: (
            <div className="p-4 h-full">
                <h3 className="text-sm font-semibold mb-3">Recent Transactions</h3>
                <div className="space-y-2 text-sm">
                    {['Amazon $89.99', 'Uber $24.50', 'Salary +$4,500', 'Netflix $15.99'].map(t => (
                        <div key={t} className="flex justify-between p-2 bg-surface-secondary rounded-lg">{t.split(' ')[0]}<span className={t.startsWith('+') ? 'text-green-600' : 'text-text-secondary'}>{t.split(' ')[1]}</span></div>
                    ))}
                </div>
            </div>
        ),
        direction: 'horizontal' as const,
        defaultSize: 180,
        minSize: 120,
        maxSize: 300,
    },
};

export const CodeEditorLayout: Story = {
    args: {
        left: (
            <div className="p-4 h-full bg-gray-900 text-gray-100 font-mono text-xs">
                <div className="flex items-center gap-2 mb-4"><div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" /></div>
                <div className="space-y-1 opacity-70">
                    <p><span className="text-blue-400">import</span> { }<span className="text-green-400">React</span> <span className="text-blue-400">from</span> <span className="text-orange-400">'react'</span>;</p>
                    <p className="text-gray-500">// Portfolio component</p>
                    <p><span className="text-blue-400">const</span> <span className="text-yellow-400">Portfolio</span> = () => {'{'}</p>
                    <p>  <span className="text-blue-400">const</span> [balance] = useState(124532);</p>
                    <p>  <span className="text-blue-400">return</span> <span className="text-orange-400">&lt;div&gt;</span>{'{balance}'}<span className="text-orange-400">&lt;/div&gt;</span>;</p>
                    <p>{'}'}</p>
                </div>
            </div>
        ),
        right: (
            <div className="p-4 h-full">
                <h3 className="text-sm font-semibold mb-3">Preview</h3>
                <div className="p-6 bg-surface-secondary rounded-lg text-center">
                    <p className="text-2xl font-bold text-green-600">$124,532.00</p>
                    <p className="text-xs text-text-secondary mt-1">Portfolio Preview</p>
                </div>
            </div>
        ),
        defaultSize: 300,
        minSize: 200,
        maxSize: 500,
    },
};

export const CollapsedLeft: Story = {
    args: {
        left: (
            <div className="p-2 h-full flex flex-col items-center gap-4">
                {['🏠', '📊', '💳', '⚙️'].map((icon, i) => (
                    <div key={i} className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-secondary cursor-pointer hover:bg-surface-tertiary text-sm">{icon}</div>
                ))}
            </div>
        ),
        right: (
            <div className="p-6 h-full">
                <h2 className="text-xl font-bold">Main Content</h2>
            </div>
        ),
        defaultSize: 48,
        minSize: 48,
        maxSize: 48,
        collapsed: true,
    },
};

export const InteractiveResize: Story = {
    render: () => {
        const [leftWidth, setLeftWidth] = useState(250);
        return (
            <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                    <span className="text-text-secondary">Left panel width:</span>
                    <span className="font-semibold">{leftWidth}px</span>
                </div>
                <ResizablePanel
                    left={<div className="p-4 h-full text-sm"><p className="font-medium">Sidebar</p></div>}
                    right={<div className="p-4 h-full text-sm"><p className="font-medium">Content area</p></div>}
                    defaultSize={leftWidth}
                    minSize={150}
                    maxSize={500}
                    onResize={(size) => setLeftWidth(size)}
                />
            </div>
        );
    },
};

export const EmptyRight: Story = {
    args: {
        left: <div className="p-4 h-full text-sm"><p className="font-medium">No right panel</p></div>,
        right: null,
        defaultSize: 300,
        minSize: 200,
        maxSize: 500,
    },
};

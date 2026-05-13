import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InspectorPanel, InspectorSection } from './InspectorPanel';

const meta: Meta<typeof InspectorPanel> = {
    title: 'Components/InspectorPanel',
    component: InspectorPanel,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className="h-[500px] flex border border-border-primary rounded-xl overflow-hidden">
                <div className="flex-1 p-6 text-sm text-text-secondary flex items-center justify-center bg-surface-primary">
                    Preview Area
                </div>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultSections: InspectorSection[] = [
    {
        id: 'properties',
        title: 'Properties',
        defaultExpanded: true,
        content: (
            <div className="space-y-3 px-4 pb-4">
                <div className="flex justify-between">
                    <span className="text-sm text-text-secondary">Width</span>
                    <span className="text-sm font-mono">320px</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-text-secondary">Height</span>
                    <span className="text-sm font-mono">480px</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-text-secondary">Opacity</span>
                    <span className="text-sm font-mono">1</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-text-secondary">Position</span>
                    <span className="text-sm font-mono">relative</span>
                </div>
            </div>
        ),
    },
    {
        id: 'styles',
        title: 'Styles',
        content: (
            <div className="space-y-3 px-4 pb-4">
                <div className="flex justify-between">
                    <span className="text-sm text-text-secondary">Background</span>
                    <span className="text-sm font-mono">#ffffff</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-text-secondary">Border Radius</span>
                    <span className="text-sm font-mono">12px</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-text-secondary">Box Shadow</span>
                    <span className="text-sm font-mono">0 2px 8px...</span>
                </div>
            </div>
        ),
    },
    {
        id: 'events',
        title: 'Events',
        content: (
            <div className="space-y-2 px-4 pb-4">
                <div className="text-sm text-text-secondary">onClick: (e) =&gt; handleClick</div>
                <div className="text-sm text-text-secondary">onHover: (e) =&gt; handleHover</div>
            </div>
        ),
    },
];

export const Default: Story = {
    args: {
        sections: defaultSections,
    },
};

export const AllExpanded: Story = {
    args: {
        sections: [
            {
                id: 'props',
                title: 'Layout',
                defaultExpanded: true,
                content: (
                    <div className="space-y-3 px-4 pb-4">
                        <div className="flex justify-between"><span className="text-sm text-text-secondary">Width</span><span className="text-sm font-mono">100%</span></div>
                        <div className="flex justify-between"><span className="text-sm text-text-secondary">Height</span><span className="text-sm font-mono">auto</span></div>
                    </div>
                ),
            },
            {
                id: 'display',
                title: 'Display',
                defaultExpanded: true,
                content: (
                    <div className="space-y-3 px-4 pb-4">
                        <div className="flex justify-between"><span className="text-sm text-text-secondary">Flex</span><span className="text-sm font-mono">row</span></div>
                        <div className="flex justify-between"><span className="text-sm text-text-secondary">Align</span><span className="text-sm font-mono">center</span></div>
                    </div>
                ),
            },
            {
                id: 'spacing',
                title: 'Spacing',
                defaultExpanded: true,
                content: (
                    <div className="space-y-3 px-4 pb-4">
                        <div className="flex justify-between"><span className="text-sm text-text-secondary">Padding</span><span className="text-sm font-mono">16px</span></div>
                        <div className="flex justify-between"><span className="text-sm text-text-secondary">Margin</span><span className="text-sm font-mono">0</span></div>
                        <div className="flex justify-between"><span className="text-sm text-text-secondary">Gap</span><span className="text-sm font-mono">8px</span></div>
                    </div>
                ),
            },
        ],
    },
};

export const ManySections: Story = {
    args: {
        sections: [
            { id: 's1', title: 'General', defaultExpanded: true, content: <div className="px-4 pb-4 text-sm text-text-secondary">General settings</div> },
            { id: 's2', title: 'Appearance', defaultExpanded: true, content: <div className="px-4 pb-4 text-sm text-text-secondary">Appearance settings</div> },
            { id: 's3', title: 'Typography', content: <div className="px-4 pb-4 text-sm text-text-secondary">Font, size, weight</div> },
            { id: 's4', title: 'Spacing', content: <div className="px-4 pb-4 text-sm text-text-secondary">Padding, margin, gap</div> },
            { id: 's5', title: 'Effects', content: <div className="px-4 pb-4 text-sm text-text-secondary">Shadows, blur, opacity</div> },
            { id: 's6', title: 'Animation', content: <div className="px-4 pb-4 text-sm text-text-secondary">Duration, easing, delay</div> },
            { id: 's7', title: 'Responsive', content: <div className="px-4 pb-4 text-sm text-text-secondary">Breakpoints, media queries</div> },
            { id: 's8', title: 'Accessibility', content: <div className="px-4 pb-4 text-sm text-text-secondary">ARIA labels, roles</div> },
        ],
    },
};

export const SingleSection: Story = {
    args: {
        sections: [
            { id: 'single', title: 'Only Section', defaultExpanded: true, content: <div className="px-4 pb-4 text-sm text-text-secondary">This is the only collapsible section.</div> },
        ],
    },
};

export const WidePanel: Story = {
    args: {
        sections: defaultSections,
        width: '380px',
    },
};

export const NarrowPanel: Story = {
    args: {
        sections: defaultSections,
        width: '200px',
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

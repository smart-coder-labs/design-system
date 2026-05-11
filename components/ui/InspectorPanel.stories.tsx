import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InspectorPanel, InspectorSection } from './InspectorPanel';

const sections: InspectorSection[] = [
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

export const Default: Story = {
  args: {
    sections,
  },
};

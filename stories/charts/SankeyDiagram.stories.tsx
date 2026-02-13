import type { Meta, StoryObj } from '@storybook/react';
import { SankeyDiagram } from '../../components/ui/charts/SankeyDiagram';

const energyFlowData = {
  nodes: [
    { id: 'solar', label: 'Solar', color: '#FF9500' },
    { id: 'wind', label: 'Wind', color: '#5AC8FA' },
    { id: 'gas', label: 'Natural Gas', color: '#8E8E93' },
    { id: 'coal', label: 'Coal', color: '#636366' },
    { id: 'grid', label: 'Power Grid', color: '#007AFF' },
    { id: 'residential', label: 'Residential', color: '#34C759' },
    { id: 'commercial', label: 'Commercial', color: '#5856D6' },
    { id: 'industrial', label: 'Industrial', color: '#FF2D55' },
  ],
  links: [
    { source: 'solar', target: 'grid', value: 180 },
    { source: 'wind', target: 'grid', value: 240 },
    { source: 'gas', target: 'grid', value: 350 },
    { source: 'coal', target: 'grid', value: 120 },
    { source: 'grid', target: 'residential', value: 310 },
    { source: 'grid', target: 'commercial', value: 340 },
    { source: 'grid', target: 'industrial', value: 240 },
  ],
};

const meta: Meta<typeof SankeyDiagram> = {
  title: 'Charts/SankeyDiagram',
  component: SankeyDiagram,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SankeyDiagram>;

export const Default: Story = {
  args: {
    data: energyFlowData,
    title: 'Energy Flow Distribution',
    subtitle: 'Power Generation to Consumption (GWh)',
    showTooltip: true,
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <SankeyDiagram key={v} data={energyFlowData} variant={v} title={v} />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <SankeyDiagram data={energyFlowData} size="sm" title="Small" variant="bordered" />
      <SankeyDiagram data={energyFlowData} size="md" title="Medium" variant="bordered" />
      <SankeyDiagram data={energyFlowData} size="lg" title="Large" variant="bordered" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [
    (Story) => (
      <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-3xl">
        <Story />
      </div>
    ),
  ],
  args: {
    data: energyFlowData,
    variant: 'bordered',
    title: 'Energy Flow Distribution',
    subtitle: 'Dark Mode Preview',
  },
};

export const ManufacturingSupplyChain: Story = {
  name: '🏭 Manufacturing Supply Chain',
  args: {
    data: {
      nodes: [
        { id: 'steel', label: 'Steel', color: '#8E8E93' },
        { id: 'aluminum', label: 'Aluminum', color: '#B4B4B8' },
        { id: 'plastic', label: 'Polymers', color: '#AC8E68' },
        { id: 'electronics', label: 'Electronics', color: '#5AC8FA' },
        { id: 'rubber', label: 'Rubber', color: '#636366' },
        { id: 'stamping', label: 'Stamping', color: '#FF9500' },
        { id: 'molding', label: 'Injection Molding', color: '#FF6482' },
        { id: 'assembly', label: 'PCB Assembly', color: '#007AFF' },
        { id: 'machining', label: 'CNC Machining', color: '#AF52DE' },
        { id: 'chassis', label: 'Chassis', color: '#5856D6' },
        { id: 'powertrain', label: 'Powertrain', color: '#34C759' },
        { id: 'interior', label: 'Interior', color: '#FF2D55' },
        { id: 'final_assembly', label: 'Final Assembly', color: '#007AFF' },
        { id: 'domestic', label: 'Domestic Dist.', color: '#30B0C7' },
        { id: 'export', label: 'Export Dist.', color: '#00C7BE' },
      ],
      links: [
        { source: 'steel', target: 'stamping', value: 4200 },
        { source: 'steel', target: 'machining', value: 2800 },
        { source: 'aluminum', target: 'stamping', value: 1800 },
        { source: 'aluminum', target: 'machining', value: 2200 },
        { source: 'plastic', target: 'molding', value: 3400 },
        { source: 'electronics', target: 'assembly', value: 2900 },
        { source: 'rubber', target: 'molding', value: 1200 },
        { source: 'stamping', target: 'chassis', value: 4800 },
        { source: 'machining', target: 'powertrain', value: 3600 },
        { source: 'machining', target: 'chassis', value: 1400 },
        { source: 'molding', target: 'interior', value: 3200 },
        { source: 'molding', target: 'chassis', value: 1400 },
        { source: 'assembly', target: 'powertrain', value: 1500 },
        { source: 'assembly', target: 'interior', value: 1400 },
        { source: 'chassis', target: 'final_assembly', value: 7600 },
        { source: 'powertrain', target: 'final_assembly', value: 5100 },
        { source: 'interior', target: 'final_assembly', value: 4600 },
        { source: 'final_assembly', target: 'domestic', value: 10400 },
        { source: 'final_assembly', target: 'export', value: 6900 },
      ],
    },
    variant: 'elevated',
    size: 'lg',
    animated: true,
    interactive: true,
    showTooltip: true,
    title: 'Manufacturing Supply Chain',
    subtitle: 'Raw Materials → Processing → Products → Distribution (units/month)',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
        <Story />
      </div>
    ),
  ],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    data: energyFlowData,
    size: 'md',
    variant: 'default',
    animated: true,
    interactive: true,
    showTooltip: true,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};

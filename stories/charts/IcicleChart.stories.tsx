import type { Meta, StoryObj } from '@storybook/react';
import { IcicleChart } from '../../components/ui/charts/IcicleChart';

const sampleData = [
  { label: 'src', value: 120, color: '#007AFF', children: [
    { label: 'components', value: 60, color: '#5AC8FA', children: [
      { label: 'ui', value: 35, color: '#64D2FF' },
      { label: 'layout', value: 25, color: '#70D7FF' },
    ]},
    { label: 'utils', value: 30, color: '#34C759' },
    { label: 'hooks', value: 30, color: '#FF9500' },
  ]},
  { label: 'tests', value: 40, color: '#AF52DE', children: [
    { label: 'unit', value: 25, color: '#DA8FFF' },
    { label: 'e2e', value: 15, color: '#BF5AF2' },
  ]},
  { label: 'docs', value: 20, color: '#FF2D55' },
];

const meta: Meta<typeof IcicleChart> = {
  title: 'Charts/IcicleChart',
  component: IcicleChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showLabels: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof IcicleChart>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <IcicleChart data={sampleData} variant="default" title="Default" />
      <IcicleChart data={sampleData} variant="glass" title="Glass" />
      <IcicleChart data={sampleData} variant="bordered" title="Bordered" />
      <IcicleChart data={sampleData} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, variant: 'bordered', title: 'Project Structure' },
};

export const FileSystemAnalysis: Story = {
  name: '📁 Caso de Uso: File System Analysis',
  args: {
    data: [
      { label: 'Applications', value: 85, color: '#007AFF', children: [
        { label: 'Development', value: 45, color: '#5AC8FA', children: [
          { label: 'Xcode.app', value: 28, color: '#64D2FF' },
          { label: 'VS Code', value: 17, color: '#70D7FF' },
        ]},
        { label: 'Productivity', value: 25, color: '#34C759' },
        { label: 'Utilities', value: 15, color: '#30D158' },
      ]},
      { label: 'Library', value: 55, color: '#FF9500', children: [
        { label: 'Caches', value: 30, color: '#FFCC00' },
        { label: 'Preferences', value: 15, color: '#FF9F0A' },
        { label: 'Logs', value: 10, color: '#FFD60A' },
      ]},
      { label: 'Documents', value: 40, color: '#AF52DE' },
    ],
    variant: 'glass', size: 'lg', animated: true, showLabels: true, showTooltip: true,
    title: 'macOS Storage', subtitle: 'Disk usage by directory',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    data: sampleData, size: 'md', variant: 'default', animated: true, interactive: true,
    showLegend: true, showTooltip: true, showLabels: true,
    title: 'Playground', subtitle: 'Adjust controls to customize',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { ChoroplethMap } from '../../components/ui/charts/ChoroplethMap';

const sampleData = [
  { id: 'r1', label: 'North', value: 85, path: 'M50,20 L150,20 L150,80 L50,80 Z' },
  { id: 'r2', label: 'South', value: 62, path: 'M50,90 L150,90 L150,150 L50,150 Z' },
  { id: 'r3', label: 'East', value: 91, path: 'M160,20 L260,20 L260,80 L160,80 Z' },
  { id: 'r4', label: 'West', value: 45, path: 'M160,90 L260,90 L260,150 L160,150 Z' },
  { id: 'r5', label: 'Central', value: 73, path: 'M270,20 L370,20 L370,150 L270,150 Z' },
];

const meta: Meta<typeof ChoroplethMap> = {
  title: 'Charts/ChoroplethMap',
  component: ChoroplethMap,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof ChoroplethMap>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <ChoroplethMap key={v} data={sampleData} variant={v} title={v} />
      ))}
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, variant: 'bordered', title: 'Dark Mode' },
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: { data: sampleData, size: 'md', variant: 'default', animated: true, title: 'Playground' },
};

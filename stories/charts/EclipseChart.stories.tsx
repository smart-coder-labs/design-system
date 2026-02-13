import type { Meta, StoryObj } from '@storybook/react';
import { EclipseChart } from '../../components/ui/charts/EclipseChart';

const sampleData = {
  left: { label: 'Design', value: 150 },
  right: { label: 'Engineering', value: 180 },
  overlap: 65,
};

const meta: Meta<typeof EclipseChart> = {
  title: 'Charts/Innovative/EclipseChart',
  component: EclipseChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof EclipseChart>;

export const Default: Story = { args: { data: sampleData, title: 'Eclipse Chart' } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <EclipseChart key={v} data={sampleData} variant={v} title={v} />
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

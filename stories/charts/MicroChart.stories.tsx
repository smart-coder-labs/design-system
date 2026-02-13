import type { Meta, StoryObj } from '@storybook/react';
import { MicroChart } from '../../components/ui/charts/MicroChart';

const sampleData = [12, 15, 8, 22, 18, 25, 20, 28, 24, 30, 27, 35];

const meta: Meta<typeof MicroChart> = {
  title: 'Charts/MicroChart',
  component: MicroChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    type: { control: 'radio', options: ['line', 'bar', 'dot'] },
    color: { control: 'color' },
    width: { control: { type: 'range', min: 60, max: 300, step: 10 } },
    height: { control: { type: 'range', min: 20, max: 100, step: 5 } },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof MicroChart>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <MicroChart key={v} data={sampleData} variant={v} title={v} />
      ))}
    </div>
  ),
};

export const ChartTypes: Story = {
  name: '📊 Chart Types',
  render: () => (
    <div className="flex gap-8 items-end">
      <div>
        <p className="text-sm text-[var(--color-text-secondary)] mb-2">Line</p>
        <MicroChart data={sampleData} type="line" />
      </div>
      <div>
        <p className="text-sm text-[var(--color-text-secondary)] mb-2">Bar</p>
        <MicroChart data={sampleData} type="bar" />
      </div>
      <div>
        <p className="text-sm text-[var(--color-text-secondary)] mb-2">Dot</p>
        <MicroChart data={sampleData} type="dot" />
      </div>
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, type: 'line', variant: 'bordered', title: 'Dark Mode' },
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: { data: sampleData, type: 'line', size: 'md', variant: 'default', animated: true, title: 'Playground' },
};

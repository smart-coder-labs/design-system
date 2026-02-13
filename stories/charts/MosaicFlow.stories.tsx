import type { Meta, StoryObj } from '@storybook/react';
import { MosaicFlow } from '../../components/ui/charts/MosaicFlow';

const sampleData = [
  { label: 'React', value: 45 },
  { label: 'Vue', value: 30 },
  { label: 'Angular', value: 25 },
  { label: 'Svelte', value: 18 },
  { label: 'Solid', value: 12 },
  { label: 'Preact', value: 8 },
];

const meta: Meta<typeof MosaicFlow> = {
  title: 'Charts/Innovative/MosaicFlow',
  component: MosaicFlow,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof MosaicFlow>;

export const Default: Story = { args: { data: sampleData, title: 'Mosaic Flow' } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <MosaicFlow key={v} data={sampleData} variant={v} title={v} />
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

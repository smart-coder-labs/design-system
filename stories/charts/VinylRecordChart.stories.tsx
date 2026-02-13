import type { Meta, StoryObj } from '@storybook/react';
import { VinylRecordChart } from '../../components/ui/charts/VinylRecordChart';

const sampleData = [
  { label: 'Track 1 - Intro', value: 60 },
  { label: 'Track 2 - Verse', value: 85 },
  { label: 'Track 3 - Chorus', value: 95 },
  { label: 'Track 4 - Bridge', value: 70 },
  { label: 'Track 5 - Solo', value: 90 },
  { label: 'Track 6 - Outro', value: 50 },
];

const meta: Meta<typeof VinylRecordChart> = {
  title: 'Charts/Innovative/VinylRecordChart',
  component: VinylRecordChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof VinylRecordChart>;

export const Default: Story = { args: { data: sampleData, title: 'Vinyl Record' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <VinylRecordChart key={v} data={sampleData} variant={v} title={v} />
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

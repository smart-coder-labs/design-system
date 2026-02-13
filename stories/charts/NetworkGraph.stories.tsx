import type { Meta, StoryObj } from '@storybook/react';
import { NetworkGraph } from '../../components/ui/charts/NetworkGraph';

const sampleData = {
  nodes: [
    { id: 'api', label: 'API Gateway' },
    { id: 'auth', label: 'Auth Service' },
    { id: 'users', label: 'Users DB' },
    { id: 'orders', label: 'Orders Service' },
    { id: 'payments', label: 'Payments' },
    { id: 'notify', label: 'Notifications' },
    { id: 'cache', label: 'Cache' },
  ],
  edges: [
    { source: 'api', target: 'auth', weight: 3 },
    { source: 'api', target: 'orders', weight: 2 },
    { source: 'api', target: 'cache', weight: 2 },
    { source: 'auth', target: 'users', weight: 3 },
    { source: 'orders', target: 'payments', weight: 2 },
    { source: 'orders', target: 'notify', weight: 1 },
    { source: 'payments', target: 'notify', weight: 1 },
    { source: 'cache', target: 'users', weight: 1 },
  ],
};

const meta: Meta<typeof NetworkGraph> = {
  title: 'Charts/NetworkGraph',
  component: NetworkGraph,
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
type Story = StoryObj<typeof NetworkGraph>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <NetworkGraph key={v} data={sampleData} variant={v} title={v} />
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

import type { Meta, StoryObj } from '@storybook/react';
import { NetworkGraph } from '../../components/ui/charts/NetworkGraph';

const socialNetworkData = {
  nodes: [
    { id: 'alice', label: 'Alice', color: '#007AFF', size: 24 },
    { id: 'bob', label: 'Bob', color: '#007AFF', size: 20 },
    { id: 'carol', label: 'Carol', color: '#5856D6', size: 18 },
    { id: 'dave', label: 'Dave', color: '#34C759', size: 16 },
    { id: 'eve', label: 'Eve', color: '#FF9500', size: 22 },
    { id: 'frank', label: 'Frank', color: '#FF2D55', size: 14 },
    { id: 'grace', label: 'Grace', color: '#5856D6', size: 18 },
    { id: 'heidi', label: 'Heidi', color: '#AF52DE', size: 15 },
    { id: 'ivan', label: 'Ivan', color: '#00C7BE', size: 12 },
    { id: 'judy', label: 'Judy', color: '#34C759', size: 16 },
  ],
  edges: [
    { source: 'alice', target: 'bob', weight: 5 },
    { source: 'alice', target: 'carol', weight: 3 },
    { source: 'alice', target: 'eve', weight: 4 },
    { source: 'bob', target: 'dave', weight: 2 },
    { source: 'bob', target: 'frank', weight: 3 },
    { source: 'carol', target: 'grace', weight: 4 },
    { source: 'carol', target: 'heidi', weight: 2 },
    { source: 'dave', target: 'ivan', weight: 3 },
    { source: 'eve', target: 'judy', weight: 4 },
    { source: 'eve', target: 'grace', weight: 2 },
    { source: 'frank', target: 'heidi', weight: 1 },
    { source: 'grace', target: 'ivan', weight: 2 },
    { source: 'heidi', target: 'judy', weight: 3 },
    { source: 'ivan', target: 'judy', weight: 1 },
    { source: 'dave', target: 'frank', weight: 2 },
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
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NetworkGraph>;

export const Default: Story = {
  args: {
    data: socialNetworkData,
    title: 'Social Network Graph',
    subtitle: 'Connections between 10 users',
    showTooltip: true,
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <NetworkGraph key={v} data={socialNetworkData} variant={v} title={v} />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <NetworkGraph data={socialNetworkData} size="sm" title="Small" variant="bordered" />
      <NetworkGraph data={socialNetworkData} size="md" title="Medium" variant="bordered" />
      <NetworkGraph data={socialNetworkData} size="lg" title="Large" variant="bordered" />
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
    data: socialNetworkData,
    variant: 'bordered',
    title: 'Social Network Graph',
    subtitle: 'Dark Mode Preview',
  },
};

export const MicroservicesArchitecture: Story = {
  name: '🌐 Microservices Architecture',
  args: {
    data: {
      nodes: [
        { id: 'gateway', label: 'API Gateway', color: '#007AFF', size: 28 },
        { id: 'auth', label: 'Auth Service', color: '#FF2D55', size: 22 },
        { id: 'users', label: 'User Service', color: '#5856D6', size: 20 },
        { id: 'products', label: 'Product Catalog', color: '#34C759', size: 24 },
        { id: 'orders', label: 'Order Service', color: '#FF9500', size: 26 },
        { id: 'payments', label: 'Payment Service', color: '#FF2D55', size: 22 },
        { id: 'inventory', label: 'Inventory', color: '#00C7BE', size: 18 },
        { id: 'shipping', label: 'Shipping', color: '#AC8E68', size: 16 },
        { id: 'notifications', label: 'Notifications', color: '#AF52DE', size: 18 },
        { id: 'analytics', label: 'Analytics', color: '#5AC8FA', size: 20 },
        { id: 'search', label: 'Search Service', color: '#30B0C7', size: 18 },
        { id: 'cache', label: 'Redis Cache', color: '#FF6482', size: 16 },
        { id: 'queue', label: 'Message Queue', color: '#8E8E93', size: 20 },
        { id: 'userdb', label: 'User DB', color: '#636366', size: 14 },
        { id: 'orderdb', label: 'Order DB', color: '#636366', size: 14 },
      ],
      edges: [
        { source: 'gateway', target: 'auth', weight: 5 },
        { source: 'gateway', target: 'users', weight: 4 },
        { source: 'gateway', target: 'products', weight: 5 },
        { source: 'gateway', target: 'orders', weight: 5 },
        { source: 'gateway', target: 'search', weight: 3 },
        { source: 'auth', target: 'users', weight: 4 },
        { source: 'auth', target: 'cache', weight: 3 },
        { source: 'users', target: 'userdb', weight: 4 },
        { source: 'users', target: 'notifications', weight: 2 },
        { source: 'orders', target: 'payments', weight: 5 },
        { source: 'orders', target: 'inventory', weight: 4 },
        { source: 'orders', target: 'orderdb', weight: 4 },
        { source: 'orders', target: 'queue', weight: 3 },
        { source: 'payments', target: 'notifications', weight: 3 },
        { source: 'payments', target: 'queue', weight: 2 },
        { source: 'inventory', target: 'products', weight: 3 },
        { source: 'inventory', target: 'shipping', weight: 3 },
        { source: 'shipping', target: 'notifications', weight: 2 },
        { source: 'queue', target: 'analytics', weight: 4 },
        { source: 'queue', target: 'notifications', weight: 3 },
        { source: 'search', target: 'products', weight: 4 },
        { source: 'search', target: 'cache', weight: 3 },
        { source: 'products', target: 'cache', weight: 3 },
      ],
    },
    variant: 'elevated',
    size: 'lg',
    animated: true,
    interactive: true,
    showTooltip: true,
    title: 'Microservices Architecture',
    subtitle: 'E-Commerce Platform — 15 Services, Traffic-Weighted Connections',
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
    data: socialNetworkData,
    size: 'md',
    variant: 'default',
    animated: true,
    interactive: true,
    showTooltip: true,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};

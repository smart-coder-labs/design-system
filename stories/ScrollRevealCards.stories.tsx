import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ScrollRevealCards } from '../components/ui/ScrollRevealCards';
import { Layers, Zap, Shield, Smartphone, Globe, Cpu } from 'lucide-react';

const meta = {
  title: 'UI/ScrollRevealCards',
  component: ScrollRevealCards,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-neutral-900 min-h-[200vh] text-zinc-900 dark:text-zinc-50">
        <div className="h-[80vh] flex items-center justify-center border-b border-white/10">
          <p className="text-xl text-zinc-500 dark:text-zinc-400">Scroll down to reveal cards ↓</p>
        </div>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollRevealCards>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
  {
    id: 1,
    title: 'Modern Architecture',
    description: 'Built from the ground up to support the latest web technologies and design trends.',
    icon: <Layers className="w-8 h-8 text-blue-400" />
  },
  {
    id: 2,
    title: 'Lightning Fast',
    description: 'Optimized performance hitting 60fps across all animations without main thread blocks.',
    icon: <Zap className="w-8 h-8 text-yellow-400" />
  },
  {
    id: 3,
    title: 'Bank-Grade Security',
    description: 'Your data is kept safe using industry standard, robust encryption algorithms.',
    icon: <Shield className="w-8 h-8 text-green-400" />
  },
  {
    id: 4,
    title: 'Fully Responsive',
    description: 'A seamless experience whether viewed on a desktop, tablet, or smartphone.',
    icon: <Smartphone className="w-8 h-8 text-purple-400" />
  },
  {
    id: 5,
    title: 'Global Reach',
    description: 'Deployed instantly to edge servers across the globe for minimal latency.',
    icon: <Globe className="w-8 h-8 text-cyan-400" />
  },
  {
    id: 6,
    title: 'Powerful Processing',
    description: 'Leveraging AI and advanced algorithms to deliver unparalleled capabilities.',
    icon: <Cpu className="w-8 h-8 text-red-400" />
  }
];

export const Default: Story = {
  args: {
    items: sampleItems,
    columns: 3,
  },
};

export const TwoColumns: Story = {
  args: {
    items: sampleItems.slice(0, 4),
    columns: 2,
  },
};

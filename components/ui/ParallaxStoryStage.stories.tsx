import type { Meta, StoryObj } from '@storybook/react';
import { ParallaxStoryStage } from './ParallaxStoryStage';

const meta: Meta<typeof ParallaxStoryStage> = {
  title: 'Animations/ParallaxStoryStage',
  component: ParallaxStoryStage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    size: 'lg',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const panels = ['Panel A', 'Panel B', 'Panel C'].map((label) => (
  <ParallaxStoryStage.Panel key={label}>
    <div className="p-8 rounded-2xl border border-border-primary bg-surface-secondary">{label}</div>
  </ParallaxStoryStage.Panel>
));

export const Default: Story = {
  render: (args) => <ParallaxStoryStage {...args}>{panels}</ParallaxStoryStage>,
};

export const Medium: Story = {
  args: { size: 'md' },
  render: Default.render,
};

export const Playground: Story = {
  args: { xRange: ['0%', '-40%'] },
  render: Default.render,
};

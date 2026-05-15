import type { Meta, StoryObj } from '@storybook/react';
import { FloatingElement } from './FloatingElement';

const meta: Meta<typeof FloatingElement> = {
  title: 'Cyberpunk/FloatingElement',
  component: FloatingElement,
  tags: ['autodocs'],
  args: {
    intensity: 'medium',
    rotationSpeed: 1,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="h-80 flex items-center justify-center">
      <FloatingElement {...args}>
        <FloatingElement.Content className="w-20 h-20 rounded-2xl bg-surface-secondary border border-border-primary" />
      </FloatingElement>
    </div>
  ),
};

export const Strong: Story = {
  args: { intensity: 'strong', rotationSpeed: 1.5 },
  render: Default.render,
};

export const Playground: Story = {
  args: { intensity: 'subtle', rotationSpeed: 0.6 },
  render: Default.render,
};

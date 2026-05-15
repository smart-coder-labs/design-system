import type { Meta, StoryObj } from '@storybook/react';
import { ParallaxBanner } from './ParallaxBanner';

const meta = {
  title: 'Surfaces/ParallaxBanner',
  component: ParallaxBanner,
  tags: ['autodocs'],
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=400&fit=crop',
    size: 'md',
    overlay: true,
    overlayOpacity: 0.3,
  },
} satisfies Meta<typeof ParallaxBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ParallaxBanner {...args}>
      <ParallaxBanner.Content>
        <h2 className="text-3xl font-semibold text-text-primary">Banner heading</h2>
      </ParallaxBanner.Content>
    </ParallaxBanner>
  ),
};

export const Large: Story = {
  args: { size: 'lg' },
  render: Default.render,
};

export const Playground: Story = {
  args: { size: 'sm', overlayOpacity: 0.5 },
  render: Default.render,
};

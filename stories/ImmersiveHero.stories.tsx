import type { Meta, StoryObj } from '@storybook/react';
import { ImmersiveHero } from '../components/ui/ImmersiveHero';

const meta = {
  title: 'UI/ImmersiveHero',
  component: ImmersiveHero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ImmersiveHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Experience The Future',
    subtitle: 'A seamlessly integrated design system that puts your content front and center with immersive animations and stunning visuals.',
    backgroundImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
  },
};

export const Minimal: Story = {
  args: {
    title: 'Apple Inspiration',
    backgroundImage: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&w=2664&auto=format&fit=crop',
  },
};

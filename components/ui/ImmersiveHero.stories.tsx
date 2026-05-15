import type { Meta, StoryObj } from '@storybook/react';
import { ImmersiveHero } from './ImmersiveHero';

const meta: Meta<typeof ImmersiveHero> = {
  title: 'Surfaces/ImmersiveHero',
  component: ImmersiveHero,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
    size: 'full',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const content = {
  title: 'Immersive title',
  subtitle: 'Subtitle text passed through composition.',
};

export const Default: Story = {
  render: (args) => (
    <ImmersiveHero {...args}>
      <ImmersiveHero.Background />
      <ImmersiveHero.Overlay />
      <ImmersiveHero.Content>
        <ImmersiveHero.Title>{content.title}</ImmersiveHero.Title>
        <ImmersiveHero.Subtitle>{content.subtitle}</ImmersiveHero.Subtitle>
      </ImmersiveHero.Content>
    </ImmersiveHero>
  ),
};

export const Medium: Story = {
  args: { size: 'md' },
  render: Default.render,
};

export const Playground: Story = {
  args: { size: 'sm' },
  render: Default.render,
};

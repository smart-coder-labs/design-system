import type { Meta, StoryObj } from '@storybook/react';
import { ComicPanel } from './ComicPanel';

const meta = {
  title: 'Cyberpunk/ComicPanel',
  component: ComicPanel,
  tags: ['autodocs'],
  args: {
    direction: 'left',
    tone: 'default',
  },
} satisfies Meta<typeof ComicPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

const panelContent = {
  heading: 'Panel heading',
  body: 'Panel body text driven by story args.',
};

export const Default: Story = {
  render: (args) => (
    <ComicPanel {...args}>
      <ComicPanel.Content>
        <h3 className="text-xl font-semibold">{panelContent.heading}</h3>
        <p className="text-text-secondary">{panelContent.body}</p>
      </ComicPanel.Content>
    </ComicPanel>
  ),
};

export const Accent: Story = {
  args: { tone: 'accent', direction: 'right' },
  render: Default.render,
};

export const Playground: Story = {
  args: { tone: 'muted', direction: 'left' },
  render: Default.render,
};

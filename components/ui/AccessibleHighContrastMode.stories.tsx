import type { Meta, StoryObj } from '@storybook/react';
import { AccessibleHighContrastMode } from './AccessibleHighContrastMode';

const meta: Meta<typeof AccessibleHighContrastMode> = {
  title: 'Fintech/AccessibleHighContrastMode',
  component: AccessibleHighContrastMode,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AccessibleHighContrastMode>;

export const Default: Story = {
  args: {},
};

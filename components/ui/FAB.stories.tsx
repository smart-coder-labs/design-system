import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FAB } from './FAB';
import { Plus, Pen, Camera } from 'lucide-react';

const meta: Meta<typeof FAB> = {
  title: 'Components/FAB',
  component: FAB,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    icon: Pen,
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    icon: Camera,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Extended: Story = {
  args: {
    label: 'New Transaction',
  },
};

export const Hidden: Story = {
  args: {
    show: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const PositionNone: Story = {
  args: {
    position: 'none',
  },
};

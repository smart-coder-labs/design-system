import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HapticButton } from './HapticButton';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof HapticButton> = {
  title: 'Components/HapticButton',
  component: HapticButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tap me',
    onClick: action('clicked'),
  },
};

export const Primary: Story = {
  args: {
    children: 'Send Payment',
    variant: 'primary',
    onClick: action('clicked'),
  },
};

export const LightFeedback: Story = {
  args: {
    children: 'Light tap',
    hapticFeedback: 'light',
  },
};

export const HeavyFeedback: Story = {
  args: {
    children: 'Heavy impact',
    hapticFeedback: 'heavy',
  },
};

export const SuccessFeedback: Story = {
  args: {
    children: 'Success!',
    hapticFeedback: 'success',
    variant: 'primary',
  },
};

export const ErrorFeedback: Story = {
  args: {
    children: 'Error!',
    hapticFeedback: 'error',
    variant: 'danger',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading...',
    isLoading: true,
  },
};

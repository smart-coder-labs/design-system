import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InfiniteHorizontalLoop } from './InfiniteHorizontalLoop';

const meta: Meta<typeof InfiniteHorizontalLoop> = {
  title: 'Components/InfiniteHorizontalLoop',
  component: InfiniteHorizontalLoop,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const logos = [
  <div key="1" className="px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg">Stripe</div>,
  <div key="2" className="px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg">PayPal</div>,
  <div key="3" className="px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg">Square</div>,
  <div key="4" className="px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg">Plaid</div>,
  <div key="5" className="px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg">Revolut</div>,
  <div key="6" className="px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg">Nubank</div>,
];

export const Default: Story = {
  args: {
    items: logos,
    speed: 20,
  },
};

export const Fast: Story = {
  args: {
    items: logos,
    speed: 10,
  },
};

export const Slow: Story = {
  args: {
    items: logos,
    speed: 40,
  },
};

export const RightDirection: Story = {
  args: {
    items: logos,
    direction: 'right',
    speed: 25,
  },
};

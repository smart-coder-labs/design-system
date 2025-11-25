import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import PriceDisplay from '../components/PriceDisplay';

const meta: Meta<typeof PriceDisplay> = {
  title: 'Data Display/Price Display',
  component: PriceDisplay,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PriceDisplay>;

export const Default: Story = {
  render: () => (
    <div className="p-6">
      <PriceDisplay amount={116} currency="USD" />
    </div>
  ),
};

export const WithCents: Story = {
  render: () => (
    <div className="p-6">
      <PriceDisplay amount={19.95} currency="USD" />
    </div>
  ),
};

export const NoCents: Story = {
  render: () => (
    <div className="p-6">
      <PriceDisplay amount={20} currency="USD" showCents={false} />
    </div>
  ),
};

export const WithOriginal: Story = {
  render: () => (
    <div className="p-6">
      <PriceDisplay amount={14.99} original={19.99} currency="USD" />
    </div>
  ),
};

export const CompactAccent: Story = {
  render: () => (
    <div className="p-6">
      <PriceDisplay amount={199} currency="USD" compact variant="accent" />
    </div>
  ),
};

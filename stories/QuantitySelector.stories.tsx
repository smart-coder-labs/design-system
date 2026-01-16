import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import QuantitySelector from '../components/ui/QuantitySelector';

const meta: Meta<typeof QuantitySelector> = {
  title: 'Forms/Quantity Selector',
  component: QuantitySelector,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof QuantitySelector>;

export const Default: Story = {
  render: () => (
    <div className="p-6">
      <QuantitySelector defaultValue={1} onChange={(v) => console.log('value', v)} />
    </div>
  ),
};

export const WithMinMax: Story = {
  render: () => (
    <div className="p-6">
      <QuantitySelector defaultValue={2} min={1} max={5} />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="p-6">
      <QuantitySelector defaultValue={3} disabled />
    </div>
  ),
};

export const Compact: Story = {
  render: () => (
    <div className="p-6">
      <QuantitySelector defaultValue={1} compact />
    </div>
  ),
};

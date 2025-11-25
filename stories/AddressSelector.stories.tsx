import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import AddressSelector from '../components/AddressSelector';

const meta: Meta<typeof AddressSelector> = {
  title: 'Forms/Address Selector',
  component: AddressSelector,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AddressSelector>;

export const Default: Story = {
  render: (args) => (
    <div className="p-6 max-w-md">
      <p className="mb-4 text-sm text-text-tertiary">Note: provide your Google Maps API key via the story <strong>args</strong> (set the <code>apiKey</code> control) or pass the <code>apiKey</code> prop programmatically. The Places API must be enabled for the key.</p>
      <AddressSelector {...args} onSelect={(place) => alert(JSON.stringify(place, null, 2))} />
    </div>
  ),
};

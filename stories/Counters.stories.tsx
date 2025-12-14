import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Counters, { CountersItem } from '../components/Counters';

const meta: Meta<typeof Counters> = {
  title: 'Data/Counters',
  component: Counters,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof Counters>;

const items: CountersItem[] = [
  { value: 116, label: 'First Service Residential' },
  { value: 32, label: 'KW Property Management' },
  { value: 19, label: 'Marquis Association Management' },
];

export const Default: Story = {
  render: () => <Counters items={items} />,
};

export const Compact: Story = {
  render: () => <Counters items={items} compact />,
};

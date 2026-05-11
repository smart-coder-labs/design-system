import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedInput } from './SegmentedInput';

const meta = {
  title: 'Components/SegmentedInput',
  component: SegmentedInput,
  tags: ['autodocs'],
} satisfies Meta<typeof SegmentedInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    segments: 4,
    onChange: (val: string) => console.log('Value:', val),
  },
};

export const WithLabel: Story = {
  args: {
    segments: 6,
    label: 'Verification Code',
    onChange: (val: string) => console.log('Value:', val),
  },
};

export const WithValue: Story = {
  args: {
    segments: 4,
    value: '1234',
    onChange: (val: string) => console.log('Value:', val),
  },
};

export const WithError: Story = {
  args: {
    segments: 4,
    label: 'PIN',
    error: 'Invalid PIN',
    onChange: (val: string) => console.log('Value:', val),
  },
};

export const Disabled: Story = {
  args: {
    segments: 4,
    disabled: true,
    onChange: (val: string) => console.log('Value:', val),
  },
};

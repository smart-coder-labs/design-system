import type { Meta, StoryObj } from '@storybook/react';
import { RatingInput } from './RatingInput';

const meta = {
  title: 'Components/RatingInput',
  component: RatingInput,
  tags: ['autodocs'],
} satisfies Meta<typeof RatingInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
    onChange: (val: number) => console.log('Rating:', val),
  },
};

export const ThreeStars: Story = {
  args: {
    value: 3,
    onChange: (val: number) => console.log('Rating:', val),
  },
};

export const MaximumRating: Story = {
  args: {
    value: 5,
    onChange: (val: number) => console.log('Rating:', val),
  },
};

export const WithLabel: Story = {
  args: {
    value: 4,
    label: 'Rate your experience',
    onChange: (val: number) => console.log('Rating:', val),
  },
};

export const ReadOnly: Story = {
  args: {
    value: 4,
    readOnly: true,
  },
};

export const CustomMax: Story = {
  args: {
    value: 7,
    max: 10,
    onChange: (val: number) => console.log('Rating:', val),
  },
};

export const Disabled: Story = {
  args: {
    value: 3,
    disabled: true,
    onChange: (val: number) => console.log('Rating:', val),
  },
};

export const WithError: Story = {
  args: {
    value: 0,
    label: 'Rating',
    error: 'Please select a rating',
    onChange: (val: number) => console.log('Rating:', val),
  },
};

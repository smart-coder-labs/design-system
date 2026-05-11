import type { Meta, StoryObj } from '@storybook/react';
import { SignaturePad } from './SignaturePad';

const meta = {
  title: 'Components/SignaturePad',
  component: SignaturePad,
  tags: ['autodocs'],
} satisfies Meta<typeof SignaturePad>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSave: (dataUrl: string) => console.log('Signature saved'),
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Sign below',
    onSave: (dataUrl: string) => console.log('Signature saved'),
  },
};

export const WithClear: Story = {
  args: {
    label: 'Authorized Signature',
    onSave: (dataUrl: string) => console.log('Signature saved'),
    onClear: () => console.log('Cleared'),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Signed',
    disabled: true,
    onSave: (dataUrl: string) => console.log('Signature saved'),
  },
};

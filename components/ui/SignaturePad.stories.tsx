import type { Meta, StoryObj } from '@storybook/react';
import { SignaturePad } from './SignaturePad';

const meta = {
  title: 'Data Display/SignaturePad',
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

export const CustomColors: Story = {
  args: {
    label: 'Sign with style',
    penColor: '#2563eb',
    backgroundColor: '#f0f9ff',
    strokeWidth: 3,
    onSave: (dataUrl: string) => console.log('Signature saved'),
  },
};

export const TallCanvas: Story = {
  args: {
    label: 'Please sign here',
    height: 300,
    width: 500,
    penColor: '#7c3aed',
    strokeWidth: 2,
    onSave: (dataUrl: string) => console.log('Signature saved'),
  },
};

export const MobileResponsive: Story = {
  args: {
    label: 'Firma aquí',
    width: 320,
    height: 160,
    strokeWidth: 4,
    onSave: (dataUrl: string) => console.log('Signature saved'),
  },
  decorators: [
    (Story: any) => (
      <div className="max-w-sm mx-auto">
        <Story />
      </div>
    ),
  ],
};

export const DarkMode: Story = {
  args: {
    label: 'Authorized Signature',
    penColor: '#e2e8f0',
    backgroundColor: '#1e293b',
    strokeWidth: 2,
    onSave: (dataUrl: string) => console.log('Signature saved'),
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story: any) => (
      <div className="dark p-6 bg-zinc-900 rounded-xl">
        <Story />
      </div>
    ),
  ],
};

export const ThickStroke: Story = {
  args: {
    label: 'Sign with thick pen',
    strokeWidth: 6,
    penColor: '#dc2626',
    onSave: (dataUrl: string) => console.log('Signature saved'),
  },
};

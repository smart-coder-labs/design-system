import type { Meta, StoryObj } from '@storybook/react';
import { DocScanOverlay } from './DocScanOverlay';

const meta: Meta<typeof DocScanOverlay> = {
  title: 'Fintech/DocScanOverlay',
  component: DocScanOverlay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DocScanOverlay>;

export const IDCard: Story = {
  args: {
    documentType: 'ID',
    scanState: 'scanning',
  },
};

export const Selfie: Story = {
  args: {
    documentType: 'SELFIE',
    instructionMessage: 'Mueve tu rostro dentro del óvalo',
    scanState: 'scanning',
  },
};

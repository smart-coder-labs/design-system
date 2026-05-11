import type { Meta, StoryObj } from '@storybook/react';
import { RichTextEditor } from './RichTextEditor';

const meta = {
  title: 'Components/RichTextEditor',
  component: RichTextEditor,
  tags: ['autodocs'],
} satisfies Meta<typeof RichTextEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Start writing...',
    onChange: (html: string) => console.log('Content:', html),
  },
};

export const WithInitialContent: Story = {
  args: {
    value: '<h2>Investment Strategy</h2><p>This quarter we are focusing on <strong>DeFi</strong> and <strong>Layer 2</strong> solutions. Key areas of interest include:</p><ul><li>Yield optimization on L2 networks</li><li>Cross-chain bridge security audits</li><li>New stablecoin protocols</li></ul>',
    onChange: (html: string) => console.log('Content:', html),
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Description',
    placeholder: 'Describe your investment thesis...',
    onChange: (html: string) => console.log('Content:', html),
  },
};

export const WithError: Story = {
  args: {
    label: 'Content',
    value: '<p>Short</p>',
    error: 'Content must be at least 50 characters',
    onChange: (html: string) => console.log('Content:', html),
  },
};

export const Disabled: Story = {
  args: {
    value: '<p>This content is read-only.</p>',
    disabled: true,
    onChange: (html: string) => console.log('Content:', html),
  },
};

export const Minimal: Story = {
  args: {
    placeholder: 'Quick note...',
    toolbar: ['bold', 'italic'],
    onChange: (html: string) => console.log('Content:', html),
  },
};

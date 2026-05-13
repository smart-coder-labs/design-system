import type { Meta, StoryObj } from '@storybook/react';
import { ChatInput } from './ChatInput';

const meta = {
    title: 'Components/ChatInput',
    component: ChatInput,
    tags: ['autodocs'],
} satisfies Meta<typeof ChatInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Type a message...',
    },
};

export const WithValue: Story = {
    args: {
        value: 'I\'d like to check my account balance',
        placeholder: 'Type a message...',
    },
};

export const WithAttachments: Story = {
    args: {
        placeholder: 'Type a message...',
        attachments: [
            { id: '1', file: new File([''], 'photo.jpg', { type: 'image/jpeg' }), type: 'image' as const, preview: 'https://picsum.photos/seed/attach1/60/60' },
            { id: '2', file: new File([''], 'doc.pdf', { type: 'application/pdf' }), type: 'file' as const },
        ],
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Chat is disabled...',
        disabled: true,
    },
};

export const WithVoiceButton: Story = {
    args: {
        placeholder: 'Type a message...',
        showVoiceButton: true,
    },
};

export const WithoutAttachmentButton: Story = {
    args: {
        placeholder: 'Type a message...',
        showAttachmentButton: false,
    },
};

export const CustomPlaceholder: Story = {
    args: {
        placeholder: 'Ask about your finances...',
    },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};

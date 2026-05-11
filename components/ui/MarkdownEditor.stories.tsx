import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MarkdownEditor } from './MarkdownEditor';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof MarkdownEditor> = {
  title: 'Components/MarkdownEditor',
  component: MarkdownEditor,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '# Welcome\nStart typing your markdown here...',
    onChange: action('changed'),
  },
};

export const WithPlaceholder: Story = {
  args: {
    value: '',
    placeholder: 'Write your notes in markdown...',
    onChange: action('changed'),
  },
};

export const TransactionNote: Story = {
  args: {
    value: `## Transaction Note\n**Amount:** $250.00\n**Recipient:** Alice Johnson\n**Reference:** INV-2025-4421\n\n> Payment for freelance design services - Q1 2025\n`,
    onChange: action('changed'),
  },
};

export const FinancialSummary: Story = {
  args: {
    value: `# Monthly Financial Summary\n\n## Income\n- Salary: $5,400.00\n- Freelance: $2,100.00\n\n## Expenses\n- Rent: $1,800.00\n- Utilities: $250.00\n- Food: $600.00\n\n## Savings\n- Emergency Fund: $500.00\n- Investments: $1,000.00\n`,
    onChange: action('changed'),
  },
};

export const MeetingNotes: Story = {
  args: {
    value: `# Sprint Planning — Apr 15\n\n## Attendees\n- Cesar (PM)\n- Alice (Dev)\n- Bob (Design)\n\n## Tasks\n- [ ] Implement payment flow\n- [ ] Design new dashboard\n- [x] Deploy to staging\n\n## Notes\nMeeting scheduled for **2:00 PM** in the main conference room.`,
    onChange: action('changed'),
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
export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
export const FintechUseCase: Story = {
  parameters: {
    docs: {
      description: {
        story: 'MarkdownEditor used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};

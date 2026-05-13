import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { KanbanBoard } from './KanbanBoard';

const meta: Meta<typeof KanbanBoard> = {
  title: 'Data Display/KanbanBoard',
  component: KanbanBoard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: [
      {
        id: 'todo',
        title: 'To Do',
        items: [
          { id: '1', title: 'Implement payment flow', description: 'Build wire transfer UI', priority: 'high', assignee: 'Cesar' },
          { id: '2', title: 'API integration', description: 'Connect to Plaid API', priority: 'medium', assignee: 'Alice' },
          { id: '3', title: 'Design review', description: 'Review new dashboard designs', priority: 'low', assignee: 'Bob' },
        ],
      },
      {
        id: 'in_progress',
        title: 'In Progress',
        items: [
          { id: '4', title: 'KYC verification', description: 'Implement ID scanning', priority: 'high', assignee: 'Carol' },
          { id: '5', title: 'Budget calculator', description: 'Build monthly budget tool', priority: 'medium', assignee: 'David' },
        ],
      },
      {
        id: 'done',
        title: 'Done',
        items: [
          { id: '6', title: 'Login screen', description: 'Build login with biometrics', priority: 'high', assignee: 'Cesar', tags: ['auth'] },
          { id: '7', title: 'User onboarding', description: 'Create onboarding flow', priority: 'high', assignee: 'Alice', tags: ['ux'] },
        ],
      },
    ],
    onCardMove: (cardId, targetColumn, targetIndex) => console.log('Move:', cardId, targetColumn, targetIndex),
  },
};

export const EmptyColumn: Story = {
  args: {
    columns: [
      { id: 'backlog', title: 'Backlog', items: [] },
      { id: 'todo', title: 'To Do', items: [
        { id: '1', title: 'Implement dark mode', priority: 'low', assignee: 'Dev' },
      ]},
      { id: 'done', title: 'Done', items: [
        { id: '2', title: 'Add 2FA', priority: 'high', assignee: 'Dev', tags: ['security'] },
      ]},
    ],
  },
};

export const ManyItems: Story = {
  args: {
    columns: [
      {
        id: 'backlog',
        title: 'Backlog',
        items: Array.from({ length: 8 }, (_, i) => ({
          id: `b${i}`,
          title: `Task ${i + 1}: Feature request`,
          priority: (['low', 'medium', 'high'] as const)[i % 3],
          assignee: ['Alice', 'Bob', 'Carol'][i % 3],
        })),
      },
      {
        id: 'sprint',
        title: 'Sprint #12',
        items: Array.from({ length: 5 }, (_, i) => ({
          id: `s${i}`,
          title: `Sprint task ${i + 1}`,
          priority: 'high' as const,
          assignee: 'Cesar',
          tags: ['sprint-12'],
        })),
      },
    ],
  },
};

export const DarkThemeBoard: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
  args: {
    columns: [
      {
        id: 'col1',
        title: 'Compliance Reviews',
        items: [
          { id: '1', title: 'Review KYC docs #4821', priority: 'high', assignee: 'Compliance', tags: ['urgent'] },
          { id: '2', title: 'Verify business license', priority: 'medium', assignee: 'Legal' },
        ],
      },
      {
        id: 'col2',
        title: 'Approved',
        items: [
          { id: '3', title: 'Account activation #7734', priority: 'high', assignee: 'Ops', tags: ['done'] },
        ],
      },
    ],
  },
};

export const WithTags: Story = {
  args: {
    columns: [
      {
        id: 'dev',
        title: 'Development',
        items: [
          { id: '1', title: 'Implement SWIFT payments', priority: 'high', assignee: 'Backend', tags: ['payments', 'swift'] },
          { id: '2', title: 'Add crypto wallet', priority: 'medium', assignee: 'Blockchain', tags: ['crypto'] },
          { id: '3', title: 'Build notification system', priority: 'medium', assignee: 'Fullstack', tags: ['notifications'] },
        ],
      },
      {
        id: 'qa',
        title: 'QA',
        items: [
          { id: '4', title: 'Test transfer flow', priority: 'high', assignee: 'QA', tags: ['e2e', 'critical'] },
        ],
      },
    ],
  },
};

export const FintechSprint: Story = {
  args: {
    columns: [
      {
        id: 'backlog',
        title: 'Backlog',
        items: [
          { id: 'b1', title: 'Add P2P notifications', priority: 'high', tags: ['feature','push'], assignee: 'Backend' },
          { id: 'b2', title: 'Multi-currency wallet redesign', priority: 'medium', tags: ['design'], assignee: 'UX' },
          { id: 'b3', title: 'Fraud detection v2', priority: 'urgent', tags: ['backend','security'], assignee: 'Security' },
        ],
      },
      {
        id: 'sprint',
        title: 'Sprint 12',
        items: [
          { id: 's1', title: 'Instant ACH transfers', priority: 'urgent', tags: ['payments'], assignee: 'Backend' },
          { id: 's2', title: 'Dark mode transaction history', priority: 'medium', tags: ['frontend'], assignee: 'Frontend' },
          { id: 's3', title: 'Savings goal charts', priority: 'medium', tags: ['charts'], assignee: 'Fullstack' },
          { id: 's4', title: 'API rate limiting', priority: 'high', tags: ['backend'], assignee: 'Backend' },
        ],
      },
      {
        id: 'review',
        title: 'Review',
        items: [
          { id: 'r1', title: 'Transaction CSV export', priority: 'high', assignee: 'QA', tags: ['feature'] },
          { id: 'r2', title: 'Biometric auth for mobile-web', priority: 'high', assignee: 'QA', tags: ['security'] },
        ],
      },
      {
        id: 'done',
        title: 'Done ✓',
        items: [
          { id: 'd1', title: 'Onboarding flow v3', priority: 'high', assignee: 'PM', tags: ['ux'] },
          { id: 'd2', title: 'Budget ML suggestions', priority: 'medium', assignee: 'Data', tags: ['ai'] },
        ],
      },
    ],
  },
};

export const PriorityBoard: Story = {
  args: {
    columns: [
      {
        id: 'urgent',
        title: '🔴 Urgent',
        items: [
          { id: 'u1', title: 'P0: Production payments failing', priority: 'urgent', assignee: 'All Hands', tags: ['p0','incident'] },
          { id: 'u2', title: 'Security vulnerability patch', priority: 'urgent', assignee: 'Security', tags: ['p0','security'] },
        ],
      },
      {
        id: 'high',
        title: '🟠 High Priority',
        items: [
          { id: 'h1', title: 'KYC deadline compliance', priority: 'high', assignee: 'Compliance', tags: ['regulatory'] },
          { id: 'h2', title: 'Quarterly report data', priority: 'high', assignee: 'Data', tags: ['reporting'] },
        ],
      },
      {
        id: 'medium',
        title: '🟡 Medium',
        items: [
          { id: 'm1', title: 'Update FAQ pages', priority: 'medium', assignee: 'Content', tags: ['docs'] },
        ],
      },
      {
        id: 'low',
        title: '🟢 Backlog',
        items: [
          { id: 'l1', title: 'UI polish pass', priority: 'low', assignee: 'Design', tags: ['ux'] },
        ],
      },
    ],
  },
};

export const EmptyColumns: Story = {
  args: {
    columns: [
      { id: 'backlog', title: 'Backlog', items: [] },
      { id: 'todo', title: 'To Do', items: [
        { id: '1', title: 'Implement dark mode', priority: 'low', assignee: 'Dev' },
      ]},
      { id: 'in-progress', title: 'In Progress', items: [] },
      { id: 'done', title: 'Done', items: [
        { id: '2', title: 'Add 2FA', priority: 'high', assignee: 'Dev', tags: ['security'] },
      ]},
    ],
  },
};

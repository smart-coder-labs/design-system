import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { KanbanBoard, KanbanColumn, KanbanCard } from './KanbanBoard';

const columns: KanbanColumn[] = [
  {
    id: 'todo',
    title: 'To Do',
    color: 'bg-gray-400',
    limit: 5,
    cards: [
      { id: '1', title: 'Implement payment flow', priority: 'high', tags: ['frontend'], comments: 3 },
      { id: '2', title: 'Update API documentation', priority: 'medium', tags: ['docs'], attachments: 1 },
      { id: '3', title: 'Design new onboarding screen', priority: 'low', tags: ['design'] },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    color: 'bg-blue-500',
    cards: [
      { id: '4', title: 'Refactor auth module', priority: 'high', assignee: { name: 'Ana' }, tags: ['backend', 'security'], comments: 5, dueDate: 'May 15' },
      { id: '5', title: 'Add dark mode support', priority: 'medium', assignee: { name: 'Carlos' }, tags: ['frontend', 'ui'], comments: 2 },
    ],
  },
  {
    id: 'review',
    title: 'Review',
    color: 'bg-yellow-500',
    cards: [
      { id: '6', title: 'Dashboard charts integration', priority: 'high', assignee: { name: 'Laura' }, tags: ['frontend', 'charts'], attachments: 2, comments: 8 },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    color: 'bg-green-500',
    limit: 10,
    cards: [
      { id: '7', title: 'Set up CI/CD pipeline', priority: 'high', assignee: { name: 'Miguel' }, tags: ['devops'], comments: 1 },
      { id: '8', title: 'Unit tests for transactions', priority: 'medium', tags: ['testing'] },
    ],
  },
];

const meta: Meta<typeof KanbanBoard> = {
  title: 'Components/KanbanBoard',
  component: KanbanBoard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns,
  },
};

export const Compact: Story = {
  args: {
    columns: columns.map(col => ({
      ...col,
      cards: col.cards.slice(0, 2),
    })),
    variant: 'compact',
  },
};

export const Detailed: Story = {
  args: {
    columns: columns.slice(0, 2),
    variant: 'detailed',
  },
};

export const WithoutCardCount: Story = {
  args: {
    columns: columns.slice(0, 3),
    showCardCount: false,
  },
};

export const WithColumnLimits: Story = {
  args: {
    columns,
    showColumnLimit: true,
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { KanbanBoard } from '../components/KanbanBoard';

const meta: Meta<typeof KanbanBoard> = {
    title: 'Data Display/KanbanBoard',
    component: KanbanBoard,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
# Kanban Board

A premium Kanban board component with drag-and-drop functionality, perfect for project management and workflow visualization.

## Features

- 🎯 **Drag & Drop**: Smooth card movement between columns
- 🎨 **Priority Indicators**: Visual priority levels (low, medium, high, urgent)
- 👤 **Assignee Avatars**: Display team member assignments
- 🏷️ **Tags**: Categorize cards with custom tags
- 📊 **Column Limits**: Set WIP limits with visual warnings
- 📅 **Metadata**: Due dates, attachments, and comment counts
- 🎭 **Variants**: Default, compact, and detailed views
- ✨ **Premium Animations**: Smooth transitions and hover effects

## Usage

\`\`\`tsx
import { KanbanBoard } from '@/components/KanbanBoard';

const columns = [
  {
    id: 'todo',
    title: 'To Do',
    color: '#86868B',
    cards: [
      {
        id: '1',
        title: 'Design new landing page',
        priority: 'high',
        assignee: { name: 'John Doe' },
        dueDate: 'Dec 15',
      },
    ],
  },
];

<KanbanBoard
  columns={columns}
  onCardMove={(cardId, from, to, index) => console.log('Card moved')}
  onCardClick={(card) => console.log('Card clicked', card)}
  onAddCard={(columnId) => console.log('Add card to', columnId)}
/>
\`\`\`
        `,
            },
        },
    },
    tags: [],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'compact', 'detailed'],
            description: 'Visual variant of the board',
        },
        showCardCount: {
            control: 'boolean',
            description: 'Show card count in column headers',
        },
        showColumnLimit: {
            control: 'boolean',
            description: 'Show column limits in headers',
        },
    },
};

export default meta;
type Story = StoryObj<typeof KanbanBoard>;

const sampleColumns = [
    {
        id: 'backlog',
        title: 'Backlog',
        color: '#86868B',
        limit: 10,
        cards: [
            {
                id: 'card-1',
                title: 'Research competitor features',
                description: 'Analyze top 5 competitors and document their key features',
                priority: 'low' as const,
                assignee: {
                    name: 'Sarah Chen',
                },
                tags: ['research', 'competitive-analysis'],
                dueDate: 'Dec 20',
                attachments: 3,
                comments: 2,
            },
            {
                id: 'card-2',
                title: 'Update documentation',
                description: 'Refresh API documentation with latest endpoints',
                priority: 'medium' as const,
                assignee: {
                    name: 'Mike Johnson',
                },
                tags: ['documentation'],
                dueDate: 'Dec 18',
                comments: 1,
            },
        ],
    },
    {
        id: 'todo',
        title: 'To Do',
        color: '#007AFF',
        limit: 5,
        cards: [
            {
                id: 'card-3',
                title: 'Design new landing page',
                description: 'Create high-fidelity mockups for the new product landing page',
                priority: 'high' as const,
                assignee: {
                    name: 'Emma Wilson',
                },
                tags: ['design', 'ui/ux'],
                dueDate: 'Dec 15',
                attachments: 5,
                comments: 8,
            },
            {
                id: 'card-4',
                title: 'Implement authentication',
                description: 'Add OAuth 2.0 authentication with Google and GitHub',
                priority: 'urgent' as const,
                assignee: {
                    name: 'Alex Rodriguez',
                },
                tags: ['backend', 'security'],
                dueDate: 'Dec 12',
                attachments: 2,
                comments: 12,
            },
            {
                id: 'card-5',
                title: 'Setup CI/CD pipeline',
                priority: 'medium' as const,
                assignee: {
                    name: 'David Kim',
                },
                tags: ['devops'],
                dueDate: 'Dec 16',
            },
        ],
    },
    {
        id: 'in-progress',
        title: 'In Progress',
        color: '#FF9500',
        limit: 3,
        cards: [
            {
                id: 'card-6',
                title: 'Build dashboard analytics',
                description: 'Create real-time analytics dashboard with charts and metrics',
                priority: 'high' as const,
                assignee: {
                    name: 'Lisa Anderson',
                },
                tags: ['frontend', 'analytics'],
                dueDate: 'Dec 14',
                attachments: 7,
                comments: 15,
            },
            {
                id: 'card-7',
                title: 'Optimize database queries',
                description: 'Improve performance of slow queries identified in monitoring',
                priority: 'urgent' as const,
                assignee: {
                    name: 'Tom Harris',
                },
                tags: ['backend', 'performance'],
                dueDate: 'Dec 13',
                attachments: 1,
                comments: 6,
            },
        ],
    },
    {
        id: 'review',
        title: 'In Review',
        color: '#5AC8FA',
        limit: 4,
        cards: [
            {
                id: 'card-8',
                title: 'Mobile responsive fixes',
                description: 'Fix layout issues on mobile devices',
                priority: 'medium' as const,
                assignee: {
                    name: 'Rachel Green',
                },
                tags: ['frontend', 'mobile'],
                dueDate: 'Dec 11',
                comments: 4,
            },
        ],
    },
    {
        id: 'done',
        title: 'Done',
        color: '#34C759',
        cards: [
            {
                id: 'card-9',
                title: 'Setup project repository',
                description: 'Initialize Git repository with proper structure',
                priority: 'high' as const,
                assignee: {
                    name: 'Chris Martin',
                },
                tags: ['setup'],
                dueDate: 'Dec 1',
                comments: 3,
            },
            {
                id: 'card-10',
                title: 'Create design system',
                description: 'Build comprehensive design system with components',
                priority: 'high' as const,
                assignee: {
                    name: 'Emma Wilson',
                },
                tags: ['design', 'ui/ux'],
                dueDate: 'Dec 5',
                attachments: 12,
                comments: 25,
            },
        ],
    },
];

export const Default: Story = {
    args: {
        columns: sampleColumns,
        showCardCount: true,
        showColumnLimit: false,
        variant: 'default',
        onCardMove: (cardId, from, to, index) => {
            console.log(`Card ${cardId} moved from ${from} to ${to} at index ${index}`);
        },
        onCardClick: (card) => {
            console.log('Card clicked:', card);
        },
        onAddCard: (columnId, card) => {
            console.log('Add card to column:', columnId, 'Card data:', card);
        },
    },
};
export const Compact: Story = {
    args: {
        ...Default.args,
        variant: 'compact',
    },
};

export const Detailed: Story = {
    args: {
        ...Default.args,
        variant: 'detailed',
    },
};

export const WithColumnLimits: Story = {
    args: {
        ...Default.args,
        showColumnLimit: true,
    },
};

export const MinimalBoard: Story = {
    args: {
        columns: [
            {
                id: 'todo',
                title: 'To Do',
                color: '#007AFF',
                cards: [
                    {
                        id: 'card-1',
                        title: 'Task 1',
                        priority: 'medium' as const,
                    },
                    {
                        id: 'card-2',
                        title: 'Task 2',
                        priority: 'high' as const,
                    },
                ],
            },
            {
                id: 'doing',
                title: 'Doing',
                color: '#FF9500',
                cards: [
                    {
                        id: 'card-3',
                        title: 'Task 3',
                        priority: 'urgent' as const,
                    },
                ],
            },
            {
                id: 'done',
                title: 'Done',
                color: '#34C759',
                cards: [
                    {
                        id: 'card-4',
                        title: 'Task 4',
                        priority: 'low' as const,
                    },
                ],
            },
        ],
        showCardCount: true,
        variant: 'compact',
    },
};

export const EmptyBoard: Story = {
    args: {
        columns: [
            {
                id: 'todo',
                title: 'To Do',
                color: '#007AFF',
                cards: [],
            },
            {
                id: 'in-progress',
                title: 'In Progress',
                color: '#FF9500',
                cards: [],
            },
            {
                id: 'done',
                title: 'Done',
                color: '#34C759',
                cards: [],
            },
        ],
        showCardCount: true,
        onAddCard: (columnId, card) => {
            console.log('Add card to column:', columnId, 'Card data:', card);
        },
    },
};

export const SingleColumn: Story = {
    args: {
        columns: [
            {
                id: 'tasks',
                title: 'All Tasks',
                color: '#007AFF',
                cards: [
                    {
                        id: 'card-1',
                        title: 'Complete project proposal',
                        description: 'Write and submit the Q1 project proposal',
                        priority: 'urgent' as const,
                        assignee: {
                            name: 'John Doe',
                        },
                        tags: ['proposal', 'q1'],
                        dueDate: 'Dec 10',
                        attachments: 3,
                        comments: 7,
                    },
                    {
                        id: 'card-2',
                        title: 'Review team feedback',
                        priority: 'medium' as const,
                        assignee: {
                            name: 'Jane Smith',
                        },
                        dueDate: 'Dec 12',
                        comments: 2,
                    },
                ],
            },
        ],
        variant: 'detailed',
    },
};

export const ManyColumns: Story = {
    args: {
        columns: [
            {
                id: 'ideas',
                title: 'Ideas',
                color: '#AF52DE',
                cards: [
                    { id: 'c1', title: 'Brainstorm features', priority: 'low' as const },
                ],
            },
            {
                id: 'backlog',
                title: 'Backlog',
                color: '#86868B',
                cards: [
                    { id: 'c2', title: 'Research task', priority: 'medium' as const },
                ],
            },
            {
                id: 'todo',
                title: 'To Do',
                color: '#007AFF',
                cards: [
                    { id: 'c3', title: 'Design mockups', priority: 'high' as const },
                ],
            },
            {
                id: 'in-progress',
                title: 'In Progress',
                color: '#FF9500',
                cards: [
                    { id: 'c4', title: 'Build feature', priority: 'urgent' as const },
                ],
            },
            {
                id: 'review',
                title: 'Review',
                color: '#5AC8FA',
                cards: [
                    { id: 'c5', title: 'Code review', priority: 'high' as const },
                ],
            },
            {
                id: 'testing',
                title: 'Testing',
                color: '#FF2D55',
                cards: [
                    { id: 'c6', title: 'QA testing', priority: 'medium' as const },
                ],
            },
            {
                id: 'done',
                title: 'Done',
                color: '#34C759',
                cards: [
                    { id: 'c7', title: 'Completed task', priority: 'low' as const },
                ],
            },
        ],
        variant: 'compact',
    },
};

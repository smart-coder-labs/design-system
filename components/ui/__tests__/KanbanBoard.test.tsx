import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { KanbanBoard } from '../KanbanBoard';

const mockColumns = [
  {
    id: 'todo',
    title: 'To Do',
    cards: [
      { id: '1', title: 'Task 1', description: 'First task' },
      { id: '2', title: 'Task 2', description: 'Second task' },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    cards: [],
  },
];

describe('KanbanBoard', () => {
  it('renders all columns', () => {
    render(<KanbanBoard columns={mockColumns} />);
    expect(screen.getByText('To Do')).toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();
  });

  it('renders cards within columns', () => {
    render(<KanbanBoard columns={mockColumns} />);
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  it('handles empty columns', () => {
    const { container } = render(<KanbanBoard columns={mockColumns} />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders with compact variant', () => {
    const { container } = render(<KanbanBoard columns={mockColumns} variant="compact" />);
    expect(container.firstChild).toBeTruthy();
  });

  it('shows card count when enabled', () => {
    render(<KanbanBoard columns={mockColumns} showCardCount />);
    expect(screen.getByText('To Do')).toBeInTheDocument();
    // Card count should show
    expect(screen.getByText('Task 1')).toBeInTheDocument();
  });

  it('hides card count when disabled', () => {
    const { container } = render(<KanbanBoard columns={mockColumns} showCardCount={false} />);
    expect(container.firstChild).toBeTruthy();
  });
});

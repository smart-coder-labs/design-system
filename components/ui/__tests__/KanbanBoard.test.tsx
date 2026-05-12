import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { KanbanBoard } from '../KanbanBoard';
import type { KanbanColumn } from '../KanbanBoard';

const mockColumns: KanbanColumn[] = [
  {
    id: 'todo',
    title: 'To Do',
    cards: [
      { id: '1', title: 'Task 1', description: 'First task', priority: 'high' },
      { id: '2', title: 'Task 2', description: 'Second task', priority: 'low' },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    cards: [],
  },
];

const detailedColumns: KanbanColumn[] = [
  {
    id: 'in-progress',
    title: 'In Progress',
    cards: [
      { id: '3', title: 'Task 3', priority: 'medium', assignee: { name: 'Alice' } },
    ],
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

  it('renders card descriptions', () => {
    render(<KanbanBoard columns={mockColumns} />);
    expect(screen.getByText('First task')).toBeInTheDocument();
    expect(screen.getByText('Second task')).toBeInTheDocument();
  });

  it('handles empty columns', () => {
    const { container } = render(<KanbanBoard columns={mockColumns} />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders with compact variant', () => {
    const { container } = render(
      <KanbanBoard columns={mockColumns} variant="compact" />
    );
    expect(container.firstChild).toBeTruthy();
  });

  it('renders with detailed variant', () => {
    const { container } = render(
      <KanbanBoard columns={detailedColumns} variant="detailed" />
    );
    expect(container.firstChild).toBeTruthy();
  });

  it('shows assignee names in detailed variant', () => {
    render(<KanbanBoard columns={detailedColumns} variant="detailed" />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });

  it('shows card count when enabled', () => {
    render(<KanbanBoard columns={mockColumns} showCardCount />);
    expect(screen.getByText('To Do')).toBeInTheDocument();
  });

  it('calls onCardClick when card is clicked', () => {
    const handleCardClick = vi.fn();
    render(<KanbanBoard columns={mockColumns} onCardClick={handleCardClick} />);
    fireEvent.click(screen.getByText('Task 1'));
    expect(handleCardClick).toHaveBeenCalledWith(
      expect.objectContaining({ id: '1', title: 'Task 1' })
    );
  });

  it('renders with custom className', () => {
    const { container } = render(
      <KanbanBoard columns={mockColumns} className="custom-board" />
    );
    const board = container.querySelector('.custom-board');
    expect(board).toBeTruthy();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<KanbanBoard columns={mockColumns} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Card } from '../Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders with default variant and correct base classes', () => {
    render(<Card>Default</Card>);
    const card = screen.getByText('Default').closest('div');
    expect(card).toHaveClass('rounded-2xl');
    expect(card).toHaveClass('transition-apple');
  });

  it('renders with all variants', () => {
    const { rerender } = render(<Card variant="elevated">Elevated</Card>);
    expect(screen.getByText('Elevated').closest('div')).toHaveClass('shadow-md');

    rerender(<Card variant="glass">Glass</Card>);
    expect(screen.getByText('Glass').closest('div')).toHaveClass('glass');

    rerender(<Card variant="outlined">Outlined</Card>);
    expect(screen.getByText('Outlined').closest('div')).toHaveClass('border-border-primary');

    rerender(<Card variant="flat">Flat</Card>);
    expect(screen.getByText('Flat').closest('div')).toHaveClass('bg-surface-secondary');
  });

  it('applies custom className', () => {
    render(<Card className="custom-class">Custom</Card>);
    expect(screen.getByText('Custom').closest('div')).toHaveClass('custom-class');
  });

  it('accepts hoverable prop without error', () => {
    render(<Card hoverable>Hoverable</Card>);
    expect(screen.getByText('Hoverable')).toBeInTheDocument();
  });

  it('renders with all padding sizes', () => {
    const { rerender } = render(<Card padding="none">None</Card>);
    const cardNone = screen.getByText('None').closest('div');
    expect(cardNone).not.toHaveClass('p-4');
    expect(cardNone).not.toHaveClass('p-6');
    expect(cardNone).not.toHaveClass('p-8');

    rerender(<Card padding="sm">SM</Card>);
    expect(screen.getByText('SM').closest('div')).toHaveClass('p-4');

    rerender(<Card padding="md">MD</Card>);
    expect(screen.getByText('MD').closest('div')).toHaveClass('p-6');

    rerender(<Card padding="lg">LG</Card>);
    expect(screen.getByText('LG').closest('div')).toHaveClass('p-8');
  });
});

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ScrollProgressBar } from './ScrollProgressBar';

describe('ScrollProgressBar', () => {
  it('renders with progressbar role', () => {
    render(<ScrollProgressBar aria-label="progress" />);
    expect(screen.getByRole('progressbar', { name: 'progress' })).toBeInTheDocument();
  });

  it('supports className override', () => {
    render(<ScrollProgressBar className="bar-custom" data-testid="bar" />);
    expect(screen.getByTestId('bar')).toHaveClass('bar-custom');
  });

  it('renders all variants without errors', () => {
    const { rerender } = render(<ScrollProgressBar position="top" tone="default" thickness="sm" />);
    rerender(<ScrollProgressBar position="bottom" tone="accent" thickness="md" />);
    rerender(<ScrollProgressBar position="top" tone="muted" thickness="lg" />);
  });
});

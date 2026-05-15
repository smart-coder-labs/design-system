import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InteractiveCursor, InteractiveCursorLayer } from './InteractiveCursor';

describe('InteractiveCursor', () => {
  it('renders wrapper and cursor layer', () => {
    render(
      <InteractiveCursor data-testid="root">
        <button className="interactive">Target</button>
        <InteractiveCursorLayer data-testid="cursor" />
      </InteractiveCursor>
    );

    expect(screen.getByTestId('root')).toBeInTheDocument();
    expect(screen.getByTestId('cursor')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Target' })).toBeInTheDocument();
  });

  it('supports className override', () => {
    render(<InteractiveCursor className="cursor-custom" data-testid="root" />);
    expect(screen.getByTestId('root')).toHaveClass('cursor-custom');
  });

  it('renders size and tone variants', () => {
    const { rerender } = render(<InteractiveCursor size="sm" tone="default" />);
    rerender(<InteractiveCursor size="md" tone="inverse" />);
    rerender(<InteractiveCursor size="lg" tone="accent" />);
  });
});

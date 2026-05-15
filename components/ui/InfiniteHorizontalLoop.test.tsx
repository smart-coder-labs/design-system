import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InfiniteHorizontalLoop, InfiniteHorizontalLoopItem, InfiniteHorizontalLoopTrack } from './InfiniteHorizontalLoop';

describe('InfiniteHorizontalLoop', () => {
  it('renders track and items', () => {
    render(
      <InfiniteHorizontalLoop data-testid="root">
        <InfiniteHorizontalLoopTrack data-testid="track">
          <InfiniteHorizontalLoopItem>One</InfiniteHorizontalLoopItem>
          <InfiniteHorizontalLoopItem>Two</InfiniteHorizontalLoopItem>
        </InfiniteHorizontalLoopTrack>
      </InfiniteHorizontalLoop>
    );

    expect(screen.getByTestId('root')).toBeInTheDocument();
    expect(screen.getByTestId('track')).toBeInTheDocument();
    expect(screen.getAllByText('One').length).toBeGreaterThan(0);
  });

  it('applies className', () => {
    render(<InfiniteHorizontalLoop className="loop-custom" data-testid="root" />);
    expect(screen.getByTestId('root')).toHaveClass('loop-custom');
  });

  it('renders direction variants', () => {
    const { rerender } = render(<InfiniteHorizontalLoop direction="left" />);
    rerender(<InfiniteHorizontalLoop direction="right" />);
  });
});

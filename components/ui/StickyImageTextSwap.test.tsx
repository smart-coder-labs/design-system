import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  StickyImageTextSwap,
  StickyImageTextSwapDescription,
  StickyImageTextSwapItem,
  StickyImageTextSwapMedia,
  StickyImageTextSwapTitle,
} from './StickyImageTextSwap';

describe('StickyImageTextSwap', () => {
  it('renders compound subcomponents', () => {
    render(
      <StickyImageTextSwap data-testid="root">
        <StickyImageTextSwapMedia data-testid="media" />
        <StickyImageTextSwapItem>
          <StickyImageTextSwapTitle>Title</StickyImageTextSwapTitle>
          <StickyImageTextSwapDescription>Description</StickyImageTextSwapDescription>
        </StickyImageTextSwapItem>
      </StickyImageTextSwap>
    );

    expect(screen.getByTestId('root')).toBeInTheDocument();
    expect(screen.getByTestId('media')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('supports className override', () => {
    render(<StickyImageTextSwap className="sticky-custom" data-testid="root" />);
    expect(screen.getByTestId('root')).toHaveClass('sticky-custom');
  });

  it('renders size variants', () => {
    const { rerender } = render(<StickyImageTextSwap size="sm" />);
    rerender(<StickyImageTextSwap size="md" />);
    rerender(<StickyImageTextSwap size="lg" />);
  });
});

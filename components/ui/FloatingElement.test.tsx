import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FloatingElement, FloatingElementContent } from './FloatingElement';

describe('FloatingElement', () => {
  it('renders compound content', () => {
    render(
      <FloatingElement data-testid="root">
        <FloatingElementContent data-testid="content">Item</FloatingElementContent>
      </FloatingElement>
    );

    expect(screen.getByTestId('root')).toBeInTheDocument();
    expect(screen.getByTestId('content')).toBeInTheDocument();
    expect(screen.getByText('Item')).toBeInTheDocument();
  });

  it('applies className override', () => {
    render(<FloatingElement className="custom-float" data-testid="root" />);
    expect(screen.getByTestId('root')).toHaveClass('custom-float');
  });

  it('renders variants safely', () => {
    const { rerender } = render(<FloatingElement intensity="subtle" />);
    rerender(<FloatingElement intensity="medium" />);
    rerender(<FloatingElement intensity="strong" />);
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AIThinkingIndicator } from './AIThinkingIndicator';

describe('AIThinkingIndicator', () => {
  it('renders without crashing', () => {
    const { container } = render(<AIThinkingIndicator />);
    expect(container).toBeInTheDocument();
  });

  it('renders dots variant by default', () => {
    const { container } = render(<AIThinkingIndicator />);
    const dots = container.querySelectorAll('.rounded-full');
    expect(dots.length).toBe(3);
  });

  it('renders pulse variant correctly', () => {
    const { container } = render(<AIThinkingIndicator variant="pulse" />);
    const dots = container.querySelectorAll('.rounded-full');
    expect(dots.length).toBe(1);
  });

  it('renders wave variant correctly', () => {
    const { container } = render(<AIThinkingIndicator variant="wave" />);
    const bars = container.querySelectorAll('.rounded-full');
    expect(bars.length).toBe(4);
  });

  it('renders with custom message', () => {
    render(<AIThinkingIndicator message="Processing..." />);
    expect(screen.getByText('Processing...')).toBeInTheDocument();
  });

  it('does not render message when empty', () => {
    const { container } = render(<AIThinkingIndicator message="" />);
    expect(container.querySelector('span')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<AIThinkingIndicator className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('uses CSS variable for color instead of hardcoded rgb', () => {
    const { container } = render(<AIThinkingIndicator />);
    const dot = container.querySelector('.rounded-full');
    const style = dot?.getAttribute('style') || '';
    // Should use CSS variable, not hardcoded rgb
    expect(style).not.toContain('rgb(0, 122, 255)');
  });

  it('accepts custom color prop', () => {
    const { container } = render(<AIThinkingIndicator color="#ff0000" />);
    const dot = container.querySelector('.rounded-full');
    const style = dot?.getAttribute('style') || '';
    expect(style).toContain('#ff0000');
  });

  describe('variants (cva)', () => {
    it('applies size sm correctly', () => {
      const { container } = render(<AIThinkingIndicator size="sm" />);
      const dot = container.querySelector('.rounded-full');
      // sm size should have w-1.5 h-1.5 classes
      expect(dot?.classList.contains('w-1.5')).toBe(true);
    });

    it('applies size md correctly', () => {
      const { container } = render(<AIThinkingIndicator size="md" />);
      const dot = container.querySelector('.rounded-full');
      expect(dot?.classList.contains('w-2')).toBe(true);
    });

    it('applies size lg correctly', () => {
      const { container } = render(<AIThinkingIndicator size="lg" />);
      const dot = container.querySelector('.rounded-full');
      expect(dot?.classList.contains('w-2.5')).toBe(true);
    });
  });

  describe('accessibility', () => {
    it('has proper role when message is present', () => {
      render(<AIThinkingIndicator message="Loading" />);
      const container = screen.getByText('Loading').parentElement;
      expect(container).toHaveAttribute('role', 'status');
    });
  });
});
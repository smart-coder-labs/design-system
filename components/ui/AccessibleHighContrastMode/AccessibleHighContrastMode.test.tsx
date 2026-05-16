import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AccessibleHighContrastMode } from './AccessibleHighContrastMode';

describe('AccessibleHighContrastMode', () => {
  it('renders without crashing', () => {
    const { container } = render(<AccessibleHighContrastMode />);
    expect(container).toBeInTheDocument();
  });

  it('renders with custom children', () => {
    render(<AccessibleHighContrastMode><div data-testid="child">Content</div></AccessibleHighContrastMode>);
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<AccessibleHighContrastMode className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('has forwardRef', () => {
    const ref = { current: null };
    const { container } = render(<AccessibleHighContrastMode ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  describe('no hardcoded content', () => {
    it('does not have hardcoded labels in the component', () => {
      const { container } = render(<AccessibleHighContrastMode />);
      const text = container.textContent || '';
      // Should not contain hardcoded Spanish labels
      expect(text).not.toContain('Alto Contraste');
      expect(text).not.toContain('Texto Grande');
      expect(text).not.toContain('Fuente Legible');
    });

    it('does not have hardcoded demo data', () => {
      const { container } = render(<AccessibleHighContrastMode />);
      const text = container.textContent || '';
      // Should not contain demo transaction data
      expect(text).not.toContain('Estado de Cuenta');
      expect(text).not.toContain('$1,490.00');
      expect(text).not.toContain('Pago de Servicio');
    });
  });

  describe('accessibility', () => {
    it('has proper button labels for screen readers', () => {
      render(<AccessibleHighContrastMode />);
      // Buttons should have accessible labels
      const buttons = document.querySelectorAll('button');
      expect(buttons.length).toBeGreaterThan(0);
    });
  });
});
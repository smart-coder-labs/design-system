import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UnscramblingText, UnscramblingTextOutput } from './UnscramblingText';

describe('UnscramblingText', () => {
  it('renders output subcomponent', () => {
    render(
      <UnscramblingText text="Signal" data-testid="root">
        <UnscramblingTextOutput data-testid="output" />
      </UnscramblingText>
    );

    expect(screen.getByTestId('root')).toBeInTheDocument();
    expect(screen.getByTestId('output')).toBeInTheDocument();
  });

  it('supports className override', () => {
    render(<UnscramblingText text="Signal" className="text-custom" data-testid="root" />);
    expect(screen.getByTestId('root')).toHaveClass('text-custom');
  });

  it('renders variants safely', () => {
    const { rerender } = render(<UnscramblingText text="A" size="sm" tone="default" />);
    rerender(<UnscramblingText text="A" size="md" tone="accent" />);
    rerender(<UnscramblingText text="A" size="lg" tone="muted" />);
  });
});

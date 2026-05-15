import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  ScrollRevealCards,
  ScrollRevealCardsDescription,
  ScrollRevealCardsIcon,
  ScrollRevealCardsItem,
  ScrollRevealCardsTitle,
} from './ScrollRevealCards';

describe('ScrollRevealCards', () => {
  it('renders item subcomponents', () => {
    render(
      <ScrollRevealCards data-testid="root">
        <ScrollRevealCardsItem>
          <ScrollRevealCardsIcon>*</ScrollRevealCardsIcon>
          <ScrollRevealCardsTitle>Title</ScrollRevealCardsTitle>
          <ScrollRevealCardsDescription>Description</ScrollRevealCardsDescription>
        </ScrollRevealCardsItem>
      </ScrollRevealCards>
    );

    expect(screen.getByTestId('root')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('supports className override', () => {
    render(<ScrollRevealCards className="cards-custom" data-testid="root" />);
    expect(screen.getByTestId('root')).toHaveClass('cards-custom');
  });

  it('renders column variants', () => {
    const { rerender } = render(<ScrollRevealCards columns={2} />);
    rerender(<ScrollRevealCards columns={3} />);
    rerender(<ScrollRevealCards columns={4} />);
  });
});

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  ImmersiveHero,
  ImmersiveHeroBackground,
  ImmersiveHeroContent,
  ImmersiveHeroOverlay,
  ImmersiveHeroSubtitle,
  ImmersiveHeroTitle,
} from './ImmersiveHero';

describe('ImmersiveHero', () => {
  it('renders all subcomponents', () => {
    render(
      <ImmersiveHero data-testid="root" backgroundImage="/image.png">
        <ImmersiveHeroBackground data-testid="bg" />
        <ImmersiveHeroOverlay data-testid="overlay" />
        <ImmersiveHeroContent>
          <ImmersiveHeroTitle>Heading</ImmersiveHeroTitle>
          <ImmersiveHeroSubtitle>Subheading</ImmersiveHeroSubtitle>
        </ImmersiveHeroContent>
      </ImmersiveHero>
    );

    expect(screen.getByTestId('root')).toBeInTheDocument();
    expect(screen.getByTestId('bg')).toBeInTheDocument();
    expect(screen.getByTestId('overlay')).toBeInTheDocument();
    expect(screen.getByText('Heading')).toBeInTheDocument();
  });

  it('supports className', () => {
    render(<ImmersiveHero className="hero-custom" data-testid="root" />);
    expect(screen.getByTestId('root')).toHaveClass('hero-custom');
  });

  it('renders size variants', () => {
    const { rerender } = render(<ImmersiveHero size="sm" />);
    rerender(<ImmersiveHero size="md" />);
    rerender(<ImmersiveHero size="full" />);
  });
});

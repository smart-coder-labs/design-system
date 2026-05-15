import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ParallaxBanner, ParallaxBannerContent, ParallaxBannerMedia, ParallaxBannerOverlay } from './ParallaxBanner';

describe('ParallaxBanner', () => {
  it('renders media, overlay, and content', () => {
    render(
      <ParallaxBanner data-testid="root" imageSrc="/image.png">
        <ParallaxBannerMedia data-testid="media" />
        <ParallaxBannerOverlay data-testid="overlay" />
        <ParallaxBannerContent>Banner</ParallaxBannerContent>
      </ParallaxBanner>
    );

    expect(screen.getByTestId('root')).toBeInTheDocument();
    expect(screen.getByTestId('media')).toBeInTheDocument();
    expect(screen.getByTestId('overlay')).toBeInTheDocument();
    expect(screen.getByText('Banner')).toBeInTheDocument();
  });

  it('supports className override', () => {
    render(<ParallaxBanner className="banner-custom" data-testid="root" />);
    expect(screen.getByTestId('root')).toHaveClass('banner-custom');
  });

  it('renders size variants', () => {
    const { rerender } = render(<ParallaxBanner size="sm" />);
    rerender(<ParallaxBanner size="md" />);
    rerender(<ParallaxBanner size="lg" />);
  });
});

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ParallaxStoryStage, ParallaxStoryStagePanel, ParallaxStoryStageTrack } from './ParallaxStoryStage';

describe('ParallaxStoryStage', () => {
  it('renders track and panel subcomponents', () => {
    render(
      <ParallaxStoryStage data-testid="root">
        <ParallaxStoryStageTrack data-testid="track">
          <ParallaxStoryStagePanel>Scene</ParallaxStoryStagePanel>
        </ParallaxStoryStageTrack>
      </ParallaxStoryStage>
    );

    expect(screen.getByTestId('root')).toBeInTheDocument();
    expect(screen.getByTestId('track')).toBeInTheDocument();
    expect(screen.getByText('Scene')).toBeInTheDocument();
  });

  it('supports className override', () => {
    render(<ParallaxStoryStage className="stage-custom" data-testid="root" />);
    expect(screen.getByTestId('root')).toHaveClass('stage-custom');
  });

  it('renders size variants', () => {
    const { rerender } = render(<ParallaxStoryStage size="md" />);
    rerender(<ParallaxStoryStage size="lg" />);
  });
});

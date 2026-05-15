import * as React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ComicPanel, ComicPanelContent, ComicPanelTexture } from './ComicPanel';

describe('ComicPanel', () => {
  it('renders compound parts', () => {
    render(
      <ComicPanel data-testid="root">
        <ComicPanelTexture data-testid="texture" />
        <ComicPanelContent>Body</ComicPanelContent>
      </ComicPanel>
    );

    expect(screen.getByTestId('root')).toBeInTheDocument();
    expect(screen.getByTestId('texture')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
  });

  it('applies className overrides', () => {
    render(<ComicPanel className="custom-panel" data-testid="root" />);
    expect(screen.getByTestId('root')).toHaveClass('custom-panel');
  });

  it('renders all variants without crashing', () => {
    const { rerender } = render(<ComicPanel direction="left" tone="default" />);
    rerender(<ComicPanel direction="right" tone="accent" />);
    rerender(<ComicPanel direction="left" tone="muted" />);
  });
});

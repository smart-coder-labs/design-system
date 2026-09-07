import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../Collapsible';

const renderCollapsible = (defaultOpen = false) =>
  render(
    <Collapsible defaultOpen={defaultOpen}>
      <CollapsibleTrigger>Toggle</CollapsibleTrigger>
      <CollapsibleContent data-testid="content">
        <a href="https://example.com">Hidden link</a>
      </CollapsibleContent>
    </Collapsible>
  );

describe('Collapsible', () => {
  it('renders the trigger and content', () => {
    renderCollapsible();
    expect(screen.getByText('Toggle')).toBeInTheDocument();
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('toggles open state on trigger click', async () => {
    const user = userEvent.setup();
    renderCollapsible();

    expect(screen.getByText('Toggle')).toHaveAttribute('aria-expanded', 'false');
    await user.click(screen.getByText('Toggle'));
    expect(screen.getByText('Toggle')).toHaveAttribute('aria-expanded', 'true');
  });

  it('marks collapsed content as inert and hidden so it is not focusable', async () => {
    const user = userEvent.setup();
    renderCollapsible();

    const content = screen.getByTestId('content');
    const animated = content.firstElementChild as HTMLElement;

    // Closed: aria-hidden subtree must also be inert + visually hidden
    expect(content).toHaveAttribute('aria-hidden', 'true');
    expect(content).toHaveAttribute('inert');
    expect(animated).toHaveStyle({ visibility: 'hidden' });

    // Opening reveals the content synchronously so the expand animation is visible
    await user.click(screen.getByText('Toggle'));
    expect(content).toHaveAttribute('aria-hidden', 'false');
    expect(content).not.toHaveAttribute('inert');
    expect(animated).toHaveStyle({ visibility: 'visible' });
  });

  it('keeps the collapse animation visible and hides only once it completes', async () => {
    const user = userEvent.setup();
    renderCollapsible(true);

    const content = screen.getByTestId('content');
    const animated = content.firstElementChild as HTMLElement;
    expect(animated).toHaveStyle({ visibility: 'visible' });

    await user.click(screen.getByText('Toggle'));
    // inert applies immediately so the subtree leaves the tab order right away,
    // while visibility stays `visible` until the collapse animation has finished.
    expect(content).toHaveAttribute('inert');
    expect(animated).toHaveStyle({ visibility: 'visible' });
  });
});

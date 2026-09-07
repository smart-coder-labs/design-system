import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { axe } from 'vitest-axe';
import { SplitButton } from './SplitButton';

// Custom matcher using axe directly
async function assertNoViolations(container: HTMLElement) {
  const results = await axe(container);
  expect(results.violations).toHaveLength(0);
}

const actions = [
  { label: 'Duplicate', onClick: vi.fn() },
  { label: 'Archive', onClick: vi.fn() },
  { label: 'Delete', onClick: vi.fn() },
];

function renderSplitButton(props: Partial<React.ComponentProps<typeof SplitButton>> = {}) {
  return render(
    <SplitButton label="Save" onClick={vi.fn()} actions={actions} {...props} />
  );
}

describe('SplitButton', () => {
  it('renders the primary action and the dropdown trigger', () => {
    renderSplitButton();
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'More Save actions' })).toBeInTheDocument();
  });

  describe('accessible name for the dropdown trigger', () => {
    it('derives a default accessible name from the label', () => {
      renderSplitButton();
      expect(screen.getByRole('button', { name: 'More Save actions' })).toBeInTheDocument();
    });

    it('honours a custom dropdownAriaLabel', () => {
      renderSplitButton({ dropdownAriaLabel: 'Save options' });
      expect(screen.getByRole('button', { name: 'Save options' })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'More Save actions' })).not.toBeInTheDocument();
    });
  });

  it('exposes aria-haspopup and toggles aria-expanded', async () => {
    const user = userEvent.setup();
    renderSplitButton();
    const trigger = screen.getByRole('button', { name: 'More Save actions' });

    expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders the actions as menu items inside a menu', async () => {
    const user = userEvent.setup();
    renderSplitButton();

    await user.click(screen.getByRole('button', { name: 'More Save actions' }));

    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();
    const items = screen.getAllByRole('menuitem');
    expect(items).toHaveLength(3);
    expect(items.map((item) => item.textContent)).toEqual(['Duplicate', 'Archive', 'Delete']);
  });

  it('opens with ArrowDown from the trigger and focuses the first item', async () => {
    const user = userEvent.setup();
    renderSplitButton();
    const trigger = screen.getByRole('button', { name: 'More Save actions' });

    trigger.focus();
    await user.keyboard('{ArrowDown}');

    const items = await screen.findAllByRole('menuitem');
    await waitFor(() => expect(items[0]).toHaveFocus());
  });

  it('closes on Escape and returns focus to the trigger', async () => {
    const user = userEvent.setup();
    renderSplitButton();
    const trigger = screen.getByRole('button', { name: 'More Save actions' });

    await user.click(trigger);
    expect(screen.getByRole('menu')).toBeInTheDocument();

    await user.keyboard('{Escape}');

    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
    expect(trigger).toHaveFocus();
  });

  it('fires the action onClick and closes the menu', async () => {
    const user = userEvent.setup();
    const onArchive = vi.fn();
    renderSplitButton({
      actions: [
        { label: 'Duplicate', onClick: vi.fn() },
        { label: 'Archive', onClick: onArchive },
      ],
    });

    await user.click(screen.getByRole('button', { name: 'More Save actions' }));
    await user.click(screen.getByRole('menuitem', { name: 'Archive' }));

    expect(onArchive).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  });

  describe('accessibility', () => {
    it('has no accessibility violations when closed', async () => {
      // axe initializes its ruleset lazily on first call — allow extra time
      const { container } = renderSplitButton();
      await assertNoViolations(container);
    }, 15000);

    it('has no accessibility violations when open', async () => {
      const user = userEvent.setup();
      const { container } = renderSplitButton();

      await user.click(screen.getByRole('button', { name: 'More Save actions' }));
      expect(screen.getByRole('menu')).toBeInTheDocument();

      await assertNoViolations(container);
    }, 15000);
  });
});

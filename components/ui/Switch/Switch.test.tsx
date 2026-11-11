import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { axe } from 'vitest-axe';
import { Switch } from './Switch';

/** Minimal controlled wrapper: the Switch holds no state of its own. */
function SwitchHarness({ initial = false }: { initial?: boolean }) {
  const [checked, setChecked] = React.useState(initial);
  return <Switch checked={checked} onCheckedChange={setChecked} label="Enable notifications" />;
}

async function assertNoViolations(container: HTMLElement) {
  const results = await axe(container);
  expect(results.violations).toHaveLength(0);
}

describe('Switch', () => {
  it('renders a switch with an accessible name from its label', () => {
    render(<Switch label="Enable notifications" />);
    expect(screen.getByRole('switch', { name: 'Enable notifications' })).toBeInTheDocument();
  });

  it('exposes the description as the accessible description', () => {
    render(
      <Switch label="Dark Mode" description="Toggle between light and dark theme" />
    );
    expect(screen.getByRole('switch', { name: 'Dark Mode' })).toHaveAccessibleDescription(
      'Toggle between light and dark theme'
    );
  });

  it('can be named with aria-label when there is no visible label', () => {
    render(<Switch aria-label="Enable sync" />);
    expect(screen.getByRole('switch', { name: 'Enable sync' })).toBeInTheDocument();
  });

  it('is unchecked when checked is false', () => {
    render(<Switch checked={false} aria-label="Unchecked" />);
    expect(screen.getByRole('switch')).not.toBeChecked();
  });

  it('is unchecked by default', () => {
    render(<Switch aria-label="Default" />);
    expect(screen.getByRole('switch')).not.toBeChecked();
  });

  it('is checked when checked is true', () => {
    render(<Switch checked aria-label="Checked" />);
    expect(screen.getByRole('switch')).toBeChecked();
  });

  it('calls onCheckedChange with true when clicked while off', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Switch checked={false} onCheckedChange={onCheckedChange} aria-label="Toggle" />);

    await user.click(screen.getByRole('switch'));

    expect(onCheckedChange).toHaveBeenCalledTimes(1);
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('calls onCheckedChange with false when clicked while on', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Switch checked onCheckedChange={onCheckedChange} aria-label="Toggle" />);

    await user.click(screen.getByRole('switch'));

    expect(onCheckedChange).toHaveBeenCalledTimes(1);
    expect(onCheckedChange).toHaveBeenCalledWith(false);
  });

  it('toggles the rendered state on click when wired to state', async () => {
    const user = userEvent.setup();
    render(<SwitchHarness />);
    const toggle = screen.getByRole('switch', { name: 'Enable notifications' });

    expect(toggle).not.toBeChecked();
    await user.click(toggle);
    expect(toggle).toBeChecked();
    await user.click(toggle);
    expect(toggle).not.toBeChecked();
  });

  it('toggles once when Space is pressed', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Switch checked={false} onCheckedChange={onCheckedChange} aria-label="Toggle" />);

    const toggle = screen.getByRole('switch');
    toggle.focus();
    await user.keyboard('[Space]');

    expect(onCheckedChange).toHaveBeenCalledTimes(1);
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('toggles once when Enter is pressed', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Switch checked onCheckedChange={onCheckedChange} aria-label="Toggle" />);

    const toggle = screen.getByRole('switch');
    toggle.focus();
    await user.keyboard('{Enter}');

    expect(onCheckedChange).toHaveBeenCalledTimes(1);
    expect(onCheckedChange).toHaveBeenCalledWith(false);
  });

  it('toggles the rendered state with the keyboard when wired to state', async () => {
    const user = userEvent.setup();
    render(<SwitchHarness />);
    const toggle = screen.getByRole('switch', { name: 'Enable notifications' });

    toggle.focus();
    await user.keyboard('[Space]');

    expect(toggle).toBeChecked();
  });

  it('is disabled when disabled is true', () => {
    render(<Switch disabled aria-label="Disabled" />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  it('does not toggle on click when disabled', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(
      <Switch disabled checked={false} onCheckedChange={onCheckedChange} aria-label="Disabled" />
    );

    const toggle = screen.getByRole('switch');
    await user.click(toggle);

    expect(onCheckedChange).not.toHaveBeenCalled();
    expect(toggle).not.toBeChecked();
  });

  it('does not toggle on keyboard activation when disabled', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(
      <Switch disabled checked={false} onCheckedChange={onCheckedChange} aria-label="Disabled" />
    );

    const toggle = screen.getByRole('switch');
    toggle.focus();
    await user.keyboard('[Space]');
    await user.keyboard('{Enter}');

    expect(onCheckedChange).not.toHaveBeenCalled();
    expect(toggle).not.toBeChecked();
  });

  it('does not throw when clicked without an onCheckedChange handler', async () => {
    const user = userEvent.setup();
    render(<Switch aria-label="No handler" />);

    const toggle = screen.getByRole('switch');
    await user.click(toggle);

    expect(toggle).not.toBeChecked();
  });

  it('applies a custom className to the switch', () => {
    render(<Switch className="custom-class" aria-label="Custom" />);
    expect(screen.getByRole('switch')).toHaveClass('custom-class');
  });

  it.each([
    ['sm', ['w-9', 'h-5']],
    ['md', ['w-11', 'h-6']],
    ['lg', ['w-14', 'h-8']],
  ] as const)('renders the %s size classes', (size, classes) => {
    render(<Switch size={size} aria-label={`Size ${size}`} />);
    expect(screen.getByRole('switch')).toHaveClass(...classes);
  });

  it('renders the md size classes by default', () => {
    render(<Switch aria-label="Default size" />);
    expect(screen.getByRole('switch')).toHaveClass('w-11', 'h-6');
  });

  it('has no accessibility violations when labelled', async () => {
    // axe initializes its ruleset lazily on first call — allow extra time
    const { container } = render(
      <Switch checked label="Enable notifications" description="Receive push alerts" />
    );
    await assertNoViolations(container);
  }, 15000);

  it('has no accessibility violations when disabled', async () => {
    const { container } = render(<Switch disabled label="Enable notifications" />);
    await assertNoViolations(container);
  });
});

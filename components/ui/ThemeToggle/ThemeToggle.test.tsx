import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { ThemeToggle } from './ThemeToggle';

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
    delete document.documentElement.dataset.theme;
  });

  afterEach(() => {
    cleanup();
  });

  it('notifies the resolved mode/theme once on mount (defaultMode)', () => {
    const onModeChange = vi.fn();
    render(<ThemeToggle defaultMode="dark" onModeChange={onModeChange} />);

    expect(onModeChange).toHaveBeenCalledTimes(1);
    expect(onModeChange).toHaveBeenCalledWith('dark', 'dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(document.documentElement.dataset.theme).toBe('dark');
  });

  it('notifies the stored preference on mount', () => {
    const onModeChange = vi.fn();
    localStorage.setItem('theme', 'dark');

    render(<ThemeToggle defaultMode="light" onModeChange={onModeChange} />);

    expect(onModeChange).toHaveBeenCalledTimes(1);
    expect(onModeChange).toHaveBeenCalledWith('dark', 'dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('resolves the system preference on mount', () => {
    const onModeChange = vi.fn();
    render(<ThemeToggle defaultMode="system" onModeChange={onModeChange} />);

    // matchMedia is mocked with `matches: false` in test-setup.ts => light
    expect(onModeChange).toHaveBeenCalledTimes(1);
    expect(onModeChange).toHaveBeenCalledWith('system', 'light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(document.documentElement.dataset.theme).toBe('light');
  });

  it('does not re-notify when the parent re-renders with a new callback identity', () => {
    const onModeChange = vi.fn();
    const { rerender } = render(<ThemeToggle defaultMode="dark" onModeChange={onModeChange} />);

    rerender(<ThemeToggle defaultMode="dark" onModeChange={(...args) => onModeChange(...args)} />);

    expect(onModeChange).toHaveBeenCalledTimes(1);
  });

  it('notifies again (without duplicating the mount call) when the user toggles', () => {
    const onModeChange = vi.fn();
    render(<ThemeToggle defaultMode="light" onModeChange={onModeChange} />);

    expect(onModeChange).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByRole('switch'));

    expect(onModeChange).toHaveBeenCalledTimes(2);
    expect(onModeChange).toHaveBeenLastCalledWith('dark', 'dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
  });
});

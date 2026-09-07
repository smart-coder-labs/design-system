import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { ThemeToggle } from '../ThemeToggle';

const resetDocumentTheme = () => {
  const root = document.documentElement;
  root.classList.remove('dark');
  delete root.dataset.theme;
  root.style.colorScheme = '';
};

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    resetDocumentTheme();
  });

  it('names the switch after the action it performs in light mode', () => {
    render(<ThemeToggle defaultMode="light" />);
    const toggle = screen.getByRole('switch');
    expect(toggle).toHaveAccessibleName('Cambiar a modo oscuro');
    expect(toggle).toHaveAttribute('aria-checked', 'false');
  });

  it('flips the accessible name when the theme changes', async () => {
    const user = userEvent.setup();
    render(<ThemeToggle defaultMode="light" />);
    const toggle = screen.getByRole('switch');

    await user.click(toggle);

    expect(toggle).toHaveAttribute('aria-checked', 'true');
    expect(toggle).toHaveAccessibleName('Cambiar a modo claro');
  });

  it('adopts a dark theme already applied to <html> when nothing is stored', () => {
    document.documentElement.classList.add('dark');

    render(<ThemeToggle />);

    const toggle = screen.getByRole('switch');
    expect(toggle).toHaveAttribute('aria-checked', 'true');
    expect(toggle).toHaveAccessibleName('Cambiar a modo claro');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(screen.getByText('Modo oscuro activo')).toBeInTheDocument();
  });

  it('keeps a stored preference above the theme applied to <html>', () => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'light');

    render(<ThemeToggle />);

    const toggle = screen.getByRole('switch');
    expect(toggle).toHaveAttribute('aria-checked', 'false');
    expect(toggle).toHaveAccessibleName('Cambiar a modo oscuro');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('marks the Auto button as pressed while following the system preference', () => {
    render(<ThemeToggle defaultMode="system" />);
    expect(screen.getByRole('button', { name: /auto/i })).toHaveAttribute('aria-pressed', 'true');
  });
});

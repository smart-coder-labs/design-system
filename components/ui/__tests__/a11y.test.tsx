import { describe, it, expect, afterEach } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { axe } from 'vitest-axe';
import { Button } from '../Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../Card';
import { Checkbox } from '../Checkbox';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar';
import { ThemeToggle } from '../ThemeToggle';

// Custom matcher using axe directly
async function assertNoViolations(container: HTMLElement) {
  const results = await axe(container);
  expect(results.violations).toHaveLength(0);
}

describe('Accessibility - Button', () => {
  it('has no accessibility violations', async () => {
    // axe initializes its ruleset lazily on first call — allow extra time
    const { container } = render(<Button>Click me</Button>);
    await assertNoViolations(container);
  }, 15000);

  it('has no violations with icon', async () => {
    const { container } = render(
      <Button leftIcon={<span data-testid="icon">*</span>}>
        With Icon
      </Button>
    );
    await assertNoViolations(container);
  });

  it('has no violations when disabled', async () => {
    const { container } = render(<Button disabled>Disabled</Button>);
    await assertNoViolations(container);
  });

  it('has no violations for all variants', async () => {
    for (const variant of ['primary', 'secondary', 'ghost', 'subtle', 'outline', 'destructive'] as const) {
      const { container } = render(<Button variant={variant}>{variant}</Button>);
      await assertNoViolations(container);
    }
  });
});

describe('Accessibility - Card', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Description text</CardDescription>
        </CardHeader>
        <CardContent>Content here</CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>
    );
    await assertNoViolations(container);
  });
});

describe('Accessibility - Checkbox', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(
      <label>
        <Checkbox />
        Accept terms
      </label>
    );
    await assertNoViolations(container);
  });

  it('has no violations when checked', async () => {
    const { container } = render(
      <label>
        <Checkbox checked />
        Checked
      </label>
    );
    await assertNoViolations(container);
  });

  it('has no violations when disabled', async () => {
    const { container } = render(
      <label>
        <Checkbox disabled />
        Disabled
      </label>
    );
    await assertNoViolations(container);
  });
});

describe('Accessibility - Avatar', () => {
  it('has no accessibility violations with image and alt text', async () => {
    const { container } = render(
      <Avatar>
        {/* Use a data URI to keep the test hermetic (no network dependency) */}
      <AvatarImage src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23ccc'/%3E%3C/svg%3E" alt="User profile photo" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    await assertNoViolations(container);
  });

  it('has no violations with fallback only', async () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    await assertNoViolations(container);
  });
});

describe('Accessibility - ThemeToggle', () => {
  afterEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('exposes an accessible name derived from the active theme', () => {
    render(<ThemeToggle defaultMode="light" storageKey="a11y-theme" />);

    // Light mode active -> the control announces the action it performs.
    const control = screen.getByRole('switch', { name: 'Switch to dark mode' });

    fireEvent.click(control);

    // Dark mode active -> the name must flip, never go stale.
    expect(screen.getByRole('switch')).toHaveAccessibleName('Switch to light mode');
    expect(screen.queryByRole('switch', { name: 'Switch to dark mode' })).toBeNull();
  });

  it('lets a caller-supplied aria-label win over the derived default', () => {
    render(<ThemeToggle defaultMode="light" storageKey="a11y-theme" aria-label="Cambiar tema" />);

    expect(screen.getByRole('switch')).toHaveAccessibleName('Cambiar tema');
  });
});

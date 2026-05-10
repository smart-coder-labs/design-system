import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { axe } from 'vitest-axe';
import { Button } from '../Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../Card';
import { Checkbox } from '../Checkbox';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar';

// Custom matcher using axe directly
async function assertNoViolations(container: HTMLElement) {
  const results = await axe(container);
  expect(results.violations).toHaveLength(0);
}

describe('Accessibility - Button', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Click me</Button>);
    await assertNoViolations(container);
  });

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
        <AvatarImage src="https://example.com/photo.jpg" alt="User profile photo" />
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

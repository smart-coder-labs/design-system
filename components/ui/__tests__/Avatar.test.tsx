import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar';

describe('Avatar', () => {
  it('renders as a div with default classes', () => {
    const { container } = render(<Avatar />);
    const el = container.firstChild as HTMLElement;
    expect(el).toBeInTheDocument();
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('rounded-full');
    expect(el).toHaveClass('h-10');
    expect(el).toHaveClass('w-10');
  });

  it('renders with all sizes', () => {
    const { rerender } = render(<Avatar size="xs" data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('h-6');

    rerender(<Avatar size="sm" data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('h-8');

    rerender(<Avatar size="md" data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('h-10');

    rerender(<Avatar size="lg" data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('h-12');

    rerender(<Avatar size="xl" data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('h-16');

    rerender(<Avatar size="2xl" data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('h-24');
    expect(screen.getByTestId('avatar')).toHaveClass('w-24');
  });

  it('renders with circle shape by default', () => {
    render(<Avatar data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('rounded-full');
  });

  it('renders with square shape', () => {
    render(<Avatar shape="square" data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('rounded-lg');
  });

  it('applies custom className', () => {
    render(<Avatar className="custom-class" data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('custom-class');
  });

  it('renders children', () => {
    render(
      <Avatar data-testid="avatar">
        <span data-testid="child">child</span>
      </Avatar>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('renders AvatarImage with correct src and alt', () => {
    render(
      <Avatar>
        <AvatarImage src="https://example.com/avatar.jpg" alt="User name" />
      </Avatar>
    );
    const img = screen.getByAltText('User name');
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('renders AvatarFallback text', () => {
    render(
      <Avatar>
        <AvatarFallback data-testid="fallback">CR</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByTestId('fallback').textContent).toContain('CR');
  });
});

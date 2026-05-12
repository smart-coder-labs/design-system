import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  it('renders as a checkbox input', () => {
    render(<Checkbox aria-label="Accept terms" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('starts unchecked by default', () => {
    render(<Checkbox aria-label="Default" />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('renders checked when checked prop is true', () => {
    render(<Checkbox checked={true} aria-label="Checked" />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('renders unchecked when checked prop is false', () => {
    render(<Checkbox checked={false} aria-label="Unchecked" />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('handles defaultChecked', () => {
    render(<Checkbox defaultChecked aria-label="Default checked" />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('calls onCheckedChange when toggled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox onCheckedChange={onChange} aria-label="Toggle" />);
    await user.click(screen.getByRole('checkbox'));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('does not call onCheckedChange when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox disabled onCheckedChange={onChange} aria-label="Disabled" />);
    await user.click(screen.getByRole('checkbox'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Checkbox disabled aria-label="Disabled checkbox" />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('applies custom className', () => {
    render(<Checkbox className="custom-class" aria-label="Custom" />);
    expect(screen.getByRole('checkbox')).toHaveClass('custom-class');
  });

  it('has proper aria attributes for indeterminate state', () => {
    render(<Checkbox checked="indeterminate" aria-label="Indeterminate" />);
    const cb = screen.getByRole('checkbox');
    expect(cb).toHaveAttribute('data-state', 'indeterminate');
  });
});

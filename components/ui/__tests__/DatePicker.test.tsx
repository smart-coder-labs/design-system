import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { DatePicker } from '../DatePicker';

describe('DatePicker', () => {
  it('renders the label when provided', () => {
    render(<DatePicker label="Start date" />);
    expect(screen.getByText('Start date')).toBeInTheDocument();
  });

  it('renders placeholder text', () => {
    render(<DatePicker placeholder="Pick a date" />);
    expect(screen.getByPlaceholderText('Pick a date')).toBeInTheDocument();
  });

  it('renders with default placeholder', () => {
    render(<DatePicker />);
    expect(screen.getByPlaceholderText('Select date')).toBeInTheDocument();
  });

  it('renders helper text when provided', () => {
    render(<DatePicker helperText="Choose your birth date" />);
    expect(screen.getByText('Choose your birth date')).toBeInTheDocument();
  });

  it('renders error message when provided', () => {
    render(<DatePicker error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('can be disabled', () => {
    render(<DatePicker disabled label="Disabled picker" />);
    expect(screen.getByText('Disabled picker')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { container } = render(<DatePicker size="lg" />);
    expect(container.firstChild).toBeTruthy();
  });

  it('accepts min and max dates', () => {
    const { container } = render(
      <DatePicker minDate={new Date('2024-01-01')} maxDate={new Date('2024-12-31')} />
    );
    expect(container.firstChild).toBeTruthy();
  });
});

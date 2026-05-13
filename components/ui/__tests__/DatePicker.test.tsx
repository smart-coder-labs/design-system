import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'vitest-axe';
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
    const input = screen.getByPlaceholderText('Select date');
    expect(input).toBeDisabled();
  });

  it('opens calendar on input click', () => {
    render(<DatePicker />);
    const input = screen.getByPlaceholderText('Select date');
    fireEvent.click(input);
    // Calendar should show month/year
    expect(screen.getByText(/January|February|March|April|May|June|July|August|September|October|November|December/)).toBeInTheDocument();
  });

  it('calls onChange when Today button is clicked', () => {
    const handleChange = vi.fn();
    render(<DatePicker onChange={handleChange} />);

    const input = screen.getByPlaceholderText('Select date');
    fireEvent.click(input);
    fireEvent.click(screen.getByText('Today'));

    expect(handleChange).toHaveBeenCalled();
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

  it('renders with initial value', () => {
    const date = new Date(2025, 5, 15);
    render(<DatePicker value={date} />);
    expect(screen.getByDisplayValue(/2025/)).toBeInTheDocument();
  });

  it('renders with short date format', () => {
    const date = new Date(2025, 0, 15);
    render(<DatePicker value={date} dateFormat="short" />);
    expect(screen.getByDisplayValue(/2025/)).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<DatePicker label="Pick a date" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

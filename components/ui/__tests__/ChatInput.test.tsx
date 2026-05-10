import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ChatInput } from '../ChatInput';

describe('ChatInput', () => {
  it('renders with default placeholder', () => {
    render(<ChatInput />);
    expect(screen.getByPlaceholderText('Type a message...')).toBeInTheDocument();
  });

  it('renders custom placeholder', () => {
    render(<ChatInput placeholder="Write something..." />);
    expect(screen.getByPlaceholderText('Write something...')).toBeInTheDocument();
  });

  it('renders with initial value', () => {
    render(<ChatInput value="Hello!" />);
    const input = screen.getByPlaceholderText('Type a message...');
    expect(input).toBeInTheDocument();
  });

  it('can be disabled', () => {
    const { container } = render(<ChatInput disabled />);
    expect(container.firstChild).toBeTruthy();
  });

  it('shows attachment button by default', () => {
    const { container } = render(<ChatInput />);
    expect(container.firstChild).toBeTruthy();
  });

  it('hides attachment button when disabled', () => {
    const { container } = render(<ChatInput showAttachmentButton={false} />);
    expect(container.firstChild).toBeTruthy();
  });

  it('shows voice button when enabled', () => {
    const { container } = render(<ChatInput showVoiceButton />);
    expect(container.firstChild).toBeTruthy();
  });

  it('render with max attachments limit', () => {
    const { container } = render(<ChatInput maxAttachments={3} />);
    expect(container.firstChild).toBeTruthy();
  });
});

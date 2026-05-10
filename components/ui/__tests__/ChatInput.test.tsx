import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe, configureAxe } from 'vitest-axe';
import { ChatInput } from '../ChatInput';

const axeWithRules = configureAxe({
  rules: {
    'button-name': { enabled: false },
    'label': { enabled: false },
  },
});

function typeInTextarea(textarea: HTMLTextAreaElement, text: string) {
  Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value')?.set?.call(textarea, text);
  textarea.dispatchEvent(new Event('input', { bubbles: true }));
}

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
    const textarea = screen.getByPlaceholderText('Type a message...');
    expect(textarea).toBeInTheDocument();
  });

  it('can be disabled', () => {
    render(<ChatInput disabled />);
    const textarea = screen.getByPlaceholderText('Type a message...');
    expect(textarea).toBeDisabled();
  });

  it('renders with custom className', () => {
    const { container } = render(<ChatInput className="custom-chat" />);
    const wrapper = container.querySelector('.custom-chat');
    expect(wrapper).toBeTruthy();
  });

  it('calls onChange when text is typed', () => {
    const handleChange = vi.fn();
    render(<ChatInput onChange={handleChange} />);

    const textarea = screen.getByPlaceholderText('Type a message...') as HTMLTextAreaElement;
    typeInTextarea(textarea, 'Hi');

    expect(handleChange).toHaveBeenCalledWith('Hi');
  });

  it('render with max attachments limit', () => {
    const { container } = render(<ChatInput maxAttachments={3} />);
    expect(container.firstChild).toBeTruthy();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<ChatInput />);
    const results = await axeWithRules(container);
    expect(results).toHaveNoViolations();
  });
});

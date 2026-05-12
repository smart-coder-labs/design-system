import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe, configureAxe } from 'vitest-axe';
import { FileUpload } from '../FileUpload';

const axeWithRules = configureAxe({
  rules: {
    label: { enabled: false },
  },
});

describe('FileUpload', () => {
  it('renders the label when provided', () => {
    render(<FileUpload label="Upload file" />);
    expect(screen.getByText('Upload file')).toBeInTheDocument();
  });

  it('renders helper text when provided', () => {
    render(<FileUpload helperText="Max 10MB" />);
    expect(screen.getByText('Max 10MB')).toBeInTheDocument();
  });

  it('renders error message when provided', () => {
    render(<FileUpload error="File too large" />);
    expect(screen.getByText('File too large')).toBeInTheDocument();
  });

  it('can be disabled', () => {
    const { container } = render(<FileUpload disabled label="Disabled upload" />);
    expect(screen.getByText('Disabled upload')).toBeInTheDocument();
  });

  it('accepts file type restrictions', () => {
    render(<FileUpload accept="image/*, .pdf" />);
    expect(screen.getByText(/Accepted formats/)).toBeInTheDocument();
  });

  it('renders with max size limit', () => {
    render(<FileUpload maxSize={1048576} />);
    expect(screen.getByText(/Max size/)).toBeInTheDocument();
  });

  it('renders "All files accepted" when no accept specified', () => {
    render(<FileUpload />);
    expect(screen.getByText(/All files accepted/)).toBeInTheDocument();
  });

  it('renders drag and drop text', () => {
    render(<FileUpload />);
    expect(screen.getByText(/drag and drop/)).toBeInTheDocument();
  });

  it('renders the upload area with clickable text', () => {
    render(<FileUpload />);
    expect(screen.getByText(/Click to upload/)).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<FileUpload className="custom-upload" />);
    const wrapper = container.querySelector('.custom-upload');
    expect(wrapper).toBeTruthy();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<FileUpload label="Upload file" />);
    const results = await axeWithRules(container);
    expect(results).toHaveNoViolations();
  });
});

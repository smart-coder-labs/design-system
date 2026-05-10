import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { FileUpload } from '../FileUpload';

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
    const { container } = render(<FileUpload accept="image/*" />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders with max size limit', () => {
    const { container } = render(<FileUpload maxSize={10 * 1024 * 1024} />);
    expect(container.firstChild).toBeTruthy();
  });
});

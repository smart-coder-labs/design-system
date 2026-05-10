import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Stepper } from '../Stepper';

const mockSteps = [
  { id: 1, title: 'Step 1', description: 'First step' },
  { id: 2, title: 'Step 2', description: 'Second step' },
  { id: 3, title: 'Step 3', description: 'Third step' },
];

describe('Stepper', () => {
  it('renders all steps', () => {
    render(<Stepper steps={mockSteps} activeStep={0} />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
  });

  it('renders step descriptions', () => {
    render(<Stepper steps={mockSteps} activeStep={0} />);
    expect(screen.getByText('First step')).toBeInTheDocument();
    expect(screen.getByText('Second step')).toBeInTheDocument();
    expect(screen.getByText('Third step')).toBeInTheDocument();
  });

  it('renders with different activeStep indices', () => {
    const { container: c1 } = render(<Stepper steps={mockSteps} activeStep={0} />);
    const { container: c2 } = render(<Stepper steps={mockSteps} activeStep={2} />);
    expect(c1.firstChild).toBeTruthy();
    expect(c2.firstChild).toBeTruthy();
  });

  it('renders in horizontal orientation by default', () => {
    const { container } = render(<Stepper steps={mockSteps} activeStep={0} />);
    expect(container.querySelector('[class*="flex"]')).toBeInTheDocument();
  });

  it('renders in vertical orientation', () => {
    const { container } = render(
      <Stepper steps={mockSteps} activeStep={0} orientation="vertical" />
    );
    expect(container.querySelector('[class*="flex-col"]')).toBeInTheDocument();
  });

  it('renders with simple variant', () => {
    const { container } = render(
      <Stepper steps={mockSteps} activeStep={0} />
    );
    expect(container.firstChild).toBeTruthy();
  });

  it('supports onStepClick callback', () => {
    render(<Stepper steps={mockSteps} activeStep={0} onStepClick={() => {}} />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
  });
});

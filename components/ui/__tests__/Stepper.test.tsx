import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Stepper } from '../Stepper';

const mockSteps = [
  { id: 1, title: 'Step 1', description: 'First step', content: <div>Content 1</div> },
  { id: 2, title: 'Step 2', description: 'Second step', content: <div>Content 2</div> },
  { id: 3, title: 'Step 3', description: 'Third step', content: <div>Content 3</div> },
];

const basicSteps = [
  { id: 1, title: 'Step 1', description: 'First step' },
  { id: 2, title: 'Step 2', description: 'Second step' },
  { id: 3, title: 'Step 3', description: 'Third step' },
];

describe('Stepper', () => {
  it('renders all steps', () => {
    render(<Stepper steps={basicSteps} activeStep={0} />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
  });

  it('renders step descriptions', () => {
    render(<Stepper steps={basicSteps} activeStep={0} />);
    expect(screen.getByText('First step')).toBeInTheDocument();
    expect(screen.getByText('Second step')).toBeInTheDocument();
    expect(screen.getByText('Third step')).toBeInTheDocument();
  });

  it('renders content for the active step', () => {
    render(<Stepper steps={mockSteps} activeStep={1} />);
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('renders in horizontal orientation by default', () => {
    const { container } = render(<Stepper steps={basicSteps} activeStep={0} />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders in vertical orientation', () => {
    const { container } = render(
      <Stepper steps={basicSteps} activeStep={0} orientation="vertical" />
    );
    expect(container.firstChild).toBeTruthy();
  });

  it('calls onStepClick when a step is clicked', () => {
    const handleClick = vi.fn();
    render(<Stepper steps={basicSteps} activeStep={0} onStepClick={handleClick} />);
    fireEvent.click(screen.getByText('Step 2'));
    expect(handleClick).toHaveBeenCalledWith(1);
  });

  it('renders with simple variant', () => {
    const { container } = render(
      <Stepper steps={basicSteps} activeStep={0} variant="simple" />
    );
    expect(container.firstChild).toBeTruthy();
  });

  it('renders children as content', () => {
    render(
      <Stepper steps={basicSteps} activeStep={0}>
        <div>Child content</div>
      </Stepper>
    );
    expect(screen.getByText('Child content')).toBeInTheDocument();
  });

  it('renders in tabs variant', () => {
    render(<Stepper steps={basicSteps} activeStep={0} variant="tabs" />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
  });

  it('renders in bullets variant', () => {
    render(<Stepper steps={basicSteps} activeStep={0} variant="bullets" />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
  });

  it('renders with isError state', () => {
    const { container } = render(
      <Stepper steps={basicSteps} activeStep={0} isError />
    );
    expect(container.firstChild).toBeTruthy();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Stepper steps={basicSteps} activeStep={0} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

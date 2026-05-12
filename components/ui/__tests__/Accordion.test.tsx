import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../Accordion';

describe('Accordion', () => {
  it('renders accordion items', () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Section 2')).toBeInTheDocument();
  });

  it('opens an item when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent data-testid="content-1">Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    // Before click, trigger should report collapsed state
    expect(screen.getByText('Section 1')).toHaveAttribute('aria-expanded', 'false');

    // After clicking, content should be visible
    await user.click(screen.getByText('Section 1'));
    expect(screen.getByText('Section 1')).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByTestId('content-1')).toHaveAttribute('aria-hidden', 'false');
  });

  it('supports default value', () => {
    render(
      <Accordion type="single" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent data-testid="content-1">Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent data-testid="content-2">Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    // Default item should be open
    expect(screen.getByText('Section 1')).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByTestId('content-1')).toHaveAttribute('aria-hidden', 'false');
    // Non-default item should be closed
    expect(screen.getByText('Section 2')).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByTestId('content-2')).toHaveAttribute('aria-hidden', 'true');
  });

  it('calls onValueChange when item is selected', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Accordion type="single" onValueChange={onChange}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    await user.click(screen.getByText('Section 1'));
    expect(onChange).toHaveBeenCalledWith('item-1');
  });

  it('supports multiple type', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Accordion type="multiple" onValueChange={onChange}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    await user.click(screen.getByText('Section 1'));
    await user.click(screen.getByText('Section 2'));
    expect(onChange).toHaveBeenLastCalledWith(['item-1', 'item-2']);
  });
});

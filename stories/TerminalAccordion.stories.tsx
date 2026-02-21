import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TerminalAccordion } from '../components/ui/TerminalAccordion';

const meta: Meta<typeof TerminalAccordion> = {
  title: 'Cyberpunk/02 - Micro-Interactions & UI/TerminalAccordion',
  component: TerminalAccordion,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div className="bg-white dark:bg-zinc-950 p-20 flex flex-col items-center justify-center text-zinc-900 dark:text-zinc-50 min-h-[50vh] min-w-[60vw]">
         <Story />
      </div>
    )
  ]
};
export default meta;

export const Default: StoryObj<typeof TerminalAccordion> = {
  args: {
    question: 'ACCESS KERNEL SUBROUTINES',
    answer: 'WARNING: Subroutines are highly unstable. Adjusting parameters without authorization will result in an immediate ping to ICE agents.',
  }
};

export const Bare: StoryObj<typeof TerminalAccordion> = {
  decorators: [],
  args: {
    question: 'BARE COMPONENT',
    answer: 'This is the accordion without any parent styling or decorators.',
  }
};

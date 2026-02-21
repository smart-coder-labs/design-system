import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UnscramblingText } from '../components/ui/UnscramblingText';

const meta: Meta<typeof UnscramblingText> = {
  title: 'Cyberpunk/UnscramblingText',
  component: UnscramblingText,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#050505' }] },
  },
};

export default meta;
type Story = StoryObj<typeof UnscramblingText>;

export const ShortTitle: Story = {
  args: {
    text: 'INITIALIZING_SYS...',
    className: 'text-4xl text-zinc-500 font-sans',
  },
};

export const LongParagraphBreakdown: Story = {
  args: {
    text: 'WARNING: UNAUTHORIZED ACCES DETECTED IN SECTOR 7G. COMMENCING LOCKDOWN PROTOCOL IN T-MINUS 10 SECONDS.',
    className: 'text-2xl text-blue-500 max-w-2xl leading-relaxed font-[family-name:var(--font-mono)]',
  },
};

// Historia que requiere scroll para probar el efecto de `useInView`
export const TriggerOnScroll: Story = {
  decorators: [
    (Story) => (
      <div className="h-[200vh] relative w-full flex flex-col justify-end pb-[20vh] px-10 text-zinc-900 dark:text-zinc-50 bg-white dark:bg-zinc-950">
        <div className="absolute top-10 left-10 opacity-50 font-sans text-xl">
          ↓ Haz scroll hacia abajo para activar el descifrado ↓
        </div>
        <Story />
      </div>
    ),
  ],
  args: {
    text: 'TARGET ACQUIRED: THE SPARK',
    className: 'text-6xl text-zinc-900 dark:text-zinc-50 font-black font-sans',
  },
};

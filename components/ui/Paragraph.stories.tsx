import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './Paragraph';

const meta = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a default paragraph with standard styling for body text content.',
  },
};

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'This is a large paragraph variant, suitable for introductory text or lead paragraphs.',
  },
};

export const Small: Story = {
  args: {
    variant: 'small',
    children: 'A smaller text size for secondary content, footnotes, or less important details.',
  },
};

export const Muted: Story = {
  args: {
    variant: 'muted',
    children: 'Muted text for disclaimers, hints, or less prominent information.',
  },
};

export const WithLink: Story = {
  args: {
    children: (
      <>
        By continuing, you agree to our{' '}
        <a href="#" className="text-accent-blue hover:underline">Terms of Service</a>
        {' '}and{' '}
        <a href="#" className="text-accent-blue hover:underline">Privacy Policy</a>.
      </>
    ),
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};
export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
export const FintechUseCase: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Paragraph used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};

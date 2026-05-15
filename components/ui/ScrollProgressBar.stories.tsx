import type { Meta, StoryObj } from '@storybook/react';
import { ScrollProgressBar } from './ScrollProgressBar';

const meta = {
  title: 'Navigation/ScrollProgressBar',
  component: ScrollProgressBar,
  tags: ['autodocs'],
  args: {
    position: 'top',
    thickness: 'md',
    tone: 'default',
  },
} satisfies Meta<typeof ScrollProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const scrollDecorator = (Story: any) => (
  <div>
    <div className="h-[200vh] p-6 space-y-3">
      {Array.from({ length: 18 }, (_, idx) => (
        <div key={idx} className="p-3 rounded border border-border-primary bg-surface-secondary">
          Row {idx + 1}
        </div>
      ))}
    </div>
    <Story />
  </div>
);

export const Default: Story = { decorators: [scrollDecorator] };

export const BottomAccent: Story = {
  args: { position: 'bottom', tone: 'accent', thickness: 'lg' },
  decorators: [scrollDecorator],
};

export const Playground: Story = {
  args: { tone: 'muted', thickness: 'sm' },
  decorators: [scrollDecorator],
};

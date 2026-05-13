import type { Meta, StoryObj } from '@storybook/react';
import { ScrollProgressBar } from './ScrollProgressBar';

const meta = {
  title: 'Components/ScrollProgressBar',
  component: ScrollProgressBar,
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div>
        <div className="h-[200vh] overflow-y-auto p-6">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold">Scroll to see progress</h2>
            {Array.from({ length: 30 }, (_, i) => (
              <div key={i} className="p-4 bg-surface-secondary rounded-lg">
                <p className="text-text-secondary">
                  Section {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const BlueBar: Story = {
  args: {
    color: '#007AFF',
    height: 'h-1.5',
    position: 'top',
  },
  decorators: [
    (Story) => (
      <div>
        <div className="h-[200vh] overflow-y-auto p-6">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold">Apple Blue Progress</h2>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="p-4 bg-surface-secondary rounded-lg">
                <p className="text-text-secondary">Content block {i + 1} — scroll down to see the blue bar fill.</p>
              </div>
            ))}
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const GreenBar: Story = {
  args: {
    color: '#30D158',
    height: 'h-1',
    position: 'top',
  },
  decorators: [
    (Story) => (
      <div>
        <div className="h-[200vh] overflow-y-auto p-6">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold">Green Reading Progress</h2>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="p-4 bg-surface-secondary rounded-lg">
                <p className="text-text-secondary">{'📖 '}Chapter {i + 1}: The journey continues...</p>
              </div>
            ))}
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const OrangeBar: Story = {
  args: {
    color: '#FF9F0A',
    height: 'h-2',
    position: 'top',
  },
  decorators: [
    (Story) => (
      <div>
        <div className="h-[200vh] overflow-y-auto p-6">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold">Orange Progress (Thicker)</h2>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="p-4 bg-surface-secondary rounded-lg">
                <p className="text-text-secondary">Section {i + 1} — thicker orange indicator.</p>
              </div>
            ))}
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const BottomPosition: Story = {
  args: {
    color: '#BF5AF2',
    height: 'h-1.5',
    position: 'bottom',
  },
  decorators: [
    (Story) => (
      <div>
        <div className="h-[200vh] overflow-y-auto p-6">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold">Purple Bar at Bottom</h2>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="p-4 bg-surface-secondary rounded-lg">
                <p className="text-text-secondary">Content block {i + 1} — bar at bottom.</p>
              </div>
            ))}
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const ThinBar: Story = {
  args: {
    color: '#FF453A',
    height: 'h-0.5',
    position: 'top',
  },
  decorators: [
    (Story) => (
      <div>
        <div className="h-[200vh] overflow-y-auto p-6">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold">Thin Red Progress</h2>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="p-4 bg-surface-secondary rounded-lg">
                <p className="text-text-secondary">Item {i + 1} — subtle red bar.</p>
              </div>
            ))}
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const ArticleReader: Story = {
  args: {
    color: '#1C1C1E',
    height: 'h-1',
    position: 'top',
  },
  decorators: [
    (Story) => (
      <div>
        <div className="h-[200vh] overflow-y-auto p-6 max-w-3xl mx-auto">
          <article>
            <h1 className="text-3xl font-bold mb-4">The Future of Fintech in 2026</h1>
            <p className="text-text-secondary leading-relaxed mb-4">
              The financial technology landscape continues to evolve at a breakneck pace.
              From decentralized finance to AI-powered investing, the boundaries of what is
              possible are expanding daily. This article explores the key trends shaping the
              next wave of innovation...
            </p>
            {Array.from({ length: 15 }, (_, i) => (
              <p key={i} className="text-text-secondary leading-relaxed mb-4">
                Paragraph {i + 1}. As traditional banking institutions race to keep up with
                digital-native challengers, consumers are benefiting from lower fees, faster
                transactions, and more personalized financial products. The convergence of
                blockchain, artificial intelligence, and open banking APIs is creating entirely
                new categories of financial services that were unimaginable just a few years ago.
              </p>
            ))}
          </article>
        </div>
        <Story />
      </div>
    ),
  ],
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

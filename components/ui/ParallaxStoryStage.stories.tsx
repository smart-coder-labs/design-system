import type { Meta, StoryObj } from '@storybook/react';
import { ParallaxStoryStage } from './ParallaxStoryStage';
import React from 'react';

const meta: Meta<typeof ParallaxStoryStage> = {
  title: 'Animations/ParallaxStoryStage',
  component: ParallaxStoryStage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ParallaxStoryStage>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div className="bg-background-primary min-h-screen">
      <ParallaxStoryStage {...args} />
    </div>
  ),
};

export const DarkMode: Story = {
  args: {},
  parameters: {
    themes: { themeOverride: 'dark' },
  },
  render: (args) => (
    <div className="dark bg-background-primary min-h-screen">
      <ParallaxStoryStage {...args} />
    </div>
  ),
};

export const InArticleContainer: Story = {
  render: () => (
    <div className="max-w-7xl mx-auto border border-border-primary rounded-2xl overflow-hidden">
      <ParallaxStoryStage />
    </div>
  ),
};

export const FullViewport: Story = {
  render: () => (
    <div className="min-h-screen">
      <ParallaxStoryStage />
    </div>
  ),
};

export const WithBackToTop: Story = {
  render: () => {
    const [showTop, setShowTop] = React.useState(false);
    return (
      <div className="bg-background-primary min-h-screen relative">
        <ParallaxStoryStage />
        {showTop && (
          <button
            className="fixed bottom-8 right-8 px-4 py-2 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑ Volver arriba
          </button>
        )}
      </div>
    );
  },
};

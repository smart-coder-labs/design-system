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

export const FintechStory: Story = {
    render: () => (
        <div style={{ height: 500, position: 'relative', overflow: 'hidden' }}>
            <ParallaxStoryStage
                layers={[
                    { image: '', speed: 0.2, opacity: 0.1, content: null },
                    { image: '', speed: 0.5, opacity: 0.3, content: null },
                ]}
                foreground={
                    <div style={{ position: 'absolute', bottom: 40, left: 20, right: 20, color: 'white', textAlign: 'center' }}>
                        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Invest Smarter</h2>
                        <p style={{ fontSize: 16, opacity: 0.9 }}>AI-powered portfolio management for everyone</p>
                    </div>
                }
            />
        </div>
    ),
};

export const OnboardingStage: Story = {
    render: () => (
        <div style={{ height: 400, position: 'relative', overflow: 'hidden' }}>
            <ParallaxStoryStage
                layers={[
                    { image: '', speed: 0.3, opacity: 0.15, content: null },
                ]}
                foreground={
                    <div style={{ position: 'absolute', bottom: 50, left: 20, right: 20, color: 'white' }}>
                        <div style={{ fontSize: 14, opacity: 0.7, marginBottom: 4 }}>STEP 2 OF 5</div>
                        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 8 }}>Verify Your Identity</h2>
                        <p style={{ fontSize: 14, opacity: 0.8, marginBottom: 20 }}>It takes just 2 minutes</p>
                        <div style={{ display: 'flex', gap: 12 }}>
                            <span style={{ padding: '10px 24px', background: '#007AFF', color: 'white', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}>
                                Continue
                            </span>
                            <span style={{ padding: '10px 24px', border: '1px solid rgba(255,255,255,0.3)', color: 'white', borderRadius: 8, cursor: 'pointer' }}>
                                Skip
                            </span>
                        </div>
                    </div>
                }
            />
        </div>
    ),
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

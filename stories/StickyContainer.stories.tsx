import type { Meta, StoryObj } from '@storybook/react';
import { StickyContainer } from '../components/StickyContainer';

const meta: Meta<typeof StickyContainer> = {
  title: 'Layout/StickyContainer',
  component: StickyContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof StickyContainer>;

export const Default: Story = {
  render: () => (
    <div style={{ height: 480, overflowY: 'auto', background: '#f5f5f7', padding: 32 }}>
      <StickyContainer top={0}>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Sticky Header</span>
          <span className="text-sm text-text-secondary">(scroll down)</span>
        </div>
      </StickyContainer>
      <div style={{ height: 900 }}>
        <div className="mt-8 text-sm text-text-secondary">Contenido largo para probar el sticky...</div>
      </div>
    </div>
  ),
};

export const CustomOffset: Story = {
  render: () => (
    <div style={{ height: 480, overflowY: 'auto', background: '#f5f5f7', padding: 32 }}>
      <div style={{ height: 40 }} />
      <StickyContainer top={40}>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Sticky con offset 40px</span>
        </div>
      </StickyContainer>
      <div style={{ height: 900 }}>
        <div className="mt-8 text-sm text-text-secondary">Contenido largo para probar el sticky con offset...</div>
      </div>
    </div>
  ),
};

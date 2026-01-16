import type { Meta, StoryObj } from '@storybook/react';
import { StickyContainer } from '../components/ui/StickyContainer';

const meta: Meta<typeof StickyContainer> = {
  title: 'Layout/StickyContainer',
  component: StickyContainer,
  tags: [],
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

export const StickyToolbar: Story = {
  name: '🛠️ Caso de Uso: Sticky Toolbar',
  render: () => (
    <div style={{ height: 520, overflowY: 'auto', background: '#f5f5f7', padding: 32 }}>
      <StickyContainer top={0}>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1 rounded bg-accent text-text-primary text-sm font-medium shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">Save</button>
          <button className="px-3 py-1 rounded bg-surface text-text-primary text-sm font-medium border border-border-primary">Cancel</button>
          <span className="ml-auto text-xs text-text-secondary">Sticky Toolbar: permanece visible al hacer scroll</span>
        </div>
      </StickyContainer>
      <div style={{ height: 900 }}>
        <div className="mt-8 text-sm text-text-secondary">Simulación de contenido editable largo...</div>
      </div>
    </div>
  ),
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl mx-auto">
        <Story />
      </div>
    ),
  ],
};

export const StickySectionHeader: Story = {
  name: '📑 Caso de Uso: Sticky Section Header',
  render: () => (
    <div style={{ height: 520, overflowY: 'auto', background: '#f5f5f7', padding: 32 }}>
      <StickyContainer top={0}>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Section: General Info</span>
        </div>
      </StickyContainer>
      <div style={{ height: 900 }}>
        <div className="mt-8 text-sm text-text-secondary">Contenido de la sección General Info...</div>
      </div>
    </div>
  ),
  decorators: [
    (Story) => (
      <div className="w-full max-w-xl mx-auto">
        <Story />
      </div>
    ),
  ],
};


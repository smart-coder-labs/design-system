import type { Meta, StoryObj } from '@storybook/react';
import { ResizablePanel } from '../components/ResizablePanel';

const meta: Meta<typeof ResizablePanel> = {
  title: 'Layout/ResizablePanel',
  component: ResizablePanel,
  tags: [],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof ResizablePanel>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ display: 'flex', height: 400, background: '#f7f7f9', padding: 32 }}>
      <ResizablePanel initialSize="350px" minSize={200} maxSize={600} direction="horizontal">
        <div style={{ padding: 24 }}>
          <h3>Resizable Panel (Horizontal)</h3>
          <p>Arrastra el borde derecho para cambiar el tamaño.</p>
        </div>
      </ResizablePanel>
      <div style={{ flex: 1, padding: 24 }}>
        <h3>Contenido Fijo</h3>
        <p>Este panel no se redimensiona.</p>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ height: 500, width: 600, background: '#f7f7f9', padding: 32 }}>
      <ResizablePanel initialSize="250px" minSize={100} maxSize={400} direction="vertical">
        <div style={{ padding: 24 }}>
          <h3>Resizable Panel (Vertical)</h3>
          <p>Arrastra el borde inferior para cambiar el tamaño.</p>
        </div>
      </ResizablePanel>
      <div style={{ height: 200, background: '#fff', padding: 24 }}>
        <h3>Panel Inferior</h3>
        <p>Este panel no se redimensiona.</p>
      </div>
    </div>
  ),
};

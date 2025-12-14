import type { Meta, StoryObj } from '@storybook/react';
import { SplitView } from '../components/SplitView';

const meta: Meta<typeof SplitView> = {
  title: 'Layout/SplitView',
  component: SplitView,
  tags: [],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof SplitView>;

export const FinderStyle: Story = {
  render: () => (
    <div style={{ height: 480, background: '#f5f5f7', padding: 32 }}>
      <SplitView
        left={
          <>
            <h3 className="font-semibold text-lg mb-2">Sidebar</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="font-medium text-accent">Favorites</li>
              <li>Documents</li>
              <li>Downloads</li>
              <li>Pictures</li>
              <li>Music</li>
              <li>AirDrop</li>
            </ul>
          </>
        }
        right={
          <>
            <h3 className="font-semibold text-lg mb-2">Files</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-surface-secondary rounded-lg p-4 shadow-sm">File 1</div>
              <div className="bg-surface-secondary rounded-lg p-4 shadow-sm">File 2</div>
              <div className="bg-surface-secondary rounded-lg p-4 shadow-sm">File 3</div>
              <div className="bg-surface-secondary rounded-lg p-4 shadow-sm">File 4</div>
              <div className="bg-surface-secondary rounded-lg p-4 shadow-sm">File 5</div>
              <div className="bg-surface-secondary rounded-lg p-4 shadow-sm">File 6</div>
            </div>
          </>
        }
        initialLeftSize="320px"
        minLeftSize={180}
        maxLeftSize={500}
      />
    </div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <div style={{ height: 340, background: '#f5f5f7', padding: 16 }}>
      <SplitView
        left={<div>Panel Izquierdo</div>}
        right={<div>Panel Derecho</div>}
        initialLeftSize="40%"
        minLeftSize={120}
        maxLeftSize={400}
      />
    </div>
  ),
};

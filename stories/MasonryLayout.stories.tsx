import type { Meta, StoryObj } from '@storybook/react';
import { MasonryLayout } from '../components/MasonryLayout';

const meta: Meta<typeof MasonryLayout> = {
  title: 'Layout/MasonryLayout',
  component: MasonryLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof MasonryLayout>;

const sampleItems = [
  { id: 1, height: 120, title: 'Card 1', color: 'bg-accent/80' },
  { id: 2, height: 180, title: 'Card 2', color: 'bg-surface-secondary' },
  { id: 3, height: 100, title: 'Card 3', color: 'bg-surface-secondary' },
  { id: 4, height: 160, title: 'Card 4', color: 'bg-accent/80' },
  { id: 5, height: 140, title: 'Card 5', color: 'bg-surface-secondary' },
  { id: 6, height: 200, title: 'Card 6', color: 'bg-accent/80' },
  { id: 7, height: 110, title: 'Card 7', color: 'bg-surface-secondary' },
  { id: 8, height: 170, title: 'Card 8', color: 'bg-accent/80' },
  { id: 9, height: 130, title: 'Card 9', color: 'bg-surface-secondary' },
];

export const Default: Story = {
  render: () => (
    <div style={{ background: '#f5f5f7', padding: 32, minHeight: 600 }}>
      <MasonryLayout columns={3} gap={24}>
        {sampleItems.map(item => (
          <div
            key={item.id}
            className={`rounded-xl shadow-md ${item.color} p-4 text-center text-sm font-medium`}
            style={{ height: item.height }}
          >
            {item.title}
          </div>
        ))}
      </MasonryLayout>
    </div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <div style={{ background: '#f5f5f7', padding: 32, minHeight: 600 }}>
      <MasonryLayout columns={2} gap={16}>
        {sampleItems.map(item => (
          <div
            key={item.id}
            className={`rounded-xl shadow-md ${item.color} p-4 text-center text-sm font-medium`}
            style={{ height: item.height }}
          >
            {item.title}
          </div>
        ))}
      </MasonryLayout>
    </div>
  ),
};

export const GalleryUseCase: Story = {
  name: '🖼️ Caso de Uso: Galería de Imágenes',
  render: () => (
    <div style={{ background: '#f5f5f7', padding: 32, minHeight: 600 }}>
      <MasonryLayout columns={4} gap={20}>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="rounded-xl shadow bg-surface-secondary overflow-hidden flex flex-col"
            style={{ height: 100 + (i % 4) * 40 }}
          >
            <img
              src={`https://picsum.photos/seed/${i}/400/300`}
              alt={`Imagen ${i + 1}`}
              className="w-full h-32 object-cover"
            />
            <div className="p-2 text-xs text-text-secondary">Imagen {i + 1}</div>
          </div>
        ))}
      </MasonryLayout>
    </div>
  ),
  decorators: [
    (Story) => (
      <div className="w-full max-w-5xl mx-auto">
        <Story />
      </div>
    ),
  ],
};

export const ProductCardsUseCase: Story = {
  name: '🛒 Caso de Uso: Cards de Producto',
  render: () => (
    <div style={{ background: '#f5f5f7', padding: 32, minHeight: 600 }}>
      <MasonryLayout columns={3} gap={24}>
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="rounded-xl shadow bg-white border border-border-primary p-4 flex flex-col items-center gap-2 overflow-hidden"
            style={{ height: 120 + (i % 3) * 40 }}
          >
            <img
              src={`https://dummyimage.com/80x80/eee/aaa&text=P${i + 1}`}
              alt={`Producto ${i + 1}`}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="font-semibold text-sm text-center break-words w-full">Producto {i + 1}</div>
            <div className="text-xs text-text-secondary text-center break-words w-full">$ {(100 + i * 10).toFixed(2)}</div>
          </div>
        ))}
      </MasonryLayout>
    </div>
  ),
  decorators: [
    (Story) => (
      <div className="w-full max-w-4xl mx-auto">
        <Story />
      </div>
    ),
  ],
};

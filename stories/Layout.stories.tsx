import type { Meta, StoryObj } from '@storybook/react';
import { Stack, HStack, VStack, Grid } from '../components/ui/Layout';

const meta: Meta<typeof Stack> = {
    title: 'Layout/Layout',
    component: Stack,
    tags: [],
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Stacks: Story = {
    render: () => (
        <VStack gap={8}>
            <div className="border p-4 rounded">
                <h3 className="mb-2 font-bold">VStack (Vertical Stack)</h3>
                <VStack gap={4} className="bg-surface-secondary p-4 rounded">
                    <div className="bg-white p-4 rounded shadow-sm">Item 1</div>
                    <div className="bg-white p-4 rounded shadow-sm">Item 2</div>
                    <div className="bg-white p-4 rounded shadow-sm">Item 3</div>
                </VStack>
            </div>

            <div className="border p-4 rounded">
                <h3 className="mb-2 font-bold">HStack (Horizontal Stack)</h3>
                <HStack gap={4} className="bg-surface-secondary p-4 rounded">
                    <div className="bg-white p-4 rounded shadow-sm">Item 1</div>
                    <div className="bg-white p-4 rounded shadow-sm">Item 2</div>
                    <div className="bg-white p-4 rounded shadow-sm">Item 3</div>
                </HStack>
            </div>
        </VStack>
    ),
};

export const Grids: Story = {
    render: () => (
        <div className="border p-4 rounded">
            <h3 className="mb-2 font-bold">Grid (3 Columns)</h3>
            <Grid columns={3} gap={4} className="bg-surface-secondary p-4 rounded">
                <div className="bg-white p-4 rounded shadow-sm">Col 1</div>
                <div className="bg-white p-4 rounded shadow-sm">Col 2</div>
                <div className="bg-white p-4 rounded shadow-sm">Col 3</div>
                <div className="bg-white p-4 rounded shadow-sm">Col 4</div>
                <div className="bg-white p-4 rounded shadow-sm">Col 5</div>
                <div className="bg-white p-4 rounded shadow-sm">Col 6</div>
            </Grid>
        </div>
    ),
};

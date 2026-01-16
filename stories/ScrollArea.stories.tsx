import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '../components/ui/ScrollArea';

const meta: Meta<typeof ScrollArea> = {
    title: 'Layout/ScrollArea',
    component: ScrollArea,
    tags: [],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
    render: () => (
        <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
            <div className="mb-4 text-sm font-medium leading-none">Tags</div>
            {Array.from({ length: 50 }).map((_, i, a) => (
                <div key={i} className="text-sm">
                    v1.2.0-beta.{a.length - i}
                    <div className="my-2 h-px bg-border-primary" />
                </div>
            ))}
        </ScrollArea>
    ),
};

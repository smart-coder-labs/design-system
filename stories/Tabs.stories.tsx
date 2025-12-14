import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Navigation/Tabs',
    component: Tabs,
    tags: [],
    argTypes: {
        defaultValue: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    args: {
        defaultValue: 'tab1',
        children: (
            <>
                <TabsList>
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                    <div className="p-4 bg-surface-secondary rounded-lg mt-2">
                        <p>Content for tab 1</p>
                    </div>
                </TabsContent>
                <TabsContent value="tab2">
                    <div className="p-4 bg-surface-secondary rounded-lg mt-2">
                        <p>Content for tab 2</p>
                    </div>
                </TabsContent>
                <TabsContent value="tab3">
                    <div className="p-4 bg-surface-secondary rounded-lg mt-2">
                        <p>Content for tab 3</p>
                    </div>
                </TabsContent>
            </>
        ),
    },
};

export const Segmented: Story = {
    args: {
        defaultValue: 'overview',
        children: (
            <>
                <TabsList variant="segmented">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                    <div className="p-4 mt-4">
                        <p>Overview content</p>
                    </div>
                </TabsContent>
                <TabsContent value="details">
                    <div className="p-4 mt-4">
                        <p>Details content</p>
                    </div>
                </TabsContent>
                <TabsContent value="settings">
                    <div className="p-4 mt-4">
                        <p>Settings content</p>
                    </div>
                </TabsContent>
            </>
        ),
    },
};

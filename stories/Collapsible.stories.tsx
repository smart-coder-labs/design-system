import type { Meta, StoryObj } from '@storybook/react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '../components/Collapsible';
import { Button } from '../components/Button';
import { ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Collapsible> = {
    title: 'Data Display/Collapsible',
    component: Collapsible,
    tags: [],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="w-[280px] space-y-2 border border-border-primary rounded-lg p-3 bg-surface-primary shadow-sm"
            >
                <CollapsibleTrigger>
                    <div className="flex items-center justify-between cursor-pointer select-none group">
                        <h4 className="text-sm font-semibold text-text-primary">
                            @peduarte starred 3 repositories
                        </h4>
                        <Button variant="ghost" size="sm" className="w-9 p-0 group-hover:bg-surface-secondary">
                            <ChevronsUpDown className="h-4 w-4 text-text-secondary" />
                            <span className="sr-only">Toggle</span>
                        </Button>
                    </div>
                </CollapsibleTrigger>

                {/* This content is always visible if outside CollapsibleContent, 
                    but let's put everything inside or make it clear. 
                    The user was confused by the "first option default". 
                    Let's hide the "always visible" part or make it part of the toggle.
                */}

                <CollapsibleContent className="space-y-2 mt-2">
                    <div className="rounded-md border border-border-secondary px-3 py-2 text-sm text-text-secondary">
                        @radix-ui/primitives
                    </div>
                    <div className="rounded-md border border-border-secondary px-3 py-2 text-sm text-text-secondary">
                        @radix-ui/colors
                    </div>
                    <div className="rounded-md border border-border-secondary px-3 py-2 text-sm text-text-secondary">
                        @stitches/react
                    </div>
                </CollapsibleContent>
            </Collapsible>
        );
    },
};

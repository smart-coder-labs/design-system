import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownItem, DropdownSeparator, DropdownLabel, DropdownCheckboxItem, DropdownRadioGroup, DropdownRadioItem } from '../components/Dropdown';
import { Button } from '../components/Button';
import React from 'react';

const meta: Meta<typeof Dropdown> = {
    title: 'Overlays/Dropdown',
    component: Dropdown,
    tags: [],
    argTypes: {
        align: {
            control: 'select',
            options: ['start', 'center', 'end'],
        },
        sideOffset: {
            control: 'number',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    args: {
        trigger: <Button>Options</Button>,
        children: (
            <>
                <DropdownLabel>Actions</DropdownLabel>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Duplicate</DropdownItem>
                <DropdownSeparator />
                <DropdownItem destructive>Delete</DropdownItem>
            </>
        ),
    },
};

export const WithCheckbox: Story = {
    render: (args) => {
        const [checked, setChecked] = React.useState(true);
        return (
            <Dropdown {...args}>
                <DropdownCheckboxItem checked={checked} onCheckedChange={setChecked}>
                    Show Panel
                </DropdownCheckboxItem>
            </Dropdown>
        );
    },
    args: {
        trigger: <Button>View</Button>,
    },
};

export const WithRadioGroup: Story = {
    render: (args) => {
        const [value, setValue] = React.useState('name');
        return (
            <Dropdown {...args}>
                <DropdownRadioGroup value={value} onValueChange={setValue}>
                    <DropdownRadioItem value="name">Name</DropdownRadioItem>
                    <DropdownRadioItem value="date">Date</DropdownRadioItem>
                </DropdownRadioGroup>
            </Dropdown>
        );
    },
    args: {
        trigger: <Button>Sort</Button>,
    },
};

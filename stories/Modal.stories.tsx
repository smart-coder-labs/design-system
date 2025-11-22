import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalContent, ModalFooter, ModalClose, ModalCloseButton } from '../components/Modal';
import { Button } from '../components/Button';
import React, { useState } from 'react';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl', 'full'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Modal</Button>
                <Modal {...args} open={open} onOpenChange={setOpen}>
                    <ModalCloseButton />
                    <ModalHeader>
                        <ModalTitle>Modal Title</ModalTitle>
                        <ModalDescription>
                            This is a description of the modal content
                        </ModalDescription>
                    </ModalHeader>
                    <ModalContent>
                        <p>Modal content goes here...</p>
                    </ModalContent>
                    <ModalFooter>
                        <ModalClose>
                            <Button variant="ghost">Cancel</Button>
                        </ModalClose>
                        <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    },
    args: {
        size: 'md',
    },
};

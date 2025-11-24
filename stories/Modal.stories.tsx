import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalContent, ModalFooter, ModalClose, ModalCloseButton } from '../components/Modal';
import { Button } from '../components/Button';
import React, { useState } from 'react';

const meta: Meta<typeof Modal> = {
    title: 'Overlays/Modal',
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

export const Center: Story = {
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(true)}>Abrir modal centrado</Button>
                <Modal {...args} open={open} onOpenChange={setOpen} position="center" size="md">
                    <ModalCloseButton />
                    <ModalHeader>
                        <ModalTitle>Modal centrado</ModalTitle>
                        <ModalDescription>Modal en el centro de la pantalla.</ModalDescription>
                    </ModalHeader>
                    <ModalContent>
                        <p>Contenido del modal centrado.</p>
                    </ModalContent>
                    <ModalFooter>
                        <ModalClose>
                            <Button variant="ghost">Cerrar</Button>
                        </ModalClose>
                        <Button variant="primary">Acción</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    },
    args: {
        size: 'md',
    },
};

export const Right: Story = {
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(true)}>Abrir modal derecha</Button>
                <Modal {...args} open={open} onOpenChange={setOpen} position="right" size="md">
                    <ModalCloseButton />
                    <ModalHeader>
                        <ModalTitle>Modal derecha</ModalTitle>
                        <ModalDescription>Modal alineado a la derecha.</ModalDescription>
                    </ModalHeader>
                    <ModalContent>
                        <p>Contenido del modal derecha.</p>
                    </ModalContent>
                    <ModalFooter>
                        <ModalClose>
                            <Button variant="ghost">Cerrar</Button>
                        </ModalClose>
                        <Button variant="primary">Acción</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    },
    args: {
        size: 'md',
    },
};

export const Left: Story = {
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(true)}>Abrir modal izquierda</Button>
                <Modal {...args} open={open} onOpenChange={setOpen} position="left" size="md">
                    <ModalCloseButton />
                    <ModalHeader>
                        <ModalTitle>Modal izquierda</ModalTitle>
                        <ModalDescription>Modal alineado a la izquierda.</ModalDescription>
                    </ModalHeader>
                    <ModalContent>
                        <p>Contenido del modal izquierda.</p>
                    </ModalContent>
                    <ModalFooter>
                        <ModalClose>
                            <Button variant="ghost">Cerrar</Button>
                        </ModalClose>
                        <Button variant="primary">Acción</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    },
    args: {
        size: 'md',
    },
};

export const Bottom: Story = {
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(true)}>Abrir modal abajo</Button>
                <Modal {...args} open={open} onOpenChange={setOpen} position="bottom" size="full">
                    <ModalCloseButton />
                    <ModalHeader>
                        <ModalTitle>Modal abajo</ModalTitle>
                        <ModalDescription>Modal alineado abajo.</ModalDescription>
                    </ModalHeader>
                    <ModalContent>
                        <p>Contenido del modal abajo.</p>
                    </ModalContent>
                    <ModalFooter>
                        <ModalClose>
                            <Button variant="ghost">Cerrar</Button>
                        </ModalClose>
                        <Button variant="primary">Acción</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    },
    args: {
        size: 'md',
    },
};

export const Fullscreen: Story = {
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(true)}>Abrir modal pantalla completa</Button>
                <Modal {...args} open={open} onOpenChange={setOpen} position="fullscreen" size="full">
                    <ModalCloseButton />
                    <ModalHeader>
                        <ModalTitle>Modal pantalla completa</ModalTitle>
                        <ModalDescription>Modal ocupa toda la pantalla.</ModalDescription>
                    </ModalHeader>
                    <ModalContent>
                        <p>Contenido del modal fullscreen.</p>
                    </ModalContent>
                    <ModalFooter>
                        <ModalClose>
                            <Button variant="ghost">Cerrar</Button>
                        </ModalClose>
                        <Button variant="primary">Acción</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    },
    args: {
        size: 'full',
    },
};

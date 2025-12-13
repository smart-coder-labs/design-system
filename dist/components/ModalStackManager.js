import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalContent, ModalFooter, ModalCloseButton, ModalClose } from './Modal';
import { Button } from './Button';
/**
 * ModalStackManager: gestiona múltiples modales apilados estilo macOS/iOS
 * - Animación de entrada/salida con Framer Motion
 * - Cada modal puede abrir otro modal encima
 * - Cierre individual o en cascada
 */
export const ModalStackManager = (props) => {
    const { initialStack = [], className, open: controlledOpen, onCloseAll, } = props;
    const [stack, setStack] = useState(initialStack);
    const [internalOpen, setInternalOpen] = useState(initialStack.length > 0);
    const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
    // Restore stack when open becomes true and stack is empty
    React.useEffect(() => {
        if (open && stack.length === 0 && initialStack.length > 0) {
            setStack(initialStack);
        }
    }, [open, initialStack, stack.length]);
    // Abrir un nuevo modal encima
    const pushModal = (modal) => {
        setStack(prev => [...prev, modal]);
        setInternalOpen(true);
    };
    // Cerrar el modal superior
    const popModal = () => {
        setStack(prev => prev.slice(0, -1));
        setInternalOpen(stack.length > 1);
        if (stack.length <= 1 && onCloseAll)
            onCloseAll();
    };
    // Cerrar todos los modales
    const closeAll = () => {
        setStack([]);
        setInternalOpen(false);
        if (onCloseAll)
            onCloseAll();
    };
    return (_jsx(_Fragment, { children: stack.map((modal, i) => (_jsxs(Modal, { open: open && i === stack.length - 1, onOpenChange: val => {
                if (!val)
                    popModal();
            }, size: modal.size || 'md', children: [_jsx(ModalCloseButton, {}), _jsxs(ModalHeader, { children: [_jsx(ModalTitle, { children: modal.title }), modal.description && _jsx(ModalDescription, { children: modal.description })] }), _jsx(ModalContent, { children: modal.content }), _jsxs(ModalFooter, { children: [_jsx(ModalClose, { children: _jsx(Button, { variant: "ghost", children: "Cerrar" }) }), i === stack.length - 1 && (_jsx(Button, { variant: "primary", onClick: () => pushModal({
                                title: 'Modal Secundario',
                                description: 'Este modal se apila sobre el anterior.',
                                content: _jsx("p", { children: "Contenido del modal secundario." }),
                                footer: _jsx(Button, { variant: "ghost", onClick: closeAll, children: "Cerrar todo" }),
                                size: 'sm',
                            }), children: "Abrir otro modal" })), modal.footer] })] }, i))) }));
};
//# sourceMappingURL=ModalStackManager.js.map

import React, { useState } from 'react';
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalContent, ModalFooter, ModalCloseButton, ModalClose } from './Modal';
import { Button } from './Button';

export type ModalConfig = {
  title: string;
  description?: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

export interface ModalStackManagerProps {
  /**
   * Initial modals to show (array of modal configs)
   */
  initialStack?: ModalConfig[];
  /**
   * Optional className for root
   */
  className?: string;
  /**
   * Controlled open state (optional)
   */
  open?: boolean;
  /**
   * Callback when all modals are closed
   */
  onCloseAll?: () => void;
}

/**
 * ModalStackManager: gestiona múltiples modales apilados estilo macOS/iOS
 * - Animación de entrada/salida con Framer Motion
 * - Cada modal puede abrir otro modal encima
 * - Cierre individual o en cascada
 */
export const ModalStackManager: React.FC<ModalStackManagerProps> = (props) => {
  const {
    initialStack = [],
    className,
    open: controlledOpen,
    onCloseAll,
  } = props;
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
  const pushModal = (modal: ModalConfig) => {
    setStack(prev => [...prev, modal]);
    setInternalOpen(true);
  };

  // Cerrar el modal superior
  const popModal = () => {
    setStack(prev => prev.slice(0, -1));
    setInternalOpen(stack.length > 1);
    if (stack.length <= 1 && onCloseAll) onCloseAll();
  };

  // Cerrar todos los modales
  const closeAll = () => {
    setStack([]);
    setInternalOpen(false);
    if (onCloseAll) onCloseAll();
  };

  return (
    <>
      {stack.map((modal, i) => (
        <Modal
          key={i}
          open={open && i === stack.length - 1}
          onOpenChange={val => {
            if (!val) popModal();
          }}
          size={modal.size || 'md'}
        >
          <ModalCloseButton />
          <ModalHeader>
            <ModalTitle>{modal.title}</ModalTitle>
            {modal.description && <ModalDescription>{modal.description}</ModalDescription>}
          </ModalHeader>
          <ModalContent>{modal.content}</ModalContent>
          <ModalFooter>
            <ModalClose>
              <Button variant="ghost">Cerrar</Button>
            </ModalClose>
            {i === stack.length - 1 && (
              <Button variant="primary" onClick={() => pushModal({
                title: 'Modal Secundario',
                description: 'Este modal se apila sobre el anterior.',
                content: <p>Contenido del modal secundario.</p>,
                footer: <Button variant="ghost" onClick={closeAll}>Cerrar todo</Button>,
                size: 'sm',
              })}>
                Abrir otro modal
              </Button>
            )}
            {modal.footer}
          </ModalFooter>
        </Modal>
      ))}
    </>
  );
};

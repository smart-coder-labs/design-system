import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';

/* ========================================
   TYPES
   ======================================== */

export interface ModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    position?: 'center' | 'right' | 'left' | 'bottom' | 'fullscreen';
}

/* ========================================
   STYLES
   ======================================== */

const sizeStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full mx-4',
};

const positionStyles: Record<string, string> = {
    center: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    right: 'top-0 right-0 h-full rounded-l-2xl',
    left: 'top-0 left-0 h-full rounded-r-2xl',
    bottom: 'left-1/2 bottom-0 transform -translate-x-1/2 rounded-t-2xl',
    bottomFull: 'left-0 bottom-0 w-full rounded-t-2xl',
    fullscreen: 'inset-0 w-full h-full rounded-none',
};

/* ========================================
   COMPONENT
   ======================================== */

export const Modal: React.FC<ModalProps> = ({
    open,
    onOpenChange,
    children,
    size = 'md',
    position = 'center',
}) => {
    // Animation variants for different positions
    const variants: Record<string, any> = {
        center: {
            initial: { opacity: 0, scale: 0.96, x: '-50%', y: '-48%' },
            animate: { opacity: 1, scale: 1, x: '-50%', y: '-50%' },
            exit: { opacity: 0, scale: 0.96, x: '-50%', y: '-48%' },
        },
        right: {
            initial: { opacity: 0, x: '100%' },
            animate: { opacity: 1, x: '0%' },
            exit: { opacity: 0, x: '100%' },
        },
        left: {
            initial: { opacity: 0, x: '-100%' },
            animate: { opacity: 1, x: '0%' },
            exit: { opacity: 0, x: '-100%' },
        },
        bottom: {
            initial: { opacity: 0, y: '100%' },
            animate: { opacity: 1, y: '0%' },
            exit: { opacity: 0, y: '100%' },
        },
        fullscreen: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
        },
    };

    // Determine correct position style for bottom+full
    const positionKey = position === 'bottom' && size === 'full' ? 'bottomFull' : position;
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <AnimatePresence>
                    {open && (
                        <>
                            {/* Overlay con blur */}
                            <Dialog.Overlay asChild>
                                <motion.div
                                    className="fixed inset-0 bg-black/40 backdrop-blur-md z-modal"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 0.22,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                />
                            </Dialog.Overlay>

                            {/* Content */}
                            <Dialog.Content asChild>
                                <motion.div
                                    className={`fixed w-full ${sizeStyles[size]} bg-surface-primary shadow-xl p-6 z-modal focus:outline-none ${positionStyles[positionKey]}`}
                                    initial={variants[position].initial}
                                    animate={variants[position].animate}
                                    exit={variants[position].exit}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 30,
                                        mass: 0.8,
                                    }}
                                >
                                    {children}
                                </motion.div>
                            </Dialog.Content>
                        </>
                    )}
                </AnimatePresence>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

/* ========================================
   SUB-COMPONENTS
   ======================================== */

export const ModalHeader: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className = '' }) => (
    <div className={`mb-4 ${className}`}>{children}</div>
);

export const ModalTitle: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className = '' }) => (
    <Dialog.Title asChild>
        <h2 className={`text-2xl font-semibold text-text-primary ${className}`}>
            {children}
        </h2>
    </Dialog.Title>
);

export const ModalDescription: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className = '' }) => (
    <Dialog.Description asChild>
        <p className={`text-sm text-text-secondary mt-2 ${className}`}>
            {children}
        </p>
    </Dialog.Description>
);

export const ModalContent: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className = '' }) => (
    <div className={`py-4 ${className}`}>{children}</div>
);

export const ModalFooter: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className = '' }) => (
    <div className={`mt-6 flex items-center justify-end gap-3 ${className}`}>
        {children}
    </div>
);

export const ModalClose: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className = '' }) => (
    <Dialog.Close asChild>
        <div className={className}>{children}</div>
    </Dialog.Close>
);

/* ========================================
   CLOSE BUTTON ICON
   ======================================== */

export const ModalCloseButton: React.FC<{ className?: string }> = ({
    className = '',
}) => (
    <Dialog.Close asChild>
        <motion.button
            className={`
        absolute top-4 right-4
        w-8 h-8
        flex items-center justify-center
        rounded-full
        bg-surface-secondary
        text-text-secondary
        hover:bg-surface-primary
        hover:text-text-primary
        transition-apple
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-accent-blue
        ${className}
      `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Close"
        >
            <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 1L13 13M1 13L13 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        </motion.button>
    </Dialog.Close>
);

/* ========================================
   USAGE EXAMPLES
   ======================================== */

/*
const [open, setOpen] = useState(false);

<Modal open={open} onOpenChange={setOpen} size="md">
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
    <Button variant="primary">Confirm</Button>
  </ModalFooter>
</Modal>
*/

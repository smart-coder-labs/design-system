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

/* ========================================
   COMPONENT
   ======================================== */

export const Modal: React.FC<ModalProps> = ({
    open,
    onOpenChange,
    children,
    size = 'md',
}) => {
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
                                    className={`
                    fixed top-1/2 left-1/2
                    w-full ${sizeStyles[size]}
                    bg-surface-primary
                    rounded-2xl
                    shadow-xl
                    p-6
                    z-modal
                    focus:outline-none
                  `}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.96,
                                        x: '-50%',
                                        y: '-48%',
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        x: '-50%',
                                        y: '-50%',
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.96,
                                        x: '-50%',
                                        y: '-48%',
                                    }}
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

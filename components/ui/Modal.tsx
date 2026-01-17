import React, { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
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
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Handle Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (open && e.key === 'Escape') {
                onOpenChange(false);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [open, onOpenChange]);

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

    // Prevent scrolling behind modal
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    if (!mounted) return null;

    const modalContent = (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-modal flex items-center justify-center isolate">
                    {/* Overlay con blur */}
                    <motion.div
                        className="fixed inset-0 bg-black/40 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.22,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        onClick={() => onOpenChange(false)}
                        aria-hidden="true"
                    />

                    {/* Content */}
                    <motion.div
                        className={`fixed w-full ${sizeStyles[size]} bg-surface-primary shadow-xl p-6 z-modal focus:outline-none rounded-2xl ${positionStyles[positionKey]}`}
                        initial={variants[position].initial}
                        animate={variants[position].animate}
                        exit={variants[position].exit}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                            mass: 0.8,
                        }}
                        role="dialog"
                        aria-modal="true"
                        onClick={(e) => e.stopPropagation()}
                    >
                         {/* Close context could be provided here if needed, but we pass onOpenChange generally */}
                         <ModalContext.Provider value={{ onClose: () => onOpenChange(false) }}>
                            {children}
                         </ModalContext.Provider>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );

    return createPortal(modalContent, document.body);
};


const ModalContext = React.createContext<{ onClose: () => void }>({ onClose: () => { } });

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
    <h2 className={`text-2xl font-semibold text-text-primary ${className}`}>
        {children}
    </h2>
);

export const ModalDescription: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className = '' }) => (
    <p className={`text-sm text-text-secondary mt-2 ${className}`}>
        {children}
    </p>
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
}> = ({ children, className = '' }) => {
    const { onClose } = React.useContext(ModalContext);
    return (
        <div className={className} onClick={onClose}>
            {children}
        </div>
    );
};

/* ========================================
   CLOSE BUTTON ICON
   ======================================== */

export const ModalCloseButton: React.FC<{ className?: string }> = ({
    className = '',
}) => {
    const { onClose } = React.useContext(ModalContext);
    return (
        <motion.button
            onClick={onClose}
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
    );
};

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

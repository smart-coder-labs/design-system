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

/* ========================================
   STYLES & CONFIG
   ======================================== */

const sizeStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full', // Removed mx-4 to allow edge-to-edge
};

interface ModalConfig {
    wrapper: string;
    content: string;
    variant: string;
}

const modalConfig: Record<string, ModalConfig> = {
    center: {
        wrapper: 'items-center justify-center p-4',
        content: 'rounded-2xl',
        variant: 'center',
    },
    bottom: {
        wrapper: 'items-end justify-center',
        content: 'rounded-t-2xl',
        variant: 'bottom',
    },
    bottomFull: {
        wrapper: 'items-end justify-center',
        content: 'w-full rounded-t-2xl',
        variant: 'bottom',
    },
    left: {
        wrapper: 'items-stretch justify-start',
        content: 'h-full rounded-r-2xl',
        variant: 'left',
    },
    right: {
        wrapper: 'items-stretch justify-end',
        content: 'h-full rounded-l-2xl',
        variant: 'right',
    },
    fullscreen: {
        wrapper: 'items-center justify-center',
        content: 'w-full h-full rounded-none',
        variant: 'fullscreen',
    },
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

    // Animation variants
    const variants: Record<string, any> = {
        center: {
            initial: { opacity: 0, scale: 0.95, y: 0 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.95, y: 0 },
        },
        bottom: {
            initial: { opacity: 0, y: '100%' },
            animate: { opacity: 1, y: '0%' },
            exit: { opacity: 0, y: '100%' },
        },
        left: {
            initial: { opacity: 0, x: '-100%' },
            animate: { opacity: 1, x: '0%' },
            exit: { opacity: 0, x: '-100%' },
        },
        right: {
            initial: { opacity: 0, x: '100%' },
            animate: { opacity: 1, x: '0%' },
            exit: { opacity: 0, x: '100%' },
        },
        fullscreen: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
        },
    };

    // Determine config based on position
    const positionKey = position === 'bottom' && size === 'full' ? 'bottomFull' : position;
    const config = modalConfig[positionKey] || modalConfig.center;

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
                <div className={`fixed inset-0 z-50 flex isolate ${config.wrapper}`}>
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
                        className={`w-full ${sizeStyles[size]} bg-surface-primary shadow-xl p-6 relative z-50 focus:outline-none overflow-y-auto max-h-screen ${config.content}`}
                        initial={variants[config.variant]?.initial}
                        animate={variants[config.variant]?.animate}
                        exit={variants[config.variant]?.exit}
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

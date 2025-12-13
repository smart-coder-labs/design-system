import React from 'react';
export interface ModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    position?: 'center' | 'right' | 'left' | 'bottom' | 'fullscreen';
}
export declare const Modal: React.FC<ModalProps>;
export declare const ModalHeader: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
export declare const ModalTitle: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
export declare const ModalDescription: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
export declare const ModalContent: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
export declare const ModalFooter: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
export declare const ModalClose: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
export declare const ModalCloseButton: React.FC<{
    className?: string;
}>;
//# sourceMappingURL=Modal.d.ts.map
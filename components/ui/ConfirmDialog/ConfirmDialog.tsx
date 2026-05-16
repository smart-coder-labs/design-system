import React from 'react';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { ConfirmDialogProps } from './ConfirmDialog.types';

const Icons = {
    default: (
        <svg className="w-6 h-6 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    destructive: (
        <svg className="w-6 h-6 text-status-error" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    ),
    warning: (
        <svg className="w-6 h-6 text-status-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    ),
    info: (
        <svg className="w-6 h-6 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
};

const VariantStyles = {
    default: {
        iconBg: 'bg-accent-blue/10',
        confirmBtn: 'primary',
    },
    destructive: {
        iconBg: 'bg-status-error/10',
        confirmBtn: 'destructive',
    },
    warning: {
        iconBg: 'bg-status-warning/10',
        confirmBtn: 'primary',
    },
    info: {
        iconBg: 'bg-accent-blue/10',
        confirmBtn: 'primary',
    },
};

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    open,
    onOpenChange,
    title,
    description,
    confirmLabel = 'Confirm',
    cancelLabel = 'Cancel',
    onConfirm,
    onCancel,
    variant = 'default',
    isLoading = false,
    icon,
}) => {
    const handleConfirm = () => {
        onConfirm();
    };

    const handleCancel = () => {
        if (onCancel) onCancel();
        onOpenChange(false);
    };

    const styles = VariantStyles[variant];
    const Icon = icon || Icons[variant];

    const getButtonVariant = (v: string): any => {
        switch (v) {
            case 'destructive': return 'destructive';
            case 'warning': return 'primary';
            default: return 'primary';
        }
    };

    return (
        <Modal open={open} onOpenChange={onOpenChange} size="sm">
            <div className="flex flex-col sm:flex-row gap-4">
                <div className={`
                    flex-shrink-0 
                    w-12 h-12 
                    rounded-full 
                    flex items-center justify-center 
                    ${styles.iconBg}
                    mx-auto sm:mx-0
                `}>
                    {Icon}
                </div>

                <div className="flex-1 text-center sm:text-left">
                    <div className="mb-2">
                        <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
                    </div>
                    
                    {description && (
                        <div className="text-sm text-text-secondary mb-6">
                            {description}
                        </div>
                    )}

                    <div className="flex justify-center sm:justify-end gap-2">
                        <Button 
                            variant="ghost" 
                            onClick={handleCancel}
                            disabled={isLoading}
                        >
                            {cancelLabel}
                        </Button>
                        <Button 
                            variant={getButtonVariant(variant)}
                            onClick={handleConfirm}
                            loading={isLoading}
                        >
                            {confirmLabel}
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
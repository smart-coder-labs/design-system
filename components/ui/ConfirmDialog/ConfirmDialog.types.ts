export interface ConfirmDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description?: React.ReactNode;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm: () => void;
    onCancel?: () => void;
    variant?: 'default' | 'destructive' | 'warning' | 'info';
    isLoading?: boolean;
    icon?: React.ReactNode;
}
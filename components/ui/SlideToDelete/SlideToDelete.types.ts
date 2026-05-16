interface SlideToDeleteProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    onDelete: () => void | Promise<void>;
    onCancel?: () => void;
    deleteLabel?: string;
    cancelLabel?: string;
    deleteIcon?: LucideIcon;
    cancelIcon?: LucideIcon;
    threshold?: number;
    disabled?: boolean;
    confirmDelete?: boolean;
    confirmMessage?: string;
    variant?: 'default' | 'danger' | 'warning';
    className?: string;
}


interface SlideToDeleteItemProps extends SlideToDeleteProps {
    title?: string;
    subtitle?: string;
    avatar?: React.ReactNode;
    actions?: React.ReactNode;
}

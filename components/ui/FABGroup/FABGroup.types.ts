export type FABGroupPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'none';

export interface FABGroupAction {
    icon: React.ElementType;
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'tertiary';
}

export interface FABGroupProps {
    actions: FABGroupAction[];
    position?: FABGroupPosition;
    className?: string;
}
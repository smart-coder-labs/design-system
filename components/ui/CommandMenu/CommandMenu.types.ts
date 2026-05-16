export interface CommandMenuItem {
    id: string;
    label: string;
    description?: string;
    icon?: React.ReactNode;
    shortcut?: string;
    onSelect: () => void;
    keywords?: string[];
}

export interface CommandMenuGroup {
    title?: string;
    items: CommandMenuItem[];
}

export interface CommandMenuProps {
    isOpen: boolean;
    onClose: () => void;
    groups: CommandMenuGroup[];
    placeholder?: string;
    className?: string;
    emptyMessage?: string;
}
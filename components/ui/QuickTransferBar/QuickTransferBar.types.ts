interface QuickContact {
    id: string;
    name: string;
    avatarUrl?: string;
    initials?: string;
    lastTransfer?: string;
}


interface QuickTransferBarProps {
    contacts: QuickContact[];
    onSelect?: (contact: QuickContact) => void;
    onAddNew?: () => void;
    title?: string;
    className?: string;
}

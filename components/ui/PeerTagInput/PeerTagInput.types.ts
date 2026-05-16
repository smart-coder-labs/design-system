interface PeerTagContact {
    id: string;
    tag: string; // e.g. $username
    name: string;
    avatarUrl?: string;
    isVerified?: boolean;
    recentActivity?: string;
}


interface PeerTagInputProps {
    contacts: PeerTagContact[];
    placeholder?: string;
    className?: string;
    onSelect?: (contact: PeerTagContact) => void;
}

interface SplitContact {
    id: string;
    name: string;
    avatarUrl?: string;
    isUser?: boolean; // indicates if it's the current user
}


interface InteractiveBillSplitterProps {
    billAmount: number;
    currency?: string;
    friends: SplitContact[];
    className?: string;
    onSplitComplete?: (finalSplits: { contactId: string; amount: number }[]) => void;
}

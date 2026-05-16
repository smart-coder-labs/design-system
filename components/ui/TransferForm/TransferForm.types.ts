interface TransferRecipient {
    id: string;
    name: string;
    accountNumber?: string;
    bank?: string;
    avatarUrl?: string;
}


interface CurrencyOption {
    code: string;
    symbol: string;
    name: string;
    flag?: string;
}


interface TransferFormProps {
    recipients?: TransferRecipient[];
    currencies?: CurrencyOption[];
    availableBalance?: number;
    defaultCurrency?: string;
    onSubmit?: (data: { recipientId: string; amount: number; currency: string; concept: string }) => void;
    className?: string;
}

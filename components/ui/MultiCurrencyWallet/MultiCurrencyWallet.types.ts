interface WalletBalance {
    id: string;
    currencyCode: string;
    currencyName: string;
    flag: string;
    balance: number;
    isLocal?: boolean;
    color?: string; // Example: 'from-blue-600 to-blue-800'
}


interface MultiCurrencyWalletProps {
    wallets: WalletBalance[];
    className?: string;
    onAddFunds?: (id: string) => void;
    onSend?: (id: string) => void;
}

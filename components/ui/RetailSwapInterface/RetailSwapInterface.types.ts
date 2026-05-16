interface CryptoAsset {
    id: string;
    symbol: string;
    name: string;
    iconUrl?: string; // or emoji
    balance: number;
    priceUsd: number;
}


interface RetailSwapInterfaceProps {
    assets: CryptoAsset[];
    className?: string;
    onSwap?: (from: string, to: string, amount: number) => void;
}

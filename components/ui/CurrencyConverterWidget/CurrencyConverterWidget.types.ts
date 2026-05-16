export interface CurrencyOption {
    code: string;
    flag: string;
    name: string;
}

export interface CurrencyConverterWidgetProps {
    currencies: CurrencyOption[];
    exchangeRate: number;
    feePercentage: number;
    estimatedDelivery: string;
    className?: string;
    onConvert?: (from: string, to: string, amount: number) => void;
}
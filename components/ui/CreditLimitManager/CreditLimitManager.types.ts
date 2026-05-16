export interface CreditLimitManagerProps {
    maxLimit: number;
    initialLimit?: number;
    currentBalance?: number;
    currency?: string;
    className?: string;
    onSave?: (newLimit: number) => void;
}
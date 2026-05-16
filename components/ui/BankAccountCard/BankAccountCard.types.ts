/* ========================================
   BANK ACCOUNT CARD - TYPES
   ======================================== */

export type AccountType = 'checking' | 'savings' | 'credit' | 'investment';

export interface BankAccountCardProps {
    accountName?: string;
    accountType?: AccountType;
    accountNumber?: string;
    clabeOrIban?: string;
    balance?: number;
    currency?: string;
    locale?: string;
    hiddenByDefault?: boolean;
    onCopy?: (value: string) => void;
    onClick?: () => void;
    className?: string;
}
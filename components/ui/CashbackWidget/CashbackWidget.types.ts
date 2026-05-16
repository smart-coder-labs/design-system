export interface CashbackWidgetProps {
    earned: number;
    total?: number;
    currency?: string;
    locale?: string;
    percentage?: number;
    label?: string;
    period?: string;
    className?: string;
}
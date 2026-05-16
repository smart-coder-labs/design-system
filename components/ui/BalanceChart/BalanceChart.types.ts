/* ========================================
   BALANCE CHART - TYPES
   ======================================== */

export interface BalanceChartData {
    label: string;
    value: number;
}

export interface BalanceChartProps {
    data: BalanceChartData[];
    currency?: string;
    locale?: string;
    title?: string;
    maskable?: boolean;
    height?: number;
    className?: string;
}
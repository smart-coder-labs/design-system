export interface EarlyPaymentDiscountProps {
    totalInterestRemaining: number;
    remainingMonths: number;
    monthlyPayment: number;
    currency?: string;
    className?: string;
    onPayEarly?: (amountToPay: number, interestSaved: number) => void;
}
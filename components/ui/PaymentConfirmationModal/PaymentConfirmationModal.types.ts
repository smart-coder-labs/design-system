interface PaymentConfirmationData {
    recipientName: string;
    recipientBank?: string;
    recipientAccount?: string;
    amount: number;
    currency: string;
    concept?: string;
    fee?: number;
    estimatedArrival?: string;
}


interface PaymentConfirmationModalProps {
    open?: boolean;
    data: PaymentConfirmationData;
    locale?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    loading?: boolean;
    className?: string;
}

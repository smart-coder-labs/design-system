import React from 'react';
export type PaymentType = 'card' | 'applepay' | 'paypal' | 'bank';
export interface PaymentMethod {
    id: string;
    type: PaymentType;
    label?: string;
    details?: string;
    disabled?: boolean;
}
export interface PaymentMethodSelectorProps {
    methods: PaymentMethod[];
    value?: string;
    defaultValue?: string;
    onChange?: (id: string) => void;
    onAdd?: () => void;
    className?: string;
    /** show an Add payment method button */
    showAdd?: boolean;
}
export declare const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps>;
export default PaymentMethodSelector;
//# sourceMappingURL=PaymentMethodSelector.d.ts.map
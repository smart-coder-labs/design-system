import React from 'react';
export interface QuantitySelectorProps {
    value?: number;
    defaultValue?: number;
    onChange?: (v: number) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    compact?: boolean;
    className?: string;
    'aria-label'?: string;
}
export declare const QuantitySelector: React.FC<QuantitySelectorProps>;
export default QuantitySelector;
//# sourceMappingURL=QuantitySelector.d.ts.map
import React from 'react';
export interface CountersItem {
    value: string | number;
    label: string;
    /** Optional subtitle under the label */
    subtitle?: string;
}
export interface CountersProps {
    items: CountersItem[];
    className?: string;
    /** Toggle smaller padding */
    compact?: boolean;
}
export declare const Counters: React.FC<CountersProps>;
export default Counters;
//# sourceMappingURL=Counters.d.ts.map
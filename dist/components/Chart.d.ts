import React from 'react';
export interface ChartProps {
    type: 'pie' | 'donut' | 'line' | 'bar' | 'radial';
    data: {
        labels?: string[];
        datasets?: Array<{
            data: number[];
            backgroundColor?: string[];
        }>;
    };
    options?: any;
    className?: string;
    size?: number;
    activeIndex?: number | null;
    onSliceHover?: (index: number | null) => void;
}
export declare const Chart: React.FC<ChartProps>;
export default Chart;
//# sourceMappingURL=Chart.d.ts.map
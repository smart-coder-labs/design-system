import React from 'react';
export interface CountersListWithChartItem {
    label: string;
    value: number;
    percent: number;
    color?: string;
}
export interface CountersListWithChartProps {
    title?: string;
    items: CountersListWithChartItem[];
    chartType?: 'donut' | 'pie';
    className?: string;
}
export declare const CountersListWithChart: React.FC<CountersListWithChartProps>;
//# sourceMappingURL=CountersListWithChart.d.ts.map
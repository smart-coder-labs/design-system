import React from 'react';
export interface SparklineProps {
    data: number[];
    width?: number;
    height?: number;
    color?: string;
    fillColor?: string;
    strokeWidth?: number;
    showArea?: boolean;
    showDots?: boolean;
    showLastDot?: boolean;
    trend?: 'up' | 'down' | 'neutral';
    className?: string;
}
export declare const Sparkline: React.FC<SparklineProps>;
export default Sparkline;
//# sourceMappingURL=Sparkline.d.ts.map
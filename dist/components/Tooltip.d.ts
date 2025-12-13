import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
export declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
export interface TooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
    side?: 'top' | 'right' | 'bottom' | 'left';
    align?: 'start' | 'center' | 'end';
    delayDuration?: number;
    sideOffset?: number;
}
export declare const Tooltip: React.FC<TooltipProps>;
//# sourceMappingURL=Tooltip.d.ts.map
import * as React from "react";
type RangeSliderProps = {
    value?: [number, number];
    defaultValue?: [number, number];
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    onValueChange?: (value: [number, number]) => void;
    onValueCommit?: (value: [number, number]) => void;
    className?: string;
    trackClassName?: string;
    rangeClassName?: string;
    thumbClassName?: string;
};
declare const RangeSlider: React.ForwardRefExoticComponent<RangeSliderProps & React.RefAttributes<HTMLDivElement>>;
export { RangeSlider };
//# sourceMappingURL=RangeSlider.d.ts.map
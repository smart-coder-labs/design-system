import * as React from "react";
type SliderProps = {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    onValueChange?: (value: number) => void;
    onValueCommit?: (value: number) => void;
    className?: string;
    trackClassName?: string;
    rangeClassName?: string;
    thumbClassName?: string;
};
declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLDivElement>>;
export { Slider };
//# sourceMappingURL=Slider.d.ts.map